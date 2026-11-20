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
    <section className="relative overflow-hidden pb-18 pt-16 sm:pb-24 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(169,145,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(169,145,255,0.04)_1px,transparent_1px)] [background-size:36px_36px]" />
      <Container className="relative grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="rounded-2xl border border-[#8d88a9]/20 bg-[#15102b]/58 p-6 shadow-[0_18px_44px_rgba(3,1,12,0.24)] sm:p-8">
          <p className="mb-5 font-heading text-[11px] font-bold uppercase tracking-[0.16em] text-[#a991ff]">{eyebrow}</p>
          <h1
            className={cn(
              titleClassName ??
                "max-w-4xl font-heading text-4xl leading-tight text-[#f7f5ff] sm:text-5xl",
            )}
          >
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#c2bbd8] sm:text-lg">
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
          <div className="relative overflow-hidden rounded-2xl border border-[#9e82ff]/28 bg-[linear-gradient(145deg,#21183f,#110c25)] p-7 shadow-[0_18px_44px_rgba(3,1,12,0.3)] sm:p-8">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(169,145,255,0.72),transparent)]" />
            <p className="font-heading text-[11px] font-bold tracking-[0.16em] text-[#a991ff] uppercase">
              Lectura RiBuzz
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#E4DFF7] sm:text-3xl">
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
