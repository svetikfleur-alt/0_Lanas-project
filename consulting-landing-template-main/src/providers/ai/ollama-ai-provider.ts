import { IdentityAnalysis } from "@/types/identity";

import { AnalyzeIdentityInput, AIProvider } from "./types";

export class OllamaAIProvider implements AIProvider {
  constructor(
    private readonly baseUrl: string,
    private readonly model: string,
  ) {}

  async analyzeIdentity(input: AnalyzeIdentityInput): Promise<IdentityAnalysis> {
    const prompt = [
      "Analyze this quiz for a feminine visual identity product.",
      `Return strict JSON in locale ${input.locale}.`,
      'Shape: {"archetype":"queen|mentor|creator","title":"","summary":"","strengths":[""],"blindSpots":[""],"visualDirection":"","businessDirection":"","imageBrief":""}',
      `Answers: ${JSON.stringify(input.answers)}`,
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
    return JSON.parse(data.response) as IdentityAnalysis;
  }
}
