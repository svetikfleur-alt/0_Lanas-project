"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { GeneratedImage, IdentityAnalysis } from "@/types/identity";

import { readAnalysis, readImages, writeImages } from "../quiz/storage";

export function GenerateView() {
  const [analysis, setAnalysis] = useState<IdentityAnalysis | null>(null);
  const [images, setImages] = useState<GeneratedImage[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setAnalysis(readAnalysis());
    setImages(readImages());
  }, []);

  const onGenerate = async () => {
    if (!analysis) {
      return;
    }

    setLoading(true);
    const response = await fetch("/api/analysis", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ analysis }),
    });
    const nextImages = (await response.json()) as GeneratedImage[];
    setImages(nextImages);
    writeImages(nextImages);
    setLoading(false);
  };

  if (!analysis) {
    return (
      <div className="rounded-[32px] bg-white p-8 shadow-card">
        <p className="mb-4 text-ink/70">Generate step is available after analysis.</p>
        <Link href="/quiz" className="rounded-full bg-ink px-5 py-3 text-white">
          Start quiz
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      <section className="rounded-[32px] bg-white p-8 shadow-card">
        <h2 className="font-serif text-3xl">Mock image generation flow</h2>
        <p className="mt-3 max-w-3xl text-ink/70">
          The image layer is provider-agnostic. For MVP it returns mock concepts, but the
          prompt already comes from structured analysis.
        </p>
        <button
          type="button"
          onClick={onGenerate}
          className="mt-6 rounded-full bg-ink px-6 py-3 text-white"
        >
          {loading ? "Generating..." : "Generate concepts"}
        </button>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {images.map((image) => (
          <article key={image.id} className="overflow-hidden rounded-[28px] bg-white shadow-card">
            <img src={image.url} alt={image.title} className="aspect-[3/4] w-full object-cover" />
            <div className="p-5">
              <h3 className="font-serif text-2xl">{image.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{image.prompt}</p>
            </div>
          </article>
        ))}
      </section>

      {images.length > 0 ? (
        <Link href="/checkout" className="w-fit rounded-full bg-copper px-6 py-3 text-white">
          Continue to payment
        </Link>
      ) : null}
    </div>
  );
}
