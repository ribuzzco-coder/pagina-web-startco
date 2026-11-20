import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type CTASectionProps = {
  title: ReactNode;
  description: ReactNode;
  primaryLabel: ReactNode;
  primaryHref: string;
  primaryExternal?: boolean;
  primaryVariant?: "primary" | "shimmer";
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
  primaryVariant = "primary",
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
        <div className="cv-auto relative overflow-hidden rounded-2xl border border-[#9e82ff]/28 bg-[linear-gradient(145deg,#21183f,#100b24)] p-8 shadow-[0_18px_44px_rgba(3,1,12,0.32)] sm:p-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(169,145,255,0.72),transparent)]" />

          <div className={cn(
            "relative flex flex-col gap-6",
            centered ? "items-center text-center" : "lg:flex-row lg:items-center lg:justify-between",
            !!rightElement && "lg:gap-12",
            contentClassName
          )}>
            <div className={cn("flex-1 max-w-2xl", centered && "mx-auto")}>
              <p className="font-heading text-[11px] font-bold uppercase tracking-[0.16em] text-[#a991ff] [text-wrap:balance]">
                {eyebrow}
              </p>
              <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-[#f7f5ff] [text-wrap:balance] sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#98A0B3] [text-wrap:pretty] sm:text-lg">
                {description}
              </p>

              {actionsAtBottom && (
                <div className={cn("mt-8 flex flex-col gap-3 sm:flex-row", actionsClassName)}>
                  <Button href={primaryHref} size="lg" variant={primaryVariant} external={primaryExternal}>
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
                <Button href={primaryHref} size="lg" variant={primaryVariant} external={primaryExternal}>
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
              <div className="hidden min-h-[14rem] flex-none items-center justify-center lg:flex lg:w-[20rem]">
                {rightElement}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
