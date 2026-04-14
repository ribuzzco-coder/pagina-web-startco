import { PageHero } from "@/components/common/page-hero";
import { ContactCard } from "@/components/sections/contact-card";
import { CTASection } from "@/components/sections/cta-section";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionTitle } from "@/components/ui/section-title";
import { contactFaqs, diagnosisExpectations } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Solicitar diagnostico",
  description:
    "Solicita un diagnostico con RiBuzz para evaluar fit, leer tu sistema comercial y definir el siguiente paso correcto.",
  path: "/contact",
});

const evaluationPoints = [
  "Captacion y adquisicion comercial",
  "Conversion de oportunidades",
  "Seguimiento y continuidad del proceso",
  "Dependencia del fundador y capacidad del equipo",
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Solicitar diagnostico"
        title="Cuentanos como esta operando tu sistema comercial y evaluemos si hay fit."
        description="El diagnostico es la forma correcta de entender si tu negocio tiene un problema de estructura comercial, en que nivel esta y que capa de trabajo realmente conviene."
        primaryCtaLabel="Solicita tu diagnostico gratuito"
        primaryCtaHref={SITE_CONFIG.diagnosisPath}
        secondaryCtaLabel="Escribir por WhatsApp"
        secondaryCtaHref={SITE_CONFIG.whatsappUrl}
        secondaryExternal
        asideTitle="Sin aceptacion automatica despues del diagnostico"
        asideText="Primero revisamos contexto, etapa comercial, reto principal y disposicion a ejecutar. Solo avanzamos cuando vemos una oportunidad real de impacto."
      />

      <section className="cv-auto pb-16 sm:pb-20">
        <Container>
          <SectionTitle
            eyebrow="Antes de aplicar"
            title="Que puedes esperar de este diagnostico"
            description="Es un diagnostico gratuito, breve y pensado para detectar los principales puntos de friccion del sistema comercial antes de hablar de implementación."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {diagnosisExpectations.map((item) => (
              <Card key={item.title} className="rounded-[24px] p-6">
                <h3 className="text-lg font-semibold tracking-tight text-[#F5F7FA]">
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

      <SectionDivider />

      <section className="cv-auto py-16 sm:py-20">
        <Container className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-start">
          <Card className="rounded-[28px] p-7 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
              Entrada principal
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#F5F7FA]">
              Completa el diagnostico inicial y recibe una lectura base sobre tu sistema comercial.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
              Este no es un contacto generico. Es el punto de entrada
              para detectar donde el negocio esta perdiendo consistencia en
              captacion, conversion, seguimiento o estructura comercial.
            </p>

            <div className="mt-6 grid gap-4 border-t border-white/8 pt-6 sm:grid-cols-3">
              <div className="border-l border-white/8 pl-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
                  Gratis
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#98A0B3]">
                  No tiene costo y sirve para hacer una primera lectura con criterio.
                </p>
              </div>
              <div className="border-l border-white/8 pl-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
                  Menos de 10 min
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#98A0B3]">
                  Lo puedes completar rapido sin entrar en un proceso largo de venta.
                </p>
              </div>
              <div className="border-l border-white/8 pl-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
                  Revision de fit
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#98A0B3]">
                  Enviarlo no implica aceptacion automatica. Primero revisamos si hay fit.
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href={SITE_CONFIG.diagnosisPath} size="lg">
                Solicita tu diagnostico gratuito
              </Button>
              <Button href={SITE_CONFIG.whatsappUrl} size="lg" variant="secondary" external>
                Escribir por WhatsApp
              </Button>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#98A0B3]">
              Te toma menos de 10 minutos. No es una venta automatica. Primero
              evaluamos si realmente hay una oportunidad de intervencion.
            </p>
          </Card>

          <div className="space-y-5">
            <Card className="rounded-[26px] p-6 sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
                Lo que evaluamos
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#F5F7FA]">
                El diagnostico busca hacer visible donde se rompe el sistema.
              </h2>
              <ul className="mt-5 space-y-3 border-t border-white/8 pt-5 text-sm text-[#98A0B3] sm:text-base">
                {evaluationPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0FEFFD]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-1">
              <ContactCard
                title="Escribir por WhatsApp"
                description="Si quieres resolver una duda breve antes de aplicar al diagnostico, puedes escribirnos por WhatsApp."
                ctaLabel="Abrir WhatsApp"
                ctaHref={SITE_CONFIG.whatsappUrl}
                external
              />
              <ContactCard
                title="Correo directo"
                description="Si necesitas compartir contexto adicional, puedes escribirnos por correo y luego continuar por el diagnostico."
                ctaLabel={SITE_CONFIG.contactEmail}
                ctaHref={`mailto:${SITE_CONFIG.contactEmail}`}
                external
              />
            </div>
          </div>
        </Container>
      </section>

      <SectionDivider />

      <section className="cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow="FAQ"
            title="Preguntas frecuentes antes de trabajar con RiBuzz"
            description="Las respuestas estan pensadas para dejar claro para quien es, para quien no es y como funciona el proceso."
          />

          <div className="mt-8 max-w-4xl">
            <FAQAccordion items={contactFaqs} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Si ya sospechas que el problema no es hacer mas, sino ordenar mejor, entra por el diagnostico."
        description="Solicita tu diagnostico gratuito, completa el Google Form en menos de 10 minutos y recibe una lectura inicial de tu sistema comercial antes de cualquier propuesta."
        primaryLabel="Solicita tu diagnostico gratuito"
        primaryHref={SITE_CONFIG.diagnosisPath}
        secondaryLabel="Escribir por WhatsApp"
        secondaryHref={SITE_CONFIG.whatsappUrl}
        secondaryExternal
      />
    </>
  );
}
