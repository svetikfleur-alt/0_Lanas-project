import { botCopy, getLocaleName, interviewQuestions } from "./content.mjs";

const summarySections = {
  ru: [
    "1. Визуальное ядро",
    "2. Что усиливать",
    "3. Чего избегать",
    "4. Бриф на съёмку",
    "5. Следующий шаг",
  ],
  uk: [
    "1. Візуальне ядро",
    "2. Що підсилювати",
    "3. Чого уникати",
    "4. Brief на зйомку",
    "5. Наступний крок",
  ],
  en: [
    "1. Visual core",
    "2. What to amplify",
    "3. What to avoid",
    "4. Shoot brief",
    "5. Next step",
  ],
  es: [
    "1. Núcleo visual",
    "2. Qué potenciar",
    "3. Qué evitar",
    "4. Brief de la sesión",
    "5. Siguiente paso",
  ],
};

function formatAnswers(locale, answers) {
  return interviewQuestions
    .map((question) => {
      const label = question.labels[locale];
      const answer = answers[question.key] || "—";
      return `- ${label}: ${answer}`;
    })
    .join("\n");
}

function trimSummary(text) {
  const cleaned = text
    .replace(/^```[\s\S]*?\n/, "")
    .replace(/```$/m, "")
    .trim();

  if (cleaned.length <= 3200) {
    return cleaned;
  }

  return `${cleaned.slice(0, 3190).trim()}\n…`;
}

export function buildFallbackSummary(locale, answers) {
  const labels = summarySections[locale] || summarySections.ru;
  const copy = botCopy[locale] || botCopy.ru;

  const visualCore = [
    answers.identity_read,
    answers.desired_feeling,
  ]
    .filter(Boolean)
    .join(" ");

  const amplify = [
    answers.signature_details,
    answers.shoot_context,
  ]
    .filter(Boolean)
    .join(" ");

  const avoid = answers.not_you || "—";
  const shootBrief = [answers.constraints, answers.dream_result]
    .filter(Boolean)
    .join(" ");

  return [
    copy.fallbackTag,
    "",
    labels[0],
    visualCore || "Собери образ вокруг того, как ты хочешь считываться и чувствовать себя в кадре.",
    "",
    labels[1],
    amplify || "Опирайся на уже свои детали, а не на случайные тренды.",
    "",
    labels[2],
    avoid,
    "",
    labels[3],
    shootBrief || "Зафиксируй локацию, настроение, одежду и сценарий кадра до разговора с фотографом.",
    "",
    labels[4],
    locale === "ru"
      ? "Возьми этот текст как основу ТЗ для фотографа, стилизации и moodboard."
      : locale === "uk"
        ? "Візьми цей текст як основу ТЗ для фотографа, стилізації та moodboard."
        : locale === "en"
          ? "Use this text as your first brief for the photographer, styling, and moodboard."
          : "Usa este texto como base del brief para el fotógrafo, el styling y el moodboard.",
  ].join("\n");
}

export async function generateShootSummary(config, session) {
  const locale = session.locale || "ru";

  if (!config.lmStudioBaseUrl || !config.lmStudioModel) {
    return {
      content: buildFallbackSummary(locale, session.answers),
      source: "fallback",
      error: "LM Studio config is missing",
    };
  }

  if (config.lmStudioAllowSelfSigned && config.lmStudioBaseUrl.startsWith("https://")) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  }

  const response = await fetch(`${config.lmStudioBaseUrl.replace(/\/$/, "")}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.lmStudioApiKey}`,
    },
    body: JSON.stringify({
      model: config.lmStudioModel,
      temperature: 0.45,
      max_tokens: 900,
      messages: [
        {
          role: "system",
          content: [
            "You are StyleSelf, a senior visual identity strategist.",
            `Write strictly in ${getLocaleName(locale)}.`,
            "Build a concise but specific photoshoot brief from the interview answers.",
            "Use exactly 5 numbered sections with short titles.",
            `Use these section titles: ${summarySections[locale].join(" | ")}.`,
            "Do not use tables.",
            "Do not mention that you are an AI.",
            "Stay under 2200 characters.",
          ].join(" "),
        },
        {
          role: "user",
          content: [
            "Interview answers:",
            formatAnswers(locale, session.answers),
            "",
            "Return a practical brief that can be handed to a photographer.",
          ].join("\n"),
        },
      ],
    }),
    signal: AbortSignal.timeout(20000),
  });

  if (!response.ok) {
    throw new Error(`LM Studio request failed with status ${response.status}`);
  }

  const data = await response.json();
  const content = data?.choices?.[0]?.message?.content?.trim();

  if (!content) {
    throw new Error("LM Studio returned an empty response");
  }

  return {
    content: trimSummary(content),
    source: "lm-studio",
    error: null,
  };
}
