import { botCopy, interviewQuestions, languageKeyboard, resolveLocale } from "./lib/content.mjs";
import { getAppConfig } from "./lib/env.mjs";
import { buildFallbackSummary, generateShootSummary } from "./lib/lm-studio.mjs";
import { SessionStore } from "./lib/session-store.mjs";
import { TelegramApi } from "./lib/telegram-api.mjs";

const config = getAppConfig();

if (!config.telegramBotToken) {
  throw new Error("TELEGRAM_BOT_TOKEN is required to run the bot");
}

const store = new SessionStore(config.botDbPath);
const telegram = new TelegramApi(config.telegramBotToken);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getCopy(locale) {
  return botCopy[locale] || botCopy.ru;
}

function getQuestion(locale, index) {
  return interviewQuestions[index]?.prompts?.[locale] || interviewQuestions[index]?.prompts?.ru;
}

function getStartLocale(text) {
  if (!text?.startsWith("/start")) return null;
  const payload = text.split(/\s+/, 2)[1] || "";
  const match = payload.match(/landing[_-](ru|uk|en|es)/i);
  return match?.[1]?.toLowerCase() || null;
}

function createBaseSession(message, locale = null) {
  return store.createSession(message.chat.id, {
    locale,
    stage: locale ? "collecting" : "awaiting-locale",
    questionIndex: 0,
    answers: {},
    summaryText: "",
    source: message.text?.includes("landing") ? "landing" : "direct",
    userFirstName: message.from?.first_name || "",
    username: message.from?.username || "",
    completedAt: null,
  });
}

async function askNextQuestion(session, removeKeyboard = false) {
  const text = getQuestion(session.locale, session.questionIndex);
  await telegram.sendMessage(session.chatId, text, removeKeyboard ? { reply_markup: { remove_keyboard: true } } : {});
}

async function startFlow(message) {
  const payloadLocale = getStartLocale(message.text);
  let session = createBaseSession(message, payloadLocale);
  session = store.saveSession(session);

  const copy = getCopy(payloadLocale || "ru");
  await telegram.sendMessage(message.chat.id, copy.welcome);

  if (!payloadLocale) {
    await telegram.sendMessage(message.chat.id, copy.languagePrompt, {
      reply_markup: languageKeyboard,
    });
    return;
  }

  await telegram.sendMessage(message.chat.id, getCopy(payloadLocale).languageConfirmed, {
    reply_markup: { remove_keyboard: true },
  });
  await askNextQuestion(session);
}

async function handleLocaleSelection(message, session) {
  const locale = resolveLocale(message.text);
  if (!locale) {
    await telegram.sendMessage(message.chat.id, getCopy("ru").invalidLanguage, {
      reply_markup: languageKeyboard,
    });
    return;
  }

  const nextSession = store.saveSession({
    ...session,
    locale,
    stage: "collecting",
    questionIndex: 0,
    userFirstName: message.from?.first_name || session.userFirstName,
    username: message.from?.username || session.username,
  });

  await telegram.sendMessage(message.chat.id, getCopy(locale).languageConfirmed, {
    reply_markup: { remove_keyboard: true },
  });
  await askNextQuestion(nextSession);
}

async function completeInterview(session) {
  const locale = session.locale || "ru";
  const copy = getCopy(locale);

  await telegram.sendChatAction(session.chatId, "typing");
  await telegram.sendMessage(session.chatId, copy.generating);

  let summary;
  try {
    summary = await generateShootSummary(config, session);
  } catch (error) {
    summary = {
      content: buildFallbackSummary(locale, session.answers),
      source: "fallback",
      error: error instanceof Error ? error.message : String(error),
    };
  }

  const completedSession = store.saveSession({
    ...session,
    stage: "completed",
    summaryText: summary.content,
    completedAt: new Date().toISOString(),
  });

  console.log(
    `[bot] completed chat=${completedSession.chatId} locale=${completedSession.locale} source=${summary.source}${summary.error ? ` error="${summary.error}"` : ""}`,
  );

  await telegram.sendMessage(completedSession.chatId, `${copy.summaryReady}\n\n${completedSession.summaryText}`);
  await telegram.sendMessage(completedSession.chatId, copy.restartHint);
}

async function handleInterviewAnswer(message, session) {
  if (session.stage === "generating") {
    await telegram.sendMessage(message.chat.id, getCopy(session.locale).busy);
    return;
  }

  const question = interviewQuestions[session.questionIndex];
  if (!question) {
    await telegram.sendMessage(message.chat.id, getCopy(session.locale).summaryMissing);
    return;
  }

  const nextQuestionIndex = session.questionIndex + 1;
  const nextSession = store.saveSession({
    ...session,
    stage: nextQuestionIndex >= interviewQuestions.length ? "generating" : "collecting",
    questionIndex: nextQuestionIndex,
    answers: {
      ...session.answers,
      [question.key]: message.text.trim(),
    },
    userFirstName: message.from?.first_name || session.userFirstName,
    username: message.from?.username || session.username,
  });

  if (nextQuestionIndex >= interviewQuestions.length) {
    await completeInterview(nextSession);
    return;
  }

  await askNextQuestion(nextSession);
}

async function handleMessage(message) {
  if (!message?.chat?.id || !message.text) return;

  const chatId = message.chat.id;
  const text = message.text.trim();

  if (text.startsWith("/start")) {
    await startFlow(message);
    return;
  }

  if (text === "/help") {
    const existingSession = store.getSession(chatId);
    await telegram.sendMessage(chatId, getCopy(existingSession?.locale || "ru").help);
    return;
  }

  if (text === "/reset") {
    const existingSession = store.getSession(chatId);
    const resetSession = store.saveSession(
      createBaseSession(message, existingSession?.locale || null),
    );
    await telegram.sendMessage(chatId, getCopy(resetSession.locale || "ru").resetDone);

    if (!resetSession.locale) {
      await telegram.sendMessage(chatId, getCopy("ru").languagePrompt, {
        reply_markup: languageKeyboard,
      });
      return;
    }

    await askNextQuestion(resetSession, true);
    return;
  }

  if (text === "/summary") {
    const existingSession = store.getSession(chatId);
    if (!existingSession?.summaryText) {
      await telegram.sendMessage(chatId, getCopy(existingSession?.locale || "ru").summaryMissing);
      return;
    }

    await telegram.sendMessage(chatId, existingSession.summaryText);
    return;
  }

  const session = store.getSession(chatId) || store.saveSession(createBaseSession(message));

  if (!session.locale || session.stage === "awaiting-locale") {
    await handleLocaleSelection(message, session);
    return;
  }

  await handleInterviewAnswer(message, session);
}

async function main() {
  const me = await telegram.getMe();
  await telegram.deleteWebhook();

  console.log(
    `[bot] polling as @${me.username} with LM model "${config.lmStudioModel || "fallback-only"}"`,
  );

  let offset = 0;

  while (true) {
    try {
      const updates = await telegram.getUpdates(offset, config.botPollTimeoutSec);

      for (const update of updates) {
        offset = update.update_id + 1;
        await handleMessage(update.message);
      }
    } catch (error) {
      console.error("[bot] polling error:", error instanceof Error ? error.message : error);
      await sleep(3000);
    }
  }
}

main().catch((error) => {
  console.error("[bot] fatal:", error instanceof Error ? error.message : error);
  process.exit(1);
});
