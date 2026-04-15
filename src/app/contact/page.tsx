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
        <Container className="max-w-5xl">
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
        </Container>
      </section>

      <section className="cv-auto pb-16 sm:pb-20">
        <ContainerScroll
          className="px-5 sm:px-8 lg:px-10"
          contentClassName="mt-8"
          titleComponent={
            <Container className="max-w-5xl px-0">
              <div className="max-w-3xl">
                <p className="text-sm leading-relaxed text-[#98A0B3] sm:text-base">
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
