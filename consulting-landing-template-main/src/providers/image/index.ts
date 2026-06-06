import { MockImageProvider } from "./mock-image-provider";
import { ImageProvider } from "./types";

export function getImageProvider(): ImageProvider {
  return new MockImageProvider();
}
