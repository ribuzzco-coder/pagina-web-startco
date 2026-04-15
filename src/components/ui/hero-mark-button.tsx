"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type HeroMarkButtonProps = {
  src: string;
  alt: string;
};

export function HeroMarkButton({ src, alt }: HeroMarkButtonProps) {
  const [isRippling, setIsRippling] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    setIsRippling(false);

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    window.requestAnimationFrame(() => {
      setIsRippling(true);
      timeoutRef.current = window.setTimeout(() => {
        setIsRippling(false);
      }, 1050);
    });
  };

  return (
    <button
      type="button"
      aria-label="Logo de RiBuzz"
      data-rippling={isRippling ? "true" : "false"}
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
  );
}
