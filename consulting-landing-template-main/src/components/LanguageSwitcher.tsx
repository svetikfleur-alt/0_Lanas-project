"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { Locale, locales } from "@/types/identity";

export function LanguageSwitcher({
  currentLocale,
  label,
  localeNames,
}: {
  currentLocale: Locale;
  label: string;
  localeNames: Record<Locale, string>;
}) {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap items-center gap-2 text-sm">
      <span className="text-ink/60">{label}</span>
      {locales.map((locale) => (
        <Link
          key={locale}
          href={replaceLocaleInPath(pathname, currentLocale, locale)}
          className={`rounded-full px-3 py-1.5 ${
            locale === currentLocale ? "bg-ink text-white" : "border border-ink/10 bg-white"
          }`}
        >
          {localeNames[locale]}
        </Link>
      ))}
    </div>
  );
}

function replaceLocaleInPath(pathname: string, currentLocale: Locale, nextLocale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `/${nextLocale}`;
  }

  if (segments[0] === currentLocale) {
    segments[0] = nextLocale;
    return `/${segments.join("/")}`;
  }

  return `/${nextLocale}`;
}
