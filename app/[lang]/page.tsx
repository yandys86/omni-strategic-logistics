import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Icon from "@/components/Icon";
import { DICT } from "@/lib/dictionaries";
import { isLang } from "@/lib/i18n";
import { SERVICES } from "@/lib/services";
import { whatsappLink, phoneLink } from "@/lib/whatsapp";

export default function HomePage({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang;
  const t = DICT[lang];

  return (
    <main>
      <Hero lang={lang} />

      <section id="servicios" className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <header className="mb-12 max-w-2xl">
          <div className="text-[10px] uppercase tracking-wide3 text-gold mb-3">
            {t.servicesEyebrow}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl text-cream leading-tight">
            {t.servicesHeading}
          </h2>
          <p className="mt-4 text-cream/70">{t.servicesSub}</p>
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <ServiceCard key={s.slug} service={s} lang={lang} />
          ))}
        </div>
      </section>

      <section className="bg-navy-deep border-y border-navy-line">
        <div className="mx-auto max-w-6xl px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-[10px] uppercase tracking-wide3 text-gold mb-3">
              {t.brokerEyebrow}
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-cream leading-tight">
              {t.brokerHeading}
            </h2>
            <p className="mt-5 text-cream/70 leading-relaxed">{t.brokerCopy}</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: "shield",    label: t.valuesProfessionalism, copy: t.valuesProfessionalismCopy },
              { icon: "check",     label: t.valuesSafety,          copy: t.valuesSafetyCopy },
              { icon: "handshake", label: t.valuesCommitment,      copy: t.valuesCommitmentCopy }
            ].map((v) => (
              <div key={v.label} className="rounded-2xl border border-navy-line bg-navy p-5">
                <div className="size-10 rounded-full bg-gold/15 flex items-center justify-center text-gold-light mb-4">
                  <Icon name={v.icon} className="size-5" />
                </div>
                <div className="font-display text-lg text-cream">{v.label}</div>
                <p className="text-sm text-cream/65 mt-1">{v.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <div className="text-[10px] uppercase tracking-wide3 text-gold mb-3">
          {t.ctaBlockEyebrow}
        </div>
        <h2 className="font-display text-3xl sm:text-5xl text-cream leading-tight">
          {t.ctaBlockTitle}
        </h2>
        <p className="mt-5 text-cream/70">{t.ctaBlockCopy}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
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
      </section>
    </main>
  );
}
