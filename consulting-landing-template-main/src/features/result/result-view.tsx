"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { ArchetypeContent, IdentityAnalysis } from "@/types/identity";

import { readAnalysis } from "../quiz/storage";

export function ResultView({
  archetypes,
}: {
  archetypes: Record<string, ArchetypeContent>;
}) {
  const [analysis, setAnalysis] = useState<IdentityAnalysis | null>(null);

  useEffect(() => {
    setAnalysis(readAnalysis());
  }, []);

  if (!analysis) {
    return (
      <div className="rounded-[32px] bg-white p-8 shadow-card">
        <p className="mb-4 text-ink/70">No analysis yet. Start from the quiz.</p>
        <Link href="/quiz" className="rounded-full bg-ink px-5 py-3 text-white">
          Open quiz
        </Link>
      </div>
    );
  }

  const archetype = archetypes[analysis.archetype];

  return (
    <div className="grid gap-6">
      <section className="grid gap-6 rounded-[32px] bg-white p-8 shadow-card md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-copper">Archetype</p>
          <h2 className="mt-3 font-serif text-4xl">{archetype.title}</h2>
          <p className="mt-4 text-ink/70">{archetype.description}</p>
          <p className="mt-6 rounded-2xl bg-sand p-4 text-sm text-ink/80">{analysis.imageBrief}</p>
        </div>
        <div className="rounded-[28px] bg-ink p-6 text-white">
          <h3 className="font-serif text-2xl">Visual direction</h3>
          <ul className="mt-4 grid gap-3 text-sm text-white/80">
            {analysis.visualDirection.map((item) => (
              <li key={item} className="rounded-2xl border border-white/10 p-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card title="Strengths" items={[...analysis.strengths, ...archetype.strengths]} />
        <Card title="Blind spots" items={[...analysis.blindSpots, ...archetype.weaknesses]} />
        <Card title="Visual recommendations" items={archetype.visualRecommendations} />
        <Card title="Business recommendations" items={archetype.businessRecommendations} />
      </section>

      <Link href="/generate" className="w-fit rounded-full bg-copper px-6 py-3 text-white">
        Continue to image generation
      </Link>
    </div>
  );
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[32px] bg-white p-6 shadow-card">
      <h3 className="font-serif text-2xl">{title}</h3>
      <ul className="mt-4 grid gap-3 text-sm text-ink/75">
        {items.map((item) => (
          <li key={item} className="rounded-2xl bg-sand p-3">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
