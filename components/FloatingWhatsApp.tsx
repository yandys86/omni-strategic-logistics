import type { Lang } from "@/lib/i18n";
import { whatsappLink } from "@/lib/whatsapp";
import { DICT } from "@/lib/dictionaries";
import Icon from "@/components/Icon";

export default function FloatingWhatsApp({ lang }: { lang: Lang }) {
  const t = DICT[lang];
  return (
    <a
      href={whatsappLink(lang)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.ctaWhatsapp}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-3 text-sm font-semibold shadow-lg shadow-black/30 hover:bg-[#1ebe5b] transition"
    >
      <Icon name="whatsapp" className="size-5" />
      <span className="hidden sm:inline">{t.ctaWhatsapp}</span>
    </a>
  );
}
