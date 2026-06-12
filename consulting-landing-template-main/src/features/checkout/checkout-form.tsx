"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

import { Locale } from "@/types/identity";

import { readAnalysis, readImage, writeOrderId } from "@/features/quiz/storage";

export function CheckoutForm({
  locale,
  labels,
}: {
  locale: Locale;
  labels: {
    emptyTitle: string;
    emptyBody: string;
    backToGenerate: string;
    productTitle: string;
    productDescription: string;
    priceLabel: string;
    providerLabel: string;
    emailLabel: string;
    emailPlaceholder: string;
    pay: string;
    redirecting: string;
  };
}) {
  const analysis = readAnalysis();
  const image = readImage();
  const [email, setEmail] = useState("");
  const [redirecting, setRedirecting] = useState(false);

  if (!analysis || !image) {
    return (
      <div className="rounded-[32px] bg-white p-8 shadow-card">
        <h2 className="font-serif text-3xl">{labels.emptyTitle}</h2>
        <p className="mt-4 text-ink/75">{labels.emptyBody}</p>
        <Link href={`/${locale}/generate`} className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-white">
          {labels.backToGenerate}
        </Link>
      </div>
    );
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRedirecting(true);

    try {
      const response = await fetch("/api/payments/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale, customerEmail: email }),
      });

      const session = await response.json();
      writeOrderId(session.orderId);
      window.location.href = session.checkoutUrl;
    } finally {
      setRedirecting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-6 rounded-[32px] bg-white p-8 shadow-card">
      <div className="grid gap-3">
        <h2 className="font-serif text-3xl">{labels.productTitle}</h2>
        <p className="text-ink/75">{labels.productDescription}</p>
      </div>

      <div className="grid gap-4 rounded-[28px] bg-sand p-6 text-sm">
        <div className="flex items-center justify-between">
          <span>{labels.priceLabel}</span>
          <strong>$149</strong>
        </div>
        <div className="flex items-center justify-between">
          <span>{labels.providerLabel}</span>
          <strong>Fondy / Flitt</strong>
        </div>
        <div className="flex items-center justify-between">
          <span>{analysis.title}</span>
          <strong>{image.title}</strong>
        </div>
      </div>

      <label className="grid gap-2">
        <span className="text-sm text-ink/70">{labels.emailLabel}</span>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={labels.emailPlaceholder}
          className="rounded-2xl border border-ink/10 px-4 py-3 outline-none focus:border-copper"
        />
      </label>

      <button type="submit" className="rounded-full bg-ink px-6 py-3 text-white disabled:opacity-60" disabled={redirecting}>
        {redirecting ? labels.redirecting : labels.pay}
      </button>
    </form>
  );
}
