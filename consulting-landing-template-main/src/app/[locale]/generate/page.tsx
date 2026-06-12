import { PageShell } from "@/components/shell";
import { GenerateView } from "@/features/generate/generate-view";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/types/identity";

export default function GeneratePage({ params }: { params: { locale: Locale } }) {
  const dictionary = getDictionary(params.locale);

  return (
    <PageShell
      dictionary={dictionary}
      locale={params.locale}
      title={dictionary.generate.title}
      subtitle={dictionary.generate.subtitle}
    >
      <GenerateView
        locale={params.locale}
        labels={{
          emptyTitle: dictionary.generate.emptyTitle,
          emptyBody: dictionary.generate.emptyBody,
          backToResult: dictionary.generate.backToResult,
          compile: dictionary.generate.compile,
          generating: dictionary.generate.generating,
          generate: dictionary.generate.generate,
          promptDetails: dictionary.generate.promptDetails,
          subject: dictionary.generate.subject,
          style: dictionary.generate.style,
          clothing: dictionary.generate.clothing,
          environment: dictionary.generate.environment,
          lighting: dictionary.generate.lighting,
          emotion: dictionary.generate.emotion,
          composition: dictionary.generate.composition,
          negativePrompt: dictionary.generate.negativePrompt,
          ctaCheckout: dictionary.generate.ctaCheckout,
        }}
      />
    </PageShell>
  );
}
