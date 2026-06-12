import { getArchetypeContent } from "@/services/archetypes";
import { compilePrompt } from "@/services/prompt-compiler";
import { getImageProvider } from "@/providers/image";
import { GeneratedImage, IdentityAnalysis, Locale, PromptCompilerOutput } from "@/types/identity";

export async function generateImageConcept(
  analysis: IdentityAnalysis,
  locale: Locale,
): Promise<{ image: GeneratedImage; prompt: PromptCompilerOutput }> {
  const archetype = await getArchetypeContent(locale, analysis.archetype);
  const prompt = compilePrompt(analysis, archetype, locale);
  const image = await getImageProvider().generateImage(prompt);

  return { image, prompt };
}
