import { Locale, locales } from "@/types/identity";

export { locales };

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
