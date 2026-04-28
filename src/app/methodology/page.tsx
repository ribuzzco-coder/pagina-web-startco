import { PageHero } from "@/components/common/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { StepCard } from "@/components/sections/step-card";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionTitle } from "@/components/ui/section-title";
import { methodologyBenefits, methodologySteps } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Metodología",
  description:
    "La metodología de RiBuzz trabaja en cuatro fases: diagnóstico, diseño, implementación y acompañamiento.",
  path: "/methodology",
});

export default function MethodologyPage() {
  return (
    <>
        <PageHero
        eyebrow="Metodología RiBuzz"
        title="Diagnóstico, diseño, implementación y acompañamiento para no ejecutar a ciegas"
        description="La metodología de RiBuzz le da mas peso al diagnóstico porqué ahi se decide sí existe un problema real de estructura comercial, donde esta y cómo conviene intervenirlo."
        primaryCtaLabel="Solicita tu diagnóstico gratuito"
        primaryCtaHref={SITE_CONFIG.diagnosisPath}
        asideTitle="El diagnóstico no es un tramite"
        asideText="Es la fase que recoge información, hace visible el cuello de botella y evita gastar recursos en acciones que no corrigen el sistema."
      />

      <section className="cv-auto pb-16 sm:pb-22">
        <Container>
          <SectionTitle
            eyebrow="Fases de trabajo"
            title="Una metodología de 4 fases, no de 3 pasos rápidos"
            description="Cada fase tiene una funcion concreta y una entrega clara para qué el sistema comercial avance con dirección y no por intuición."
          />

          <div className="relative mt-10 space-y-6 sm:space-y-8">
            <div className="pointer-events-none absolute bottom-5 left-5 top-5 hidden w-px bg-[linear-gradient(to_bottom,rgba(15,239,253,0.18),rgba(230,37,255,0.28))] md:block" />

            {methodologySteps.map((step, index) => (
              <div key={step.title} className="relative md:pl-14">
                <span className="absolute left-[17px] top-6 hidden h-2.5 w-2.5 rounded-full bg-[#0FEFFD] md:block" />
                <StepCard
                  index={index + 1}
                  title={step.title}
                  description={step.description}
                  points={step.points}
                  outcome={step.outcome}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <SectionDivider />

      <section className="cv-auto py-16 sm:py-20">
        <Container className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <Card className="rounded-[28px] p-7 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
              Por qué importa
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F5F7FA]">
              Esta metodología importa porqué evita mover el negocio sin lectura del problema.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
              Cuando el orden es diagnosticar, diseñar, implementar y acompañar,
              la empresa reduce improvisacion y conecta mejor sus decisiones con la
              operación real.
            </p>
          </Card>

          <div className="grid gap-5 md:grid-cols-2">
            {methodologyBenefits.map((benefit) => (
              <Card key={benefit.title} className="rounded-[24px] p-6">
                <h3 className="text-xl font-semibold tracking-tight text-[#F5F7FA]">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Si no tienes claro donde se rompe el proceso comercial, el primer paso no es ejecutar: es diagnosticar."
        description="Solicita tu diagnóstico gratuito, completalo en menos de 10 minutos y recibe una lectura inicial para entender si el cuello de botella esta en captacion, conversión, seguimiento o estructura comercial."
        primaryLabel="Solicita tu diagnóstico gratuito"
        primaryHref={SITE_CONFIG.diagnosisPath}
        secondaryLabel="Ir a contacto"
        secondaryHref="/contacto"
      />
    </>
  );
}

