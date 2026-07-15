import { CTASection } from "@/components/sections/cta-section";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { PhaseTabs } from "@/components/sections/phase-tabs";
import { ServicesSystemHero } from "@/components/sections/services-system-hero";
import { StageTabs } from "@/components/sections/stage-tabs";
import { TestimonialShuffle } from "@/components/sections/testimonial-shuffle";
import { Container } from "@/components/ui/container";
import { NumberedCard } from "@/components/ui/numbered-card";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionTitle } from "@/components/ui/section-title";
import {
  differentiators,
  howWeWorkFaqs,
  methodologySteps,
  offerPackages,
  trustSignals,
} from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";
import { BoxVisual } from "@/components/ui/gift-box-visual";

export const metadata = createPageMetadata({
  title: "Cómo trabajamos",
  description:
    "RiBuzz adapta su oferta a la etapa de tu empresa: estrategia, ejecución comercial, tecnología y adquisición pagada, con retainer mensual y fee por cumplimiento de hitos.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      {/* Atención: hook + promesa para quien todavía no conoce a RiBuzz */}
      <ServicesSystemHero
        primaryCtaHref={SITE_CONFIG.diagnosisPath}
        secondaryCtaHref="#como-lo-hacemos"
      />

      {/* Confianza: prueba antes de pedir nada */}
      <section className="cv-auto pb-16 sm:pb-20">
        <Container>
          <SectionTitle
            eyebrow="Prueba, no promesas"
            title="Esto ya está pasando con clientes reales"
            description="No partimos de cero: ya hay trabajo activo, resultados medibles y contextos distintos donde el sistema se ha puesto a prueba."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {trustSignals.map((item, index) => (
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

      <TestimonialShuffle />

      <SectionDivider />

      {/* Confianza: contraste directo con la categoría "agencia" */}
      <section className="section-soft cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            align="left"
            eyebrow="Diferencial"
            title="Descubre cómo activar tu crecimiento"
            description="No somos una agencia más, somos la pieza que une estrategia y ejecución para que tu sistema comercial deje de ser una carga y se convierta en tu mayor ventaja competitiva."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {differentiators.map((item, index) => (
              <NumberedCard key={item} index={index + 1} description={item} />
            ))}
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* Interés: cómo funciona por dentro, en suficiente detalle para generar deseo informado */}
      <section className="cv-auto py-16 sm:py-20" id="como-lo-hacemos">
        <Container>
          <SectionTitle
            align="left"
            eyebrow="Cómo lo hacemos"
            title="Cuatro fases, siempre en el mismo orden"
            description="No se ejecuta sin diagnóstico y no se diseña algo que luego no pueda operar. Así se recorre cada proyecto, sin importar la etapa en la que entres."
          />

          <div className="mt-10">
            <PhaseTabs steps={methodologySteps} />
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* Decisión: ahora sí, la oferta concreta */}
      <section className="cv-auto pb-16 sm:pb-20">
        <Container>
          <SectionTitle
            eyebrow="¿En qué etapa está tu empresa?"
            title="Un paquete por etapa, no una cotización distinta cada vez"
            description="Encuentra el que corresponde al momento de tu empresa. Cada uno tiene alcance fijo y se cobra con retainer mensual — el precio exacto se define en la llamada de introducción."
          />

          <div className="mt-10">
            <StageTabs
              packages={offerPackages}
              ctaHref={SITE_CONFIG.diagnosisPath}
              ctaLabel="Agenda tu llamada de introducción"
            />
          </div>
        </Container>
      </section>

      <section className="cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            align="left"
            eyebrow="Modelo de inversión"
            title="No cobramos por publicar, cobramos por mover el número que te importa"
            description="Cada paquete se cobra con un retainer mensual fijo, que cubre la capacidad instalada. A partir de la etapa de Incubación, se suma un fee por cumplimiento de hitos de negocio — definidos contigo antes de empezar, nunca a mitad de camino."
          />
        </Container>
      </section>

      <SectionDivider />

      {/* Manejo de objeciones justo antes del cierre */}
      <section className="cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow="Antes de agendar"
            title="Preguntas frecuentes sobre cómo trabajamos"
            description="Las respuestas más directas a lo que normalmente se pregunta antes de la llamada."
          />

          <div className="mt-8 max-w-4xl">
            <FAQAccordion items={howWeWorkFaqs} />
          </div>
        </Container>
      </section>

      {/* Acción: el cierre real del embudo */}
      <CTASection
        actionsAtBottom
        eyebrow="Siguiente paso"
        title="Cuéntanos tu momento y agenda tu llamada de introducción"
        description="Es una conversación corta, sin costo, para confirmar si hay fit real antes de proponer cualquier paquete. Si prefieres explorar primero, reclama uno de nuestros recursos gratuitos."
        primaryLabel="Agenda tu llamada de introducción"
        primaryHref={SITE_CONFIG.diagnosisPath}
        primaryVariant="shimmer"
        secondaryLabel="Reclama tu regalo"
        secondaryHref="/regalos"
        rightElement={
          <div className="opacity-80 drop-shadow-[0_0_15px_rgba(105,57,226,0.15)]">
            <BoxVisual isUnlocked={false} className="scale-90" />
          </div>
        }
      />
    </>
  );
}
