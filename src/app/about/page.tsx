import { AboutRibuzzHero } from "@/components/sections/about-ribuzz-hero";
import { NetworkFeatureSection } from "@/components/sections/network-feature-section";
import { PrincipleTabs } from "@/components/sections/principle-tabs";
import { Container } from "@/components/ui/container";
import { InfoGrid } from "@/components/ui/info-grid";
import { NumberedCard } from "@/components/ui/numbered-card";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionTitle } from "@/components/ui/section-title";
import {
  aboutOrigin,
  aboutPosture,
  aboutVisión,
  corePrinciples,
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
        primaryCtaLabel="Agenda tu llamada de introducción"
        primaryCtaHref={SITE_CONFIG.diagnosisPath}
      />

      <section className="cv-auto pb-16 sm:pb-20">
        <Container>
          <SectionTitle
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
            eyebrow="Visión"
            title="Queremos que crecer deje de depender de la intuición."
            description="Ayudar a que más empresas operen con sistemas comerciales más claros, sostenibles y menos dependientes del fundador."
          />

          <InfoGrid className="mt-8 md:grid-cols-2">
            {aboutVisión.map((item, index) => (
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

      <section className="cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow="Principios"
            title="Principios no negociables"
            description="Estos principios sostienen la forma en que RiBuzz diagnostica, prioriza, implementa y acompaña."
          />

          <div className="mt-8">
            <PrincipleTabs principles={corePrinciples} />
          </div>
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
            {aboutPosture.map((item, index) => (
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

      <NetworkFeatureSection
        title="Si tu empresa no crece como te gustaría"
        description="Agenda tu llamada de introducción. Es gratuita, dura poco y nos permite identificar si hay una oportunidad real para que tu empresa crezca."
        primaryButtonLabel="Agenda tu llamada de introducción"
      />
    </>
  );
}
