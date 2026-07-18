import Image from "next/image";

import { DifferentiatorSystem } from "@/components/sections/differentiator-system";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { FitChecklist } from "@/components/sections/fit-checklist";
import { PhaseStepper } from "@/components/sections/phase-stepper";
import { TestimonialShuffle } from "@/components/sections/testimonial-shuffle";
import { BrandShaderBackground } from "@/components/ui/brand-shader-background";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { HeroMarkButton } from "@/components/ui/hero-mark-button";
import { PillBadge } from "@/components/ui/pill-badge";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionTitle } from "@/components/ui/section-title";
import {
  differentiatorPillars,
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
              <h1 className="mx-auto mt-4 max-w-3xl font-heading text-[1.9rem] font-bold leading-[1.08] text-[#E4DFF7] [text-wrap:balance] sm:text-[2.45rem] xl:text-[3rem]">
                ¿Ya pagaste para vender más y <span className="text-[#8b6ff0]">nada cambió?</span>
                <br />
                No eres el único.
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-[0.92rem] leading-[1.5] text-[#D9DDE7] [text-wrap:pretty] sm:text-[1rem]">
                Revisamos oferta, mensaje, canales, seguimiento y tecnología para encontrar dónde
                se rompe tu crecimiento y construir el flujo que lo sostiene.
              </p>

              <div className="mt-7 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
                <Button
                  href={SITE_CONFIG.diagnosisPath}
                  size="md"
                  variant="primary"
                  className="shadow-[0_0_14px_rgba(105,57,226,0.22)]"
                >
                  Completa la aplicación
                </Button>
                <Button
                  href="#sistema-comercial"
                  variant="secondary"
                  size="md"
                  className="bg-white/[0.025] shadow-none"
                >
                  Ver cómo funciona
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
            title={
              <>
                El problema:
                <br />
                no tienes un sistema, tienes piezas sueltas
              </>
            }
            description="Cuando estrategia, comunicación, tecnología y operación funcionan por separado, crecer se vuelve una suma de intentos. El negocio se mueve, pero no siempre avanza con claridad."
          />

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {homeProblemKeywords.map((keyword) => (
              <span
                key={keyword.title}
                className="inline-flex items-center whitespace-nowrap rounded-full border border-[#6939E2]/24 bg-[#6939E2]/8 px-4 py-2 text-sm font-medium text-[#CEC6E0] sm:text-base"
              >
                {keyword.title}
              </span>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed text-[#98A0B3] [text-wrap:pretty] sm:text-base">
            {homeProblemSynthesis}
          </p>
        </Container>
      </section>

      <SectionDivider />

      <section className="cv-auto py-16 sm:py-20" id="sistema-comercial">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Qué entendemos por sistema"
            title="Integramos estrategia, comunicación y tecnología en una sola operación"
            description="Conectamos lo que vendes, cómo lo comunicas y cómo lo operas para que el crecimiento no dependa de improvisación."
          />

          <div className="mt-10">
            <DifferentiatorSystem pillars={differentiatorPillars} />
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

          <div className="mt-10">
            <PhaseStepper steps={methodologySteps} />
          </div>

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
            description="RiBuzz trabaja mejor cuando ya existe una oferta, una operación o una intención real de crecer. Este filtro aclara si necesitas sistema, no solo otra pieza suelta."
          />

          <div className="mt-10">
            <FitChecklist fitItems={fitChecklist} nonFitItems={nonFitChecklist} />
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* Modelo de oferta: teaser corto, el detalle vive en /services */}
      <section className="section-soft cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Modelo de oferta"
            title="Cada empresa necesita una propuesta ajustada a su momento"
            description="La oferta se define según contexto, objetivos y tareas reales. El sistema puede combinar estrategia, activos, tecnología, adquisición y seguimiento, con una forma de pago alineada al alcance."
          />

          <div className="mt-8 flex justify-center">
            <Button href="/services" variant="secondary" size="lg">
              Ver cómo se estructura
            </Button>
          </div>
        </Container>
      </section>

      <SectionDivider />

      <TestimonialShuffle />

      <SectionDivider />

      <section className="cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="FAQ rápido"
            title="Preguntas frecuentes antes de avanzar"
            description="Respuestas directas sobre oferta, alcance, riesgo, tiempos y forma de trabajo antes de tomar una decisión."
          />

          <div className="mt-8 w-full">
            <FAQAccordion items={homeFaqs} />
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
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#E4DFF7] [text-wrap:balance] sm:text-4xl">
                ¿Listo para avanzar? Completa la aplicación.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#98A0B3] [text-wrap:pretty] sm:text-lg">
                Son 5-7 minutos. La aplicación clasifica tu ruta y abre el siguiente paso correcto:
                llamada, preparación con recursos o seguimiento por contenido.
              </p>

              <div className="mx-auto mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  href={SITE_CONFIG.diagnosisPath}
                  size="lg"
                  variant="shimmer"
                  className="shadow-[0_0_24px_rgba(105,57,226,0.2)]"
                >
                  Completa la aplicación
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
