import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SectionTitleProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  title,
  description,
  eyebrow,
  align = "left",
  className,
  ...props
}: SectionTitleProps) {
  const isCentered = align === "center";

  return (
    <div className={cn(isCentered && "text-center", className)} {...props}>
      <div>
        {eyebrow ? (
          <p className="mb-3 text-[11px] font-semibold tracking-[0.16em] text-[#E7B0EE] uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#F5F7FA] sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "mt-4 text-base leading-relaxed text-[#98A0B3] sm:text-lg",
              isCentered ? "mx-auto max-w-2xl" : "max-w-2xl",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
