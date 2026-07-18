"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { OfferPackage } from "@/lib/content";

type StageTabsProps = {
  packages: OfferPackage[];
};

function StageCardContent({ pkg }: { pkg: OfferPackage }) {
  return (
    <div className="grid gap-5 lg:grid-cols-2 lg:items-stretch">
      <div className="flex h-full flex-col rounded-[20px] border border-white/8 bg-white/[0.02] p-6">
        <h3 className="text-2xl font-semibold tracking-tight text-[#E4DFF7] [text-wrap:balance] sm:text-3xl">
          {pkg.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[#CEC6E0] [text-wrap:pretty] sm:text-base">{pkg.forWhom}</p>

        <div className="mt-5 grid flex-1 auto-rows-fr gap-3">
          <div className="rounded-2xl border border-[#6939E2]/24 bg-[#6939E2]/8 px-4 py-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8b6ff0]">
              Marcas que llegan aquí
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#E4DFF7] [text-wrap:pretty]">{pkg.typicalNeed}</p>
          </div>

          <div className="rounded-2xl border border-white/8 bg-white/[0.025] px-4 py-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#98A0B3]">
              Normalmente está fallando
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#CEC6E0] [text-wrap:pretty]">{pkg.typicalFailure}</p>
          </div>
        </div>
      </div>

      <div className="flex h-full flex-col rounded-[20px] border border-white/8 bg-white/[0.02] p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#98A0B3]">
          Qué entregamos
        </p>

        <ul className="mt-5 flex-1 space-y-3 text-sm text-[#CEC6E0] [text-wrap:pretty]">
          {pkg.includes.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6939E2]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-2xl border border-[#6939E2]/28 bg-[#6939E2]/8 px-4 py-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8b6ff0]">
            Cómo se estructura
          </p>
          <p className="mt-2 text-sm font-semibold leading-relaxed text-[#E4DFF7] [text-wrap:pretty]">
            {pkg.billing}
          </p>
        </div>
      </div>
    </div>
  );
}

export function StageTabs({ packages }: StageTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardHeight, setCardHeight] = useState<number>();
  const measureRefs = useRef<Array<HTMLDivElement | null>>([]);
  const active = packages[activeIndex];

  // Los paquetes tienen distinto número de elementos y textos por etapa,
  // así que cada tab renderiza a una altura natural distinta. Medimos todas las
  // variantes fuera de vista y fijamos la card a la más alta, para que no
  // salte de tamaño (ni empuje el botón/los puntos de abajo) al cambiar de tab.
  useEffect(() => {
    function measure() {
      const heights = measureRefs.current.map((el) => el?.offsetHeight ?? 0);
      const max = Math.max(...heights, 0);
      if (max > 0) setCardHeight(max);
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [packages]);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Etapas del paquete RiBuzz"
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
      >
        {packages.map((pkg, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={pkg.title}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-[border-color,background-color,color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isActive
                  ? "border-[#6939E2]/60 bg-[linear-gradient(135deg,#6939E2,#4E06BA)] text-white shadow-[0_0_16px_rgba(105,57,226,0.32)]"
                  : "border-white/10 bg-white/[0.03] text-[#98A0B3] hover:border-[#6939E2]/30 hover:bg-white/[0.06] hover:text-[#E4DFF7]",
              )}
            >
              <span
                className={cn(
                  "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold",
                  isActive ? "bg-white/20 text-white" : "bg-white/8 text-[#98A0B3]",
                )}
              >
                {index + 1}
              </span>
              {pkg.title}
            </button>
          );
        })}
      </div>

      {/* Copia oculta de cada variante, solo para medir su altura natural */}
      <div className="invisible h-0 overflow-hidden" aria-hidden>
        {packages.map((pkg, index) => (
          <div
            key={pkg.title}
            ref={(el) => {
              measureRefs.current[index] = el;
            }}
          >
            <Card className="rounded-[24px] p-6 sm:p-10">
              <StageCardContent pkg={pkg} />
            </Card>
          </div>
        ))}
      </div>

      <div className="relative mt-8 overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,rgba(22,24,38,0.5),rgba(11,11,16,0.2))] p-2 sm:p-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card
              className="rounded-[24px] p-6 sm:p-10"
              style={cardHeight ? { minHeight: cardHeight } : undefined}
            >
              <StageCardContent pkg={active} />
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex justify-center gap-1.5">
        {packages.map((pkg, index) => (
          <span
            key={pkg.title}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              index === activeIndex ? "w-6 bg-[#6939E2]" : "w-1.5 bg-white/15",
            )}
          />
        ))}
      </div>
    </div>
  );
}
