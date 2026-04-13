import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SITE_CONFIG } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#0E1016] py-14">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Image
            src={SITE_CONFIG.logoPlaceholder}
            alt="Logo RiBuzz"
            width={164}
            height={54}
            sizes="164px"
            className="h-12 w-auto rounded-xl border border-white/8 bg-[#12131A] p-1.5"
          />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#98A0B3] sm:text-base">
            Disenamos e implementamos sistemas comerciales para empresas que ya
            venden, pero todavia no crecen con estructura, seguimiento y
            consistencia.
          </p>
          <p className="mt-4 text-sm text-[#C7CBD6]">Contacto: {SITE_CONFIG.contactEmail}</p>
          <Button href={SITE_CONFIG.diagnosisPath} className="mt-5" variant="secondary">
            {SITE_CONFIG.diagnosisCtaLabel}
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:justify-self-end">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.14em] text-[#E7B0EE] uppercase">
              Navegacion
            </p>
            <div className="mt-3 space-y-2">
              {SITE_CONFIG.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-[#98A0B3] transition-colors hover:text-[#F5F7FA]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.14em] text-[#E7B0EE] uppercase">
              Acciones
            </p>
            <div className="mt-3 space-y-2">
              <a
                href={SITE_CONFIG.diagnosisPath}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-[#98A0B3] transition-colors hover:text-[#F5F7FA]"
              >
                {SITE_CONFIG.diagnosisCtaLabel}
              </a>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-[#98A0B3] transition-colors hover:text-[#F5F7FA]"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
