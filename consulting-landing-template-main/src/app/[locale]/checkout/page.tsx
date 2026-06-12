import { PageShell } from "@/components/shell";
import { CheckoutForm } from "@/features/checkout/checkout-form";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/types/identity";

export default function CheckoutPage({ params }: { params: { locale: Locale } }) {
  const dictionary = getDictionary(params.locale);

  return (
    <PageShell
      dictionary={dictionary}
      locale={params.locale}
      title={dictionary.checkout.title}
      subtitle={dictionary.checkout.subtitle}
    >
      <CheckoutForm
        locale={params.locale}
        labels={{
          emptyTitle: dictionary.checkout.emptyTitle,
          emptyBody: dictionary.checkout.emptyBody,
          backToGenerate: dictionary.checkout.backToGenerate,
          productTitle: dictionary.checkout.productTitle,
          productDescription: dictionary.checkout.productDescription,
          priceLabel: dictionary.checkout.priceLabel,
          providerLabel: dictionary.checkout.providerLabel,
          emailLabel: dictionary.checkout.emailLabel,
          emailPlaceholder: dictionary.checkout.emailPlaceholder,
          pay: dictionary.checkout.pay,
          redirecting: dictionary.checkout.redirecting,
        }}
      />
    </PageShell>
  );
}
