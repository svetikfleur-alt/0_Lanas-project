import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";
import { getAppConfig } from "./lib/env.mjs";

const root = resolve(".");
const args = process.argv.slice(2);
const appConfig = getAppConfig(root);

function readFlag(flag, fallback) {
  const direct = args.findIndex((item) => item === flag);
  if (direct !== -1 && args[direct + 1]) {
    return args[direct + 1];
  }

  const inline = args.find((item) => item.startsWith(`${flag}=`));
  if (inline) {
    return inline.slice(flag.length + 1);
  }

  return fallback;
}

const host = readFlag("--host", appConfig.siteHost);
const port = Number(readFlag("--port", process.env.PORT || String(appConfig.sitePort)));

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
};

function getFilePath(urlPath) {
  const normalizedPath = normalize(decodeURIComponent(urlPath).replace(/^\/+/, ""));
  const tentativePath = resolve(root, normalizedPath || "index.html");

  if (!tentativePath.startsWith(root)) {
    return null;
  }

  if (existsSync(tentativePath) && statSync(tentativePath).isDirectory()) {
    return join(tentativePath, "index.html");
  }

  return tentativePath;
}

function sendJson(response, payload, statusCode = 200) {
  response.writeHead(statusCode, {
    "Cache-Control": "no-store",
    "Content-Type": "application/json; charset=utf-8",
  });
  response.end(JSON.stringify(payload, null, 2));
}

const server = createServer((request, response) => {
  const requestUrl = new URL(request.url || "/", `http://${request.headers.host}`);

  if (requestUrl.pathname === "/app-config.js") {
    response.writeHead(200, {
      "Cache-Control": "no-store",
      "Content-Type": "text/javascript; charset=utf-8",
    });
    response.end(
      `window.__APP_CONFIG__ = Object.freeze(${JSON.stringify({
        siteUrl: appConfig.sitePublicUrl,
        telegramBotUsername: appConfig.telegramBotUsername,
        telegramBotUrl: appConfig.telegramBotUrl,
      })});`,
    );
    return;
  }

  if (requestUrl.pathname === "/api/health") {
    sendJson(response, {
      ok: true,
      site: {
        host,
        port,
        publicUrl: appConfig.sitePublicUrl,
      },
      telegram: {
        configured: Boolean(appConfig.telegramBotToken),
        username: appConfig.telegramBotUsername || null,
        url: appConfig.telegramBotUrl || null,
      },
      lmStudio: {
        configured: Boolean(appConfig.lmStudioBaseUrl && appConfig.lmStudioModel),
        baseUrl: appConfig.lmStudioBaseUrl || null,
        model: appConfig.lmStudioModel || null,
      },
    });
    return;
  }

  let filePath = getFilePath(requestUrl.pathname);

  if (!filePath || !existsSync(filePath)) {
    filePath = join(root, "index.html");
  }

  const extension = extname(filePath).toLowerCase();
  response.writeHead(200, {
    "Cache-Control": "no-store",
    "Content-Type": mimeTypes[extension] || "application/octet-stream",
  });

  createReadStream(filePath).pipe(response);
});

server.listen(port, host, () => {
  console.log(`StyleSelf landing is running on http://${host}:${port}`);
});
