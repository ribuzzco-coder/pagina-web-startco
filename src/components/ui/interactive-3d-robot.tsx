"use client";

import Image from "next/image";
import { useMemo, useRef, useState, type PointerEvent } from "react";

import { cn } from "@/lib/utils";

interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
  alt?: string;
}

type TiltState = {
  rotateX: number;
  rotateY: number;
  translateX: number;
  translateY: number;
};

const baseTilt: TiltState = {
  rotateX: 0,
  rotateY: 0,
  translateX: 0,
  translateY: 0,
};

export function InteractiveRobotSpline({
  scene,
  className,
  alt = "Elemento 3D interactivo",
}: InteractiveRobotSplineProps) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState<TiltState>(baseTilt);

  const sparks = useMemo(
    () => [
      { left: "10%", top: "18%", delay: "0s", size: "8px" },
      { left: "22%", top: "78%", delay: "0.8s", size: "6px" },
      { left: "51%", top: "12%", delay: "1.6s", size: "10px" },
      { left: "74%", top: "24%", delay: "1.1s", size: "7px" },
      { left: "86%", top: "70%", delay: "2.1s", size: "9px" },
    ],
    [],
  );

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!frameRef.current) return;

    const rect = frameRef.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    setTilt({
      rotateX: (0.5 - py) * 16,
      rotateY: (px - 0.5) * 24,
      translateX: (px - 0.5) * 18,
      translateY: (py - 0.5) * 14,
    });
  };

  const resetTilt = () => setTilt(baseTilt);

  return (
    <div
      ref={frameRef}
      className={cn(
        "group relative isolate overflow-hidden rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_34%),linear-gradient(180deg,rgba(16,17,24,0.96),rgba(7,8,12,0.98))] shadow-[0_28px_80px_rgba(0,0,0,0.42)]",
        className,
      )}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(255,83,60,0.22),transparent_28%),radial-gradient(circle_at_80%_74%,rgba(255,0,60,0.12),transparent_22%)]" />
      <div className="pointer-events-none absolute inset-x-[8%] top-[7%] h-[28%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_72%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-[14%] bottom-[7%] h-[20%] rounded-full bg-[radial-gradient(circle,rgba(255,77,56,0.22),transparent_72%)] blur-3xl" />

      {sparks.map((spark) => (
        <span
          key={`${spark.left}-${spark.top}`}
          className="pointer-events-none absolute rounded-full bg-[radial-gradient(circle,rgba(255,240,225,0.95),rgba(255,120,86,0.42)_48%,transparent_100%)] opacity-70 blur-[0.4px] animate-[motronik-ash-drift_9s_linear_infinite]"
          style={{
            left: spark.left,
            top: spark.top,
            width: spark.size,
            height: spark.size,
            animationDelay: spark.delay,
          }}
        />
      ))}

      <div className="relative flex h-full min-h-[260px] items-center justify-center px-4 py-8 sm:min-h-[320px] sm:px-8">
        <div
          className="relative transition-transform duration-300 ease-out [transform-style:preserve-3d]"
          style={{
            transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          }}
        >
          <div
            className="pointer-events-none absolute inset-x-[12%] bottom-[10%] h-10 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.4),transparent_72%)] blur-2xl"
            style={{
              transform: `translate3d(${tilt.translateX * 0.65}px, ${12 + tilt.translateY * 0.2}px, -80px) scale(${1 + Math.abs(tilt.rotateY) * 0.006})`,
            }}
          />

          <div
            className="pointer-events-none absolute inset-0 rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))] opacity-70 blur-[0.2px]"
            style={{
              transform: `translate3d(${tilt.translateX * 0.2}px, ${tilt.translateY * 0.14}px, 30px)`,
            }}
          />

          <div
            className="relative mx-auto w-[min(90vw,42rem)] max-w-[42rem] transition-transform duration-300 ease-out"
            style={{
              transform: `translate3d(${tilt.translateX}px, ${tilt.translateY}px, 60px) scale(${1 + Math.abs(tilt.rotateX) * 0.004})`,
            }}
          >
            <Image
              src={scene}
              alt={alt}
              width={1500}
              height={1500}
              priority
              className="h-auto w-full object-contain drop-shadow-[0_18px_34px_rgba(0,0,0,0.26)] select-none"
            />
          </div>

          <div
            className="pointer-events-none absolute left-[18%] top-[14%] h-[26%] w-[18%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.42),transparent_72%)] blur-2xl opacity-60"
            style={{
              transform: `translate3d(${tilt.translateX * 0.35}px, ${tilt.translateY * -0.2}px, 80px)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
