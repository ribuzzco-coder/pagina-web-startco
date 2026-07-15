import Image from "next/image";

import { NetworkFeatureSection } from "@/components/sections/network-feature-section";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { FitChecklist } from "@/components/sections/fit-checklist";
import { TestimonialShuffle } from "@/components/sections/testimonial-shuffle";
import { BrandShaderBackground } from "@/components/ui/brand-shader-background";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { HeroMarkButton } from "@/components/ui/hero-mark-button";
import { PillBadge } from "@/components/ui/pill-badge";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionTitle } from "@/components/ui/section-title";
import {
  fitChecklist,
  homeFaqs,
  homeProblemKeywords,
  homeProblemSynthesis,
  methodologySteps,
  nonFitChecklist,
} from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Inicio",
  description: "RiBuzz ayuda a que menos empresas fracasen por falta de clientes, estructura comercial y flujo de caja.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* Atención */}
      <section
        id="home-hero"
        className="relative -mt-[76px] flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[#05050A]"
      >
        <BrandShaderBackground className="z-0 opacity-75" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.035),transparent_16%),radial-gradient(circle_at_18%_28%,rgba(120,95,221,0.08),transparent_24%),radial-gradient(circle_at_80%_52%,rgba(105,57,226,0.1),transparent_30%),linear-gradient(180deg,rgba(5,5,10,0.18)_0%,rgba(5,5,10,0.04)_34%,rgba(5,5,10,0.16)_72%,rgba(5,5,10,0.56)_100%)]" />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <Container className="hero-no-select text-center">
            <div className="mx-auto max-w-[58rem]">
              <div className="mt-7 flex items-center justify-center gap-4 sm:mt-8 sm:gap-5">
                <Image
                  src="/images/branding/ribuzz-texto.png"
                  alt="RiBuzz"
                  width={606}
                  height={128}
                  priority
                  className="hero-wordmark h-12 w-auto sm:h-16 xl:h-24"
                />
                <HeroMarkButton src={SITE_CONFIG.logoMark} alt="Símbolo RiBuzz" />
              </div>

              <div className="mt-6 flex justify-center">
                <PillBadge>Sistema de crecimiento RiBuzz</PillBadge>
              </div>
              <h1 className="mx-auto mt-4 max-w-3xl font-heading text-[1.9rem] font-bold leading-[1.08] text-[#E4DFF7] sm:text-[2.45rem] xl:text-[3rem]">
                Sistema para <span className="text-[#8b6ff0]">hacer crecer</span> tu empresa
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-[0.92rem] leading-[1.5] text-[#D9DDE7] sm:text-[1rem]">
                Capta más clientes, vende con estructura y crece con consistencia. Integramos estrategia, ejecución comercial y tecnología en un solo sistema.
              </p>

              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href={SITE_CONFIG.diagnosisPath} size="lg" variant="shimmer">
                  Agenda tu llamada de introducción
                </Button>
                <Button
                  href="/regalos"
                  variant="secondary"
                  size="lg"
                  className="shadow-[0_0_0_1px_rgba(105,57,226,0.1),0_0_18px_rgba(105,57,226,0.16)]"
                >
                  Reclama tu regalo
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Problema */}
      <section className="section-soft cv-auto py-16 sm:py-20" id="problemas">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Por qué tu empresa se estanca"
            title="El problema: no tienes un sistema, tienes piezas sueltas"
            description="Ventas, marketing, tecnología y seguimiento funcionan cada uno por su lado, sin nada que los conecte. Por eso, aunque ya vendes, el crecimiento no es constante."
          />

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {homeProblemKeywords.map((keyword) => (
              <span
                key={keyword}
                className="inline-flex items-center rounded-full border border-[#6939E2]/24 bg-[#6939E2]/8 px-4 py-2 text-sm font-medium text-[#CEC6E0] sm:text-base"
              >
                {keyword}
              </span>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed text-[#98A0B3] sm:text-base">
            {homeProblemSynthesis}
          </p>
        </Container>
      </section>

      <SectionDivider />

      {/* Filtro: para quién es / no es, antes de pedir el CTA */}
      <section className="cv-auto py-16 sm:py-20" id="para-quien">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Antes de seguir"
            title="Para quién es esto, y para quién no"
            description="Ser directos aquí nos ahorra tiempo a los dos. Si no hay fit, preferimos decirlo antes que después."
          />

          <div className="mt-10">
            <FitChecklist fitItems={fitChecklist} nonFitItems={nonFitChecklist} />
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* Interés: teaser de metodología, enlaza a la página completa */}
      <section className="cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Cómo lo hacemos"
            title="Sin diagnóstico no hay resultado"
            description="Nuestro método de cuatro fases evita decisiones a ciegas: cada paso parte de lo que encontramos en el diagnóstico, no de suposiciones."
          />

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {methodologySteps.map((step, index) => (
              <span
                key={step.title}
                className="inline-flex items-center gap-2 rounded-full border border-[#6939E2]/24 bg-[#6939E2]/8 px-4 py-2 text-sm font-medium text-[#CEC6E0] sm:text-base"
              >
                <span className="text-xs font-semibold tabular-nums text-[#8b6ff0]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {step.title}
              </span>
            ))}
          </div>

          <div className="mt-9 flex justify-center">
            <Button href="/services" variant="secondary" size="lg">
              Ver cómo trabajamos
            </Button>
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* Modelo de inversión: teaser corto, el detalle vive en /services */}
      <section className="section-soft cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Modelo de inversión"
            title="No cobramos por publicar, cobramos por mover el número que te importa"
            description="Cada paquete se cobra con un retainer mensual fijo, que cubre la capacidad instalada. A partir de la etapa de Incubación, se suma un fee por cumplimiento de hitos de negocio — definidos contigo antes de empezar, nunca a mitad de camino."
          />

          <div className="mt-8 flex justify-center">
            <Button href="/services" variant="secondary" size="lg">
              Ver paquetes por etapa
            </Button>
          </div>
        </Container>
      </section>

      <SectionDivider />

      <TestimonialShuffle />

      <SectionDivider />

      <NetworkFeatureSection />

      <section className="cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="FAQ rápido"
            title="Preguntas frecuentes antes de avanzar"
            description="Respuestas breves antes de tomar decisiones sobre tu sistema."
          />

          <div className="mt-8 w-full">
            <FAQAccordion items={homeFaqs} />
          </div>

          <div className="mt-7 flex justify-center">
            <Button href={SITE_CONFIG.diagnosisPath} variant="secondary">
              Agenda tu llamada de introducción
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="cv-auto relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(21,24,36,0.96),rgba(14,16,24,0.92))] p-8 text-center shadow-[0_16px_48px_rgba(0,0,0,0.24)] sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(120,95,221,0.4),transparent)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,95,221,0.06),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(105,57,226,0.04),transparent_40%)]" />

            <div className="relative mx-auto max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#CEC6E0]">
                Antes de irte
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#E4DFF7] sm:text-4xl">
                ¿Listo para avanzar? Agenda tu llamada de introducción.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#98A0B3] sm:text-lg">
                Agenda una llamada de introducción de 20 minutos para revisar si hay fit real, o
                empieza por algo más liviano y reclama tu regalo.
              </p>

              <div className="mx-auto mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  href={SITE_CONFIG.diagnosisPath}
                  size="lg"
                  variant="shimmer"
                  className="shadow-[0_0_24px_rgba(105,57,226,0.2)]"
                >
                  Agenda tu llamada de introducción
                </Button>
                <Button href={SITE_CONFIG.giftsPath} size="lg" variant="secondary">
                  Reclama tu regalo
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
