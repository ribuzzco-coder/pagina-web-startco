import Image from "next/image";

import { CTASection } from "@/components/sections/cta-section";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { StepCard } from "@/components/sections/step-card";
import { TestimonialShuffle } from "@/components/sections/testimonial-shuffle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { HeroGalaxy } from "@/components/ui/hero-galaxy";
import { HeroMarkButton } from "@/components/ui/hero-mark-button";
import { PillBadge } from "@/components/ui/pill-badge";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionTitle } from "@/components/ui/section-title";
import {
  contactFaqs,
  fitChecklist,
  homePainPoints,
  methodologySteps,
  nonFitChecklist,
  servicePreview,
  solutionSequence,
  trustSignals,
} from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Inicio",
  description:
    "RiBuzz diseña e implementa sistemas comerciales para empresas que ya venden, pero todavía no crecen con estructura, seguimiento y consistencia.",
  path: "/",
});

const homeQuickFaqs = contactFaqs.slice(0, 4);

export default function HomePage() {
  return (
    <>
      <section
        id="home-hero"
        className="relative -mt-[76px] min-h-screen overflow-hidden"
      >
        <HeroGalaxy />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.02),transparent_16%),radial-gradient(circle_at_18%_28%,rgba(15,239,253,0.06),transparent_24%),radial-gradient(circle_at_80%_52%,rgba(230,37,255,0.09),transparent_30%),radial-gradient(circle_at_62%_78%,rgba(63,18,92,0.14),transparent_34%),linear-gradient(180deg,rgba(11,11,16,0.04)_0%,rgba(11,11,16,0.02)_36%,rgba(11,11,16,0.08)_72%,rgba(11,11,16,0.18)_100%)]" />

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <Container className="hero-no-select pt-[76px] text-center">
            <div className="mx-auto max-w-[58rem]">
            <div className="mt-3 inline-flex rounded-full border border-white/10 bg-[#0B0B10]/36 px-4 py-2 backdrop-blur-sm sm:mt-5">
              <PillBadge>Te damos la bienvenida.</PillBadge>
            </div>

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

            <h1 className="mx-auto mt-6 max-w-3xl font-sans text-[1.9rem] font-bold leading-[1.08] text-[#F5F7FA] sm:text-[2.45rem] xl:text-[3rem]">
              El sistema de crecimiento para tu empresa.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-[0.92rem] leading-[1.5] text-[#D9DDE7] sm:text-[1rem]">
              Diseñamos la estructura comercial que te ayuda a captar mejor, vender con
              más orden y sostener el crecimiento con seguimiento real.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={SITE_CONFIG.diagnosisPath} size="lg">
                Realiza tu diagnóstico gratuito
              </Button>
              <Button
                href="/services"
                variant="secondary"
                size="lg"
                className="shadow-[0_0_0_1px_rgba(230,37,255,0.1),0_0_18px_rgba(230,37,255,0.16)]"
              >
                Ver servicios
              </Button>
            </div>
            </div>
          </Container>
        </div>
      </section>

      <section className="section-soft cv-auto py-18 sm:py-22" id="problemas">
        <Container>
          <SectionTitle
            eyebrow="¿Por qué se estancan las empresas?"
            title="El problema no siempre es vender más. Es vender con un sistema débil."
            description="Estos son los síntomas más comunes cuando no hay estructura comercial clara."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {homePainPoints.map((pain) => (
              <Card key={pain.title} className="rounded-[24px] p-5">
                <h3 className="text-lg font-semibold tracking-tight text-[#F5F7FA]">
                  {pain.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#98A0B3]">
                  {pain.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <SectionDivider />

      <section className="cv-auto py-18 sm:py-22" id="solución">
        <Container>
          <SectionTitle
            eyebrow="La solución RiBuzz"
            title="No entramos a ejecutar piezas sueltas. Intervenimos el sistema comercial."
            description="Entender, diagnosticar, estructurar, implementar y acompañar."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {solutionSequence.slice(1).map((item) => (
              <Card key={item.title} className="rounded-[24px] p-5">
                <h3 className="text-lg font-semibold tracking-tight text-[#F5F7FA]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#98A0B3]">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="cv-auto py-18 sm:py-22">
        <Container className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-[28px] p-7 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
              Para quien sí es
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F5F7FA]">
              Empresas que ya venden y necesitan ordenar cómo crecen.
            </h2>
            <ul className="mt-6 space-y-3 border-t border-white/8 pt-6 text-sm text-[#98A0B3] sm:text-base">
              {fitChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0FEFFD]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="rounded-[28px] p-7 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
              Para quien no es
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F5F7FA]">
              No es para negocios que solo quieren más marketing sin revisar el fondo.
            </h2>
            <ul className="mt-6 space-y-3 border-t border-white/8 pt-6 text-sm text-[#98A0B3] sm:text-base">
              {nonFitChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E625FF]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Container>
      </section>

      <CTASection
        title="Descubre dónde se está rompiendo tu crecimiento comercial."
        description="Te toma menos de 10 minutos. Recibes una lectura inicial y primero revisamos si hay fit."
        primaryLabel="Solicita tu diagnóstico gratuito"
        primaryHref={SITE_CONFIG.diagnosisPath}
        secondaryLabel="Escribir por WhatsApp"
        secondaryHref={SITE_CONFIG.whatsappUrl}
        secondaryExternal
      />

      <SectionDivider />

      <section className="cv-auto py-18 sm:py-22" id="services">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Capas de intervención"
            title="Tres formas de intervenir un mismo sistema comercial"
            description="Tres capas para pasar de claridad a ejecución."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {servicePreview.map((service, index) => (
              <Card key={service.title} className="rounded-[26px] p-6 sm:p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
                  Capa 0{index + 1}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#F5F7FA]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#C7CBD6] sm:text-base">
                  {service.description}
                </p>
                <p className="mt-5 border-t border-white/8 pt-5 text-sm text-[#98A0B3] sm:text-base">
                  <span className="text-[#F5F7FA]">Para quien es:</span> {service.idealClient}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                  <span className="text-[#F5F7FA]">Resultado:</span> {service.expectedResult}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-9 flex justify-center">
            <Button href="/services" variant="secondary" size="lg">
              Ver servicios y capas completas
            </Button>
          </div>
        </Container>
      </section>

      <section className="section-soft cv-auto py-18 sm:py-22">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Respaldo"
            title="Confianza honesta, sin inflar cifras ni inventar credenciales"
            description="Experiencia aplicada y trabajo real en marcha."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {trustSignals.map((signal) => (
              <Card key={signal.title} className="rounded-[24px] p-6">
                <h3 className="text-lg font-semibold tracking-tight text-[#F5F7FA]">
                  {signal.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                  {signal.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="cv-auto py-18 sm:py-22">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Cómo trabajamos"
            title="Diagnóstico primero. Implementación después."
            description="Primero claridad. Luego ejecución."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {methodologySteps.map((step, index) => (
              <StepCard
                key={step.title}
                index={index + 1}
                title={step.title}
                description={step.description}
                points={step.points}
                outcome={step.outcome}
              />
            ))}
          </div>

          <div className="mt-9 flex justify-center">
            <Button href="/methodology" variant="secondary" size="lg">
              Ver metodología completa
            </Button>
          </div>
        </Container>
      </section>

      <section className="cv-auto py-18 sm:py-22">
        <Container>
          <SectionTitle
            eyebrow="FAQ rápido"
            title="Preguntas frecuentes antes de solicitar diagnóstico"
            description="Respuestas breves antes de aplicar."
          />

          <div className="mt-8 max-w-4xl">
            <FAQAccordion items={homeQuickFaqs} />
          </div>

          <div className="mt-7 flex">
            <Button href="/contact" variant="secondary">
              Ver contacto y FAQ completa
            </Button>
          </div>
          <div className="mt-3 flex">
            <Button href={SITE_CONFIG.diagnosisPath} size="lg">
              Solicita tu diagnóstico gratuito
            </Button>
          </div>
        </Container>
      </section>

      <CTASection
        title="Antes de ejecutar más, conviene entender dónde se está rompiendo tu sistema comercial."
        description="Completa el diagnóstico en menos de 10 minutos y revisamos si hay una oportunidad real de intervención."
        primaryLabel="Solicita tu diagnóstico gratuito"
        primaryHref={SITE_CONFIG.diagnosisPath}
        secondaryLabel="Escribir por WhatsApp"
        secondaryHref={SITE_CONFIG.whatsappUrl}
        secondaryExternal
      />

      <TestimonialShuffle />
    </>
  );
}


