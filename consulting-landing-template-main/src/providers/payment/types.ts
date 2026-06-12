import { CheckoutSession, Locale, Order } from "@/types/identity";

export type CreateCheckoutInput = {
  locale: Locale;
  productId: string;
  amount: number;
  currency: string;
  customerEmail?: string;
};

export type VerifyWebhookResult = {
  isValid: boolean;
  orderId?: string;
  status?: Order["status"];
};

export interface PaymentProvider {
  createCheckout(input: CreateCheckoutInput): Promise<CheckoutSession>;
  verifyWebhook(payload: unknown): Promise<VerifyWebhookResult>;
  getProviderName(): string;
}
