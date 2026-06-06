import { DeliveryPayload, DeliveryReceipt } from "@/types/identity";

import { DeliveryProvider } from "./types";

export class TelegramDeliveryProvider implements DeliveryProvider {
  async deliver(payload: DeliveryPayload): Promise<DeliveryReceipt> {
    const base = process.env.TELEGRAM_CHANNEL_ID ?? "@visualidentitylab";
    const suffix = payload.orderId.slice(-6);

    return {
      channel: "telegram",
      inviteLink: `https://t.me/${base.replace("@", "")}?start=${suffix}`,
      accessToken: `tg_${payload.orderId}`,
    };
  }
}
