import { IdentityAnalysis, QuizAnswers } from "@/types/identity";

import { AIProvider } from "./types";

export class OllamaAIProvider implements AIProvider {
  constructor(
    private readonly baseUrl: string,
    private readonly model: string,
  ) {}

  async analyzeIdentity(input: QuizAnswers): Promise<IdentityAnalysis> {
    const prompt = [
      "Analyze the identity questionnaire and return strict JSON.",
      "Required shape:",
      '{"archetype":"queen|mentor|creator","strengths":[""],"blindSpots":[""],"visualDirection":[""],"imageBrief":""}',
      `Answers: ${JSON.stringify(input)}`,
    ].join("\n");

    const response = await fetch(`${this.baseUrl}/api/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: this.model,
        prompt,
        stream: false,
        format: "json",
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Ollama request failed with status ${response.status}`);
    }

    const data = await response.json();
    const parsed = JSON.parse(data.response) as IdentityAnalysis;
    return parsed;
  }
}
