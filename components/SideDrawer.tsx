"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DICT } from "@/lib/dictionaries";
import type { Lang } from "@/lib/i18n";
import { CATEGORIES, getServicesByCategory } from "@/lib/services";
import { SITE } from "@/lib/site";
import { phoneLink, whatsappLink } from "@/lib/whatsapp";
import Icon from "@/components/Icon";

export default function SideDrawer({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const t = DICT[lang];

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={lang === "es" ? "Abrir menu" : "Open menu"}
        className="inline-flex items-center justify-center size-10 rounded-full border border-white/15 text-cream hover:border-gold hover:text-gold-light transition"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M4 7 L20 7 M4 12 L20 12 M4 17 L20 17" />
        </svg>
      </button>

      <div
        onClick={close}
        aria-hidden="true"
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label={lang === "es" ? "Menu de navegacion" : "Navigation menu"}
        className={`fixed top-0 right-0 h-full w-[88vw] max-w-sm bg-navy-deep border-l border-navy-line z-50 overflow-y-auto transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="sticky top-0 z-10 bg-navy-deep border-b border-navy-line px-5 py-4 flex items-center justify-between">
          <Link href={`/${lang}`} onClick={close} className="flex items-center gap-3">
            <Image src="/logo.svg" alt={SITE.name} width={36} height={36} />
            <div className="leading-tight">
              <div className="font-display text-base text-cream">{SITE.name}</div>
              <div className="text-[9px] uppercase tracking-wide3 text-gold-light/70">LLC · {SITE.region}</div>
            </div>
          </Link>
          <button
            type="button"
            onClick={close}
            aria-label={lang === "es" ? "Cerrar menu" : "Close menu"}
            className="size-9 inline-flex items-center justify-center rounded-full border border-white/15 text-cream hover:border-gold hover:text-gold-light transition"
          >
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6 L18 18 M18 6 L6 18" />
            </svg>
          </button>
        </div>

        <div className="px-5 py-5 space-y-6 text-cream/85">
          <nav className="flex flex-col gap-2 pb-5 border-b border-navy-line">
            <Link href={`/${lang}`}          onClick={close} className="font-display text-xl hover:text-cream transition">{lang === "es" ? "Inicio" : "Home"}</Link>
            <Link href={`/${lang}/sobre`}    onClick={close} className="font-display text-xl hover:text-cream transition">{t.navAbout}</Link>
            <Link href={`/${lang}/contacto`} onClick={close} className="font-display text-xl hover:text-cream transition">{t.navContact}</Link>
          </nav>

          <div>
            <div className="text-[10px] uppercase tracking-wide3 text-gold mb-3">
              {lang === "es" ? "Areas de negocio" : "Business areas"}
            </div>
            <div className="space-y-5">
              {CATEGORIES.map((category) => {
                const services = getServicesByCategory(category.key);
                return (
                  <div key={category.key}>
                    <div className="font-display text-base text-cream mb-2 leading-tight">
                      {category.eyebrow[lang]}
                    </div>
                    <ul className="space-y-1.5 pl-1">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/${lang}/servicios/${s.slug}`}
                            onClick={close}
                            className="flex items-center gap-2 text-sm text-cream/70 hover:text-cream group"
                          >
                            <span className="size-6 rounded-full bg-gold/15 flex items-center justify-center text-gold-light shrink-0 group-hover:bg-gold/25 transition">
                              <Icon name={s.icon} className="size-3" />
                            </span>
                            <span>{s.i18n[lang].name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-5 border-t border-navy-line space-y-3">
            <div className="text-[10px] uppercase tracking-wide3 text-gold">
              {lang === "es" ? "Contacto directo" : "Direct contact"}
            </div>
            <a
              href={whatsappLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white py-3 text-sm font-semibold uppercase tracking-wide2 hover:bg-[#1ebe5b] transition"
            >
              <Icon name="whatsapp" className="size-5" />
              {t.ctaWhatsapp}
            </a>
            <a
              href={phoneLink()}
              className="flex items-center justify-center gap-2 rounded-full border border-cream/30 text-cream py-3 text-sm uppercase tracking-wide2 hover:border-gold hover:text-gold-light transition"
            >
              {SITE.phoneDisplay}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="block text-center text-xs text-cream/60 hover:text-cream pt-1"
            >
              {SITE.email}
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
