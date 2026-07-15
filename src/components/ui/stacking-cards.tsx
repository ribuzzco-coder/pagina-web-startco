"use client";

import {
  type MotionValue,
  motion,
  type UseScrollOptions,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  createContext,
  type HTMLAttributes,
  type PropsWithChildren,
  useContext,
  useRef,
} from "react";

import { cn } from "@/lib/utils";

interface StackingCardsContextValue {
  progress: MotionValue<number>;
  scaleMultiplier?: number;
  totalCards?: number;
}

const StackingCardsContext = createContext<StackingCardsContextValue | null>(
  null,
);

export function useStackingCardsContext() {
  const context = useContext(StackingCardsContext);
  if (!context)
    throw new Error("StackingCardItem must be used within StackingCards");
  return context;
}

export interface StackingCardsProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {
  scrollOptions?: UseScrollOptions;
  scaleMultiplier?: number;
  totalCards: number;
}

export function StackingCards({
  children,
  className,
  scrollOptions,
  scaleMultiplier,
  totalCards,
  ...props
}: StackingCardsProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    ...scrollOptions,
    target: targetRef,
  });

  return (
    <StackingCardsContext.Provider
      value={{ progress: scrollYProgress, scaleMultiplier, totalCards }}
    >
      <div className={cn(className)} ref={targetRef} {...props}>
        {children}
      </div>
    </StackingCardsContext.Provider>
  );
}

export interface StackingCardItemProps
  extends HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  index: number;
  topPosition?: string;
}

export function StackingCardItem({
  index,
  topPosition,
  className,
  children,
  ...props
}: StackingCardItemProps) {
  const {
    progress,
    scaleMultiplier,
    totalCards = 0,
  } = useStackingCardsContext();
  const scaleTo = 1 - (totalCards - index) * (scaleMultiplier ?? 0.03);
  const rangeScale = [index * (1 / totalCards), 1];
  const scale = useTransform(progress, rangeScale, [1, scaleTo]);
  // Small fixed offset (not a % of viewport height) so the "fan" effect doesn't
  // grow into dead space once a card unsticks — especially visible on the last card.
  const top = topPosition ?? `${index * 10}px`;

  return (
    <div className={cn("sticky top-0", className)} {...props}>
      <motion.div className="relative h-full origin-top" style={{ scale, top }}>
        {children}
      </motion.div>
    </div>
  );
}

export default StackingCards;
