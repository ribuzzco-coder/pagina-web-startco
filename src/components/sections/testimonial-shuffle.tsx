"use client";

import { type PanInfo, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/container";
import { PillBadge } from "@/components/ui/pill-badge";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote:
      "La intervenci\u00f3n de RiBuzz nos dio claridad sobre las prioridades de nuestra operaci\u00f3n comercial. Pasamos de reaccionar a estructurar un flujo de ventas que nuestro equipo ahora ejecuta con autonom\u00eda.",
    author: "Neomech",
    role: "Empresa B2B en Medell\u00edn",
  },
  {
    id: 2,
    quote:
      "RiBuzz identific\u00f3 el cuello de botella en la conversi\u00f3n y nos ayud\u00f3 a resolverlo con herramientas y estrategias de adquisici\u00f3n. En dos meses llegamos a mejorar un 50% las ventas.",
    author: "Facial Fitness",
    role: "Empresa B2C Digital",
  },
  {
    id: 3,
    quote:
      "Con RiBuzz redujimos la fricci\u00f3n en nuestro flujo de adquisici\u00f3n logramos transmitir una mejor experiencia al usuario. Se implement\u00f3 el proceso comercial con una mejor adquisici\u00f3n.",
    author: "Terratravel",
    role: "Empresas B2B Digital",
  },
] as const;

type CardPosition = "front" | "middle" | "back";

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
};

export function TestimonialShuffle() {
  const [positions, setPositions] = useState<CardPosition[]>(["front", "middle", "back"]);
  const [isInteracting, setIsInteracting] = useState(false);
  const suppressClickRef = useRef(false);

  const handleShuffle = useCallback(() => {
    setPositions((current) => {
      const rotated = [...current];
      const last = rotated.pop();
      if (!last) return current;
      rotated.unshift(last);
      return rotated as CardPosition[];
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
          <PillBadge>Testimonios</PillBadge>
          <h2 className="mt-6 max-w-lg font-heading text-3xl leading-tight text-[#F5F7FA] sm:text-4xl">
            Experiencias de empresas que ordenaron su crecimiento con RiBuzz.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
            Arrastra o haz clic en las tarjetas para ver m&aacute;s testimonios de nuestros clientes.
          </p>
        </div>

        <div
          className="relative mx-auto h-[412px] w-[310px] cursor-pointer sm:h-[400px] sm:w-[360px]"
          onPointerEnter={() => setIsInteracting(true)}
          onPointerLeave={() => setIsInteracting(false)}
        >
          <div className="pointer-events-none absolute inset-x-10 bottom-2 h-18 rounded-full bg-[radial-gradient(circle,rgba(230,37,255,0.18),transparent_68%)] blur-2xl" />
          {testimonials.map((testimonial, index) => {
            const position = positions[index];
            const isFront = position === "front";

            return (
              <motion.article
                key={testimonial.id}
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
                )}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E7B0EE]">
                      Testimonio
                    </p>
                    {isFront ? (
                      <div className="flex items-center gap-1.5">
                        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#E7B0EE]/40" />
                        <span className="text-[10px] uppercase tracking-widest text-[#98A0B3]/60">
                          Desliza
                        </span>
                      </div>
                    ) : null}
                  </div>
                  <p className="mt-5 text-[1rem] leading-relaxed text-[#F5F7FA] sm:mt-6 sm:text-[1.15rem]">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>

                <div className="mt-6 border-t border-white/8 pt-4 text-left sm:mt-8 sm:pt-5">
                  <p className="text-sm font-semibold text-[#F5F7FA]">{testimonial.author}</p>
                  <p className="mt-1 text-sm text-[#98A0B3]">{testimonial.role}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
