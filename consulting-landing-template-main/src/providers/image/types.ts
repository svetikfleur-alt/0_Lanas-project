import { GeneratedImage, PromptCompilerOutput } from "@/types/identity";

export interface ImageProvider {
  generateImage(prompt: PromptCompilerOutput): Promise<GeneratedImage>;
}
