export const SITE_CONFIG = {
  name: "RiBuzz",
  shortName: "RiBuzz",
  url: "https://ribuzz.com",
  diagnosisPath: "/diagnostico",
  description:
    "Sistema complementario para el crecimiento empresarial.",
  logoPlaceholder: "/ribuzz-wordmark.png",
  logoMark: "/ribuzz-mark.png",
  ogImagePlaceholder: "/opengraph-image",
  contactEmail: "ribuzzco@gmail.com",
  whatsappUrl: "https://wa.me/573332541346",
  instagramUrl: "https://www.instagram.com/ribuzzco/",
  giftsPath: "/regalos",
  bookingUrl: "https://cal.com/ribuzz-xsmxx7/diagnostico",
  diagnosisCtaLabel: "Agenda tu llamada de introducción",
  diagnosisCtaShortLabel: "Agenda tu llamada",
  diagnosisSupportCopy:
    "Completa una aplicación breve (unos 5-7 minutos) y agenda directamente en el calendario. Esas preguntas son justamente las que nos permiten revisar si hay fit real antes de proponer cualquier paquete.",
  navLinks: [
    { label: "Inicio", href: "/" },
    { label: "Cómo trabajamos", href: "/services" },
    { label: "Sobre RiBuzz", href: "/about" },
    { label: "Agenda tu llamada", href: "/diagnostico" },
  ],
} as const;
