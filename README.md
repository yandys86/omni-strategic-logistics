# Omni Strategic Logistics

Sitio web bilingue (ES/EN) para **Omni Strategic Logistics LLC** — una empresa local con base en Orlando, FL que opera como **broker / intermediario** entre clientes y una red de proveedores de servicios (construccion, roofing, talas de arboles, fire mitigation, stump grinding, compra de autos).

Modelo de negocio: la LLC **no presta los servicios directamente** — conecta al cliente con el proveedor correcto y cobra por comision. El sitio debe **generar leads** que terminan en una conversacion por WhatsApp.

Stack: **Next.js 14 (App Router) + TypeScript + Tailwind**. Sin base de datos: servicios y textos viven en `lib/`.

## Setup

Requisitos: **Node.js >= 18**.

```bash
cd omni_strategic_logistics
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) → redirige automaticamente a `/es`.

## Configuracion

### 1) Numero, dominio, email — `lib/site.ts`

```ts
export const SITE = {
  name: "Omni Strategic Logistics",
  legalName: "Omni Strategic Logistics LLC",
  url: "https://omnistrategiclogistics.com",  // ← cuando tengas dominio
  region: "Orlando, FL",
  phone: "4079127149",
  phoneDisplay: "(407) 912-7149",
  whatsapp: "14079127149",                    // E.164 sin +, formato wa.me
  email: "info@omnistrategiclogistics.com",
  defaultLang: "es"
};
```

El `whatsapp` debe ser en formato E.164 sin `+`. Para USA: `1` + area code + numero = 11 digitos.

### 2) Textos UI — `lib/dictionaries.ts`

Todos los strings del sitio estan en ese archivo, separados por idioma (`es` y `en`). Editar ahi cambia copy de:
- Hero, secciones, CTAs
- Footer
- Mensaje pre-cargado del WhatsApp (`whatsappPrefill`)

### 3) Servicios — `lib/services.ts`

Cada servicio tiene `slug`, `icon`, y traducciones (`name`, `short`, `long`, `bullets`) en ambos idiomas. Para agregar uno:

```ts
{
  slug: "nuevo-servicio",
  icon: "construction",   // o agregar nuevo case en components/Icon.tsx
  i18n: {
    es: { name: "...", short: "...", long: "...", bullets: ["...", "..."] },
    en: { name: "...", short: "...", long: "...", bullets: ["...", "..."] }
  }
}
```

El servicio aparece automaticamente en:
- Home (grid de servicios)
- Footer
- Sitemap
- Su propia pagina `/servicios/[slug]`

## Como funciona la conversion

1. Cliente entra al sitio (default `/es`, switcher arriba a `/en`)
2. Ve el hero + grid de servicios + valores + CTA final
3. Toca un servicio → ve detalle + boton "Pedir presupuesto por WhatsApp"
4. El boton abre `wa.me/14079127149` con un mensaje pre-cargado:
   > "Hola Omni Strategic Logistics, me interesa el servicio de [Servicio]. Quisiera mas informacion y un presupuesto."
5. Tu hermano responde en WhatsApp y matchea con el proveedor

Tambien hay un boton flotante de WhatsApp en TODAS las paginas (bottom-right).

## Estructura

```
app/
  page.tsx                       # redirect a /es
  robots.ts, sitemap.ts          # SEO
  [lang]/
    layout.tsx                   # header + footer + floating WA, valida lang
    page.tsx                     # home: hero + servicios + broker + CTA
    servicios/[slug]/page.tsx    # ficha de servicio + WhatsApp por servicio
    sobre/page.tsx
    contacto/page.tsx
components/
  Header.tsx, Footer.tsx
  Hero.tsx, ServiceCard.tsx
  FloatingWhatsApp.tsx           # botón sticky bottom-right
  LangSwitcher.tsx               # toggle ES/EN respetando el path
  Icon.tsx                       # set de íconos SVG inline
lib/
  site.ts                        # config global
  i18n.ts                        # type Lang, helpers
  dictionaries.ts                # strings UI en ambos idiomas
  services.ts                    # datos de 6 servicios
  whatsapp.ts                    # builder de wa.me con prefill
```

## Build de produccion

```bash
npm run build
npm run start
```

## Proximos pasos cuando quieras crecer

- **Imagenes reales** en `public/` — reemplazar la decoracion del hero por fotos
- **Logo SVG** real (ahora hay un placeholder "O" dorada en el header)
- **OG image + favicon** dinamicos (mismo patron que video-downloader)
- **Form de cotizacion** con backend o servicio tipo Formspree
- **CMS** (Sanity, Contentful) si los servicios crecen mucho
- **Reviews / testimonios** de clientes reales
- **Google Business Profile** integrado
- **Analytics** (Plausible o GA4)
