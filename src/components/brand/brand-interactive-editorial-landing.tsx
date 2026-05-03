"use client";

import Image from "next/image";
import { useState } from "react";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import type {
  BrandFloatingAction,
  BrandHighlight,
  BrandInteractiveEditorialLandingConfig,
} from "@/lib/brand-landings";
import { cn } from "@/lib/utils";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M16.8 7.2h.01" strokeLinecap="round" />
    </svg>
  );
}

function CatalogIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 4.8h10.5a2 2 0 0 1 2 2V18a1.2 1.2 0 0 1-1.2 1.2H7.5A3.5 3.5 0 0 0 4 22V6.8a2 2 0 0 1 2-2Z" />
      <path d="M7.5 19.2H20" />
      <path d="M8 8h7M8 11.5h7M8 15h4.5" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M20.52 3.48A11.9 11.9 0 0 0 12.04 0C5.42 0 .04 5.38.04 12c0 2.12.55 4.18 1.6 6L0 24l6.17-1.61A11.92 11.92 0 0 0 12.04 24h.01c6.62 0 12-5.38 12-12 0-3.2-1.25-6.2-3.53-8.52ZM12.05 21.98h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.66.96.98-3.57-.23-.37A9.94 9.94 0 0 1 2.05 12C2.05 6.49 6.53 2 12.05 2c2.65 0 5.15 1.03 7.01 2.91A9.86 9.86 0 0 1 22 12c0 5.51-4.48 9.98-9.95 9.98Zm5.46-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.39-1.48a8.98 8.98 0 0 1-1.66-2.07c-.18-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.91-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.09 3.19 5.07 4.47.71.31 1.27.49 1.7.62.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 16V4" />
      <path d="m7.5 8.5 4.5-4.5 4.5 4.5" />
      <path d="M5 13.5v4.2A1.3 1.3 0 0 0 6.3 19h11.4a1.3 1.3 0 0 0 1.3-1.3v-4.2" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function iconForAction(kind: BrandFloatingAction["kind"]) {
  switch (kind) {
    case "instagram":
      return <InstagramIcon />;
    case "catalog":
      return <CatalogIcon />;
    case "whatsapp":
      return <WhatsappIcon />;
    default:
      return <ArrowIcon />;
  }
}

function ActionChip({
  action,
  accent,
  textColor,
}: {
  action: BrandFloatingAction;
  accent: string;
  textColor: string;
}) {
  const content = (
    <span
      className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-[16px] transition-[transform,border-color,background-color,box-shadow,opacity] duration-300 hover:-translate-y-[1px]"
      style={{
        color: textColor,
        borderColor: `${accent}22`,
        background: "rgba(255,255,255,0.78)",
        boxShadow: `0 14px 30px ${accent}12`,
        opacity: action.href ? 1 : 0.68,
      }}
    >
      <span style={{ color: accent }}>{iconForAction(action.kind)}</span>
      {action.label}
    </span>
  );

  if (!action.href) {
    return <div className="pointer-events-none">{content}</div>;
  }

  return (
    <a
      href={action.href}
      target={action.href.startsWith("/") || action.href.startsWith("#") ? undefined : "_blank"}
      rel={action.href.startsWith("/") || action.href.startsWith("#") ? undefined : "noopener noreferrer"}
    >
      {content}
    </a>
  );
}

function HighlightButton({
  highlight,
  isActive,
  onClick,
  accent,
  textColor,
  mutedColor,
}: {
  highlight: BrandHighlight;
  isActive: boolean;
  onClick: () => void;
  accent: string;
  textColor: string;
  mutedColor: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-full rounded-[26px] border px-5 py-5 text-left transition-[transform,border-color,background-color,box-shadow] duration-300 hover:-translate-y-[1px]"
      style={{
        borderColor: isActive ? `${accent}32` : `${accent}14`,
        background: isActive
          ? `linear-gradient(180deg,rgba(255,255,255,0.96),rgba(245,248,251,0.94))`
          : "linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.6))",
        boxShadow: isActive ? `0 20px 44px ${accent}12` : "0 12px 28px rgba(18,42,58,0.06)",
      }}
      aria-pressed={isActive}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: accent }}>
        {highlight.eyebrow}
      </p>
      <p className="mt-3 text-lg font-semibold" style={{ color: textColor }}>
        {highlight.title}
      </p>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: mutedColor }}>
        {highlight.preview}
      </p>
    </button>
  );
}

export function BrandInteractiveEditorialLanding({
  config,
}: {
  config: BrandInteractiveEditorialLandingConfig;
}) {
  const [activeHighlight, setActiveHighlight] = useState(config.collectionHighlights[0]?.title ?? "");
  const currentHighlight =
    config.collectionHighlights.find((highlight) => highlight.title === activeHighlight) ?? config.collectionHighlights[0];

  return (
    <section className="relative cv-auto -mt-[76px] min-h-screen overflow-hidden pb-24">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0" style={{ background: config.background }} />
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background: `
              radial-gradient(circle at 16% 18%, ${config.accentSoft}20, transparent 24%),
              radial-gradient(circle at 82% 12%, ${config.secondarySoft}28, transparent 24%),
              radial-gradient(circle at 50% 100%, ${config.accent}16, transparent 34%),
              ${config.overlay}
            `,
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),transparent_22%,rgba(255,255,255,0.12)_100%)]" />
      </div>

      <Container className="relative z-10 pt-16 sm:pt-20">
        <section className="relative overflow-hidden rounded-[34px] border px-5 py-6 shadow-[0_34px_90px_rgba(11,28,43,0.14)] backdrop-blur-[18px] sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(180deg,rgba(255,255,255,0.84),rgba(244,248,252,0.78)),
                radial-gradient(circle at 80% 18%, ${config.secondarySoft}24, transparent 24%)
              `,
            }}
          />
          <div className="pointer-events-none absolute inset-[14px] rounded-[28px] border" style={{ borderColor: `${config.accent}16` }} />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center">
            <div className="max-w-2xl">
              <p
                className={cn("text-[11px] font-semibold uppercase tracking-[0.2em]", `[font-family:${config.fontVar}]`)}
                style={{ color: config.accent }}
              >
                {config.hero.eyebrow}
              </p>
              <h1
                className={cn("mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl", `[font-family:${config.fontVar}]`)}
                style={{ color: config.textColor }}
              >
                {config.hero.headline}
              </h1>
              <p
                className={cn("mt-5 max-w-xl text-base leading-relaxed sm:text-lg", `[font-family:${config.fontVar}]`)}
                style={{ color: config.mutedColor }}
              >
                {config.hero.body}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={config.hero.primaryHref}
                  className="inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold transition-[transform,box-shadow] duration-300 hover:-translate-y-[1px]"
                  style={{
                    color: "#FFFFFF",
                    background: `linear-gradient(135deg, ${config.accent}, ${config.accentSoft})`,
                    boxShadow: `0 18px 40px ${config.accentSoft}30`,
                  }}
                >
                  {config.hero.primaryLabel}
                </a>
                <a
                  href={config.hero.secondaryHref}
                  target={config.hero.secondaryHref.startsWith("/") || config.hero.secondaryHref.startsWith("#") ? undefined : "_blank"}
                  rel={config.hero.secondaryHref.startsWith("/") || config.hero.secondaryHref.startsWith("#") ? undefined : "noopener noreferrer"}
                  className="inline-flex items-center rounded-full border px-5 py-3 text-sm font-semibold transition-[transform,background-color] duration-300 hover:-translate-y-[1px]"
                  style={{
                    color: config.textColor,
                    borderColor: `${config.accent}22`,
                    background: "rgba(255,255,255,0.72)",
                  }}
                >
                  {config.hero.secondaryLabel}
                </a>
                <button
                  type="button"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border bg-white/72 transition-[transform,background-color] duration-300 hover:-translate-y-[1px]"
                  style={{ color: config.accent, borderColor: `${config.accent}20` }}
                  aria-label={`Compartir ${config.title}`}
                  onClick={async () => {
                    try {
                      if (navigator.share) {
                        await navigator.share({
                          title: config.title,
                          text: config.hero.headline,
                          url: config.shareUrl,
                        });
                        return;
                      }

                      await navigator.clipboard.writeText(config.shareUrl);
                    } catch {
                      // noop
                    }
                  }}
                >
                  <ShareIcon />
                </button>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {config.floatingActions.map((action) => (
                  <ActionChip key={action.label} action={action} accent={config.accent} textColor={config.textColor} />
                ))}
              </div>
            </div>

            <div className="relative">
              <div
                className="pointer-events-none absolute -left-4 top-10 h-28 w-28 rounded-full blur-3xl"
                style={{ background: `${config.secondarySoft}90` }}
              />
              <div
                className="pointer-events-none absolute -bottom-2 right-4 h-36 w-36 rounded-full blur-3xl"
                style={{ background: `${config.accentSoft}55` }}
              />
              <div className="relative overflow-hidden rounded-[32px] border bg-white/80 p-3 shadow-[0_26px_70px_rgba(13,30,47,0.16)]">
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg,rgba(255,255,255,0.32),transparent_18%,rgba(255,255,255,0.12)_100%)",
                  }}
                />
                <Image
                  src={config.hero.imageSrc}
                  alt={config.hero.imageAlt}
                  width={config.hero.imageWidth}
                  height={config.hero.imageHeight}
                  className="relative h-auto w-full rounded-[24px] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="editorial-intro" className="pt-10 sm:pt-14">
          <div className="mx-auto max-w-4xl text-center">
            <p
              className={cn("text-[11px] font-semibold uppercase tracking-[0.22em]", `[font-family:${config.fontVar}]`)}
              style={{ color: config.accent }}
            >
              {config.editorialIntro.eyebrow}
            </p>
            <h2
              className={cn("mt-4 text-3xl font-semibold tracking-tight sm:text-4xl", `[font-family:${config.fontVar}]`)}
              style={{ color: config.textColor }}
            >
              {config.editorialIntro.title}
            </h2>
            <p
              className={cn("mx-auto mt-5 max-w-3xl text-base leading-relaxed sm:text-lg", `[font-family:${config.fontVar}]`)}
              style={{ color: config.mutedColor }}
            >
              {config.editorialIntro.body}
            </p>
          </div>
        </section>

        <section className="pt-10 sm:pt-14">
          <div className="grid gap-6">
            {config.storySections.map((section) => {
              const isBrandPause = section.layout === "brand-pause";
              const isImageLeft = section.layout === "image-left";

              return (
                <Card
                  key={section.title}
                  interactiveGlow={false}
                  className={cn(
                    "overflow-hidden rounded-[32px] border p-0 shadow-[0_24px_58px_rgba(12,30,44,0.1)]",
                    isBrandPause ? "mx-auto max-w-3xl" : "",
                  )}
                  style={{
                    background: isBrandPause
                      ? "linear-gradient(180deg,rgba(255,255,255,0.95),rgba(245,248,252,0.92))"
                      : "linear-gradient(180deg,rgba(255,255,255,0.93),rgba(244,248,252,0.9))",
                    borderColor: `${config.accent}14`,
                  }}
                >
                  <div
                    className={cn(
                      "grid gap-0",
                      isBrandPause ? "md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]" : "md:grid-cols-2",
                    )}
                  >
                    <div className={cn("relative min-h-[320px] overflow-hidden", isImageLeft ? "md:order-1" : "md:order-2")}>
                      <div
                        className="pointer-events-none absolute inset-0 z-10"
                        style={{
                          background: isBrandPause
                            ? `linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.24))`
                            : `linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.08))`,
                        }}
                      />
                      <Image
                        src={section.imageSrc}
                        alt={section.imageAlt}
                        width={section.imageWidth}
                        height={section.imageHeight}
                        className={cn(
                          "h-full w-full object-cover",
                          isBrandPause ? "bg-[#215679] p-0 object-cover" : "",
                        )}
                      />
                    </div>

                    <div
                      className={cn(
                        "flex items-center px-6 py-7 sm:px-8 sm:py-9",
                        isImageLeft ? "md:order-2" : "md:order-1",
                      )}
                    >
                      <div className="max-w-xl">
                        <p
                          className={cn("text-[11px] font-semibold uppercase tracking-[0.18em]", `[font-family:${config.fontVar}]`)}
                          style={{ color: config.accent }}
                        >
                          {section.eyebrow}
                        </p>
                        <h3
                          className={cn("mt-4 text-2xl font-semibold tracking-tight sm:text-3xl", `[font-family:${config.fontVar}]`)}
                          style={{ color: config.textColor }}
                        >
                          {section.title}
                        </h3>
                        <p
                          className={cn("mt-4 text-base leading-relaxed sm:text-[1.05rem]", `[font-family:${config.fontVar}]`)}
                          style={{ color: config.mutedColor }}
                        >
                          {section.body}
                        </p>
                        {section.note ? (
                          <p
                            className={cn("mt-4 text-sm leading-relaxed", `[font-family:${config.fontVar}]`)}
                            style={{ color: config.accent }}
                          >
                            {section.note}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="highlights" className="pt-10 sm:pt-14">
          <Card
            interactiveGlow={false}
            className="overflow-hidden rounded-[34px] border p-6 shadow-[0_28px_70px_rgba(10,28,44,0.12)] sm:p-8"
            style={{
              background: "linear-gradient(180deg,rgba(255,255,255,0.93),rgba(242,247,251,0.9))",
              borderColor: `${config.accent}16`,
            }}
          >
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start">
              <div>
                <p
                  className={cn("text-[11px] font-semibold uppercase tracking-[0.2em]", `[font-family:${config.fontVar}]`)}
                  style={{ color: config.accent }}
                >
                  Selecciona una capa
                </p>
                <h3
                  className={cn("mt-4 text-3xl font-semibold tracking-tight", `[font-family:${config.fontVar}]`)}
                  style={{ color: config.textColor }}
                >
                  Un universo curado para leerse despacio.
                </h3>
                <p
                  className={cn("mt-4 text-base leading-relaxed", `[font-family:${config.fontVar}]`)}
                  style={{ color: config.mutedColor }}
                >
                  Cada pieza puede sentirse mineral, simbólica o profundamente personal. Esta sección le da a la landing
                  una interacción sutil sin romper su tono editorial.
                </p>

                <div className="mt-6 grid gap-3">
                  {config.collectionHighlights.map((highlight) => (
                    <HighlightButton
                      key={highlight.title}
                      highlight={highlight}
                      isActive={highlight.title === currentHighlight.title}
                      onClick={() => setActiveHighlight(highlight.title)}
                      accent={config.accent}
                      textColor={config.textColor}
                      mutedColor={config.mutedColor}
                    />
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                <div
                  className="rounded-[30px] border px-6 py-7 sm:px-8 sm:py-8"
                  style={{
                    borderColor: `${config.accent}16`,
                    background: `linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,249,252,0.94))`,
                    boxShadow: `0 24px 54px ${config.accent}12`,
                  }}
                >
                  <p
                    className={cn("text-[11px] font-semibold uppercase tracking-[0.18em]", `[font-family:${config.fontVar}]`)}
                    style={{ color: config.accent }}
                  >
                    {currentHighlight.eyebrow}
                  </p>
                  <h4
                    className={cn("mt-4 text-2xl font-semibold tracking-tight sm:text-3xl", `[font-family:${config.fontVar}]`)}
                    style={{ color: config.textColor }}
                  >
                    {currentHighlight.title}
                  </h4>
                  <p
                    className={cn("mt-4 text-base leading-relaxed sm:text-[1.05rem]", `[font-family:${config.fontVar}]`)}
                    style={{ color: config.mutedColor }}
                  >
                    {currentHighlight.body}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {currentHighlight.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]"
                        style={{
                          color: config.accent,
                          borderColor: `${config.accent}18`,
                          background: `${config.accentSoft}14`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div
                    className="rounded-[26px] border px-5 py-5"
                    style={{ borderColor: `${config.accent}14`, background: "rgba(255,255,255,0.74)" }}
                  >
                    <p className="text-sm font-semibold" style={{ color: config.textColor }}>
                      Piedra, símbolo, gesto
                    </p>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: config.mutedColor }}>
                      La interacción no vende de golpe; acompaña la lectura para que el usuario entienda el carácter de la marca.
                    </p>
                  </div>
                  <div
                    className="rounded-[26px] border px-5 py-5"
                    style={{ borderColor: `${config.accent}14`, background: "rgba(255,255,255,0.74)" }}
                  >
                    <p className="text-sm font-semibold" style={{ color: config.textColor }}>
                      Preparada para crecer
                    </p>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: config.mutedColor }}>
                      Este bloque puede evolucionar luego hacia colecciones, amuletos, significados o catálogo activo sin rehacer la base.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="pb-10 pt-10 sm:pb-14 sm:pt-14">
          <Card
            interactiveGlow={false}
            className="overflow-hidden rounded-[34px] border p-6 shadow-[0_30px_72px_rgba(11,29,45,0.14)] sm:p-8"
            style={{
              background: `linear-gradient(135deg, ${config.accent}12, ${config.secondarySoft}18)`,
              borderColor: `${config.accent}20`,
            }}
          >
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_auto] lg:items-center">
              <div>
                <p
                  className={cn("text-[11px] font-semibold uppercase tracking-[0.2em]", `[font-family:${config.fontVar}]`)}
                  style={{ color: config.accent }}
                >
                  {config.closingCta.eyebrow}
                </p>
                <h3
                  className={cn("mt-4 text-3xl font-semibold tracking-tight sm:text-4xl", `[font-family:${config.fontVar}]`)}
                  style={{ color: config.textColor }}
                >
                  {config.closingCta.title}
                </h3>
                <p
                  className={cn("mt-4 max-w-2xl text-base leading-relaxed sm:text-lg", `[font-family:${config.fontVar}]`)}
                  style={{ color: config.mutedColor }}
                >
                  {config.closingCta.body}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a
                  href={config.closingCta.primaryHref}
                  target={config.closingCta.primaryHref.startsWith("/") || config.closingCta.primaryHref.startsWith("#") ? undefined : "_blank"}
                  rel={config.closingCta.primaryHref.startsWith("/") || config.closingCta.primaryHref.startsWith("#") ? undefined : "noopener noreferrer"}
                  className="inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold transition-[transform,box-shadow] duration-300 hover:-translate-y-[1px]"
                  style={{
                    color: "#FFFFFF",
                    background: `linear-gradient(135deg, ${config.accent}, ${config.accentSoft})`,
                    boxShadow: `0 18px 40px ${config.accentSoft}30`,
                  }}
                >
                  {config.closingCta.primaryLabel}
                </a>
                {config.closingCta.secondaryLabel && config.closingCta.secondaryHref ? (
                  <a
                    href={config.closingCta.secondaryHref}
                    target={config.closingCta.secondaryHref.startsWith("/") || config.closingCta.secondaryHref.startsWith("#") ? undefined : "_blank"}
                    rel={config.closingCta.secondaryHref.startsWith("/") || config.closingCta.secondaryHref.startsWith("#") ? undefined : "noopener noreferrer"}
                    className="inline-flex items-center rounded-full border px-5 py-3 text-sm font-semibold transition-[transform,background-color] duration-300 hover:-translate-y-[1px]"
                    style={{
                      color: config.textColor,
                      borderColor: `${config.accent}22`,
                      background: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {config.closingCta.secondaryLabel}
                  </a>
                ) : null}
              </div>
            </div>
          </Card>
        </section>
      </Container>

      <div className="fixed bottom-4 left-1/2 z-40 w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 md:hidden">
        <div
          className="flex items-center justify-between gap-2 rounded-full border px-3 py-2 shadow-[0_18px_42px_rgba(14,31,48,0.18)] backdrop-blur-[18px]"
          style={{
            borderColor: `${config.accent}18`,
            background: "rgba(255,255,255,0.88)",
          }}
        >
          {config.floatingActions.map((action) => {
            const label = action.label.toLowerCase();
            const content = (
              <span className="inline-flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-2 text-sm font-semibold">
                <span style={{ color: config.accent }}>{iconForAction(action.kind)}</span>
                <span style={{ color: config.textColor }}>{action.label}</span>
              </span>
            );

            if (!action.href) {
              return (
                <div key={label} className="pointer-events-none flex-1 opacity-60">
                  {content}
                </div>
              );
            }

            return (
              <a
                key={label}
                href={action.href}
                target={action.href.startsWith("/") || action.href.startsWith("#") ? undefined : "_blank"}
                rel={action.href.startsWith("/") || action.href.startsWith("#") ? undefined : "noopener noreferrer"}
                className="flex-1 rounded-full transition-[background-color] duration-300 hover:bg-white/70"
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
