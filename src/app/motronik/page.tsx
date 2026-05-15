import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

const motronikLogo = "/images/motronik/logo.webp";

const motronikLinks = {
  survey: "https://forms.gle/rTSZZ9vYs7nm9DDt7",
  instagram: "https://www.instagram.com/motronikmedellin/",
  whatsapp:
    "https://api.whatsapp.com/send/?phone=573014055162&text=Hola%2C+quiero+m%C3%A1s+informaci%C3%B3n+sobre+Motronik&type=phone_number&app_absent=0",
  website: "https://motronikcol.com/",
  facebook: "https://www.facebook.com/motronikmedellin/",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Cra.%2056A%20%23%2055-30%204to%20piso%2C%20La%20Candelaria%2C%20Medell%C3%ADn%2C%20Antioquia",
} as const;

const catalogButtons = [
  {
    title: "Accesorios",
    description: "PDF próximamente",
    href: undefined,
    featured: false,
  },
  {
    title: "Repuestos",
    description: "PDF próximamente",
    href: undefined,
    featured: true,
  },
] as const;

const supportCards = {
  map: {
    title: "Ubicacion",
  },
  special: {
    title: "Encuesta de Bodega",
    description:
      "Boton visible para abrir la encuesta/promocion desde QR y celular.",
    primaryAction: "Abrir encuesta",
    secondaryAction: "Link listo",
  },
  cta: {
    title: "Hablemos desde Bodega",
    description:
      "Para cotizaciones, disponibilidad de referencias o contacto comercial, escribe al WhatsApp principal de Motronik.",
    action: "Contactar por WhatsApp",
  },
} as const;

const bodegaCards = {
  company: {
    title: "Motronik para Bodega",
    description:
      "Somos un punto especializado en accesorios, lujos y repuestos para moto. Desde Bodega atendemos compras rapidas, asesoria de producto y solicitudes comerciales para clientes y aliados.",
  },
  survey: {
    title: "Encuesta de Bodega",
    description:
      "Responde la encuesta desde el QR o tu celular.",
    action: "Abrir encuesta",
    confirmation: "Link listo para QR y celular",
  },
} as const;

const ashSparks = [
  { left: "6%", top: "14%", delay: "0s", duration: "9s", size: "10px" },
  { left: "18%", top: "28%", delay: "1.4s", duration: "11s", size: "6px" },
  { left: "29%", top: "10%", delay: "0.6s", duration: "10s", size: "8px" },
  { left: "42%", top: "20%", delay: "2.1s", duration: "12s", size: "9px" },
  { left: "58%", top: "12%", delay: "1.1s", duration: "9.5s", size: "7px" },
  { left: "71%", top: "26%", delay: "2.8s", duration: "10.8s", size: "8px" },
  { left: "84%", top: "15%", delay: "0.9s", duration: "11.4s", size: "11px" },
  { left: "92%", top: "34%", delay: "2.4s", duration: "9.8s", size: "6px" },
] as const;

const smokeClouds = [
  { left: "9%", top: "16%", width: "220px", height: "120px", delay: "0s" },
  { left: "68%", top: "14%", width: "260px", height: "140px", delay: "2s" },
  { left: "18%", top: "72%", width: "240px", height: "128px", delay: "1.2s" },
  { left: "72%", top: "76%", width: "210px", height: "116px", delay: "3.1s" },
] as const;

export const metadata = createPageMetadata({
  title: "Motronik",
  description:
    "Landing de Motronik para Bodega con catalogo, encuesta, contacto rapido y ubicacion.",
  path: "/motronik",
});

function externalProps(href: string) {
  if (!href.startsWith("http")) return {};

  return {
    target: "_blank",
    rel: "noopener noreferrer",
  };
}

function SocialIcon({
  name,
}: {
  name: "instagram" | "whatsapp" | "facebook";
}) {
  if (name === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M14.2 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.7-.1-1.5-.2-2.2-.2-2.2 0-3.8 1.4-3.8 3.9v2H8.6V14h2.5v7h3.1Z" />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.56 0 .27 5.28.27 11.79c0 2.08.54 4.1 1.57 5.88L0 24l6.52-1.71a11.78 11.78 0 0 0 5.54 1.41h.01c6.5 0 11.79-5.29 11.79-11.79 0-3.15-1.22-6.1-3.34-8.43Zm-8.46 18.2h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.87 1.01 1.04-3.77-.23-.39a9.8 9.8 0 0 1-1.5-5.15c0-5.43 4.42-9.85 9.87-9.85 2.63 0 5.1 1.02 6.96 2.88a9.8 9.8 0 0 1 2.88 6.97c0 5.44-4.42 9.86-9.84 9.89Z" />
        <path d="M17.56 14.34c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.76.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.46a8.93 8.93 0 0 1-1.66-2.06c-.17-.3-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.21-.24-.59-.49-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.1 3.2 5.09 4.48.71.31 1.27.5 1.7.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-none stroke-current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M16.8 7.2h.01" />
    </svg>
  );
}

function CatalogButton({
  title,
  description,
  href,
  featured,
}: (typeof catalogButtons)[number]) {
  const isActive = Boolean(href);

  const content = (
    <Card
      glowTone="pink"
      className={cn(
        "motronik-catalog-button group relative min-h-[132px] rounded-[24px] border px-4 py-5 text-center transition duration-300",
        featured
          ? "border-[#ff5c48]/46 bg-[linear-gradient(180deg,rgba(42,16,16,0.97),rgba(23,11,11,0.98))]"
          : "border-white/10 bg-[linear-gradient(180deg,rgba(19,21,30,0.96),rgba(11,13,20,0.98))]",
        !isActive && "motronik-catalog-button--disabled",
      )}
    >
      <span className="motronik-neon-edge" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-2">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#F5F7FA]">
          {title}
        </p>
        <p className="text-xs leading-relaxed text-[#A8AFBE]">{description}</p>
      </div>
    </Card>
  );

  if (!href) {
    return <div className="block w-full">{content}</div>;
  }

  return (
    <a href={href} className="block w-full" {...externalProps(href)}>
      {content}
    </a>
  );
}

export default function MotronikPage() {
  return (
    <section className="motronik-page relative -mt-[76px] min-h-screen overflow-hidden">
      <div className="motronik-page__background" aria-hidden="true">
        <div className="motronik-page__backdrop" />
        <div className="motronik-page__ashfield">
          {ashSparks.map((spark) => (
            <span
              key={`${spark.left}-${spark.top}`}
              className="motronik-ash"
              style={{
                left: spark.left,
                top: spark.top,
                animationDelay: spark.delay,
                animationDuration: spark.duration,
                width: spark.size,
                height: spark.size,
              }}
            />
          ))}
        </div>
        <div className="motronik-page__smoke">
          {smokeClouds.map((cloud) => (
            <span
              key={`${cloud.left}-${cloud.top}`}
              className="motronik-smoke"
              style={{
                left: cloud.left,
                top: cloud.top,
                width: cloud.width,
                height: cloud.height,
                animationDelay: cloud.delay,
              }}
            />
          ))}
        </div>
      </div>

      <Container className="relative z-10 flex min-h-screen max-w-3xl flex-col items-center justify-center py-24 sm:py-32">
        <div className="motronik-shell relative w-full overflow-hidden rounded-[32px] border border-white/10 px-5 py-7 shadow-[0_24px_64px_rgba(0,0,0,0.34)] backdrop-blur-[12px] sm:rounded-[36px] sm:px-10 sm:py-10">
          <div className="motronik-shell__flare" />

          <div className="relative flex flex-col items-center text-center">
            <div className="motronik-logo-ring flex h-32 w-32 items-center justify-center rounded-full border shadow-[0_16px_32px_rgba(0,0,0,0.24)] sm:h-36 sm:w-36">
              <Image
                src={motronikLogo}
                alt="Logo MOTRONIK"
                width={112}
                height={112}
                className="h-24 w-24 object-contain sm:h-28 sm:w-28"
                priority
              />
            </div>

            <h1 className="mt-6 text-4xl font-normal tracking-[0.08em] text-[#F5F7FA] sm:text-5xl [font-family:var(--font-zen-dots)]">
              MOTRONIK
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#D0D4DE] sm:text-base">
              Bodega Motronik conecta accesorios, lujos y repuestos de alta
              calidad con atencion rapida para mejorar el rendimiento y la
              estetica de tu moto.
            </p>

            <div className="mt-5 flex items-center justify-center gap-3">
              <a
                href={motronikLinks.instagram}
                aria-label="Instagram Motronik"
                className="motronik-social"
                {...externalProps(motronikLinks.instagram)}
              >
                <SocialIcon name="instagram" />
              </a>
              <a
                href={motronikLinks.whatsapp}
                aria-label="WhatsApp Motronik"
                className="motronik-social"
                {...externalProps(motronikLinks.whatsapp)}
              >
                <SocialIcon name="whatsapp" />
              </a>
              <a
                href={motronikLinks.facebook}
                aria-label="Facebook Motronik"
                className="motronik-social"
                {...externalProps(motronikLinks.facebook)}
              >
                <SocialIcon name="facebook" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto mt-10 max-w-xl">
            <Card className="motronik-card rounded-[26px] px-6 py-6 text-center">
              <p className="text-base font-semibold text-[#F5F7FA]">
                {bodegaCards.company.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#A8AFBE]">
                {bodegaCards.company.description}
              </p>
            </Card>
          </div>

          <div className="relative mx-auto mt-4 max-w-xl">
            <a
              href={motronikLinks.website}
              className="motronik-site-link block w-full"
              {...externalProps(motronikLinks.website)}
            >
              <Card
                glowTone="pink"
                className="rounded-[24px] border border-[#ff5c48]/26 bg-[linear-gradient(180deg,rgba(35,16,18,0.96),rgba(18,10,12,0.98))] px-5 py-5 text-center transition duration-300 hover:-translate-y-[1px]"
              >
                <span className="motronik-neon-edge" />
                <div className="relative z-10">
                  <p className="text-base font-semibold text-[#F5F7FA]">Sitio web</p>
                  <p className="mt-1 text-sm text-[#A8AFBE]">
                    Conoce la página principal de Motronik
                  </p>
                </div>
              </Card>
            </a>
          </div>

          <div className="relative mx-auto mt-4 grid max-w-xl gap-4 sm:grid-cols-2">
            {catalogButtons.map((link) => (
              <CatalogButton key={link.title} {...link} />
            ))}
          </div>

          <div className="relative mx-auto mt-8 grid max-w-xl gap-4 md:grid-cols-2">
            <Card
              glowTone="pink"
              className="motronik-card motronik-card--map group relative h-full min-h-[300px] overflow-hidden rounded-[28px] border px-5 py-6 text-center sm:px-6"
            >
              <div className="relative z-10 mx-auto max-w-[78%]">
                <p className="text-xl font-semibold tracking-tight text-[#F5F7FA]">
                  {supportCards.map.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#A8AFBE]">
                  Cra. 56A # 55-30 4to piso, La Candelaria, Medellin,
                  Antioquia.
                </p>
              </div>

              <div className="motronik-map-embed relative z-10 mt-5 overflow-hidden rounded-[20px] border border-white/10 bg-black/20 shadow-[0_18px_34px_rgba(0,0,0,0.18)]">
                <iframe
                  title="Mapa Motronik"
                  src="https://www.google.com/maps?q=Cra.%2056A%20%23%2055-30%204to%20piso%2C%20La%20Candelaria%2C%20Medell%C3%ADn%2C%20Antioquia&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="motronik-map-embed__frame h-[270px] w-full border-0 sm:h-[320px]"
                />
                <div className="motronik-map-embed__shader" aria-hidden="true" />
                <a
                  href={motronikLinks.maps}
                  className="motronik-map-action absolute bottom-3 right-3 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition duration-300"
                  {...externalProps(motronikLinks.maps)}
                >
                  Abrir mapa
                </a>
              </div>
            </Card>

            <Card
              glowTone="pink"
              className="motronik-card motronik-card--special group relative flex h-full min-h-[300px] flex-col rounded-[28px] border px-6 py-6 text-center"
            >
              <div className="relative flex flex-1 flex-col items-center justify-between gap-6">
                <div>
                  <p className="text-xl font-semibold tracking-tight text-[#F5F7FA]">
                    {bodegaCards.survey.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                    {bodegaCards.survey.description}
                  </p>
                </div>

                <div className="flex flex-col items-center gap-5">
                  <div className="motronik-special-mark relative">
                    <div className="motronik-special-mark__glow" />
                    <Image
                      src={motronikLogo}
                      alt="Marca base Motronik"
                      width={110}
                      height={110}
                      className="relative h-20 w-20 object-contain sm:h-24 sm:w-24"
                    />
                  </div>

                  <div className="grid w-full grid-cols-1 gap-2">
                    <a
                      href={motronikLinks.survey}
                      className="motronik-pill motronik-pill--red inline-flex min-h-12 items-center justify-center text-center uppercase tracking-[0.1em] transition hover:-translate-y-0.5"
                      {...externalProps(motronikLinks.survey)}
                    >
                      {bodegaCards.survey.action}
                    </a>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#A8AFBE]">
                      {bodegaCards.survey.confirmation}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="relative mx-auto mt-4 block max-w-xl">
            <Card className="motronik-card motronik-card--cta rounded-[26px] border-dashed px-6 py-6 text-center md:min-h-[132px]">
              <div className="flex flex-col items-center justify-center gap-3">
                <p className="text-base font-semibold text-[#F5F7FA]">
                  {supportCards.cta.title}
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#98A0B3]">
                {supportCards.cta.description}
              </p>
              <a
                href={motronikLinks.whatsapp}
                className="motronik-cta-link mt-4 inline-flex rounded-full px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] transition duration-300"
                {...externalProps(motronikLinks.whatsapp)}
              >
                {supportCards.cta.action}
              </a>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
