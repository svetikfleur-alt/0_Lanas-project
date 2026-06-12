import { MockAIProvider } from "./mock-ai-provider";
import { OllamaAIProvider } from "./ollama-ai-provider";
import { AIProvider } from "./types";

export function getAIProvider(): AIProvider {
  if (process.env.AI_PROVIDER === "local") {
    return new OllamaAIProvider(
      process.env.LOCAL_AI_BASE_URL ?? "http://localhost:11434",
      process.env.LOCAL_AI_MODEL ?? "gemma3:27b",
    );
  }

  return new MockAIProvider();
}
