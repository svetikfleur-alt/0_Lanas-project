import { getPaymentProvider } from "@/providers/payment";
import { CheckoutSession } from "@/types/identity";

export async function createCheckoutSession(email: string): Promise<CheckoutSession> {
  return getPaymentProvider().createCheckout({
    amount: 14900,
    currency: "USD",
    description: "Visual Identity Lab MVP package",
    email,
  });
}
