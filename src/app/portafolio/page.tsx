import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { PlaybookGallery } from "@/components/portfolio/playbook-gallery";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionTitle } from "@/components/ui/section-title";
import { createPageMetadata } from "@/lib/metadata";
import {
  portfolioCases,
  portfolioClosingReasons,
  portfolioClosingSteps,
  portfolioEntryModel,
  portfolioGrowthLayers,
  portfolioMarketingServices,
  portfolioModelSteps,
  portfolioOperationalProof,
  portfolioProblemSymptoms,
  portfolioSystemFlow,
  portfolioTechnologyServices,
} from "@/lib/portfolio-content";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Portafolio Comercial RiBuzz",
  description:
    "RiBuzz diseña el sistema comercial, implementa marketing y tecnología, y acompaña la ejecución para que una empresa crezca con más claridad, control y consistencia.",
  path: "/portafolio",
});

function Checklist({
  items,
  tone = "purple",
}: {
  items: readonly string[];
  tone?: "purple" | "cyan";
}) {
  const accentClass = tone === "purple" ? "bg-[#E625FF]" : "bg-[#0FEFFD]";
  const surfaceClass =
    tone === "purple"
      ? "border-[#E625FF]/14 bg-[#120C18]/72"
      : "border-[#0FEFFD]/14 bg-[#0C1518]/72";

  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className={`flex gap-3 rounded-2xl border px-4 py-3 text-sm leading-relaxed text-[#C7CBD6] sm:text-base ${surfaceClass}`}
        >
          <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${accentClass}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-16 sm:pb-20 sm:pt-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#E625FF]/10 blur-3xl" />
          <div className="absolute right-[-10%] top-[16%] h-[26rem] w-[26rem] rounded-full bg-[#0FEFFD]/8 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_30%),linear-gradient(180deg,rgba(11,11,16,0.06),rgba(11,11,16,0.4)_56%,rgba(11,11,16,0.85))]" />
        </div>

        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div>
              <h1 className="max-w-4xl font-heading text-[2rem] font-semibold leading-[0.95] tracking-[-0.04em] text-[#F5F7FA] sm:text-[2.8rem] xl:text-[3.9rem]">
                Muchas empresas no fracasan por falta de esfuerzo. Fracasan por
                falta de sistema.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#C7CBD6] sm:text-lg">
                RiBuzz nació para corregir eso. Diseñamos el sistema comercial,
                implementamos marketing y tecnología, y acompañamos la ejecución
                para que una empresa deje de vender por intuición y empiece a
                crecer con más claridad, más control y más consistencia.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href={SITE_CONFIG.diagnosisPath} size="lg">
                  Solicitar diagnóstico
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
            </div>

            <div className="grid gap-4">
              {portfolioSystemFlow.map((item, index) => (
                <Card
                  key={item.title}
                  glowTone={index % 2 === 0 ? "purple" : "cyan"}
                  className="rounded-[24px] px-5 py-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#0FEFFD]/18 bg-[#0C1518] text-sm font-semibold text-[#A6FAFF]">
                      0{index + 1}
                    </span>
                    <h2 className="text-xl font-semibold text-[#F5F7FA]">
                      {item.title}
                    </h2>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <SectionDivider />

      <section className="section-soft cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow="Página 2 · El problema que resolvemos"
            title="Muchas empresas no se rompen porque no trabajen, sino porque operan con un sistema comercial débil, incompleto o desordenado."
            description="En Colombia, 66,5 % de las empresas no logra sobrevivir más de cinco años. RiBuzz nace leyendo esa realidad desde una tesis concreta: el esfuerzo no se convierte en ingresos sostenibles cuando el sistema comercial está roto."
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <Card className="rounded-[28px] p-6 sm:p-7">
              <p className="text-base leading-relaxed text-[#C7CBD6] sm:text-lg">
                Cuando eso pasa, aparecen síntomas muy repetidos. No hablamos de
                hacer marketing porque sí ni de meter tecnología por moda.
                Hablamos de ordenar el proceso completo que conecta oferta,
                mensaje, canal, seguimiento y ejecución.
              </p>
              <p className="mt-5 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                Por eso RiBuzz no entra a resolver una tarea aislada. Entra a
                intervenir lo que está roto en el sistema comercial para que el
                esfuerzo del negocio sí pueda convertirse en ingresos más
                sostenibles.
              </p>
            </Card>

            <Card className="rounded-[28px] p-6 sm:p-7" glowTone="cyan">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A6FAFF]">
                Síntomas repetidos
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#F5F7FA]">
                Así se ve un sistema comercial débil.
              </h3>
              <div className="mt-6">
                <Checklist items={portfolioProblemSymptoms} tone="cyan" />
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow="Página 3 · Qué es RiBuzz y qué hace"
            title="RiBuzz es un sistema de crecimiento comercial para empresas que necesitan dejar de crecer a ciegas."
            description="Ayudamos a una empresa a ordenar cómo atrae clientes, cómo convierte oportunidades, cómo hace seguimiento y cómo sostiene ingresos. Lo hacemos a través de diagnóstico, diseño del sistema comercial, implementación de soluciones y acompañamiento como growth partner."
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {portfolioGrowthLayers.map((item, index) => (
              <Card
                key={item.title}
                glowTone={index % 2 === 0 ? "purple" : "cyan"}
                className="rounded-[28px] p-6 sm:p-7"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
                  Capa 0{index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#F5F7FA]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <SectionDivider />

      <section className="section-soft cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow="Página 4 · Cómo trabajamos"
            title="Nuestro modelo sigue una secuencia clara: claridad, estructura, implementación y crecimiento acompañado."
            description="Todo parte del diagnóstico. No proponemos antes de entender. No ejecutamos por ejecutar."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {portfolioModelSteps.map((item, index) => (
              <Card
                key={item.title}
                glowTone={index % 2 === 0 ? "purple" : "cyan"}
                className="rounded-[24px] p-6"
              >
                <p className="font-heading text-[2rem] font-semibold leading-none text-[#F5F7FA]">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-[#F5F7FA]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                  {item.description}
                </p>
              </Card>
            ))}

            <Card className="rounded-[28px] p-6 sm:p-7 lg:col-span-2 lg:h-full">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
                Entrada natural al modelo
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#F5F7FA]">
                {portfolioEntryModel.price}
              </h3>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-[#A6FAFF]">
                {portfolioEntryModel.title}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                {portfolioEntryModel.description}
              </p>
            </Card>

            <Card className="rounded-[28px] p-6 sm:p-7 lg:col-span-2 lg:h-full" glowTone="cyan">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A6FAFF]">
                Continuidad del modelo
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#F5F7FA]">
                Implementación puntual o acompañamiento variable.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                {portfolioEntryModel.continuity}
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow="Página 5 · Qué también ejecuta RiBuzz"
            title="RiBuzz sí presta servicios de marketing y tecnología, pero dentro de una lógica de sistema."
            description="Eso evita que el cliente vea a RiBuzz solo como consultoría. RiBuzz diseña, pero también implementa."
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            <Card className="rounded-[28px] p-6 sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
                Marketing
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#F5F7FA]">
                Activos orientados a conversión y venta.
              </h3>
              <div className="mt-6">
                <Checklist items={portfolioMarketingServices} />
              </div>
            </Card>

            <Card className="rounded-[28px] p-6 sm:p-7" glowTone="cyan">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A6FAFF]">
                Tecnología
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#F5F7FA]">
                Infraestructura ligera o robusta según el flujo.
              </h3>
              <div className="mt-6">
                <Checklist items={portfolioTechnologyServices} tone="cyan" />
              </div>
            </Card>
          </div>

          <Card className="mt-6 rounded-[28px] p-6 sm:p-7">
            <p className="text-sm leading-relaxed text-[#C7CBD6] sm:text-base">
              RiBuzz no reemplaza la función comercial interna del negocio.
              Diseña el sistema, implementa herramientas y acompaña la operación,
              pero no entra a sustituir producto, agencia ni equipo comercial
              donde ya existe una estructura que debe integrarse y no duplicarse.
            </p>
          </Card>
        </Container>
      </section>

      <SectionDivider />

      <section className="section-soft cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow="Página 6 · Evidencia y casos ejecutados"
            title="RiBuzz no parte de una hipótesis pura. Ya registra validación comercial activa con clientes cerrados y casos reales."
            description="Eso valida intervención en servicios, educación digital, construcción, B2B y activaciones comerciales con captura de datos."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {portfolioCases.map((item, index) => (
              <Card
                key={item.name}
                glowTone={index % 2 === 0 ? "purple" : "cyan"}
                className={`rounded-[28px] p-6 sm:p-7 ${
                  index === portfolioCases.length - 1
                    ? "md:col-span-2 md:mx-auto md:max-w-[42rem]"
                    : ""
                }`}
              >
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-[#E625FF]/18 bg-[#170F1C] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#F6C6FF]">
                    {item.sector}
                  </span>
                  <span className="rounded-full border border-[#0FEFFD]/18 bg-[#0C1518] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#A6FAFF]">
                    {item.status}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#F5F7FA]">
                  {item.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#C7CBD6] sm:text-base">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#98A0B3]">
              Flujo operativo
            </p>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <Card className="mt-6 rounded-[28px] p-6 sm:mx-auto sm:max-w-[46rem] sm:p-7" glowTone="cyan">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A6FAFF]">
              Prueba de concepto operativa
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#F5F7FA]">
              {portfolioOperationalProof.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
              {portfolioOperationalProof.description}
            </p>

            <PlaybookGallery />
          </Card>
        </Container>
      </section>

      <SectionDivider />

      <section className="cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow="Página 7 · Por qué RiBuzz y cómo entrar"
            title="RiBuzz no vende una consultoría que termina en un PDF. Trabaja sobre el sistema completo."
            description="Esa es la diferencia frente a quienes se quedan solo en estrategia, solo en piezas o solo en herramientas."
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <Card className="rounded-[28px] p-6 sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
                Por qué RiBuzz
              </p>
              <div className="mt-5">
                <Checklist items={portfolioClosingReasons} />
              </div>
            </Card>

            <Card className="rounded-[28px] p-6 sm:p-7" glowTone="cyan">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A6FAFF]">
                Cómo entrar
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#F5F7FA]">
                {portfolioEntryModel.price}
              </h3>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-[#A6FAFF]">
                Primera fase de diagnóstico y diseño del sistema comercial
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
                Desde ahí, el negocio decide si continúa con implementación
                puntual, acompañamiento o una combinación de ambos.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#C7CBD6] sm:text-base">
                Esa fue también la lógica aterrizada en la propuesta de Selah: un
                piloto de diseño del motor de adquisición de oferta, sin
                reemplazar el frente actual de demanda ni el equipo existente.
              </p>
            </Card>
          </div>

          <div className="relative mt-8 overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(21,24,36,0.96),rgba(14,16,24,0.92))] px-6 py-10 text-center sm:px-10 sm:py-14">
            <div
              className="pointer-events-none absolute left-[-4%] top-6 h-28 w-28 rounded-full bg-[#E625FF]/18 blur-3xl"
              style={{ animation: "float 7s ease-in-out infinite" }}
            />
            <div
              className="pointer-events-none absolute right-[4%] top-10 h-24 w-24 rounded-full bg-[#0FEFFD]/14 blur-3xl"
              style={{ animation: "float 8.5s ease-in-out infinite", animationDelay: "0.8s" }}
            />
            <div
              className="pointer-events-none absolute bottom-[-1.5rem] left-1/2 h-36 w-36 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(230,37,255,0.16),rgba(15,239,253,0.08)_45%,transparent_72%)] blur-2xl"
              style={{ animation: "float 9s ease-in-out infinite", animationDelay: "1.2s" }}
            />
            <div className="mx-auto max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
                Siguiente paso
              </p>
              <h2 className="mt-4 font-heading text-[2rem] font-semibold leading-[1.02] tracking-[-0.04em] text-[#F5F7FA] sm:text-[3rem]">
                Si quieres, vemos tu sistema comercial y te mostramos por dónde empezar.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#98A0B3] sm:text-lg">
                Podemos revisar tu contexto, detectar el cuello de botella y enseñarte
                cómo se vería un flujo más claro para adquisición, seguimiento y venta.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {portfolioClosingSteps.map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-2xl border px-4 py-4 text-base leading-relaxed sm:text-lg ${
                      index === 1
                        ? "border-[#0FEFFD]/18 bg-[#0C1518]/70 text-[#A6FAFF]"
                        : "border-white/10 bg-white/[0.03] text-[#C7CBD6]"
                    }`}
                    style={{
                      animation: "reward-reveal 680ms cubic-bezier(0.22, 1, 0.36, 1) both",
                      animationDelay: `${index * 120}ms`,
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href={SITE_CONFIG.diagnosisPath} size="lg">
                  Solicitar revisión del sistema
                </Button>
                <Button
                  href={SITE_CONFIG.whatsappUrl}
                  variant="secondary"
                  size="lg"
                  external
                >
                  Pedir ejemplo por WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
