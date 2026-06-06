import { PageShell } from "@/components/shell";
import { GenerateView } from "@/features/generate/generate-view";

export default function GeneratePage() {
  return (
    <PageShell
      title="Image generation"
      subtitle="PromptCompiler turns analysis into a structured prompt and hands it to the image provider."
    >
      <GenerateView />
    </PageShell>
  );
}
