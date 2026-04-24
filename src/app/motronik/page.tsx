import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { StartcoGalaxy } from "@/components/ui/startco-galaxy";
import { createPageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

const motronikLogo = "/images/motronik/logo.webp";

const motronikLinks = {
  instagram: "https://www.instagram.com/motronikmedellin/",
  whatsapp:
    "https://api.whatsapp.com/send/?phone=573014055073&text=Hola%2C+quiero+m%C3%A1s+informaci%C3%B3n+sobre+este+producto&type=phone_number&app_absent=0",
  website: "https://motronikcol.com/",
  catalog: "https://www.mercadolibre.com.ar/tienda/motronik-repuestos",
  facebook: "https://www.facebook.com/motronikmedellin/",
  maps: "https://www.google.com/maps/search/motronik/@6.2571674,-75.5709437,13z?entry=s&sa=X&ved=1t%3A199789",
} as const;

export const metadata = createPageMetadata({
  title: "Motronik",
  description:
    "Base inicial para la landing de Motronik con la misma estructura general de Startco.",
  path: "/motronik",
});

const primaryLinks = [
  {
    title: "Mercado Libre",
    description: "Explora el catálogo disponible",
    accent: "from-[#FFE16B]/22 via-[#FFB13B]/12 to-transparent",
    glowTone: "green",
    featured: false,
    href: motronikLinks.catalog,
  },
  {
    title: "Catálogo",
    description: "Acceso principal a productos o soluciones",
    accent: "from-[#FF6A45]/22 via-[#FF3B5C]/12 to-transparent",
    glowTone: "pink",
    featured: true,
    href: motronikLinks.catalog,
  },
  {
    title: "Sitio web",
    description: "Volver a la página principal de Motronik",
    accent: "from-[#FF8C66]/18 via-[#FF4D6D]/10 to-transparent",
    glowTone: "pink",
    featured: false,
    href: motronikLinks.website,
  },
  {
    title: "Agenda reunión",
    description: "Habla directo con el equipo",
    accent: "from-[#FF7A6B]/20 via-[#FF3B5C]/12 to-transparent",
    glowTone: "pink",
    featured: false,
    href: motronikLinks.whatsapp,
  },
] as const;

const supportCards = {
  first: {
    title: "Cómo llegar",
    description:
      "Ubicación base para que la gente encuentre el punto Motronik rápido.",
  },
  second: {
    title: "Solución especial",
    description:
      "Bloque reservado para una propuesta o vertical importante de la marca.",
    logo: motronikLogo,
    primaryAction: "Conocer más",
    secondaryAction: "Ver ficha",
  },
  third: {
    title: "Hablemos de tu necesidad",
    description:
      "CTA temporal para llevar la conversación a WhatsApp mientras definimos recursos o documentos.",
  },
} as const;

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

function PrimaryLink({
  title,
  description,
  accent,
  glowTone,
  featured,
  href,
}: (typeof primaryLinks)[number]) {
  const cardClassName = cn(
    "group relative overflow-hidden rounded-[24px] px-5 py-5 text-center transition-[border-color,transform,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] hover:bg-[#171B2A] hover:shadow-[0_18px_36px_rgba(0,0,0,0.22)]",
    featured
      ? "border-[#FF3B5C]/40 bg-[linear-gradient(180deg,rgba(40,20,28,0.96),rgba(26,16,20,0.98))] shadow-[0_0_0_1px_rgba(255,59,92,0.12),0_0_26px_rgba(255,59,92,0.18)] hover:border-[#ff8c98]/52 hover:shadow-[0_0_0_1px_rgba(255,59,92,0.18),0_0_32px_rgba(255,59,92,0.24)]"
      : "border-white/10 bg-[#141724] hover:border-white/18",
  );

  return (
    <a href={href} className="block w-full" {...externalProps(href)}>
      <Card glowTone={glowTone} className={cardClassName}>
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            accent,
          )}
        />
        <div className="relative flex min-h-[58px] items-center justify-center text-center">
          <div className="relative z-10 min-w-0">
            <p className="text-base font-semibold text-[#F5F7FA]">{title}</p>
            <p className="mt-1 text-sm text-[#98A0B3]">{description}</p>
          </div>
        </div>
      </Card>
    </a>
  );
}

export default function MotronikPage() {
  return (
    <section className="relative cv-auto -mt-[76px] min-h-screen">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,59,92,0.16),transparent_34%),linear-gradient(180deg,#0b0b10,#12131c_46%,#0b0b10)]" />
        <StartcoGalaxy className="opacity-90" />
      </div>

      <Container className="relative z-10 flex min-h-screen max-w-3xl flex-col items-center justify-center py-24 sm:py-32">
        <div className="relative w-full overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,22,34,0.72),rgba(11,11,16,0.64))] px-5 py-7 shadow-[0_24px_64px_rgba(0,0,0,0.34)] backdrop-blur-[12px] sm:rounded-[36px] sm:px-10 sm:py-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,59,92,0.4),transparent)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,59,92,0.1),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(255,124,77,0.08),transparent_26%)]" />

          <div className="relative flex flex-col items-center text-center">
            <div className="flex h-32 w-32 items-center justify-center rounded-full border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_16px_32px_rgba(0,0,0,0.22)] sm:h-36 sm:w-36">
              <Image
                src={motronikLogo}
                alt="Logo Motronik"
                width={112}
                height={112}
                className="h-24 w-24 object-contain sm:h-28 sm:w-28"
                priority
              />
            </div>

            <h1 className="mt-6 text-4xl font-normal tracking-tight text-[#F5F7FA] sm:text-5xl [font-family:var(--font-zen-dots)]">
              Motronik
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#C7CBD6] sm:text-base">
              Base inicial de la landing Motronik. Conserva el orden y la
              estructura de Startco para luego ajustar identidad, textos,
              accesos y visuales propios.
            </p>

            <div className="mt-5 flex items-center justify-center gap-3">
              <a
                href={motronikLinks.instagram}
                aria-label="Instagram Motronik"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white transition duration-300 hover:-translate-y-[1px] hover:border-[#ff8c98]/45 hover:bg-[#FF3B5C]/10"
                {...externalProps(motronikLinks.instagram)}
              >
                <SocialIcon name="instagram" />
              </a>
              <a
                href={motronikLinks.whatsapp}
                aria-label="WhatsApp Motronik"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white transition duration-300 hover:-translate-y-[1px] hover:border-[#ff8c98]/45 hover:bg-[#FF3B5C]/10"
                {...externalProps(motronikLinks.whatsapp)}
              >
                <SocialIcon name="whatsapp" />
              </a>
              <a
                href={motronikLinks.facebook}
                aria-label="Facebook Motronik"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white transition duration-300 hover:-translate-y-[1px] hover:border-[#ff8c98]/45 hover:bg-[#FF3B5C]/10"
                {...externalProps(motronikLinks.facebook)}
              >
                <SocialIcon name="facebook" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto mt-10 grid max-w-xl gap-4">
            {primaryLinks.map((link) => (
              <PrimaryLink key={link.title} {...link} />
            ))}
          </div>

          <div className="relative mx-auto mt-8 grid max-w-xl gap-4 md:grid-cols-2">
            <Card
              glowTone="pink"
              className="group relative h-full min-h-[280px] overflow-hidden rounded-[28px] border-[#FF3B5C]/20 bg-[linear-gradient(180deg,rgba(18,21,32,0.98),rgba(14,16,24,0.98))] px-5 py-6 text-center sm:px-6"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.04),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(255,59,92,0.08),transparent_34%)]" />
              <div className="relative z-10 mx-auto max-w-[78%]">
                <p className="text-xl font-semibold tracking-tight text-[#F5F7FA]">
                  {supportCards.first.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                  {supportCards.first.description}
                </p>
              </div>

              <div className="relative z-10 mt-5 overflow-hidden rounded-[20px] border border-white/10 bg-black/20 shadow-[0_18px_34px_rgba(0,0,0,0.18)]">
                <iframe
                  title="Mapa Motronik"
                  src="https://www.google.com/maps?q=motronik%20medellin&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[190px] w-full border-0"
                />
                <a
                  href={motronikLinks.maps}
                  className="absolute bottom-3 right-3 rounded-full border border-white/18 bg-[rgba(16,19,28,0.72)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md transition duration-300 hover:border-[#ff8c98]/45 hover:bg-[rgba(255,59,92,0.18)]"
                  {...externalProps(motronikLinks.maps)}
                >
                  Abrir mapa
                </a>
              </div>
            </Card>

            <Card
              glowTone="pink"
              className="group relative flex h-full min-h-[280px] flex-col rounded-[28px] border-[#FF6A45]/18 bg-[linear-gradient(180deg,rgba(17,23,34,0.96),rgba(11,16,24,0.96))] px-6 py-6 text-center"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,106,69,0.12),transparent_26%)]" />
              <div className="relative flex flex-1 flex-col items-center justify-between gap-6">
                <div>
                  <p className="text-xl font-semibold tracking-tight text-[#F5F7FA]">
                    {supportCards.second.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                    {supportCards.second.description}
                  </p>
                </div>

                <div className="flex flex-col items-center gap-5">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-[#FF5A45]/20 blur-xl" />
                    <Image
                      src={supportCards.second.logo}
                      alt="Marca base Motronik"
                      width={100}
                      height={100}
                      className="relative h-20 w-20 object-contain drop-shadow-[0_0_18px_rgba(255,90,69,0.16)] sm:h-24 sm:w-24"
                    />
                  </div>

                  <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
                    <button
                      type="button"
                      disabled
                      aria-disabled="true"
                      className="cursor-default rounded-full border border-[#FF6A45]/22 bg-[#FF6A45]/8 px-4 py-2 text-[12px] font-semibold text-[#FFB09E]"
                    >
                      {supportCards.second.primaryAction}
                    </button>
                    <button
                      type="button"
                      disabled
                      aria-disabled="true"
                      className="cursor-default rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] font-semibold text-white"
                    >
                      {supportCards.second.secondaryAction}
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="relative mx-auto mt-4 block max-w-xl">
            <Card
              glowTone="pink"
              className="rounded-[26px] border-dashed border-white/10 bg-[#10131C]/72 px-6 py-6 text-center md:min-h-[132px]"
            >
              <div className="flex flex-col items-center justify-center gap-3">
                <p className="text-base font-semibold text-[#F5F7FA]">
                  {supportCards.third.title}
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#98A0B3]">
                {supportCards.third.description}
              </p>
              <a
                href={motronikLinks.whatsapp}
                className="mt-4 inline-flex rounded-full border border-[#FF3B5C]/32 bg-[#FF3B5C]/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#FFB0BD] transition duration-300 hover:-translate-y-[1px] hover:border-[#ff8c98]/48 hover:bg-[#FF3B5C]/18"
                {...externalProps(motronikLinks.whatsapp)}
              >
                Escríbenos por WhatsApp
              </a>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
