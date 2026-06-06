import { CheckoutSession } from "@/types/identity";

import { CreateCheckoutPayload, PaymentProvider } from "./types";

export class FondyPaymentProvider implements PaymentProvider {
  async createCheckout(payload: CreateCheckoutPayload): Promise<CheckoutSession> {
    const orderId = `fondy_${Date.now()}`;
    const baseUrl = process.env.APP_BASE_URL ?? "http://localhost:3000";
    const params = new URLSearchParams({
      orderId,
      email: payload.email,
      amount: String(payload.amount),
    });

    return {
      orderId,
      provider: "fondy",
      checkoutUrl: `${baseUrl}/payment-success?${params.toString()}`,
    };
  }

  async verifyWebhook(payload: unknown): Promise<{ isValid: boolean; orderId?: string }> {
    const orderId =
      typeof payload === "object" && payload !== null && "order_id" in payload
        ? String(payload.order_id)
        : undefined;

    return {
      isValid: Boolean(orderId),
      orderId,
    };
  }
}
