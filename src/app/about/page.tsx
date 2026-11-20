import { CTASection } from "@/components/sections/cta-section";
import { BrandShaderBackground } from "@/components/ui/brand-shader-background";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { PillBadge } from "@/components/ui/pill-badge";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionTitle } from "@/components/ui/section-title";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";
import { GrowthMap } from "@/components/sections/growth-map";

const aboutOrigin = [
  { title: "Las piezas no siempre trabajan juntas", description: "Una marca puede tener contenido, una web y contactos sin que exista una ruta clara entre la primera visita y el seguimiento comercial." },
  { title: "Cada negocio parte de un contexto distinto", description: "La prioridad puede estar en la oferta, la conversión o la forma de atender oportunidades. Por eso empezamos por entender el negocio." },
  { title: "La estrategia necesita llevarse a la práctica", description: "Según el alcance acordado, acompañamos la construcción de mensajes, activos digitales y procesos que respondan a esa prioridad." },
];

const aboutLearnings = [
  { title: "Primero entendemos el recorrido", description: "Revisamos cómo una persona conoce la marca, qué necesita para decidir y qué sucede después de entrar en contacto." },
  { title: "La oferta orienta la comunicación", description: "Una página o campaña funciona mejor cuando parte de una propuesta y una audiencia claramente definidas." },
  { title: "Cada activo necesita una función", description: "Una landing, un canal o una herramienta deben responder a un objetivo concreto dentro del recorrido comercial." },
  { title: "El seguimiento también importa", description: "Captar interés es solo una parte: el equipo necesita saber cómo atenderlo y qué aprender de cada conversación." },
];

const aboutMissionVision = [
  { title: "Nuestro trabajo hoy", description: "Acompañar a marcas a reconocer sus prioridades y conectar estrategia, ejecución digital y seguimiento según su contexto." },
  { title: "Lo que buscamos construir", description: "Una forma de trabajo que ayude a más equipos a tomar decisiones con claridad y convertirlas en acciones concretas." },
];

const aboutTraits = [
  { title: "Escuchar antes de recomendar", description: "Partimos de la información disponible y de las conversaciones con tu equipo para entender el problema." },
  { title: "Elegir una prioridad", description: "Definimos qué conviene atender primero y dejamos explícito lo que queda fuera del alcance." },
  { title: "Construir con intención", description: "Cada pieza propuesta debe tener un papel en el recorrido del cliente o en la operación del negocio." },
  { title: "Revisar lo aprendido", description: "Compartimos avances y utilizamos las señales disponibles para orientar los siguientes ajustes." },
];

const originIconPaths = [
  "M4 18h16M6 15l3-4 4 2 5-7M18 6h-4M18 6v4",
  "M5 6h5v5H5zM14 6h5v5h-5zM5 15h5v5H5zM14 15h5v5h-5zM10 8.5h2M12 17.5h2",
  "M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M5 21a7 7 0 0 1 14 0M17 10h3v6h-3z",
];

const learningIconPaths = [
  "M4 13V9l10-4v14L4 13zM18 10v4M7 13l2 6",
  "M7 4h5v5H7zM12 9h5v5h-5zM7 14h5v5H7zM17 14h3v5h-3",
  "M12 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M6 20a6 6 0 0 1 12 0M12 11v4M8.5 15h7",
  "M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13M15 15l5 5M8 10h5M10.5 7.5v5",
];

const brandStory = [
  {
    title: "Vimos negocios con potencial",
    description:
      "Marcas con buen producto, ventas reales y esfuerzo constante, pero sin crecimiento sostenido.",
  },
  {
    title: "Encontramos el mismo bloqueo",
    description:
      "La oferta, la comunicación, la tecnología y el seguimiento no estaban conectados.",
  },
  {
    title: "Construimos RiBuzz",
    description:
      "Un sistema para diagnosticar, ordenar y ejecutar lo que realmente mueve el crecimiento comercial.",
  },
];

export const metadata = createPageMetadata({
  title: "Sobre RiBuzz",
  description:
    "Conoce el enfoque de RiBuzz como growth partner digital: entender el negocio, definir prioridades y llevarlas a la práctica junto a las marcas.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section
        id="about-hero"
        className="relative -mt-[76px] flex min-h-[max(34rem,72dvh)] items-center justify-center overflow-hidden bg-[#05050A]"
      >
        <BrandShaderBackground className="z-0 opacity-75" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.035),transparent_16%),radial-gradient(circle_at_18%_28%,rgba(120,95,221,0.08),transparent_24%),radial-gradient(circle_at_80%_52%,rgba(105,57,226,0.1),transparent_30%),linear-gradient(180deg,rgba(5,5,10,0.18)_0%,rgba(5,5,10,0.04)_34%,rgba(5,5,10,0.16)_72%,rgba(5,5,10,0.56)_100%)]" />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <Container className="hero-no-select text-center">
            <div className="mx-auto max-w-[58rem]">
              <div className="mt-6 flex justify-center">
                <PillBadge>Sobre RiBuzz</PillBadge>
              </div>
              <h1 className="mx-auto mt-4 max-w-3xl font-heading text-[1.9rem] font-bold leading-[1.08] text-[#E4DFF7] [text-wrap:balance] sm:text-[2.45rem] xl:text-[3rem]">
                Un partner para conectar las decisiones con{" "}
                <span className="text-[#8b6ff0]">la acción</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-[0.92rem] leading-[1.5] text-[#D9DDE7] [text-wrap:pretty] sm:text-[1rem]">
                RiBuzz acompaña a marcas como growth partner digital: entendemos su contexto,
                enfocamos prioridades y trabajamos en las piezas que necesitan para avanzar.
              </p>

              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href={SITE_CONFIG.diagnosisPath} size="lg" variant="shimmer">
                  Completa la aplicación
                </Button>
                <Button href="/services" variant="secondary" size="lg">
                  Ver cómo trabajamos
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section id="equipo" className="scroll-mt-20 bg-[#f4f0ed] py-16 text-[#21182b] sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#6b4785]">El equipo de proyecto</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight tracking-[-.045em]">Quién responde por cada decisión.</h2>
            <p className="mt-5 leading-relaxed text-[#4f4257]">Si quieres conocer cómo podríamos trabajar con tu marca, puedes escribir directamente a RiBuzz antes de completar la aplicación.</p>
            <div className="mt-6 flex flex-wrap gap-3"><a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-[#573475] px-5 py-3 font-semibold text-white transition hover:bg-[#704997] focus-visible:outline-2 focus-visible:outline-[#573475]">Conversar por WhatsApp</a><a href={`mailto:${SITE_CONFIG.contactEmail}`} className="inline-flex rounded-full border border-[#755c82] px-5 py-3 font-semibold text-[#573475] transition hover:bg-white/60 focus-visible:outline-2 focus-visible:outline-[#573475]">Escribir por correo</a></div>
          </div>
          <dl className="divide-y divide-[#c4b8c8] border-y border-[#c4b8c8]">
            {[
              ["Estrategia", "Escucha a tu equipo, contrasta la oferta con el recorrido del cliente y propone qué resolver primero."],
              ["Diseño y ejecución", "Convierte la prioridad acordada en mensajes, pantallas y piezas que tu marca puede revisar antes de salir al público."],
              ["Seguimiento", "Acuerda contigo qué observar, revisa las señales disponibles y plantea ajustes para el siguiente ciclo."],
              ["Tu marca", "Aporta contexto, valida las decisiones comerciales y acuerda los responsables y los entregables en la propuesta."],
            ].map(([role, task]) => <div key={role} className="py-4"><dt className="font-heading text-xl font-semibold">{role}</dt><dd className="mt-1 leading-relaxed text-[#554957]">{task}</dd></div>)}
          </dl>
        </Container>
      </section>
      <GrowthMap />
      <section className="cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Origen"
            title="Las marcas necesitan claridad para decidir qué sigue"
            description="Oferta, comunicación, experiencia digital y seguimiento forman parte de una misma conversación sobre el crecimiento."
          />

          <div className="mx-auto mt-10 grid max-w-5xl gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <Card className="flex min-h-[19rem] flex-col items-center justify-center rounded-[24px] p-8 text-center">
              <AboutCardIcon path={originIconPaths[0]} />
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8b6ff0]">
                El patrón que vimos
              </p>
              <h3 className="mt-3 max-w-sm text-2xl font-semibold leading-tight text-[#E4DFF7] [text-wrap:balance]">
                {aboutOrigin[0].title}
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-[#98A0B3] [text-wrap:pretty]">
                {aboutOrigin[0].description}
              </p>
            </Card>

            <div className="grid gap-5">
              {aboutOrigin.slice(1).map((item, index) => (
                <div
                  key={item.title}
                className="rounded-xl border border-[#8d88a9]/20 bg-[#15102b]/72 p-6 shadow-[0_18px_42px_rgba(3,1,12,0.24)]"
                >
                  <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                    <AboutInlineIcon path={originIconPaths[(index + 1) % originIconPaths.length]} />
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-[#E4DFF7] [text-wrap:balance]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#98A0B3] [text-wrap:pretty] sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <SectionDivider />

      <section className="cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Historia de la marca"
            title="Una forma de trabajar que conecta los puntos"
            description="Nuestro enfoque parte de entender la marca antes de definir qué construir."
          />

          <div className="mx-auto mt-10 max-w-5xl rounded-2xl border border-[#8d88a9]/20 bg-[#15102b]/72 p-6 shadow-[0_22px_54px_rgba(3,1,12,0.28)] sm:p-8">
            <div className="grid gap-8 md:grid-cols-3">
            {brandStory.map((item, index) => (
              <div
                key={item.title}
                className="relative text-center md:text-left md:[&:not(:last-child)]:after:absolute md:[&:not(:last-child)]:after:left-[4.25rem] md:[&:not(:last-child)]:after:top-6 md:[&:not(:last-child)]:after:h-px md:[&:not(:last-child)]:after:w-[calc(100%-4.5rem)] md:[&:not(:last-child)]:after:bg-white/10"
              >
                <div className="flex justify-center md:justify-start">
                  <AboutInlineIcon path={originIconPaths[index % originIconPaths.length]} />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-[#E4DFF7] [text-wrap:balance]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#98A0B3] [text-wrap:pretty] sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
            </div>
          </div>
        </Container>
      </section>

      <SectionDivider />

      <section className="cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Lo que hemos aprendido"
            title="Miramos el recorrido completo"
            description="Antes de elegir una herramienta o un canal, buscamos entender cómo se relacionan con la oferta y la experiencia del cliente."
          />

          <div className="mx-auto mt-10 grid max-w-5xl gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <Card className="flex min-h-[22rem] flex-col items-center justify-center rounded-[24px] p-8 text-center">
              <AboutCardIcon path={learningIconPaths[0]} />
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8b6ff0]">
                Lectura principal
              </p>
              <h3 className="mt-3 max-w-sm text-2xl font-semibold leading-tight text-[#E4DFF7] [text-wrap:balance]">
                {aboutLearnings[0].title}
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-[#98A0B3] [text-wrap:pretty]">
                {aboutLearnings[0].description}
              </p>
            </Card>

            <div className="grid gap-5">
              {aboutLearnings.slice(1).map((item, index) => (
                <Card
                  key={item.title}
                  className="grid min-h-[7rem] gap-4 rounded-[24px] p-5 text-center sm:grid-cols-[4.5rem_1fr] sm:items-center sm:text-left"
                >
                  <AboutCardIcon path={learningIconPaths[(index + 1) % learningIconPaths.length]} />
                  <div>
                    <h3 className="text-base font-semibold text-[#E4DFF7] [text-wrap:balance]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#98A0B3] [text-wrap:pretty]">
                      {item.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <SectionDivider />

      <section className="cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Misión y visión"
            title="Lo que hacemos hoy y lo que queremos construir"
            description="Nuestra dirección es simple: que más empresas vendan, operen y crezcan con un sistema claro."
          />

          <div className="mx-auto mt-10 grid max-w-5xl overflow-hidden rounded-2xl border border-[#8d88a9]/20 bg-[#15102b]/72 shadow-[0_22px_54px_rgba(3,1,12,0.28)] md:grid-cols-2 md:divide-x md:divide-[#8d88a9]/20">
            {aboutMissionVision.map((item) => (
              <div key={item.title} className="border-b border-white/8 p-8 text-center last:border-b-0 md:border-b-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8b6ff0]">
                  {item.title}
                </p>
                <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[#D9DDE7] [text-wrap:pretty] sm:text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-soft cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Nuestra forma de colaborar"
            title="Lo que puedes esperar al trabajar con RiBuzz"
            description="Cuatro prácticas que orientan cómo entendemos, priorizamos y acompañamos cada proyecto."
          />

          <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2">
            {aboutTraits.map((item, index) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-white/8 bg-white/[0.025] p-7 text-center shadow-[0_18px_60px_rgba(0,0,0,0.18)]"
              >
                <span className="mx-auto flex h-8 w-fit items-center justify-center rounded-full border border-[#8b6ff0]/25 px-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8b6ff0]">
                  Principio {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-[#E4DFF7] [text-wrap:balance]">
                  {item.title}
                </h3>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-[#98A0B3] [text-wrap:pretty] sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>



      <section className="cv-auto bg-[#0c0820] py-16 sm:py-20">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Trabajo con marcas"
            title="Cada contexto pide una respuesta diferente"
            description="Nuestro portafolio reúne intervenciones en estrategia, experiencias digitales y puntos de contacto comerciales."
          />
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
            {[
              { name: "Bionda y Mora", detail: "Trabajo en la experiencia digital de una marca de calzado y marroquinería." },
              { name: "Deliche", detail: "Trabajo en la experiencia digital de una marca de alimentos." },
              { name: "Nuna Amautta", detail: "Trabajo en la experiencia digital de una marca de moda artesanal." },
            ].map((project) => (
              <article key={project.name} className="rounded-2xl border border-[#8d88a9]/20 bg-[#15102b]/72 p-7">
                <p className="text-sm font-semibold text-[#b8a4ff]">Trabajo documentado</p>
                <h3 className="mt-4 font-heading text-2xl font-semibold text-[#f7f5ff]">{project.name}</h3>
                <p className="mt-3 leading-relaxed text-[#c5bdd8]">{project.detail}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button href="/proyectos/arkos-wear" variant="secondary">Conocer el proyecto Arkos Wear</Button>
          </div>
        </Container>
      </section>

      <CTASection
        centered
        eyebrow="Siguiente paso"
        title="Diagnostiquemos tu siguiente paso"
        description="Cuéntanos sobre tu marca y revisaremos cuál puede ser el siguiente paso. Según tus respuestas, encontrarás una ruta de conversación o recursos para prepararte."
        primaryLabel="Completa la aplicación"
        primaryHref={SITE_CONFIG.diagnosisPath}
        primaryVariant="shimmer"
        secondaryLabel="Ver cómo trabajamos"
        secondaryHref="/services"
        actionsClassName="justify-center"
      />
    </>
  );
}

function AboutCardIcon({ path }: { path: string }) {
  return (
    <span className="mx-auto flex size-16 items-center justify-center text-[#8b6ff0] drop-shadow-[0_0_18px_rgba(139,111,240,0.3)]">
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" aria-hidden>
        <path
          d={path}
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function AboutInlineIcon({ path }: { path: string }) {
  return (
    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#6939E2]/10 text-[#8b6ff0] shadow-[0_0_22px_rgba(139,111,240,0.16)]">
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
        <path
          d={path}
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
