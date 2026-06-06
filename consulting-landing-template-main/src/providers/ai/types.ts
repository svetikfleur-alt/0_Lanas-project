import { IdentityAnalysis, QuizAnswers } from "@/types/identity";

export interface AIProvider {
  analyzeIdentity(input: QuizAnswers): Promise<IdentityAnalysis>;
}
