import { RibuzzCoin } from "@/components/interactive/ribuzz-coin";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PillBadge } from "@/components/ui/pill-badge";

type AboutRibuzzHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  supportText: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
};

export function AboutRibuzzHero({
  eyebrow,
  title,
  description,
  supportText,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: AboutRibuzzHeroProps) {
  return (
    <section className="relative -mt-[76px] h-[100svh] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(15,239,253,0.08),transparent_24%),radial-gradient(circle_at_78%_24%,rgba(230,37,255,0.1),transparent_26%),radial-gradient(circle_at_84%_68%,rgba(91,22,230,0.1),transparent_28%)]" />
      <Container className="relative grid h-full items-center gap-8 py-[86px] sm:py-[92px] lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
        <div className="max-w-[35rem] self-center">
          <PillBadge>{eyebrow}</PillBadge>
          <h1 className="mt-4 max-w-4xl font-heading text-[2.15rem] leading-[1.02] text-[#F5F7FA] sm:text-[2.85rem] xl:text-[3.35rem]">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-[0.96rem] leading-relaxed text-[#C7CBD6] sm:text-[1.02rem]">
            {description}
          </p>
          <p className="mt-3 max-w-lg text-[0.92rem] leading-relaxed text-[#98A0B3] sm:text-[0.98rem]">
            {supportText}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryCtaHref} size="lg">
              {primaryCtaLabel}
            </Button>
            {secondaryCtaLabel && secondaryCtaHref ? (
              <Button href={secondaryCtaHref} variant="secondary" size="lg">
                {secondaryCtaLabel}
              </Button>
            ) : null}
          </div>
        </div>

        <div className="relative self-center lg:-mr-4">
          <div className="absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_50%_50%,rgba(230,37,255,0.12),transparent_46%)] blur-3xl" />
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(16,18,29,0.92),rgba(10,11,19,0.92))] px-3 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_28px_90px_rgba(0,0,0,0.38)] sm:px-5 sm:py-5">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(15,239,253,0.08),transparent_24%),radial-gradient(circle_at_78%_28%,rgba(230,37,255,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_16%)]" />
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)]" />

            <div className="relative">
              <div className="mx-auto max-w-[560px]">
                <RibuzzCoin className="h-[360px] sm:h-[430px] lg:h-[540px]" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
