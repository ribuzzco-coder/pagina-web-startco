"use client";

import { type PointerEvent as ReactPointerEvent, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type BeforeAfterWipeCardProps = {
  beforeTitle: string;
  beforeDescription: string;
  afterTitle: string;
  afterDescription: string;
  className?: string;
};

export function BeforeAfterWipeCard({
  beforeTitle,
  beforeDescription,
  afterTitle,
  afterDescription,
  className,
}: BeforeAfterWipeCardProps) {
  const [showAfter, setShowAfter] = useState(false);
  const swipeStartXRef = useRef<number | null>(null);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse") {
      return;
    }

    swipeStartXRef.current = event.clientX;
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" || swipeStartXRef.current === null) {
      return;
    }

    const deltaX = event.clientX - swipeStartXRef.current;

    if (deltaX <= -32) {
      setShowAfter(true);
      swipeStartXRef.current = event.clientX;
    }

    if (deltaX >= 32) {
      setShowAfter(false);
      swipeStartXRef.current = event.clientX;
    }
  };

  const resetSwipe = () => {
    swipeStartXRef.current = null;
  };

  return (
    <div
      className={cn(
        "group relative min-h-[250px] overflow-hidden rounded-[26px] border border-white/10 p-0 shadow-[0_10px_24px_rgba(0,0,0,0.22)] touch-pan-y",
        className,
      )}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") {
          setShowAfter(true);
        }
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") {
          setShowAfter(false);
        }
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={resetSwipe}
      onPointerCancel={resetSwipe}
    >
      <div className="relative isolate h-full min-h-[250px] overflow-hidden">
        <div
          className={cn(
            "absolute inset-0 z-[1] transition-transform duration-[820ms] ease-[cubic-bezier(0.65,0,0.35,1)] will-change-transform",
            showAfter ? "-translate-x-[104%]" : "translate-x-0",
          )}
        >
          <div className="absolute inset-0 rounded-[inherit] bg-[linear-gradient(180deg,rgba(18,21,33,0.98),rgba(12,13,21,0.98))]" />
          <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.06),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_22%)]" />
          <div className="relative flex h-full flex-col p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <div className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#98A0B3]">
                Antes
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#98A0B3] md:hidden">
                Desliza
              </span>
            </div>
            <div className="mt-4 flex-1">
              <h3 className="max-w-[17rem] text-[1.05rem] font-semibold leading-tight text-[#F5F7FA] sm:text-[1.12rem]">
                {beforeTitle}
              </h3>
              <p className="mt-2.5 max-w-[20rem] text-[0.88rem] leading-relaxed text-[#98A0B3] sm:text-[0.92rem]">
                {beforeDescription}
              </p>
            </div>
            <div className="mt-4 h-px w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.16),transparent)]" />
          </div>
        </div>

        <div
          className={cn(
            "absolute inset-0 z-[2] transition-transform duration-[820ms] ease-[cubic-bezier(0.65,0,0.35,1)] will-change-transform",
            showAfter ? "translate-x-0" : "translate-x-[104%]",
          )}
        >
          <div className="absolute inset-0 rounded-[inherit] bg-[linear-gradient(135deg,rgba(13,16,28,1),rgba(19,22,38,0.985)_48%,rgba(36,14,46,1))]" />
          <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_18%_22%,rgba(15,239,253,0.12),transparent_24%),radial-gradient(circle_at_80%_32%,rgba(230,37,255,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_22%)]" />
          <div className="absolute left-0 top-0 h-full w-px bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.75),transparent)] shadow-[0_0_30px_rgba(255,255,255,0.22)]" />
          <div className="absolute left-0 top-0 h-full w-16 bg-[linear-gradient(90deg,rgba(255,255,255,0.16),transparent)] blur-xl" />

          <div className="relative flex h-full flex-col p-5 sm:p-6">
            <div className="inline-flex w-fit rounded-full border border-[#0FEFFD]/16 bg-[#0B111A]/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C7F8FF]">
              Despues
            </div>
            <div className="mt-4 flex-1">
              <h3 className="max-w-[17rem] text-[1.05rem] font-semibold leading-tight text-[#F5F7FA] sm:text-[1.12rem]">
                {afterTitle}
              </h3>
              <p className="mt-2.5 max-w-[20rem] text-[0.88rem] leading-relaxed text-[#C7CBD6] sm:text-[0.92rem]">
                {afterDescription}
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0FEFFD]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0FEFFD]" />
              Con RiBuzz
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
