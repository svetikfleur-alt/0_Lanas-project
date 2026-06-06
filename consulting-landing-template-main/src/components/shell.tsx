import Link from "next/link";
import { PropsWithChildren } from "react";

export function PageShell({
  children,
  title,
  subtitle,
}: PropsWithChildren<{ title: string; subtitle: string }>) {
  return (
    <main className="min-h-screen bg-sand text-ink">
      <div className="mx-auto max-w-6xl px-6 py-8 md:px-10">
        <header className="mb-10 flex flex-col gap-6 rounded-[32px] bg-white/80 p-6 shadow-card backdrop-blur md:flex-row md:items-center md:justify-between">
          <div>
            <Link href="/" className="font-serif text-3xl italic">
              Visual Identity Lab
            </Link>
            <p className="mt-2 max-w-2xl text-sm text-ink/70">{subtitle}</p>
          </div>
          <nav className="flex flex-wrap gap-3 text-sm">
            <Link href="/quiz" className="rounded-full border border-ink/10 px-4 py-2">
              Quiz
            </Link>
            <Link href="/result" className="rounded-full border border-ink/10 px-4 py-2">
              Result
            </Link>
            <Link href="/generate" className="rounded-full border border-ink/10 px-4 py-2">
              Generate
            </Link>
            <Link href="/checkout" className="rounded-full border border-ink/10 px-4 py-2">
              Checkout
            </Link>
          </nav>
        </header>
        <section className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-copper">MVP Flow</p>
          <h1 className="mt-3 font-serif text-4xl md:text-6xl">{title}</h1>
        </section>
        {children}
      </div>
    </main>
  );
}
