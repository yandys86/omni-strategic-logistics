import { SITE } from "@/lib/site";
import { DICT } from "@/lib/dictionaries";
import type { Lang } from "@/lib/i18n";

export function whatsappLink(lang: Lang, serviceName?: string): string {
  const message = serviceName
    ? DICT[lang].whatsappPrefill(serviceName)
    : lang === "es"
      ? "Hola Omni Strategic Logistics, quisiera mas informacion."
      : "Hi Omni Strategic Logistics, I'd like more information.";
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function phoneLink(): string {
  return `tel:+${SITE.whatsapp}`;
}
