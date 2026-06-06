import { getImageProvider } from "@/providers/image";
import { GeneratedImage, PromptCompilerOutput } from "@/types/identity";

export async function generateIdentityImages(
  prompt: PromptCompilerOutput,
): Promise<GeneratedImage[]> {
  return getImageProvider().generateImages(prompt);
}
