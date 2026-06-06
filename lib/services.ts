import type { Lang } from "@/lib/i18n";

export type Service = {
  slug: string;
  icon: string;
  image: string;
  i18n: Record<Lang, {
    name: string;
    short: string;
    long: string;
    bullets: string[];
  }>;
};

export const SERVICES: Service[] = [
  {
    slug: "construccion",
    icon: "construction",
    image: "/services/construccion.jpg",
    i18n: {
      es: {
        name: "Construccion",
        short: "Construimos tus ideas con calidad y precision.",
        long: "Coordinamos proyectos de construccion residencial y comercial: ampliaciones, remodelaciones, obras desde cero y reparaciones estructurales. Te conectamos con contratistas locales con licencia activa en Florida.",
        bullets: [
          "Construccion residencial y comercial",
          "Ampliaciones y remodelaciones",
          "Reparaciones estructurales",
          "Contratistas asegurados y con licencia"
        ]
      },
      en: {
        name: "Construction",
        short: "We build your ideas with quality and precision.",
        long: "We coordinate residential and commercial construction projects: additions, remodels, new builds, and structural repairs. We connect you with local contractors licensed in Florida.",
        bullets: [
          "Residential and commercial construction",
          "Additions and remodels",
          "Structural repairs",
          "Insured, licensed contractors"
        ]
      }
    }
  },
  {
    slug: "roofing",
    icon: "roof",
    image: "/services/roofing.jpg",
    i18n: {
      es: {
        name: "Techos (Roofing)",
        short: "Instalacion y reparacion de techos. Proteccion que dura.",
        long: "Trabajos de techado completos: nuevo techo, reparacion despues de tormenta, inspeccion y mantenimiento. Conectamos con techadores especializados en climas de Florida.",
        bullets: [
          "Reemplazo de techo completo",
          "Reparacion despues de tormentas",
          "Inspeccion y mantenimiento",
          "Garantia de materiales y mano de obra"
        ]
      },
      en: {
        name: "Roofing",
        short: "Roof installation and repair. Lasting protection.",
        long: "Full roofing services: new roof, post-storm repair, inspection, and maintenance. We connect you with roofers specialized in Florida's climate.",
        bullets: [
          "Full roof replacement",
          "Post-storm repair",
          "Inspection and maintenance",
          "Material and workmanship warranty"
        ]
      }
    }
  },
  {
    slug: "talas-arboles",
    icon: "tree",
    image: "/services/talas-arboles.jpg",
    i18n: {
      es: {
        name: "Talas de Arboles",
        short: "Removemos y podamos arboles de forma segura y eficiente.",
        long: "Tala completa, poda de seguridad y limpieza despues de tormentas. Trabajamos con equipos asegurados que coordinan permisos cuando son necesarios.",
        bullets: [
          "Tala completa de arboles",
          "Poda y trimming",
          "Remocion despues de tormentas",
          "Coordinacion de permisos si aplica"
        ]
      },
      en: {
        name: "Tree Removal & Trimming",
        short: "We remove and trim trees safely and efficiently.",
        long: "Full tree removal, safety pruning, and post-storm cleanup. We work with insured crews that handle permits when required.",
        bullets: [
          "Full tree removal",
          "Pruning and trimming",
          "Post-storm cleanup",
          "Permit coordination when applicable"
        ]
      }
    }
  },
  {
    slug: "fire-mitigation",
    icon: "fire",
    image: "/services/fire-mitigation.jpg",
    i18n: {
      es: {
        name: "Mitigacion de Incendios",
        short: "Reducimos riesgos de incendios y protegemos tu propiedad.",
        long: "Limpieza de vegetacion en zonas de riesgo, creacion de defensible space, manejo de combustibles y consultoria preventiva para propiedades en areas vulnerables.",
        bullets: [
          "Limpieza de vegetacion de riesgo",
          "Creacion de defensible space",
          "Manejo de combustibles",
          "Consultoria preventiva"
        ]
      },
      en: {
        name: "Fire Mitigation",
        short: "We reduce fire risk and protect your property.",
        long: "Clearing of high-risk vegetation, defensible space creation, fuel management, and preventive consulting for properties in vulnerable areas.",
        bullets: [
          "High-risk vegetation clearing",
          "Defensible space creation",
          "Fuel management",
          "Preventive consulting"
        ]
      }
    }
  },
  {
    slug: "stump-grinding",
    icon: "stump",
    image: "/services/stump-grinding.jpg",
    i18n: {
      es: {
        name: "Stump Grinding",
        short: "Eliminamos tocones de forma rapida y dejamos tu terreno limpio.",
        long: "Remocion completa de tocones con maquinaria profesional, sin danar el resto del jardin. Limpieza incluida y tierra lista para uso.",
        bullets: [
          "Remocion de tocones de cualquier tamano",
          "Maquinaria profesional",
          "Limpieza incluida",
          "Terreno listo para uso"
        ]
      },
      en: {
        name: "Stump Grinding",
        short: "We remove stumps quickly and leave your yard clean.",
        long: "Complete stump removal with professional machinery, without damaging the rest of your yard. Cleanup included, ground ready for use.",
        bullets: [
          "Stump removal of any size",
          "Professional machinery",
          "Cleanup included",
          "Ground ready for use"
        ]
      }
    }
  },
  {
    slug: "autos",
    icon: "car",
    image: "/services/autos.jpg",
    i18n: {
      es: {
        name: "Compra de Autos",
        short: "Te ayudamos a conseguir cualquier tipo de auto.",
        long: "Te ayudamos a encontrar, evaluar y comprar el auto que necesitas. Nuevos, usados o importados, conectamos con concesionarios y vendedores particulares verificados.",
        bullets: [
          "Autos nuevos, usados e importados",
          "Busqueda segun tu presupuesto",
          "Verificacion de historial",
          "Asesoramiento en financiamiento"
        ]
      },
      en: {
        name: "Auto Purchase Assistance",
        short: "We help you find any kind of vehicle.",
        long: "We help you find, evaluate, and purchase the vehicle you need. New, used, or imported, we connect you with verified dealerships and private sellers.",
        bullets: [
          "New, used, and imported vehicles",
          "Search based on your budget",
          "Vehicle history verification",
          "Financing guidance"
        ]
      }
    }
  }
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
