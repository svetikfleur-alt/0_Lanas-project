import en from "@/i18n/en.json";
import es from "@/i18n/es.json";
import ru from "@/i18n/ru.json";
import uk from "@/i18n/uk.json";
import { Locale } from "@/types/identity";

const dictionaries = {
  en,
  es,
  ru,
  uk,
} as const;

export type Dictionary = (typeof dictionaries)["ru"];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
