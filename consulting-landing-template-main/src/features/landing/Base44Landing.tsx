import Image from "next/image";
import Link from "next/link";

import authorImage from "../../../assets/author.jpg";
import collageImage from "../../../assets/collage.jpg";
import heroImage from "../../../assets/hero.jpg";
import portraitImage from "../../../assets/portrait.jpg";
import { Locale } from "@/types/identity";

import { getLandingContent } from "./base44-content";

const localeOrder: Locale[] = ["ru", "uk", "en", "es"];
const telegramLink = process.env.TELEGRAM_CHANNEL_INVITE_LINK ?? "https://t.me/+chugfitqfx5iMGQy";

export function Base44Landing({ locale }: { locale: Locale }) {
  const content = getLandingContent(locale);

  return (
    <main className="bg-[#fcfaf7] text-[#1a1512]">
      <div className="sticky top-0 z-40 border-b border-[#ece5dd] bg-[#fcfaf7]/94 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-6 py-4 lg:px-14">
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <CameraBadge />
            <span className="font-serif text-[2.05rem] font-semibold leading-none tracking-[-0.02em]">
              {content.site.brand}
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <div className="flex items-center rounded-full border border-[#ddd1c3] bg-white px-2 py-1 shadow-sm">
              <span className="mr-2 text-[#8f7a69]">
                <GlobeIcon />
              </span>
              {localeOrder.map((item) => (
                <Link
                  key={item}
                  href={`/${item}`}
                  className={`rounded-full px-3 py-1 text-sm font-semibold uppercase transition-all ${
                    item === locale
                      ? "bg-[#df6b33] text-white shadow-sm"
                      : "text-[#3d3129] hover:bg-[#f6efe7]"
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>

            <Link
              href={`/${locale}/checkout`}
              className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#df6b33] px-8 text-[1.05rem] font-semibold text-white shadow-[0_12px_30px_rgba(223,107,51,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#cf5d27] hover:shadow-[0_18px_36px_rgba(223,107,51,0.26)]"
            >
              {content.site.start} <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>

      <section className="px-6 pb-14 pt-10 lg:px-14 lg:pb-20 lg:pt-12">
        <div className="mx-auto max-w-[1600px]">
          <div className="relative overflow-hidden rounded-[34px] shadow-[0_28px_90px_rgba(28,18,12,0.16)]">
            <Image src={heroImage} alt="" priority className="h-[540px] w-full object-cover lg:h-[760px]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,12,10,0.82)_0%,rgba(17,12,10,0.56)_36%,rgba(17,12,10,0.22)_68%,rgba(17,12,10,0.10)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(255,198,157,0.22),transparent_26%)]" />

            <div className="relative z-10 max-w-[920px] px-10 py-12 lg:px-24 lg:py-20">
              <div className="inline-flex rounded-full border border-white/12 bg-[rgba(188,122,86,0.78)] px-6 py-3 text-[1.1rem] font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.15)] backdrop-blur-sm">
                {content.hero.badge}
              </div>
              <h1 className="mt-8 max-w-[10ch] font-serif text-[4.6rem] leading-[0.9] tracking-[-0.05em] text-white lg:text-[7.4rem]">
                <span className="block text-[#e56c35]">{content.hero.titleAccent}</span>
                <span className="block">{content.hero.titleMain}</span>
              </h1>
              <p className="mt-8 max-w-[760px] text-[1.35rem] leading-[1.48] text-[rgba(255,244,237,0.92)] lg:text-[1.52rem]">
                {content.hero.text}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={`/${locale}/checkout`}
                  className="inline-flex min-h-[58px] items-center justify-center rounded-full bg-[#df6b33] px-8 text-[1rem] font-semibold text-white shadow-[0_12px_30px_rgba(223,107,51,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#cf5d27]"
                >
                  {content.hero.primary}
                </Link>
                <a
                  href="#steps"
                  className="inline-flex min-h-[58px] items-center justify-center rounded-full border border-white/18 bg-white/5 px-8 text-[1rem] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/12"
                >
                  {content.hero.secondary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-[1450px]">
          <div className="text-center">
            <h2 className="font-serif text-[4.3rem] leading-[0.95] tracking-[-0.04em] lg:text-[4.8rem]">
              {content.problem.title}
            </h2>
            <p className="mx-auto mt-6 max-w-[980px] text-[1.2rem] leading-[1.55] text-[#816f63] lg:text-[1.45rem]">
              {content.problem.text}
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {content.problem.cards.map((card, index) => (
              <article
                key={card.title}
                className="group rounded-[28px] border border-[#e6d9ce] bg-white p-10 shadow-[0_18px_55px_rgba(43,28,19,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(43,28,19,0.08)]"
              >
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-[18px] bg-[#f8ede5] text-[#df6b33]">
                  <ProblemIcon index={index} />
                </div>
                <h3 className="font-serif text-[2.15rem] leading-[1.04] tracking-[-0.03em]">{card.title}</h3>
                <p className="mt-5 max-w-[520px] text-[1.14rem] leading-[1.7] text-[#7f6d61]">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="steps" className="px-6 py-10 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-[1480px]">
          <div className="text-center">
            <p className="text-[0.9rem] font-semibold uppercase tracking-[0.28em] text-[#df6b33]">
              {content.steps.eyebrow}
            </p>
            <h2 className="mx-auto mt-5 max-w-[1200px] font-serif text-[4.1rem] leading-[0.96] tracking-[-0.04em] lg:text-[5.15rem]">
              {content.steps.title}
            </h2>
            <p className="mx-auto mt-5 max-w-[900px] text-[1.14rem] leading-[1.65] text-[#827064] lg:text-[1.28rem]">
              {content.steps.text}
            </p>
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-3 lg:gap-16">
            {content.steps.items.map((item, index) => (
              <article key={item.title} className="max-w-[420px]">
                <div className="mb-8 text-[#df6b33]">
                  <StepIcon index={index} />
                </div>
                <h3 className="font-serif text-[2.1rem] leading-[1.02] tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-5 text-[1.08rem] leading-[1.75] text-[#7f6d61]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-14 lg:py-16">
        <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[30px] shadow-[0_18px_55px_rgba(43,28,19,0.05)]">
          <Image src={collageImage} alt="" className="h-[250px] w-full object-cover object-center lg:h-[360px]" />
        </div>
      </section>

      <section className="px-6 py-10 lg:px-14 lg:py-20">
        <div className="mx-auto grid max-w-[1600px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
          <div className="overflow-hidden rounded-[34px] shadow-[0_18px_55px_rgba(43,28,19,0.06)] transition-transform duration-500 hover:scale-[1.01]">
            <Image src={portraitImage} alt="" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-[0.9rem] font-semibold uppercase tracking-[0.28em] text-[#df6b33]">
              {content.identity.eyebrow}
            </p>
            <h2 className="mt-5 font-serif text-[4.1rem] leading-[0.96] tracking-[-0.04em] lg:text-[5.2rem]">
              {content.identity.title}
            </h2>
            <p className="mt-7 max-w-[820px] text-[1.24rem] leading-[1.7] text-[#7e6e62] lg:text-[1.42rem]">
              {content.identity.text}
            </p>
            <p className="mt-7 max-w-[780px] text-[1.18rem] leading-[1.65] text-[#8a776a] lg:text-[1.32rem]">
              {content.identity.textSecondary}
            </p>
            <ul className="mt-10 grid gap-6">
              {content.identity.bullets.map((item) => (
                <li key={item} className="flex items-start gap-5 text-[1.16rem] leading-[1.5] lg:text-[1.28rem]">
                  <span className="mt-2 inline-block h-3.5 w-3.5 rounded-full bg-[#df6b33]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 lg:px-14 lg:py-20">
        <div className="mx-auto grid max-w-[1600px] items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
          <div className="overflow-hidden rounded-[34px] shadow-[0_18px_55px_rgba(43,28,19,0.06)] transition-transform duration-500 hover:scale-[1.01]">
            <Image src={authorImage} alt="" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-[0.9rem] font-semibold uppercase tracking-[0.28em] text-[#df6b33]">
              {content.author.eyebrow}
            </p>
            <h2 className="mt-5 font-serif text-[4.1rem] leading-[0.96] tracking-[-0.04em] lg:text-[5.15rem]">
              {content.author.title}
            </h2>
            <div className="mt-8 grid gap-8">
              {content.author.paragraphs.map((paragraph) => (
                <p key={paragraph} className="max-w-[860px] text-[1.22rem] leading-[1.72] text-[#7f6d61] lg:text-[1.38rem]">
                  {paragraph}
                </p>
              ))}
            </div>
            <ul className="mt-10 grid gap-5">
              {content.author.bullets.map((item) => (
                <li key={item} className="flex items-start gap-4 text-[1.14rem] leading-[1.6] text-[#6e5e53] lg:text-[1.22rem]">
                  <span className="mt-1 text-[#df6b33]">
                    <CheckIcon />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 py-10 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-[900px]">
          <div className="rounded-[34px] border border-[#e5d6c8] bg-white shadow-[0_28px_90px_rgba(43,28,19,0.08)]">
            <div className="rounded-t-[34px] bg-[#df6b33] px-8 py-5 text-center text-[1rem] font-semibold uppercase tracking-[0.18em] text-white">
              {content.pricing.badge}
            </div>
            <div className="px-8 py-10 lg:px-12 lg:py-12">
              <p className="text-[0.9rem] font-semibold uppercase tracking-[0.28em] text-[#df6b33]">
                {content.pricing.eyebrow}
              </p>
              <h2 className="mt-5 font-serif text-[3.4rem] leading-[0.96] tracking-[-0.04em] lg:text-[4.35rem]">
                {content.pricing.title}
              </h2>
              <p className="mt-5 max-w-[700px] text-[1.16rem] leading-[1.7] text-[#7f6d61] lg:text-[1.28rem]">
                {content.pricing.text}
              </p>
              <div className="mt-8 rounded-[24px] bg-[#fcf8f3] p-6">
                <div className="text-[1.18rem] font-semibold">{content.pricing.name}</div>
                <div className="mt-6 flex items-end gap-3">
                  <div className="font-serif text-[5rem] leading-none lg:text-[5.8rem]">{content.pricing.price}</div>
                  <div className="pb-3 text-[1.75rem] text-[#6f6056]">{content.pricing.currency}</div>
                  <div className="pb-4 text-[1.1rem] text-[#9b887b] line-through">{content.pricing.oldPrice}</div>
                </div>
              </div>
              <ul className="mt-8 grid gap-5">
                {content.pricing.features.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-[1.1rem] leading-[1.6] text-[#6f5f54]">
                    <span className="mt-1 text-[#df6b33]">
                      <CheckIcon />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={`/${locale}/checkout`}
                  className="inline-flex min-h-[56px] flex-1 items-center justify-center rounded-full bg-[#163d2e] px-8 text-[1rem] font-semibold text-white shadow-[0_16px_36px_rgba(22,61,46,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#123125]"
                >
                  {content.pricing.cta}
                </Link>
                <a
                  href={telegramLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-[#d8c8bb] bg-white px-8 text-[1rem] font-semibold text-[#2e241f] transition-all duration-300 hover:bg-[#faf4ee]"
                >
                  {content.pricing.telegram}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="px-6 py-16 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="text-center font-serif text-[3.8rem] leading-[0.96] tracking-[-0.04em] lg:text-[4.6rem]">
            {content.faq.title}
          </h2>
          <div className="mt-12 grid gap-4">
            {content.faq.items.map((item) => (
              <details
                key={item.q}
                className="group rounded-[18px] border border-[#e6d8cc] bg-white px-7 py-5 shadow-[0_10px_30px_rgba(43,28,19,0.04)] transition-all duration-300 hover:border-[#dccabb]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[1.16rem] font-medium text-[#211a16]">
                  <span>{item.q}</span>
                  <span className="text-[#86756b] transition-transform duration-300 group-open:rotate-45">
                    <PlusIcon />
                  </span>
                </summary>
                <p className="mt-4 max-w-[860px] text-[1.05rem] leading-[1.7] text-[#7c6a5f]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 pt-8 lg:px-14">
        <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[34px] bg-[radial-gradient(circle_at_74%_42%,rgba(175,92,52,0.32),transparent_28%),linear-gradient(180deg,#191411_0%,#100c0a_100%)] px-8 py-16 shadow-[0_28px_80px_rgba(28,18,12,0.18)] lg:px-14 lg:py-20">
          <div className="mx-auto max-w-[980px] text-center">
            <h2 className="font-serif text-[4rem] leading-[0.95] tracking-[-0.04em] text-white lg:text-[5.2rem]">
              {content.cta.title}
            </h2>
            <p className="mx-auto mt-6 max-w-[760px] text-[1.14rem] leading-[1.72] text-[rgba(255,242,233,0.76)] lg:text-[1.28rem]">
              {content.cta.text}
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href={`/${locale}/checkout`}
                className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-[#df6b33] px-8 text-[1rem] font-semibold text-white shadow-[0_16px_36px_rgba(223,107,51,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#cf5d27]"
              >
                {content.cta.primary}
              </Link>
              <a
                href={telegramLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-white/16 bg-white/6 px-8 text-[1rem] font-semibold text-white transition-all duration-300 hover:bg-white/12"
              >
                {content.cta.telegram}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#ebe1d7] px-6 py-7 lg:px-14">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 text-sm text-[#8c7a6e]">
          <div className="flex items-center gap-3">
            <CameraBadge />
            <span className="font-medium">{content.site.brand}</span>
          </div>
          <div>{content.footer.copyright}</div>
        </div>
      </footer>
    </main>
  );
}

function CameraBadge() {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ef6b2c] text-white shadow-[0_10px_24px_rgba(239,107,44,0.18)]">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    </span>
  );
}

function GlobeIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ProblemIcon({ index }: { index: number }) {
  const icons = [
    <circle key="q" cx="12" cy="12" r="9" />,
    <path key="shuffle" d="M16 3h5v5M4 20l6-6M20 4l-6 6M15 15l5 5M4 4l5 5" />,
    <>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </>,
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 15s1.5-2 4-2 4 2 4 2" />
      <path d="M9 9h.01M15 9h.01" />
    </>,
  ];

  return (
    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      {icons[index]}
      {index === 0 ? <path d="M9.1 9a3 3 0 1 1 5.8 1c0 2-3 3-3 3" /> : null}
      {index === 0 ? <path d="M12 17h.01" /> : null}
    </svg>
  );
}

function StepIcon({ index }: { index: number }) {
  const content = [
    <svg key="questions" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M9 9h6M9 13h4" />
    </svg>,
    <svg key="spark" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>,
    <svg key="plan" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>,
  ];

  return content[index];
}

function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="8 12 11 15 16 9" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}
