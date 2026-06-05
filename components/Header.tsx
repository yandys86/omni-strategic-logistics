import Link from "next/link";
import { DICT } from "@/lib/dictionaries";
import type { Lang } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { phoneLink } from "@/lib/whatsapp";
import LangSwitcher from "@/components/LangSwitcher";

export default function Header({ lang }: { lang: Lang }) {
  const t = DICT[lang];
  return (
    <header className="border-b border-navy-line bg-navy-deep/95 backdrop-blur sticky top-0 z-30">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-4">
        <Link href={`/${lang}`} className="flex items-center gap-3">
          <div className="size-9 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-navy-deep font-bold">
            O
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg text-cream">{SITE.name}</div>
            <div className="text-[10px] uppercase tracking-wide3 text-gold-light/70">
              LLC · {SITE.region}
            </div>
          </div>
        </Link>

        <nav className="hidden sm:flex items-center gap-7 text-sm tracking-wide2 uppercase text-cream/70">
          <Link href={`/${lang}#servicios`}     className="hover:text-cream transition">{t.navServices}</Link>
          <Link href={`/${lang}/sobre`}         className="hover:text-cream transition">{t.navAbout}</Link>
          <Link href={`/${lang}/contacto`}      className="hover:text-cream transition">{t.navContact}</Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={phoneLink()}
            className="hidden md:inline text-sm text-cream/80 hover:text-cream tracking-wide2"
          >
            {SITE.phoneDisplay}
          </a>
          <LangSwitcher current={lang} />
        </div>
      </div>
    </header>
  );
}
