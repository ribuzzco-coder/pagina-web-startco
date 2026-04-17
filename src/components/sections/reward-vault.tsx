"use client";

import Image from "next/image";
import { type CSSProperties, useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BoxVisual, GiftIcon } from "@/components/ui/gift-box-visual";

type RewardDoc = {
  title: string;
  description: string;
  href: string;
  cover: string;
};

const docs: RewardDoc[] = [
  {
    title: "Hagamos una oferta que nos lleve al espacio",
    description:
      "Una guÃ­a para estructurar una oferta con mÃ¡s claridad, intenciÃ³n y direcciÃ³n comercial.",
    href: "/hagamos-una-oferta-que-nos-lleve.pdf",
    cover: "/regalo-oferta-portada.png",
  },
  {
    title: "Un imÃ¡n para tu oferta y el valor de compartirlo",
    description:
      "Un recurso breve para entender cÃ³mo volver tu propuesta mÃ¡s atractiva y memorable.",
    href: "/un-iman-para-tu-oferta.pdf",
    cover: "/regalo-iman-portada.png",
  },
];

type SlideToUnlockProps = {
  onUnlock: () => void;
};

function SlideToUnlock({ onUnlock }: SlideToUnlockProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [dragging, setDragging] = useState(false);

  const updateFromClientX = useCallback(
    (clientX: number) => {
      const track = trackRef.current;
      if (!track || !dragging) {
        return;
      }

      const rect = track.getBoundingClientRect();
      const handleSize = 58;
      const next = (clientX - rect.left - handleSize / 2) / (rect.width - handleSize);
      setProgress(Math.min(Math.max(next, 0), 1));
    },
    [dragging],
  );

  const stopDrag = useCallback(() => {
    if (!dragging) {
      return;
    }

    setDragging(false);
    if (progress > 0.8) {
      setProgress(1);
      onUnlock();
      return;
    }

    setProgress(0);
  }, [dragging, onUnlock, progress]);

  const startDrag = useCallback(
    (clientX?: number) => {
      if (progress >= 1) {
        return;
      }

      setDragging(true);
      if (typeof clientX === "number") {
        updateFromClientX(clientX);
      }
    },
    [progress, updateFromClientX],
  );

  const fillWidth = `${progress * 100}%`;
  const handleOffset = `calc(${progress * 100}% - ${progress * 58}px)`;

  useEffect(() => {
    if (!dragging) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      updateFromClientX(event.clientX);
    };

    const handlePointerUp = () => {
      stopDrag();
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, [dragging, stopDrag, updateFromClientX]);

  return (
    <div className="mt-8 flex justify-center">
      <div
        ref={trackRef}
        className="relative h-[74px] w-full max-w-[430px] touch-pan-y rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(18,22,34,0.94),rgba(12,14,20,0.98))] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_0_28px_rgba(230,37,255,0.08)]"
        onPointerDown={(event) => {
          startDrag(event.clientX);
        }}
      >
        <div
          className="pointer-events-none absolute inset-y-2 left-2 rounded-full bg-[linear-gradient(90deg,rgba(230,37,255,0.34),rgba(15,239,253,0.2))] transition-[width] duration-200 ease-out"
          style={{ width: fillWidth }}
        />
        <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_24%_50%,rgba(230,37,255,0.14),transparent_26%),radial-gradient(circle_at_75%_50%,rgba(15,239,253,0.1),transparent_26%)]" />
        <div className="relative flex h-full items-center justify-center px-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#D5DBE7] sm:text-[15px]">
            Desliza para abrir
          </span>
        </div>
        <button
          type="button"
          aria-label="Deslizar para desbloquear"
          className={cn(
            "absolute top-2 flex h-[58px] w-[58px] items-center justify-center rounded-full border border-white/18 bg-[linear-gradient(135deg,#FAFAFA,#EDE8F9)] text-[#7A1A8A] shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_12px_24px_rgba(0,0,0,0.22),0_0_16px_rgba(230,37,255,0.16)] transition-[transform,left] duration-200 ease-out",
            dragging && "scale-[1.02]",
          )}
          style={{ left: handleOffset }}
          onPointerDown={(event) => startDrag(event.clientX)}
        >
          <GiftIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

function RewardCard({ doc, index }: { doc: RewardDoc; index: number }) {
  return (
    <Card
      glowTone={index === 0 ? "purple" : "cyan"}
      className="flex h-full flex-col items-center rounded-[28px] border-white/12 bg-[linear-gradient(180deg,rgba(18,21,32,0.98),rgba(12,14,20,0.98))] p-5 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_48px_rgba(0,0,0,0.24)]"
    >
      <div className="flex w-full items-center gap-4 rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-3 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <div className="overflow-hidden rounded-[18px] border border-white/10 bg-black/25 shadow-[0_10px_24px_rgba(0,0,0,0.2)]">
          <div className="relative aspect-[9/16] w-[74px] bg-[#0c0d14] sm:w-[84px]">
            <Image
              src={doc.cover}
              alt={`Portada de ${doc.title}`}
              fill
              className="object-cover object-top"
              sizes="84px"
            />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
            Documento desbloqueado
          </p>
          <h3 className="mt-2 text-lg font-semibold tracking-tight text-[#F5F7FA] sm:text-xl">
            {doc.title}
          </h3>
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-[22px] border border-white/10 bg-black/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <div className="relative mx-auto aspect-[9/16] w-full max-w-[220px] bg-[#0c0d14]">
          <Image
            src={doc.cover}
            alt={`Portada de ${doc.title}`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 160px, 220px"
          />
        </div>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
        {doc.description}
      </p>

      <div className="mt-auto flex justify-center pt-5">
        <Button href={doc.href} variant="secondary" size="md" className="min-w-[108px]">
          Leer
        </Button>
      </div>
    </Card>
  );
}

function GalacticBurst() {
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const pointerXSpring = useSpring(pointerX, { stiffness: 120, damping: 18, mass: 0.5 });
  const pointerYSpring = useSpring(pointerY, { stiffness: 120, damping: 18, mass: 0.5 });
  const glowX = useTransform(pointerXSpring, (value) => `${value * 100}%`);
  const glowY = useTransform(pointerYSpring, (value) => `${value * 100}%`);
  const overlayBackground = useMotionTemplate`radial-gradient(circle at ${glowX} ${glowY}, rgba(255,255,255,0.16), transparent 34%)`;

  const comets = useMemo(
    () =>
      Array.from({ length: 24 }, (_, index) => {
        const startX = 8 + (index % 5) * 18;
        const startY = -6 - (index % 4) * 7;
        const travelX = 180 + (index % 4) * 40;
        const travelY = 220 + (index % 5) * 34;
        const color =
          index % 3 === 0
            ? "rgba(230,37,255,0.95)"
            : index % 3 === 1
              ? "rgba(15,239,253,0.92)"
              : "rgba(255,111,168,0.92)";

        return {
          id: index,
          startX,
          startY,
          travelX,
          travelY,
          color,
          delay: `${index * 55}ms`,
          duration: `${900 + index * 22}ms`,
          length: `${120 + (index % 4) * 28}px`,
        };
      }),
    [],
  );

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-[120] overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(230,37,255,0.28),rgba(255,111,168,0.16)_30%,transparent_74%)] blur-[72px] animate-[reward-bloom_1200ms_cubic-bezier(0.16,1,0.3,1)_forwards]" />
        {comets.map((comet) => (
          <span
            key={comet.id}
            className="absolute block h-[3px] rounded-full opacity-0 blur-[1px] shadow-[0_0_18px_currentColor] animate-[reward-streak_var(--duration)_cubic-bezier(0.16,1,0.3,1)_forwards]"
            style={
              {
                top: `${comet.startY}%`,
                left: `${comet.startX}%`,
                width: comet.length,
                "--angle": "45deg",
                "--distance": `${Math.hypot(comet.travelX, comet.travelY)}px`,
                "--duration": comet.duration,
                animationDelay: comet.delay,
                background: `linear-gradient(90deg, ${comet.color}, transparent)`,
                transform: `rotate(45deg) translate(${comet.travelX / 4}px, ${comet.travelY / 4}px)`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[32px]">
        <motion.div
          className="absolute inset-0 opacity-0 animate-[reward-bloom_900ms_cubic-bezier(0.22,1,0.36,1)_forwards]"
          style={{ background: overlayBackground }}
        />
      </div>
    </>
  );
}

export function RewardVault() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FF9EB0]">
          Regalos RiBuzz
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#F5F7FA] sm:text-5xl">
          Te traemos valor que nos habrÃ­a gustado saber antes.
        </h1>
      </div>

      <div className="relative mx-auto mt-10 max-w-2xl">
        <Card className="relative overflow-hidden rounded-[32px] border-[#ff4d6d]/20 bg-[linear-gradient(180deg,rgba(22,16,30,0.96),rgba(11,11,16,0.99))] p-8 shadow-[0_0_0_1px_rgba(255,77,109,0.12),0_0_36px_rgba(255,77,109,0.16),0_28px_70px_rgba(0,0,0,0.32)] sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(255,111,168,0.12),transparent_22%),radial-gradient(circle_at_78%_22%,rgba(15,239,253,0.12),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(230,37,255,0.12),transparent_32%)]" />
          {isUnlocked ? <GalacticBurst /> : null}

          <div className="relative z-10">
            <BoxVisual isUnlocked={isUnlocked} />

            {isUnlocked ? (
              <div className="mt-8 grid animate-[reward-reveal_520ms_cubic-bezier(0.22,1,0.36,1)_forwards] gap-4 sm:grid-cols-2">
                {docs.map((doc, index) => (
                  <RewardCard key={doc.title} doc={doc} index={index} />
                ))}
              </div>
            ) : (
              <SlideToUnlock onUnlock={() => setIsUnlocked(true)} />
            )}
          </div>
        </Card>
      </div>

      <div className="mx-auto mt-6 max-w-2xl">
        <Card className="rounded-[28px] border-white/10 bg-[linear-gradient(180deg,rgba(18,21,32,0.92),rgba(12,14,20,0.96))] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_18px_44px_rgba(0,0,0,0.2)]">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div className="max-w-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7EF6FF]">
                Siguiente paso
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#F5F7FA]">
                Si quieres aterrizar estas ideas, agendemos una conversacion breve.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#98A0B3]">
                Reserva un espacio con RiBuzz y revisamos tu caso para definir si vale la
                pena avanzar a un siguiente paso.
              </p>
            </div>

            <Button
              href="https://calendly.com/ribuzzco/conexion-ribuzz"
              size="md"
              className="min-w-[180px] shadow-[0_0_0_1px_rgba(230,37,255,0.16),0_0_24px_rgba(230,37,255,0.18)]"
            >
              Agenda reunion
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
