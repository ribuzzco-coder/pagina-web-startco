"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const playbookImages = [
  {
    src: "/images/portfolio/neomech-playbook-home.png",
    alt: "Vista general del playbook comercial de Neomech con meta mensual, indicadores y posicionamiento.",
    title: "Vista general",
    accent: "text-[#E7B0EE]",
    width: 1900,
    height: 925,
  },
  {
    src: "/images/portfolio/neomech-playbook-flow.png",
    alt: "Vista del scoring de fit y el flujo comercial del playbook de Neomech.",
    title: "ICP y flujo",
    accent: "text-[#A6FAFF]",
    width: 1919,
    height: 927,
  },
] as const;

export function PlaybookGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null || !previewRef.current) {
      return;
    }

    previewRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [activeIndex]);

  const activeImage = activeIndex === null ? null : playbookImages[activeIndex];

  return (
    <>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {playbookImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
            className={`group overflow-hidden rounded-[24px] border bg-white/[0.03] text-left transition-transform duration-300 hover:-translate-y-1 ${
              index === activeIndex
                ? "border-[#0FEFFD]/24 shadow-[0_0_0_1px_rgba(15,239,253,0.14)]"
                : "border-white/10"
            }`}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <p className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${image.accent}`}>
                {image.title}
              </p>
              <span className="text-[11px] uppercase tracking-[0.12em] text-[#98A0B3] transition-colors duration-300 group-hover:text-[#F5F7FA]">
                {index === activeIndex ? "Clic para cerrar" : "Clic para ampliar"}
              </span>
            </div>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={`h-auto w-full transition-transform duration-500 ${
                index === activeIndex ? "scale-[1.02]" : "group-hover:scale-[1.015]"
              }`}
            />
          </button>
        ))}
      </div>

      {activeImage ? (
        <div
          ref={previewRef}
          className="mt-5 overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,17,25,0.98),rgba(10,12,18,0.94))] shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
            <p className="text-sm font-semibold text-[#F5F7FA]">
              {activeImage.title}
            </p>
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.12em] text-[#98A0B3] transition-colors duration-300 hover:text-[#F5F7FA]"
            >
              Cerrar
            </button>
          </div>
          <div className="overflow-auto bg-[#07090F] p-3 sm:p-4">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              width={activeImage.width}
              height={activeImage.height}
              className="mx-auto h-auto w-full rounded-[18px] border border-white/8"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
