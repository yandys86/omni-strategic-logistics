import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import { DICT } from "@/lib/dictionaries";
import { LANGS, isLang } from "@/lib/i18n";
import { SERVICES, getService } from "@/lib/services";
import { SITE } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";

type Params = { lang: string; slug: string };

export function generateStaticParams() {
  return LANGS.flatMap((lang) =>
    SERVICES.map((s) => ({ lang, slug: s.slug }))
  );
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  if (!isLang(params.lang)) return {};
  const service = getService(params.slug);
  if (!service) return { title: "404" };
  const t = service.i18n[params.lang];
  return {
    title: t.name,
    description: t.short,
    alternates: {
      canonical: `${SITE.url}/${params.lang}/servicios/${service.slug}`,
      languages: {
        es: `${SITE.url}/es/servicios/${service.slug}`,
        en: `${SITE.url}/en/servicios/${service.slug}`
      }
    }
  };
}

export default function ServicePage({ params }: { params: Params }) {
  if (!isLang(params.lang)) notFound();
  const service = getService(params.slug);
  if (!service) notFound();
  const lang = params.lang;
  const dict = DICT[lang];
  const t = service.i18n[lang];

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <Link
        href={`/${lang}#servicios`}
        className="text-xs uppercase tracking-wide2 text-cream/60 hover:text-cream"
      >
        ← {dict.servicePageBack}
      </Link>

      <header className="mt-8 flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="size-16 rounded-2xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-navy-deep shrink-0">
          <Icon name={service.icon} className="size-8" />
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-wide3 text-gold mb-1">
            {dict.servicesEyebrow}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-cream leading-tight">
            {t.name}
          </h1>
          <p className="mt-2 text-cream/70">{t.short}</p>
        </div>
      </header>

      <section className="mt-12 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-cream/80 leading-relaxed text-lg">{t.long}</p>

          <div className="rounded-2xl border border-navy-line bg-navy-deep/40 p-6">
            <div className="font-display text-xl text-cream mb-4">
              {dict.servicePageWhatYouGet}
            </div>
            <ul className="space-y-2">
              {t.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-cream/80">
                  <span className="text-gold mt-1">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start space-y-4">
          <div className="rounded-2xl border border-gold/40 bg-gradient-to-br from-gold/10 to-transparent p-6">
            <div className="font-display text-xl text-cream mb-2">
              {lang === "es" ? "¿Necesitás este servicio?" : "Need this service?"}
            </div>
            <p className="text-sm text-cream/70 mb-4">{dict.ctaBlockCopy}</p>
            <a
              href={whatsappLink(lang, t.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center rounded-full bg-[#25D366] text-white py-3 text-sm font-semibold uppercase tracking-wide2 hover:bg-[#1ebe5b] transition"
            >
              {dict.servicePageGetQuote}
            </a>
            <div className="mt-3 text-center text-xs text-cream/50">
              o llamá al <a href={`tel:+${SITE.whatsapp}`} className="text-cream hover:underline">{SITE.phoneDisplay}</a>
            </div>
          </div>
        </aside>
      </section>

      <section className="mt-16 pt-10 border-t border-navy-line">
        <div className="text-[10px] uppercase tracking-wide3 text-gold mb-3">
          {lang === "es" ? "Otros servicios" : "Other services"}
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {otherServices.map((s) => (
            <Link
              key={s.slug}
              href={`/${lang}/servicios/${s.slug}`}
              className="rounded-xl border border-navy-line bg-navy-deep/40 p-4 hover:border-gold/60 transition"
            >
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-full bg-gold/15 flex items-center justify-center text-gold-light">
                  <Icon name={s.icon} className="size-4" />
                </div>
                <div className="font-display text-base text-cream">{s.i18n[lang].name}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
