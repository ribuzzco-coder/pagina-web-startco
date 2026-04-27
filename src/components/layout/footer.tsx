import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SITE_CONFIG } from "@/lib/site-config";

function KeyIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 text-[#E625FF] drop-shadow-[0_0_12px_rgba(230,37,255,0.52)] transition-colors group-hover:text-[#ff8bf7]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="7.5" cy="14.5" r="3.5" />
      <path d="M10.2 12 20 2.2" />
      <path d="m15.4 6.8 1.8 1.8" />
      <path d="m13.2 9 1.8 1.8" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#0E1016] py-14">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Image
            src={SITE_CONFIG.logoPlaceholder}
            alt="Logo RiBuzz"
            width={759}
            height={180}
            sizes="200px"
            className="h-11 w-auto object-contain opacity-95 sm:h-12"
          />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#98A0B3] sm:text-base">
            Dise&ntilde;amos soluciones comerciales, visuales y tecnol&oacute;gicas para marcas que quieren crecer con m&aacute;s claridad, presencia y herramientas &uacute;tiles.
          </p>
          <p className="mt-4 text-sm text-[#C7CBD6]">
            Contacto: {SITE_CONFIG.contactEmail}
          </p>
          <Button href={SITE_CONFIG.diagnosisPath} className="mt-5" variant="secondary">
            {SITE_CONFIG.diagnosisCtaLabel}
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:justify-self-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#E7B0EE]">
              Navegaci&oacute;n
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#E7B0EE]">
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
              <Link
                href="/landings"
                className="group inline-flex items-center gap-2 text-sm text-[#7f8798] transition-colors hover:text-[#F5F7FA]"
                aria-label="Acceso privado a landings"
              >
                <KeyIcon />
                <span>Desarrollos</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
