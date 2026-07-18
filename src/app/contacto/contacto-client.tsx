"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { ShareButton } from "@/components/ui/share-button";
import { StartcoGalaxy } from "@/components/ui/startco-galaxy";
import { SITE_CONFIG } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const contactRoutes = [
  {
    eyebrow: "Ruta principal",
    title: "Completa la aplicación",
    description:
      "Ideal si quieres revisar etapa, objetivos y el siguiente paso correcto para trabajar con RiBuzz.",
    href: SITE_CONFIG.diagnosisPath,
    cta: "Empezar aplicación",
    tone: "purple",
    featured: true,
    external: false,
  },
  {
    eyebrow: "Duda puntual",
    title: "Escríbenos por WhatsApp",
    description:
      "Úsalo si necesitas resolver una pregunta antes de aplicar o contarnos contexto específico.",
    href: SITE_CONFIG.whatsappUrl,
    cta: "Abrir WhatsApp",
    tone: "green",
    featured: false,
    external: true,
  },
  {
    eyebrow: "Antes de decidir",
    title: "Ver cómo trabajamos",
    description:
      "Revisa el sistema, las etapas y la forma en que definimos alcance según cada negocio.",
    href: "/services",
    cta: "Ver metodología",
    tone: "cyan",
    featured: false,
    external: false,
  },
] as const;

const followUpSteps = [
  "Clasificamos tu etapa",
  "Revisamos encaje y prioridad",
  "Definimos la ruta de trabajo",
] as const;

const utilityLinks = [
  {
    title: "Landing de conversión",
    description: "Para campañas o productos que necesitan una acción clara.",
    href: "/landings",
  },
  {
    title: "Tarjetas NFC",
    description: "Para capturar contactos en reuniones, eventos o puntos físicos.",
    href: "/tarjetas-nfc",
  },
  {
    title: "Recursos gratuitos",
    description: "Para ordenar oferta y criterio antes de avanzar.",
    href: SITE_CONFIG.giftsPath,
  },
] as const;

function SocialIcon({ name }: { name: "instagram" | "whatsapp" | "mail" }) {
  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.2" />
        <path d="M16.8 7.2h.01" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.56 0 .27 5.28.27 11.79c0 2.08.54 4.1 1.57 5.88L0 24l6.52-1.71a11.78 11.78 0 0 0 5.54 1.41h.01c6.5 0 11.79-5.29 11.79-11.79 0-3.15-1.22-6.1-3.34-8.43Zm-8.46 18.2h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.87 1.01 1.04-3.77-.23-.39a9.8 9.8 0 0 1-1.5-5.15c0-5.43 4.42-9.85 9.87-9.85 2.63 0 5.1 1.02 6.96 2.88a9.8 9.8 0 0 1 2.88 6.97c0 5.44-4.42 9.86-9.84 9.89Z" />
      <path d="M17.56 14.34c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.76.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.46a8.93 8.93 0 0 1-1.66-2.06c-.17-.3-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.21-.24-.59-.49-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.1 3.2 5.09 4.48.71.31 1.27.5 1.7.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

function ThemeToggle({
  isDayMode,
  onToggle,
}: {
  isDayMode: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDayMode ? "Cambiar a modo nocturno" : "Cambiar a modo diurno"}
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-[0_10px_24px_rgba(0,0,0,0.2)] backdrop-blur-[12px] transition-[transform,border-color,background-color,box-shadow,color] duration-300 hover:-translate-y-[1px]",
        isDayMode
          ? "border-[#111827]/14 bg-white/70 text-[#111827] hover:border-[#111827]/22"
          : "border-white/14 bg-white/8 text-white hover:border-white/24 hover:bg-white/14",
      )}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-[19px] w-[19px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {isDayMode ? (
          <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.7 6.7 0 0 0 9.8 9.8Z" />
        ) : (
          <>
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2.5v2.2M12 19.3v2.2M4.7 4.7l1.6 1.6M17.7 17.7l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.7 19.3l1.6-1.6M17.7 6.3l1.6-1.6" />
          </>
        )}
      </svg>
    </button>
  );
}

export default function ContactoClient() {
  const [isDayMode, setIsDayMode] = useState(false);

  return (
    <section className="relative cv-auto -mt-[76px] min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div
          className={cn(
            "absolute inset-0 transition-[background,opacity] duration-500",
            isDayMode
              ? "bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.72),transparent_28%),linear-gradient(180deg,#ffffff,#f6f6fb_44%,#edf0f7)]"
              : "bg-[radial-gradient(circle_at_50%_0%,rgba(105,57,226,0.16),transparent_34%),linear-gradient(180deg,#08041e,#10052d_48%,#05020f)]",
          )}
        />
        <StartcoGalaxy className={cn("transition-opacity duration-500", isDayMode ? "opacity-18" : "opacity-80")} />
      </div>

      <Container className="relative z-10 flex min-h-screen max-w-6xl flex-col justify-center py-24 sm:py-32">
        <div className="mb-6 flex items-center justify-between gap-4">
          <Link href="/" aria-label="Volver al inicio" className="inline-flex items-center gap-3">
            <Image
              src={SITE_CONFIG.logoPlaceholder}
              alt="RiBuzz"
              width={152}
              height={44}
              className={cn("h-9 w-auto object-contain", isDayMode ? "brightness-0" : "")}
              priority
            />
          </Link>

          <div className="flex items-center gap-3">
            <ThemeToggle isDayMode={isDayMode} onToggle={() => setIsDayMode((value) => !value)} />
            <ShareButton
              title="Contacto RiBuzz"
              text="Conecta con RiBuzz"
              url="https://ribuzz.com/contacto"
              iconOnly
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-[0_10px_24px_rgba(0,0,0,0.2)] backdrop-blur-[12px] transition-[transform,border-color,background-color,color] duration-300 hover:-translate-y-[1px]",
                isDayMode
                  ? "border-[#111827]/14 bg-white/70 text-[#111827] hover:border-[#111827]/22"
                  : "border-white/14 bg-white/8 text-white hover:border-white/24 hover:bg-white/14",
              )}
            />
          </div>
        </div>

        <Card
          interactiveGlow={false}
          className={cn(
            "overflow-hidden rounded-[32px] border px-5 py-7 sm:px-8 sm:py-9 lg:px-10",
            isDayMode
              ? "border-[#111827]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,248,252,0.88))] shadow-[0_24px_64px_rgba(20,24,39,0.12)]"
              : "border-white/10 bg-[linear-gradient(180deg,rgba(16,12,32,0.82),rgba(8,7,16,0.72))] shadow-[0_24px_64px_rgba(0,0,0,0.34)]",
          )}
        >
          <div
            className={cn(
              "pointer-events-none absolute inset-0",
              isDayMode
                ? "bg-[radial-gradient(circle_at_52%_0%,rgba(105,57,226,0.07),transparent_32%)]"
                : "bg-[radial-gradient(circle_at_52%_0%,rgba(105,57,226,0.18),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(120,95,221,0.1),transparent_28%)]",
            )}
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <span
              className={cn(
                "inline-flex rounded-full border px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em]",
                isDayMode ? "border-[#111827]/10 text-[#4B5563]" : "border-white/10 text-[#98A0B3]",
              )}
            >
              Contacto RiBuzz
            </span>
            <h1
              className={cn(
                "mx-auto mt-5 max-w-3xl text-[2.2rem] font-semibold leading-[1.03] [font-family:var(--font-saira)] sm:text-[3rem] lg:text-[3.45rem]",
                isDayMode ? "text-[#111827]" : "text-[#E4DFF7]",
              )}
            >
              Elige la ruta correcta para avanzar con claridad
            </h1>
            <p
              className={cn(
                "mx-auto mt-4 max-w-2xl text-[0.98rem] leading-relaxed sm:text-base",
                isDayMode ? "text-[#4B5563]" : "text-[#CEC6E0]",
              )}
            >
              Si ya sabes que quieres crecer, ordenar tu sistema o resolver una duda antes de aplicar,
              este es el punto de entrada correcto.
            </p>
          </div>

          <div className="relative mt-8 grid gap-4 lg:grid-cols-3">
            {contactRoutes.map((route) => {
              const cardContent = (
                <Card
                  glowTone={route.tone}
                  className={cn(
                    "group flex h-full min-h-[18rem] flex-col justify-between rounded-[24px] p-5 transition-[border-color,transform,box-shadow,background-color] duration-300 hover:-translate-y-[2px] sm:p-6",
                    isDayMode
                      ? "border-[#111827]/10 bg-white/86 text-[#111827] hover:border-[#6939E2]/24 hover:shadow-[0_20px_42px_rgba(17,24,39,0.08)]"
                      : "border-white/10 bg-[#090812]/82 hover:border-[#785FDD]/42 hover:shadow-[0_20px_42px_rgba(0,0,0,0.26)]",
                    route.featured &&
                      (isDayMode
                        ? "border-[#6939E2]/22 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,244,255,0.94))]"
                        : "border-[#785FDD]/38 bg-[linear-gradient(180deg,rgba(27,18,51,0.96),rgba(11,9,20,0.92))]"),
                  )}
                >
                  <div>
                    <span
                      className={cn(
                        "text-[0.66rem] font-bold uppercase tracking-[0.16em]",
                        isDayMode ? "text-[#6939E2]" : "text-[#987DFF]",
                      )}
                    >
                      {route.eyebrow}
                    </span>
                    <h2 className={cn("mt-4 text-2xl font-semibold leading-tight", isDayMode ? "text-[#111827]" : "text-[#E4DFF7]")}>
                      {route.title}
                    </h2>
                    <p className={cn("mt-3 text-sm leading-relaxed", isDayMode ? "text-[#4B5563]" : "text-[#BDB6D4]")}>
                      {route.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between gap-4">
                    <span
                      className={cn(
                        "text-sm font-bold",
                        route.featured && !isDayMode ? "text-[#E4DFF7]" : isDayMode ? "text-[#111827]" : "text-[#CEC6E0]",
                      )}
                    >
                      {route.cta}
                    </span>
                    <span
                      className={cn(
                        "inline-flex h-10 w-10 items-center justify-center rounded-full border transition-transform duration-300 group-hover:translate-x-1",
                        isDayMode
                          ? "border-[#111827]/10 bg-[#111827]/5 text-[#111827]"
                          : "border-white/10 bg-white/6 text-[#E4DFF7]",
                      )}
                    >
                      →
                    </span>
                  </div>
                </Card>
              );

              if (route.external) {
                return (
                  <a key={route.title} href={route.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                    {cardContent}
                  </a>
                );
              }

              return (
                <Link key={route.title} href={route.href} className="block h-full">
                  {cardContent}
                </Link>
              );
            })}
          </div>

          <div
            className={cn(
              "relative mt-6 grid gap-3 rounded-[24px] border p-4 sm:grid-cols-3",
              isDayMode ? "border-[#111827]/10 bg-white/54" : "border-white/8 bg-white/[0.035]",
            )}
          >
            {followUpSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                    isDayMode ? "bg-[#111827]/8 text-[#111827]" : "bg-[#6939E2]/28 text-[#E4DFF7]",
                  )}
                >
                  {index + 1}
                </span>
                <p className={cn("text-sm font-semibold", isDayMode ? "text-[#374151]" : "text-[#CEC6E0]")}>{step}</p>
              </div>
            ))}
          </div>
        </Card>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_0.74fr]">
          <Card
            interactiveGlow={false}
            className={cn(
              "rounded-[28px] border p-5 sm:p-6",
              isDayMode ? "border-[#111827]/10 bg-white/80" : "border-white/8 bg-[#090812]/72",
            )}
          >
            <p className={cn("text-sm font-bold uppercase tracking-[0.14em]", isDayMode ? "text-[#6B7280]" : "text-[#98A0B3]")}>
              Accesos útiles
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {utilityLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "rounded-[18px] border p-4 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-[1px]",
                    isDayMode ? "border-[#111827]/10 bg-white/70 hover:border-[#6939E2]/22" : "border-white/8 bg-white/[0.035] hover:border-[#785FDD]/34",
                  )}
                >
                  <p className={cn("text-sm font-semibold", isDayMode ? "text-[#111827]" : "text-[#E4DFF7]")}>{item.title}</p>
                  <p className={cn("mt-2 text-xs leading-relaxed", isDayMode ? "text-[#6B7280]" : "text-[#AFA7C6]")}>{item.description}</p>
                </Link>
              ))}
            </div>
          </Card>

          <Card
            interactiveGlow={false}
            className={cn(
              "rounded-[28px] border p-5 sm:p-6",
              isDayMode ? "border-[#111827]/10 bg-white/80" : "border-white/8 bg-[#090812]/72",
            )}
          >
            <p className={cn("text-sm font-bold uppercase tracking-[0.14em]", isDayMode ? "text-[#6B7280]" : "text-[#98A0B3]")}>
              Canales directos
            </p>
            <div className="mt-4 grid gap-3">
              <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className={cn("flex items-center gap-3 rounded-[18px] border p-4", isDayMode ? "border-[#111827]/10 bg-white/70 text-[#111827]" : "border-white/8 bg-white/[0.035] text-[#E4DFF7]")}>
                <SocialIcon name="whatsapp" />
                <span className="text-sm font-semibold">WhatsApp</span>
              </a>
              <a href={`mailto:${SITE_CONFIG.contactEmail}`} className={cn("flex items-center gap-3 rounded-[18px] border p-4", isDayMode ? "border-[#111827]/10 bg-white/70 text-[#111827]" : "border-white/8 bg-white/[0.035] text-[#E4DFF7]")}>
                <SocialIcon name="mail" />
                <span className="text-sm font-semibold">{SITE_CONFIG.contactEmail}</span>
              </a>
              <a href={SITE_CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className={cn("flex items-center gap-3 rounded-[18px] border p-4", isDayMode ? "border-[#111827]/10 bg-white/70 text-[#111827]" : "border-white/8 bg-white/[0.035] text-[#E4DFF7]")}>
                <SocialIcon name="instagram" />
                <span className="text-sm font-semibold">Instagram</span>
              </a>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
