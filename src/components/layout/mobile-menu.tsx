import Image from "next/image";
import Link from "next/link";
import { NavigationFeedback } from "./navigation-feedback";

import { SITE_CONFIG } from "@/lib/site-config";

type MobileMenuProps = {
  isOpen: boolean;
  activeHref: string;
  onClose: () => void;
};

export function MobileMenu({ isOpen, activeHref, onClose }: MobileMenuProps) {
  return (
    <div id="ribuzz-mobile-menu" hidden={!isOpen} className="absolute inset-x-3 top-[68px] lg:hidden">
      <nav aria-label="Menú móvil" className="relative ml-auto max-h-[calc(100dvh-84px)] max-w-md overflow-y-auto overscroll-contain rounded-3xl border border-[#685279] bg-[#201529] px-6 py-5 text-[#f5eff9] shadow-[0_18px_54px_#12081c70]">
        <Image src="/brand/ribuzz-face.png" alt="" width={96} height={96} className="pointer-events-none absolute right-6 top-8 w-24 opacity-15" />
        <ul className="relative">
          {SITE_CONFIG.navLinks.filter(link => link.href !== SITE_CONFIG.diagnosisPath).map((link) => (
            <li key={link.href} className="border-b border-[#634f71]/55">
              <Link href={link.href} onClick={onClose} aria-current={link.href === activeHref ? "location" : undefined}
                className="flex items-center gap-3 rounded py-3 font-heading text-[1.55rem] font-semibold leading-tight tracking-[-.035em] hover:text-[#dbc1f2] focus-visible:outline-2 focus-visible:outline-[#ddc5ff] aria-[current]:text-[#d8b6fa]">
                {link.label}<NavigationFeedback />
                {link.href === activeHref && <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#cb9ef4]" />}
              </Link>
            </li>
          ))}
        </ul>
        <Link href={SITE_CONFIG.diagnosisPath} onClick={onClose} aria-current={activeHref === SITE_CONFIG.diagnosisPath ? "page" : undefined}
          className="mt-5 flex min-h-12 items-center justify-between rounded-xl bg-[#dfc6f5] px-4 font-semibold text-[#302037] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
          Solicitar diagnóstico <span aria-hidden="true">→</span>
        </Link>
        <Link href={SITE_CONFIG.giftsPath} onClick={onClose} aria-current={activeHref === SITE_CONFIG.giftsPath ? "page" : undefined}
          className="mt-2 inline-flex min-h-11 items-center rounded text-sm font-medium text-[#dccce7] underline decoration-[#91779e] underline-offset-4">
          Regalos y documentos de valor
        </Link>
      </nav>
    </div>
  );
}
