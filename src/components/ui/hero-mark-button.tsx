"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type HeroMarkButtonProps = {
  src: string;
  alt: string;
};

export function HeroMarkButton({ src, alt }: HeroMarkButtonProps) {
  const [flashState, setFlashState] = useState<{
    active: boolean;
    x: number;
    y: number;
  }>({
    active: false,
    x: 0,
    y: 0,
  });
  const flashTimeoutRef = useRef<number | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    return () => {
      if (flashTimeoutRef.current !== null) {
        window.clearTimeout(flashTimeoutRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    if (flashTimeoutRef.current !== null) {
      window.clearTimeout(flashTimeoutRef.current);
    }

    const rect = buttonRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;

    setFlashState({
      active: false,
      x,
      y,
    });

    window.requestAnimationFrame(() => {
      setFlashState({
        active: true,
        x,
        y,
      });
      flashTimeoutRef.current = window.setTimeout(() => {
        setFlashState((current) => ({ ...current, active: false }));
      }, 1120);
    });
  };

  return (
    <>
      {flashState.active ? (
        <div
          aria-hidden="true"
          className="hero-radial-flash"
          style={
            {
              "--hero-flash-x": `${flashState.x}px`,
              "--hero-flash-y": `${flashState.y}px`,
            } as CSSProperties
          }
        >
          <span className="hero-radial-flash__disc hero-radial-flash__disc--invert" />
          <span className="hero-radial-flash__disc hero-radial-flash__disc--restore" />
        </div>
      ) : null}

      <button
        ref={buttonRef}
        type="button"
        aria-label="Logo de RiBuzz"
        onClick={handleClick}
        className="hero-mark-button relative flex h-24 w-24 items-center justify-center rounded-full sm:h-28 sm:w-28 xl:h-32 xl:w-32"
      >
        <div className="absolute inset-0 rounded-full bg-[#E625FF]/18 blur-2xl" />
        <Image
          src={src}
          alt={alt}
          width={280}
          height={280}
          priority
          className="relative h-full w-full object-contain drop-shadow-[0_0_32px_rgba(230,37,255,0.58)]"
        />
      </button>
    </>
  );
}
