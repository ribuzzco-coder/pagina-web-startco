import { PageHero } from "@/components/common/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { PrincipleCard } from "@/components/sections/principle-card";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { InfoGrid } from "@/components/ui/info-grid";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionTitle } from "@/components/ui/section-title";
import {
  aboutOrigin,
  aboutPosture,
  aboutVision,
  corePrinciples,
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
      <PageHero
        eyebrow="Sobre RiBuzz"
        title="RiBuzz nace al ver un patron: empresas que si venden, pero siguen operando sin sistema comercial."
        description="No nacimos para ser una agencia mas. Nacimos para intervenir un vacio recurrente en negocios que ya estan en movimiento, pero todavia no convierten su esfuerzo comercial en crecimiento sostenible."
        primaryCtaLabel="Solicita tu diagnostico gratuito"
        primaryCtaHref={SITE_CONFIG.diagnosisPath}
        asideTitle="La idea central"
        asideText="Muchas empresas no estan frenadas por falta de mercado, sino por falta de estructura comercial para vender, seguir oportunidades y sostener crecimiento."
      />

      <section className="cv-auto pb-16 sm:pb-20">
        <Container>
          <SectionTitle
            eyebrow="Origen"
            title="De una observacion repetida a una postura clara"
            description="El origen de RiBuzz no esta en vender mas servicios. Esta en corregir una forma de operar que deja desgaste, ceguera comercial y dependencia excesiva del fundador."
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
            eyebrow="Vision"
            title="Que quiere empujar RiBuzz en el mercado"
            description="La vision no es repetir el origen. Es mover a mas empresas hacia una forma de crecer menos improvisada y mas estructurada."
          />

          <InfoGrid className="mt-8 md:grid-cols-2">
            {aboutVision.map((item) => (
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
            description="Estos principios sostienen la forma en que RiBuzz diagnostica, prioriza, implementa y acompana."
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
            title="Una marca profesional, directa y orientada a ejecucion"
            description="RiBuzz no busca agradar con frases vacias. Busca aportar criterio, estructura y direccion donde hoy hay ruido comercial."
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
        title="Si tu empresa ya vende, pero sigue dependiendo de intuicion y urgencia, vale la pena leer el sistema antes de mover mas piezas."
        description="Solicita tu diagnostico gratuito. Te toma menos de 10 minutos y nos permite revisar si realmente existe una oportunidad de intervencion antes de avanzar."
        primaryLabel="Solicita tu diagnostico gratuito"
        primaryHref={SITE_CONFIG.diagnosisPath}
      />
    </>
  );
}
