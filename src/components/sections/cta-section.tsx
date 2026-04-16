import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type CTASectionProps = {
  title: string;
  description: string;
  primaryLabel: ReactNode;
  primaryHref: string;
  primaryExternal?: boolean;
  secondaryLabel?: ReactNode;
  secondaryHref?: string;
  secondaryExternal?: boolean;
  eyebrow?: string;
  className?: string;
  contentClassName?: string;
  actionsClassName?: string;
  accentIcon?: React.ReactNode;
  centered?: boolean;
  rightElement?: ReactNode;
  actionsAtBottom?: boolean;
};

export function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  primaryExternal,
  secondaryLabel,
  secondaryHref,
  secondaryExternal,
  eyebrow = "Siguiente paso",
  className,
  contentClassName,
  actionsClassName,
  accentIcon,
  centered,
  rightElement,
  actionsAtBottom,
}: CTASectionProps) {
  return (
    <section className={cn("py-20 sm:py-24", className)}>
      <Container>
        <div className="cv-auto relative overflow-hidden rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(29,33,48,0.9),rgba(24,26,36,0.84))] p-8 shadow-[0_10px_28px_rgba(0,0,0,0.18)] sm:p-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(230,37,255,0.32),transparent)]" />

          <div className={cn(
            "relative flex flex-col gap-6",
            centered ? "items-center text-center" : "lg:flex-row lg:items-center lg:justify-between",
            !!rightElement && "lg:gap-12",
            contentClassName
          )}>
            <div className={cn("flex-1 max-w-2xl", centered && "mx-auto")}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
                {eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#F5F7FA] sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#98A0B3] sm:text-lg">
                {description}
              </p>

              {actionsAtBottom && (
                <div className={cn("mt-8 flex flex-col gap-3 sm:flex-row", actionsClassName)}>
                  <Button href={primaryHref} size="lg" external={primaryExternal}>
                    {primaryLabel}
                  </Button>
                  {secondaryLabel && secondaryHref ? (
                    <Button
                      href={secondaryHref}
                      size="lg"
                      variant="secondary"
                      external={secondaryExternal}
                    >
                      {secondaryLabel}
                    </Button>
                  ) : null}
                </div>
              )}
            </div>

            {!actionsAtBottom && (
              <div className={cn("flex shrink-0 flex-col gap-3 sm:flex-row", centered && "justify-center", actionsClassName)}>
                {accentIcon ? (
                  <div className="flex items-center justify-center">{accentIcon}</div>
                ) : null}
                <Button href={primaryHref} size="lg" external={primaryExternal}>
                  {primaryLabel}
                </Button>
                {secondaryLabel && secondaryHref ? (
                  <Button
                    href={secondaryHref}
                    size="lg"
                    variant="secondary"
                    external={secondaryExternal}
                  >
                    {secondaryLabel}
                  </Button>
                ) : null}
              </div>
            )}

            {rightElement && (
              <div className="flex-none hidden lg:block">
                {rightElement}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
