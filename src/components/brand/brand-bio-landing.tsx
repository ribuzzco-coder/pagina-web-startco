"use client";

import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import type { BrandLandingConfig, BrandAction, BrandSocial } from "@/lib/brand-landings";

function WebsiteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.9">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.8 9h16.4M3.8 15h16.4M12 3.7c2.1 2.2 3.2 5.1 3.2 8.3 0 3.2-1.1 6.1-3.2 8.3M12 3.7C9.9 5.9 8.8 8.8 8.8 12c0 3.2 1.1 6.1 3.2 8.3" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.9">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M16.8 7.2h.01" strokeLinecap="round" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
      <path d="M13.4 21v-8h2.7l.44-3H13.4V8.15c0-.87.29-1.46 1.55-1.46h1.67V4.01c-.29-.04-1.28-.12-2.43-.12-2.4 0-4.04 1.46-4.04 4.14V10H7.5v3h2.69v8h3.21Z" />
    </svg>
  );
}

function TiktokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
      <path d="M14.7 3c.24 2.05 1.41 3.46 3.3 4.02v2.72a8.3 8.3 0 0 1-3.26-1.1v6.02c0 3.52-2.26 5.84-5.53 5.84C6.33 20.5 4 18.17 4 15.3c0-3.1 2.4-5.3 5.64-5.3.3 0 .58.03.86.08v2.88a3.44 3.44 0 0 0-.87-.12c-1.52 0-2.63 1-2.63 2.39 0 1.45 1.05 2.38 2.5 2.38 1.5 0 2.34-.97 2.34-3.02V3h2.86Z" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
      <path d="M12 3.2c-4.9 0-7.4 3.51-7.4 6.44 0 1.78.67 3.36 2.1 3.95.23.1.43 0 .5-.26.05-.18.16-.63.2-.82.06-.25.04-.33-.14-.54-.4-.48-.66-1.1-.66-1.98 0-2.56 1.92-4.85 5-4.85 2.72 0 4.22 1.66 4.22 3.88 0 2.92-1.3 5.39-3.22 5.39-1.06 0-1.86-.88-1.6-1.95.3-1.28.88-2.66.88-3.58 0-.82-.44-1.5-1.35-1.5-1.07 0-1.93 1.1-1.93 2.58 0 .94.32 1.58.32 1.58l-1.28 5.42c-.38 1.6-.06 3.56-.03 3.76.02.12.17.14.23.05.1-.13 1.34-1.66 1.76-3.2.12-.44.68-2.7.68-2.7.34.65 1.33 1.22 2.38 1.22 3.14 0 5.27-2.86 5.27-6.7 0-2.9-2.46-5.6-6.2-5.6Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m5 7 7 5 7-5" />
    </svg>
  );
}

function CatalogIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
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

function ShoppingBagIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6.5 8.2h11l-.9 10a2 2 0 0 1-2 1.8H9.4a2 2 0 0 1-2-1.8l-.9-10Z" />
      <path d="M9 9V7.4a3 3 0 0 1 6 0V9" />
    </svg>
  );
}

function LinkArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
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

function iconFor(kind: BrandSocial["kind"] | BrandAction["kind"]) {
  switch (kind) {
    case "website":
      return <WebsiteIcon />;
    case "instagram":
      return <InstagramIcon />;
    case "facebook":
      return <FacebookIcon />;
    case "tiktok":
      return <TiktokIcon />;
    case "pinterest":
      return <PinterestIcon />;
    case "email":
      return <EmailIcon />;
    case "catalog":
      return <CatalogIcon />;
    case "shop":
      return <ShoppingBagIcon />;
    default:
      return <LinkArrowIcon />;
  }
}

function SocialBubble({
  social,
  iconColor,
  bubbleBg,
  bubbleBorder,
  bubbleShadow,
}: {
  social: BrandSocial;
  iconColor: string;
  bubbleBg: string;
  bubbleBorder: string;
  bubbleShadow: string;
}) {
  const content = (
    <span
      className="inline-flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full border transition-[transform,color,filter,border-color,background-color,box-shadow,opacity] duration-300 hover:-translate-y-[1px] hover:scale-[1.05] active:scale-[0.97]"
      style={{
        color: iconColor,
        background: bubbleBg,
        borderColor: bubbleBorder,
        boxShadow: bubbleShadow,
        opacity: social.href ? 1 : 0.7,
      }}
    >
      <span className="scale-[1.12]">{iconFor(social.kind)}</span>
    </span>
  );

  if (!social.href) {
    return (
      <div key={social.label} aria-label={social.label} className="pointer-events-none">
        {content}
      </div>
    );
  }

  return (
    <a
      key={social.label}
      href={social.href}
      target={social.href.startsWith("mailto:") ? undefined : "_blank"}
      rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      aria-label={social.label}
      className="block"
    >
      {content}
    </a>
  );
}

function ActionTile({
  action,
  accent,
  accentSoft,
  textColor,
  mutedColor,
  activeBg,
  activeBorder,
  inactiveBg,
  inactiveBorder,
}: {
  action: BrandAction;
  accent: string;
  accentSoft: string;
  textColor: string;
  mutedColor: string;
  activeBg: string;
  activeBorder: string;
  inactiveBg: string;
  inactiveBorder: string;
}) {
  const body = (
    <Card
      interactiveGlow={false}
      className="group relative overflow-hidden rounded-[24px] px-5 py-5 text-center transition-[border-color,transform,box-shadow,background-color,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px]"
      style={{
        background: action.href ? activeBg : inactiveBg,
        borderColor: action.href ? activeBorder : inactiveBorder,
        boxShadow: action.href
          ? `0 18px 42px ${accentSoft}18, 0 0 0 1px ${accentSoft}10`
          : `0 12px 28px rgba(0,0,0,0.08)`,
        opacity: action.href ? 1 : 0.84,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${accentSoft}22, transparent)`,
        }}
      />
      <div className="relative flex min-h-[58px] items-center justify-center text-center">
        <div className="relative z-10 min-w-0">
          <div className="mb-2 flex justify-center" style={{ color: accent }}>
            {iconFor(action.kind)}
          </div>
          <p className="text-base font-semibold" style={{ color: textColor }}>
            {action.title}
          </p>
          <p className="mt-1 text-sm" style={{ color: mutedColor }}>
            {action.description}
          </p>
          {!action.href ? (
            <span
              className="mt-3 inline-flex rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]"
              style={{
                color: accent,
                background: `${accentSoft}18`,
              }}
            >
              Próximamente
            </span>
          ) : null}
        </div>
      </div>
    </Card>
  );

  if (!action.href) {
    return <div key={action.title}>{body}</div>;
  }

  return (
    <a
      key={action.title}
      href={action.href}
      target={action.href.startsWith("/") || action.href.startsWith("mailto:") ? undefined : "_blank"}
      rel={action.href.startsWith("/") || action.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className="block"
    >
      {body}
    </a>
  );
}

export function BrandBioLanding({ config }: { config: BrandLandingConfig }) {
  const fontClass = `[font-family:${config.fontVar}]`;

  return (
    <section className="relative cv-auto -mt-[76px] min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0" style={{ background: config.background }} />
        <div className="absolute inset-0" style={{ background: config.overlay }} />
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background: `radial-gradient(circle at 16% 18%, ${config.accentSoft}18, transparent 24%), radial-gradient(circle at 82% 14%, ${config.secondarySoft}18, transparent 22%), radial-gradient(circle at 50% 100%, ${config.accentSoft}12, transparent 34%)`,
          }}
        />
      </div>

      <Container className="relative z-10 flex min-h-screen max-w-3xl flex-col items-center justify-center py-24 sm:py-32">
        <div
          className="relative w-full overflow-hidden rounded-[34px] border px-5 py-7 shadow-[0_28px_80px_rgba(0,0,0,0.18)] backdrop-blur-[16px] sm:rounded-[38px] sm:px-10 sm:py-10"
          style={{
            background: config.shellBackground,
            borderColor: config.shellBorder,
          }}
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${config.accentSoft}55, transparent)` }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(circle_at_50%_0%, ${config.accentSoft}16, transparent 30%), radial-gradient(circle_at_80%_20%, ${config.secondarySoft}12, transparent 22%)`,
            }}
          />

          <div className="absolute right-4 top-4 z-20 sm:right-6 sm:top-6" style={{ color: config.accent }}>
            <button
              type="button"
              onClick={async () => {
                try {
                  if (navigator.share) {
                    await navigator.share({
                      title: config.title,
                      text: `Explora la landing de ${config.title}`,
                      url: config.shareUrl,
                    });
                    return;
                  }
                  await navigator.clipboard.writeText(config.shareUrl);
                } catch {
                  // noop
                }
              }}
              className="inline-flex h-[3.35rem] w-[3.35rem] items-center justify-center rounded-full border border-white/16 bg-white/50 shadow-[0_10px_24px_rgba(0,0,0,0.12)] backdrop-blur-[12px] transition-[transform,border-color,background-color,box-shadow,color,filter] duration-300 hover:-translate-y-[1px] hover:scale-[1.06] hover:border-white/28 hover:bg-white/70 active:scale-[0.97] sm:h-14 sm:w-14"
              aria-label={`Compartir ${config.title}`}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-[21px] w-[21px]"
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
            </button>
          </div>

          <div className="relative flex flex-col items-center text-center">
            <div
              className="flex items-center justify-center overflow-hidden rounded-[28px] border px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.1)]"
              style={{
                background: config.logoBackground,
                borderColor: config.logoBorder,
              }}
            >
              <Image
                src={config.logoSrc}
                alt={config.logoAlt}
                width={config.logoWidth}
                height={config.logoHeight}
                className="h-auto max-h-28 w-auto object-contain sm:max-h-32"
                priority
              />
            </div>

            <h1
              className={cn("mt-6 text-4xl font-semibold tracking-tight sm:text-5xl", fontClass)}
              style={{ color: config.textColor }}
            >
              {config.title}
            </h1>

            <p
              className={cn("mt-4 max-w-xl text-sm leading-relaxed sm:text-base", fontClass)}
              style={{ color: config.mutedColor }}
            >
              {config.tagline}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {config.socials.map((social) => (
                <SocialBubble
                  key={social.label}
                  social={social}
                  iconColor={config.accent}
                  bubbleBg={config.bubbleBackground}
                  bubbleBorder={config.bubbleBorder}
                  bubbleShadow={config.bubbleShadow}
                />
              ))}
            </div>
          </div>

          <div className="relative mx-auto mt-10 grid max-w-xl gap-4">
            {config.actions.map((action) => (
              <ActionTile
                key={action.title}
                action={action}
                accent={config.accent}
                accentSoft={config.accentSoft}
                textColor={config.textColor}
                mutedColor={config.mutedColor}
                activeBg={config.actionBackground}
                activeBorder={config.actionBorder}
                inactiveBg={config.inactiveActionBackground}
                inactiveBorder={config.inactiveActionBorder}
              />
            ))}
          </div>

          <div className="relative mx-auto mt-8 grid max-w-xl gap-4 md:grid-cols-2">
            {config.infoCards.map((card) => (
              <Card
                key={card.title}
                interactiveGlow={false}
                className="rounded-[28px] px-6 py-6 text-center transition-[border-color,box-shadow,transform,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px]"
                style={{
                  background: config.cardBackground,
                  borderColor: config.cardBorder,
                  boxShadow: `0 18px 38px rgba(0,0,0,0.08)`,
                }}
              >
                <p
                  className={cn("text-[11px] font-semibold uppercase tracking-[0.16em]", fontClass)}
                  style={{ color: config.accent }}
                >
                  {card.title}
                </p>
                <p className={cn("mt-4 text-sm leading-relaxed sm:text-base", fontClass)} style={{ color: config.mutedColor }}>
                  {card.body}
                </p>
              </Card>
            ))}
          </div>

          {config.noteCard ? (
            <Card
              interactiveGlow={false}
              className="relative mx-auto mt-4 max-w-xl rounded-[26px] border-dashed px-6 py-6 text-center"
              style={{
                background: config.noteBackground,
                borderColor: config.noteBorder,
              }}
            >
              <p className={cn("text-base font-semibold", fontClass)} style={{ color: config.textColor }}>
                {config.noteCard.title}
              </p>
              <p className={cn("mt-3 text-sm leading-relaxed", fontClass)} style={{ color: config.mutedColor }}>
                {config.noteCard.body}
              </p>
            </Card>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
