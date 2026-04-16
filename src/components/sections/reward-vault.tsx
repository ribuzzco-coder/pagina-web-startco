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
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.25 10.25h13.5v8.5a1.25 1.25 0 0 1-1.25 1.25H6.5a1.25 1.25 0 0 1-1.25-1.25z" />
      <path d="M4 10.25h16v-2.1A1.15 1.15 0 0 0 18.85 7H5.15A1.15 1.15 0 0 0 4 8.15z" />
      <path d="M12 7v13" />
      <path d="M12 7c-.15-2.45-1.2-3.85-3-3.85-1.35 0-2.25.93-2.25 2.03 0 1.18.88 1.82 2.18 1.82z" />
      <path d="M12 7c.15-2.45 1.2-3.85 3-3.85 1.35 0 2.25.93 2.25 2.03 0 1.18-.88 1.82-2.18 1.82z" />
    </svg>
  );
}

function BoxVisual({ isUnlocked }: { isUnlocked: boolean }) {
  return (
    <div className="relative mx-auto h-44 w-[220px] sm:h-48 sm:w-[248px]">
      <div className="absolute inset-x-6 bottom-0 h-28 rounded-[30px] border border-[#a04da8]/50 bg-[linear-gradient(180deg,rgba(34,16,43,0.99),rgba(23,12,31,0.99))] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_54px_rgba(0,0,0,0.28),0_0_28px_rgba(230,37,255,0.14)]" />
      <div className="absolute left-1/2 top-[40px] z-20 h-[104px] w-[26px] -translate-x-1/2 rounded-[12px] bg-[linear-gradient(180deg,#ff57b2,#ff5f76)] shadow-[0_0_20px_rgba(255,95,169,0.22)]" />

      <div
        className={cn(
          "absolute inset-x-0 top-7 z-10 h-14 origin-bottom rounded-[22px] border border-[#a954b4]/60 bg-[linear-gradient(180deg,rgba(54,26,64,0.98),rgba(39,20,46,0.98))] shadow-[0_12px_28px_rgba(0,0,0,0.18),0_0_24px_rgba(230,37,255,0.16)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isUnlocked ? "-translate-y-9 rotate-[-10deg]" : "translate-y-0 rotate-0",
        )}
      >
        <span className="absolute left-1/2 top-0 h-full w-[26px] -translate-x-1/2 rounded-[10px] bg-[linear-gradient(180deg,#ff57b2,#ff5f76)] shadow-[0_0_18px_rgba(255,95,169,0.2)]" />
        <span className="absolute inset-x-0 top-1/2 h-[12px] -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,#ff5db7,#ff5d72)] shadow-[0_0_18px_rgba(255,95,169,0.18)]" />
      </div>

      <div
        className={cn(
          "pointer-events-none absolute left-1/2 top-[48px] z-[5] flex -translate-x-1/2 items-end gap-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isUnlocked ? "opacity-100" : "opacity-0",
        )}
      >
        <span className="block h-20 w-14 rotate-[-14deg] rounded-[16px] border border-[#0FEFFD]/18 bg-[linear-gradient(180deg,rgba(18,24,36,0.98),rgba(8,12,20,0.98))] shadow-[0_0_20px_rgba(15,239,253,0.14)]" />
        <span className="block h-24 w-16 rotate-[11deg] rounded-[16px] border border-[#E625FF]/18 bg-[linear-gradient(180deg,rgba(31,20,39,0.98),rgba(14,10,19,0.98))] shadow-[0_0_24px_rgba(230,37,255,0.16)]" />
      </div>
    </div>
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
    <div className="mt-8 flex justify-center">
      <div
        ref={trackRef}
        className="relative h-16 w-full max-w-[360px] rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(18,22,34,0.94),rgba(12,14,20,0.98))] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_0_28px_rgba(230,37,255,0.08)]"
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
        <div className="relative flex h-full items-center justify-center px-14 text-center">
          <span className="text-sm font-semibold tracking-[0.18em] text-[#D5DBE7] uppercase">
            Desliza para abrir
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
      className="rounded-[28px] border-white/12 bg-[linear-gradient(180deg,rgba(18,21,32,0.98),rgba(12,14,20,0.98))] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_48px_rgba(0,0,0,0.24)]"
    >
      <div className="overflow-hidden rounded-[22px] border border-white/10 bg-black/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <div className="aspect-[4/5] w-full bg-[#0c0d14]">
          <iframe
            title={`Vista previa de ${doc.title}`}
            src={`${doc.href}#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH`}
            className="h-full w-full scale-[1.01]"
          />
        </div>
      </div>

      <div className="mt-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
          Documento desbloqueado
        </p>
        <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#F5F7FA]">
          {doc.title}
        </h3>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
        {doc.description}
      </p>

      <div className="mt-5 flex">
        <Button href={doc.href} variant="secondary" size="md">
          Leer
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
          Te traemos valor que nos habría gustado saber antes.
        </h1>
      </div>

      <div className="relative mx-auto mt-10 max-w-2xl">
        <Card className="relative overflow-hidden rounded-[32px] border-[#ff4d6d]/20 bg-[linear-gradient(180deg,rgba(22,16,30,0.96),rgba(11,11,16,0.99))] p-8 shadow-[0_0_0_1px_rgba(255,77,109,0.12),0_0_36px_rgba(255,77,109,0.16),0_28px_70px_rgba(0,0,0,0.32)] sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(255,111,168,0.12),transparent_22%),radial-gradient(circle_at_78%_22%,rgba(15,239,253,0.12),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(230,37,255,0.12),transparent_32%)]" />
          {isUnlocked ? <GalacticBurst /> : null}

          <div className="relative z-10">
            <BoxVisual isUnlocked={isUnlocked} />

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
