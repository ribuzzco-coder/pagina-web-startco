"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export interface NFCCardProps {
  frontImage: string;
  backImage: string;
  className?: string;
  previewOnMount?: boolean;
  showFooter?: boolean;
}

export function NFCCard({
  frontImage,
  backImage,
  className,
  previewOnMount = false,
  showFooter = true,
}: NFCCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isPreviewFlipped, setIsPreviewFlipped] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");

    const updateInputMode = () => {
      setIsTouchDevice(mediaQuery.matches);
    };

    updateInputMode();
    mediaQuery.addEventListener("change", updateInputMode);

    return () => {
      mediaQuery.removeEventListener("change", updateInputMode);
    };
  }, []);

  useEffect(() => {
    if (!previewOnMount || isTouchDevice) {
      return;
    }

    const flipTimer = window.setTimeout(() => {
      setIsPreviewFlipped(true);
    }, 900);

    const resetTimer = window.setTimeout(() => {
      setIsPreviewFlipped(false);
    }, 2600);

    return () => {
      window.clearTimeout(flipTimer);
      window.clearTimeout(resetTimer);
    };
  }, [isTouchDevice, previewOnMount]);

  const handleFlip = () => {
    if (!isTouchDevice) {
      return;
    }

    setIsFlipped((current) => !current);
  };

  return (
    <button
      type="button"
      onClick={handleFlip}
      aria-label={isTouchDevice ? "Voltear tarjeta NFC" : "Vista previa de tarjeta NFC"}
      aria-pressed={isTouchDevice ? isFlipped : undefined}
      className={cn(
        "group relative block w-full max-w-[420px] cursor-pointer rounded-[28px] bg-transparent text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E625FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B10]",
        className,
      )}
      style={{ perspective: "1800px" }}
    >
      <div className="pointer-events-none absolute inset-[-8%] -z-10 rounded-[36px] bg-[radial-gradient(circle_at_30%_10%,rgba(230,37,255,0.36),transparent_30%),radial-gradient(circle_at_80%_75%,rgba(15,239,253,0.24),transparent_28%)] blur-2xl transition duration-700 group-hover:scale-105" />

      <div
        className={cn(
          "relative aspect-[1.586] w-full rounded-[28px] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d]",
          "group-hover:scale-[1.02] group-hover:[transform:rotateY(180deg)_rotateX(5deg)]",
          (isFlipped || isPreviewFlipped) &&
            "[transform:rotateY(180deg)_rotateX(5deg)_scale(1.02)]",
        )}
      >
        <div className="absolute inset-0 overflow-hidden rounded-[28px] border border-white/12 bg-[#09090D] shadow-[0_24px_60px_rgba(0,0,0,0.46),0_0_0_1px_rgba(255,255,255,0.05)] [backface-visibility:hidden]">
          <Image
            src={frontImage}
            alt="Frente de la tarjeta NFC RiBuzz"
            fill
            priority
            sizes="(max-width: 768px) 88vw, 420px"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.16),transparent_28%,transparent_62%,rgba(255,255,255,0.12))]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)]" />
        </div>

        <div className="absolute inset-0 overflow-hidden rounded-[28px] border border-white/12 bg-[#09090D] shadow-[0_24px_60px_rgba(0,0,0,0.46),0_0_0_1px_rgba(255,255,255,0.05)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Image
            src={backImage}
            alt="Reverso de la tarjeta NFC RiBuzz"
            fill
            sizes="(max-width: 768px) 88vw, 420px"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_32%,transparent_68%,rgba(255,255,255,0.08))]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.42),transparent)]" />
        </div>
      </div>

      {showFooter ? (
        <div className="mt-4 flex items-center justify-between gap-4 px-1 text-xs uppercase tracking-[0.16em] text-[#98A0B3]">
          <span>{isTouchDevice ? "Toca para voltear" : "Pasa el cursor para voltear"}</span>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[#C7CBD6]">
            NFC showcase
          </span>
        </div>
      ) : null}
    </button>
  );
}
