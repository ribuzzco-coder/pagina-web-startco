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
    const scale = 0.92 + progress * 0.08;
    const translateY = 54 - progress * 54;
    const rotateX = 8 - progress * 8;
    const opacity = 0.52 + progress * 0.48;

    return {
      opacity,
      transform: `translate3d(0, ${translateY}px, 0) scale(${scale}) rotateX(${rotateX}deg)`,
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
