import { CTASection } from "@/components/sections/cta-section";
import { ServiceCard } from "@/components/sections/service-card";
import { ServicesSystemHero } from "@/components/sections/services-system-hero";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionTitle } from "@/components/ui/section-title";
import { differentiators, fullServices, serviceEffects } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";
import { BoxVisual } from "@/components/ui/gift-box-visual";

export const metadata = createPageMetadata({
  title: "Servicios",
  description:
    "RiBuzz organiza su trabajo en tres capas: diseno del sistema comercial, implementacion de soluciones y acompanamiento como Growth Partner.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <ServicesSystemHero
        primaryCtaHref={SITE_CONFIG.diagnosisPath}
        secondaryCtaHref="/methodology"
      />

      <section className="cv-auto pb-16 sm:pb-22">
        <Container>
          <SectionTitle
            eyebrow="Capas de trabajo"
            title="Cada capa responde a un momento distinto del negocio"
            description="La secuencia cambia segun el contexto, pero la logica es la misma: no ejecutar sin lectura del problema y no disenar algo que luego no pueda operar."
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
            align="left"
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
            align="left"
            eyebrow="Diferencial"
            title="Descubre cómo activar tu crecimiento"
            description="No somos una agencia más, somos la pieza que une estrategia y ejecución para que tu sistema comercial deje de ser una carga y se convierta en tu mayor ventaja competitiva."
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
        actionsAtBottom
        eyebrow="Recursos gratuitos"
        title="Empieza a transformar tu operación hoy mismo"
        description="Reclama tu regalo y accede a recursos gratuitos que te ayudarán a estructurar tu sistema comercial."
        primaryLabel="Haz click aquí"
        primaryHref="/regalos"
        rightElement={
          <div className="opacity-80 drop-shadow-[0_0_15px_rgba(230,37,255,0.15)]">
            <BoxVisual isUnlocked={false} className="scale-90" />
          </div>
        }
      />
    </>
  );
}
