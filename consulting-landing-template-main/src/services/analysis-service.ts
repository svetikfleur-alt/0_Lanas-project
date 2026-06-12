import { getAIProvider } from "@/providers/ai";
import { MockAIProvider } from "@/providers/ai/mock-ai-provider";
import { IdentityAnalysis, Locale, QuizAnswers } from "@/types/identity";

export async function analyzeIdentity(
  answers: QuizAnswers,
  locale: Locale,
): Promise<IdentityAnalysis> {
  const provider = getAIProvider();

  try {
    return await provider.analyzeIdentity({ answers, locale });
  } catch {
    return new MockAIProvider().analyzeIdentity({ answers, locale });
  }
}
