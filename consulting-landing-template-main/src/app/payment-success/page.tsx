import Link from "next/link";

import { PageShell } from "@/components/shell";

export default function PaymentSuccessPage() {
  return (
    <PageShell
      title="Payment success"
      subtitle="The payment step completed. Telegram delivery can be attached to this event."
    >
      <div className="rounded-[32px] bg-white p-8 shadow-card">
        <p className="text-lg text-ink/75">
          Order accepted. The next backend step is Telegram delivery with invite link and
          access token generation.
        </p>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-copper px-6 py-3 text-white">
          Back to landing
        </Link>
      </div>
    </PageShell>
  );
}
