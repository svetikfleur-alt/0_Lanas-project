import Link from "next/link";

import { PageShell } from "@/components/shell";

export default function HomePage() {
  return (
    <PageShell
      title="Discover the identity behind the image"
      subtitle="A guided MVP for identity diagnosis, archetype mapping, visual direction, image concepts, payment and Telegram delivery."
    >
      <div className="grid gap-6">
        <section className="grid gap-6 rounded-[36px] bg-ink p-8 text-white shadow-card md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">Vertical Slice</p>
            <h2 className="mt-4 font-serif text-5xl">
              Landing → Quiz → AI Analysis → Result → Image Concepts → Checkout → Telegram
            </h2>
            <p className="mt-5 max-w-2xl text-white/75">
              This is not a generic image generator. The product core is identity discovery,
              visual positioning and business alignment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/quiz" className="rounded-full bg-copper px-6 py-3 text-white">
                Start the quiz
              </Link>
              <Link href="/result" className="rounded-full border border-white/15 px-6 py-3">
                View result layer
              </Link>
            </div>
          </div>
          <div className="grid gap-4 rounded-[28px] bg-white/8 p-5">
            {[
              "Provider-agnostic architecture",
              "Ollama-ready analysis layer",
              "Archetypes stored as content files",
              "Mock image generation ready for replacement",
              "Fondy payment skeleton behind an interface",
              "Telegram delivery module prepared for invite links",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 p-4 text-white/80">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            title="Identity diagnostics"
            text="A focused questionnaire captures current identity, aspiration, business context and desired audience impact."
          />
          <FeatureCard
            title="Archetype intelligence"
            text="Analysis outputs a clear archetype, strengths, blind spots, visual direction and image brief."
          />
          <FeatureCard
            title="Operational delivery"
            text="The product finishes with checkout and Telegram delivery architecture instead of stopping at inspiration."
          />
        </section>
      </div>
    </PageShell>
  );
}

function FeatureCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-[32px] bg-white p-6 shadow-card">
      <h3 className="font-serif text-3xl">{title}</h3>
      <p className="mt-4 text-sm text-ink/70">{text}</p>
    </article>
  );
}
