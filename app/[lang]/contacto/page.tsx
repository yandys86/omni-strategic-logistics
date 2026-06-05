import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import { DICT } from "@/lib/dictionaries";
import { isLang } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { whatsappLink, phoneLink } from "@/lib/whatsapp";

type Params = { lang: string };

export function generateMetadata({ params }: { params: Params }): Metadata {
  if (!isLang(params.lang)) return {};
  const t = DICT[params.lang];
  return {
    title: t.contactTitle,
    description: t.contactLead,
    alternates: {
      canonical: `${SITE.url}/${params.lang}/contacto`,
      languages: {
        es: `${SITE.url}/es/contacto`,
        en: `${SITE.url}/en/contacto`
      }
    }
  };
}

export default function ContactPage({ params }: { params: Params }) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang;
  const t = DICT[lang];

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <header className="text-center mb-12">
        <div className="text-[10px] uppercase tracking-wide3 text-gold mb-3">
          {SITE.region}
        </div>
        <h1 className="font-display text-4xl sm:text-5xl text-cream leading-tight">
          {t.contactTitle}
        </h1>
        <p className="mt-4 text-cream/70 text-lg">{t.contactLead}</p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        <a
          href={whatsappLink(lang)}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl border border-navy-line bg-navy-deep/40 p-6 hover:border-gold/60 transition"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="size-11 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
              <Icon name="whatsapp" className="size-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wide3 text-cream/50">
                {t.contactWhatsappLabel}
              </div>
              <div className="font-display text-lg text-cream">+1 (407) 912-7149</div>
            </div>
          </div>
          <p className="text-sm text-cream/60">{t.contactWhatsappCopy}</p>
        </a>

        <a
          href={phoneLink()}
          className="group rounded-2xl border border-navy-line bg-navy-deep/40 p-6 hover:border-gold/60 transition"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="size-11 rounded-full bg-gold/15 flex items-center justify-center text-gold-light">
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M5 4 L9 4 L11 9 L9 11 C 10 14 14 17 16 18 L 18 16 L 22 18 L 22 22 C 14 22 4 14 4 6 Z" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wide3 text-cream/50">
                {t.contactPhoneLabel}
              </div>
              <div className="font-display text-lg text-cream">{SITE.phoneDisplay}</div>
            </div>
          </div>
          <p className="text-sm text-cream/60">{t.contactHoursCopy}</p>
        </a>

        <div className="sm:col-span-2 rounded-2xl border border-navy-line bg-navy-deep/40 p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="size-11 rounded-full bg-gold/15 flex items-center justify-center text-gold-light">
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 2 C 8 2 5 5 5 9 C 5 14 12 22 12 22 C 12 22 19 14 19 9 C 19 5 16 2 12 2 Z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wide3 text-cream/50">
                {lang === "es" ? "Zona" : "Service area"}
              </div>
              <div className="font-display text-lg text-cream">{SITE.region}</div>
            </div>
          </div>
          <p className="text-sm text-cream/60">
            {lang === "es"
              ? "Servimos Orlando y zonas cercanas en Florida Central."
              : "We serve Orlando and surrounding areas in Central Florida."}
          </p>
        </div>
      </div>
    </main>
  );
}
