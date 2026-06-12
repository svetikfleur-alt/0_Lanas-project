import { PageShell } from "@/components/shell";
import { PaymentSuccessView } from "@/features/checkout/payment-success-view";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/types/identity";

export default function PaymentSuccessPage({
  params,
  searchParams,
}: {
  params: { locale: Locale };
  searchParams: { orderId?: string };
}) {
  const dictionary = getDictionary(params.locale);

  return (
    <PageShell
      dictionary={dictionary}
      locale={params.locale}
      title={dictionary.success.title}
      subtitle={dictionary.success.subtitle}
    >
      <PaymentSuccessView
        locale={params.locale}
        orderId={searchParams.orderId}
        labels={{
          thanks: dictionary.success.thanks,
          description: dictionary.success.description,
          loadingDelivery: dictionary.success.loadingDelivery,
          accessReady: dictionary.success.accessReady,
          accessPending: dictionary.success.accessPending,
          accessButton: dictionary.success.accessButton,
          backGenerate: dictionary.success.backGenerate,
        }}
      />
    </PageShell>
  );
}
