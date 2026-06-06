import { CheckoutSession } from "@/types/identity";

export type CreateCheckoutPayload = {
  amount: number;
  currency: string;
  description: string;
  email: string;
};

export interface PaymentProvider {
  createCheckout(payload: CreateCheckoutPayload): Promise<CheckoutSession>;
  verifyWebhook(payload: unknown): Promise<{ isValid: boolean; orderId?: string }>;
}
