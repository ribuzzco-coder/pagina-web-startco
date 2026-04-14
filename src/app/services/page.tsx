import { PageHero } from "@/components/common/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { ServiceCard } from "@/components/sections/service-card";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionTitle } from "@/components/ui/section-title";
import {
  differentiators,
  fullServices,
  serviceEffects,
} from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Servicios",
  description:
    "RiBuzz organiza su trabajo en tres capas: diseño del sistema comercial, implementación de soluciones y acompañamiento como Growth Partner.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios RiBuzz"
        title="Tres capas de intervencion para corregir y sostener tu sistema comercial"
        description="RiBuzz no presenta servicios sueltos. Presenta capas logicas para pasar de lectura y estructura a capacidad operativa real y mejora continua."
        primaryCtaLabel="Solicita tu diagnostico gratuito"
        primaryCtaHref={SITE_CONFIG.diagnosisPath}
        secondaryCtaLabel="Ver metodologia"
        secondaryCtaHref="/methodology"
        asideTitle="El orden importa"
        asideText="Primero claridad y diagnostico. Despues estructura. Luego implementacion y acompañamiento donde sí hace falta."
      />

      <section className="cv-auto pb-16 sm:pb-22">
        <Container>
          <SectionTitle
            eyebrow="Capas de trabajo"
            title="Cada capa responde a un momento distinto del negocio"
            description="La secuencia cambia segun el contexto, pero la logica es la misma: no ejecutar sin lectura del problema y no diseñar algo que luego no pueda operar."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {fullServices.map((service) => (
              <ServiceCard
                key={service.title}
                layer={service.layer}
                title={service.title}
                summary={service.summary}
                idealClient={service.idealClient}
                expectedResult={service.expectedResult}
                deliverables={service.deliverables}
              />
            ))}
          </div>
        </Container>
      </section>

      <SectionDivider />

      <section className="cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Que genera cada capa"
            title="Claridad, capacidad operativa y sostenibilidad"
            description="El valor no esta solo en hacer cosas. Esta en instalar una logica comercial que el negocio pueda usar y mejorar."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {serviceEffects.map((item) => (
              <Card key={item.title} className="rounded-[24px] p-6">
                <h3 className="text-xl font-semibold tracking-tight text-[#F5F7FA]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-soft cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Diferencial"
            title="Lo que RiBuzz hace distinto frente a agencias, consultores o ejecucion aislada"
            description="La diferencia no es solo tecnica. Es la postura de intervenir el sistema comercial con criterio y no una parte desconectada."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {differentiators.map((item) => (
              <Card key={item} className="rounded-[24px] p-6">
                <p className="text-sm leading-relaxed text-[#98A0B3] sm:text-base">{item}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="El diagnostico define que capa tiene sentido para tu momento actual."
        description="Solicita tu diagnostico gratuito. Te toma menos de 10 minutos, recibes una lectura inicial del sistema comercial y revisamos si realmente hay fit antes de proponer una capa de trabajo."
        primaryLabel="Solicita tu diagnostico gratuito"
        primaryHref={SITE_CONFIG.diagnosisPath}
        secondaryLabel="Escribir por WhatsApp"
        secondaryHref={SITE_CONFIG.whatsappUrl}
        secondaryExternal
      />
    </>
  );
}
