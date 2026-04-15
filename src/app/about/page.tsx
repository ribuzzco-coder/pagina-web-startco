import { AboutRibuzzHero } from "@/components/sections/about-ribuzz-hero";
import { CTASection } from "@/components/sections/cta-section";
import { PrincipleCard } from "@/components/sections/principle-card";
import { StepCard } from "@/components/sections/step-card";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { InfoGrid } from "@/components/ui/info-grid";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionTitle } from "@/components/ui/section-title";
import {
  aboutOrigin,
  aboutPosture,
  aboutVisiÃ³n,
  corePrinciples,
  methodologySteps,
} from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Sobre RiBuzz",
  description:
    "RiBuzz nace para ayudar a empresas que ya venden, pero siguen operando sin una estructura comercial clara y sostenible.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutRibuzzHero
        eyebrow="Sobre RiBuzz"
        title="RiBuzz convierte la estructura comercial en un activo que genera valor."
        description="Nacimos al ver el mismo patrÃ³n una y otra vez: empresas que sÃ­ venden, pero siguen operando sin un sistema claro para captar, convertir y hacer seguimiento con consistencia."
        supportText="RiBuzz funciona como un sistema operativo comercial: aporta claridad, criterio y control para que el crecimiento deje de depender de intuiciÃ³n, urgencia o esfuerzo disperso."
        primaryCtaLabel="Solicita tu diagnÃ³stico gratuito"
        primaryCtaHref={SITE_CONFIG.diagnosisPath}
        secondaryCtaLabel="Ver metodologÃ­a"
        secondaryCtaHref="/methodology"
      />


      <section className="cv-auto pb-16 sm:pb-20">
        <Container>
          <SectionTitle
            eyebrow="Nuestra manera de operar"
            title="Trabajamos en cuatro fases para intervenir con criterio, no por intuición."
            description="Así operamos en RiBuzz: primero leemos el sistema, luego definimos la estructura, activamos lo necesario y acompañamos la ejecución."
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

      <section className="cv-auto pb-16 sm:pb-20">
        <Container>
          <SectionTitle
            eyebrow="Origen"
            title="De una observaciÃ³n repetida a una postura clara"
            description="El origen de RiBuzz no estÃ¡ en vender mÃ¡s servicios. EstÃ¡ en corregir una forma de operar que deja desgaste, ceguera comercial y dependencia excesiva del fundador."
          />

          <InfoGrid className="mt-8 md:grid-cols-3">
            {aboutOrigin.map((item) => (
              <Card key={item.title} className="rounded-[24px] p-6">
                <h3 className="text-xl font-semibold tracking-tight text-[#F5F7FA]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                  {item.description}
                </p>
              </Card>
            ))}
          </InfoGrid>
        </Container>
      </section>

      <SectionDivider />

      <section className="cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow="VisiÃ³n"
            title="QuÃ© quiere empujar RiBuzz en el mercado"
            description="La visiÃ³n no es repetir el origen. Es mover a mÃ¡s empresas hacia una forma de crecer menos improvisada y mÃ¡s estructurada."
          />

          <InfoGrid className="mt-8 md:grid-cols-2">
            {aboutVisiÃ³n.map((item) => (
              <Card key={item.title} className="rounded-[24px] p-6">
                <h3 className="text-xl font-semibold tracking-tight text-[#F5F7FA]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                  {item.description}
                </p>
              </Card>
            ))}
          </InfoGrid>
        </Container>
      </section>

      <section className="cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow="Principios"
            title="Principios no negociables"
            description="Estos principios sostienen la forma en que RiBuzz diagnostica, prioriza, implementa y acompaÃ±a."
          />

          <InfoGrid className="mt-8 lg:grid-cols-3">
            {corePrinciples.map((principle, index) => (
              <PrincipleCard key={principle} index={index + 1} text={principle} />
            ))}
          </InfoGrid>
        </Container>
      </section>

      <section className="section-soft cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow="Postura"
            title="Una marca profesional, directa y orientada a ejecuciÃ³n"
            description="RiBuzz no busca agradar con frases vacÃ­as. Busca aportar criterio, estructura y direcciÃ³n donde hoy hay ruido comercial."
          />

          <InfoGrid className="mt-8 md:grid-cols-2 xl:grid-cols-4">
            {aboutPosture.map((item) => (
              <Card key={item.title} className="rounded-[24px] p-6">
                <h3 className="text-lg font-semibold tracking-tight text-[#F5F7FA]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                  {item.description}
                </p>
              </Card>
            ))}
          </InfoGrid>
        </Container>
      </section>

      <CTASection
        title="Si tu empresa ya vende, pero sigue dependiendo de intuiciÃ³n y urgencia, vale la pena leer el sistema antes de mover mÃ¡s piezas."
        description="Solicita tu diagnÃ³stico gratuito. Te toma menos de 10 minutos y nos permite revisar si realmente existe una oportunidad de intervenciÃ³n antes de avanzar."
        primaryLabel="Solicita tu diagnÃ³stico gratuito"
        primaryHref={SITE_CONFIG.diagnosisPath}
      />
    </>
  );
}

