import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { HeroGalaxy } from "@/components/ui/hero-galaxy";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

type LandingPreview = {
  title: string;
  status: string;
  href?: string;
  kind: "startco" | "offer" | "event" | "portfolio";
};

export const metadata = createPageMetadata({
  title: "Landings",
  description:
    "Acceso privado a landings RiBuzz para explorar ideas de p\u00e1ginas, biolinks y experiencias digitales a la medida.",
  path: "/landings",
});

const landingPreviews: LandingPreview[] = [
  {
    title: "Startco",
    status: "Ejemplo activo",
    href: "/startco",
    kind: "startco",
  },
  {
    title: "Oferta premium",
    status: "Pr\u00f3ximamente",
    kind: "offer",
  },
  {
    title: "Evento o lanzamiento",
    status: "Pr\u00f3ximamente",
    kind: "event",
  },
  {
    title: "Portafolio personal",
    status: "Pr\u00f3ximamente",
    kind: "portfolio",
  },
];

function KeyIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-7 w-7 text-[#ffb3f7] drop-shadow-[0_0_20px_rgba(230,37,255,0.5)]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="7.5" cy="14.5" r="3.5" />
      <path d="M10.2 12 20 2.2" />
      <path d="m15.4 6.8 1.8 1.8" />
      <path d="m13.2 9 1.8 1.8" />
    </svg>
  );
}

function StartcoPreview() {
  return (
    <div className="landing-preview landing-preview--startco">
      <div className="landing-preview__phone">
        <div className="landing-preview__avatar">
          <Image src={SITE_CONFIG.logoMark} alt="" width={76} height={76} className="h-full w-full object-contain" />
        </div>
        <p className="landing-preview__brand">RiBuzz</p>
        <p className="landing-preview__tagline">Conecta, explora y crece con claridad.</p>
        <div className="landing-preview__links">
          <span>Instagram</span>
          <span>WhatsApp</span>
          <span>Diagn&oacute;stico</span>
          <span>Sitio web</span>
        </div>
        <Image
          src="/startco-cards2.png"
          alt=""
          width={220}
          height={220}
          className="landing-preview__cards"
        />
      </div>
    </div>
  );
}

function PlaceholderPreview({ kind }: { kind: LandingPreview["kind"] }) {
  const isOffer = kind === "offer";
  const isEvent = kind === "event";

  return (
    <div className={`landing-preview landing-preview--${kind}`}>
      <div className="landing-preview__mock">
        <div className="landing-preview__orb" />
        <div className="landing-preview__bar landing-preview__bar--wide" />
        <div className="landing-preview__bar" />
        <div className="landing-preview__grid">
          <span />
          <span />
          <span />
        </div>
        <div className="landing-preview__cta">
          {isOffer ? "Oferta" : isEvent ? "Evento" : "Perfil"}
        </div>
      </div>
    </div>
  );
}

function PreviewContent({ item }: { item: LandingPreview }) {
  return (
    <>
      <div className="landing-carousel__shine" />
      {item.kind === "startco" ? <StartcoPreview /> : <PlaceholderPreview kind={item.kind} />}
      <div className="landing-carousel__label">
        <p>{item.title}</p>
        <span>{item.status}</span>
      </div>
    </>
  );
}

export default function LandingsPage() {
  return (
    <section className="relative -mt-[76px] min-h-[100dvh] overflow-hidden py-28 sm:py-32">
      <HeroGalaxy />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_18%,rgba(230,37,255,0.18),transparent_30%),radial-gradient(circle_at_72%_54%,rgba(255,77,109,0.14),transparent_32%),linear-gradient(180deg,rgba(11,11,16,0.12),rgba(11,11,16,0.88)_70%,#0B0B10_100%)]" />

      <Container className="relative z-10">
        <Card className="mx-auto max-w-6xl overflow-hidden rounded-[34px] border-[#E625FF]/24 bg-[linear-gradient(180deg,rgba(22,16,30,0.92),rgba(11,11,16,0.98))] p-7 text-center shadow-[0_0_0_1px_rgba(230,37,255,0.1),0_0_48px_rgba(230,37,255,0.16),0_28px_70px_rgba(0,0,0,0.34)] sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(230,37,255,0.14),transparent_26%),radial-gradient(circle_at_86%_20%,rgba(15,239,253,0.08),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(255,77,109,0.14),transparent_36%)]" />

          <div className="relative z-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#E625FF]/32 bg-[#E625FF]/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_30px_rgba(230,37,255,0.22)]">
              <KeyIcon />
            </div>

            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF9EF2]">
              Acceso reservado
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#F5F7FA] sm:text-5xl">
              Landings RiBuzz
            </h1>

            <div className="mx-auto mt-7 grid max-w-4xl gap-3 text-left md:grid-cols-3">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5">
                <p className="text-sm font-semibold text-[#F5F7FA]">Biolinks con intenci&oacute;n</p>
                <p className="mt-2 text-sm leading-relaxed text-[#98A0B3]">
                  No son solo botones: son una primera experiencia de marca para quien llega desde redes, eventos o contactos.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5">
                <p className="text-sm font-semibold text-[#F5F7FA]">A tu medida</p>
                <p className="mt-2 text-sm leading-relaxed text-[#98A0B3]">
                  Dise&ntilde;amos una p&aacute;gina de todo tu gusto, personalizada, clara y alineada a lo que quieres proyectar.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5">
                <p className="text-sm font-semibold text-[#F5F7FA]">Cool y funcional</p>
                <p className="mt-2 text-sm leading-relaxed text-[#98A0B3]">
                  Una experiencia visual con orden, presencia y rutas directas para contacto, contenido o venta.
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Button href={SITE_CONFIG.whatsappUrl} size="lg">
                Pide la tuya por WhatsApp
              </Button>
            </div>

            <div className="landing-carousel mt-14" aria-label="Ejemplos de landings">
              <div className="landing-carousel__floor" />
              {landingPreviews.map((item) => {
                const cardClassName = `landing-carousel__card landing-carousel__card--${item.kind}`;

                if (item.href) {
                  return (
                    <a key={item.title} href={item.href} className={cardClassName}>
                      <PreviewContent item={item} />
                    </a>
                  );
                }

                return (
                  <article key={item.title} className={cardClassName}>
                    <PreviewContent item={item} />
                  </article>
                );
              })}
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-[#7f8798]">
              Ejemplos previos
            </p>
          </div>
        </Card>
      </Container>
    </section>
  );
}
