const { useEffect, useMemo, useState } = React;

const IMAGES = {
  hero: "assets/hero-clean.jpg",
  identity: "assets/portrait.jpg",
  author: "assets/author.jpg",
};

const ICONS = {
  spark: (
    <>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </>
  ),
  menu: (
    <>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </>
  ),
  close: (
    <>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </>
  ),
  plus: (
    <>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </>
  ),
  minus: <line x1="5" y1="12" x2="19" y2="12" />,
  arrow: (
    <>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </>
  ),
  check: <polyline points="20 6 9 17 4 12" />,
  camera: (
    <>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </>
  ),
  moon: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />,
};

function Icon({ path, size = 18, className = "", ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      {path}
    </svg>
  );
}

function PrimaryButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-[50px] items-center justify-center rounded-full bg-[var(--accent)] px-7 py-3 text-sm font-bold text-white transition-all hover:bg-[var(--accent-strong)] ${className}`}
    >
      {children}
    </a>
  );
}

function ActionButton({ onClick, children, className = "", disabled = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex min-h-[50px] items-center justify-center rounded-full bg-[var(--accent)] px-7 py-3 text-sm font-bold text-white transition-all hover:bg-[var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-70 ${className}`}
    >
      {children}
    </button>
  );
}

function GhostButton({ href, children, dark = false, className = "" }) {
  const tones = dark
    ? "border-white/20 bg-white/5 text-white hover:bg-white/10"
    : "border-[var(--border)] bg-white text-[var(--fg)] hover:bg-[var(--surface-soft)]";

  return (
    <a
      href={href}
      className={`inline-flex min-h-[50px] items-center justify-center rounded-full border px-7 py-3 text-sm font-semibold transition-all ${tones} ${className}`}
    >
      {children}
    </a>
  );
}

function Header({ t, lang, setLang, dark, setDark, onCheckout, isCheckingOut }) {
  const [open, setOpen] = useState(false);

  const navLinks = (
    <>
      {t.nav.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={() => setOpen(false)}
          className="text-[15px] text-[var(--fg-secondary)] transition-colors hover:text-[var(--fg)]"
        >
          {item.label}
        </a>
      ))}
    </>
  );

  return (
    <div className="absolute inset-x-0 top-0 z-20 px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="mx-auto max-w-[1560px] rounded-full border border-white/55 bg-[var(--surface)]/92 px-4 py-3 shadow-[0_18px_50px_rgba(45,26,16,0.08)] backdrop-blur-xl sm:px-5">
        <div className="flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent)] text-white">
              <Icon path={ICONS.spark} size={14} strokeWidth="2.4" />
            </span>
            <span className="font-display text-[2rem] leading-none text-[var(--fg)]">{t.site.brand}</span>
          </a>

          <nav className="hidden items-center gap-9 md:flex">{navLinks}</nav>

          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-center rounded-full border border-[var(--border)] bg-white px-1 py-1">
              {["ru", "en"].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setLang(value)}
                  className={`rounded-full px-3 py-1 text-xs font-bold uppercase transition-all ${
                    lang === value ? "bg-[var(--accent)] text-white" : "text-[var(--fg-muted)]"
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setDark((state) => !state)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--fg)]"
              aria-label="Toggle theme"
            >
              <Icon path={dark ? ICONS.sun : ICONS.moon} size={16} />
            </button>
            <ActionButton onClick={onCheckout} disabled={isCheckingOut}>
              {isCheckingOut ? t.checkout.loading : t.site.navCta}
            </ActionButton>
          </div>

          <button
            type="button"
            onClick={() => setOpen((state) => !state)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--fg)] md:hidden"
          >
            <Icon path={open ? ICONS.close : ICONS.menu} size={18} />
          </button>
        </div>

        {open ? (
          <div className="mt-4 border-t border-[var(--border)] pt-4 md:hidden">
            <nav className="flex flex-col gap-4">{navLinks}</nav>
            <div className="mt-5 flex items-center gap-3">
              <div className="flex items-center rounded-full border border-[var(--border)] bg-white px-1 py-1">
                {["ru", "en"].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setLang(value)}
                    className={`rounded-full px-3 py-1 text-xs font-bold uppercase transition-all ${
                      lang === value ? "bg-[var(--accent)] text-white" : "text-[var(--fg-muted)]"
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setDark((state) => !state)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--fg)]"
              >
                <Icon path={dark ? ICONS.sun : ICONS.moon} size={16} />
              </button>
            </div>
            <ActionButton onClick={onCheckout} disabled={isCheckingOut} className="mt-5 w-full">
              {isCheckingOut ? t.checkout.loading : t.site.navCta}
            </ActionButton>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function Hero({ t, lang, setLang, dark, setDark, onCheckout, isCheckingOut }) {
  return (
    <section className="relative px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="mx-auto max-w-[1560px] overflow-hidden rounded-[30px] bg-[#18120e]">
        <div
          className="relative min-h-[860px] bg-cover bg-center"
          style={{ backgroundImage: `url("${IMAGES.hero}")` }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,12,9,0.82)_0%,rgba(17,12,9,0.48)_35%,rgba(17,12,9,0.18)_68%,rgba(17,12,9,0.06)_100%)]" />
          <Header
            t={t}
            lang={lang}
            setLang={setLang}
            dark={dark}
            setDark={setDark}
            onCheckout={onCheckout}
            isCheckingOut={isCheckingOut}
          />

          <div className="relative z-10 flex min-h-[860px] items-end px-8 pb-10 pt-32 sm:px-12 sm:pb-12 lg:px-20 lg:pb-16">
            <div className="max-w-[860px]">
              <div className="inline-flex rounded-full border border-white/15 bg-[rgba(232,122,67,0.24)] px-6 py-3 text-sm font-bold text-white backdrop-blur">
                {t.hero.eyebrow}
              </div>
              <h1 className="mt-9 max-w-[11ch] font-display text-[4.4rem] leading-[0.9] tracking-[-0.03em] text-white sm:text-[5.5rem] lg:text-[7.3rem]">
                <span className="block text-[var(--accent)]">{t.hero.titleAccent}</span>
                <span className="block">{t.hero.titleMain}</span>
              </h1>
              <p className="mt-8 max-w-[980px] text-[1.02rem] leading-[1.6] text-[rgba(255,250,245,0.9)] sm:text-[1.1rem] lg:text-[1.2rem]">
                {t.hero.lead}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ActionButton onClick={onCheckout} disabled={isCheckingOut}>
                  {isCheckingOut ? t.checkout.loading : t.hero.primaryCta}
                  <Icon path={ICONS.arrow} size={15} className="ml-2" />
                </ActionButton>
                <GhostButton href="#steps" dark>
                  {t.hero.secondaryCta}
                </GhostButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemIntro({ t }) {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1560px]">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          {t.intro.map((item) => (
            <div key={item.title}>
              <h2 className="font-display text-[3rem] leading-[0.96] text-[var(--fg)] sm:text-[3.3rem] lg:text-[3.55rem]">
                {item.title}
              </h2>
              <p className="mt-5 max-w-[560px] text-[1rem] leading-[1.65] text-[var(--fg-secondary)] sm:text-[1.08rem]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Steps({ t }) {
  return (
    <section id="steps" className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-[1560px]">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
            {t.steps.eyebrow}
          </p>
          <h2 className="mx-auto mt-6 max-w-[1400px] font-display text-[3.5rem] leading-[0.96] tracking-[-0.03em] text-[var(--fg)] sm:text-[4.2rem] lg:text-[5.15rem]">
            {t.steps.title}
          </h2>
          <p className="mx-auto mt-6 max-w-[760px] text-[1.1rem] leading-[1.65] text-[var(--fg-secondary)]">
            {t.steps.text}
          </p>
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-3 lg:gap-16">
          {t.steps.items.map((item, index) => (
            <article key={item.number} className="max-w-[430px]">
              <div className="mb-8 text-[var(--accent)]">
                <Icon
                  path={index === 0 ? ICONS.camera : index === 1 ? ICONS.spark : ICONS.check}
                  size={24}
                  strokeWidth="1.8"
                />
              </div>
              <h3 className="font-display text-[2.3rem] leading-[1] text-[var(--fg)] sm:text-[2.65rem]">
                {item.title}
              </h3>
              <p className="mt-5 text-[1rem] leading-[1.7] text-[var(--fg-secondary)] sm:text-[1.08rem]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Identity({ t }) {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-[1560px] items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-24">
        <div className="overflow-hidden rounded-[26px]">
          <img src={IMAGES.identity} alt="" className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
            {t.story.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-[3.1rem] leading-[0.96] tracking-[-0.03em] text-[var(--fg)] sm:text-[4rem] lg:text-[4.7rem]">
            {t.story.title}
          </h2>
          <p className="mt-6 text-[1rem] leading-[1.72] text-[var(--fg-secondary)] sm:text-[1.08rem]">
            {t.story.text}
          </p>
          <ul className="mt-8 grid gap-5">
            {t.story.bullets.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="mt-2 inline-block h-3 w-3 rounded-full bg-[var(--accent)]" />
                <span className="text-[1rem] leading-[1.6] text-[var(--fg)] sm:text-[1.08rem]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Author({ t }) {
  return (
    <section id="author" className="px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto grid max-w-[1560px] items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div className="overflow-hidden rounded-[26px]">
          <img src={IMAGES.author} alt="" className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
            {t.author.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-[3rem] leading-[0.96] tracking-[-0.03em] text-[var(--fg)] sm:text-[3.8rem] lg:text-[4.5rem]">
            {t.author.title}
          </h2>
          <p className="mt-6 text-[1rem] leading-[1.72] text-[var(--fg-secondary)] sm:text-[1.08rem]">
            {t.author.text}
          </p>
          <div className="mt-7 grid gap-4">
            {t.author.facts.map((item) => (
              <div key={item} className="flex items-start gap-4">
                <span className="mt-2 inline-block h-3 w-3 rounded-full bg-[var(--accent)]" />
                <span className="text-[1rem] leading-[1.65] text-[var(--fg)] sm:text-[1.08rem]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing({ t, onCheckout, isCheckingOut }) {
  const isLocalPreview =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1" ||
    window.location.hostname === "::1";

  return (
    <section id="pricing" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-[1560px]">
        <div className="mx-auto max-w-[760px] rounded-[32px] border border-[var(--accent)] bg-white shadow-[0_20px_60px_rgba(43,28,19,0.08)]">
          <div className="rounded-t-[32px] bg-[var(--accent)] px-8 py-5 text-center text-[1.1rem] font-bold text-white">
            {t.pricing.badge}
          </div>
          <div className="px-8 py-10 sm:px-12 sm:py-12">
            <h2 className="font-display text-[3rem] leading-[0.96] text-[var(--fg)] sm:text-[3.5rem]">
              {t.pricing.name}
            </h2>
            <p className="mt-3 text-[1rem] text-[var(--fg-secondary)]">{t.pricing.caption}</p>
            <div className="mt-8 flex items-end gap-3">
              <div className="font-display text-[5.2rem] leading-none text-[var(--fg)] sm:text-[6rem]">
                {t.pricing.value}
              </div>
              <div className="pb-3 text-[1.8rem] text-[var(--fg-secondary)]">{t.pricing.currency}</div>
            </div>
            <ul className="mt-8 grid gap-5">
              {t.pricing.features.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-1 text-[var(--accent)]">
                    <Icon path={ICONS.check} size={18} strokeWidth="2.4" />
                  </span>
                  <span className="text-[1rem] leading-[1.65] text-[var(--fg-secondary)] sm:text-[1.08rem]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <ActionButton onClick={onCheckout} disabled={isCheckingOut} className="mt-10 w-full">
              {isCheckingOut ? t.checkout.loading : t.pricing.cta}
            </ActionButton>
            {isLocalPreview ? (
              <GhostButton
                href="https://t.me/StyleSelf_with_Svetlana"
                className="mt-4 w-full"
              >
                {t.pricing.telegramCta}
              </GhostButton>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ({ t }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-[1560px]">
        <div className="mx-auto max-w-[920px]">
          <p className="text-center text-sm font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
            {t.faq.eyebrow}
          </p>
          <h2 className="mt-5 text-center font-display text-[3rem] leading-[0.96] tracking-[-0.03em] text-[var(--fg)] sm:text-[3.9rem] lg:text-[4.6rem]">
            {t.faq.title}
          </h2>
        </div>
        <div className="mx-auto mt-14 max-w-[980px] border-t border-[var(--border)]">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={item.q} className="border-b border-[var(--border)] py-6">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-start justify-between gap-6 text-left"
                >
                  <span className="text-[1.1rem] font-medium leading-[1.5] text-[var(--fg)] sm:text-[1.2rem]">
                    {item.q}
                  </span>
                  <span className="pt-1 text-[var(--fg-secondary)]">
                    <Icon path={isOpen ? ICONS.minus : ICONS.plus} size={18} />
                  </span>
                </button>
                {isOpen ? (
                  <p className="mt-4 max-w-[760px] text-[1rem] leading-[1.7] text-[var(--fg-secondary)]">
                    {item.a}
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTA({ t, onCheckout, isCheckingOut }) {
  const isLocalPreview =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1" ||
    window.location.hostname === "::1";

  return (
    <section id="cta" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-[1560px] overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_78%_40%,rgba(232,122,67,0.22),transparent_22%),linear-gradient(180deg,#17120f_0%,#0f0b09_100%)] px-8 py-20 text-center sm:px-12">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
          {t.cta.eyebrow}
        </p>
        <h2 className="mx-auto mt-5 max-w-[940px] font-display text-[3.3rem] leading-[0.96] tracking-[-0.03em] text-white sm:text-[4.2rem] lg:text-[5rem]">
          {t.cta.title}
        </h2>
        <p className="mx-auto mt-6 max-w-[760px] text-[1rem] leading-[1.72] text-[rgba(255,247,241,0.76)] sm:text-[1.08rem]">
          {t.cta.text}
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ActionButton onClick={onCheckout} disabled={isCheckingOut}>
            {isCheckingOut ? t.checkout.loading : t.cta.primary}
          </ActionButton>
          {isLocalPreview ? (
            <GhostButton href="https://t.me/StyleSelf_with_Svetlana" dark>
              {t.cta.telegram}
            </GhostButton>
          ) : null}
          <GhostButton href={t.cta.secondaryHref} dark>
            {t.cta.secondary}
          </GhostButton>
        </div>
      </div>
    </section>
  );
}

function Footer({ t }) {
  return (
    <footer className="px-4 pb-10 sm:px-6">
      <div className="mx-auto flex max-w-[1560px] flex-col items-start justify-between gap-6 border-t border-[var(--border)] pt-6 text-sm text-[var(--fg-muted)] md:flex-row">
        <div>{t.site.copyright}</div>
        <div className="flex gap-6">
          {t.footer.columns.flatMap((column) => column.links).slice(0, 3).map((link) => (
            <a key={link.label} href={link.href} className="hover:text-[var(--fg)]">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/ {
  lang: "ru",
  dark: false,
} /*EDITMODE-END*/;

function App() {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem("styleself-lang");
      return saved === "en" ? "en" : TWEAK_DEFAULTS.lang;
    } catch (error) {
      return TWEAK_DEFAULTS.lang;
    }
  });

  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem("styleself-dark");
      if (saved === "true" || saved === "false") return saved === "true";
      return TWEAK_DEFAULTS.dark;
    } catch (error) {
      return TWEAK_DEFAULTS.dark;
    }
  });

  const t = useMemo(() => window.DATA[lang], [lang]);
  const [checkoutError, setCheckoutError] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.setAttribute("lang", lang);
    try {
      localStorage.setItem("styleself-lang", lang);
      localStorage.setItem("styleself-dark", String(dark));
    } catch (error) {}
  }, [dark, lang]);

  const handleCheckout = async () => {
    if (isCheckingOut) return;

    setCheckoutError("");
    setIsCheckingOut(true);

    try {
      const config = window.APP_CONFIG || {};

      const response = await fetch(config.createPaymentEndpoint || "/api/payments/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: "styleself_full_access",
        }),
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error || t.checkout.error);
      }

      if (payload.checkoutUrl) {
        window.location.href = payload.checkoutUrl;
        return;
      }

      throw new Error(t.checkout.error);
    } catch (error) {
      setCheckoutError(error.message || t.checkout.error);
      setIsCheckingOut(false);
    }
  };

  return (
    <>
      <main id="hero">
        <Hero
          t={t}
          lang={lang}
          setLang={setLang}
          dark={dark}
          setDark={setDark}
          onCheckout={handleCheckout}
          isCheckingOut={isCheckingOut}
        />
        <ProblemIntro t={t} />
        <Steps t={t} />
        <Identity t={t} />
        <Author t={t} />
        <Pricing t={t} onCheckout={handleCheckout} isCheckingOut={isCheckingOut} />
        <FAQ t={t} />
        {checkoutError ? (
          <div className="px-4 pt-2 text-center text-sm text-red-600 sm:px-6">{checkoutError}</div>
        ) : null}
        <CTA t={t} onCheckout={handleCheckout} isCheckingOut={isCheckingOut} />
      </main>
      <Footer t={t} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
