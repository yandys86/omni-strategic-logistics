import type { Lang } from "@/lib/i18n";

const ITEMS_ES = [
  "Logistica",
  "Comercio internacional",
  "Brokerage",
  "Importacion y exportacion",
  "Florida, USA",
  "Red verificada de socios",
  "Servicio bilingue",
  "Sin costo de consulta"
];

const ITEMS_EN = [
  "Logistics",
  "International trade",
  "Brokerage",
  "Import and export",
  "Florida, USA",
  "Verified partner network",
  "Bilingual service",
  "No consultation fee"
];

export default function Marquee({ lang }: { lang: Lang }) {
  const items = lang === "es" ? ITEMS_ES : ITEMS_EN;
  // Duplicate the list so the scroll loop is seamless
  const sequence = [...items, ...items];
  return (
    <div className="relative bg-navy-deep border-y border-navy-line overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy-deep to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy-deep to-transparent z-10 pointer-events-none" />
      <div className="marquee-track flex items-center gap-12 py-4 whitespace-nowrap">
        {sequence.map((label, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="size-1.5 rounded-full bg-gold" />
            <span className="text-xs uppercase tracking-wide3 text-cream/70">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
