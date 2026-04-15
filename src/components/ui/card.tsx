"use client";

import type { CSSProperties, HTMLAttributes, PointerEvent } from "react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

type GlowTone = "purple" | "cyan" | "green" | "pink";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  interactiveGlow?: boolean;
  glowTone?: GlowTone;
};

const glowToneVars: Record<GlowTone, CSSProperties> = {
  purple: {
    "--glow-hue-start": "284",
    "--glow-hue-end": "196",
  } as CSSProperties,
  cyan: {
    "--glow-hue-start": "191",
    "--glow-hue-end": "284",
  } as CSSProperties,
  green: {
    "--glow-hue-start": "142",
    "--glow-hue-end": "185",
  } as CSSProperties,
  pink: {
    "--glow-hue-start": "313",
    "--glow-hue-end": "284",
  } as CSSProperties,
};

export function Card({
  className,
  interactiveGlow = true,
  glowTone = "purple",
  style,
  onPointerMove,
  onPointerLeave,
  ...props
}: CardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (interactiveGlow && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      cardRef.current.style.setProperty("--glow-x", `${x}%`);
      cardRef.current.style.setProperty("--glow-y", `${y}%`);
      cardRef.current.style.setProperty("--glow-active", "1");
    }

    onPointerMove?.(event);
  };

  const handlePointerLeave = (event: PointerEvent<HTMLDivElement>) => {
    if (interactiveGlow && cardRef.current) {
      cardRef.current.style.setProperty("--glow-active", "0");
      cardRef.current.style.setProperty("--glow-x", "50%");
      cardRef.current.style.setProperty("--glow-y", "50%");
    }

    onPointerLeave?.(event);
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "surface-panel glow-card relative isolate rounded-[24px] border border-white/8 p-6 shadow-[0_10px_24px_rgba(0,0,0,0.22)]",
        !interactiveGlow && "glow-card--static",
        className,
      )}
      style={{
        ...glowToneVars[glowTone],
        ...style,
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      {...props}
    />
  );
}
