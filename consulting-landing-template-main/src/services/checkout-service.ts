import { getPaymentProvider } from "@/providers/payment";
import { CheckoutSession, Locale } from "@/types/identity";

export async function createCheckoutSession(input: {
  locale: Locale;
  customerEmail?: string;
}): Promise<CheckoutSession> {
  return getPaymentProvider().createCheckout({
    locale: input.locale,
    productId: "visual-identity-lab-mvp",
    amount: 14900,
    currency: "USD",
    customerEmail: input.customerEmail,
  });
}
