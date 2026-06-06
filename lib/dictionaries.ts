import type { Lang } from "@/lib/i18n";

type Dict = {
  brandTagline: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  ctaQuote: string;
  ctaCall: string;
  ctaWhatsapp: string;
  navServices: string;
  navAbout: string;
  navContact: string;
  servicesEyebrow: string;
  servicesHeading: string;
  servicesSub: string;
  valuesEyebrow: string;
  valuesHeading: string;
  valuesProfessionalism: string;
  valuesProfessionalismCopy: string;
  valuesSafety: string;
  valuesSafetyCopy: string;
  valuesCommitment: string;
  valuesCommitmentCopy: string;
  brokerEyebrow: string;
  brokerHeading: string;
  brokerCopy: string;
  ctaBlockEyebrow: string;
  ctaBlockTitle: string;
  ctaBlockCopy: string;
  aboutTitle: string;
  aboutLead: string;
  aboutP1: string;
  aboutP2: string;
  aboutP3: string;
  contactTitle: string;
  contactLead: string;
  contactWhatsappLabel: string;
  contactWhatsappCopy: string;
  contactPhoneLabel: string;
  contactHoursLabel: string;
  contactHoursCopy: string;
  servicePageBack: string;
  servicePageGetQuote: string;
  servicePageWhatYouGet: string;
  footerBlurb: string;
  footerServicesTitle: string;
  footerCompanyTitle: string;
  footerContactTitle: string;
  footerInsured: string;
  footerCopyright: string;
  whatsappPrefill: (service: string) => string;
};

export const DICT: Record<Lang, Dict> = {
  es: {
    brandTagline: "Logistica, comercio y brokerage sin fronteras.",
    heroEyebrow: "Florida, USA · Operacion nacional e internacional",
    heroTitle: "Conectamos negocios, mercancias y oportunidades.",
    heroSubtitle:
      "Empresa estadounidense constituida en Florida, especializada en logistica, comercio internacional, brokerage, importacion y exportacion. Conectamos empresas, inversionistas y mercados.",
    ctaQuote: "Cotizar por WhatsApp",
    ctaCall: "Llamar ahora",
    ctaWhatsapp: "Hablar por WhatsApp",
    navServices: "Servicios",
    navAbout: "Sobre",
    navContact: "Contacto",
    servicesEyebrow: "Areas de negocio",
    servicesHeading: "Soluciones integrales en logistica, comercio y brokerage.",
    servicesSub:
      "Trabajamos en cuatro grandes areas. Toca cualquiera para ver el detalle y pedir una propuesta por WhatsApp.",
    valuesEyebrow: "Como trabajamos",
    valuesHeading: "Profesionalismo, seguridad y compromiso.",
    valuesProfessionalism: "Profesionalismo",
    valuesProfessionalismCopy:
      "Trabajamos con proveedores con experiencia comprobada y referencias verificadas.",
    valuesSafety: "Seguridad",
    valuesSafetyCopy:
      "Todos los proveedores que conectamos estan asegurados y licenciados en Florida.",
    valuesCommitment: "Compromiso",
    valuesCommitmentCopy:
      "Hacemos seguimiento del trabajo de principio a fin para que la experiencia sea simple.",
    brokerEyebrow: "Como funcionamos",
    brokerHeading: "Intermediario estrategico entre las partes correctas.",
    brokerCopy:
      "Omni Strategic Logistics actua como intermediario estrategico entre compradores, vendedores, fabricantes, distribuidores e inversionistas. Identificamos oportunidades, negociamos los terminos y coordinamos la operacion. No reemplazamos al especialista: te conectamos con el correcto y aseguramos que la operacion se cierre.",
    ctaBlockEyebrow: "Tu proyecto, listo en pasos simples",
    ctaBlockTitle: "Contanos lo que necesitas. Nosotros nos encargamos del resto.",
    ctaBlockCopy:
      "Respondemos por WhatsApp en horario comercial. Sin compromiso, sin costo de consulta.",
    aboutTitle: "Perfil corporativo",
    aboutLead:
      "Empresa estadounidense con base en Florida, especializada en logistica, comercio internacional, brokerage y desarrollo de oportunidades.",
    aboutP1:
      "Omni Strategic Logistics LLC es una empresa estadounidense constituida en el Estado de Florida. Brindamos soluciones integrales de logistica, comercio internacional, corretaje comercial (brokerage), importacion y exportacion, facilitando oportunidades de negocio entre empresas, inversionistas y mercados nacionales e internacionales.",
    aboutP2:
      "Nuestra compania se especializa en la identificacion, negociacion y desarrollo de oportunidades comerciales en diversos sectores economicos. Actuamos como intermediario estrategico entre compradores, vendedores, fabricantes, distribuidores e inversionistas, agregando valor en cada etapa de la operacion.",
    aboutP3:
      "Operamos en cuatro grandes areas: logistica y comercio internacional, brokerage y consultoria, servicios para propiedad en Florida Central, y comercio y distribucion. Cada area cuenta con una red de socios estrategicos verificados que nos permite ejecutar operaciones desde una pequena transaccion hasta un proyecto industrial o internacional.",
    contactTitle: "Hablemos",
    contactLead:
      "Respondemos rapido por WhatsApp. Contanos tu necesidad y te conectamos con el proveedor correcto.",
    contactWhatsappLabel: "WhatsApp",
    contactWhatsappCopy: "La forma mas rapida de cotizar.",
    contactPhoneLabel: "Telefono",
    contactHoursLabel: "Horario",
    contactHoursCopy: "Lunes a sabados, 8:00 - 19:00 EST.",
    servicePageBack: "Volver a servicios",
    servicePageGetQuote: "Pedir presupuesto por WhatsApp",
    servicePageWhatYouGet: "Lo que coordinamos",
    footerBlurb:
      "Logistica, comercio internacional, brokerage y desarrollo de oportunidades. Con base en Florida, operacion nacional e internacional.",
    footerServicesTitle: "Servicios",
    footerCompanyTitle: "Empresa",
    footerContactTitle: "Contacto",
    footerInsured: "Asegurados y licenciados",
    footerCopyright: "Todos los derechos reservados.",
    whatsappPrefill: (service) =>
      `Hola Omni Strategic Logistics, me interesa el servicio de ${service}. Quisiera mas informacion y un presupuesto.`
  },
  en: {
    brandTagline: "Logistics, trade, and brokerage without borders.",
    heroEyebrow: "Florida, USA · Domestic and international operation",
    heroTitle: "We connect businesses, goods, and opportunities.",
    heroSubtitle:
      "A US company incorporated in Florida, specialized in logistics, international trade, brokerage, import, and export. We connect companies, investors, and markets.",
    ctaQuote: "Get a quote on WhatsApp",
    ctaCall: "Call now",
    ctaWhatsapp: "Chat on WhatsApp",
    navServices: "Services",
    navAbout: "About",
    navContact: "Contact",
    servicesEyebrow: "Business areas",
    servicesHeading: "Integrated solutions across logistics, trade, and brokerage.",
    servicesSub:
      "We operate across four areas. Tap any to see details and request a proposal on WhatsApp.",
    valuesEyebrow: "How we work",
    valuesHeading: "Professionalism, safety, and commitment.",
    valuesProfessionalism: "Professionalism",
    valuesProfessionalismCopy:
      "We work with providers that have proven experience and verified references.",
    valuesSafety: "Safety",
    valuesSafetyCopy:
      "Every provider we connect you with is insured and licensed in Florida.",
    valuesCommitment: "Commitment",
    valuesCommitmentCopy:
      "We follow the work from start to finish so your experience stays simple.",
    brokerEyebrow: "How it works",
    brokerHeading: "Strategic intermediary between the right parties.",
    brokerCopy:
      "Omni Strategic Logistics acts as a strategic intermediary between buyers, sellers, manufacturers, distributors, and investors. We identify opportunities, negotiate terms, and coordinate the operation. We do not replace the specialist: we connect you with the right one and make sure the deal closes.",
    ctaBlockEyebrow: "Your project, ready in simple steps",
    ctaBlockTitle: "Tell us what you need. We take care of the rest.",
    ctaBlockCopy:
      "We reply on WhatsApp during business hours. No commitment, no consultation fee.",
    aboutTitle: "Corporate profile",
    aboutLead:
      "A US company based in Florida, specialized in logistics, international trade, brokerage, and opportunity development.",
    aboutP1:
      "Omni Strategic Logistics LLC is a US company incorporated in the State of Florida. We provide integrated solutions across logistics, international trade, commercial brokerage, import, and export, facilitating business opportunities between companies, investors, and domestic and international markets.",
    aboutP2:
      "We specialize in the identification, negotiation, and development of commercial opportunities across diverse economic sectors. We act as strategic intermediary between buyers, sellers, manufacturers, distributors, and investors, adding value at every stage of the operation.",
    aboutP3:
      "We operate across four areas: logistics and international trade, brokerage and consulting, property services in Central Florida, and trade and distribution. Each area is backed by a network of verified strategic partners that lets us execute from a small transaction to an industrial or international project.",
    contactTitle: "Let's talk",
    contactLead:
      "We reply fast on WhatsApp. Tell us what you need and we connect you with the right provider.",
    contactWhatsappLabel: "WhatsApp",
    contactWhatsappCopy: "Fastest way to get a quote.",
    contactPhoneLabel: "Phone",
    contactHoursLabel: "Hours",
    contactHoursCopy: "Monday to Saturday, 8:00 AM - 7:00 PM EST.",
    servicePageBack: "Back to services",
    servicePageGetQuote: "Get a quote on WhatsApp",
    servicePageWhatYouGet: "What we coordinate",
    footerBlurb:
      "Logistics, international trade, brokerage, and opportunity development. Based in Florida, operating domestically and internationally.",
    footerServicesTitle: "Services",
    footerCompanyTitle: "Company",
    footerContactTitle: "Contact",
    footerInsured: "Insured and licensed",
    footerCopyright: "All rights reserved.",
    whatsappPrefill: (service) =>
      `Hi Omni Strategic Logistics, I'm interested in the ${service} service. I'd like more information and a quote.`
  }
};
