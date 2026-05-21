import Image from "next/image";
import Link from "next/link";

import { FiammataCollectionGrid } from "@/components/fiammata/fiammata-collection-grid";
import { HotelCaribeHeroGallery } from "@/components/hotel/hotel-caribe-hero-gallery";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

const nunaLinks = {
  whatsapp: "https://wa.me/573022415996",
  website: "https://www.nunaamautta.com.co/",
  shop: "https://www.nunaamautta.com.co/shop/",
  contact: "https://www.nunaamautta.com.co/contactanos/",
  instagram: "https://www.instagram.com/nunaamautta/",
} as const;

const heroImages = [
  "/images/nunaamautta/hero-1.jpg",
  "/images/nunaamautta/hero-2.jpg",
  "/images/nunaamautta/hero-3.jpg",
] as const;

const quickLinks = [
  { label: "Comprar coleccion Conecta", icon: "bag", href: nunaLinks.shop },
  { label: "Asesoria WhatsApp", icon: "wa", href: nunaLinks.whatsapp },
  { label: "Pagina web", icon: "web", href: nunaLinks.website },
] as const;

const collections = [
  {
    name: "Prendas rituales",
    href: "https://www.nunaamautta.com.co/producto/top-capucha-alma/",
    images: [
      "/images/nunaamautta/top-alma.jpg",
      "/images/nunaamautta/top-deusa.jpg",
      "/images/nunaamautta/short-indra.jpg",
    ] as [string, string, string],
  },
  {
    name: "Faldas y siluetas",
    href: "https://www.nunaamautta.com.co/producto/minifalda-citrino/",
    images: [
      "/images/nunaamautta/falda-citrino.jpg",
      "/images/nunaamautta/falda-concha.jpg",
      "/images/nunaamautta/hero-2.jpg",
    ] as [string, string, string],
  },
  {
    name: "Bikinis",
    href: "https://www.nunaamautta.com.co/producto/bikini-conchas/",
    images: [
      "/images/nunaamautta/bikini-conchas.jpg",
      "/images/nunaamautta/hero-1.jpg",
      "/images/nunaamautta/hero-3.jpg",
    ] as [string, string, string],
  },
  {
    name: "Mesh hats",
    href: "https://www.nunaamautta.com.co/producto/cristal-mesh-hat/",
    images: [
      "/images/nunaamautta/gorro-cristal.jpg",
      "/images/nunaamautta/gorro-magia.jpg",
      "/images/nunaamautta/hero-3.jpg",
    ] as [string, string, string],
  },
] as const;

const logoSrc = "/images/nunaamautta/logo.png";

export const metadata = createPageMetadata({
  title: "Nuna Amautta",
  description:
    "Biolink de Nuna Amautta. Espiritu Sabio, moda consciente y coleccion Conecta con compra directa y asesoria por WhatsApp.",
  path: "/nunaamautta",
});

function externalProps(href: string) {
  if (!href.startsWith("http")) return {};

  return {
    target: "_blank",
    rel: "noopener noreferrer",
  };
}

function NunaBrandMark() {
  return (
    <div className="fiammata-brand-mark">
      <Image
        src={logoSrc}
        alt="Nuna Amautta"
        width={408}
        height={261}
        priority
        className="fiammata-brand-mark__image nunaamautta-brand-mark__image"
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
    case "bag":
      return (
        <svg {...commonProps}>
          <path d="M6 8h12l-1 12H7L6 8Z" />
          <path d="M9 8a3 3 0 0 1 6 0" />
          <path d="M9.5 13h5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function NunaAmauttaPage() {
  return (
    <main className="fiammata-page nunaamautta-page -mt-[76px] min-h-[100dvh]">
      <HotelCaribeHeroGallery images={heroImages} />

      <section className="fiammata-hero">
        <div className="fiammata-shell">
          <div className="fiammata-identity-card">
            <div className="fiammata-logo-card">
              <NunaBrandMark />
            </div>
            <p className="fiammata-tagline-pill">
              Espiritu Sabio
              <br />
              Moda consciente
            </p>

            <div className="fiammata-socials" aria-label="Redes sociales">
              <a
                href={nunaLinks.instagram}
                aria-label="Instagram"
                {...externalProps(nunaLinks.instagram)}
              >
                <Icon name="instagram" />
              </a>
              <a
                href={nunaLinks.whatsapp}
                aria-label="WhatsApp"
                {...externalProps(nunaLinks.whatsapp)}
              >
                <Icon name="wa" />
              </a>
            </div>
          </div>

          <div className="fiammata-actions">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  link.icon === "bag"
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
          <h2>Coleccion Conecta</h2>
          <p className="fiammata-section-card__intro">
            Prendas con energia organica, siluetas suaves y accesorios pensados
            para vestir desde el autocuidado.
          </p>
          <FiammataCollectionGrid collections={collections} />
        </div>
      </section>

      <section className="fiammata-contact" id="contacto">
        <div className="fiammata-contact-card">
          <div className="fiammata-contact-logo">
            <NunaBrandMark />
          </div>
          <div className="fiammata-contact-copy">
            <h2>Conecta con Nuna</h2>
            <p>WhatsApp: +57 302 241 5996</p>
            <p>Coleccion Conecta disponible en tienda online.</p>
            <p>Sentimientos que salen del corazon.</p>
          </div>
        </div>

        <div className="fiammata-footer-socials">
          <a
            href={nunaLinks.instagram}
            aria-label="Instagram"
            {...externalProps(nunaLinks.instagram)}
          >
            <Icon name="instagram" />
          </a>
          <a
            href={nunaLinks.whatsapp}
            aria-label="WhatsApp"
            className="fiammata-footer-socials__wa"
            {...externalProps(nunaLinks.whatsapp)}
          >
            <Icon name="wa" />
          </a>
          <a
            href={nunaLinks.website}
            aria-label="Pagina web"
            {...externalProps(nunaLinks.website)}
          >
            <Icon name="web" />
          </a>
          <Link href="/" aria-label="Ir a la pagina principal de RiBuzz">
            <Image
              src={SITE_CONFIG.logoMark}
              alt="RiBuzz"
              width={30}
              height={30}
              className="fiammata-ribuzz-mark h-7 w-7 object-contain"
            />
          </Link>
        </div>
        <p className="fiammata-footer-name">Nuna Amautta</p>
      </section>
    </main>
  );
}
