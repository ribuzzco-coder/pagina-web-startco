"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { SITE_CONFIG } from "@/lib/site-config";

type LandingPreview = {
  title: string;
  status: string;
  href?: string;
  kind: "startco" | "hotel" | "business" | "offer" | "event" | "portfolio";
};

const landingPreviews: LandingPreview[] = [
  {
    title: "Startco",
    status: "Tu Dise\u00f1o",
    href: "/startco",
    kind: "startco",
  },
  {
    title: "Hotel Caribe Plaza",
    status: "Espacio vac\u00edo",
    href: "/hotelcaribeplaza",
    kind: "hotel",
  },
  {
    title: "Hotel Virrey Cartagena",
    status: "Espacio vac\u00edo",
    href: "/hotelvirreycartagena",
    kind: "hotel",
  },
  {
    title: "Hotel Caribe Covenas",
    status: "Espacio vac\u00edo",
    href: "/hotelcaribecovenas",
    kind: "hotel",
  },
  {
    title: "Hotel Marie Real Cartagena",
    status: "Espacio vac\u00edo",
    href: "/hotelmarierealcartagena",
    kind: "hotel",
  },
  {
    title: "Hotel Caribbean Cartagena",
    status: "Espacio vac\u00edo",
    href: "/hotelcaribbeancartagena",
    kind: "hotel",
  },
  {
    title: "Motronik",
    status: "Espacio vac\u00edo",
    href: "/motronik",
    kind: "business",
  },
  {
    title: "Oferta premium",
    status: "Pr\u00f3ximamente",
    kind: "offer",
  },
  {
    title: "Evento o lanzamiento",
    status: "Pr\u00f3ximamente",
    kind: "event",
  },
  {
    title: "Portafolio personal",
    status: "Pr\u00f3ximamente",
    kind: "portfolio",
  },
];

function StartcoPreview() {
  return (
    <div className="landing-preview landing-preview--startco">
      <div className="landing-preview__phone">
        <div className="landing-preview__avatar">
          <Image
            src={SITE_CONFIG.logoMark}
            alt=""
            width={76}
            height={76}
            className="h-full w-full object-contain"
          />
        </div>
        <p className="landing-preview__brand">RiBuzz</p>
        <p className="landing-preview__tagline">Conecta, explora y crece con claridad.</p>
        <div className="landing-preview__links">
          <span>Instagram</span>
          <span>WhatsApp</span>
          <span>Diagn&oacute;stico</span>
          <span>Sitio web</span>
        </div>
        <div className="landing-preview__feature-grid">
          <span>NFC</span>
          <span>Neo-Mech</span>
        </div>
        <div className="landing-preview__soon">Recursos y accesos</div>
      </div>
    </div>
  );
}

function PlaceholderPreview({ kind }: { kind: LandingPreview["kind"] }) {
  const isOffer = kind === "offer";
  const isEvent = kind === "event";
  const isHotel = kind === "hotel";
  const isBusiness = kind === "business";

  return (
    <div className={`landing-preview landing-preview--${kind}`}>
      <div className="landing-preview__mock">
        <div className="landing-preview__orb" />
        <div className="landing-preview__bar landing-preview__bar--wide" />
        <div className="landing-preview__bar" />
        <div className="landing-preview__grid">
          <span />
          <span />
          <span />
        </div>
        <div className="landing-preview__cta">
          {isOffer
            ? "Oferta"
            : isEvent
              ? "Evento"
              : isHotel
                ? "Hotel"
                : isBusiness
                  ? "Marca"
                  : "Perfil"}
        </div>
      </div>
    </div>
  );
}

function PreviewContent({ item }: { item: LandingPreview }) {
  return (
    <>
      <div className="landing-carousel__shine" />
      {item.kind === "startco" ? <StartcoPreview /> : <PlaceholderPreview kind={item.kind} />}
      <div className="landing-carousel__label">
        <p>{item.title}</p>
        <span>{item.status}</span>
      </div>
    </>
  );
}

function getSlot(index: number, activeIndex: number) {
  const offset = (index - activeIndex + landingPreviews.length) % landingPreviews.length;
  const lastOffset = landingPreviews.length - 1;
  const penultimateOffset = landingPreviews.length - 2;

  if (offset === 0) {
    return "center";
  }

  if (offset === 1) {
    return "right";
  }

  if (offset === 2) {
    return "back";
  }

  if (offset === 3) {
    return "back-left";
  }

  if (offset === penultimateOffset) {
    return "back-left";
  }

  if (offset === lastOffset) {
    return "left";
  }

  return "hidden";
}

export function LandingCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % landingPreviews.length);
  }, []);

  const goPrevious = useCallback(() => {
    setActiveIndex((current) => (current - 1 + landingPreviews.length) % landingPreviews.length);
  }, []);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const interval = window.setInterval(goNext, 5400);
    return () => window.clearInterval(interval);
  }, [goNext, isPaused]);

  return (
    <div
      className="landing-carousel mt-14"
      aria-label="Ejemplos de landings"
      onPointerEnter={() => setIsPaused(true)}
      onPointerLeave={() => setIsPaused(false)}
    >
      <button
        type="button"
        className="landing-carousel__arrow landing-carousel__arrow--left"
        aria-label="Ver landing anterior"
        onClick={goPrevious}
      >
        <span />
      </button>
      <button
        type="button"
        className="landing-carousel__arrow landing-carousel__arrow--right"
        aria-label="Ver siguiente landing"
        onClick={goNext}
      >
        <span />
      </button>

      <div className="landing-carousel__floor" />
      {landingPreviews.map((item, index) => {
        const slot = getSlot(index, activeIndex);
        const cardClassName = `landing-carousel__card landing-carousel__card--${item.kind} landing-carousel__card--slot-${slot}`;

        if (item.href) {
          return (
            <a key={item.title} href={item.href} className={cardClassName}>
              <PreviewContent item={item} />
            </a>
          );
        }

        return (
          <article key={item.title} className={cardClassName}>
            <PreviewContent item={item} />
          </article>
        );
      })}
    </div>
  );
}
