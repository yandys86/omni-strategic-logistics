import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services";
import type { Lang } from "@/lib/i18n";
import Icon from "@/components/Icon";
import ServicePlaceholder from "@/components/ServicePlaceholder";

export default function ServiceCard({ service, lang }: { service: Service; lang: Lang }) {
  const t = service.i18n[lang];
  return (
    <Link
      href={`/${lang}/servicios/${service.slug}`}
      className="group relative overflow-hidden rounded-2xl border border-navy-line bg-navy-deep/40 hover:border-gold/60 transition flex flex-col"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-navy-deep">
        {service.image ? (
          <>
            <Image
              src={service.image}
              alt={t.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/35 to-transparent" />
            <div className="absolute top-3 left-3 size-11 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-navy-deep shadow-lg shadow-navy-deep/40">
              <Icon name={service.icon} className="size-5" />
            </div>
          </>
        ) : (
          <ServicePlaceholder icon={service.icon} />
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-2xl text-cream mb-2 leading-tight">{t.name}</h3>
        <p className="text-sm text-cream/70 flex-1">{t.short}</p>
        <div className="mt-5 text-xs uppercase tracking-wide2 text-gold-light/80 group-hover:text-gold transition">
          {lang === "es" ? "Ver detalles →" : "See details →"}
        </div>
      </div>
    </Link>
  );
}
