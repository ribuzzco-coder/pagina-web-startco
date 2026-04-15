"use client";

import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

type ContainerScrollProps = {
  titleComponent?: ReactNode;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function ContainerScroll({
  titleComponent,
  children,
  className,
  contentClassName,
}: ContainerScrollProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) {
        return;
      }

      const rect = wrapper.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const rawProgress = (viewportHeight - rect.top) / (rect.height + viewportHeight * 0.25);
      setProgress(clamp(rawProgress, 0, 1));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const contentStyle = useMemo(() => {
    const scale = 0.84 + progress * 0.16;
    const translateY = 88 - progress * 88;
    const rotateX = 14 - progress * 14;
    const glowStrength = 0.16 + progress * 0.14;

    return {
      transform: `translate3d(0, ${translateY}px, 0) scale(${scale}) rotateX(${rotateX}deg)`,
      boxShadow: `0 22px 80px rgba(230, 37, 255, ${glowStrength}), 0 14px 42px rgba(0, 0, 0, 0.34)`,
    } satisfies CSSProperties;
  }, [progress]);

  return (
    <div ref={wrapperRef} className={cn("relative h-[138vh] sm:h-[150vh]", className)}>
      <div className="sticky top-16 overflow-hidden pt-4 [perspective:1400px] sm:top-20 lg:top-24">
        {titleComponent ? <div>{titleComponent}</div> : null}
        <div
          className={cn(
            "origin-top transform-gpu will-change-transform",
            contentClassName,
          )}
          style={contentStyle}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
