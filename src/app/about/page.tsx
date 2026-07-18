import { CTASection } from "@/components/sections/cta-section";
import { BrandShaderBackground } from "@/components/ui/brand-shader-background";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { PillBadge } from "@/components/ui/pill-badge";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionTitle } from "@/components/ui/section-title";
import {
  aboutLearnings,
  aboutMissionVision,
  aboutOrigin,
  aboutTraits,
} from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

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
    "RiBuzz construye sistemas de crecimiento comercial para mejorar las ventas y la estructura de empresas en validación o crecimiento.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section
        id="about-hero"
        className="relative -mt-[76px] flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[#05050A]"
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
                Nacimos para que crecer no dependa de{" "}
                <span className="text-[#8b6ff0]">improvisar</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-[0.92rem] leading-[1.5] text-[#D9DDE7] [text-wrap:pretty] sm:text-[1rem]">
                Ayudamos a convertir ventas sueltas en un sistema claro: oferta, comunicación,
                activos, tecnología y seguimiento trabajando juntos.
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

      <section className="cv-auto py-16 sm:py-20">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Origen"
            title="Empresas con potencial, pero sin sistema para vender mejor"
            description="No siempre falta producto o esfuerzo. Muchas veces falta una forma clara de conseguir clientes, convertir y dar seguimiento."
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
                  className="rounded-[24px] border border-white/8 bg-white/[0.025] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.18)]"
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
            title="De una observación a un sistema"
            description="RiBuzz nace al ver que muchas empresas no necesitaban más ruido, sino una estructura comercial más clara."
          />

          <div className="mx-auto mt-10 max-w-5xl rounded-[28px] border border-white/8 bg-white/[0.025] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.2)] sm:p-8">
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
            title="El problema casi nunca es una pieza aislada"
            description="El crecimiento se frena cuando oferta, comunicación, activos, tecnología y seguimiento operan por separado."
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

          <div className="mx-auto mt-10 grid max-w-5xl overflow-hidden rounded-[28px] border border-white/8 bg-white/[0.025] shadow-[0_22px_70px_rgba(0,0,0,0.22)] md:grid-cols-2 md:divide-x md:divide-white/8">
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
            eyebrow="Valores"
            title="Cómo tomamos decisiones"
            description="Nuestros valores se ven en la forma de diagnosticar, recomendar, ejecutar y acompañar."
          />

          <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2">
            {aboutTraits.map((item, index) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-white/8 bg-white/[0.025] p-7 text-center shadow-[0_18px_60px_rgba(0,0,0,0.18)]"
              >
                <span className="mx-auto flex h-8 w-fit items-center justify-center rounded-full border border-[#8b6ff0]/25 px-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8b6ff0]">
                  Valor {String(index + 1).padStart(2, "0")}
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

      <CTASection
        centered
        eyebrow="Siguiente paso"
        title="Diagnostiquemos tu siguiente paso"
        description="Completa la aplicación. Ubicamos tu etapa, el bloqueo principal y la ruta correcta para avanzar."
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
