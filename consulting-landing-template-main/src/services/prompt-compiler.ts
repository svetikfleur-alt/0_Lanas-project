import { IdentityAnalysis, PromptCompilerOutput } from "@/types/identity";

export function compilePrompt(analysis: IdentityAnalysis): PromptCompilerOutput {
  const style = analysis.visualDirection[0] ?? "elevated personal branding";
  const emotion = analysis.visualDirection[1] ?? "grounded confidence";
  const environment = analysis.visualDirection[2] ?? "studio portrait setting";

  const fullPrompt = [
    `Subject: woman embodying the ${analysis.archetype} archetype`,
    `Style: ${style}`,
    "Clothing: refined editorial wardrobe with premium textures",
    `Environment: ${environment}`,
    "Lighting: soft cinematic daylight with sculpted highlights",
    `Emotion: ${emotion}`,
    "Composition: medium and close-up shots for a personal brand campaign",
    `Brief: ${analysis.imageBrief}`,
  ].join(". ");

  return {
    subject: `woman embodying the ${analysis.archetype} archetype`,
    style,
    clothing: "refined editorial wardrobe with premium textures",
    environment,
    lighting: "soft cinematic daylight with sculpted highlights",
    emotion,
    composition: "medium and close-up shots for a personal brand campaign",
    fullPrompt,
  };
}
