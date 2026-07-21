"use client";

import Image from "next/image";

import { ShareButton } from "@/components/ui/share-button";

import styles from "./camila-bionda-mora-card.module.css";

const CARD_URL = "https://ribuzz.com/biondaymora/camila";
const brandWebsite = "https://biondaymora.com/";
const instagramUrl = "https://www.instagram.com/biondaymora.col/";
const brandEmail = "biondaymora@gmail.com";
const whatsappNumber = "573187695491";
const whatsappUrl = `https://wa.me/${whatsappNumber}`;
const locationUrl = "https://www.google.com/maps/search/?api=1&query=Medell%C3%ADn%2C+Colombia";

type IconName = "arrow" | "email" | "instagram" | "location" | "plus" | "web" | "whatsapp";

function Icon({ name }: { name: IconName }) {
  const props = {
    "aria-hidden": true,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "whatsapp":
      return (
        <svg {...props}>
          <path d="M20.3 11.7a8.3 8.3 0 0 1-12.2 7.3L3.7 20.3 5 15.9a8.3 8.3 0 1 1 15.3-4.2Z" />
          <path d="M8.8 8.1c.2-.5.4-.6.7-.6h.5c.2 0 .3.1.4.4l.7 1.8c.1.2 0 .4-.1.5l-.5.6c.5 1.1 1.3 1.9 2.4 2.4l.6-.5c.2-.1.3-.1.5-.1l1.8.7c.2.1.3.2.3.4v.5c0 .3-.1.5-.6.7-.6.3-1.4.3-2.2 0-2.7-1-4.4-2.7-5.4-5.4-.3-.8-.3-1.6 0-2.2Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="4.5" />
          <circle cx="12" cy="12" r="3.3" />
          <path d="M16.8 7.2h.01" />
        </svg>
      );
    case "email":
      return (
        <svg {...props}>
          <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
          <path d="m4.5 7 7.5 5.7L19.5 7" />
        </svg>
      );
    case "location":
      return (
        <svg {...props}>
          <path d="M19 10.1c0 5.1-7 10.4-7 10.4S5 15.2 5 10.1a7 7 0 1 1 14 0Z" />
          <circle cx="12" cy="10.1" r="2.4" />
        </svg>
      );
    case "web":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.5 12h17M12 3.5c2.1 2.3 3.2 5.1 3.2 8.5S14.1 18.2 12 20.5C9.9 18.2 8.8 15.4 8.8 12S9.9 5.8 12 3.5Z" />
        </svg>
      );
    case "plus":
      return (
        <svg {...props}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...props}>
          <path d="M5 12h13M13 7l5 5-5 5" />
        </svg>
      );
  }
}

function downloadContact() {
  const vCard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:María Camila",
    "TITLE:Fundadora",
    "ORG:Bionda y Mora",
    `TEL;TYPE=CELL:+${whatsappNumber}`,
    `EMAIL;TYPE=WORK:${brandEmail}`,
    `URL:${brandWebsite}`,
    `URL;TYPE=INSTAGRAM:${instagramUrl}`,
    "ADR;TYPE=WORK:;;Medellín;;;Colombia",
    "END:VCARD",
  ].join("\n");
  const blob = new Blob([vCard], { type: "text/vcard;charset=utf-8" });
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = objectUrl;
  link.download = "maria-camila-bionda-y-mora.vcf";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(objectUrl);
}

export function CamilaBiondaMoraCard() {
  return (
    <main className={styles.page}>
      <article className={styles.card}>
        <section className={styles.profileHero}>
          <Image
            src="/images/biondaymora/maria-camila.jpg"
            alt="María Camila, fundadora de Bionda y Mora"
            fill
            priority
            sizes="(max-width: 560px) 100vw, 560px"
            className={styles.portrait}
          />
          <div className={styles.heroShade} />

          <div className={styles.heroMeta}>
            <span>Medellín, Colombia</span>
            <span>Fundadora</span>
          </div>

          <div className={styles.heroContent}>
            <p>María Camila</p>
            <h1>Fundadora de<br />Bionda y Mora</h1>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.heroCta}>
              <Icon name="whatsapp" />
              Hablar por WhatsApp
            </a>
          </div>
        </section>

        <section className={styles.contactSection} aria-label="Canales de contacto">
          <p className={styles.kicker}>Conecta</p>
          <div className={styles.contactGrid}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" />
              <span><strong>WhatsApp</strong><small>318 769 5491</small></span>
              <Icon name="arrow" />
            </a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="instagram" />
              <span><strong>Instagram</strong><small>@biondaymora.col</small></span>
              <Icon name="arrow" />
            </a>
            <a href={`mailto:${brandEmail}`}>
              <Icon name="email" />
              <span><strong>Correo</strong><small>Escribir a la marca</small></span>
              <Icon name="arrow" />
            </a>
            <a href={locationUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="location" />
              <span><strong>Ubicación</strong><small>Medellín, Colombia</small></span>
              <Icon name="arrow" />
            </a>
          </div>
        </section>

        <section className={styles.founderSection}>
          <p className={styles.kicker}>Sobre María Camila</p>
          <h2>“Creo piezas para mujeres que caminan su propia historia.”</h2>
          <p className={styles.founderBody}>
            Desde Medellín, lidero una marca de cuero que acompaña el movimiento, la autenticidad y todos los roles de una mujer.
          </p>

          <div className={styles.founderActions}>
            <button type="button" onClick={downloadContact} className={styles.secondaryAction}>
              <Icon name="plus" />
              Agregar contacto
            </button>
            <ShareButton
              title="María Camila | Bionda y Mora"
              text="Conoce el perfil de María Camila, fundadora de Bionda y Mora."
              url={CARD_URL}
              className={styles.secondaryAction}
            />
          </div>
        </section>

        <section className={styles.brandSection}>
          <div className={styles.brandVisual}>
            <Image
              src="/images/biondaymora/web/collection-accessories.jpg"
              alt="Accesorios de cuero Bionda y Mora"
              fill
              sizes="(max-width: 560px) 100vw, 560px"
            />
          </div>
          <div className={styles.brandContent}>
            <p className={styles.kicker}>Bionda y Mora</p>
            <h2>Diseño local para caminar con intención.</h2>
            <p>
              Botas, bolsos y accesorios en cuero legítimo, creados para acompañar a mujeres auténticas en movimiento.
            </p>

            <div className={styles.brandLinks}>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                <Icon name="instagram" />
                Instagram
              </a>
              <a href={brandWebsite} target="_blank" rel="noopener noreferrer">
                <Icon name="web" />
                Ver la marca
              </a>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
