import { CTASection } from "@/components/sections/cta-section";
import { DiagnosticRequestForm } from "@/components/sections/diagnostic-request-form";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { Container } from "@/components/ui/container";
import { NumberedCard } from "@/components/ui/numbered-card";
import { PillBadge } from "@/components/ui/pill-badge";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionTitle } from "@/components/ui/section-title";
import { contactFaqs, diagnosisExpectations } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Agenda tu llamada de introducción",
  description:
    "Completa una aplicación breve (5-7 minutos) y agenda directamente en el calendario tu llamada de introducción con RiBuzz. Sin costo, y sirve para confirmar si hay fit real.",
  path: "/diagnostico",
});

export default function DiagnosticoPage() {
  return (
    <>
      <section className="pb-8 pt-14 sm:pb-12 sm:pt-20">
        <Container className="max-w-6xl">
          <div className="max-w-4xl">
            <PillBadge>Agenda tu llamada</PillBadge>
            <h1 className="mt-6 max-w-4xl font-heading text-4xl font-semibold leading-tight text-[#E4DFF7] sm:text-5xl">
              Cuéntanos tu momento y agenda tu llamada de introducción.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#98A0B3] sm:text-lg">
              Dos pasos: primero una aplicación breve (unos 5-7 minutos) para que revisemos tu
              contexto, después eliges el horario directamente en el calendario. Sin costo, sin
              ida y vuelta de correos.
            </p>
          </div>
        </Container>
      </section>

      <section className="cv-auto pb-16 sm:pb-20">
        <Container>
          <SectionTitle
            eyebrow="Antes de agendar"
            title="Qué puedes esperar de esta llamada"
            description="La idea no es llenarte de teoría, sino devolverte una lectura clara, aterrizada y fácil de convertir en siguientes pasos."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {diagnosisExpectations.map((item, index) => (
              <NumberedCard
                key={item.title}
                index={index + 1}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Container>
      </section>

      <SectionDivider />

      <section className="cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow="FAQ"
            title="Preguntas frecuentes antes de trabajar con RiBuzz"
            description="Las respuestas están pensadas para dejar claro para quién es, para quién no es y cómo funciona el proceso — resuélvelas antes de completar la aplicación."
          />

          <div className="mt-8 max-w-4xl">
            <FAQAccordion items={contactFaqs} />
          </div>
        </Container>
      </section>

      <SectionDivider />

      <section className="cv-auto pb-16 sm:pb-20" id="diagnostico-form">
        <Container className="max-w-4xl">
          <DiagnosticRequestForm bookingUrl={SITE_CONFIG.bookingUrl} />
        </Container>
      </section>

      <CTASection
        eyebrow="Siguiente paso"
        title="Si te quedó una duda o quieres hablarlo antes de avanzar, escríbenos por WhatsApp."
        description="Si prefieres conversar primero, resolver una inquietud puntual o contarnos tu contexto antes de seguir, te respondemos por WhatsApp."
        primaryLabel={
          <span className="inline-flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 text-white"
                fill="currentColor"
              >
                <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.59 2 2.16 6.43 2.16 11.88c0 1.74.45 3.43 1.3 4.92L2 22l5.35-1.4a9.8 9.8 0 0 0 4.68 1.19h.01c5.44 0 9.87-4.43 9.87-9.88 0-2.64-1.03-5.12-2.86-7Zm-7.02 15.2h-.01a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-3.18.83.85-3.1-.2-.31a8.11 8.11 0 0 1-1.25-4.34c0-4.49 3.65-8.14 8.15-8.14 2.17 0 4.2.84 5.73 2.38a8.06 8.06 0 0 1 2.38 5.76c0 4.49-3.65 8.14-8.03 8.14Zm4.47-6.09c-.25-.12-1.47-.73-1.7-.81-.23-.09-.39-.12-.56.12-.16.24-.64.81-.78.97-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.21-.73-.65-1.23-1.45-1.38-1.69-.14-.24-.02-.36.11-.48.11-.11.25-.29.37-.43.12-.15.16-.24.25-.4.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.77-1.84-.2-.48-.4-.41-.56-.42h-.48c-.16 0-.43.06-.65.31-.23.24-.86.84-.86 2.04s.88 2.37 1 2.53c.12.16 1.73 2.64 4.18 3.7.58.25 1.04.4 1.39.52.58.18 1.1.15 1.52.09.46-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z" />
              </svg>
            </span>
            <span>Escríbenos aquí</span>
          </span>
        }
        primaryHref={SITE_CONFIG.whatsappUrl}
        primaryExternal
        contentClassName="gap-8 xl:flex-row xl:items-center"
        actionsClassName="sm:flex-row sm:items-center"
      />
    </>
  );
}
