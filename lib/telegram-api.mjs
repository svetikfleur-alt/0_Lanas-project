function splitMessage(text, maxLength = 3500) {
  if (text.length <= maxLength) return [text];

  const chunks = [];
  let remaining = text;

  while (remaining.length > maxLength) {
    const slice = remaining.slice(0, maxLength);
    const breakIndex = Math.max(slice.lastIndexOf("\n\n"), slice.lastIndexOf("\n"));
    const cutIndex = breakIndex > 300 ? breakIndex : maxLength;
    chunks.push(remaining.slice(0, cutIndex).trim());
    remaining = remaining.slice(cutIndex).trim();
  }

  if (remaining) {
    chunks.push(remaining);
  }

  return chunks;
}

export class TelegramApi {
  constructor(token) {
    this.baseUrl = `https://api.telegram.org/bot${token}`;
  }

  async request(method, payload) {
    const response = await fetch(`${this.baseUrl}/${method}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload || {}),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok || !data?.ok) {
      throw new Error(data?.description || `Telegram API request failed: ${method}`);
    }

    return data.result;
  }

  getMe() {
    return this.request("getMe");
  }

  deleteWebhook() {
    return this.request("deleteWebhook", { drop_pending_updates: false });
  }

  getUpdates(offset, timeoutSec) {
    return this.request("getUpdates", {
      offset,
      timeout: timeoutSec,
      allowed_updates: ["message"],
    });
  }

  sendChatAction(chatId, action = "typing") {
    return this.request("sendChatAction", {
      chat_id: chatId,
      action,
    });
  }

  async sendMessage(chatId, text, options = {}) {
    const chunks = splitMessage(text);

    for (const chunk of chunks) {
      await this.request("sendMessage", {
        chat_id: chatId,
        text: chunk,
        disable_web_page_preview: true,
        ...options,
      });
    }
  }
}
