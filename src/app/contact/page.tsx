import { ContactCard } from "@/components/sections/contact-card";
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

const evaluationPoints = [
  "Captación y adquisición comercial",
  "Conversión de oportunidades",
  "Seguimiento y continuidad del proceso",
  "Dependencia del fundador y capacidad del equipo",
] as const;

const embeddedDiagnosisFormUrl = SITE_CONFIG.diagnosisPath.includes("?")
  ? `${SITE_CONFIG.diagnosisPath}&embedded=true`
  : `${SITE_CONFIG.diagnosisPath}?embedded=true`;

export default function ContactPage() {
  return (
    <>
      <section className="pb-10 pt-16 sm:pb-12 sm:pt-24">
        <Container className="grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
              Solicitar diagnóstico
            </p>
            <h1 className="mt-6 max-w-4xl font-heading text-4xl leading-tight text-[#F5F7FA] sm:text-5xl">
              Cuéntanos cómo está operando tu sistema comercial y evaluemos si hay fit.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#98A0B3] sm:text-lg">
              El diagnóstico es la forma correcta de entender si tu negocio tiene un
              problema de estructura comercial, en qué nivel está y qué capa de trabajo
              realmente conviene.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-[#ff9cff]/35 bg-[linear-gradient(145deg,rgba(230,37,255,0.28),rgba(110,18,146,0.2))] p-6 shadow-[0_18px_50px_rgba(230,37,255,0.24),inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[18px] sm:p-7">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,125,247,0.22),transparent_42%)]" />
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.62),transparent)]" />
            <div className="relative">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">
                Diagnóstico listo abajo
              </p>
              <h2 className="mt-3 max-w-sm text-2xl font-semibold tracking-tight text-white sm:text-[2rem]">
                Baja un poco y completa el formulario dentro del sitio.
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/76 sm:text-base">
                Lo dejamos visible en la misma página para que la experiencia se sienta
                más directa, más limpia y más RiBuzz.
              </p>
              <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#0FEFFD] shadow-[0_0_14px_rgba(15,239,253,0.88)]" />
                Formulario integrado y vista completa
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="cv-auto pb-16 sm:pb-20">
        <ContainerScroll
          className="px-5 sm:px-8 lg:px-10"
          contentClassName="mt-8"
          titleComponent={
            <Container className="max-w-5xl px-0">
              <div className="relative overflow-hidden rounded-[34px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] px-5 pb-8 pt-6 sm:px-8 sm:pb-10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(230,37,255,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(15,239,253,0.08),transparent_36%)]" />
                <div className="pointer-events-none absolute -top-2 left-0 right-0 text-center font-heading text-[3rem] font-semibold uppercase leading-none tracking-[-0.06em] text-white/7 sm:text-[5.6rem] lg:text-[7.8rem]">
                  Diagnóstico
                </div>
                <div className="pointer-events-none absolute top-[2.9rem] left-1/2 -translate-x-1/2 text-center font-heading text-[2.25rem] font-semibold tracking-[-0.05em] text-[#E625FF]/12 sm:top-[4.2rem] sm:text-[4.2rem] lg:text-[5.8rem]">
                  Comercial
                </div>

                <div className="relative z-10 max-w-3xl pt-12 sm:pt-20">
                  <p className="text-sm leading-relaxed text-[#C7CBD6] sm:text-base">
                    Primero revisamos contexto, etapa comercial, reto principal y
                    disposición a ejecutar. Solo avanzamos cuando vemos una oportunidad
                    real de impacto.
                  </p>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Button href={SITE_CONFIG.diagnosisPath} size="lg" variant="secondary" external>
                      Ver en pantalla completa
                    </Button>
                    <Button
                      href={SITE_CONFIG.whatsappUrl}
                      size="lg"
                      variant="ghost"
                      external
                    >
                      Escribir por WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </Container>
          }
        >
          <Container className="max-w-5xl px-0">
            <Card className="overflow-hidden rounded-[30px] border-white/10 bg-[linear-gradient(180deg,rgba(20,22,31,0.96),rgba(11,11,16,0.98))] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.42)] sm:p-4">
              <div className="flex items-center justify-between border-b border-white/8 px-3 pb-3 pt-1 sm:px-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
                    Diagnóstico RiBuzz
                  </p>
                  <p className="mt-1 text-xs text-[#98A0B3] sm:text-sm">
                    Completa el formulario aquí mismo o ábrelo aparte si prefieres.
                  </p>
                </div>

                <Button
                  href={SITE_CONFIG.diagnosisPath}
                  size="md"
                  variant="secondary"
                  external
                  className="shrink-0"
                >
                  Pantalla completa
                </Button>
              </div>

              <div className="overflow-hidden rounded-[22px] border border-white/8 bg-black/20">
                <iframe
                  src={embeddedDiagnosisFormUrl}
                  title="Formulario de diagnóstico RiBuzz"
                  className="h-[820px] w-full bg-white sm:h-[980px] lg:h-[1080px]"
                  loading="lazy"
                />
              </div>
            </Card>
          </Container>
        </ContainerScroll>
      </section>

      <SectionDivider />

      <section className="cv-auto pb-16 sm:pb-20">
        <Container>
          <SectionTitle
            eyebrow="Antes de aplicar"
            title="Qué puedes esperar de este diagnóstico"
            description="Es un diagnóstico gratuito, breve y pensado para detectar los principales puntos de fricción del sistema comercial antes de hablar de implementación."
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

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="rounded-[26px] p-6 sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
                Lo que evaluamos
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#F5F7FA]">
                El diagnóstico busca hacer visible dónde se rompe el sistema.
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

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <ContactCard
                title="Escribir por WhatsApp"
                description="Si quieres resolver una duda breve antes de aplicar al diagnóstico, puedes escribirnos por WhatsApp."
                ctaLabel="Abrir WhatsApp"
                ctaHref={SITE_CONFIG.whatsappUrl}
                external
              />
              <ContactCard
                title="Correo directo"
                description="Si necesitas compartir contexto adicional, puedes escribirnos por correo y luego continuar por el diagnóstico."
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
            description="Las respuestas están pensadas para dejar claro para quién es, para quién no es y cómo funciona el proceso."
          />

          <div className="mt-8 max-w-4xl">
            <FAQAccordion items={contactFaqs} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Si ya sospechas que el problema no es hacer más, sino ordenar mejor, entra por el diagnóstico."
        description="Solicita tu diagnóstico gratuito, completa el Google Form en menos de 10 minutos y recibe una lectura inicial de tu sistema comercial antes de cualquier propuesta."
        primaryLabel="Solicita tu diagnóstico gratuito"
        primaryHref={SITE_CONFIG.diagnosisPath}
        secondaryLabel="Escribir por WhatsApp"
        secondaryHref={SITE_CONFIG.whatsappUrl}
        secondaryExternal
      />
    </>
  );
}
