import { CTASection } from "@/components/sections/cta-section";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Container } from "@/components/ui/container";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionTitle } from "@/components/ui/section-title";
import { contactFaqs, diagnosisExpectations } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Solicitar diagnóstico",
  description:
    "Solicita un diagnóstico con RiBuzz para evaluar fit, leer tu sistema comercial y definir el siguiente paso correcto.",
  path: "/contact",
});

const embeddedDiagnosisFormUrl = SITE_CONFIG.diagnosisFormUrl.includes("?")
  ? `${SITE_CONFIG.diagnosisFormUrl}&embedded=true`
  : `${SITE_CONFIG.diagnosisFormUrl}?embedded=true`;

export default function ContactPage() {
  return (
    <>
      <section className="pb-8 pt-14 sm:pb-12 sm:pt-20">
        <Container className="grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
              Solicitar diagnóstico
            </p>
            <h1 className="mt-6 max-w-4xl font-sans text-4xl font-semibold leading-tight text-[#F5F7FA] sm:text-5xl">
              Cuéntanos cómo buscas crecer y encontremos el mejor camino para tu negocio juntos.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#98A0B3] sm:text-lg">
              El diagnóstico te ayuda a encontrar valor, rumbo e ideas accionables
              para entender mejor tu negocio y decidir qué camino tiene más sentido
              seguir.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-[#ff9cff]/35 bg-[linear-gradient(145deg,rgba(230,37,255,0.28),rgba(110,18,146,0.2))] px-6 py-4 shadow-[0_18px_50px_rgba(230,37,255,0.24),inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[18px] sm:px-7 sm:py-5">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,125,247,0.22),transparent_42%)]" />
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.62),transparent)]" />
            <div className="relative text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">
                Encuentra cómo crecer
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-[2rem]">
                Aquí mismo, sin costo.
              </h2>
              <div className="mt-2.5 flex justify-center">
                <a
                  href="#diagnostico-form"
                  aria-label="Ir al diagnóstico"
                  className="inline-flex items-center justify-center py-1 text-white transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-y-0.5"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 10.5 12 16l5-5.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="cv-auto pb-16 sm:pb-20">
        <ContainerScroll className="mx-auto max-w-[980px] px-5 sm:px-8" contentClassName="mx-auto mt-4 w-full max-w-[860px] sm:mt-6">
          <div className="mx-auto w-full max-w-[860px] overflow-hidden rounded-[32px]">
            <Card interactiveGlow={false} id="diagnostico-form" className="relative overflow-hidden rounded-[32px] border-[#ff7cf4]/24 bg-[linear-gradient(180deg,rgba(20,22,31,0.98),rgba(11,11,16,0.99))] p-0 shadow-[0_0_0_1px_rgba(230,37,255,0.12),0_28px_90px_rgba(230,37,255,0.22),0_36px_120px_rgba(0,0,0,0.42)]">
              <div className="pointer-events-none absolute inset-x-10 -top-6 h-18 rounded-full bg-[radial-gradient(circle,rgba(230,37,255,0.3),transparent_72%)] blur-2xl" />
              <div className="flex items-center justify-between border-b border-white/8 px-4 py-4 sm:px-5">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
                    Diagnóstico RiBuzz
                  </p>
                  <p className="mt-1 text-xs text-[#98A0B3] sm:text-sm">
                    Completa el formulario aquí mismo o ábrelo aparte si prefieres.
                  </p>
                </div>

                <Button
                  href={SITE_CONFIG.diagnosisFormUrl}
                  size="md"
                  variant="secondary"
                  external
                  className="shrink-0"
                >
                  Pantalla completa
                </Button>
              </div>

              <div className="overflow-hidden rounded-b-[32px]">
                <iframe
                  src={embeddedDiagnosisFormUrl}
                  title="Formulario de diagnóstico RiBuzz"
                  className="h-[760px] w-full bg-white invert-[0.92] hue-rotate-180 brightness-105 contrast-105 sm:h-[1020px] lg:h-[1120px]"
                  loading="lazy"
                />
              </div>
            </Card>
          </div>
        </ContainerScroll>
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

