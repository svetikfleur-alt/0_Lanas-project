import { FondyPaymentProvider } from "./fondy-payment-provider";
import { PaymentProvider } from "./types";

export function getPaymentProvider(): PaymentProvider {
  return new FondyPaymentProvider();
}
