import Image from "next/image";
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

const slideEyebrow =
  "text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#5B16E6]";
const slideTitle =
  "max-w-4xl font-heading text-3xl font-semibold leading-[1.02] text-[#101322] sm:text-5xl";
const slideText = "max-w-3xl text-base leading-relaxed text-[#4B5567] sm:text-lg";
const panel =
  "border border-[#DCE2EE] bg-white shadow-[0_24px_70px_rgba(20,28,45,0.08)]";

function Slide({
  number,
  eyebrow,
  title,
  message,
  children,
  className = "",
}: {
  number: string;
  eyebrow: string;
  title: string;
  message?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-10 sm:py-14 ${className}`}>
      <Container>
        <div className={`${panel} overflow-hidden rounded-[28px] p-6 sm:p-9 lg:p-11`}>
          <div className="mb-8 flex items-center justify-between gap-4">
            <p className={slideEyebrow}>{eyebrow}</p>
            <span className="rounded-full border border-[#DCE2EE] bg-[#F7F9FC] px-3 py-1 text-xs font-bold text-[#697386]">
              {number}/14
            </span>
          </div>
          <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
            <div>
              <h2 className={slideTitle}>{title}</h2>
              {message ? <p className={`${slideText} mt-5`}>{message}</p> : null}
            </div>
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Tag({ children, active = false }: { children: ReactNode; active?: boolean }) {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1.5 text-sm font-semibold ${
        active
          ? "border-[#B8F13A] bg-[#EFFFBA] text-[#263500]"
          : "border-[#DCE2EE] bg-[#F7F9FC] text-[#344054]"
      }`}
    >
      {children}
    </span>
  );
}

function MiniNode({ label, index }: { label: string; index: number }) {
  return (
    <div className="relative rounded-2xl border border-[#DCE2EE] bg-white p-4 shadow-[0_14px_34px_rgba(20,28,45,0.07)]">
      <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#111827] text-xs font-bold text-white">
        {index + 1}
      </span>
      <p className="text-sm font-semibold leading-snug text-[#101322]">{label}</p>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#F4F7FB] text-[#101322]">
      <section className="relative overflow-hidden bg-[#08111F] py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-12%] top-[-22%] h-[26rem] w-[26rem] rounded-full bg-[#5B16E6]/32 blur-3xl" />
          <div className="absolute right-[-8%] top-[14%] h-[24rem] w-[24rem] rounded-full bg-[#0FEFFD]/20 blur-3xl" />
          <div className="absolute bottom-[-20%] left-[36%] h-[22rem] w-[22rem] rounded-full bg-[#B8F13A]/12 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:48px_48px] opacity-20" />
        </div>

        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="mb-10 inline-flex rounded-2xl border border-white/12 bg-white px-4 py-3">
                <Image
                  src="/ribuzz-wordmark.png"
                  alt="RiBuzz"
                  width={180}
                  height={48}
                  priority
                  className="h-9 w-auto object-contain"
                />
              </div>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-[#B8F13A]">
                Pitch deck comercial
              </p>
              <h1 className="mt-4 max-w-4xl font-heading text-4xl font-semibold leading-[0.98] sm:text-6xl">
                El sistema de crecimiento comercial para empresas que ya venden,
                pero no crecen con estructura.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#C9D4E6] sm:text-lg">
                RiBuzz ayuda a diagnosticar, diseñar, implementar y acompañar
                sistemas comerciales para convertir esfuerzo operativo en ventas
                más claras, medibles y sostenibles.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={SITE_CONFIG.diagnosisPath}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#B8F13A] px-6 text-sm font-bold text-[#172100] transition hover:bg-[#CCFF52]"
                >
                  Solicitar diagnóstico
                </a>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/16 bg-white/8 px-6 text-sm font-bold text-white transition hover:bg-white/14"
                >
                  Hablar con RiBuzz
                </a>
              </div>
            </div>

            <div className="relative min-h-[24rem] overflow-hidden rounded-[32px] border border-white/12 bg-white/[0.06] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(15,239,253,0.18),transparent_32%)]" />
              <div className="relative grid h-full place-items-center">
                <div className="relative h-80 w-80 max-w-full">
                  <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#B8F13A]/60 bg-[#B8F13A]/12 p-5 text-center text-sm font-bold text-[#EFFFBA]">
                    Sistema comercial
                  </div>
                  {portfolioSystemBlocks.map((item, index) => {
                    const positions = [
                      "left-1/2 top-0 -translate-x-1/2",
                      "right-0 top-1/3",
                      "right-8 bottom-0",
                      "left-8 bottom-0",
                      "left-0 top-1/3",
                    ];

                    return (
                      <div
                        key={item}
                        className={`absolute ${positions[index]} rounded-2xl border border-white/14 bg-[#101B2E] px-4 py-3 text-center text-xs font-bold text-white shadow-[0_18px_40px_rgba(0,0,0,0.24)]`}
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
        message="Miles de empresas nacen, venden algo y sobreviven un tiempo, pero muchas no construyen un sistema comercial que convierta esfuerzo en ingresos sostenibles."
      >
        <div className="grid gap-3">
          {portfolioThesisFlow.map((item, index) => (
            <div key={item} className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#111827] text-xs font-bold text-white">
                {index + 1}
              </span>
              <div className="h-px flex-1 bg-[#DCE2EE]" />
              <p className="min-w-36 rounded-2xl border border-[#DCE2EE] bg-[#F7F9FC] px-4 py-3 text-sm font-bold text-[#101322]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </Slide>

      <Slide
        number="03"
        eyebrow="Contexto de mercado"
        title="El país está construido sobre empresas pequeñas."
        message="La mayoría no tiene equipos internos robustos de estrategia, marketing, ventas, tecnología y seguimiento. Aun así compite en mercados cada vez más digitales y exigentes."
        className="pt-0"
      >
        <div className="rounded-[26px] border border-[#DCE2EE] bg-[#F7F9FC] p-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-[#101322] p-5 text-white">
              <p className="text-5xl font-bold">1,56M</p>
              <p className="mt-2 text-sm text-[#C9D4E6]">
                empresas formales activas en Colombia.
              </p>
            </div>
            <div className="rounded-3xl bg-[#EFFFBA] p-5 text-[#263500]">
              <p className="text-5xl font-bold">94,2%</p>
              <p className="mt-2 text-sm">
                del tejido empresarial corresponde a microempresas.
              </p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
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
        message="La fragilidad empresarial no se explica por una sola causa, pero aparece con fuerza cuando faltan clientes, conversión, seguimiento y claridad comercial."
        className="pt-0"
      >
        <div className="rounded-[28px] bg-[#101322] p-6 text-white">
          <div className="grid gap-4 sm:grid-cols-[0.7fr_1.3fr] sm:items-end">
            <div>
              <p className="font-heading text-7xl font-semibold text-[#B8F13A]">
                33,5%
              </p>
              <p className="mt-2 text-sm font-semibold text-[#C9D4E6]">
                seguía activa cinco años después.
              </p>
            </div>
            <div>
              <div className="h-10 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[33.5%] rounded-full bg-[#B8F13A]" />
              </div>
              <div className="mt-3 h-10 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[66.5%] rounded-full bg-[#5B16E6]" />
              </div>
              <p className="mt-3 text-sm text-[#C9D4E6]">
                66,5% no sobrevivió al quinto año.
              </p>
            </div>
          </div>
        </div>
      </Slide>

      <Slide
        number="05"
        eyebrow="Síntomas"
        title="Cuando no hay sistema, el negocio se vuelve reactivo."
        message="El desorden comercial se siente en ventas, caja, decisiones y operación diaria."
        className="pt-0"
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {portfolioProblemSymptoms.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#DCE2EE] bg-[#F7F9FC] p-4 text-sm font-semibold text-[#344054]"
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
        message="Más publicaciones, una web o un CRM no corrigen el sistema si la oferta, el proceso, el seguimiento y los datos siguen desconectados."
        className="pt-0"
      >
        <div className="rounded-[28px] border border-[#DCE2EE] bg-[#F7F9FC] p-5">
          <div className="mx-auto max-w-md">
            <div className="rounded-t-[40px] bg-[#5B16E6] px-6 py-5 text-white">
              {portfolioIcebergVisible.map((item) => (
                <p key={item} className="text-sm font-semibold">
                  {item}
                </p>
              ))}
            </div>
            <div className="mx-auto h-px w-full bg-[#AAB4C6]" />
            <div className="rounded-b-[44px] bg-[#101322] px-6 py-6 text-[#C9D4E6]">
              <div className="grid gap-2 sm:grid-cols-2">
                {portfolioIcebergRoot.map((item) => (
                  <p key={item} className="text-sm font-semibold">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide
        number="07"
        eyebrow="Vacío del mercado"
        title="El mercado ofrece piezas. Las empresas necesitan sistema."
        message="RiBuzz no entra como catálogo de servicios. Entra como una arquitectura de decisión y ejecución comercial."
        className="pt-0"
      >
        <div className="overflow-hidden rounded-[26px] border border-[#DCE2EE]">
          {portfolioMarketGap.map((item) => (
            <div
              key={item.actor}
              className={`grid gap-3 border-b border-[#DCE2EE] p-4 last:border-b-0 sm:grid-cols-[8rem_1fr] ${
                item.featured ? "bg-[#EFFFBA]" : "bg-white"
              }`}
            >
              <p className="font-bold text-[#101322]">{item.actor}</p>
              <p className="text-sm leading-relaxed text-[#4B5567]">{item.limit}</p>
            </div>
          ))}
        </div>
      </Slide>

      <Slide
        number="08"
        eyebrow="Solución"
        title="RiBuzz convierte el crecimiento comercial en un sistema."
        message="Diagnosticamos el negocio, diseñamos el sistema comercial, implementamos los activos necesarios y acompañamos la ejecución."
        className="pt-0"
      >
        <div className="grid gap-3 sm:grid-cols-5">
          {portfolioSystemBlocks.map((item, index) => (
            <MiniNode key={item} label={item} index={index} />
          ))}
        </div>
      </Slide>

      <Slide
        number="09"
        eyebrow="Cómo funciona"
        title="Una ruta guiada desde claridad hasta crecimiento."
        message="RiBuzz ordena prioridades y ejecuta lo que el negocio realmente necesita, en el orden correcto."
        className="pt-0"
      >
        <div className="grid gap-3">
          {portfolioOperatingRoute.map((item, index) => (
            <div
              key={item}
              className="grid items-center gap-3 rounded-2xl border border-[#DCE2EE] bg-[#F7F9FC] p-3 sm:grid-cols-[3rem_1fr]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1220] text-xs font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm font-bold text-[#101322]">{item}</p>
            </div>
          ))}
        </div>
      </Slide>

      <Slide
        number="10"
        eyebrow="Implementación"
        title="Del diagnóstico a activos comerciales concretos."
        message="RiBuzz sí implementa marketing y tecnología, pero dentro de una lógica de sistema, no como piezas sueltas."
        className="pt-0"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {portfolioImplementationAreas.map((area) => (
            <div key={area.title} className="rounded-3xl border border-[#DCE2EE] bg-[#F7F9FC] p-5">
              <h3 className="text-lg font-bold text-[#101322]">{area.title}</h3>
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
        message="La entrada natural es el diseño del sistema comercial. Desde ahí, la continuidad puede avanzar hacia implementación o acompañamiento como growth partner."
        className="pt-0"
      >
        <div className="grid gap-4">
          {portfolioBusinessModel.map((item, index) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[#DCE2EE] bg-white p-5 shadow-[0_12px_30px_rgba(20,28,45,0.06)]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#5B16E6]">
                Nivel {index + 1}
              </p>
              <h3 className="mt-2 text-xl font-bold text-[#101322]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4B5567]">
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
        message="La validación actual cruza servicios, educación digital, construcción, B2B y activaciones comerciales con captura de datos."
        className="pt-0"
      >
        <div className="grid gap-3">
          {portfolioCases.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-[#DCE2EE] bg-[#F7F9FC] p-4"
            >
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-bold text-[#101322]">{item.name}</h3>
                <Tag active>{item.status}</Tag>
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-[#5B16E6]">
                {item.sector}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#4B5567]">
                <strong>Problema:</strong> {item.problem}{" "}
                <strong>Intervención:</strong> {item.intervention}
              </p>
            </div>
          ))}
        </div>
      </Slide>

      <Slide
        number="13"
        eyebrow="Escalabilidad"
        title="El servicio de hoy puede convertirse en infraestructura mañana."
        message="RiBuzz está construyendo un sistema repetible: diagnóstico asistido por IA, mapa comercial, ejecución gestionada y red de aliados validados."
        className="pt-0"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {portfolioVisionSteps.map((item, index) => (
            <div
              key={item.title}
              className={`rounded-3xl p-5 ${
                index === portfolioVisionSteps.length - 1
                  ? "bg-[#101322] text-white"
                  : "border border-[#DCE2EE] bg-[#F7F9FC] text-[#101322]"
              }`}
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#5B16E6]">
                {item.title}
              </p>
              <p
                className={`mt-3 text-lg font-bold ${
                  index === portfolioVisionSteps.length - 1 ? "text-white" : "text-[#101322]"
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Slide>

      <section className="pb-16 pt-0 sm:pb-20">
        <Container>
          <div className="overflow-hidden rounded-[32px] bg-[#08111F] p-6 text-white shadow-[0_30px_90px_rgba(20,28,45,0.18)] sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <div className="mb-8 inline-flex rounded-2xl border border-white/12 bg-white px-4 py-3">
                  <Image
                    src="/ribuzz-wordmark.png"
                    alt="RiBuzz"
                    width={160}
                    height={44}
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#B8F13A]">
                  14/14 · Cierre
                </p>
                <h2 className="mt-4 max-w-4xl font-heading text-3xl font-semibold leading-[1.02] sm:text-5xl">
                  RiBuzz existe para que las empresas dejen de vender a ciegas.
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#C9D4E6] sm:text-lg">
                  No construimos campañas sueltas. Construimos sistemas comerciales
                  para que las empresas sepan qué hacer, en qué orden, con quién
                  ejecutarlo y cómo medir si está funcionando.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={SITE_CONFIG.diagnosisPath}
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#B8F13A] px-6 text-sm font-bold text-[#172100] transition hover:bg-[#CCFF52]"
                  >
                    Abrir conversación estratégica
                  </a>
                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/16 bg-white/8 px-6 text-sm font-bold text-white transition hover:bg-white/14"
                  >
                    Escribir por WhatsApp
                  </a>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/12 bg-white/[0.06] p-5">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#B8F13A]">
                  Buscamos
                </p>
                <div className="grid gap-3">
                  {portfolioAskItems.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm font-semibold text-[#EEF4FF]">
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
