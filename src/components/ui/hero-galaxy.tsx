"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type HeroGalaxyProps = {
  className?: string;
};

type GalaxyPoint = {
  id: string;
  left: number;
  top: number;
  size: number;
  opacity: number;
  driftX: number;
  driftY: number;
  twinkleDuration: number;
  twinkleDelay: number;
};

const LAYER_SEEDS = {
  far: 0x1f2d3c4b,
  mid: 0x5a6b7c8d,
  near: 0x10293847,
} as const;

function createLayerPoints(count: number, layer: "far" | "mid" | "near"): GalaxyPoint[] {
  const layerScale =
    layer === "far" ? { min: 0.8, max: 3.2, opacity: 0.24 } :
    layer === "mid" ? { min: 1.2, max: 5.4, opacity: 0.4 } :
    { min: 1.8, max: 8.8, opacity: 0.56 };
  const random = createSeededRandom(LAYER_SEEDS[layer]);

  return Array.from({ length: count }, (_, index) => ({
    id: `${layer}-${index}`,
    left: random() * 100,
    top: random() * 100,
    size: layerScale.min + random() * (layerScale.max - layerScale.min),
    opacity: layerScale.opacity + random() * 0.36,
    driftX: -22 + random() * 44,
    driftY: -18 + random() * 36,
    twinkleDuration: 4.5 + random() * 7,
    twinkleDelay: random() * 6,
  }));
}

function createSeededRandom(seed: number) {
  let state = seed >>> 0;

  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let mixed = Math.imul(state ^ (state >>> 15), 1 | state);
    mixed ^= mixed + Math.imul(mixed ^ (mixed >>> 7), 61 | mixed);

    return ((mixed ^ (mixed >>> 14)) >>> 0) / 4294967296;
  };
}

const FAR_POINTS = createLayerPoints(160, "far");
const MID_POINTS = createLayerPoints(120, "mid");
const NEAR_POINTS = createLayerPoints(82, "near");

export function HeroGalaxy({ className }: HeroGalaxyProps) {
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!shellRef.current) {
      return;
    }

    const shell = shellRef.current;

    const updatePerspective = (clientX: number, clientY: number) => {
      const rect = shell.getBoundingClientRect();
      const px = (clientX - rect.left) / rect.width - 0.5;
      const py = (clientY - rect.top) / rect.height - 0.5;

      shell.style.setProperty("--galaxy-rotate-y", `${px * 28}deg`);
      shell.style.setProperty("--galaxy-rotate-x", `${py * -22}deg`);
      shell.style.setProperty("--galaxy-shift-x", `${px * 74}px`);
      shell.style.setProperty("--galaxy-shift-y", `${py * 48}px`);
    };

    const handleMouseMove = (event: MouseEvent) => {
      updatePerspective(event.clientX, event.clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length !== 1) {
        return;
      }

      const touch = event.touches[0];
      updatePerspective(touch.clientX, touch.clientY);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const renderLayer = (points: GalaxyPoint[], layerClassName: string) => (
    <div className={layerClassName}>
      {points.map((point) => (
        <span
          key={point.id}
          className="hero-galaxy__point"
          style={
            {
              left: `${point.left}%`,
              top: `${point.top}%`,
              width: `${point.size}px`,
              height: `${point.size}px`,
              opacity: point.opacity,
              "--point-drift-x": `${point.driftX}px`,
              "--point-drift-y": `${point.driftY}px`,
              "--point-twinkle-duration": `${point.twinkleDuration}s`,
              "--point-twinkle-delay": `-${point.twinkleDelay}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );

  return (
    <div
      ref={shellRef}
      className={cn("hero-galaxy pointer-events-none absolute inset-0 z-[2]", className)}
      aria-hidden="true"
    >
      <div className="hero-galaxy__scene">
        {renderLayer(FAR_POINTS, "hero-galaxy__layer hero-galaxy__layer--far")}
        {renderLayer(MID_POINTS, "hero-galaxy__layer hero-galaxy__layer--mid")}
        {renderLayer(NEAR_POINTS, "hero-galaxy__layer hero-galaxy__layer--near")}
      </div>
    </div>
  );
}
