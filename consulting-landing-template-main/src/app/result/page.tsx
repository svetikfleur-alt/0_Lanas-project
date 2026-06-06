import { PageShell } from "@/components/shell";
import { ResultView } from "@/features/result/result-view";
import { getArchetypeContent } from "@/services/archetypes";

export default function ResultPage() {
  const archetypes = {
    queen: getArchetypeContent("queen"),
    mentor: getArchetypeContent("mentor"),
    creator: getArchetypeContent("creator"),
  };

  return (
    <PageShell
      title="Identity report"
      subtitle="AI analysis resolves into an archetype, visual direction and content recommendations."
    >
      <ResultView archetypes={archetypes} />
    </PageShell>
  );
}
