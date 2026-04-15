"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef } from "react";

import { cn } from "@/lib/utils";

type HeroStarfieldProps = {
  className?: string;
};

export function HeroStarfield({ className }: HeroStarfieldProps) {
  const shellRef = useRef<HTMLDivElement>(null);

  const stars = useMemo(
    () =>
      Array.from({ length: 140 }, (_, index) => ({
        id: index,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 6,
        opacity: 0.32 + Math.random() * 0.58,
        duration: 5 + Math.random() * 8,
        delay: Math.random() * 8,
        driftX: -20 + Math.random() * 40,
        driftY: -16 + Math.random() * 32,
      })),
    [],
  );

  useEffect(() => {
    if (!shellRef.current) {
      return;
    }

    const shell = shellRef.current;

    const updateParallax = (clientX: number, clientY: number) => {
      const rect = shell.getBoundingClientRect();
      const relativeX = clientX - rect.left - rect.width / 2;
      const relativeY = clientY - rect.top - rect.height / 2;
      shell.style.setProperty("--hero-parallax-x", `${relativeX * 0.028}px`);
      shell.style.setProperty("--hero-parallax-y", `${relativeY * 0.02}px`);
    };

    const handleMouseMove = (event: MouseEvent) => {
      updateParallax(event.clientX, event.clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length !== 1) {
        return;
      }

      const touch = event.touches[0];
      updateParallax(touch.clientX, touch.clientY);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div
      ref={shellRef}
      className={cn("particle-starfield pointer-events-none absolute inset-0 z-[3]", className)}
    >
      {stars.map((star) => (
        <span
          key={star.id}
          className="particle-star"
          style={
            {
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDuration: `${star.duration}s`,
              animationDelay: `-${star.delay}s`,
              "--star-drift-x": `${star.driftX}px`,
              "--star-drift-y": `${star.driftY}px`,
            } as CSSProperties
          }
        />
      ))}
      {stars.slice(0, 28).map((star) => (
        <span
          key={`glow-${star.id}`}
          className="particle-star particle-star--glow"
          style={
            {
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size * 3.6}px`,
              height: `${star.size * 3.6}px`,
              opacity: Math.min(star.opacity * 0.42, 0.34),
              animationDuration: `${star.duration * 1.12}s`,
              animationDelay: `-${star.delay}s`,
              "--star-drift-x": `${star.driftX * 0.65}px`,
              "--star-drift-y": `${star.driftY * 0.65}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
