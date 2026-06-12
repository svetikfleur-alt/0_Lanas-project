import { PageShell } from "@/components/shell";
import { ResultView } from "@/features/result/result-view";
import { getDictionary } from "@/i18n/dictionaries";
import { getAllArchetypes } from "@/services/archetypes";
import { Locale } from "@/types/identity";

export default async function ResultPage({ params }: { params: { locale: Locale } }) {
  const dictionary = getDictionary(params.locale);
  const archetypes = await getAllArchetypes(params.locale);

  return (
    <PageShell
      dictionary={dictionary}
      locale={params.locale}
      title={dictionary.result.title}
      subtitle={dictionary.result.subtitle}
    >
      <ResultView
        archetypes={archetypes}
        locale={params.locale}
        labels={{
          emptyTitle: dictionary.result.emptyTitle,
          emptyBody: dictionary.result.emptyBody,
          backToQuiz: dictionary.result.backToQuiz,
          strengths: dictionary.result.strengths,
          blindSpots: dictionary.result.blindSpots,
          visualDirection: dictionary.result.visualDirection,
          businessDirection: dictionary.result.businessDirection,
          archetypeGuide: dictionary.result.archetypeGuide,
          visualRecommendations: dictionary.result.visualRecommendations,
          businessRecommendations: dictionary.result.businessRecommendations,
          promptIdeas: dictionary.result.promptIdeas,
          cta: dictionary.result.cta,
        }}
      />
    </PageShell>
  );
}
