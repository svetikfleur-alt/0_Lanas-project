import { notFound } from "next/navigation";

import { isLocale } from "@/i18n/config";

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  return children;
}
