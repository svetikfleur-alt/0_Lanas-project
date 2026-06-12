"use client";

import Link from "next/link";
import { useState } from "react";

import { Locale } from "@/types/identity";

import { readAnalysis, readImage, readPrompt, writeImage, writePrompt } from "@/features/quiz/storage";

export function GenerateView({
  locale,
  labels,
}: {
  locale: Locale;
  labels: {
    emptyTitle: string;
    emptyBody: string;
    backToResult: string;
    compile: string;
    generating: string;
    generate: string;
    promptDetails: string;
    subject: string;
    style: string;
    clothing: string;
    environment: string;
    lighting: string;
    emotion: string;
    composition: string;
    negativePrompt: string;
    ctaCheckout: string;
  };
}) {
  const analysis = readAnalysis();
  const [prompt, setPrompt] = useState(readPrompt());
  const [image, setImage] = useState(readImage());
  const [loading, setLoading] = useState(false);

  if (!analysis) {
    return (
      <div className="rounded-[32px] bg-white p-8 shadow-card">
        <h2 className="font-serif text-3xl">{labels.emptyTitle}</h2>
        <p className="mt-4 text-ink/75">{labels.emptyBody}</p>
        <Link href={`/${locale}/result`} className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-white">
          {labels.backToResult}
        </Link>
      </div>
    );
  }

  const onGenerate = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/generation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ analysis, locale }),
      });

      const payload = await response.json();
      setPrompt(payload.prompt);
      setImage(payload.image);
      writePrompt(payload.prompt);
      writeImage(payload.image);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid gap-6">
      <section className="rounded-[32px] bg-white p-8 shadow-card">
        <button
          type="button"
          onClick={onGenerate}
          className="rounded-full bg-copper px-6 py-3 text-white disabled:opacity-60"
          disabled={loading}
        >
          {loading ? labels.generating : prompt ? labels.generate : labels.compile}
        </button>

        {prompt ? (
          <div className="mt-8 grid gap-4">
            <h2 className="font-serif text-3xl">{labels.promptDetails}</h2>
            <PromptRow label={labels.subject} value={prompt.subject} />
            <PromptRow label={labels.style} value={prompt.style} />
            <PromptRow label={labels.clothing} value={prompt.clothing} />
            <PromptRow label={labels.environment} value={prompt.environment} />
            <PromptRow label={labels.lighting} value={prompt.lighting} />
            <PromptRow label={labels.emotion} value={prompt.emotion} />
            <PromptRow label={labels.composition} value={prompt.composition} />
            {prompt.negativePrompt ? <PromptRow label={labels.negativePrompt} value={prompt.negativePrompt} /> : null}
          </div>
        ) : null}
      </section>

      {image ? (
        <section className="grid gap-6 rounded-[32px] bg-white p-8 shadow-card md:grid-cols-[0.9fr_1.1fr]">
          <img src={image.url} alt={image.title} className="w-full rounded-[28px] object-cover" />
          <div className="grid content-start gap-4">
            <h3 className="font-serif text-3xl">{image.title}</h3>
            <p className="text-sm text-ink/70">{image.prompt}</p>
            <Link href={`/${locale}/checkout`} className="mt-4 inline-flex rounded-full bg-ink px-6 py-3 text-white">
              {labels.ctaCheckout}
            </Link>
          </div>
        </section>
      ) : null}
    </div>
  );
}

function PromptRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-sand p-4">
      <div className="text-xs uppercase tracking-[0.2em] text-copper">{label}</div>
      <div className="mt-2 text-sm text-ink/80">{value}</div>
    </div>
  );
}
