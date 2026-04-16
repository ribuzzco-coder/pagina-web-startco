import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  primaryExternal?: boolean;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  secondaryExternal?: boolean;
  asideTitle?: string;
  asideText?: string;
  titleClassName?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCtaLabel,
  primaryCtaHref,
  primaryExternal,
  secondaryCtaLabel,
  secondaryCtaHref,
  secondaryExternal,
  asideTitle,
  asideText,
  titleClassName,
}: PageHeroProps) {
  return (
    <section className="pb-18 pt-16 sm:pb-24 sm:pt-24">
      <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.16em] text-[#E7B0EE] uppercase">
            {eyebrow}
          </p>
          <h1
            className={cn(
              titleClassName ??
                "mt-6 max-w-4xl font-heading text-4xl leading-tight text-[#F5F7FA] sm:text-5xl",
            )}
          >
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#98A0B3] sm:text-lg">
            {description}
          </p>

          {primaryCtaLabel && primaryCtaHref ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={primaryCtaHref} size="lg" external={primaryExternal}>
                {primaryCtaLabel}
              </Button>
              {secondaryCtaLabel && secondaryCtaHref ? (
                <Button
                  href={secondaryCtaHref}
                  size="lg"
                  variant="secondary"
                  external={secondaryExternal}
                >
                  {secondaryCtaLabel}
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>

        {asideTitle && asideText ? (
          <div className="relative overflow-hidden rounded-[28px] border border-white/8 bg-white/[0.035] p-7 shadow-[0_10px_24px_rgba(0,0,0,0.16)] sm:p-8">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(230,37,255,0.34),transparent)]" />
            <p className="text-[11px] font-semibold tracking-[0.16em] text-[#98A0B3] uppercase">
              Referencia ejecutiva
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#F5F7FA] sm:text-3xl">
              {asideTitle}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
              {asideText}
            </p>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
