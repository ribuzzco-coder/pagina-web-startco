import Image from "next/image";

import { FiammataCollectionGrid } from "@/components/fiammata/fiammata-collection-grid";
import { HotelCaribeHeroGallery } from "@/components/hotel/hotel-caribe-hero-gallery";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

const fiammataLinks = {
  whatsapp: "https://wa.me/573007851587",
  website: "https://fiammataaccessories.com/",
  maps:
    "https://www.google.com/maps/place/Complex+Los+Balsos/@6.1862251,-75.5622073,17z/data=!3m1!4b1!4m6!3m5!1s0x8e4682ed54c046df:0xd9b865fdafe03f92!8m2!3d6.1862251!4d-75.5622073!16s%2Fg%2F11bw_7k1qm?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D",
  instagram: "https://www.instagram.com/fiammataccesorios/",
  facebook: "https://www.facebook.com/p/Fiammata-Accesorios-100063781710516/",
} as const;

const heroImages = [
  "/images/fiammata/rotar-1.webp",
  "/images/fiammata/rotar-2.webp",
] as const;

const quickLinks = [
  { label: "Página web", icon: "web", href: fiammataLinks.website },
  { label: "Asesoría WhatsApp", icon: "wa", href: fiammataLinks.whatsapp },
  {
    label: "Punto de venta Medellín, Mall Complex Los Balsos",
    icon: "pin",
    href: fiammataLinks.maps,
  },
] as const;

const collections = [
  {
    name: "Pulseras",
    href: "https://fiammataaccessories.com/collections/pulseras",
    images: [
      "/images/fiammata/pulseras-1.webp",
      "/images/fiammata/pulseras-2.webp",
      "/images/fiammata/pulseras-3.webp",
    ] as [string, string, string],
  },
  {
    name: "Dijes para cadenas",
    href: "https://fiammataaccessories.com/collections/dijes-para-cadenas-y-collares",
    images: [
      "/images/fiammata/dijes-1.webp",
      "/images/fiammata/dijes-2.webp",
      "/images/fiammata/dijes-3.webp",
    ] as [string, string, string],
  },
  {
    name: "Aretes",
    href: "https://fiammataaccessories.com/collections/aretes",
    images: [
      "/images/fiammata/aretes-1.webp",
      "/images/fiammata/aretes-2.webp",
      "/images/fiammata/aretes-3.webp",
    ] as [string, string, string],
  },
  {
    name: "Collares",
    href: "https://fiammataaccessories.com/collections/collar",
    images: [
      "/images/fiammata/collares-1.webp",
      "/images/fiammata/collares-2.webp",
      "/images/fiammata/collares-3.webp",
    ] as [string, string, string],
  },
] as const;

const logoSrc = "/images/fiammata/logo.avif";

export const metadata = createPageMetadata({
  title: "Fiammata",
  description:
    "Landing activa para Fiammata. Joyería artesanal colombiana con colecciones destacadas y contacto directo.",
  path: "/fiammata",
});

function externalProps(href: string) {
  if (!href.startsWith("http")) return {};

  return {
    target: "_blank",
    rel: "noopener noreferrer",
  };
}

function FiammataBrandMark() {
  return (
    <div className="fiammata-brand-mark">
      <Image
        src={logoSrc}
        alt="Fiammata"
        width={520}
        height={420}
        priority
        className="fiammata-brand-mark__image"
      />
    </div>
  );
}

function Icon({ name }: { name: string }) {
  const commonProps = {
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  switch (name) {
    case "wa":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.56 0 .27 5.28.27 11.79c0 2.08.54 4.1 1.57 5.88L0 24l6.52-1.71a11.78 11.78 0 0 0 5.54 1.41h.01c6.5 0 11.79-5.29 11.79-11.79 0-3.15-1.22-6.1-3.34-8.43Zm-8.46 18.2h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.87 1.01 1.04-3.77-.23-.39a9.8 9.8 0 0 1-1.5-5.15c0-5.43 4.42-9.85 9.87-9.85 2.63 0 5.1 1.02 6.96 2.88a9.8 9.8 0 0 1 2.88 6.97c0 5.44-4.42 9.86-9.84 9.89Z"
          />
          <path
            fill="currentColor"
            d="M17.56 14.34c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.76.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.46a8.93 8.93 0 0 1-1.66-2.06c-.17-.3-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.21-.24-.59-.49-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.1 3.2 5.09 4.48.71.31 1.27.5 1.7.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
          />
        </svg>
      );
    case "web":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.3 2.4 3.4 5.4 3.4 9s-1.1 6.6-3.4 9c-2.3-2.4-3.4-5.4-3.4-9S9.7 5.4 12 3Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...commonProps}>
          <rect x="4" y="4" width="16" height="16" rx="5" />
          <circle cx="12" cy="12" r="3.2" />
          <path d="M16.8 7.2h.01" />
        </svg>
      );
    case "facebook":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M14.2 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.7-.1-1.5-.2-2.2-.2-2.2 0-3.8 1.4-3.8 3.9v2H8.6V14h2.5v7h3.1Z"
          />
        </svg>
      );
    case "pin":
      return (
        <svg {...commonProps}>
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    default:
      return null;
  }
}

export default function FiammataPage() {
  return (
    <main className="fiammata-page -mt-[76px] min-h-[100dvh]">
      <HotelCaribeHeroGallery images={heroImages} />

      <section className="fiammata-hero">
        <div className="fiammata-shell">
          <div className="fiammata-identity-card">
            <div className="fiammata-logo-card">
              <FiammataBrandMark />
            </div>
            <p className="fiammata-tagline-pill">Joyería Artesanal Colombiana</p>

            <div className="fiammata-socials" aria-label="Redes sociales">
              <a
                href={fiammataLinks.instagram}
                aria-label="Instagram"
                {...externalProps(fiammataLinks.instagram)}
              >
                <Icon name="instagram" />
              </a>
              <a
                href={fiammataLinks.facebook}
                aria-label="Facebook"
                {...externalProps(fiammataLinks.facebook)}
              >
                <Icon name="facebook" />
              </a>
            </div>
          </div>

          <div className="fiammata-actions">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  link.icon === "web"
                    ? "fiammata-action-link fiammata-action-link--wa"
                    : "fiammata-action-link"
                }
                {...externalProps(link.href)}
              >
                <Icon name={link.icon} />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="fiammata-collections" id="colecciones">
        <div className="fiammata-section-card">
          <h2>Nuestras colecciones</h2>
          <FiammataCollectionGrid collections={collections} />
        </div>
      </section>

      <section className="fiammata-contact" id="contacto">
        <div className="fiammata-map" id="ubicacion">
          <iframe
            title="Ubicación Fiammata"
            src="https://www.google.com/maps?q=Mall%20Complex%20de%20los%20Balsos%20Medellin&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            className="fiammata-map__label"
            href={fiammataLinks.maps}
            aria-label="Abrir ubicación en Google Maps"
            {...externalProps(fiammataLinks.maps)}
          >
            <Icon name="pin" />
            <span>Ver ubicación real</span>
          </a>
        </div>

        <div className="fiammata-contact-card">
          <div className="fiammata-contact-logo">
            <FiammataBrandMark />
          </div>
          <div className="fiammata-contact-copy">
            <h2>Contáctanos</h2>
            <p>WhatsApp: +57 300 785 1587</p>
            <p>Mall Complex de los Balsos</p>
            <p>Carrera 25 #12 Sur 59</p>
            <p>Local 107 - Primer piso</p>
          </div>
        </div>

        <div className="fiammata-footer-socials">
          <a
            href={fiammataLinks.instagram}
            aria-label="Instagram"
            {...externalProps(fiammataLinks.instagram)}
          >
            <Icon name="instagram" />
          </a>
          <a
            href={fiammataLinks.whatsapp}
            aria-label="WhatsApp"
            className="fiammata-footer-socials__wa"
            {...externalProps(fiammataLinks.whatsapp)}
          >
            <Icon name="wa" />
          </a>
          <a
            href={fiammataLinks.facebook}
            aria-label="Facebook"
            {...externalProps(fiammataLinks.facebook)}
          >
            <Icon name="facebook" />
          </a>
          <a href="/" aria-label="Ir a la página principal de RiBuzz">
            <Image
              src={SITE_CONFIG.logoMark}
              alt="RiBuzz"
              width={30}
              height={30}
              className="fiammata-ribuzz-mark h-7 w-7 object-contain"
            />
          </a>
        </div>
        <p className="fiammata-footer-name">Fiammata</p>
      </section>

      <a
        className="fiammata-floating-wa"
        href={fiammataLinks.whatsapp}
        aria-label="Escribir por WhatsApp a Fiammata"
        {...externalProps(fiammataLinks.whatsapp)}
      >
        <Icon name="wa" />
      </a>
    </main>
  );
}
