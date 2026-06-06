"use client";

import { useEffect, useRef, useState } from "react";
import type { Lang } from "@/lib/i18n";
import { CATEGORIES, getServicesByCategory, type CategoryKey } from "@/lib/services";
import { SITE } from "@/lib/site";

const STRINGS = {
  es: {
    open: "Hablar con nosotros",
    title: "Asistente Omni",
    subtitle: "Te conecto en 30 segundos",
    close: "Cerrar",
    botGreet:
      "Hola! Te conecto con el especialista correcto en 30 segundos. ¿En que area podemos ayudarte?",
    botService: "Perfecto. ¿Que servicio especifico necesitas?",
    botDetail: "Contame brevemente que necesitas (1-2 oraciones).",
    detailPlaceholder: "Ej: Necesito importar 200 unidades de electronicos desde China...",
    botContact: "Por ultimo, dejame tu nombre y telefono para coordinar.",
    namePlaceholder: "Tu nombre completo",
    phonePlaceholder: "+54 9 11 ...",
    botReady:
      "Listo! Te paso a WhatsApp con todo el resumen ya armado. Tocas el boton y respondemos enseguida.",
    submit: "Continuar",
    sendWhatsApp: "Abrir WhatsApp",
    startOver: "Empezar de nuevo",
    wa: {
      prefix: "🔵 NUEVA CONSULTA OMNI",
      area: "Area",
      service: "Servicio",
      detail: "Detalle",
      name: "Nombre",
      phone: "Telefono"
    }
  },
  en: {
    open: "Talk to us",
    title: "Omni Assistant",
    subtitle: "I'll connect you in 30 seconds",
    close: "Close",
    botGreet:
      "Hi! I'll connect you with the right specialist in 30 seconds. Which area can we help you with?",
    botService: "Perfect. Which specific service do you need?",
    botDetail: "Briefly tell me what you need (1-2 sentences).",
    detailPlaceholder: "E.g. I need to import 200 units of electronics from China...",
    botContact: "Lastly, leave your name and phone so we can coordinate.",
    namePlaceholder: "Your full name",
    phonePlaceholder: "+1 ...",
    botReady:
      "All set! I'll forward you to WhatsApp with the summary ready. Tap the button and we'll reply right away.",
    submit: "Continue",
    sendWhatsApp: "Open WhatsApp",
    startOver: "Start over",
    wa: {
      prefix: "🔵 NEW OMNI INQUIRY",
      area: "Area",
      service: "Service",
      detail: "Details",
      name: "Name",
      phone: "Phone"
    }
  }
} as const;

function ChatBubbleIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M20.52 3.48A11.85 11.85 0 0 0 12.05 0C5.5 0 .17 5.32.17 11.87c0 2.09.55 4.13 1.59 5.93L.07 24l6.36-1.66a11.87 11.87 0 0 0 5.62 1.43h.01c6.55 0 11.88-5.32 11.88-11.87a11.8 11.8 0 0 0-3.42-8.42zM12.06 21.78h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.77.99 1-3.67-.23-.38a9.84 9.84 0 0 1-1.51-5.27c0-5.45 4.43-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.44 9.9-9.89 9.9z" />
    </svg>
  );
}

function BotMessage({ text }: { text: string }) {
  return (
    <div className="flex gap-2 items-end">
      <div className="size-7 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-navy-deep shrink-0">
        <ChatBubbleIcon className="size-3.5" />
      </div>
      <div className="rounded-2xl rounded-bl-sm bg-navy-light/40 border border-navy-line px-3.5 py-2.5 text-sm text-cream max-w-[82%] leading-snug">
        {text}
      </div>
    </div>
  );
}

function UserMessage({ text }: { text: string }) {
  return (
    <div className="flex justify-end">
      <div className="rounded-2xl rounded-br-sm bg-gold/15 border border-gold/30 px-3.5 py-2.5 text-sm text-cream max-w-[82%] leading-snug whitespace-pre-wrap">
        {text}
      </div>
    </div>
  );
}

type Option = { value: string; label: string };

function QuickReplies({ options, onPick }: { options: Option[]; onPick: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2 ml-9 mr-2">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onPick(o.value)}
          className="rounded-full border border-gold/40 bg-gold/5 hover:bg-gold/15 hover:border-gold text-gold-light text-xs px-3 py-1.5 transition"
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export default function LeadChatWizard({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const [areaKey, setAreaKey] = useState<CategoryKey | null>(null);
  const [serviceSlug, setServiceSlug] = useState<string | null>(null);
  const [detail, setDetail] = useState("");
  const [detailDraft, setDetailDraft] = useState("");
  const [name, setName] = useState("");
  const [nameDraft, setNameDraft] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneDraft, setPhoneDraft] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const s = STRINGS[lang];

  function reset() {
    setAreaKey(null);
    setServiceSlug(null);
    setDetail("");
    setDetailDraft("");
    setName("");
    setNameDraft("");
    setPhone("");
    setPhoneDraft("");
  }

  // Body scroll lock on mobile so the chat fullscreens cleanly
  useEffect(() => {
    if (open && window.innerWidth < 640) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Auto-scroll messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [open, areaKey, serviceSlug, detail, name, phone]);

  const chosenArea = areaKey ? CATEGORIES.find((c) => c.key === areaKey) : null;
  const services = areaKey ? getServicesByCategory(areaKey) : [];
  const chosenService = serviceSlug ? services.find((svc) => svc.slug === serviceSlug) : null;
  const contactComplete = name.trim() !== "" && phone.trim() !== "";
  const allComplete = !!areaKey && !!serviceSlug && detail.trim() !== "" && contactComplete;

  function buildWhatsAppHref(): string {
    const lines = [
      s.wa.prefix,
      "",
      `${s.wa.area}: ${chosenArea?.eyebrow[lang] || ""}`,
      `${s.wa.service}: ${chosenService?.i18n[lang].name || ""}`,
      `${s.wa.detail}: ${detail.trim()}`,
      "",
      `${s.wa.name}: ${name.trim()}`,
      `${s.wa.phone}: ${phone.trim()}`
    ];
    return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
  }

  return (
    <>
      {/* Launcher button */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={s.open}
          className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold to-gold-dark text-navy-deep px-5 py-3 text-sm font-semibold shadow-lg shadow-black/40 hover:scale-105 transition"
        >
          <ChatBubbleIcon className="size-5" />
          <span className="hidden sm:inline">{s.open}</span>
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={s.title}
          className="fixed inset-0 z-50 sm:inset-auto sm:bottom-5 sm:right-5 sm:w-[400px] sm:max-h-[78vh] sm:rounded-2xl overflow-hidden bg-navy border border-navy-line shadow-2xl flex flex-col"
        >
          <header className="px-4 py-3 bg-navy-deep border-b border-navy-line flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-navy-deep">
                <ChatBubbleIcon className="size-5" />
              </div>
              <div className="leading-tight">
                <div className="font-display text-cream text-base">{s.title}</div>
                <div className="text-[10px] uppercase tracking-wide3 text-gold-light/70">
                  {s.subtitle}
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={s.close}
              className="size-9 inline-flex items-center justify-center rounded-full border border-white/15 text-cream hover:border-gold hover:text-gold-light transition"
            >
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6 L18 18 M18 6 L6 18" />
              </svg>
            </button>
          </header>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-navy">
            {/* Step 1: area */}
            <BotMessage text={s.botGreet} />
            {areaKey ? (
              <UserMessage text={chosenArea!.eyebrow[lang]} />
            ) : (
              <QuickReplies
                options={CATEGORIES.map((c) => ({ value: c.key, label: c.eyebrow[lang] }))}
                onPick={(v) => setAreaKey(v as CategoryKey)}
              />
            )}

            {/* Step 2: service */}
            {areaKey && (
              <>
                <BotMessage text={s.botService} />
                {serviceSlug ? (
                  <UserMessage text={chosenService?.i18n[lang].name || ""} />
                ) : (
                  <QuickReplies
                    options={services.map((svc) => ({ value: svc.slug, label: svc.i18n[lang].name }))}
                    onPick={(v) => setServiceSlug(v)}
                  />
                )}
              </>
            )}

            {/* Step 3: detail */}
            {serviceSlug && (
              <>
                <BotMessage text={s.botDetail} />
                {detail ? (
                  <UserMessage text={detail} />
                ) : (
                  <div className="ml-9 mr-2 space-y-2">
                    <textarea
                      value={detailDraft}
                      onChange={(e) => setDetailDraft(e.target.value)}
                      placeholder={s.detailPlaceholder}
                      rows={3}
                      className="w-full rounded-xl bg-navy-deep/60 border border-navy-line text-sm text-cream p-3 placeholder:text-cream/30 focus:outline-none focus:border-gold/60 transition"
                    />
                    <button
                      type="button"
                      onClick={() => detailDraft.trim() && setDetail(detailDraft.trim())}
                      disabled={!detailDraft.trim()}
                      className="rounded-full bg-gold text-navy-deep text-xs font-semibold uppercase tracking-wide2 px-4 py-2 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gold-light transition"
                    >
                      {s.submit} →
                    </button>
                  </div>
                )}
              </>
            )}

            {/* Step 4: contact */}
            {detail && (
              <>
                <BotMessage text={s.botContact} />
                {contactComplete ? (
                  <UserMessage text={`${name}\n${phone}`} />
                ) : (
                  <div className="ml-9 mr-2 space-y-2">
                    <input
                      type="text"
                      value={nameDraft}
                      onChange={(e) => setNameDraft(e.target.value)}
                      placeholder={s.namePlaceholder}
                      className="w-full rounded-xl bg-navy-deep/60 border border-navy-line text-sm text-cream p-3 placeholder:text-cream/30 focus:outline-none focus:border-gold/60 transition"
                    />
                    <input
                      type="tel"
                      value={phoneDraft}
                      onChange={(e) => setPhoneDraft(e.target.value)}
                      placeholder={s.phonePlaceholder}
                      className="w-full rounded-xl bg-navy-deep/60 border border-navy-line text-sm text-cream p-3 placeholder:text-cream/30 focus:outline-none focus:border-gold/60 transition"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (nameDraft.trim() && phoneDraft.trim()) {
                          setName(nameDraft.trim());
                          setPhone(phoneDraft.trim());
                        }
                      }}
                      disabled={!nameDraft.trim() || !phoneDraft.trim()}
                      className="rounded-full bg-gold text-navy-deep text-xs font-semibold uppercase tracking-wide2 px-4 py-2 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gold-light transition"
                    >
                      {s.submit} →
                    </button>
                  </div>
                )}
              </>
            )}

            {/* Step 5: ready */}
            {allComplete && (
              <>
                <BotMessage text={s.botReady} />
                <div className="ml-9 mr-2 flex flex-col gap-2 pt-1">
                  <a
                    href={buildWhatsAppHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white py-3 text-sm font-semibold uppercase tracking-wide2 hover:bg-[#1ebe5b] transition"
                  >
                    <WhatsAppIcon className="size-5" />
                    {s.sendWhatsApp}
                  </a>
                  <button
                    type="button"
                    onClick={reset}
                    className="text-xs text-cream/55 hover:text-cream/90 self-center"
                  >
                    ← {s.startOver}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
