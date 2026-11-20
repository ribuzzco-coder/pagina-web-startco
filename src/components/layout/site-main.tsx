"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import type { ReactNode } from "react";

const companyPages = new Set([
  "/", "/about", "/services", "/contacto", "/diagnostico", "/regalos",
  "/portafolio", "/landings", "/nfc", "/tarjetas-nfc", "/nfc-demo",
  "/politica-de-privacidad",
]);

export function SiteMain({ children }: { children: ReactNode }) {
  const path = usePathname();
  const companyPage = companyPages.has(path) || path.startsWith("/proyectos/");

  return (
    <main id="contenido-principal" tabIndex={-1} data-company-page={companyPage || undefined} className="flex-1 pt-[76px]">
      {children}
      {companyPage && path !== "/" && (
        <nav aria-label="Orientación para tu marca" className="border-y border-[#cbb9dc] bg-[#e6daf2] text-[#26192f]">
          <div className="mx-auto grid max-w-6xl gap-3 px-5 py-7 sm:grid-cols-2 sm:px-8 lg:px-10">
            <Link className="flex items-center justify-between rounded-xl border border-[#b9a3c9] px-5 py-4 font-heading font-semibold hover:bg-white/40" href="/#para-quien">
              ¿RiBuzz encaja con mi marca? <span aria-hidden="true">↗</span>
            </Link>
            <Link className="flex items-center justify-between rounded-xl border border-[#b9a3c9] px-5 py-4 font-heading font-semibold hover:bg-white/40" href="/#como-funciona">
              Cómo trabajaremos juntos <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </nav>
      )}
    </main>
  );
}
