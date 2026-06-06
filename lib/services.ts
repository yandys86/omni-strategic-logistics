import type { Lang } from "@/lib/i18n";

export type CategoryKey =
  | "logistica"
  | "brokerage"
  | "propiedad"
  | "comercio";

export type Category = {
  key: CategoryKey;
  eyebrow: Record<Lang, string>;
  heading: Record<Lang, string>;
  description: Record<Lang, string>;
};

export const CATEGORIES: Category[] = [
  {
    key: "logistica",
    eyebrow: { es: "Logistica y comercio internacional", en: "Logistics & international trade" },
    heading: { es: "Movemos mercancias y abrimos mercados.",  en: "We move goods and open markets." },
    description: {
      es: "Coordinamos la cadena logistica de tu operacion: transporte, importacion, exportacion y comercializacion en el mercado correcto.",
      en: "We coordinate the logistics chain of your operation: transport, import, export, and commercialization in the right market."
    }
  },
  {
    key: "brokerage",
    eyebrow: { es: "Brokerage comercial y consultoria", en: "Commercial brokerage & consulting" },
    heading: { es: "Conectamos compradores, vendedores y fabricantes.", en: "We connect buyers, sellers, and manufacturers." },
    description: {
      es: "Como intermediario estrategico negociamos contratos, representamos marcas y desarrollamos oportunidades comerciales nuevas.",
      en: "As a strategic intermediary we negotiate contracts, represent brands, and develop new commercial opportunities."
    }
  },
  {
    key: "propiedad",
    eyebrow: { es: "Servicios para propiedad", en: "Property services" },
    heading: { es: "Soluciones para tu casa o tu obra.",  en: "Solutions for your home or job site." },
    description: {
      es: "Coordinamos contratistas asegurados y licenciados para los trabajos que requiere tu propiedad en Florida Central.",
      en: "We coordinate insured and licensed contractors for the work your property needs in Central Florida."
    }
  },
  {
    key: "comercio",
    eyebrow: { es: "Comercio y distribucion", en: "Trade & distribution" },
    heading: { es: "Comercializacion al por mayor y al detalle.",  en: "Wholesale and retail commercialization." },
    description: {
      es: "Compra y venta de productos, vehiculos, materiales y plataformas digitales para que llegues a mas clientes en mas mercados.",
      en: "Buying and selling products, vehicles, materials, and digital platforms so you reach more customers in more markets."
    }
  }
];

export type Service = {
  slug: string;
  icon: string;
  image?: string;
  category: CategoryKey;
  i18n: Record<Lang, {
    name: string;
    short: string;
    long: string;
    bullets: string[];
  }>;
};

export const SERVICES: Service[] = [
  // ============ LOGISTICA Y COMERCIO INTERNACIONAL ============
  {
    slug: "logistica-transporte",
    icon: "truck",
    category: "logistica",
    i18n: {
      es: {
        name: "Logistica y transporte",
        short: "Movemos tu mercancia con la ruta y el transportista correctos.",
        long: "Coordinamos servicios de logistica y transporte de mercancias por carretera, maritimo y aereo. Trabajamos con una red de transportistas y operadores que cubre el mercado nacional de Estados Unidos y rutas internacionales.",
        bullets: [
          "Transporte terrestre, maritimo y aereo",
          "Coordinacion de origen a destino",
          "Cotizacion comparativa entre rutas",
          "Seguimiento del envio"
        ]
      },
      en: {
        name: "Logistics and transport",
        short: "We move your cargo with the right route and carrier.",
        long: "We coordinate logistics and freight services by road, ocean, and air. We work with a network of carriers and operators that covers the US domestic market and international routes.",
        bullets: [
          "Ground, ocean, and air freight",
          "Origin-to-destination coordination",
          "Comparative quoting across routes",
          "Shipment tracking"
        ]
      }
    }
  },
  {
    slug: "import-export",
    icon: "globe",
    category: "logistica",
    i18n: {
      es: {
        name: "Importacion y exportacion",
        short: "Gestionamos importacion y exportacion de mercancias entre paises.",
        long: "Facilitamos operaciones de importacion y exportacion: identificacion del proveedor, negociacion comercial, coordinacion logistica y soporte en documentacion aduanal. Trabajamos en multiples sectores y mercados.",
        bullets: [
          "Identificacion de proveedores y compradores",
          "Negociacion de terminos comerciales (Incoterms)",
          "Coordinacion logistica internacional",
          "Soporte en documentacion y trazabilidad"
        ]
      },
      en: {
        name: "Import and export",
        short: "We manage cross-border import and export of goods.",
        long: "We facilitate import and export operations: supplier sourcing, commercial negotiation, logistics coordination, and customs documentation support. We operate across multiple sectors and markets.",
        bullets: [
          "Supplier and buyer sourcing",
          "Commercial terms negotiation (Incoterms)",
          "International logistics coordination",
          "Documentation and traceability support"
        ]
      }
    }
  },
  {
    slug: "agricola-industrial-energetico",
    icon: "grain",
    category: "logistica",
    i18n: {
      es: {
        name: "Productos agricolas, industriales y energeticos",
        short: "Comercializacion en commodities, insumos industriales y energia.",
        long: "Comercializamos productos agricolas, industriales y energeticos en mercados nacionales e internacionales. Conectamos productores y compradores institucionales para volumenes mayoristas con la logistica correspondiente.",
        bullets: [
          "Productos agricolas (commodities)",
          "Insumos y maquinaria industrial",
          "Productos energeticos",
          "Operacion mayorista con logistica integrada"
        ]
      },
      en: {
        name: "Agricultural, industrial and energy products",
        short: "Commodity trading, industrial supplies, and energy products.",
        long: "We trade agricultural, industrial, and energy products in domestic and international markets. We connect producers and institutional buyers for wholesale volumes with the corresponding logistics.",
        bullets: [
          "Agricultural commodities",
          "Industrial supplies and machinery",
          "Energy products",
          "Wholesale operation with integrated logistics"
        ]
      }
    }
  },
  {
    slug: "inversiones-internacionales",
    icon: "chart",
    category: "logistica",
    i18n: {
      es: {
        name: "Inversiones y oportunidades internacionales",
        short: "Gestion de inversiones y oportunidades comerciales internacionales.",
        long: "Identificamos y estructuramos oportunidades comerciales internacionales para inversionistas y empresas. Evaluamos el contexto, los riesgos y la viabilidad operativa antes de presentar la propuesta.",
        bullets: [
          "Identificacion de oportunidades",
          "Estructuracion comercial",
          "Evaluacion de riesgos y viabilidad",
          "Conexion con socios estrategicos"
        ]
      },
      en: {
        name: "International investments and opportunities",
        short: "Management of international investments and commercial opportunities.",
        long: "We identify and structure international commercial opportunities for investors and companies. We evaluate context, risks, and operational viability before presenting the proposal.",
        bullets: [
          "Opportunity identification",
          "Commercial structuring",
          "Risk and viability assessment",
          "Strategic partner introductions"
        ]
      }
    }
  },

  // ============ BROKERAGE COMERCIAL Y CONSULTORIA ============
  {
    slug: "corretaje-comercial",
    icon: "handshake",
    category: "brokerage",
    i18n: {
      es: {
        name: "Corretaje comercial nacional e internacional",
        short: "Actuamos como intermediario estrategico entre las partes.",
        long: "Conectamos compradores, vendedores, fabricantes y distribuidores. Nos especializamos en negociar las condiciones comerciales para que la operacion se cierre en tiempo y en favor de las partes correctas.",
        bullets: [
          "Conexion comprador-vendedor",
          "Negociacion comercial",
          "Cierre de la operacion",
          "Nacional e internacional"
        ]
      },
      en: {
        name: "Domestic and international commercial brokerage",
        short: "We act as strategic intermediary between the parties.",
        long: "We connect buyers, sellers, manufacturers, and distributors. We specialize in negotiating commercial terms so the deal closes on time and in favor of the right parties.",
        bullets: [
          "Buyer-seller matchmaking",
          "Commercial negotiation",
          "Deal closing",
          "Domestic and international"
        ]
      }
    }
  },
  {
    slug: "representacion-comercial",
    icon: "briefcase",
    category: "brokerage",
    i18n: {
      es: {
        name: "Representacion de fabricantes y distribuidores",
        short: "Te representamos comercialmente en mercados nuevos.",
        long: "Representamos a fabricantes y distribuidores que quieren llegar a nuevos mercados. Hacemos el desarrollo comercial, gestionamos la relacion con los clientes y reportamos al fabricante.",
        bullets: [
          "Apertura de mercado",
          "Gestion de la cartera de clientes",
          "Reporting al fabricante",
          "Representacion exclusiva o no exclusiva"
        ]
      },
      en: {
        name: "Manufacturer and distributor representation",
        short: "We represent you commercially in new markets.",
        long: "We represent manufacturers and distributors looking to reach new markets. We handle commercial development, manage the customer relationship, and report back to the manufacturer.",
        bullets: [
          "Market entry",
          "Customer portfolio management",
          "Reporting to the manufacturer",
          "Exclusive or non-exclusive representation"
        ]
      }
    }
  },
  {
    slug: "contratos-comerciales",
    icon: "document",
    category: "brokerage",
    i18n: {
      es: {
        name: "Negociacion y contratos comerciales",
        short: "Facilitamos la negociacion y firma de contratos comerciales.",
        long: "Asistimos a las partes en la negociacion y facilitacion de contratos comerciales: terminos, plazos, garantias y condiciones de pago. Coordinamos con asesores legales cuando la operacion lo requiere.",
        bullets: [
          "Negociacion de terminos clave",
          "Estructuracion de la operacion",
          "Coordinacion con asesores legales",
          "Cierre y firma del contrato"
        ]
      },
      en: {
        name: "Commercial contracts negotiation",
        short: "We facilitate the negotiation and signing of commercial contracts.",
        long: "We assist parties in the negotiation and facilitation of commercial contracts: terms, deadlines, warranties, and payment conditions. We coordinate with legal counsel when the operation requires it.",
        bullets: [
          "Key terms negotiation",
          "Deal structuring",
          "Legal counsel coordination",
          "Contract closing and signing"
        ]
      }
    }
  },
  {
    slug: "consultoria-empresarial",
    icon: "lightbulb",
    category: "brokerage",
    i18n: {
      es: {
        name: "Consultoria empresarial y desarrollo de negocios",
        short: "Asesoramos a empresas en crecimiento, expansion y nuevos mercados.",
        long: "Brindamos consultoria empresarial y de desarrollo de negocios: estrategia de crecimiento, apertura a nuevos mercados, diversificacion de portafolio y estructuracion de operaciones internacionales.",
        bullets: [
          "Diagnostico y estrategia",
          "Apertura a nuevos mercados",
          "Diversificacion de portafolio",
          "Estructuracion internacional"
        ]
      },
      en: {
        name: "Business consulting and development",
        short: "We advise companies on growth, expansion, and new markets.",
        long: "We provide business and development consulting: growth strategy, new market entry, portfolio diversification, and structuring of international operations.",
        bullets: [
          "Diagnosis and strategy",
          "New market entry",
          "Portfolio diversification",
          "International structuring"
        ]
      }
    }
  },
  {
    slug: "gestion-proyectos",
    icon: "blocks",
    category: "brokerage",
    i18n: {
      es: {
        name: "Gestion de proyectos comerciales e industriales",
        short: "Coordinamos proyectos comerciales e industriales de principio a fin.",
        long: "Gestionamos proyectos comerciales e industriales: definicion de alcance, coordinacion de proveedores, control de tiempos y reporte ejecutivo. Nuestro rol es asegurar que el proyecto avance y se cierre.",
        bullets: [
          "Definicion de alcance y entregables",
          "Coordinacion de proveedores",
          "Control de tiempos y presupuesto",
          "Reporte ejecutivo"
        ]
      },
      en: {
        name: "Commercial and industrial project management",
        short: "We coordinate commercial and industrial projects end-to-end.",
        long: "We manage commercial and industrial projects: scope definition, vendor coordination, time and budget control, and executive reporting. Our role is to ensure the project moves forward and closes.",
        bullets: [
          "Scope and deliverables definition",
          "Vendor coordination",
          "Time and budget control",
          "Executive reporting"
        ]
      }
    }
  },

  // ============ SERVICIOS PARA PROPIEDAD ============
  {
    slug: "construccion",
    icon: "construction",
    image: "/services/construccion.jpg",
    category: "propiedad",
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
    category: "propiedad",
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
    category: "propiedad",
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
    category: "propiedad",
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
    category: "propiedad",
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

  // ============ COMERCIO Y DISTRIBUCION ============
  {
    slug: "vehiculos-equipos",
    icon: "car",
    image: "/services/autos.jpg",
    category: "comercio",
    i18n: {
      es: {
        name: "Vehiculos y equipos",
        short: "Compra, venta y comercializacion de vehiculos y equipos.",
        long: "Comercializamos vehiculos (nuevos, usados, importados) y equipos comerciales o industriales. Buscamos la unidad correcta segun el presupuesto y verificamos historial y condiciones.",
        bullets: [
          "Autos nuevos, usados e importados",
          "Equipos comerciales e industriales",
          "Verificacion de historial",
          "Asesoramiento en financiamiento"
        ]
      },
      en: {
        name: "Vehicles and equipment",
        short: "Buying, selling, and trading vehicles and equipment.",
        long: "We trade vehicles (new, used, imported) and commercial or industrial equipment. We find the right unit per budget and verify history and condition.",
        bullets: [
          "New, used, and imported cars",
          "Commercial and industrial equipment",
          "History verification",
          "Financing guidance"
        ]
      }
    }
  },
  {
    slug: "materiales-construccion",
    icon: "blocks",
    category: "comercio",
    i18n: {
      es: {
        name: "Materiales de construccion",
        short: "Comercializacion de materiales para tu obra al precio correcto.",
        long: "Comercializamos materiales de construccion: estructurales, acabados, sistemas electricos, plomeria y maquinaria menor. Aprovechamos la red de proveedores para conseguir el mejor precio segun el volumen.",
        bullets: [
          "Estructurales y acabados",
          "Sistemas electricos y plomeria",
          "Maquinaria menor",
          "Precio por volumen"
        ]
      },
      en: {
        name: "Construction materials",
        short: "Construction materials trading at the right price.",
        long: "We trade construction materials: structural, finishes, electrical systems, plumbing, and light machinery. We leverage our supplier network to secure the best price by volume.",
        bullets: [
          "Structural and finishes",
          "Electrical systems and plumbing",
          "Light machinery",
          "Volume pricing"
        ]
      }
    }
  },
  {
    slug: "comercio-mayorista-minorista",
    icon: "store",
    category: "comercio",
    i18n: {
      es: {
        name: "Comercio mayorista y minorista",
        short: "Operaciones de comercio mayorista y minorista para tu producto.",
        long: "Gestionamos operaciones de comercio al por mayor y al detalle. Encontramos canales de venta, distribuidores y puntos de retail para llevar tu producto al consumidor final.",
        bullets: [
          "Canales mayoristas",
          "Distribuidores y retail",
          "Estrategia de precio",
          "Logistica de distribucion"
        ]
      },
      en: {
        name: "Wholesale and retail trade",
        short: "Wholesale and retail trade operations for your product.",
        long: "We manage wholesale and retail trade operations. We find sales channels, distributors, and retail points to bring your product to the end consumer.",
        bullets: [
          "Wholesale channels",
          "Distributors and retail",
          "Pricing strategy",
          "Distribution logistics"
        ]
      }
    }
  },
  {
    slug: "comercio-electronico",
    icon: "cart",
    category: "comercio",
    i18n: {
      es: {
        name: "Comercio electronico y plataformas digitales",
        short: "Vendemos tu producto en marketplaces y plataformas digitales.",
        long: "Comercializamos productos en marketplaces y plataformas digitales (Amazon, eBay, Mercado Libre y otras). Gestionamos publicacion, pricing, atencion al cliente y logistica.",
        bullets: [
          "Publicacion en marketplaces",
          "Optimizacion de pricing",
          "Atencion al cliente",
          "Logistica e2e"
        ]
      },
      en: {
        name: "E-commerce and digital platforms",
        short: "We sell your product on marketplaces and digital platforms.",
        long: "We sell products on marketplaces and digital platforms (Amazon, eBay, Mercado Libre, and others). We handle listings, pricing, customer service, and logistics.",
        bullets: [
          "Marketplace listings",
          "Pricing optimization",
          "Customer service",
          "End-to-end logistics"
        ]
      }
    }
  }
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServicesByCategory(key: CategoryKey): Service[] {
  return SERVICES.filter((s) => s.category === key);
}
