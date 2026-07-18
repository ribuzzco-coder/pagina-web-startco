import { CTASection } from "@/components/sections/cta-section";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { OfferPaymentModel } from "@/components/sections/offer-payment-model";
import { PhaseStepper } from "@/components/sections/phase-stepper";
import { ServicesSystemHero } from "@/components/sections/services-system-hero";
import { StageTabs } from "@/components/sections/stage-tabs";
import { TestimonialShuffle } from "@/components/sections/testimonial-shuffle";
import { Container } from "@/components/ui/container";
import { InfoGrid } from "@/components/ui/info-grid";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionTitle } from "@/components/ui/section-title";
import {
  homeFaqs,
  methodologySteps,
  offerLogicIntro,
  offerLogicStageNote,
  offerLogicTracks,
  offerPackages,
  paymentModelParts,
  punctualSolutionAreas,
  punctualSolutionModels,
  punctualSolutionsCaveat,
  punctualSolutionsIntro,
} from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";
import { BoxVisual } from "@/components/ui/gift-box-visual";

export const metadata = createPageMetadata({
  title: "Cómo trabajamos",
  description:
    "RiBuzz adapta su oferta al contexto, etapa, objetivos y tareas que necesita cada marca para mover su sistema comercial.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      {/* Atención: hook + promesa para quien todavía no conoce a RiBuzz */}
      <ServicesSystemHero
        primaryCtaHref={SITE_CONFIG.diagnosisPath}
        secondaryCtaHref="#etapas"
      />

      {/* Decisión temprana: primero aclaramos qué compra el usuario según su etapa */}
      <section className="cv-auto py-16 sm:py-20" id="etapas">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="1 · Punto de entrada"
            title="Entras por la etapa en la que está tu negocio"
            description="Diagnosticamos la etapa, los objetivos de la marca y las tareas que realmente corresponden. Desde ahí armamos una oferta ajustada al momento del negocio."
          />

          <div className="mt-10">
            <StageTabs packages={offerPackages} />
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* Lógica de la oferta: por qué el alcance cambia de un paquete a otro */}
      <section className="cv-auto py-16 sm:py-20" id="alcance">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="2 · Cómo se decide el alcance"
            title="Tu objetivo define el alcance. Tu etapa define la intensidad."
            description={offerLogicIntro}
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {offerLogicTracks.map((track, index) => (
              <div
                key={track.title}
                className="rounded-[20px] border border-white/8 bg-white/[0.02] p-6"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8b6ff0]">
                  {String(index + 1).padStart(2, "0")} · {track.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#98A0B3]">{track.description}</p>
                <ul className="mt-4 space-y-2.5 text-sm text-[#CEC6E0]">
                  {track.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6939E2]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-[#98A0B3]">
            {offerLogicStageNote}
          </p>
        </Container>
      </section>

      <SectionDivider />

      {/* Interés: cómo funciona por dentro, en suficiente detalle para generar deseo informado */}
      <section className="cv-auto py-16 sm:py-20" id="como-lo-hacemos">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="3 · Cómo se ejecuta"
            title="Cuatro fases para convertir claridad en avance"
            description="Diagnosticamos, diseñamos, implementamos y acompañamos con una secuencia clara. Así cada pieza que se construye tiene función, responsable y forma de medirse."
          />

          <div className="mt-10">
            <PhaseStepper steps={methodologySteps} />
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* Alternativa: cuando el diagnóstico muestra que no hace falta el sistema completo */}
      <section className="cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="4 · Cuando no necesitas todo"
            title="Resolvemos la pieza exacta que frena el avance"
            description={punctualSolutionsIntro}
          />

          <InfoGrid className="mt-10 sm:grid-cols-2 lg:grid-cols-4">
            {punctualSolutionAreas.map((item) => (
              <div
                key={item.title}
                className="rounded-[20px] border border-white/8 bg-white/[0.02] p-6 text-center"
              >
                <p className="text-sm font-semibold text-[#E4DFF7]">{item.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#98A0B3] [text-wrap:pretty]">
                  {item.description}
                </p>
              </div>
            ))}
          </InfoGrid>

          <div className="mx-auto mt-10 grid max-w-3xl gap-6 border-t border-white/8 pt-10 sm:grid-cols-2">
            {punctualSolutionModels.map((item) => (
              <div key={item.title} className="text-center">
                <p className="text-sm font-semibold text-[#E4DFF7]">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#98A0B3]">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-[#98A0B3]">
            {punctualSolutionsCaveat}
          </p>
        </Container>
      </section>

      <section className="section-soft cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="5 · Oferta"
            title="La propuesta queda clara después del diagnóstico"
            description="No necesitas adivinar el paquete correcto. Primero entendemos tu etapa, objetivo y alcance; después definimos qué incluye, cómo se trabaja y qué inversión corresponde."
          />

          <div className="mt-10">
            <OfferPaymentModel parts={paymentModelParts} ctaHref={SITE_CONFIG.diagnosisPath} />
          </div>
        </Container>
      </section>

      <SectionDivider />

      <TestimonialShuffle />

      <SectionDivider />

      {/* Manejo de objeciones justo antes del cierre */}
      <section className="cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="FAQ rápido"
            title="Preguntas frecuentes antes de avanzar"
            description="Respuestas directas sobre oferta, alcance, riesgo, tiempos y forma de trabajo antes de tomar una decisión."
          />

          <div className="mx-auto mt-8 max-w-4xl">
            <FAQAccordion items={homeFaqs} />
          </div>
        </Container>
      </section>

      {/* Acción: el cierre real del embudo */}
      <CTASection
        actionsAtBottom
        eyebrow="Siguiente paso"
        title="Cuéntanos tu momento y ve cuál es el siguiente paso correcto"
        description="Completa una aplicación breve. La aplicación clasifica tu ruta y abre el siguiente paso correcto: llamada de introducción, preparación con recursos o seguimiento por contenido."
        primaryLabel="Completa la aplicación"
        primaryHref={SITE_CONFIG.diagnosisPath}
        primaryVariant="shimmer"
        secondaryLabel="Leer recursos gratis"
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
