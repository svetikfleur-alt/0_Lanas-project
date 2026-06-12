import { GeneratedImage, PromptCompilerOutput } from "@/types/identity";

import { ImageProvider } from "./types";

export class MockImageProvider implements ImageProvider {
  async generateImage(prompt: PromptCompilerOutput): Promise<GeneratedImage> {
    const encoded = encodeURIComponent(prompt.style.slice(0, 48));

    return {
      id: `mock-${Date.now()}`,
      title: "Mock concept",
      url: `https://placehold.co/960x1200/f6efe8/221c1b?text=${encoded}`,
      prompt: prompt.fullPrompt,
    };
  }
}
