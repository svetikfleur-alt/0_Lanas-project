import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
let envLoaded = false;

function parseEnvFile(source) {
  const entries = {};

  source.split(/\r?\n/).forEach((rawLine) => {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) return;

    const separatorIndex = line.indexOf("=");
    if (separatorIndex === -1) return;

    const key = line.slice(0, separatorIndex).trim();
    let value = line.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    entries[key] = value;
  });

  return entries;
}

export function loadLocalEnv(root = rootDir) {
  if (envLoaded) return;

  [".env.local", ".env"].forEach((filename) => {
    const filePath = resolve(root, filename);
    if (!existsSync(filePath)) return;

    const values = parseEnvFile(readFileSync(filePath, "utf8"));
    Object.entries(values).forEach(([key, value]) => {
      if (process.env[key] === undefined) {
        process.env[key] = value;
      }
    });
  });

  envLoaded = true;
}

function toBoolean(value, fallback = false) {
  if (value === undefined) return fallback;
  return ["1", "true", "yes", "on"].includes(String(value).toLowerCase());
}

function toNumber(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

export function getAppConfig(root = rootDir) {
  loadLocalEnv(root);

  const siteHost = process.env.SITE_HOST || "127.0.0.1";
  const sitePort = toNumber(process.env.SITE_PORT || process.env.PORT, 4321);
  const sitePublicUrl =
    process.env.SITE_PUBLIC_URL || `http://${siteHost}:${sitePort}`;
  const telegramBotUsername = process.env.TELEGRAM_BOT_USERNAME || "";
  const telegramBotUrl =
    process.env.TELEGRAM_BOT_URL ||
    (telegramBotUsername ? `https://t.me/${telegramBotUsername}` : "");

  return {
    root,
    siteHost,
    sitePort,
    sitePublicUrl,
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN || "",
    telegramBotUsername,
    telegramBotUrl,
    lmStudioBaseUrl: process.env.LM_STUDIO_BASE_URL || "",
    lmStudioApiKey: process.env.LM_STUDIO_API_KEY || "",
    lmStudioModel: process.env.LM_STUDIO_MODEL || "",
    lmStudioAllowSelfSigned: toBoolean(process.env.LM_STUDIO_ALLOW_SELF_SIGNED, true),
    botDbPath: resolve(root, process.env.BOT_DB_PATH || "./data/styleself.sqlite"),
    botPollTimeoutSec: toNumber(process.env.BOT_POLL_TIMEOUT_SEC, 25),
  };
}
