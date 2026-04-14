"use client";

import { useEffect, useEffectEvent, useRef, useState } from "react";

const INTRO_STORAGE_KEY = "ribuzz-intro-seen";
const INTRO_FADE_OUT_MS = 420;
const INTRO_MAX_DURATION_MS = 3200;
const INTRO_END_HOLD_MS = 500;

export function IntroLoader() {
  const timeoutRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const closeIntro = useEffectEvent(() => {
    if (isClosing) {
      return;
    }

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setIsClosing(true);

    window.setTimeout(() => {
      setIsVisible(false);
    }, INTRO_FADE_OUT_MS);
  });

  const scheduleClose = useEffectEvent((delayMs: number) => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      closeIntro();
    }, delayMs);
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hasSeenIntro = window.sessionStorage.getItem(INTRO_STORAGE_KEY) === "true";

    if (prefersReducedMotion.matches || hasSeenIntro) {
      return;
    }

    window.sessionStorage.setItem(INTRO_STORAGE_KEY, "true");
    setIsVisible(true);

    scheduleClose(INTRO_MAX_DURATION_MS);

    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`intro-loader ${isClosing ? "intro-loader--closing" : ""}`}
      aria-hidden="true"
    >
      <div className="intro-loader__glow" />
      <video
        className="intro-loader__video"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={() => scheduleClose(INTRO_END_HOLD_MS)}
      >
        <source src="/intro-logo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
