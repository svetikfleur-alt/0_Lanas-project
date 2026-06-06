import { MockAIProvider } from "./mock-ai-provider";
import { OllamaAIProvider } from "./ollama-ai-provider";
import { AIProvider } from "./types";

export function getAIProvider(): AIProvider {
  const provider = process.env.AI_PROVIDER ?? "mock";

  if (provider === "ollama") {
    return new OllamaAIProvider(
      process.env.OLLAMA_BASE_URL ?? "http://localhost:11434",
      process.env.OLLAMA_MODEL ?? "gemma3:27b",
    );
  }

  return new MockAIProvider();
}
