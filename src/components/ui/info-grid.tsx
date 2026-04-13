import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type InfoGridProps = HTMLAttributes<HTMLDivElement>;

export function InfoGrid({ className, ...props }: InfoGridProps) {
  return (
    <div
      className={cn("grid gap-5 sm:grid-cols-2 lg:grid-cols-3", className)}
      {...props}
    />
  );
}