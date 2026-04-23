import Image from "next/image";
import type { CSSProperties } from "react";

import { createPageMetadata } from "@/lib/metadata";

const hotelLinks = {
  whatsapp: "https://wa.me/573225428091",
  website: "https://hotelcaribeplazabarranquilla.com/",
  maps: "https://maps.app.goo.gl/onTRgTaQ8tQNdtzi8",
  facebook: "https://www.facebook.com/hotelcaribeplazaba?_rdc=1&_rdr#",
  instagram: "https://www.instagram.com/hotelcaribeplazaba/",
};

const hotelLogoSrc = "/images/client-cards/hotel-caribe-plaza-logo-horizontal.png";

const quickLinks = [
  { label: "Cont\u00e1ctanos", icon: "wa", href: hotelLinks.whatsapp },
  { label: "Haz tu reserva", icon: "calendar", href: hotelLinks.whatsapp },
  { label: "P\u00e1gina Web", icon: "web", href: hotelLinks.website },
  { label: "Calif\u00edcanos", icon: "star", href: hotelLinks.maps },
  { label: "Recepci\u00f3n", icon: "phone", href: hotelLinks.whatsapp },
  { label: "C\u00f3mo llegar", icon: "pin", href: hotelLinks.maps },
] as const;

const galleryMoments = [
  {
    title: "Llegada Caribe",
    description: "Una entrada c\u00e1lida para empezar la estad\u00eda con calma.",
    tone: "sunset",
  },
  {
    title: "Habitaciones",
    description: "Espacios sencillos, frescos y listos para descansar.",
    tone: "room",
  },
  {
    title: "Barranquilla cerca",
    description: "Ubicaci\u00f3n pr\u00e1ctica para moverte por la ciudad.",
    tone: "city",
  },
  {
    title: "Plan familiar",
    description: "Comodidad para viajes cortos, turismo y trabajo.",
    tone: "family",
  },
] as const;

const rooms = [
  { name: "Sencilla", tone: "soft" },
  { name: "Doble", tone: "warm" },
  { name: "Doble twin", tone: "sun" },
  { name: "Triple", tone: "sea" },
  { name: "Cu\u00e1druple", tone: "light" },
] as const;

const amenities = [
  { label: "Parqueadero", icon: "car" },
  { label: "Ascensor", icon: "building" },
  { label: "WiFi - Internet", icon: "wifi" },
  { label: "Excelente ubicaci\u00f3n", icon: "pin" },
  { label: "Cerca a atractivos tur\u00edsticos", icon: "camera" },
  { label: "Pet friendly", icon: "pet" },
] as const;

export const metadata = createPageMetadata({
  title: "Hotel Caribe Plaza",
  description:
    "Landing de acceso rapido para Hotel Caribe Plaza Barranquilla.",
  path: "/hotelcaribeplaza",
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
        alt="Hotel Caribe Plaza"
        width={520}
        height={420}
        priority
        className="h-full w-full object-contain"
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
        <svg {...commonProps}>
          <path d="M20 11.7a8 8 0 0 1-11.7 7.1L4 20l1.2-4.1A8 8 0 1 1 20 11.7Z" />
          <path d="M9.4 8.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.3.1.5-.1.7l-.3.4c.6 1 1.4 1.8 2.5 2.4l.5-.4c.2-.2.4-.2.7-.1l1.3.6c.3.1.4.3.4.6v.5c0 .3-.1.6-.4.8-.5.4-1.2.5-2.2.2-2.8-.8-5-3-5.8-5.7-.3-.9-.2-1.7.2-2.2Z" />
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
    case "car":
      return (
        <svg {...commonProps}>
          <path d="M5 12h14l-1.6-4.2A3 3 0 0 0 14.6 6H9.4a3 3 0 0 0-2.8 1.8Z" />
          <path d="M5 12v5" />
          <path d="M19 12v5" />
          <circle cx="7.5" cy="17" r="1.5" />
          <circle cx="16.5" cy="17" r="1.5" />
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
    case "wifi":
      return (
        <svg {...commonProps}>
          <path d="M5 12.5a10 10 0 0 1 14 0" />
          <path d="M8.5 16a5 5 0 0 1 7 0" />
          <path d="M12 20h.01" />
        </svg>
      );
    case "camera":
      return (
        <svg {...commonProps}>
          <path d="M5 8h3l1.5-2h5L16 8h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z" />
          <circle cx="12" cy="14" r="3" />
        </svg>
      );
    case "pet":
      return (
        <svg {...commonProps}>
          <circle cx="5.5" cy="10" r="1.8" />
          <circle cx="9" cy="6.5" r="1.8" />
          <circle cx="15" cy="6.5" r="1.8" />
          <circle cx="18.5" cy="10" r="1.8" />
          <path d="M8.5 15.5c.8-2 2-3 3.5-3s2.7 1 3.5 3c.7 1.8-.5 3.5-2.2 3.5-.8 0-1.1-.4-1.3-.4s-.5.4-1.3.4c-1.7 0-2.9-1.7-2.2-3.5Z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function HotelCaribePlazaPage() {
  return (
    <main className="hotel-caribe-page -mt-[76px] min-h-[100dvh]">
      <section className="hotel-caribe-hero">
        <div className="hotel-caribe-photo-bg hotel-caribe-photo-bg--one" />
        <div className="hotel-caribe-photo-bg hotel-caribe-photo-bg--two" />
        <div className="hotel-caribe-photo-bg hotel-caribe-photo-bg--three" />
        <div className="hotel-caribe-leaves hotel-caribe-leaves--top" />
        <div className="hotel-caribe-wind hotel-caribe-wind--one" />
        <div className="hotel-caribe-wind hotel-caribe-wind--two" />

        <div className="hotel-caribe-biolink">
          <div className="hotel-caribe-logo-card">
            <HotelBrandMark />
          </div>
          <h1>Hotel Caribe Plaza Barranquilla</h1>
          <p className="hotel-caribe-nit">RNT 1167724</p>

          <div className="hotel-caribe-actions">
            {quickLinks.map((link) => (
              <a key={link.label} href={link.href} {...externalProps(link.href)}>
                <Icon name={link.icon} />
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          <div className="hotel-caribe-socials" aria-label="Redes sociales">
            <a href={hotelLinks.instagram} aria-label="Instagram" {...externalProps(hotelLinks.instagram)}>
              <Icon name="instagram" />
            </a>
            <a href={hotelLinks.facebook} aria-label="Facebook" {...externalProps(hotelLinks.facebook)}>
              <Icon name="facebook" />
            </a>
          </div>
        </div>
      </section>

      <section className="hotel-caribe-gallery" aria-label="Galeria del hotel">
        <div className="hotel-caribe-gallery__intro">
          <p>Galer&iacute;a del Caribe</p>
          <h2>Im&aacute;genes que aparecen con el scroll</h2>
          <span>
            Inspirado en la galer&iacute;a oficial: bloques suaves, color de atardecer y movimiento
            tropical.
          </span>
        </div>
        <div className="hotel-caribe-gallery__stack">
          {galleryMoments.map((moment, index) => (
            <article
              key={moment.title}
              className={`hotel-caribe-gallery-card hotel-caribe-gallery-card--${moment.tone}`}
              style={{ "--gallery-index": index } as CSSProperties}
            >
              <div className="hotel-caribe-gallery-card__image" aria-hidden="true">
                <span>{moment.title}</span>
              </div>
              <div>
                <h3>{moment.title}</h3>
                <p>{moment.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="hotel-caribe-rooms" id="habitaciones">
        <h2>Conoce nuestras habitaciones</h2>
        <div className="hotel-caribe-room-grid">
          {rooms.map((room, index) => (
            <article key={room.name} className={`hotel-caribe-room hotel-caribe-room--${room.tone}`}>
              <div className="hotel-caribe-room__photo">
                <span>Cama {index + 1}</span>
              </div>
              <p>{room.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="hotel-caribe-amenities">
        <h2>Adem&aacute;s contamos con:</h2>
        <div className="hotel-caribe-amenity-list">
          {amenities.map((item) => (
            <div key={item.label}>
              <Icon name={item.icon} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="hotel-caribe-contact" id="contacto">
        <div
          className="hotel-caribe-map"
          id="ubicacion"
        >
          <iframe
            title="Ubicacion Hotel Caribe Plaza Barranquilla"
            src="https://www.google.com/maps?q=Hotel%20Caribe%20Plaza%20Barranquilla&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            className="hotel-caribe-map__label"
            href={hotelLinks.maps}
            aria-label="Abrir ubicacion en Google Maps"
            {...externalProps(hotelLinks.maps)}
          >
            <Icon name="pin" />
            <span>Ver ubicaci&oacute;n real</span>
          </a>
        </div>

        <div className="hotel-caribe-contact-card">
          <div className="hotel-caribe-contact-logo">
            <HotelBrandMark />
          </div>
          <div>
            <h2>Cont&aacute;ctanos:</h2>
            <p>+57 322 542 8091</p>
            <p>+57 300 684 9047</p>
            <p>hotelcaribeplaza@gmail.com</p>
          </div>
        </div>
        <div className="hotel-caribe-footer-socials">
          <a href={hotelLinks.instagram} aria-label="Instagram" {...externalProps(hotelLinks.instagram)}>
            <Icon name="instagram" />
          </a>
          <a href={hotelLinks.whatsapp} aria-label="WhatsApp" {...externalProps(hotelLinks.whatsapp)}>
            <Icon name="wa" />
          </a>
          <a href={hotelLinks.facebook} aria-label="Facebook" {...externalProps(hotelLinks.facebook)}>
            <Icon name="facebook" />
          </a>
        </div>
        <div className="hotel-caribe-footer-brand" aria-hidden="true">
          <HotelBrandMark />
        </div>
        <p className="hotel-caribe-footer-name">Hotel Caribe Plaza Barranquilla</p>
      </section>

      <a
        className="hotel-caribe-floating-wa"
        href={hotelLinks.whatsapp}
        aria-label="Escribir por WhatsApp a Hotel Caribe Plaza"
        {...externalProps(hotelLinks.whatsapp)}
      >
        <Icon name="wa" />
      </a>
    </main>
  );
}
