export const SITE_CONFIG = {
  name: "RiBuzz",
  shortName: "RiBuzz",
  url: "https://ribuzz.vercel.app",
  diagnosisPath: "/contact",
  diagnosisFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSedUNuJeyesXwKhUzx80Mnh9RzblT5h_AGAyJ6TB2CW0SbJwA/viewform?usp=header",
  description:
    "RiBuzz diseña e implementa sistemas comerciales para empresas que ya venden, pero todavía no crecen con estructura, seguimiento y consistencia.",
  logoPlaceholder: "/ribuzz-wordmark.png",
  logoMark: "/ribuzz-mark.png",
  ogImagePlaceholder: "/og-ribuzz-placeholder.svg",
  contactEmail: "ribuzzco@gmail.com",
  whatsappUrl: "https://wa.me/573332541346",
  instagramUrl: "https://www.instagram.com/ribuzzco/",
  diagnosisCtaLabel: "Solicita tu diagnóstico gratuito",
  diagnosisCtaShortLabel: "Diagnóstico gratuito",
  diagnosisSupportCopy:
    "Te toma menos de 10 minutos y recibes una lectura inicial de tu sistema comercial. Primero revisamos si hay fit real antes de proponer cualquier intervención.",
  navLinks: [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/services" },
    { label: "Metodología", href: "/methodology" },
    { label: "Sobre RiBuzz", href: "/about" },
    { label: "Startco", href: "/startco" },
    { label: "NFC", href: "/tarjetas-nfc" },
    { label: "Solicitar diagnóstico", href: "/contact" },
  ],
} as const;



