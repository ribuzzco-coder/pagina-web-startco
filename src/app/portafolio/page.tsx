import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";
import {
  portfolioAskItems,
  portfolioBusinessModel,
  portfolioCases,
  portfolioIcebergRoot,
  portfolioIcebergVisible,
  portfolioImplementationAreas,
  portfolioMarketGap,
  portfolioMarketNeeds,
  portfolioOperatingRoute,
  portfolioProblemSymptoms,
  portfolioSystemBlocks,
  portfolioThesisFlow,
  portfolioVisionSteps,
} from "@/lib/portfolio-content";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Pitch Deck RiBuzz",
  description:
    "RiBuzz es el sistema de crecimiento comercial para empresas que ya venden, pero no crecen con estructura.",
  path: "/portafolio",
});

const eyebrowClass =
  "text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#CEC6E0]";
const titleClass =
  "max-w-4xl font-heading text-[2rem] font-semibold leading-[1.02] tracking-[-0.035em] text-[#E4DFF7] sm:text-[3rem] lg:text-[3.35rem]";
const textClass = "max-w-2xl text-sm font-medium leading-relaxed text-[#B8C0D4] sm:text-base";
const darkPanel =
  "border border-white/10 bg-[linear-gradient(180deg,rgba(25,27,39,0.92),rgba(13,15,23,0.96))] shadow-[0_24px_70px_rgba(0,0,0,0.32)]";

function Slide({
  number,
  eyebrow,
  title,
  message,
  children,
  className = "",
  fullWidth = false,
}: {
  number: string;
  eyebrow: string;
  title: string;
  message?: string;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}) {
  return (
    <section className={`py-8 sm:py-10 ${className}`}>
      <Container className="max-w-[19.5rem] px-0 sm:max-w-6xl sm:px-8 lg:px-10">
        <div className={`${darkPanel} overflow-hidden rounded-[26px] p-5 sm:p-8 lg:p-10`}>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <p className={eyebrowClass}>{eyebrow}</p>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold text-[#98A0B3]">
              {number}/14
            </span>
          </div>
          {fullWidth ? (
            <>
              <div>
                <h2 className={titleClass}>{title}</h2>
                {message ? <p className={`${textClass} mt-5`}>{message}</p> : null}
              </div>
              <div className="mt-8 min-w-0">{children}</div>
            </>
          ) : (
            <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
              <div>
                <h2 className={titleClass}>{title}</h2>
                {message ? <p className={`${textClass} mt-5`}>{message}</p> : null}
              </div>
              <div className="min-w-0">{children}</div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

function Tag({ children, active = false }: { children: ReactNode; active?: boolean }) {
  return (
    <span
      className={`inline-flex min-h-9 items-center rounded-full border px-3 py-1.5 text-sm font-semibold leading-tight ${
        active
          ? "border-[#785FDD]/24 bg-[#08041E] text-[#CEC6E0]"
          : "border-white/10 bg-white/[0.045] text-[#CEC6E0]"
      }`}
    >
      {children}
    </span>
  );
}

function MiniNode({ label, index }: { label: string; index: number }) {
  return (
    <div className="min-h-[8rem] rounded-[20px] border border-white/10 bg-white/[0.045] p-4">
      <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#6939E2]/28 bg-[#08041E] text-xs font-bold text-[#CEC6E0]">
        {index + 1}
      </span>
      <p className="break-words text-sm font-semibold leading-snug text-[#E4DFF7] [overflow-wrap:anywhere] sm:text-base">
        {label}
      </p>
    </div>
  );
}

function CtaLink({
  href,
  children,
  secondary = false,
  external = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  external?: boolean;
}) {
  const className = `inline-flex h-12 w-full items-center justify-center rounded-full px-6 text-sm font-bold transition sm:w-auto sm:text-base ${
    secondary
      ? "border border-white/12 bg-white/[0.04] text-[#E4DFF7] hover:border-[#785FDD]/30 hover:bg-white/[0.08]"
      : "border border-[#6939E2]/55 bg-[linear-gradient(135deg,#6939E2,#4E06BA)] text-white shadow-[0_10px_26px_rgba(105,57,226,0.24)] hover:border-[#785fdd]/80"
  }`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function PortfolioPage() {
  return (
    <main className="-mt-[76px] min-h-screen overflow-hidden bg-[#010534] text-[#E4DFF7]">
      <section className="relative overflow-hidden pb-12 pt-16 sm:pb-16 sm:pt-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-12rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#6939E2]/14 blur-3xl" />
          <div className="absolute right-[-12%] top-[18%] h-[26rem] w-[26rem] rounded-full bg-[#785FDD]/10 blur-3xl" />
          <div className="absolute left-[-10%] bottom-[-18%] h-[24rem] w-[24rem] rounded-full bg-[#4E06BA]/12 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_32%),linear-gradient(180deg,rgba(1,5,52,0),#010534_86%)]" />
        </div>

        <Container className="relative max-w-[19.5rem] px-0 sm:max-w-6xl sm:px-8 lg:px-10">
          <div className="grid min-w-0 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="min-w-0">
              <div className="mb-9 inline-flex rounded-[18px] border border-white/10 bg-white/[0.04] px-4 py-3">
                <Image
                  src="/ribuzz-wordmark.png"
                  alt="RiBuzz"
                  width={180}
                  height={48}
                  priority
                  className="h-9 w-auto object-contain"
                />
              </div>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-[#CEC6E0]">
                Pitch deck comercial
              </p>
              <h1 className="mt-4 max-w-4xl break-words font-heading text-[1.52rem] font-semibold leading-[1.12] text-[#E4DFF7] sm:text-[3.4rem] sm:leading-[1.02] sm:tracking-[-0.04em] lg:text-[3.85rem]">
                El sistema de crecimiento comercial para empresas que ya venden,
                pero no crecen con estructura.
              </h1>
              <p className="mt-6 max-w-3xl break-words text-[0.82rem] leading-relaxed text-[#CEC6E0] sm:text-lg">
                RiBuzz ayuda a diagnosticar, diseñar, implementar y acompañar
                sistemas comerciales para convertir esfuerzo operativo en ventas
                más claras, medibles y sostenibles.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaLink href={SITE_CONFIG.diagnosisPath}>Solicitar diagnóstico</CtaLink>
                <CtaLink href={SITE_CONFIG.whatsappUrl} secondary external>
                  Hablar con RiBuzz
                </CtaLink>
              </div>
            </div>

            <div className={`${darkPanel} relative min-w-0 overflow-hidden rounded-[28px] p-5 sm:min-h-[27rem] sm:p-7`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(105,57,226,0.18),transparent_34%),radial-gradient(circle_at_78%_64%,rgba(120,95,221,0.11),transparent_28%)]" />
              <div className="relative grid gap-3 sm:hidden">
                <div className="rounded-[18px] border border-[#6939E2]/28 bg-[#08041E]/80 p-4 text-center text-base font-bold text-[#CEC6E0]">
                  Sistema comercial
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {portfolioSystemBlocks.map((item) => (
                    <div
                      key={item}
                      className="min-h-[4.6rem] rounded-[16px] border border-white/10 bg-[#08041E]/84 p-3 text-sm font-bold leading-tight text-[#E4DFF7]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative hidden h-full min-h-[24rem] place-items-center sm:grid">
                <div className="relative h-[22rem] w-full max-w-[28rem]">
                  <div className="absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#6939E2]/36 bg-[#08041E]/88 p-5 text-center text-sm font-bold leading-tight text-[#CEC6E0] shadow-[0_0_38px_rgba(105,57,226,0.24)]">
                    Sistema comercial
                  </div>
                  {portfolioSystemBlocks.map((item, index) => {
                    const positions = [
                      "left-1/2 top-0 -translate-x-1/2",
                      "right-0 top-[32%]",
                      "right-[10%] bottom-0",
                      "left-[10%] bottom-0",
                      "left-0 top-[32%]",
                    ];

                    return (
                      <div
                        key={item}
                        className={`absolute ${positions[index]} w-32 rounded-[18px] border border-white/12 bg-[#08041E]/88 px-3 py-3 text-center text-xs font-bold leading-tight text-[#E4DFF7] shadow-[0_18px_44px_rgba(0,0,0,0.32)]`}
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Slide
        number="02"
        eyebrow="Tesis"
        title="El problema no es emprender. El problema es sostener y escalar."
        message="Primeras ventas no bastan si el sistema comercial no existe."
      >
        <div className="relative grid gap-3 lg:grid-cols-5">
          <div className="pointer-events-none absolute left-8 right-8 top-[2.05rem] hidden h-px bg-[linear-gradient(90deg,rgba(120,95,221,0),rgba(120,95,221,0.5),rgba(105,57,226,0.5),rgba(105,57,226,0))] lg:block" />
          {portfolioThesisFlow.map((item, index) => (
            <div
              key={item}
              className="relative rounded-[20px] border border-white/10 bg-[#08041E]/72 p-4 text-center"
            >
              <span className="mx-auto mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#785FDD]/20 bg-[#08041E] text-xs font-bold text-[#CEC6E0] shadow-[0_0_24px_rgba(120,95,221,0.12)]">
                {index + 1}
              </span>
              <p className="text-sm font-bold leading-snug text-[#E4DFF7]">{item}</p>
            </div>
          ))}
        </div>
      </Slide>

      <Slide
        number="03"
        eyebrow="Contexto de mercado"
        title="El país está construido sobre empresas pequeñas."
        message="Equipos pequeños compiten con exigencias digitales cada vez más altas."
        className="pt-0"
      >
        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[22px] border border-[#6939E2]/18 bg-[#08041E]/72 p-5">
              <p className="font-heading text-[3.5rem] font-semibold leading-none text-[#CEC6E0]">
                1,56M
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#CEC6E0]">
                empresas formales activas en Colombia.
              </p>
            </div>
            <div className="rounded-[22px] border border-[#785FDD]/18 bg-[#08041E]/72 p-5">
              <p className="font-heading text-[3.5rem] font-semibold leading-none text-[#CEC6E0]">
                94,2%
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#CEC6E0]">
                del tejido empresarial corresponde a microempresas.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {portfolioMarketNeeds.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </div>
      </Slide>

      <Slide
        number="04"
        eyebrow="Problema de supervivencia"
        title="Crear empresa no es el problema. Sobrevivir sí."
        message="El quinto año revela si hay sistema o solo esfuerzo."
        className="pt-0"
      >
        <div className="rounded-[24px] border border-white/10 bg-[#08041E] p-5 sm:p-6">
          <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="font-heading text-[4.8rem] font-semibold leading-none text-[#785FDD]">
                33,5%
              </p>
              <p className="mt-3 text-base font-semibold leading-relaxed text-[#CEC6E0]">
                seguía activa cinco años después.
              </p>
            </div>
            <div>
              <div className="space-y-3">
                <div>
                  <div className="mb-2 flex justify-between text-xs font-bold uppercase tracking-[0.12em] text-[#98A0B3]">
                    <span>Sobreviven</span>
                    <span>33,5%</span>
                  </div>
                  <div className="h-9 overflow-hidden rounded-full bg-white/8">
                    <div className="h-full w-[33.5%] rounded-full bg-[#785FDD]" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex justify-between text-xs font-bold uppercase tracking-[0.12em] text-[#98A0B3]">
                    <span>No sobreviven</span>
                    <span>66,5%</span>
                  </div>
                  <div className="h-9 overflow-hidden rounded-full bg-white/8">
                    <div className="h-full w-[66.5%] rounded-full bg-[#6939E2]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide
        number="05"
        eyebrow="Síntomas"
        title="Cuando no hay sistema, el negocio se vuelve reactivo."
        message="Lo comercial se rompe antes de que el número final lo muestre."
        className="pt-0"
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {portfolioProblemSymptoms.map((item) => (
            <div
              key={item}
              className="min-h-[4.6rem] rounded-[18px] border border-white/10 bg-white/[0.045] p-4 text-base font-semibold leading-snug text-[#E4DFF7]"
            >
              {item}
            </div>
          ))}
        </div>
      </Slide>

      <Slide
        number="06"
        eyebrow="Causa profunda"
        title="El síntoma parece financiero. La raíz suele ser comercial y operativa."
        message="Las herramientas no corrigen un flujo roto."
        className="pt-0"
      >
        <div className="mx-auto max-w-xl rounded-[24px] border border-white/10 bg-[#08041E] p-5">
          <div className="rounded-t-[28px] border border-[#6939E2]/20 bg-[#08041E] px-6 py-5 text-[#CEC6E0]">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#CEC6E0]">
              Lo visible
            </p>
            <div className="grid gap-2 sm:grid-cols-3">
              {portfolioIcebergVisible.map((item) => (
                <p key={item} className="text-sm font-bold leading-tight">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="mx-auto h-4 w-px bg-white/18" />
          <div className="rounded-b-[28px] border border-[#785FDD]/18 bg-[#08041E] px-6 py-6 text-[#CEC6E0]">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#CEC6E0]">
              Lo que rompe el sistema
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {portfolioIcebergRoot.map((item) => (
                <p key={item} className="rounded-full bg-white/[0.045] px-3 py-2 text-sm font-bold">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      <Slide
        number="07"
        eyebrow="Vacío del mercado"
        title="El mercado ofrece piezas. Las empresas necesitan sistema."
        message="RiBuzz integra diagnóstico, decisión y ejecución."
        className="pt-0"
      >
        <div className="grid gap-3">
          {portfolioMarketGap.map((item) => (
            <div
              key={item.actor}
              className={`grid gap-3 rounded-[18px] border p-4 sm:grid-cols-[8rem_1fr] ${
                item.featured
                  ? "border-[#785FDD]/26 bg-[#08041E]"
                  : "border-white/10 bg-white/[0.045]"
              }`}
            >
              <p
                className={`font-bold ${
                  item.featured ? "text-[#CEC6E0]" : "text-[#E4DFF7]"
                }`}
              >
                {item.actor}
              </p>
              <p className="text-sm leading-relaxed text-[#CEC6E0]">{item.limit}</p>
            </div>
          ))}
        </div>
      </Slide>

      <Slide
        number="08"
        eyebrow="Solución"
        title="RiBuzz convierte el crecimiento comercial en un sistema."
        message="Claridad, estructura, implementación y continuidad."
        className="pt-0"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioSystemBlocks.map((item, index) => (
            <MiniNode key={item} label={item} index={index} />
          ))}
        </div>
      </Slide>

      <Slide
        number="09"
        eyebrow="Cómo funciona"
        title="Una ruta guiada desde claridad hasta crecimiento."
        message="Primero entendemos. Luego priorizamos. Después ejecutamos."
        className="pt-0"
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {portfolioOperatingRoute.map((item, index) => (
            <div
              key={item}
              className="grid min-h-[5.25rem] grid-cols-[3rem_1fr] items-center gap-3 rounded-[18px] border border-white/10 bg-white/[0.045] p-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6939E2]/24 bg-[#08041E] text-xs font-bold text-[#CEC6E0]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm font-bold leading-snug text-[#E4DFF7]">{item}</p>
            </div>
          ))}
        </div>
      </Slide>

      <Slide
        number="10"
        eyebrow="Implementación"
        title="Del diagnóstico a activos comerciales concretos."
        message="Marketing y tecnología al servicio del flujo."
        className="pt-0"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {portfolioImplementationAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-[22px] border border-white/10 bg-white/[0.045] p-5"
            >
              <h3 className="text-xl font-bold text-[#E4DFF7]">{area.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {area.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Slide>

      <Slide
        number="11"
        eyebrow="Modelo de negocio"
        title="Una relación que puede crecer con el cliente."
        message="Diseño, implementación y acompañamiento."
        className="pt-0"
      >
        <div className="grid gap-4">
          {portfolioBusinessModel.map((item, index) => (
            <div
              key={item.title}
              className="rounded-[22px] border border-white/10 bg-white/[0.045] p-5"
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#CEC6E0]">
                Nivel {index + 1}
              </p>
              <h3 className="mt-2 text-xl font-bold text-[#E4DFF7]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#CEC6E0]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Slide>

      <Slide
        number="12"
        eyebrow="Validación actual"
        title="RiBuzz ya está operando con casos reales."
        message="Validación en servicios, educación digital, construcción, B2B y eventos."
        className="pt-0"
        fullWidth
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioCases.map((item) => (
            <div
              key={item.name}
              className="rounded-[20px] border border-white/10 bg-white/[0.045] p-4"
            >
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-bold text-[#E4DFF7]">{item.name}</h3>
                <Tag active>{item.status}</Tag>
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-[#CEC6E0]">
                {item.sector}
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <div className="rounded-[14px] border border-[#6939E2]/16 bg-[#08041E]/54 p-2.5">
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#CEC6E0]">
                    Problema
                  </p>
                  <p className="mt-1.5 text-xs font-semibold leading-snug text-[#E4DFF7]">
                    {item.problem}
                  </p>
                </div>
                <div className="rounded-[14px] border border-[#785FDD]/16 bg-[#08041E]/54 p-2.5">
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#CEC6E0]">
                    Intervención
                  </p>
                  <p className="mt-1.5 text-xs font-semibold leading-snug text-[#E4DFF7]">
                    {item.intervention}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Slide>

      <Slide
        number="13"
        eyebrow="Escalabilidad"
        title="El servicio de hoy puede convertirse en infraestructura mañana."
        message="Un sistema repetible para diagnosticar, ordenar y ejecutar."
        className="pt-0"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {portfolioVisionSteps.map((item, index) => (
            <div
              key={item.title}
              className={`min-h-[8rem] rounded-[22px] border p-5 ${
                index === portfolioVisionSteps.length - 1
                  ? "border-[#6939E2]/24 bg-[#08041E]"
                  : "border-white/10 bg-white/[0.045]"
              }`}
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#CEC6E0]">
                {item.title}
              </p>
              <p className="mt-3 text-xl font-bold leading-tight text-[#E4DFF7]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Slide>

      <section className="pb-16 pt-0 sm:pb-20">
        <Container className="max-w-[19.5rem] px-0 sm:max-w-6xl sm:px-8 lg:px-10">
          <div className={`${darkPanel} relative overflow-hidden rounded-[28px] p-6 sm:p-10 lg:p-12`}>
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-[-6%] top-[-16%] h-44 w-44 rounded-full bg-[#6939E2]/18 blur-3xl" />
              <div className="absolute bottom-[-18%] right-[4%] h-52 w-52 rounded-full bg-[#785FDD]/12 blur-3xl" />
            </div>
            <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <div className="mb-8 inline-flex rounded-[18px] border border-white/10 bg-white/[0.04] px-4 py-3">
                  <Image
                    src="/ribuzz-wordmark.png"
                    alt="RiBuzz"
                    width={160}
                    height={44}
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#CEC6E0]">
                  14/14 · Cierre
                </p>
                <h2 className="mt-4 max-w-4xl font-heading text-[2rem] font-semibold leading-[1.02] tracking-[-0.035em] text-[#E4DFF7] sm:text-[3rem]">
                  RiBuzz existe para que las empresas dejen de vender a ciegas.
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#CEC6E0] sm:text-lg">
                  No construimos campañas sueltas. Construimos sistemas comerciales
                  para que las empresas sepan qué hacer, en qué orden, con quién
                  ejecutarlo y cómo medir si está funcionando.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <CtaLink href={SITE_CONFIG.diagnosisPath}>
                    Abrir conversación estratégica
                  </CtaLink>
                  <CtaLink href={SITE_CONFIG.whatsappUrl} secondary external>
                    Escribir por WhatsApp
                  </CtaLink>
                </div>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/[0.045] p-5">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#CEC6E0]">
                  Buscamos
                </p>
                <div className="grid gap-3">
                  {portfolioAskItems.map((item) => (
                    <div
                      key={item}
                      className="rounded-[18px] border border-white/10 bg-[#08041E]/72 p-4 text-sm font-semibold leading-snug text-[#E4DFF7]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
