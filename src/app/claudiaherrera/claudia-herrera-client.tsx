"use client";

import Image from "next/image";

import { ShareButton } from "@/components/ui/share-button";

const PAGE_URL = "https://ribuzz.com/claudiaherrera";
const phoneDisplay = "+1 305 939 8901";
const phoneRaw = "13059398901";
const websiteLabel = "www.wecomexintl.com";
const websiteHref = "https://www.wecomexintl.com";
const email = "info@wecomexintl.com";
const instagramLabel = "@wecomexintl";
const instagramHref = "https://www.instagram.com/wecomexintl/";

const contactItems = [
  {
    title: phoneDisplay,
    subtitle: "Número de teléfono",
    href: `tel:+${phoneRaw}`,
    icon: "phone",
  },
  {
    title: email,
    subtitle: "Correo",
    href: `mailto:${email}`,
    icon: "mail",
  },
  {
    title: websiteLabel,
    subtitle: "Sitio web",
    href: websiteHref,
    icon: "web",
  },
  {
    title: instagramLabel,
    subtitle: "Instagram",
    href: instagramHref,
    icon: "instagram",
  },
] as const;

function Icon({ name }: { name: (typeof contactItems)[number]["icon"] | "add" }) {
  const commonProps = {
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  switch (name) {
    case "phone":
      return (
        <svg {...commonProps}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.79.61 2.64a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.44-1.27a2 2 0 0 1 2.11-.45c.85.28 1.74.49 2.64.61A2 2 0 0 1 22 16.92Z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...commonProps}>
          <rect x="3" y="5" width="18" height="14" rx="2.5" />
          <path d="m5 7 7 5 7-5" />
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
    case "add":
      return (
        <svg {...commonProps}>
          <path d="M12 5v14" />
          <path d="M5 12h14" />
          <path d="M5.5 19.5A9 9 0 1 1 18.5 6.6" />
        </svg>
      );
    default:
      return null;
  }
}

function buildVCard() {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:Claudia Herrera",
    "TITLE:Ventas y operación en EEUU",
    "ORG:WECOMEX INTL",
    `TEL;TYPE=CELL:+${phoneRaw}`,
    `EMAIL;TYPE=INTERNET:${email}`,
    `URL:${websiteHref}`,
    `URL;TYPE=INSTAGRAM:${instagramHref}`,
    "END:VCARD",
  ].join("\n");
}

export default function ClaudiaHerreraClient() {
  const handleAddContact = () => {
    const blob = new Blob([buildVCard()], { type: "text/vcard;charset=utf-8" });
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = "claudia-herrera.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(objectUrl);
  };

  return (
    <main className="diana-page -mt-[76px] min-h-[100dvh]">
      <div className="diana-page__planet diana-page__planet--top">
        <Image src="/images/claudia/planet.png" alt="" fill className="object-contain" aria-hidden="true" />
      </div>
      <div className="diana-page__planet diana-page__planet--bottom">
        <Image src="/images/claudia/planet.png" alt="" fill className="object-contain" aria-hidden="true" />
      </div>

      <section className="diana-shell">
        <article className="diana-card">
          <div className="diana-card__hero">
            <Image
              src="/images/claudia/photo.jpeg"
              alt="Claudia Herrera"
              fill
              priority
              className="object-cover [object-position:center_28%]"
            />
            <div className="diana-card__hero-shade" />

            <div className="diana-card__identity">
              <h1>Claudia Herrera</h1>
              <p>Ventas y operación en EEUU</p>
            </div>
          </div>

          <div className="diana-card__body">
            <div className="diana-card__body-logo">
              <Image
                src="/images/claudia/logo.jpeg"
                alt="WECOMEX"
                width={280}
                height={120}
                className="h-full w-full object-contain"
                priority
              />
            </div>

            <div className="diana-contact-list">
              {contactItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="diana-contact-item"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <span className="diana-contact-item__icon">
                    <Icon name={item.icon} />
                  </span>
                  <span className="diana-contact-item__copy">
                    <strong>{item.title}</strong>
                    <small>{item.subtitle}</small>
                  </span>
                </a>
              ))}
            </div>

            <div className="diana-card__actions">
              <button type="button" className="diana-action-button" onClick={handleAddContact}>
                <span className="diana-action-button__icon">
                  <Icon name="add" />
                </span>
                <span>Agregar</span>
              </button>

              <ShareButton
                title="Claudia Herrera"
                text="Conoce la tarjeta digital de Claudia Herrera"
                url={PAGE_URL}
                className="diana-action-button"
              />
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
