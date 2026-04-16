"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type ShootingStarData = {
  id: number;
  top: number;
  left: number;
  color: string;
  duration: number;
  width: number;
};

function ShootingStars() {
  const [stars, setStars] = useState<ShootingStarData[]>([]);

  useEffect(() => {
    const brandColors = ["#0FEFFD", "#E625FF", "#F5F7FA"]; // Cyan, Magenta, White
    
    // Initial batch
    const createStar = () => ({
      id: Math.random(),
      top: Math.random() * 40, 
      left: 60 + Math.random() * 40,
      color: brandColors[Math.floor(Math.random() * brandColors.length)],
      duration: 0.8 + Math.random() * 1.4,
      width: 120 + Math.random() * 240,
    });

    const interval = setInterval(() => {
      setStars(prev => {
        const next = [...prev, createStar()];
        if (next.length > 14) return next.slice(1);
        return next;
      });
    }, 950);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <span
          key={star.id}
          className="shooting-star"
          style={
            {
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.width}px`,
              "--star-color": star.color,
              animation: `shooting-star ${star.duration}s cubic-bezier(0.42, 0, 0.58, 1) forwards`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

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
    layer === "far" ? { min: 0.8, max: 2.8, opacity: 0.2 } :
    layer === "mid" ? { min: 1.2, max: 4.8, opacity: 0.35 } :
    { min: 1.6, max: 7.2, opacity: 0.5 };

  return Array.from({ length: count }, (_, index) => ({
    id: `${layer}-${index}`,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: layerScale.min + Math.random() * (layerScale.max - layerScale.min),
    opacity: layerScale.opacity + Math.random() * 0.3,
    driftX: -18 + Math.random() * 36,
    driftY: -14 + Math.random() * 28,
    twinkleDuration: 4 + Math.random() * 6,
    twinkleDelay: Math.random() * 5,
  }));
}

export function StartcoGalaxy({ className }: { className?: string }) {
  const shellRef = useRef<HTMLDivElement>(null);

  const farPoints = useMemo(() => createLayerPoints(140, "far"), []);
  const midPoints = useMemo(() => createLayerPoints(100, "mid"), []);
  const nearPoints = useMemo(() => createLayerPoints(64, "near"), []);

  useEffect(() => {
    if (!shellRef.current) return;
    const shell = shellRef.current;

    const updatePerspective = (clientX: number, clientY: number) => {
      const rect = shell.getBoundingClientRect();
      const px = (clientX - rect.left) / rect.width - 0.5;
      const py = (clientY - rect.top) / rect.height - 0.5;

      shell.style.setProperty("--galaxy-rotate-y", `${px * 24}deg`);
      shell.style.setProperty("--galaxy-rotate-x", `${py * -18}deg`);
      shell.style.setProperty("--galaxy-shift-x", `${px * 60}px`);
      shell.style.setProperty("--galaxy-shift-y", `${py * 40}px`);
    };

    const handleMouseMove = (event: MouseEvent) => updatePerspective(event.clientX, event.clientY);
    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length === 1) updatePerspective(event.touches[0].clientX, event.touches[0].clientY);
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
      className={cn("hero-galaxy pointer-events-none absolute inset-0 z-[1]", className)}
      aria-hidden="true"
    >
      <div className="hero-galaxy__scene opacity-60">
        {renderLayer(farPoints, "hero-galaxy__layer hero-galaxy__layer--far")}
        {renderLayer(midPoints, "hero-galaxy__layer hero-galaxy__layer--mid")}
        {renderLayer(nearPoints, "hero-galaxy__layer hero-galaxy__layer--near")}
      </div>
      <ShootingStars />
    </div>
  );
}
