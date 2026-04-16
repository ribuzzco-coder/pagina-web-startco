import Image from "next/image";

import { NetworkFeatureSection } from "@/components/sections/network-feature-section";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { StepCard } from "@/components/sections/step-card";
import { TestimonialShuffle } from "@/components/sections/testimonial-shuffle";
import { BeforeAfterWipeCard } from "@/components/ui/before-after-wipe-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { HeroGalaxy } from "@/components/ui/hero-galaxy";
import { HeroMarkButton } from "@/components/ui/hero-mark-button";
import { PillBadge } from "@/components/ui/pill-badge";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionTitle } from "@/components/ui/section-title";
import {
  differentiators,
  homeFaqs,
  methodologySteps,
} from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Inicio",
  description: "RiBuzz ayuda a que menos empresas fracasen por falta de clientes, estructura comercial y flujo de caja.",
  path: "/",
});

const homePainTransitions = [
  {
    beforeTitle: "Esfuerzos dispersos",
    beforeDescription:
      "Ventas, marketing, tecnología y seguimiento avanzan por separado, sin un sistema que los conecte.",
    afterTitle: "Procesos conectados",
    afterDescription:
      "Las áreas trabajan bajo una misma lógica, con prioridades claras y una operación más coherente.",
  },
  {
    beforeTitle: "Fricción al convertir y fidelizar",
    beforeDescription:
      "El proceso pierde fuerza por falta de continuidad, seguimiento y una experiencia comercial integrada.",
    afterTitle: "Flujo continuo con seguimiento real",
    afterDescription:
      "Cada oportunidad avanza con ritmo, puntos de control y una lógica de seguimiento sostenida.",
  },
  {
    beforeTitle: "Dependencia total del fundador",
    beforeDescription:
      "La venta y las decisiones clave dependen casi por completo de una sola persona.",
    afterTitle: "Ejecución compartida y autónoma",
    afterDescription:
      "El equipo puede operar con más claridad, autonomía y menos cuello de botella en la ejecución.",
  },
  {
    beforeTitle: "Estancamiento sin claridad",
    beforeDescription:
      "El crecimiento se frena y no hay visibilidad real sobre qué priorizar o cómo intervenir.",
    afterTitle: "Prioridades visibles y decisiones con criterio",
    afterDescription:
      "El sistema hace visible dónde intervenir primero y permite decidir con más claridad.",
  },
] as const;





export default function HomePage() {
  return (
    <>
      <section
        id="home-hero"
        className="relative -mt-[76px] flex min-h-[100dvh] items-center justify-center overflow-hidden"
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
                Sistema para hacer crecer tu empresa
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-[0.92rem] leading-[1.5] text-[#D9DDE7] sm:text-[1rem]">
                Capta más clientes, vende con estructura y crece con consistencia. Integramos diagnóstico, diseño y ejecución en un solo sistema.
              </p>

              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href={SITE_CONFIG.diagnosisPath} size="lg">
                  Realiza tu diagnóstico gratuito
                </Button>
                <Button
                  href="/regalos"
                  variant="secondary"
                  size="lg"
                  className="shadow-[0_0_0_1px_rgba(230,37,255,0.1),0_0_18px_rgba(230,37,255,0.16)]"
                >
                  Reclama tu regalo
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section className="section-soft cv-auto py-16 sm:py-20" id="problemas">
        <Container>
          <SectionTitle
            eyebrow="Por qué tu empresa se estanca"
            title="El problema es no tener un sistema alineado y sostenible"
            description="Muchas empresas que ya venden se frenan porque su sistema comercial es débil. Sin una estructura de ventas, marketing, tecnología y seguimiento se hacen por separado; esto genera fricción, estancamiento y dependencia del fundador."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {homePainTransitions.map((item) => (
              <BeforeAfterWipeCard
                key={item.beforeTitle}
                beforeTitle={item.beforeTitle}
                beforeDescription={item.beforeDescription}
                afterTitle={item.afterTitle}
                afterDescription={item.afterDescription}
              />
            ))}
          </div>
        </Container>
      </section>

      <SectionDivider />

      <section className="cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            align="left"
            eyebrow="Cómo lo hacemos"
            title="Sin diagnóstico no hay resultado."
            description="Nuestro método de cuatro pasos garantiza que cada decisión se base en datos y no en suposiciones:"
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
                hidePoints
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
            align="left"
            eyebrow="Diferencial"
            title="Descubre cómo activar tu crecimiento"
            description="No somos una agencia más, somos la pieza que une estrategia y ejecución para que tu sistema comercial deje de ser una carga y se convierta en tu mayor ventaja competitiva."
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
                A quién sirve
              </h2>
              <p className="mt-6 border-t border-white/8 pt-6 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                RiBuzz ayuda a empresas que ya venden en Medellín o Colombia y desean poner orden y estructura a su crecimiento. Está pensado para negocios con fricción en su crecimiento que quieren dejar de improvisar y están dispuestos a participar en el proceso.
              </p>
            </div>

            <div className="flex-1 p-7 sm:p-8 lg:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
                Para quien no es
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#F5F7FA] lg:text-3xl">
                A quién no sirve
              </h2>
              <p className="mt-6 border-t border-white/8 pt-6 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                No está dirigido a negocios que aún no han validado su oferta, que solo buscan marketing sin revisar su estructura, que esperan resultados sin involucrarse o que quieren delegar completamente la venta.
              </p>
            </div>
          </Card>
        </Container>
      </section>

      <NetworkFeatureSection />

      <TestimonialShuffle />

      <section className="cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow="FAQ rápido"
            title="Preguntas frecuentes antes de avanzar"
            description="Respuestas breves antes de tomar decisiones sobre tu sistema."
          />

          <div className="mt-8 w-full">
            <FAQAccordion items={homeFaqs} />
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
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
                Información de valor / Newsletter
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F5F7FA] sm:text-4xl">
                ¿No estás listo para ejecutar?
                <br />
                Suscríbete y recibe análisis sobre diseño de sistemas comerciales, conversión, seguimiento y casos reales de crecimiento.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#98A0B3] sm:text-lg">
                Sin spam, solo contenido útil.
              </p>

              <div className="mx-auto mt-10 flex justify-center">
                <Button
                  href="https://forms.monday.com/forms/3cbb05c0c156282155e6fa80b5922cb1?r=use1"
                  size="lg"
                  external
                  className="shadow-[0_0_24px_rgba(230,37,255,0.2)]"
                >
                  Unirme a la lista
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
