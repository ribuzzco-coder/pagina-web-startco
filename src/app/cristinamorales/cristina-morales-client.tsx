"use client";

import Image from "next/image";
import { useState } from "react";

const PAGE_URL = "https://ribuzz.com/cristinamorales";
const phoneDisplay = "+57 311 319 2410";
const phoneRaw = "573113192410";
const email = "kristimove@gmail.com";
const instagramLabel = "@kristimove";
const instagramHref = "https://www.instagram.com/kristimove/";

const contactItems = [
  {
    title: phoneDisplay,
    subtitle: "WhatsApp",
    href: `https://wa.me/${phoneRaw}`,
    icon: "phone",
  },
  {
    title: email,
    subtitle: "Correo",
    href: `mailto:${email}`,
    icon: "mail",
  },
  {
    title: instagramLabel,
    subtitle: "Instagram",
    href: instagramHref,
    icon: "instagram",
  },
] as const;

function Icon({
  name,
}: {
  name: (typeof contactItems)[number]["icon"] | "addContact" | "share";
}) {
  const commonProps = {
    className: "h-5 w-5 shrink-0",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  switch (name) {
    case "phone":
      return (
        <svg {...commonProps}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.79.61 2.64a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.44-1.27a2 2 0 0 1 2.11-.45c.85.28 1.74.49 2.64.61A2 2 0 0 1 22 16.92Z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...commonProps}>
          <rect x="3" y="5" width="18" height="14" rx="2.5" />
          <path d="m5 7 7 5 7-5" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...commonProps}>
          <rect x="4" y="4" width="16" height="16" rx="5" />
          <circle cx="12" cy="12" r="3.2" />
          <path d="M16.8 7.2h.01" />
        </svg>
      );
    case "addContact":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      );
    case "share":
      return (
        <svg {...commonProps}>
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="m8.6 10.5 6.8-4" />
          <path d="m8.6 13.5 6.8 4" />
        </svg>
      );
    default:
      return null;
  }
}

function buildVCard() {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:Cristina Morales",
    "TITLE:Agente de viajes",
    "ORG:COMVIAJES",
    `TEL;TYPE=CELL:+${phoneRaw}`,
    `EMAIL;TYPE=INTERNET:${email}`,
    `URL;TYPE=INSTAGRAM:${instagramHref}`,
    "END:VCARD",
  ].join("\n");
}

export default function CristinaMoralesClient() {
  const [copied, setCopied] = useState(false);

  const handleAddContact = () => {
    const blob = new Blob([buildVCard()], { type: "text/vcard;charset=utf-8" });
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = "cristina-morales.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(objectUrl);
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Cristina Morales",
          text: "Conoce la tarjeta digital Comviajes de Cristina Morales",
          url: PAGE_URL,
        });
        return;
      }

      await navigator.clipboard.writeText(PAGE_URL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // noop
    }
  };

  return (
    <main className="-mt-[76px] min-h-[100dvh] overflow-hidden bg-[#edf7f8] text-white">
      <section className="relative flex min-h-[100dvh] items-start justify-center px-4 py-5 sm:items-center sm:py-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[#062f52]" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-3 bg-[#8ad7cf]" />
        <div className="pointer-events-none absolute right-3 top-0 h-full w-3 bg-[#c77a23]" />

        <article className="relative z-10 w-full max-w-[26rem] overflow-hidden rounded-[1.2rem] bg-[#07385f] shadow-[0_26px_70px_rgba(4,31,54,0.28)]">
          <div className="h-2 bg-[#c77a23]" />

          <div className="grid gap-6 px-6 py-7 sm:px-7">
            <div className="grid justify-items-center gap-4 text-center">
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-[7px] border-white bg-white shadow-[0_18px_42px_rgba(0,0,0,0.22)] sm:h-52 sm:w-52">
                <Image
                  src="/images/cristina/photo.png"
                  alt="Cristina Morales"
                  fill
                  sizes="(max-width: 640px) 12rem, 13rem"
                  priority
                  className="object-cover [object-position:center_18%]"
                />
              </div>

              <Image
                src="/images/cristina/comviajes-logo.png"
                alt="COMVIAJES - Compania de Viajes Mayorista"
                width={266}
                height={125}
                className="h-auto w-52"
                priority
              />
            </div>

            <div className="border-y border-white/12 py-5 text-center">
              <h1 className="font-[var(--font-montserrat)] text-[clamp(2.35rem,10vw,3.15rem)] font-black leading-[0.96] tracking-normal">
                Cristina Morales
              </h1>
              <p className="mt-2 font-[var(--font-montserrat)] text-sm font-bold text-[#8ad7cf]">
                Agente de viajes
              </p>
              <p className="mt-4 font-[var(--font-montserrat)] text-[0.7rem] font-semibold leading-relaxed text-white/64">
                Compania de Viajes Mayorista · NIT 901300294-4 · RNT 81199
              </p>
            </div>

            <div className="grid gap-3">
              {contactItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-center gap-3 rounded-[0.55rem] bg-white px-3.5 py-3 text-[#07385f] shadow-[0_10px_24px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#edf7f8] text-[#0d6f78]">
                    <Icon name={item.icon} />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <strong className="[overflow-wrap:anywhere] font-[var(--font-montserrat)] text-[0.82rem] font-bold leading-tight tracking-normal sm:text-base">
                      {item.title}
                    </strong>
                    <small className="mt-1 font-[var(--font-montserrat)] text-xs font-bold text-[#0d6f78]/70">
                      {item.subtitle}
                    </small>
                  </span>
                </a>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-[0.55rem] bg-[#c77a23] px-4 py-3 font-[var(--font-montserrat)] text-sm font-black text-white shadow-[0_16px_30px_rgba(199,122,35,0.2)] transition hover:-translate-y-0.5"
                onClick={handleAddContact}
              >
                <Icon name="addContact" />
                <span>Agregar</span>
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-[0.55rem] bg-[#8ad7cf] px-4 py-3 font-[var(--font-montserrat)] text-sm font-black text-[#052a49] shadow-[0_16px_30px_rgba(138,215,207,0.2)] transition hover:-translate-y-0.5"
                onClick={handleShare}
              >
                <Icon name="share" />
                <span>{copied ? "Copiado" : "Compartir"}</span>
              </button>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
