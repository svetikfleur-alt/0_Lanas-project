import { GeneratedImage, PromptCompilerOutput } from "@/types/identity";

export interface ImageProvider {
  generateImages(prompt: PromptCompilerOutput): Promise<GeneratedImage[]>;
}
