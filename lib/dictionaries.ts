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
    brandTagline: "Soluciones completas, resultados que construyen.",
    heroEyebrow: "Orlando, FL · Asegurados y licenciados",
    heroTitle: "Conectamos tu proyecto con el proveedor correcto.",
    heroSubtitle:
      "Construccion, techos, talas, mitigacion de incendios y mas. Trabajamos con una red de proveedores de confianza para que vos no pierdas tiempo buscando.",
    ctaQuote: "Cotizar por WhatsApp",
    ctaCall: "Llamar ahora",
    ctaWhatsapp: "Hablar por WhatsApp",
    navServices: "Servicios",
    navAbout: "Sobre",
    navContact: "Contacto",
    servicesEyebrow: "Nuestros servicios",
    servicesHeading: "Todo lo que necesita tu propiedad, un solo punto de contacto.",
    servicesSub:
      "Tocá un servicio para ver los detalles y pedir presupuesto directo por WhatsApp.",
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
    brokerHeading: "Somos el puente entre vos y el especialista correcto.",
    brokerCopy:
      "Omni Strategic Logistics no realiza los trabajos directamente. Nos especializamos en encontrar y verificar al proveedor correcto para tu proyecto. Vos nos contas que necesitas, nosotros coordinamos, y solo trabajas con profesionales asegurados y con experiencia.",
    ctaBlockEyebrow: "Tu proyecto, listo en pasos simples",
    ctaBlockTitle: "Contanos lo que necesitas. Nosotros nos encargamos del resto.",
    ctaBlockCopy:
      "Respondemos por WhatsApp en horario comercial. Sin compromiso, sin costo de consulta.",
    aboutTitle: "Sobre Omni Strategic Logistics",
    aboutLead:
      "Una empresa local que conecta personas con los profesionales correctos para cada trabajo.",
    aboutP1:
      "Omni Strategic Logistics LLC es una empresa con base en Orlando, Florida, que trabaja como puente entre clientes y una red de proveedores de servicios verificados.",
    aboutP2:
      "Operamos en multiples verticales: construccion, techos, talas y trimming de arboles, mitigacion de incendios, stump grinding y asistencia en la compra de autos. En cada categoria seleccionamos proveedores asegurados, licenciados y con historial comprobado.",
    aboutP3:
      "Nuestra ventaja es la red, no las herramientas. Si necesitas un techo nuevo, talar un arbol, o un auto, vos hablas con nosotros una sola vez y coordinamos al especialista correcto. Sin intermediarios extras, sin perder tiempo pidiendo presupuestos sueltos.",
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
      "Conectamos clientes con proveedores asegurados y licenciados en Florida.",
    footerServicesTitle: "Servicios",
    footerCompanyTitle: "Empresa",
    footerContactTitle: "Contacto",
    footerInsured: "Asegurados y licenciados",
    footerCopyright: "Todos los derechos reservados.",
    whatsappPrefill: (service) =>
      `Hola Omni Strategic Logistics, me interesa el servicio de ${service}. Quisiera mas informacion y un presupuesto.`
  },
  en: {
    brandTagline: "Complete solutions, results that build.",
    heroEyebrow: "Orlando, FL · Insured and licensed",
    heroTitle: "We connect your project with the right provider.",
    heroSubtitle:
      "Construction, roofing, tree work, fire mitigation and more. We work with a trusted provider network so you don't waste time searching.",
    ctaQuote: "Get a quote on WhatsApp",
    ctaCall: "Call now",
    ctaWhatsapp: "Chat on WhatsApp",
    navServices: "Services",
    navAbout: "About",
    navContact: "Contact",
    servicesEyebrow: "Our services",
    servicesHeading: "Everything your property needs, one point of contact.",
    servicesSub:
      "Tap a service to see details and request a quote directly on WhatsApp.",
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
    brokerHeading: "We are the bridge between you and the right specialist.",
    brokerCopy:
      "Omni Strategic Logistics does not perform the work directly. We specialize in finding and verifying the right provider for your project. You tell us what you need, we coordinate, and you only work with insured, experienced professionals.",
    ctaBlockEyebrow: "Your project, ready in simple steps",
    ctaBlockTitle: "Tell us what you need. We take care of the rest.",
    ctaBlockCopy:
      "We reply on WhatsApp during business hours. No commitment, no consultation fee.",
    aboutTitle: "About Omni Strategic Logistics",
    aboutLead:
      "A local company connecting people with the right professionals for every job.",
    aboutP1:
      "Omni Strategic Logistics LLC is an Orlando, Florida based company that works as a bridge between customers and a network of verified service providers.",
    aboutP2:
      "We operate across multiple verticals: construction, roofing, tree removal and trimming, fire mitigation, stump grinding, and vehicle purchase assistance. In each category we hand-pick providers that are insured, licensed, and have a proven track record.",
    aboutP3:
      "Our edge is the network, not the tools. If you need a new roof, a tree removed, or a vehicle, you talk to us once and we line up the right specialist. No extra middlemen, no wasted time chasing scattered quotes.",
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
      "We connect customers with insured and licensed providers in Florida.",
    footerServicesTitle: "Services",
    footerCompanyTitle: "Company",
    footerContactTitle: "Contact",
    footerInsured: "Insured and licensed",
    footerCopyright: "All rights reserved.",
    whatsappPrefill: (service) =>
      `Hi Omni Strategic Logistics, I'm interested in the ${service} service. I'd like more information and a quote.`
  }
};
