import { ArchetypeContent, IdentityAnalysis, Locale, PromptCompilerOutput } from "@/types/identity";

export function compilePrompt(
  analysis: IdentityAnalysis,
  archetype?: ArchetypeContent,
  _locale?: Locale,
): PromptCompilerOutput {
  const legacyVisualDirection = normalizeLegacyVisualDirection(analysis.visualDirection);
  const directVisualDirection =
    typeof analysis.visualDirection === "string" ? analysis.visualDirection : undefined;
  const style =
    archetype?.visualRecommendations[0] ??
    legacyVisualDirection.style ??
    directVisualDirection ??
    "elevated personal branding";
  const clothing =
    archetype?.visualRecommendations[1] ?? "Editorial wardrobe with premium tactile textures";
  const environment =
    archetype?.promptIdeas[0] ??
    legacyVisualDirection.environment ??
    "studio portrait setting";
  const emotion =
    analysis.summary ??
    legacyVisualDirection.emotion ??
    "grounded confidence";
  const composition =
    archetype?.promptIdeas[1] ??
    "Medium portrait with directional posing and brand-focused framing";
  const subject =
    archetype
      ? `Feminine portrait for the ${analysis.archetype} archetype`
      : `woman embodying the ${analysis.archetype} archetype`;
  const fullPrompt = [
    `Subject: ${analysis.title ? `feminine portrait expressing the ${analysis.title}` : subject}`,
    `Style: ${style}`,
    `Clothing: ${clothing}`,
    `Environment: ${environment}`,
    "Lighting: soft cinematic daylight with dimensional highlights",
    `Emotion: ${emotion}`,
    `Composition: ${composition}`,
    ...(analysis.businessDirection ? [`Business context: ${analysis.businessDirection}`] : []),
    ...(analysis.imageBrief ? [`Brief: ${analysis.imageBrief}`] : []),
  ].join(". ");

  return {
    subject,
    style,
    clothing,
    environment,
    lighting: "Soft cinematic daylight with dimensional highlights",
    emotion,
    composition,
    fullPrompt,
    negativePrompt: "blurry hands, low detail skin, extra limbs, chaotic background, text overlay",
  };
}

function normalizeLegacyVisualDirection(value: IdentityAnalysis["visualDirection"] | string[] | undefined) {
  if (Array.isArray(value)) {
    return {
      style: value[0],
      emotion: value[1],
      environment: value[2],
    };
  }

  return {
    style: undefined,
    emotion: undefined,
    environment: undefined,
  };
}
