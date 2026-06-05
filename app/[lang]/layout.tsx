import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { DICT } from "@/lib/dictionaries";
import { LANGS, isLang } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLang(params.lang)) return {};
  const t = DICT[params.lang];
  const localeMap = { es: "es_US", en: "en_US" } as const;
  return {
    metadataBase: new URL(SITE.url),
    title: { default: `${SITE.name} — ${t.brandTagline}`, template: `%s | ${SITE.name}` },
    description: t.heroSubtitle,
    alternates: {
      canonical: `${SITE.url}/${params.lang}`,
      languages: {
        es: `${SITE.url}/es`,
        en: `${SITE.url}/en`
      }
    },
    openGraph: {
      type: "website",
      url: `${SITE.url}/${params.lang}`,
      siteName: SITE.name,
      title: `${SITE.name} — ${t.brandTagline}`,
      description: t.heroSubtitle,
      locale: localeMap[params.lang]
    },
    twitter: {
      card: "summary_large_image",
      title: `${SITE.name} — ${t.brandTagline}`,
      description: t.heroSubtitle
    }
  };
}

export default function LangLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!isLang(params.lang)) notFound();
  return (
    <>
      <Header lang={params.lang} />
      <div>{children}</div>
      <Footer lang={params.lang} />
      <FloatingWhatsApp lang={params.lang} />
    </>
  );
}
