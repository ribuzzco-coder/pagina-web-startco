import { AboutRibuzzHero } from "@/components/sections/about-ribuzz-hero";
import { NetworkFeatureSection } from "@/components/sections/network-feature-section";
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
  aboutVisión,
  corePrinciples,
  methodologySteps,
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
      <AboutRibuzzHero
        eyebrow="Sobre RiBuzz"
        title="RiBuzz nace para ayudar a que menos empresas fracasen por falta de clientes, estructura comercial y flujo de caja."
        titleClassName="[font-family:var(--font-saira)] font-semibold text-[2rem] leading-[1.05] sm:text-[2.55rem] xl:text-[2.95rem]"
        description="En Colombia, demasiadas empresas desaparecen antes de consolidarse. No siempre porque su producto sea malo, sino porque venden sin un sistema claro para atraer clientes, convertir oportunidades, hacer seguimiento y sostener ingresos."
        supportText="RiBuzz existe para corregir ese punto: convertir el sistema comercial en un activo real del negocio."
        primaryCtaLabel="Solicita tu diagnóstico gratuito"
        primaryCtaHref={SITE_CONFIG.diagnosisPath}
      />

      <section className="cv-auto pb-16 sm:pb-20">
        <Container>
          <SectionTitle
            eyebrow="Nuestra manera de operar"
            title="Trabajamos sobre el sistema comercial completo, no sobre piezas aisladas."
            description="RiBuzz no empieza ejecutando por ejecutar. Primero entiende el negocio, después estructura el sistema, luego activa lo necesario y finalmente acompaña la operación para que el crecimiento no dependa de improvisación."
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

      <section className="cv-auto pb-16 sm:pb-20">
        <Container>
          <SectionTitle
            eyebrow="Origen"
            title="RiBuzz no nació para vender servicios. Nació porque demasiadas empresas no logran sostenerse."
            description="En Colombia, 66,5 % de las empresas no sobrevive más de cinco años. Y aunque el cierre no tiene una sola causa, sí hay una señal clara que se repite."
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
            eyebrow="Visión"
            title="Queremos que crecer deje de depender de la intuición."
            description="Ayudar a que más empresas operen con sistemas comerciales más claros, sostenibles y menos dependientes del fundador."
          />

          <InfoGrid className="mt-8 md:grid-cols-2">
            {aboutVisión.map((item) => (
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
            description="Estos principios sostienen la forma en que RiBuzz diagnostica, prioriza, implementa y acompaña."
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
            title="Una marca profesional, directa y orientada a ejecución"
            description="RiBuzz no busca agradar con frases vacías. Busca aportar criterio, estructura y dirección donde hoy hay ruido comercial."
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

      <NetworkFeatureSection
        title="Si tu empresa no crece como te gustaría"
        description="Solicita tu diagnóstico gratuito. Te toma menos de 10 minutos y nos permite identificar oportunidades para que tu empresa crezca."
        primaryButtonLabel="Solicita tu diagnóstico gratuito"
      />
    </>
  );
}
