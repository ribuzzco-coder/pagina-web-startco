import { CTASection } from "@/components/sections/cta-section";
import { DiagnosticRequestForm } from "@/components/sections/diagnostic-request-form";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
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
      <section className="relative -mt-[76px] overflow-hidden bg-[#08051b] pb-14 pt-[76px] sm:pb-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(108,67,239,.3),transparent_48%),linear-gradient(140deg,#08051b,#120a2d)]" />
        <Container className="relative grid gap-10 py-16 lg:grid-cols-[1fr_.7fr] lg:items-end lg:py-20">
          <div><p className="font-heading text-xs font-semibold uppercase tracking-[.18em] text-[#bcaaff]">Aplicación de diagnóstico</p><h1 className="mt-5 max-w-3xl font-heading text-5xl font-semibold leading-[.98] tracking-[-.055em] text-white sm:text-6xl">Empecemos por entender tu negocio.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#c9c1d9]">Cuéntanos tu contexto, objetivo y bloqueo principal. Con tus respuestas, la aplicación te orienta hacia una llamada de introducción, recursos de preparación o seguimiento por contenido.</p><a href="#diagnostico-form" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#6d42e8] px-6 font-semibold text-white transition hover:bg-[#7b55ef] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bbaaff]">Ir a la aplicación</a><p className="mt-4 text-sm text-[#b3a8c9]">La llamada se habilita cuando corresponde a la ruta de tu aplicación.</p></div>
          <div className="rounded-[26px] border border-[#a38afa]/25 bg-[#15102f]/85 p-7"><p className="font-heading text-xs font-semibold uppercase tracking-[.16em] text-[#bba8ff]">Lo que buscamos entender</p><ol className="mt-5 space-y-1">{diagnosisHighlights.map((item, index) => <li key={item} className="flex items-center gap-4 border-b border-white/10 py-4 last:border-0"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#aa91ff]/35 bg-[#291d51] text-sm text-[#d2c4ff]">{index + 1}</span><span className="font-heading font-semibold text-white">{item}</span></li>)}</ol><p className="mt-4 text-sm leading-relaxed text-[#bdb3d2]">No necesitas tener todas las respuestas. Comparte lo que sabes hoy para orientar la conversación.</p></div>
        </Container>
      </section>

      <section className="scroll-mt-24 pb-16 sm:pb-20" id="diagnostico-form">
        <Container className="max-w-4xl">
          <div className="mb-6 border-l-2 border-[#bfa2ff] pl-5">
            <h2 className="font-heading text-xl font-semibold text-white">Tres pasos · 5 a 7 minutos</h2>
            <p className="mt-2 max-w-2xl leading-relaxed text-[#d1c5df]">
              Usamos tus datos de contacto y el contexto de la marca para orientar tu solicitud.
              Al enviarla verás tu ruta en esta pantalla. Puedes consultar la{" "}
              <a className="underline underline-offset-4" href="/politica-de-privacidad">política de tratamiento de datos</a>
              {" "}o <a className="underline underline-offset-4" href={SITE_CONFIG.whatsappUrl}>escribir al equipo por WhatsApp</a>.
            </p>
          </div>
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
            {diagnosisNextSteps.map((item, index) => (
              <Card key={item.title} className="rounded-[24px] p-7 text-left">
                <span aria-hidden="true" className="mb-6 grid h-11 w-11 place-items-center rounded-xl border border-[#a991ff]/25 bg-[#302153] font-heading font-semibold text-[#d2c4ff]">{index + 1}</span>
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
