import type { Lang } from "@/lib/i18n";

type Stat = { value: string; label: { es: string; en: string } };

const STATS: Stat[] = [
  { value: "100+",  label: { es: "Proyectos coordinados",      en: "Projects coordinated" } },
  { value: "20+",   label: { es: "Proveedores en la red",      en: "Network providers" } },
  { value: "6",     label: { es: "Verticales de servicio",     en: "Service verticals" } },
  { value: "100%",  label: { es: "Asegurados y licenciados",   en: "Insured and licensed" } }
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
