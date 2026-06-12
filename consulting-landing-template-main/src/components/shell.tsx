import Link from "next/link";
import { PropsWithChildren } from "react";

import { Dictionary } from "@/i18n/dictionaries";
import { Locale } from "@/types/identity";

import { LanguageSwitcher } from "./LanguageSwitcher";

export function PageShell({
  children,
  dictionary,
  locale,
  title,
  subtitle,
}: PropsWithChildren<{
  dictionary: Dictionary;
  locale: Locale;
  title: string;
  subtitle: string;
}>) {
  const navItems = [
    { href: `/${locale}/quiz`, label: dictionary.common.quiz },
    { href: `/${locale}/result`, label: dictionary.common.result },
    { href: `/${locale}/generate`, label: dictionary.common.generate },
    { href: `/${locale}/checkout`, label: dictionary.common.checkout },
  ];

  return (
    <main className="min-h-screen bg-sand text-ink">
      <div className="mx-auto max-w-6xl px-6 py-8 md:px-10">
        <header className="mb-10 grid gap-5 rounded-[32px] bg-white/80 p-6 shadow-card backdrop-blur lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="grid gap-3">
            <Link href={`/${locale}`} className="font-serif text-3xl italic">
              {dictionary.common.brand}
            </Link>
            <p className="max-w-2xl text-sm text-ink/70">{subtitle}</p>
          </div>

          <div className="grid gap-4">
            <nav className="flex flex-wrap justify-start gap-3 text-sm lg:justify-end">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-full border border-ink/10 px-4 py-2">
                  {item.label}
                </Link>
              ))}
            </nav>
            <LanguageSwitcher
              currentLocale={locale}
              label={dictionary.common.language}
              localeNames={dictionary.locales}
            />
          </div>
        </header>

        <section className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-copper">{dictionary.common.eyebrow}</p>
          <h1 className="mt-3 font-serif text-4xl md:text-6xl">{title}</h1>
        </section>

        {children}
      </div>
    </main>
  );
}
