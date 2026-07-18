import { CTASection } from "@/components/sections/cta-section";
import { DiagnosticRequestForm } from "@/components/sections/diagnostic-request-form";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { PillBadge } from "@/components/ui/pill-badge";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionTitle } from "@/components/ui/section-title";
import { diagnosisExpectations, diagnosisNextSteps, homeFaqs } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

const diagnosisHighlights = [
  "Ubicamos tu etapa",
  "Aclaramos el bloqueo",
  "Definimos la ruta",
] as const;

export const metadata = createPageMetadata({
  title: "Diagnóstico",
  description:
    "Completa una aplicación breve para ubicar etapa, objetivo, bloqueo y siguiente paso con RiBuzz.",
  path: "/diagnostico",
});

export default function DiagnosticoPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-16 sm:pb-14 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,95,221,0.12),transparent_34%),radial-gradient(circle_at_76%_42%,rgba(105,57,226,0.12),transparent_30%)]" />
        <Container className="relative max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <PillBadge>Aplicación de diagnóstico</PillBadge>
            <h1 className="mx-auto mt-6 max-w-4xl font-heading text-4xl font-semibold leading-tight text-[#E4DFF7] [text-wrap:balance] sm:text-5xl">
              Ubica tu etapa y recibe el siguiente paso correcto
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#98A0B3] [text-wrap:pretty] sm:text-lg">
              En 5-7 minutos entendemos tu contexto, objetivo y bloqueo principal. Con eso
              clasificamos la ruta: llamada de introducción, preparación con recursos o seguimiento
              hasta que el momento sea más claro.
            </p>

            <div className="mx-auto mt-7 flex max-w-3xl flex-wrap items-center justify-center gap-3">
              {diagnosisHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#6939E2]/24 bg-[#6939E2]/8 px-4 py-2 text-sm font-semibold text-[#CEC6E0]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="cv-auto pb-16 sm:pb-20" id="diagnostico-form">
        <Container className="max-w-4xl">
          <DiagnosticRequestForm bookingUrl={SITE_CONFIG.bookingUrl} />
        </Container>
      </section>

      <SectionDivider />

      <section className="cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Qué pasa después"
            title="La aplicación abre una ruta concreta"
            description="Cada empresa llega con un contexto distinto. La aplicación ordena el siguiente paso según etapa, urgencia, capacidad y objetivo."
          />

          <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
            {diagnosisNextSteps.map((item) => (
              <Card key={item.title} className="rounded-[24px] p-6 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8b6ff0]">
                  {item.eyebrow}
                </p>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-[#E4DFF7] [text-wrap:balance]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#98A0B3] [text-wrap:pretty] sm:text-base">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <SectionDivider />

      <section className="cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Qué revisamos"
            title="Antes de proponerte algo, entendemos el sistema"
            description="Primero ubicamos dónde se frena el avance. Después definimos alcance, entregables y forma de trabajo para tu momento."
          />

          <div className="mx-auto mt-10 max-w-4xl rounded-[28px] border-y border-white/10">
            {diagnosisExpectations.map((item) => (
              <div
                key={item.title}
                className="grid gap-3 border-b border-white/8 px-2 py-6 text-center last:border-b-0 sm:grid-cols-[0.8fr_1.2fr] sm:items-center sm:text-left"
              >
                <h3 className="text-base font-semibold text-[#E4DFF7] [text-wrap:balance]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#98A0B3] [text-wrap:pretty] sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <SectionDivider />

      <section className="cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="FAQ"
            title="Preguntas frecuentes antes de completar la aplicación"
            description="Respuestas directas sobre oferta, alcance, riesgo, tiempos y forma de trabajo antes de tomar una decisión."
          />

          <div className="mx-auto mt-8 max-w-4xl">
            <FAQAccordion items={homeFaqs} />
          </div>
        </Container>
      </section>

      <CTASection
        centered
        eyebrow="Siguiente paso"
        title="Deja claro qué debe moverse primero"
        description="Completa la aplicación y ubicamos tu etapa, objetivo, bloqueo principal y ruta de trabajo."
        primaryLabel="Completa la aplicación"
        primaryHref="#diagnostico-form"
        primaryVariant="shimmer"
        secondaryLabel="Escribir por WhatsApp"
        secondaryHref={SITE_CONFIG.whatsappUrl}
        secondaryExternal
        actionsClassName="justify-center"
      />
    </>
  );
}
