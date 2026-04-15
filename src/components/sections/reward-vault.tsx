"use client";

import { type CSSProperties, useMemo, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type RewardDoc = {
  title: string;
  description: string;
  href: string;
};

const docs: RewardDoc[] = [
  {
    title: "Hagamos una oferta que nos lleve",
    description: "Una guía para estructurar una oferta con más claridad, intención y dirección comercial.",
    href: "/hagamos-una-oferta-que-nos-lleve.pdf",
  },
  {
    title: "Un imán para tu oferta",
    description: "Un recurso breve para entender cómo volver tu propuesta más atractiva y memorable.",
    href: "/un-iman-para-tu-oferta.pdf",
  },
];

function GiftIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 8.5h15v11h-15z" />
      <path d="M3.5 8.5h17v-3h-17z" />
      <path d="M12 5.5v14" />
      <path d="M12 8.5h-4.2c-1.1 0-2-.9-2-2 0-1 .8-1.8 1.8-1.8 2.2 0 3.4 1.4 4.4 3.8Z" />
      <path d="M12 8.5h4.2c1.1 0 2-.9 2-2 0-1-.8-1.8-1.8-1.8-2.2 0-3.4 1.4-4.4 3.8Z" />
    </svg>
  );
}

type SlideToUnlockProps = {
  onUnlock: () => void;
};

function SlideToUnlock({ onUnlock }: SlideToUnlockProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [dragging, setDragging] = useState(false);

  const startDrag = () => {
    if (progress >= 1) {
      return;
    }
    setDragging(true);
  };

  const stopDrag = () => {
    if (!dragging) {
      return;
    }

    setDragging(false);
    if (progress > 0.88) {
      setProgress(1);
      onUnlock();
      return;
    }

    setProgress(0);
  };

  const updateFromClientX = (clientX: number) => {
    const track = trackRef.current;
    if (!track || !dragging) {
      return;
    }

    const rect = track.getBoundingClientRect();
    const handleSize = 56;
    const next = (clientX - rect.left - handleSize / 2) / (rect.width - handleSize);
    setProgress(Math.min(Math.max(next, 0), 1));
  };

  const fillWidth = `${progress * 100}%`;
  const handleOffset = `calc(${progress * 100}% - ${progress * 56}px)`;

  return (
    <div className="mt-8">
      <div
        ref={trackRef}
        className="relative h-16 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(18,22,34,0.94),rgba(12,14,20,0.98))] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_0_28px_rgba(230,37,255,0.08)]"
        onPointerMove={(event) => updateFromClientX(event.clientX)}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
        onPointerLeave={stopDrag}
      >
        <div
          className="pointer-events-none absolute inset-y-1.5 left-1.5 rounded-full bg-[linear-gradient(90deg,rgba(230,37,255,0.32),rgba(15,239,253,0.2))] transition-[width] duration-200 ease-out"
          style={{ width: fillWidth }}
        />
        <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_24%_50%,rgba(230,37,255,0.14),transparent_26%),radial-gradient(circle_at_75%_50%,rgba(15,239,253,0.1),transparent_26%)]" />
        <div className="relative flex h-full items-center justify-center px-16 text-center">
          <span className="text-sm font-semibold tracking-[0.18em] text-[#D5DBE7] uppercase">
            Desliza para abrir tu regalo
          </span>
        </div>
        <button
          type="button"
          aria-label="Deslizar para desbloquear"
          className={cn(
            "absolute top-1.5 flex h-13 w-13 items-center justify-center rounded-full border border-white/18 bg-[linear-gradient(135deg,#FAFAFA,#EDE8F9)] text-[#7A1A8A] shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_12px_24px_rgba(0,0,0,0.22),0_0_16px_rgba(230,37,255,0.16)] transition-[transform,left] duration-200 ease-out",
            dragging && "scale-[1.02]",
          )}
          style={{ left: handleOffset }}
          onPointerDown={startDrag}
          onPointerUp={stopDrag}
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
      className="rounded-[28px] border-white/12 bg-[linear-gradient(180deg,rgba(18,21,32,0.98),rgba(12,14,20,0.98))] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_48px_rgba(0,0,0,0.24)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
            Documento desbloqueado
          </p>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#F5F7FA]">
            {doc.title}
          </h3>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-[#FF9BEA]">
          <GiftIcon className="h-6 w-6" />
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
        {doc.description}
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button href={doc.href} variant="secondary" size="md">
          Leer
        </Button>
        <Button href={doc.href} size="md" external>
          Descargar
        </Button>
      </div>
    </Card>
  );
}

function GalacticBurst() {
  const particles = useMemo(
    () =>
      Array.from({ length: 16 }, (_, index) => {
        const angle = (360 / 16) * index;
        const distance = 170 + (index % 4) * 28;
        const color =
          index % 3 === 0
            ? "rgba(230,37,255,0.95)"
            : index % 3 === 1
              ? "rgba(15,239,253,0.92)"
              : "rgba(255,111,168,0.92)";

        return {
          id: index,
          angle,
          distance,
          color,
          delay: `${index * 24}ms`,
          duration: `${720 + index * 16}ms`,
        };
      }),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[32px]">
      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(230,37,255,0.34),rgba(15,239,253,0.18)_42%,transparent_72%)] blur-2xl animate-[reward-bloom_820ms_cubic-bezier(0.22,1,0.36,1)_forwards]" />
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute left-1/2 top-1/2 block h-1.5 w-24 origin-left rounded-full opacity-0 blur-[1px] animate-[reward-streak_var(--duration)_cubic-bezier(0.16,1,0.3,1)_forwards]"
          style={
            {
              "--angle": `${particle.angle}deg`,
              "--distance": `${particle.distance}px`,
              "--duration": particle.duration,
              animationDelay: particle.delay,
              background: `linear-gradient(90deg, ${particle.color}, transparent)`,
            } as CSSProperties
          }
        />
      ))}
    </div>
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
          Desbloquea una caja con recursos listos para usar.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-[#98A0B3] sm:text-lg">
          Una experiencia simple: abre la caja, mira los documentos y elige si quieres
          leerlos o descargarlos.
        </p>
      </div>

      <div className="relative mx-auto mt-10 max-w-2xl">
        <Card className="relative overflow-hidden rounded-[32px] border-[#ff4d6d]/20 bg-[linear-gradient(180deg,rgba(22,16,30,0.96),rgba(11,11,16,0.99))] p-8 shadow-[0_0_0_1px_rgba(255,77,109,0.12),0_0_36px_rgba(255,77,109,0.16),0_28px_70px_rgba(0,0,0,0.32)] sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(255,111,168,0.12),transparent_22%),radial-gradient(circle_at_78%_22%,rgba(15,239,253,0.12),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(230,37,255,0.12),transparent_32%)]" />
          {isUnlocked ? <GalacticBurst /> : null}

          <div className="relative z-10">
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] text-[#FF9BEA] shadow-[0_0_24px_rgba(230,37,255,0.18)]">
              <GiftIcon className="h-14 w-14" />
            </div>

            <div className="mx-auto mt-6 max-w-xl text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-[#F5F7FA] sm:text-3xl">
                Una caja breve, útil y desbloqueable.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#C7CBD6] sm:text-base">
                Desliza para abrir la caja. Al hacerlo, aparecerán dos documentos para
                leer o descargar sin salir del estilo RiBuzz.
              </p>
            </div>

            {isUnlocked ? (
              <div className="mt-8 grid gap-4 sm:grid-cols-2 animate-[reward-reveal_520ms_cubic-bezier(0.22,1,0.36,1)_forwards]">
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
    </div>
  );
}
