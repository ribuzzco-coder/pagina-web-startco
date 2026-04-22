import Image from "next/image";

import { createPageMetadata } from "@/lib/metadata";

const quickLinks = [
  { label: "Cont\u00e1ctanos", icon: "wa", href: "#contacto" },
  { label: "Reserva aqu\u00ed", icon: "calendar", href: "#habitaciones" },
  { label: "P\u00e1gina Web", icon: "web", href: "#" },
  { label: "Calif\u00edcanos", icon: "star", href: "#" },
  { label: "Recepci\u00f3n", icon: "phone", href: "#contacto" },
  { label: "Ubicaci\u00f3n", icon: "pin", href: "#ubicacion" },
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
    "Espacio reservado para la landing Hotel Caribe Plaza.",
  path: "/hotelcaribeplaza",
});

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
        <div className="hotel-caribe-leaves hotel-caribe-leaves--top" />
        <div className="hotel-caribe-logo-card">
          <Image
            src="/images/client-cards/hotel-caribe-plaza-front.png"
            alt="Hotel Caribe Plaza"
            width={240}
            height={240}
            priority
            className="h-full w-full object-contain"
          />
        </div>
        <p className="hotel-caribe-nit">RN 1167724</p>
        <h1>Hotel Caribe Plaza Barranquilla</h1>
        <div className="hotel-caribe-socials" aria-label="Redes sociales">
          <span>IG</span>
          <span>f</span>
        </div>

        <div className="hotel-caribe-actions">
          {quickLinks.map((link) => (
            <a key={link.label} href={link.href}>
              <Icon name={link.icon} />
              <span>{link.label}</span>
            </a>
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
        <div className="hotel-caribe-map" id="ubicacion">
          <div className="hotel-caribe-map__pin" />
          <p>Hotel Caribe Plaza Barranquilla</p>
        </div>

        <div className="hotel-caribe-contact-card">
          <div className="hotel-caribe-contact-logo">
            <Image
              src="/images/client-cards/hotel-caribe-plaza-front.png"
              alt=""
              width={90}
              height={90}
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <h2>Cont&aacute;ctanos:</h2>
            <p>+57 322 542 8091</p>
            <p>+57 300 684 9047</p>
            <p>hotelcaribeplaza@gmail.com</p>
          </div>
        </div>
        <div className="hotel-caribe-footer-socials">
          <span>IG</span>
          <span>WA</span>
          <span>f</span>
        </div>
        <p className="hotel-caribe-footer-name">Hotel Caribe Plaza Barranquilla</p>
      </section>
    </main>
  );
}
