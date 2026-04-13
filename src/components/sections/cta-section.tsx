import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

type CTASectionProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  primaryExternal?: boolean;
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryExternal?: boolean;
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
}: CTASectionProps) {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Card className="cv-auto relative overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,rgba(29,33,48,0.96),rgba(24,26,36,0.94))] p-8 sm:p-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(230,37,255,0.32),transparent)]" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
                Siguiente paso
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#F5F7FA] sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#98A0B3] sm:text-lg">
                {description}
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
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
          </div>
        </Card>
      </Container>
    </section>
  );
}
