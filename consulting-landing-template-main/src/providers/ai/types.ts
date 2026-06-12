import { IdentityAnalysis, Locale, QuizAnswers } from "@/types/identity";

export type AnalyzeIdentityInput = {
  answers: QuizAnswers;
  locale: Locale;
};

export interface AIProvider {
  analyzeIdentity(input: AnalyzeIdentityInput): Promise<IdentityAnalysis>;
}
