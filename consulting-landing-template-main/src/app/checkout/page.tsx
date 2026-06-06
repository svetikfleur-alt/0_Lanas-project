import { PageShell } from "@/components/shell";
import { CheckoutForm } from "@/features/checkout/checkout-form";

export default function CheckoutPage() {
  return (
    <PageShell
      title="Payment"
      subtitle="Provider abstraction is in place for Fondy now and alternate gateways later."
    >
      <CheckoutForm />
    </PageShell>
  );
}
