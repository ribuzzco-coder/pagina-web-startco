import type { FAQ } from "@/lib/content";

type FAQAccordionProps = {
  items: readonly FAQ[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <details
          key={item.question}
          className="group surface-panel rounded-2xl border border-white/8 px-4 py-4 sm:px-5"
          open={index === 0}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
            <span className="text-sm font-semibold text-[#F5F7FA] sm:text-base">
              {item.question}
            </span>
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-sm text-[#98A0B3] transition-transform group-open:rotate-45 group-open:border-[#E625FF]/24 group-open:text-[#E7B0EE]">
              +
            </span>
          </summary>
          <p className="mt-4 border-t border-white/8 pt-4 text-sm leading-relaxed text-[#98A0B3] sm:text-base">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
