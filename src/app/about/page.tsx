import { NetworkFeatureSection } from "@/components/sections/network-feature-section";
import { BrandShaderBackground } from "@/components/ui/brand-shader-background";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { InfoGrid } from "@/components/ui/info-grid";
import { NumberedCard } from "@/components/ui/numbered-card";
import { PillBadge } from "@/components/ui/pill-badge";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionTitle } from "@/components/ui/section-title";
import {
  aboutMissionVision,
  aboutOrigin,
  aboutTraits,
} from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Sobre RiBuzz",
  description:
    "RiBuzz nace para ayudar a que menos empresas fracasen por falta de clientes, estructura comercial y flujo de caja.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* Atención */}
      <section
        id="about-hero"
        className="relative -mt-[76px] flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[#05050A]"
      >
        <BrandShaderBackground className="z-0 opacity-75" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.035),transparent_16%),radial-gradient(circle_at_18%_28%,rgba(120,95,221,0.08),transparent_24%),radial-gradient(circle_at_80%_52%,rgba(105,57,226,0.1),transparent_30%),linear-gradient(180deg,rgba(5,5,10,0.18)_0%,rgba(5,5,10,0.04)_34%,rgba(5,5,10,0.16)_72%,rgba(5,5,10,0.56)_100%)]" />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <Container className="hero-no-select text-center">
            <div className="mx-auto max-w-[58rem]">
              <div className="mt-6 flex justify-center">
                <PillBadge>Sobre RiBuzz</PillBadge>
              </div>
              <h1 className="mx-auto mt-4 max-w-3xl font-heading text-[1.9rem] font-bold leading-[1.08] text-[#E4DFF7] sm:text-[2.45rem] xl:text-[3rem]">
                Somos el <span className="text-[#8b6ff0]">cómo</span> detrás del crecimiento de tu empresa
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-[0.92rem] leading-[1.5] text-[#D9DDE7] sm:text-[1rem]">
                RiBuzz conecta estrategia, ejecución comercial y tecnología en un solo sistema, para que tu negocio crezca con consistencia — no a punta de intuición ni de suerte.
              </p>

              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href={SITE_CONFIG.diagnosisPath} size="lg" variant="shimmer">
                  Agenda tu llamada de introducción
                </Button>
                <Button href="/services" variant="secondary" size="lg">
                  Ver cómo trabajamos
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section className="cv-auto pb-16 sm:pb-20">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Origen"
            title="RiBuzz no nació para vender servicios. Nació porque demasiadas empresas no logran sostenerse."
            description="En Colombia, 66,5 % de las empresas no sobrevive más de cinco años. Y aunque el cierre no tiene una sola causa, sí hay una señal clara que se repite."
          />

          <InfoGrid className="mt-8 md:grid-cols-3">
            {aboutOrigin.map((item, index) => (
              <NumberedCard
                key={item.title}
                index={index + 1}
                title={item.title}
                description={item.description}
              />
            ))}
          </InfoGrid>
        </Container>
      </section>

      <SectionDivider />

      <section className="cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Misión y visión"
            title="Por qué existimos y hacia dónde vamos"
            description="Dos preguntas que guían cada decisión: qué resolvemos hoy, y qué buscamos construir en el camino."
          />

          <div className="mx-auto mt-10 grid max-w-4xl gap-10 border-t border-white/8 pt-10 text-center sm:grid-cols-2 sm:divide-x sm:divide-white/8">
            {aboutMissionVision.map((item) => (
              <div key={item.title} className="sm:px-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8b6ff0]">
                  {item.title}
                </p>
                <p className="mt-3 text-lg leading-relaxed text-[#E4DFF7] sm:text-xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-soft cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Así somos"
            title="Una marca directa, transparente y orientada a resultados"
            description="RiBuzz no busca agradar con frases vacías. Así es como trabajamos contigo, todos los días."
          />

          <div className="mx-auto mt-10 max-w-2xl divide-y divide-white/8 border-y border-white/8 text-center">
            {aboutTraits.map((item, index) => (
              <div key={item.title} className="py-6">
                <span className="text-sm font-semibold tabular-nums text-[#8b6ff0]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-base font-semibold text-[#E4DFF7] sm:text-lg">
                  {item.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <NetworkFeatureSection
        title="Si tu empresa no crece como te gustaría"
        description="Agenda tu llamada de introducción. Es gratuita, dura poco y nos permite identificar si hay una oportunidad real para que tu empresa crezca."
        primaryButtonLabel="Agenda tu llamada de introducción"
      />
    </>
  );
}
