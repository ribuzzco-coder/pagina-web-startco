import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "surface-panel rounded-[24px] border border-white/8 p-6 shadow-[0_10px_24px_rgba(0,0,0,0.22)]",
        className,
      )}
      {...props}
    />
  );
}
