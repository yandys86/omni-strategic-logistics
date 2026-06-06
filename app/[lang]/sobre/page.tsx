import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import { DICT } from "@/lib/dictionaries";
import { isLang } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { CATEGORIES, getServicesByCategory } from "@/lib/services";
import { SITE } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";

type Params = { lang: string };

export function generateMetadata({ params }: { params: Params }): Metadata {
  if (!isLang(params.lang)) return {};
  const t = DICT[params.lang];
  return {
    title: t.aboutTitle,
    description: t.aboutLead,
    alternates: {
      canonical: `${SITE.url}/${params.lang}/sobre`,
      languages: {
        es: `${SITE.url}/es/sobre`,
        en: `${SITE.url}/en/sobre`
      }
    }
  };
}

export default function AboutPage({ params }: { params: Params }) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang;
  const t = DICT[lang];

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <header className="text-center mb-12">
        <div className="text-[10px] uppercase tracking-wide3 text-gold mb-3">
          {SITE.legalName}
        </div>
        <h1 className="font-display text-4xl sm:text-5xl text-cream leading-tight">
          {t.aboutTitle}
        </h1>
        <p className="mt-4 text-cream/70 text-lg max-w-2xl mx-auto">{t.aboutLead}</p>
      </header>

      <article className="space-y-6 text-cream/80 text-lg leading-relaxed max-w-3xl mx-auto">
        <p>{t.aboutP1}</p>
        <p>{t.aboutP2}</p>
        <p>{t.aboutP3}</p>
      </article>

      <div className="mt-16 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {[
          { icon: "shield",    label: t.valuesProfessionalism, copy: t.valuesProfessionalismCopy },
          { icon: "check",     label: t.valuesSafety,          copy: t.valuesSafetyCopy },
          { icon: "handshake", label: t.valuesCommitment,      copy: t.valuesCommitmentCopy }
        ].map((v) => (
          <div key={v.label} className="rounded-2xl border border-navy-line bg-navy-deep/40 p-5">
            <div className="size-10 rounded-full bg-gold/15 flex items-center justify-center text-gold-light mb-4">
              <Icon name={v.icon} className="size-5" />
            </div>
            <div className="font-display text-lg text-cream">{v.label}</div>
            <p className="text-sm text-cream/65 mt-1">{v.copy}</p>
          </div>
        ))}
      </div>

      <section className="mt-20 pt-10 border-t border-navy-line">
        <div className="text-[10px] uppercase tracking-wide3 text-gold mb-3 text-center">
          {lang === "es" ? "Areas de negocio" : "Business areas"}
        </div>
        <h2 className="font-display text-3xl sm:text-4xl text-cream leading-tight text-center mb-12">
          {lang === "es"
            ? "Lo que coordinamos, area por area."
            : "What we coordinate, area by area."}
        </h2>

        <div className="space-y-10">
          {CATEGORIES.map((category) => {
            const services = getServicesByCategory(category.key);
            return (
              <div key={category.key}>
                <div className="text-[10px] uppercase tracking-wide3 text-gold mb-2">
                  {category.eyebrow[lang]}
                </div>
                <div className="font-display text-2xl text-cream mb-5">
                  {category.heading[lang]}
                </div>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 text-sm text-cream/80">
                  {services.map((s) => (
                    <li key={s.slug} className="flex gap-2">
                      <span className="text-gold mt-0.5">✓</span>
                      <Link
                        href={`/${lang}/servicios/${s.slug}`}
                        className="hover:text-cream hover:underline"
                      >
                        {s.i18n[lang].name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <div className="mt-16 flex flex-wrap justify-center gap-3">
        <a
          href={whatsappLink(lang)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-7 py-3 text-sm uppercase tracking-wide2 font-semibold hover:bg-[#1ebe5b] transition"
        >
          <Icon name="whatsapp" className="size-5" />
          {t.ctaWhatsapp}
        </a>
        <Link
          href={`/${lang}#servicios`}
          className="inline-flex items-center gap-2 rounded-full border border-cream/30 text-cream px-7 py-3 text-sm uppercase tracking-wide2 hover:border-gold hover:text-gold-light transition"
        >
          {t.navServices}
        </Link>
      </div>
    </main>
  );
}
