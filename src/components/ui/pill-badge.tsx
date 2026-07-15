import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type PillBadgeProps = HTMLAttributes<HTMLSpanElement>;

export function PillBadge({ className, ...props }: PillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[#6939E2]/18 bg-[#6939E2]/8 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-[#CEC6E0] uppercase",
        className,
      )}
      {...props}
    />
  );
}
