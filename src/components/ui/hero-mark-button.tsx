"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type HeroMarkButtonProps = {
  src: string;
  alt: string;
};

export function HeroMarkButton({ src, alt }: HeroMarkButtonProps) {
  const [isGlitching, setIsGlitching] = useState(false);
  const glitchTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (isGlitching) {
      document.documentElement.classList.add("hero-site-glitching");
    } else {
      document.documentElement.classList.remove("hero-site-glitching");
    }

    return () => {
      if (glitchTimeoutRef.current !== null) {
        window.clearTimeout(glitchTimeoutRef.current);
      }

      document.documentElement.classList.remove("hero-site-glitching");
    };
  }, [isGlitching]);

  const handleClick = () => {
    setIsGlitching(false);

    if (glitchTimeoutRef.current !== null) {
      window.clearTimeout(glitchTimeoutRef.current);
    }

    window.requestAnimationFrame(() => {
      setIsGlitching(true);
      glitchTimeoutRef.current = window.setTimeout(() => {
        setIsGlitching(false);
      }, 980);
    });
  };

  return (
    <>
      {isGlitching ? (
        <div aria-hidden="true" className="hero-glitch-burst">
          <span className="hero-glitch-scan hero-glitch-scan--one" />
          <span className="hero-glitch-scan hero-glitch-scan--two" />
          <span className="hero-glitch-scan hero-glitch-scan--three" />
          <span className="hero-glitch-scan hero-glitch-scan--four" />
          <span className="hero-glitch-noise hero-glitch-noise--one" />
          <span className="hero-glitch-noise hero-glitch-noise--two" />
        </div>
      ) : null}

      <button
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
