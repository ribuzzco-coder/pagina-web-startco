"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Card } from "./card";

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

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setShowAfter((current) => !current);
    }, 2800);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <Card
      className={cn(
        "group relative min-h-[290px] overflow-hidden rounded-[28px] border-white/10 p-0",
        className,
      )}
      glowTone="purple"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.06),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_22%)]" />

      <div className="relative isolate h-full min-h-[290px] overflow-hidden">
        <div className="absolute inset-0 p-6 sm:p-7">
          <div className="flex h-full flex-col">
            <div className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#98A0B3]">
              Antes
            </div>
            <div className="mt-5 flex-1">
              <h3 className="max-w-[18rem] text-xl font-semibold leading-tight text-[#F5F7FA]">
                {beforeTitle}
              </h3>
              <p className="mt-3 max-w-[22rem] text-sm leading-relaxed text-[#98A0B3] sm:text-[0.96rem]">
                {beforeDescription}
              </p>
            </div>
            <div className="mt-5 h-px w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.16),transparent)]" />
          </div>
        </div>

        <div
          className={cn(
            "absolute inset-0 z-[2] p-6 transition-transform duration-[950ms] ease-[cubic-bezier(0.65,0,0.35,1)] will-change-transform sm:p-7",
            showAfter ? "translate-x-0" : "translate-x-[104%]",
          )}
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(13,16,28,0.98),rgba(19,22,38,0.97)_48%,rgba(36,14,46,0.98))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(15,239,253,0.12),transparent_24%),radial-gradient(circle_at_80%_32%,rgba(230,37,255,0.16),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_22%)]" />
          <div className="absolute left-0 top-0 h-full w-px bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.75),transparent)] shadow-[0_0_30px_rgba(255,255,255,0.22)]" />
          <div className="absolute left-0 top-0 h-full w-16 bg-[linear-gradient(90deg,rgba(255,255,255,0.16),transparent)] blur-xl" />

          <div className="relative flex h-full flex-col">
            <div className="inline-flex w-fit rounded-full border border-[#0FEFFD]/16 bg-[#0B111A]/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C7F8FF]">
              Despues
            </div>
            <div className="mt-5 flex-1">
              <h3 className="max-w-[19rem] text-xl font-semibold leading-tight text-[#F5F7FA]">
                {afterTitle}
              </h3>
              <p className="mt-3 max-w-[22rem] text-sm leading-relaxed text-[#C7CBD6] sm:text-[0.96rem]">
                {afterDescription}
              </p>
            </div>
            <div className="mt-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0FEFFD]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0FEFFD]" />
              Con sistema comercial
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
