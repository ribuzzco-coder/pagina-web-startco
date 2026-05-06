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

const embeddedDiagnosisFormUrl = SITE_CONFIG.diagnosisFormUrl.includes("?")
  ? `${SITE_CONFIG.diagnosisFormUrl}&embedded=true`
  : `${SITE_CONFIG.diagnosisFormUrl}?embedded=true`;

export const metadata = createPageMetadata({
  title: "Solicitar diagnóstico",
  description:
    "Completa el diagnostico de RiBuzz desde esta pagina. Por ahora la captura se procesa temporalmente en Google Forms mientras la plataforma dedicada termina su desarrollo.",
  path: "/diagnostico",
});

export default function ContactPage() {
  return (
    <>
      <section className="pb-8 pt-14 sm:pb-12 sm:pt-20">
        <Container className="max-w-6xl">
          <div className="max-w-4xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
              Solicitar diagnóstico
            </p>
            <h1 className="mt-6 max-w-4xl font-sans text-4xl font-semibold leading-tight text-[#F5F7FA] sm:text-5xl">
              Cuéntanos cómo está hoy tu operación y encontremos el mejor siguiente paso.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#98A0B3] sm:text-lg">
              El diagnóstico sigue activo dentro de esta página. Mientras terminamos la plataforma
              dedicada, las respuestas se capturan temporalmente en Google Forms.
            </p>
          </div>

          <Card
            interactiveGlow={false}
            className="mt-8 overflow-hidden rounded-[32px] border-white/10 bg-[linear-gradient(180deg,rgba(19,21,31,0.98),rgba(10,11,18,1))] px-6 py-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_30px_90px_rgba(0,0,0,0.42)] sm:px-8 sm:py-7"
          >
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
                  Diagnóstico activo
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#F5F7FA] sm:text-[2rem]">
                  Completa el formulario aquí mismo.
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                  Mantuvimos el formulario dentro del sitio para que el recorrido siga siendo claro
                  y continuo, mientras la captura temporal todavía se procesa en Google Forms.
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:items-end">
                <Button href="#diagnostico-form" size="lg" className="w-full lg:w-auto lg:min-w-[260px]">
                  Ir al formulario
                </Button>
                <p className="max-w-sm text-sm leading-relaxed text-[#98A0B3] lg:text-right">
                  Si en tu dispositivo el embed no carga bien o prefieres más espacio, también
                  puedes abrirlo en una pestaña aparte.
                </p>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      <section className="cv-auto pb-16 sm:pb-20" id="diagnostico-form">
        <Container className="max-w-6xl">
          <Card
            interactiveGlow={false}
            className="overflow-hidden rounded-[32px] border-[#ff7cf4]/24 bg-[linear-gradient(180deg,rgba(20,22,31,0.98),rgba(11,11,16,0.99))] p-0 shadow-[0_0_0_1px_rgba(230,37,255,0.12),0_28px_90px_rgba(230,37,255,0.22),0_36px_120px_rgba(0,0,0,0.42)]"
          >
            <div className="border-b border-white/8 px-5 py-5 sm:px-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
                Formulario temporal
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#F5F7FA] sm:text-[2rem]">
                Envíanos tu diagnóstico desde aquí.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                Este formulario está embebido para mantener la experiencia dentro del sitio, aunque
                la captura actual se procesa en Google Forms mientras construimos la plataforma
                propia.
              </p>
            </div>

            <div className="grid gap-5 px-4 py-5 sm:px-6 sm:py-6">
              <div className="grid gap-4 lg:grid-cols-[1fr_1fr_0.9fr]">
                <div className="rounded-[22px] border border-white/8 bg-white/[0.03] p-4 text-sm text-[#98A0B3]">
                  <p className="font-semibold text-[#F5F7FA]">Qué evaluamos</p>
                  <ul className="mt-3 space-y-3 leading-relaxed text-[#C7CBD6]">
                    <li>Si el cuello de botella está en captación, conversión, seguimiento o estructura.</li>
                    <li>Qué tan dependiente es hoy tu operación del fundador o de decisiones improvisadas.</li>
                    <li>Qué siguiente paso tiene más sentido antes de invertir más tiempo o dinero.</li>
                  </ul>
                </div>

                <div className="rounded-[22px] border border-white/8 bg-white/[0.03] p-4 text-sm text-[#98A0B3]">
                  <p className="font-semibold text-[#F5F7FA]">Cómo manejamos esta etapa</p>
                  <div className="mt-3 grid gap-3 leading-relaxed text-[#C7CBD6]">
                    <p>El diagnóstico vive dentro de esta página, pero por ahora las respuestas viajan a Google Forms.</p>
                    <p>No estamos usando todavía este backend público para guardar solicitudes de diagnóstico.</p>
                    <p>Cuando la plataforma dedicada esté lista, podremos migrar ese flujo sin perder esta entrada principal.</p>
                  </div>
                </div>

                <div className="rounded-[22px] border border-white/8 bg-white/[0.03] p-4 text-sm text-[#98A0B3]">
                  <p className="font-semibold text-[#F5F7FA]">Nota de operación</p>
                  <p className="mt-3 leading-relaxed">
                    Si ves limitaciones de carga o prefieres más espacio, puedes abrir el mismo
                    formulario en una pestaña nueva y continuar allí.
                  </p>
                  <div className="mt-4 flex flex-col gap-3">
                    <Button
                      href={SITE_CONFIG.diagnosisFormUrl}
                      external
                      size="lg"
                      className="w-full"
                    >
                      Abrir formulario aparte
                    </Button>
                    <Button
                      href={SITE_CONFIG.whatsappUrl}
                      external
                      variant="secondary"
                      size="lg"
                      className="w-full"
                    >
                      Resolver dudas por WhatsApp
                    </Button>
                  </div>
                </div>
              </div>

              <div className="diagnosis-form-embed">
                <div className="diagnosis-form-embed__badge">Modo nocturno experimental</div>
                <iframe
                  title="Formulario de diagnóstico de RiBuzz"
                  src={embeddedDiagnosisFormUrl}
                  className="diagnosis-form-embed__frame min-h-[980px] w-full rounded-[24px] border border-white/8 bg-[#0D1018]"
                  loading="lazy"
                />
                <div className="diagnosis-form-embed__shader" aria-hidden="true" />
              </div>
            </div>
          </Card>
        </Container>
      </section>

      <SectionDivider />

      <section className="cv-auto pb-16 sm:pb-20">
        <Container>
          <SectionTitle
            eyebrow="Antes de aplicar"
            title="Qué puedes esperar de este diagnóstico"
            description="La idea no es llenarte de teoría, sino devolverte una lectura clara, aterrizada y fácil de convertir en siguientes pasos."
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
        <Container>
          <SectionTitle
            eyebrow="FAQ"
            title="Preguntas frecuentes antes de trabajar con RiBuzz"
            description="Las respuestas están pensadas para dejar claro para quién es, para quién no es y cómo funciona el proceso."
          />

          <div className="mt-8 max-w-4xl">
            <FAQAccordion items={contactFaqs} />
          </div>
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
