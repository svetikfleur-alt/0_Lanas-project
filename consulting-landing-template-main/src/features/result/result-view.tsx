"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { ArchetypeContent, Locale } from "@/types/identity";

import { readAnalysis } from "@/features/quiz/storage";

export function ResultView({
  archetypes,
  locale,
  labels,
}: {
  archetypes: ArchetypeContent[];
  locale: Locale;
  labels: {
    emptyTitle: string;
    emptyBody: string;
    backToQuiz: string;
    strengths: string;
    blindSpots: string;
    visualDirection: string;
    businessDirection: string;
    archetypeGuide: string;
    visualRecommendations: string;
    businessRecommendations: string;
    promptIdeas: string;
    cta: string;
  };
}) {
  const [analysis, setAnalysis] = useState(readAnalysis());

  useEffect(() => {
    setAnalysis(readAnalysis());
  }, []);

  if (!analysis) {
    return (
      <div className="rounded-[32px] bg-white p-8 shadow-card">
        <h2 className="font-serif text-3xl">{labels.emptyTitle}</h2>
        <p className="mt-4 text-ink/70">{labels.emptyBody}</p>
        <Link href={`/${locale}/quiz`} className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-white">
          {labels.backToQuiz}
        </Link>
      </div>
    );
  }

  const archetype = archetypes.find((item) => item.key === analysis.archetype);

  return (
    <div className="grid gap-6">
      <section className="rounded-[32px] bg-white p-8 shadow-card">
        <p className="text-sm uppercase tracking-[0.3em] text-copper">{analysis.title}</p>
        <h2 className="mt-4 font-serif text-4xl">{archetype?.title ?? analysis.title}</h2>
        <p className="mt-4 max-w-3xl text-ink/75">{analysis.summary}</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <InfoList title={labels.strengths} items={analysis.strengths} />
          <InfoList title={labels.blindSpots} items={analysis.blindSpots} />
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-[32px] bg-white p-8 shadow-card">
          <h3 className="font-serif text-3xl">{labels.visualDirection}</h3>
          <p className="mt-4 text-ink/75">{analysis.visualDirection}</p>
        </article>
        <article className="rounded-[32px] bg-white p-8 shadow-card">
          <h3 className="font-serif text-3xl">{labels.businessDirection}</h3>
          <p className="mt-4 text-ink/75">{analysis.businessDirection}</p>
        </article>
      </section>

      {archetype ? (
        <section className="rounded-[32px] bg-ink p-8 text-white shadow-card">
          <h3 className="font-serif text-3xl">{labels.archetypeGuide}</h3>
          <p className="mt-4 max-w-3xl text-white/75">{archetype.description}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <InfoList title={labels.visualRecommendations} items={archetype.visualRecommendations} dark />
            <InfoList title={labels.businessRecommendations} items={archetype.businessRecommendations} dark />
            <InfoList title={labels.promptIdeas} items={archetype.promptIdeas} dark />
          </div>
        </section>
      ) : null}

      <div>
        <Link href={`/${locale}/generate`} className="inline-flex rounded-full bg-copper px-6 py-3 text-white">
          {labels.cta}
        </Link>
      </div>
    </div>
  );
}

function InfoList({ dark, items, title }: { dark?: boolean; items: string[]; title: string }) {
  return (
    <article className={`rounded-[28px] p-6 ${dark ? "bg-white/8" : "bg-sand"}`}>
      <h4 className="font-serif text-2xl">{title}</h4>
      <ul className={`mt-4 grid gap-3 text-sm ${dark ? "text-white/80" : "text-ink/75"}`}>
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </article>
  );
}
