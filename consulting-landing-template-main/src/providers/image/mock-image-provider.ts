import { GeneratedImage, PromptCompilerOutput } from "@/types/identity";

import { ImageProvider } from "./types";

export class MockImageProvider implements ImageProvider {
  async generateImages(prompt: PromptCompilerOutput): Promise<GeneratedImage[]> {
    const encoded = encodeURIComponent(prompt.style);

    return Array.from({ length: 3 }).map((_, index) => ({
      id: `mock-${index + 1}`,
      title: `Concept ${index + 1}`,
      url: `https://placehold.co/900x1200/f6efe8/221c1b?text=${encoded}+${index + 1}`,
      prompt: prompt.fullPrompt,
    }));
  }
}
