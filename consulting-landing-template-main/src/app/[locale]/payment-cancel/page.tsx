import Link from "next/link";

import { PageShell } from "@/components/shell";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/types/identity";

export default function PaymentCancelPage({ params }: { params: { locale: Locale } }) {
  const dictionary = getDictionary(params.locale);

  return (
    <PageShell
      dictionary={dictionary}
      locale={params.locale}
      title={dictionary.cancel.title}
      subtitle={dictionary.cancel.subtitle}
    >
      <div className="rounded-[32px] bg-white p-8 shadow-card">
        <p className="max-w-2xl text-ink/75">{dictionary.cancel.body}</p>
        <Link href={`/${params.locale}/checkout`} className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-white">
          {dictionary.cancel.backToCheckout}
        </Link>
      </div>
    </PageShell>
  );
}
