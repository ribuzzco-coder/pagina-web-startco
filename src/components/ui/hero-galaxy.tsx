"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef } from "react";

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

function createLayerPoints(count: number, layer: "far" | "mid" | "near"): GalaxyPoint[] {
  const layerScale =
    layer === "far" ? { min: 0.8, max: 3.2, opacity: 0.24 } :
    layer === "mid" ? { min: 1.2, max: 5.4, opacity: 0.4 } :
    { min: 1.8, max: 8.8, opacity: 0.56 };

  return Array.from({ length: count }, (_, index) => ({
    id: `${layer}-${index}`,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: layerScale.min + Math.random() * (layerScale.max - layerScale.min),
    opacity: layerScale.opacity + Math.random() * 0.36,
    driftX: -22 + Math.random() * 44,
    driftY: -18 + Math.random() * 36,
    twinkleDuration: 4.5 + Math.random() * 7,
    twinkleDelay: Math.random() * 6,
  }));
}

export function HeroGalaxy({ className }: HeroGalaxyProps) {
  const shellRef = useRef<HTMLDivElement>(null);

  const farPoints = useMemo(() => createLayerPoints(160, "far"), []);
  const midPoints = useMemo(() => createLayerPoints(120, "mid"), []);
  const nearPoints = useMemo(() => createLayerPoints(82, "near"), []);

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
        {renderLayer(farPoints, "hero-galaxy__layer hero-galaxy__layer--far")}
        {renderLayer(midPoints, "hero-galaxy__layer hero-galaxy__layer--mid")}
        {renderLayer(nearPoints, "hero-galaxy__layer hero-galaxy__layer--near")}
      </div>
    </div>
  );
}
