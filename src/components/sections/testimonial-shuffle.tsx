"use client";

import { type PanInfo, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/container";
import { PillBadge } from "@/components/ui/pill-badge";
import { trustSignals } from "@/lib/content";
import { cn } from "@/lib/utils";

type QuoteCard = {
  type: "quote";
  id: string;
  quote: string;
  author: string;
  role: string;
};

type CaseCard = {
  type: "case";
  id: string;
  description: string;
  client: string;
  headline: string;
};

type DeckCard = QuoteCard | CaseCard;

const quoteCards: QuoteCard[] = [
  {
    type: "quote",
    id: "quote-neomech",
    quote:
      "La intervención de RiBuzz nos dio claridad sobre las prioridades de nuestra operación comercial. Nos acompañaron en la gestión del negocio y en diseñar el proceso de adquisición de clientes que hoy ejecutamos con autonomía.",
    author: "Neomech",
    role: "Emprendimiento en construcción · Medellín",
  },
  {
    type: "quote",
    id: "quote-facial-fitness",
    quote:
      "RiBuzz identificó el cuello de botella en la conversión y lo resolvió con ajustes a la landing page y una estrategia de contenido en Instagram enfocada en convertir visitas en clientes.",
    author: "Facial Fitness",
    role: "Cursos digitales · persona natural",
  },
  {
    type: "quote",
    id: "quote-terratravel",
    quote:
      "Con RiBuzz rediseñamos nuestras landing pages y sumamos tarjetas NFC para conectar mejor la experiencia física y digital de nuestros huéspedes.",
    author: "TerraTravel",
    role: "Turismo · landing pages y tarjetas NFC",
  },
];

const caseCards: CaseCard[] = trustSignals.map((item, index) => {
  const [client, ...rest] = item.title.split(": ");
  return {
    type: "case",
    id: `case-${index}`,
    description: item.description,
    client,
    headline: rest.join(": "),
  };
});

const deck: DeckCard[] = quoteCards.flatMap((quoteCard, index) =>
  caseCards[index] ? [quoteCard, caseCards[index]] : [quoteCard],
);

type CardPosition = "front" | "middle" | "back" | "hidden";

const variants = {
  front: {
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    opacity: 1,
    zIndex: 30,
    boxShadow: "0 22px 64px rgba(0,0,0,0.34)",
  },
  middle: {
    x: 24,
    y: 20,
    rotate: 5,
    scale: 0.97,
    opacity: 0.8,
    zIndex: 20,
    boxShadow: "0 18px 46px rgba(0,0,0,0.28)",
  },
  back: {
    x: 48,
    y: 40,
    rotate: 10,
    scale: 0.94,
    opacity: 0.58,
    zIndex: 10,
    boxShadow: "0 12px 36px rgba(0,0,0,0.22)",
  },
  hidden: {
    x: 48,
    y: 40,
    rotate: 10,
    scale: 0.9,
    opacity: 0,
    zIndex: 0,
    boxShadow: "none",
  },
};

const positionByDepth: CardPosition[] = ["front", "middle", "back"];

export function TestimonialShuffle() {
  const [order, setOrder] = useState<number[]>(() => deck.map((_, index) => index));
  const [isInteracting, setIsInteracting] = useState(false);
  const suppressClickRef = useRef(false);

  const handleShuffle = useCallback(() => {
    setOrder((current) => {
      if (current.length < 2) return current;
      const [first, ...rest] = current;
      return [...rest, first];
    });
  }, []);

  useEffect(() => {
    if (isInteracting) {
      return;
    }

    const interval = window.setInterval(handleShuffle, 5200);
    return () => window.clearInterval(interval);
  }, [handleShuffle, isInteracting]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    setIsInteracting(false);

    if (Math.abs(info.offset.x) > 50) {
      suppressClickRef.current = true;
      handleShuffle();
      window.setTimeout(() => {
        suppressClickRef.current = false;
      }, 180);
    }
  };

  const handleCardClick = (isFront: boolean) => {
    if (!isFront || suppressClickRef.current) {
      return;
    }

    handleShuffle();
  };

  return (
    <section className="cv-auto overflow-hidden py-18 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="max-w-xl">
          <PillBadge>Testimonios y casos</PillBadge>
          <h2 className="mt-6 max-w-lg font-heading text-3xl leading-tight text-[#E4DFF7] sm:text-4xl">
            Lo que dicen nuestros clientes, y lo que hemos hecho con ellos.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
            Arrastra o haz clic en las tarjetas para ver más testimonios y casos reales.
          </p>
        </div>

        <div
          className="relative mx-auto h-[412px] w-[310px] cursor-pointer sm:h-[400px] sm:w-[360px]"
          onPointerEnter={() => setIsInteracting(true)}
          onPointerLeave={() => setIsInteracting(false)}
        >
          <div className="pointer-events-none absolute inset-x-10 bottom-2 h-18 rounded-full bg-[radial-gradient(circle,rgba(105,57,226,0.18),transparent_68%)] blur-2xl" />
          {deck.map((card, index) => {
            const depth = order.indexOf(index);
            const position: CardPosition =
              depth >= 0 && depth < 3 ? positionByDepth[depth] : "hidden";
            const isFront = position === "front";

            return (
              <motion.article
                key={card.id}
                variants={variants}
                animate={
                  isFront
                    ? {
                        ...variants.front,
                        x: [0, -4, 4, -4, 0],
                        transition: {
                          x: {
                            repeat: Infinity,
                            duration: 3,
                            repeatDelay: 2,
                          },
                        },
                      }
                    : position
                }
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  duration: 0.6,
                }}
                drag={isFront ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragStart={() => setIsInteracting(true)}
                onDragEnd={handleDragEnd}
                onClick={() => handleCardClick(isFront)}
                className={cn(
                  "absolute inset-0 flex flex-col justify-between rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(22,24,38,0.96),rgba(14,16,26,0.96))] p-5 shadow-2xl sm:p-7",
                  isFront ? "cursor-pointer active:cursor-grabbing" : "cursor-pointer",
                  position === "hidden" ? "pointer-events-none" : "",
                )}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#CEC6E0]">
                      {card.type === "quote" ? "Testimonio" : "Caso real"}
                    </p>
                    {isFront ? (
                      <div className="flex items-center gap-1.5">
                        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#CEC6E0]/40" />
                        <span className="text-[10px] uppercase tracking-widest text-[#98A0B3]/60">
                          Desliza
                        </span>
                      </div>
                    ) : null}
                  </div>
                  <p className="mt-5 text-[1rem] leading-relaxed text-[#E4DFF7] sm:mt-6 sm:text-[1.15rem]">
                    {card.type === "quote" ? `"${card.quote}"` : card.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/8 pt-4 text-left sm:mt-8 sm:pt-5">
                  <p className="text-sm font-semibold text-[#E4DFF7]">
                    {card.type === "quote" ? card.author : card.client}
                  </p>
                  <p className="mt-1 text-sm text-[#98A0B3]">
                    {card.type === "quote" ? card.role : card.headline}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
