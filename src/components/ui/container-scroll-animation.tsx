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
    const translateY = 16 - progress * 16;
    const magentaGlow = 0.12 + progress * 0.16;
    const cyanGlow = 0.04 + progress * 0.06;
    const outlineGlow = 0.06 + progress * 0.08;

    return {
      transform: `translate3d(0, ${translateY}px, 0)`,
      boxShadow: `
        0 0 0 1px rgba(230, 37, 255, ${outlineGlow}),
        0 0 28px rgba(230, 37, 255, ${magentaGlow}),
        0 0 54px rgba(15, 239, 253, ${cyanGlow}),
        0 18px 42px rgba(0, 0, 0, 0.34)
      `,
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
