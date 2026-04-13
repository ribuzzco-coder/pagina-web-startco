import { cn } from "@/lib/utils";

type SectionDividerProps = {
  className?: string;
};

export function SectionDivider({ className }: SectionDividerProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "mx-auto my-6 h-px w-full max-w-6xl bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.03),rgba(230,37,255,0.18),rgba(255,255,255,0.03),transparent)]",
        className,
      )}
    />
  );
}
