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
        title="Tres capas de intervención para corregir y sostener tu sistema comercial"
        titleClassName="[font-family:var(--font-saira)] font-semibold text-[2rem] leading-[1.05] sm:text-[2.55rem] xl:text-[2.95rem]"
        description="RiBuzz no presenta servicios sueltos. Presenta capas lógicas para pasar de lectura y estructura a capacidad operativa real y mejora continua."
        primaryCtaLabel="Solicita tu diagnóstico gratuito"
        primaryCtaHref={SITE_CONFIG.diagnosisPath}
        secondaryCtaLabel="Ver metodología"
        secondaryCtaHref="/methodology"
        asideTitle="El orden importa"
        asideText="Primero claridad y diagnóstico. Después estructura. Luego implementación y acompañamiento dónde sí hace falta."
      />

      <section className="cv-auto pb-16 sm:pb-22">
        <Container>
          <SectionTitle
            eyebrow="Capas de trabajo"
            title="Cada capa responde a un momento distinto del negocio"
            description="La secuencia cambia según el contexto, pero la lógica es la misma: no ejecutar sin lectura del problema y no diseñar algo qué luego no pueda operar."
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
            eyebrow="Qué genera cada capa"
            title="Claridad, capacidad operativa y sostenibilidad"
            description="El valor no está solo en hacer cosas. Esta en instalar una lógica comercial qué el negocio pueda usar y mejorar."
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
            title="Lo que RiBuzz hace distinto frente a agencias, consultores o ejecución aislada"
            description="La diferencia no es solo técnica. Es la postura de intervenir el sistema comercial con criterio y no una parte desconectada."
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
        title="El diagnóstico define qué capa tiene sentido para tu momento actual."
        description="Solicita tu diagnóstico gratuito. Te toma menos de 10 minutos, recibes una lectura inicial del sistema comercial y revisamos si realmente hay fit antes de proponer una capa de trabajo."
        primaryLabel="Solicita tu diagnóstico gratuito"
        primaryHref={SITE_CONFIG.diagnosisPath}
        secondaryLabel="Escribir por WhatsApp"
        secondaryHref={SITE_CONFIG.whatsappUrl}
        secondaryExternal
      />
    </>
  );
}



