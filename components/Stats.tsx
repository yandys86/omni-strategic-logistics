import type { Lang } from "@/lib/i18n";

type Stat = { value: string; label: { es: string; en: string } };

const STATS: Stat[] = [
  { value: "17",    label: { es: "Servicios disponibles",       en: "Available services" } },
  { value: "4",     label: { es: "Areas de negocio",            en: "Business areas" } },
  { value: "50+",   label: { es: "Socios estrategicos",         en: "Strategic partners" } },
  { value: "USA",   label: { es: "LLC constituida en Florida",  en: "LLC incorporated in Florida" } }
];

export default function Stats({ lang }: { lang: Lang }) {
  return (
    <section className="bg-navy-deep border-y border-navy-line">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.value}>
              <div className="font-display text-5xl sm:text-6xl text-gold leading-none">
                {s.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-wide3 text-cream/65">
                {s.label[lang]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
