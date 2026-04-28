import Image from "next/image";

import { HotelCaribeHeroGallery } from "@/components/hotel/hotel-caribe-hero-gallery";
import { HotelCaribeMediaGrid } from "@/components/hotel/hotel-caribe-media-grid";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

const caribbeanLinks = {
  whatsapp: "https://wa.me/573217564336",
  reserve: "https://wa.me/573217564336",
  website: "https://hotelcaribbeancartagena.com/",
  maps:
    "https://www.google.com/maps?cid=6194759648847059427&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYASAA&hl=es-419&source=embed",
  phone: "tel:3216803647",
  facebook: "https://www.facebook.com/profile.php?id=100082929587159",
  instagram: "https://www.instagram.com/hotelcaribbeancartagena/?hl=es-la",
} as const;

const heroImages = [
  "/images/hotel-caribbean/rotar-1.webp",
  "/images/hotel-caribbean/rotar-2.webp",
  "/images/hotel-caribbean/rotar-3.webp",
] as const;

const quickLinks = [
  { label: "Contáctanos", icon: "wa", href: caribbeanLinks.whatsapp },
  { label: "Haz tu reserva", icon: "calendar", href: caribbeanLinks.reserve },
  { label: "Página Web", icon: "web", href: caribbeanLinks.website },
  { label: "Califícanos", icon: "star", href: caribbeanLinks.maps },
  { label: "Recepción", icon: "phone", href: caribbeanLinks.phone },
  { label: "Cómo llegar", icon: "pin", href: caribbeanLinks.maps },
] as const;

const rooms = [
  { name: "Doble", tone: "soft", image: "/images/hotel-caribbean/doble.webp" },
  {
    name: "Doble twin",
    tone: "warm",
    image: "/images/hotel-caribbean/doble-twin.webp",
  },
  { name: "Triple", tone: "sun", image: "/images/hotel-caribbean/triple.webp" },
  {
    name: "Familiares",
    tone: "sea",
    image: "/images/hotel-caribbean/familiares.webp",
  },
] as const;

const spaces = [
  {
    name: "Vista al mar",
    tone: "terrace",
    image: "/images/hotel-caribbean/vista-al-mar.webp",
  },
  {
    name: "Piscinas",
    tone: "events",
    image: "/images/hotel-caribbean/piscinas.webp",
  },
  {
    name: "Jacuzzi",
    tone: "restaurant",
    image: "/images/hotel-caribbean/jacuzzi.webp",
  },
] as const;

const featureCards = [
  {
    title: "Disfruta del Comfort",
    description:
      "¡Cartagena te espera! Vive una estadía con la calidez y la comodidad de tu hogar. ¡Será inolvidable!",
    icon: "bed",
    inverted: false,
  },
  {
    title: "Desayuno incluido",
    description:
      "¡Tu estancia comienza aquí! Vive el confort de nuestro hotel con desayuno incluido. ¡Inicia un viaje inolvidable!",
    icon: "coffee",
    inverted: true,
  },
  {
    title: "Piscina para adultos y niños",
    description:
      "¡Te esperamos! Disfruta nuestro confort y la piscina para adultos y niños. ¡Una estancia inolvidable!",
    icon: "pool",
    inverted: false,
  },
  {
    title: "Jacuzzi frente al mar",
    description:
      "¡La relajación te espera! Disfruta de un jacuzzi con vista al mar en una experiencia solo para ti.",
    icon: "jacuzzi",
    inverted: true,
  },
  {
    title: "Cerca a la playa",
    description:
      "¡Ubicación perfecta! El mar está a pasos del hotel. ¡Disfruta el paraíso sin excusas!",
    icon: "beach",
    inverted: false,
  },
  {
    title: "Restaurante",
    description:
      "¡Sabor y conveniencia! No busques más. Disfruta de la mejor gastronomía sin salir del hotel.",
    icon: "cutlery",
    inverted: true,
  },
] as const;

const hotelLogoSrc = "/images/hotel-caribbean/logo.png";

export const metadata = createPageMetadata({
  title: "Hotel Caribbean Cartagena",
  description:
    "Landing activa para Hotel Caribbean Cartagena. Lista para personalización.",
  path: "/hotelcaribbeancartagena",
});

function externalProps(href: string) {
  if (!href.startsWith("http")) return {};

  return {
    target: "_blank",
    rel: "noopener noreferrer",
  };
}

function HotelBrandMark() {
  return (
    <div className="hotel-caribe-brand-mark">
      <Image
        src={hotelLogoSrc}
        alt="Hotel Caribbean Cartagena"
        width={520}
        height={420}
        priority
        className="hotel-caribe-brand-mark__image"
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
    case "calendar":
      return (
        <svg {...commonProps}>
          <path d="M7 3v4" />
          <path d="M17 3v4" />
          <rect x="4" y="5" width="16" height="15" rx="2" />
          <path d="M4 10h16" />
          <path d="m9 15 2 2 4-4" />
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
    case "star":
      return (
        <svg {...commonProps}>
          <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z" />
        </svg>
      );
    case "phone":
      return (
        <svg {...commonProps}>
          <path d="M22 16.9v2.5a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 3.7 2 2 0 0 1 4.1 1.5h2.5a2 2 0 0 1 2 1.7c.1.9.4 1.7.7 2.5a2 2 0 0 1-.4 2.1L7.8 8.9a16 16 0 0 0 7.3 7.3l1.1-1.1a2 2 0 0 1 2.1-.4c.8.3 1.6.6 2.5.7a2 2 0 0 1 1.2 1.5Z" />
        </svg>
      );
    case "pin":
      return (
        <svg {...commonProps}>
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "wifi":
      return (
        <svg {...commonProps}>
          <path d="M5 12.5a10 10 0 0 1 14 0" />
          <path d="M8.5 16a5 5 0 0 1 7 0" />
          <path d="M12 20h.01" />
        </svg>
      );
    case "building":
      return (
        <svg {...commonProps}>
          <path d="M6 21V3h12v18" />
          <path d="M9 7h1" />
          <path d="M14 7h1" />
          <path d="M9 11h1" />
          <path d="M14 11h1" />
          <path d="M9 15h1" />
          <path d="M14 15h1" />
        </svg>
      );
    case "pool":
      return (
        <svg {...commonProps}>
          <path d="M3 17c1.2 0 1.8-.7 2.5-.7s1.3.7 2.5.7 1.8-.7 2.5-.7 1.3.7 2.5.7 1.8-.7 2.5-.7 1.3.7 2.5.7 1.8-.7 2.5-.7" />
          <path d="M7 13V7a2 2 0 0 1 4 0v6" />
          <path d="M11 10h5a2 2 0 0 1 2 2v1" />
        </svg>
      );
    case "cutlery":
      return (
        <svg {...commonProps}>
          <path d="M4 3v7" />
          <path d="M7 3v7" />
          <path d="M4 7h3" />
          <path d="M5.5 10v11" />
          <path d="M14 3v8" />
          <path d="M18 3v18" />
          <path d="M14 11h4" />
        </svg>
      );
    case "bed":
      return (
        <svg {...commonProps}>
          <path d="M3 18V8" />
          <path d="M3 15h18" />
          <path d="M7 11h5a2 2 0 0 1 2 2v2" />
          <path d="M14 10h4a3 3 0 0 1 3 3v5" />
          <path d="M5 18v3" />
          <path d="M19 18v3" />
        </svg>
      );
    case "coffee":
      return (
        <svg {...commonProps}>
          <path d="M4 7h10v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z" />
          <path d="M14 9h2a2 2 0 1 1 0 4h-2" />
          <path d="M5 21h12" />
        </svg>
      );
    case "beach":
      return (
        <svg {...commonProps}>
          <path d="M4 21h16" />
          <path d="M12 7v14" />
          <path d="M6 10a6 6 0 0 1 12 0Z" />
          <path d="M10 21 8 17" />
        </svg>
      );
    case "jacuzzi":
      return (
        <svg {...commonProps}>
          <path d="M4 17c1.2 0 1.8-.7 2.5-.7s1.3.7 2.5.7 1.8-.7 2.5-.7 1.3.7 2.5.7 1.8-.7 2.5-.7 1.3.7 2.5.7 1.8-.7 2.5-.7" />
          <path d="M7 13a5 5 0 0 1 10 0" />
          <path d="M9 7c0-1 .6-1.6 1.3-2.3" />
          <path d="M14 7c0-1 .6-1.6 1.3-2.3" />
        </svg>
      );
    default:
      return null;
  }
}

export default function HotelCaribbeanCartagenaPage() {
  return (
    <main className="hotel-caribe-page hotel-caribbean-page -mt-[76px] min-h-[100dvh]">
      <HotelCaribeHeroGallery images={heroImages} />
      <section className="hotel-caribe-hero">
        <div className="hotel-caribe-wind hotel-caribe-wind--one" />
        <div className="hotel-caribe-wind hotel-caribe-wind--two" />

        <div className="hotel-caribe-biolink">
          <div className="hotel-caribe-identity-card">
            <div className="hotel-caribe-logo-card">
              <HotelBrandMark />
            </div>
            <h1>Cartagena</h1>
            <p className="hotel-caribe-nit">RNT 141867</p>

            <div className="hotel-caribe-socials" aria-label="Redes sociales">
              <a href={caribbeanLinks.instagram} aria-label="Instagram" {...externalProps(caribbeanLinks.instagram)}>
                <Icon name="instagram" />
              </a>
              <a href={caribbeanLinks.facebook} aria-label="Facebook" {...externalProps(caribbeanLinks.facebook)}>
                <Icon name="facebook" />
              </a>
            </div>
          </div>

          <div className="hotel-caribe-actions">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  link.icon === "wa"
                    ? "hotel-caribe-action-link hotel-caribe-action-link--wa"
                    : "hotel-caribe-action-link"
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

      <section className="hotel-caribe-rooms" id="habitaciones">
        <div className="hotel-caribe-section-card">
          <h2>Conoce nuestras habitaciones</h2>
          <HotelCaribeMediaGrid items={rooms} type="room" />
        </div>
      </section>

      <section className="hotel-caribe-spaces" id="espacios">
        <div className="hotel-caribe-section-card">
          <h2>Conoce nuestros espacios</h2>
          <HotelCaribeMediaGrid items={spaces} type="space" />
        </div>
      </section>

      <section className="hotel-caribe-amenities">
        <div className="hotel-caribe-section-card hotel-caribe-section-card--dark">
          <h2>Además contamos con:</h2>
          <div className="hotel-caribbean-feature-grid">
            {featureCards.map((item) => (
              <article
                key={item.title}
                className={item.inverted ? "hotel-caribbean-feature-card hotel-caribbean-feature-card--inverted" : "hotel-caribbean-feature-card"}
              >
                <div className="hotel-caribbean-feature-card__icon">
                  <Icon name={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hotel-caribe-contact" id="contacto">
        <div className="hotel-caribe-map" id="ubicacion">
          <iframe
            title="Ubicación Hotel Caribbean Cartagena"
            src="https://www.google.com/maps?q=Hotel%20Caribbean%20Cartagena&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            className="hotel-caribe-map__label"
            href={caribbeanLinks.maps}
            aria-label="Abrir ubicación en Google Maps"
            {...externalProps(caribbeanLinks.maps)}
          >
            <Icon name="pin" />
            <span>Ver ubicación real</span>
          </a>
        </div>

        <div className="hotel-caribe-contact-card">
          <div className="hotel-caribe-contact-logo">
            <HotelBrandMark />
          </div>
          <div>
            <h2>Contáctanos:</h2>
            <p>Reservas: +57 321 756 4336</p>
            <p>Recepción: +57 321 680 3647</p>
            <p>hotelcaribbeancartagena@gmail.com</p>
          </div>
        </div>
        <div className="hotel-caribe-footer-socials">
          <a href={caribbeanLinks.instagram} aria-label="Instagram" {...externalProps(caribbeanLinks.instagram)}>
            <Icon name="instagram" />
          </a>
          <a
            href={caribbeanLinks.whatsapp}
            aria-label="WhatsApp"
            className="hotel-caribe-footer-socials__wa"
            {...externalProps(caribbeanLinks.whatsapp)}
          >
            <Icon name="wa" />
          </a>
          <a href={caribbeanLinks.facebook} aria-label="Facebook" {...externalProps(caribbeanLinks.facebook)}>
            <Icon name="facebook" />
          </a>
          <a href="/" aria-label="Ir a la página principal de RiBuzz">
            <Image
              src={SITE_CONFIG.logoMark}
              alt="RiBuzz"
              width={30}
              height={30}
              className="hotel-caribbean-ribuzz-mark h-7 w-7 object-contain"
            />
          </a>
        </div>
        <p className="hotel-caribe-footer-name">Hotel Caribbean Cartagena</p>
      </section>

      <a
        className="hotel-caribe-floating-wa"
        href={caribbeanLinks.whatsapp}
        aria-label="Escribir por WhatsApp a Hotel Caribbean Cartagena"
        {...externalProps(caribbeanLinks.whatsapp)}
      >
        <Icon name="wa" />
      </a>
    </main>
  );
}
