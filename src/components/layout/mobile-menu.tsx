import Link from "next/link";

import { Container } from "@/components/ui/container";
import { SITE_CONFIG } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  isOpen: boolean;
  pathname: string;
  onClose: () => void;
};

export function MobileMenu({ isOpen, pathname, onClose }: MobileMenuProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="border-t border-white/8 bg-[#0B0B10]/96 px-5 py-4 md:hidden">
      <Container className="px-0">
        <nav className="flex flex-col gap-2" aria-label="Menu movil">
          {SITE_CONFIG.navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === link.href : pathname.startsWith(link.href);
            const isDiagnosisLink = link.href === "/contact";

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={cn(
                  "rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? isDiagnosisLink
                      ? "border-[#E625FF]/65 bg-[linear-gradient(135deg,#E625FF,#B11CD4)] text-white shadow-[0_0_0_1px_rgba(230,37,255,0.18),0_0_24px_rgba(230,37,255,0.28)]"
                      : "border-white/10 bg-[#161826] text-[#F5F7FA]"
                    : isDiagnosisLink
                      ? "border-[#E625FF]/65 bg-[linear-gradient(135deg,#E625FF,#B11CD4)] text-white shadow-[0_0_0_1px_rgba(230,37,255,0.18),0_0_24px_rgba(230,37,255,0.28)]"
                      : "border-white/8 text-[#98A0B3] hover:border-white/14 hover:text-[#F5F7FA]",
                )}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href={SITE_CONFIG.giftsPath}
            onClick={onClose}
            className="rounded-xl border border-[#ff4d6d]/60 bg-[linear-gradient(135deg,#381119,#5a101d)] px-3 py-2.5 text-sm font-medium text-[#FFD6DE] shadow-[0_0_0_1px_rgba(255,77,109,0.18),0_0_20px_rgba(255,77,109,0.2)] transition-colors hover:border-[#ff8ea8] hover:text-white"
          >
            Regalos y documentos de valor
          </Link>
        </nav>
      </Container>
    </div>
  );
}
