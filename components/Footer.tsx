import Link from "next/link";
import Image from "next/image";
import { DICT } from "@/lib/dictionaries";
import type { Lang } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { whatsappLink, phoneLink } from "@/lib/whatsapp";

export default function Footer({ lang }: { lang: Lang }) {
  const t = DICT[lang];
  return (
    <footer className="mt-24 bg-navy-deep border-t border-navy-line">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 sm:grid-cols-4 text-sm text-cream/70">
        <div className="sm:col-span-2">
          <div className="flex items-center gap-3 mb-3">
            <Image src="/logo.svg" alt={SITE.name} width={44} height={44} />
            <div className="font-display text-2xl text-cream leading-tight">{SITE.legalName}</div>
          </div>
          <p className="mt-1 max-w-sm">{t.footerBlurb}</p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/40 px-3 py-1 text-xs uppercase tracking-wide3 text-gold-light">
            ✓ {t.footerInsured}
          </div>
        </div>
        <div>
          <div className="uppercase tracking-wide3 text-xs text-cream/40 mb-2">{t.footerServicesTitle}</div>
          <ul className="space-y-1">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/${lang}/servicios/${s.slug}`} className="hover:text-cream">
                  {s.i18n[lang].name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="uppercase tracking-wide3 text-xs text-cream/40 mb-2">{t.footerContactTitle}</div>
          <ul className="space-y-2">
            <li>
              <a href={phoneLink()} className="hover:text-cream">{SITE.phoneDisplay}</a>
            </li>
            <li>
              <a href={whatsappLink(lang)} target="_blank" rel="noopener noreferrer" className="hover:text-cream">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-cream break-all">
                {SITE.email}
              </a>
            </li>
            <li className="pt-1 text-cream/50">{SITE.region}</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-cream/30 pb-8 border-t border-navy-line pt-6 mx-6">
        © {new Date().getFullYear()} {SITE.legalName}. {t.footerCopyright}
      </div>
    </footer>
  );
}
