import { CTASection } from "@/components/sections/cta-section";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { StepCard } from "@/components/sections/step-card";
import { TestimonialShuffle } from "@/components/sections/testimonial-shuffle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { PillBadge } from "@/components/ui/pill-badge";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionTitle } from "@/components/ui/section-title";
import {
  contactFaqs,
  fitChecklist,
  homePainPoints,
  methodologySteps,
  nonFitChecklist,
  servicePreview,
  solutionSequence,
  trustSignals,
} from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Inicio",
  description:
    "RiBuzz diseña e implementa sistemas comerciales para empresas que ya venden, pero todavía no crecen con estructura, seguimiento y consistencia.",
  path: "/",
});

const heroHighlights = [
  "Detectamos el cuello de botella.",
  "Priorizamos antes de ejecutar.",
  "Definimos si hay fit real.",
] as const;

const homeQuickFaqs = contactFaqs.slice(0, 4);

export default function HomePage() {
  return (
    <>
      <section className="pb-18 pt-16 sm:pb-22 sm:pt-24">
        <Container className="grid gap-10 xl:grid-cols-[1fr_0.96fr] xl:items-start">
          <div className="max-w-[46rem]">
            <PillBadge>Diseño e implementación de sistemas comerciales</PillBadge>
            <h1 className="mt-6 max-w-3xl font-sans text-3xl font-bold leading-[1.08] text-[#F5F7FA] sm:text-[3.2rem] xl:text-[3.05rem]">
              Si ya vendes, pero no creces con consistencia, te falta sistema comercial.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#98A0B3] sm:text-base">
              RiBuzz ordena captacion, conversion y seguimiento para negocios que
              ya estan en marcha, pero todavia dependen demasiado de la intuicion.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={SITE_CONFIG.diagnosisPath} size="lg">
                {SITE_CONFIG.diagnosisCtaLabel}
              </Button>
              <Button
                href={SITE_CONFIG.whatsappUrl}
                variant="secondary"
                size="lg"
                external
              >
                Escribir por WhatsApp
              </Button>
            </div>
            <p className="mt-4 max-w-xl text-xs leading-relaxed text-[#98A0B3] sm:text-sm">
              {SITE_CONFIG.diagnosisSupportCopy}
            </p>

            <div className="mt-8 grid gap-4 border-t border-white/8 pt-6 sm:grid-cols-3">
              {heroHighlights.map((item, index) => (
                <div key={item} className="border-l border-white/8 pl-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
                    0{index + 1}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-[#C7CBD6] sm:text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="xl:ml-auto xl:max-w-[560px] xl:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#98A0B3]">
              Entrada recomendada
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F5F7FA]">
              Diagnostico del sistema comercial
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
              Antes de ejecutar, hacemos visible donde se esta rompiendo el proceso
              comercial y que conviene mover primero.
            </p>

            <div className="mt-6 space-y-4 border-t border-white/8 pt-6">
              {solutionSequence.slice(0, 3).map((item) => (
                <div key={item.title} className="border-l border-white/8 pl-4">
                  <h3 className="text-base font-semibold text-[#F5F7FA]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#98A0B3]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-white/8 pt-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B8EAF0]">
                Diagnostico gratuito
              </p>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#D8F9FC]">
                Completa el diagnostico inicial, te toma menos de 10 minutos y
                recibes una lectura base sobre los principales puntos de friccion
                de tu sistema comercial.
              </p>
              <Button href={SITE_CONFIG.diagnosisPath} className="mt-5" size="md">
                Abrir diagnostico gratuito
              </Button>
            </div>
          </Card>
        </Container>
      </section>

      <section className="section-soft cv-auto py-18 sm:py-22" id="problemas">
        <Container>
          <SectionTitle
            eyebrow="Lo que suele estar pasando"
            title="El problema no siempre es vender mas. Es vender con un sistema debil."
            description="Estos son los sintomas mas comunes cuando no hay estructura comercial clara."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {homePainPoints.map((pain) => (
              <Card key={pain.title} className="rounded-[24px] p-5">
                <h3 className="text-lg font-semibold tracking-tight text-[#F5F7FA]">
                  {pain.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#98A0B3]">
                  {pain.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <SectionDivider />

      <section className="cv-auto py-18 sm:py-22" id="solucion">
        <Container>
            <SectionTitle
            eyebrow="La solucion RiBuzz"
            title="No entramos a ejecutar piezas sueltas. Intervenimos el sistema comercial."
            description="Entender, diagnosticar, estructurar, implementar y acompañar."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {solutionSequence.slice(1).map((item) => (
              <Card key={item.title} className="rounded-[24px] p-5">
                <h3 className="text-lg font-semibold tracking-tight text-[#F5F7FA]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#98A0B3]">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="cv-auto py-18 sm:py-22">
        <Container className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-[28px] p-7 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
              Para quien si es
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F5F7FA]">
              Empresas que ya venden y necesitan ordenar como crecen.
            </h2>
            <ul className="mt-6 space-y-3 border-t border-white/8 pt-6 text-sm text-[#98A0B3] sm:text-base">
              {fitChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0FEFFD]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="rounded-[28px] p-7 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
              Para quien no es
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F5F7FA]">
              No es para negocios que solo quieren mas marketing sin revisar el fondo.
            </h2>
            <ul className="mt-6 space-y-3 border-t border-white/8 pt-6 text-sm text-[#98A0B3] sm:text-base">
              {nonFitChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E625FF]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Container>
      </section>

      <CTASection
        title="Descubre donde se esta rompiendo tu crecimiento comercial."
        description="Te toma menos de 10 minutos. Recibes una lectura inicial y primero revisamos si hay fit."
        primaryLabel="Solicita tu diagnostico gratuito"
        primaryHref={SITE_CONFIG.diagnosisPath}
        secondaryLabel="Escribir por WhatsApp"
        secondaryHref={SITE_CONFIG.whatsappUrl}
        secondaryExternal
      />

      <SectionDivider />

      <section className="cv-auto py-18 sm:py-22" id="services">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Capas de intervencion"
            title="Tres formas de intervenir un mismo sistema comercial"
            description="Tres capas para pasar de claridad a ejecucion."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {servicePreview.map((service, index) => (
              <Card key={service.title} className="rounded-[26px] p-6 sm:p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
                  Capa 0{index + 1}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#F5F7FA]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#C7CBD6] sm:text-base">
                  {service.description}
                </p>
                <p className="mt-5 border-t border-white/8 pt-5 text-sm text-[#98A0B3] sm:text-base">
                  <span className="text-[#F5F7FA]">Para quien es:</span> {service.idealClient}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                  <span className="text-[#F5F7FA]">Resultado:</span> {service.expectedResult}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-9 flex justify-center">
            <Button href="/services" variant="secondary" size="lg">
              Ver servicios y capas completas
            </Button>
          </div>
        </Container>
      </section>

      <section className="section-soft cv-auto py-18 sm:py-22">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Respaldo"
            title="Confianza honesta, sin inflar cifras ni inventar credenciales"
            description="Experiencia aplicada y trabajo real en marcha."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {trustSignals.map((signal) => (
              <Card key={signal.title} className="rounded-[24px] p-6">
                <h3 className="text-lg font-semibold tracking-tight text-[#F5F7FA]">
                  {signal.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                  {signal.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="cv-auto py-18 sm:py-22">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Como trabajamos"
            title="Diagnostico primero. Implementación después."
            description="Primero claridad. Luego ejecucion."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {methodologySteps.map((step, index) => (
              <StepCard
                key={step.title}
                index={index + 1}
                title={step.title}
                description={step.description}
                points={step.points}
                outcome={step.outcome}
              />
            ))}
          </div>

          <div className="mt-9 flex justify-center">
            <Button href="/methodology" variant="secondary" size="lg">
              Ver metodologia completa
            </Button>
          </div>
        </Container>
      </section>

      <section className="cv-auto py-18 sm:py-22">
        <Container>
          <SectionTitle
            eyebrow="FAQ rapido"
            title="Preguntas frecuentes antes de solicitar diagnostico"
            description="Respuestas breves antes de aplicar."
          />

          <div className="mt-8 max-w-4xl">
            <FAQAccordion items={homeQuickFaqs} />
          </div>

          <div className="mt-7 flex">
            <Button href="/contact" variant="secondary">
              Ver contacto y FAQ completa
            </Button>
          </div>
          <div className="mt-3 flex">
            <Button href={SITE_CONFIG.diagnosisPath} size="lg">
              Solicita tu diagnostico gratuito
            </Button>
          </div>
        </Container>
      </section>

      <CTASection
        title="Antes de ejecutar mas, conviene entender donde se esta rompiendo tu sistema comercial."
        description="Completa el diagnostico en menos de 10 minutos y revisamos si hay una oportunidad real de intervencion."
        primaryLabel="Solicita tu diagnostico gratuito"
        primaryHref={SITE_CONFIG.diagnosisPath}
        secondaryLabel="Escribir por WhatsApp"
        secondaryHref={SITE_CONFIG.whatsappUrl}
        secondaryExternal
      />

      <TestimonialShuffle />
    </>
  );
}
