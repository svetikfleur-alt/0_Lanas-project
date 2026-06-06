import { getAIProvider } from "@/providers/ai";
import { MockAIProvider } from "@/providers/ai/mock-ai-provider";
import { IdentityAnalysis, QuizAnswers } from "@/types/identity";

export async function analyzeIdentity(answers: QuizAnswers): Promise<IdentityAnalysis> {
  const provider = getAIProvider();

  try {
    return await provider.analyzeIdentity(answers);
  } catch {
    const fallbackProvider = new MockAIProvider();
    return fallbackProvider.analyzeIdentity(answers);
  }
}
