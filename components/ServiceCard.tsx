import Link from "next/link";
import type { Service } from "@/lib/services";
import type { Lang } from "@/lib/i18n";
import Icon from "@/components/Icon";

export default function ServiceCard({ service, lang }: { service: Service; lang: Lang }) {
  const t = service.i18n[lang];
  return (
    <Link
      href={`/${lang}/servicios/${service.slug}`}
      className="group relative rounded-2xl border border-navy-line bg-navy-deep/40 p-6 hover:border-gold/60 hover:bg-navy-deep/60 transition"
    >
      <div className="size-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-navy-deep mb-5 group-hover:scale-105 transition">
        <Icon name={service.icon} className="size-6" />
      </div>
      <h3 className="font-display text-2xl text-cream mb-2 leading-tight">{t.name}</h3>
      <p className="text-sm text-cream/70">{t.short}</p>
      <div className="mt-5 text-xs uppercase tracking-wide2 text-gold-light/80 group-hover:text-gold transition">
        {lang === "es" ? "Ver detalles →" : "See details →"}
      </div>
    </Link>
  );
}
