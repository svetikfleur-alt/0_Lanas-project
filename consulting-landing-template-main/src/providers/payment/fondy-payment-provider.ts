import { randomUUID } from "node:crypto";

import { saveOrder } from "@/services/order-store";
import { CheckoutSession, Order } from "@/types/identity";

import { CreateCheckoutInput, PaymentProvider, VerifyWebhookResult } from "./types";

export class FondyPaymentProvider implements PaymentProvider {
  async createCheckout(input: CreateCheckoutInput): Promise<CheckoutSession> {
    const orderId = randomUUID();
    const order: Order = {
      orderId,
      productId: input.productId,
      amount: input.amount,
      currency: input.currency,
      customerEmail: input.customerEmail,
      provider: this.getProviderName(),
      status: "pending",
      createdAt: new Date().toISOString(),
      locale: input.locale,
    };

    saveOrder(order);

    const appBaseUrl = process.env.APP_BASE_URL ?? "http://localhost:3000";
    const checkoutUrl = new URL("/api/payments/hosted", appBaseUrl);
    checkoutUrl.searchParams.set("orderId", orderId);
    checkoutUrl.searchParams.set("locale", input.locale);

    return {
      orderId,
      checkoutUrl: checkoutUrl.toString(),
      provider: this.getProviderName(),
    };
  }

  async verifyWebhook(payload: unknown): Promise<VerifyWebhookResult> {
    const body = (payload ?? {}) as Record<string, unknown>;
    const orderId = typeof body.order_id === "string" ? body.order_id : undefined;
    const status = typeof body.order_status === "string" ? body.order_status : undefined;

    if (!orderId) {
      return { isValid: false };
    }

    if (process.env.FONDY_SECRET_KEY) {
      return {
        isValid: true,
        orderId,
        status: status === "approved" ? "paid" : "failed",
      };
    }

    return {
      isValid: true,
      orderId,
      status: "paid",
    };
  }

  getProviderName(): string {
    return "fondy";
  }
}
