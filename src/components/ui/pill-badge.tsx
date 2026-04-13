import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type PillBadgeProps = HTMLAttributes<HTMLSpanElement>;

export function PillBadge({ className, ...props }: PillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[#E625FF]/18 bg-[#E625FF]/8 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-[#E7B0EE] uppercase",
        className,
      )}
      {...props}
    />
  );
}
