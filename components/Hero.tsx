import Image from "next/image";
import { DICT } from "@/lib/dictionaries";
import type { Lang } from "@/lib/i18n";
import { whatsappLink, phoneLink } from "@/lib/whatsapp";
import Icon from "@/components/Icon";
import HeroNetwork from "@/components/HeroNetwork";

export default function Hero({ lang }: { lang: Lang }) {
  const t = DICT[lang];
  return (
    <section className="relative bg-gradient-to-b from-navy-deep via-navy to-navy text-cream overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      <HeroNetwork />
      <Image
        src="/logo.svg"
        alt=""
        width={520}
        height={520}
        aria-hidden="true"
        className="absolute right-[-80px] top-1/2 -translate-y-1/2 size-[420px] sm:size-[520px] opacity-[0.06] pointer-events-none select-none"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-3 py-1 text-[11px] uppercase tracking-wide3 text-gold-light mb-6">
          <span className="size-1.5 rounded-full bg-gold animate-pulse" />
          {t.heroEyebrow}
        </div>
        <h1 className="font-display text-5xl sm:text-7xl font-semibold leading-[1.04] tracking-tight">
          {t.heroTitle}
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-cream/75">{t.heroSubtitle}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappLink(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-7 py-3 text-sm uppercase tracking-wide2 font-semibold hover:bg-[#1ebe5b] transition"
          >
            <Icon name="whatsapp" className="size-5" />
            {t.ctaQuote}
          </a>
          <a
            href={phoneLink()}
            className="inline-flex items-center gap-2 rounded-full border border-cream/30 text-cream px-7 py-3 text-sm uppercase tracking-wide2 hover:border-gold hover:text-gold-light transition"
          >
            {t.ctaCall}
          </a>
        </div>
      </div>
    </section>
  );
}
