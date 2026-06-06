import { quizQuestions } from "@/features/quiz/questions";
import { ArchetypeKey, IdentityAnalysis, QuizAnswers } from "@/types/identity";

import { AIProvider } from "./types";

const archetypeMap: Record<string, ArchetypeKey> = {
  queen: "queen",
  authority: "queen",
  mentor: "mentor",
  trust: "mentor",
  creator: "creator",
  curiosity: "creator",
};

export class MockAIProvider implements AIProvider {
  async analyzeIdentity(input: QuizAnswers): Promise<IdentityAnalysis> {
    const answers = quizQuestions.map((question) => input[question.id]).filter(Boolean);
    const archetype =
      answers
        .map((answer) => archetypeMap[answer])
        .find(Boolean) ?? "mentor";

    return {
      archetype,
      strengths: [
        "Strong personal signal",
        "Clear emotional tone",
        "Consistent business intent",
      ],
      blindSpots: [
        "May understate premium positioning",
        "Needs stronger visual consistency across channels",
      ],
      visualDirection: [
        `Lead with ${input.visualPreferences ?? "elegant"} styling cues`,
        `Reinforce ${input.audienceImpact ?? "trust"} in portraits and messaging`,
        `Align content with ${input.business ?? "personal"} brand context`,
      ],
      imageBrief: `Editorial portraits for a ${archetype} identity with ${input.visualPreferences ?? "elegant"} styling and emphasis on ${input.audienceImpact ?? "trust"}.`,
    };
  }
}
