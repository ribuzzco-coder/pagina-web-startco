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
  differentiators,
  fitChecklist,
  homePainPoints,
  methodologySteps,
  nonFitChecklist,
} from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Inicio",
  description:
    "Sistema de crecimiento para hacer crecer tu empresa.",
  path: "/",
});

const homeQuickFaqs = contactFaqs.slice(0, 4);

export default function HomePage() {
  return (
    <>
      <section
        id="home-hero"
        className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden -mt-[76px]"
      >
        <HeroGalaxy />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.02),transparent_16%),radial-gradient(circle_at_18%_28%,rgba(15,239,253,0.06),transparent_24%),radial-gradient(circle_at_80%_52%,rgba(230,37,255,0.09),transparent_30%),radial-gradient(circle_at_62%_78%,rgba(63,18,92,0.14),transparent_34%),linear-gradient(180deg,rgba(11,11,16,0.04)_0%,rgba(11,11,16,0.02)_36%,rgba(11,11,16,0.08)_72%,rgba(11,11,16,0.18)_100%)]" />

        <div className="absolute inset-0 z-10 flex items-center justify-center">
            <Container className="hero-no-select text-center">
            <div className="mx-auto max-w-[58rem]">
              <div className="mt-1 inline-flex rounded-full border border-white/10 bg-[#0B0B10]/36 px-4 py-2 backdrop-blur-sm sm:mt-3">
                <PillBadge>Te damos la bienvenida</PillBadge>
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
                Sistema de crecimiento para hacer crecer tu empresa.
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

      <section className="section-soft cv-auto py-16 sm:py-20" id="problemas">
        <Container>
          <SectionTitle
            eyebrow="¿Por qué se estancan las empresas?"
            title="El problema no siempre es vender más. Es vender con un sistema débil."
            description="Estos son los síntomas más comunes cuando no hay estructura comercial clara."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {homePainPoints.map((pain) => (
              <Card key={pain.title} className="rounded-[24px] p-6 lg:p-8">
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

      <section className="cv-auto py-16 sm:py-20">
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

      <SectionDivider />

      <section className="section-soft cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Diferencial"
            title="Lo que RiBuzz hace distinto frente a agencias, consultores o ejecución aislada"
            description="La diferencia no es solo técnica. Es la postura de intervenir el sistema comercial con criterio y no una parte desconectada."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {differentiators.map((item) => (
              <Card key={item} className="rounded-[24px] p-6 lg:p-8">
                <p className="text-sm leading-relaxed text-[#98A0B3] sm:text-base">{item}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <SectionDivider />

      <section className="cv-auto py-16 sm:py-20" id="para-quien">
        <Container>
          <Card className="flex flex-col overflow-hidden rounded-[28px] lg:flex-row">
            <div className="flex-1 border-b border-white/8 p-7 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
                Para quien sí es
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#F5F7FA] lg:text-3xl">
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
            </div>

            <div className="flex-1 p-7 sm:p-8 lg:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
                Para quien no es
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#F5F7FA] lg:text-3xl">
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
            </div>
          </Card>
        </Container>
      </section>

      <CTASection
        eyebrow="El siguiente paso"
        className="!pt-6 !pb-16 sm:!pt-8 sm:!pb-20"
        title="Descubre dónde se está rompiendo tu crecimiento."
        description="Te toma menos de 10 minutos. Recibes una lectura inicial y primero revisamos si hay una verdadera oportunidad de mejora."
        primaryLabel="Solicitar diagnóstico gratuito"
        primaryHref={SITE_CONFIG.diagnosisPath}
      />

      <TestimonialShuffle />

      <section className="cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow="FAQ rápido"
            title="Preguntas frecuentes antes de avanzar"
            description="Respuestas breves antes de tomar decisiones sobre tu sistema."
          />

          <div className="mt-8 w-full">
            <FAQAccordion items={homeQuickFaqs} />
          </div>

          <div className="mt-7 flex">
            <Button href="/contact" variant="secondary">
              Ver contacto y FAQ completa
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="cv-auto relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(21,24,36,0.96),rgba(14,16,24,0.92))] p-8 text-center shadow-[0_16px_48px_rgba(0,0,0,0.24)] sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(15,239,253,0.4),transparent)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(15,239,253,0.06),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(230,37,255,0.04),transparent_40%)]" />

            <div className="relative mx-auto max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0FEFFD]">
                Información de Valor
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F5F7FA] sm:text-4xl">
                ¿Aún no estás listo para ejecutar? Recibe nuestra lectura del mercado.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                Únete a la lista para recibir análisis esporádico (sin spam) sobre diseño de sistemas comerciales, conversión, estructuración y casos de crecimiento real.
              </p>

              <form className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Tu correo de trabajo"
                  required
                  className="flex h-12 w-full rounded-full border border-white/12 bg-white/5 px-5 py-2 text-sm text-[#F5F7FA] placeholder:text-[#98A0B3]/60 focus:border-[#E625FF]/40 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#E625FF]/20 transition-colors"
                />
                <Button type="submit" size="lg" className="h-12 w-full shrink-0 sm:w-auto">
                  Suscribirme
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}


