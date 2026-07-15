import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type ContactCardProps = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  external?: boolean;
};

export function ContactCard({
  title,
  description,
  ctaLabel,
  ctaHref,
  external = true,
}: ContactCardProps) {
  return (
    <Card className="h-full rounded-[26px] p-6 sm:p-7">
      <h3 className="text-xl font-semibold leading-tight tracking-tight text-[#E4DFF7]">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-[#CEC6E0] sm:text-base">
        {description}
      </p>
      <Button href={ctaHref} className="mt-6" variant="secondary" external={external}>
        {ctaLabel}
      </Button>
    </Card>
  );
}
