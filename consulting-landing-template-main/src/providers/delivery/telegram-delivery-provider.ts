import { DeliveryPayload, DeliveryReceipt } from "@/types/identity";

import { DeliveryProvider } from "./types";

export class TelegramDeliveryProvider implements DeliveryProvider {
  async deliver(payload: DeliveryPayload): Promise<DeliveryReceipt> {
    const inviteLink = process.env.TELEGRAM_CHANNEL_INVITE_LINK;

    if (!inviteLink) {
      return {
        channel: "telegram",
        message: `Telegram delivery is not configured for order ${payload.orderId}.`,
      };
    }

    return {
      channel: "telegram",
      inviteLink,
      accessToken: `telegram_${payload.orderId}`,
      message: `Telegram invite prepared for locale ${payload.locale}.`,
    };
  }

  getProviderName(): string {
    return "telegram";
  }
}
