"use client";

import { useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type CommercialSystemPiece = {
  title: string;
  description: string;
  details: readonly string[];
};

type CommercialSystemFlipGridProps = {
  pieces: readonly CommercialSystemPiece[];
  synthesis: string;
};

const iconPaths = [
  "M5 12h14M12 5v14M8 8l8 8",
  "M5 7h14M5 12h10M5 17h7",
  "M12 5v14M5 12h14M7 7l10 10",
  "M6 16l4-8 4 8 4-10",
  "M6 8h12M8 12h8M10 16h4",
];

export function CommercialSystemFlipGrid({ pieces, synthesis }: CommercialSystemFlipGridProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const active = pieces[activeIndex];

  return (
    <div className="mt-10">
      <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {pieces.map((piece, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={piece.title}
              type="button"
              onClick={() => {
                setActiveIndex(index);
                setShowAll(false);
              }}
              onMouseEnter={() => setActiveIndex(index)}
              className={cn(
                "group flex min-h-[245px] flex-col rounded-[20px] border bg-[linear-gradient(180deg,rgba(18,21,32,0.72),rgba(8,8,14,0.94))] p-4 text-center outline-none transition-[border-color,background-color,box-shadow] duration-300",
                isActive
                  ? "border-[#6939E2]/42 bg-[linear-gradient(180deg,rgba(24,20,43,0.78),rgba(8,8,14,0.96))] shadow-[0_0_0_1px_rgba(105,57,226,0.08)]"
                  : "border-white/8 hover:border-[#6939E2]/24",
              )}
              aria-pressed={isActive}
            >
              <CardDecorator active={isActive}>
                <SystemIcon index={index} />
              </CardDecorator>

              <div className="mt-1 flex items-center justify-center gap-2">
                <span
                  className={cn(
                    "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[10px] font-semibold text-white transition-colors",
                    isActive ? "bg-[#6939E2]" : "bg-[#6939E2]/72",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-[#E4DFF7] [text-wrap:balance]">
                  {piece.title}
                </h3>
              </div>

              <p className="mx-auto mt-4 max-w-[11.5rem] text-sm leading-relaxed text-[#98A0B3] [text-wrap:pretty]">
                {piece.description}
              </p>
            </button>
          );
        })}
      </div>

      <div className="mx-auto mt-5 max-w-5xl">
        {showAll ? (
          <div className="rounded-[22px] border border-white/8 bg-white/[0.025] p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8b6ff0]">
                Detalle completo
              </p>
              <button
                type="button"
                onClick={() => setShowAll(false)}
                className="text-xs font-semibold text-[#98A0B3] transition-colors hover:text-[#E4DFF7]"
              >
                Volver a vista limpia
              </button>
            </div>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {pieces.map((piece) => (
                <DetailBlock key={piece.title} piece={piece} compact />
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-[22px] border border-white/8 bg-white/[0.025] p-5 sm:p-6">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
              <DetailBlock piece={active} />
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-[#CEC6E0] transition-colors hover:border-[#6939E2]/40 hover:text-[#E4DFF7]"
              >
                Ver todo el detalle
              </button>
            </div>
          </div>
        )}
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-[#98A0B3] [text-wrap:pretty] sm:text-base">
        {synthesis}
      </p>
    </div>
  );
}

function DetailBlock({
  piece,
  compact = false,
}: {
  piece: CommercialSystemPiece;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        compact
          ? "rounded-[18px] border border-white/8 bg-black/10 p-4"
          : "grid flex-1 gap-5 lg:grid-cols-[0.38fr_0.62fr] lg:items-start",
      )}
    >
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8b6ff0]">
          {piece.title}
        </p>
        <p className="mt-2 text-sm font-semibold leading-snug text-[#E4DFF7] [text-wrap:balance]">
          Qué responde esta pieza dentro del sistema
        </p>
      </div>

      <ul
        className={cn(
          "grid gap-3 text-sm leading-relaxed text-[#CEC6E0] [text-wrap:pretty]",
          compact ? "text-[13px]" : "sm:grid-cols-3",
        )}
      >
        {piece.details.map((detail) => (
          <li key={detail} className="flex items-start gap-2.5">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8b6ff0]" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CardDecorator({ children, active }: { children: ReactNode; active: boolean }) {
  return (
    <div
      aria-hidden
      className="relative mx-auto flex size-24 items-center justify-center overflow-hidden [mask-image:radial-gradient(ellipse_55%_55%_at_50%_50%,#000_70%,transparent_100%)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[size:22px_22px] opacity-10" />
      <div
        className={cn(
          "absolute inset-0 m-auto flex size-10 items-center justify-center border-l border-t border-white/12 bg-[#0A0A13] text-[#8b6ff0] shadow-[0_0_18px_rgba(105,57,226,0.1)] transition-[border-color,background-color,box-shadow] duration-300",
          active && "border-[#8b6ff0]/45 bg-[#130E24] shadow-[0_0_24px_rgba(105,57,226,0.2)]",
        )}
      >
        {children}
      </div>
    </div>
  );
}

function SystemIcon({ index }: { index: number }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d={iconPaths[index % iconPaths.length]}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.8" fill="currentColor" opacity="0.24" />
    </svg>
  );
}
