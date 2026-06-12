import { Locale } from "@/types/identity";

export function withLocale(locale: Locale, path: string): string {
  return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
}
