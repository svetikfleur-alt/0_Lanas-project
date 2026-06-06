import Link from "next/link";

import { PageShell } from "@/components/shell";

export default function PaymentCancelPage() {
  return (
    <PageShell
      title="Payment cancelled"
      subtitle="A dedicated failure route is present for the hosted checkout flow."
    >
      <div className="rounded-[32px] bg-white p-8 shadow-card">
        <p className="text-lg text-ink/75">
          Payment was not completed. The flow can safely return the user to checkout.
        </p>
        <Link href="/checkout" className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-white">
          Return to checkout
        </Link>
      </div>
    </PageShell>
  );
}
