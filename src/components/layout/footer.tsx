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
            width={759}
            height={180}
            sizes="200px"
            className="h-11 w-auto object-contain opacity-95 sm:h-12"
          />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#98A0B3] sm:text-base">
            Sistema de crecimiento comercial para mejorar las ventas y la estructura de tu empresa.
          </p>
          <p className="mt-4 text-sm text-[#CEC6E0]">
            Contacto: {SITE_CONFIG.contactEmail}
          </p>
          <Button
            href={SITE_CONFIG.diagnosisPath}
            className="mt-5"
            variant="secondary"
          >
            {SITE_CONFIG.diagnosisCtaLabel}
          </Button>
          <p className="mt-5 text-xs leading-relaxed text-[#5A6072]">
            Recursos y soluciones puntuales:{" "}
            <Link href="/landings" className="underline decoration-white/20 underline-offset-2 hover:text-[#98A0B3]">
              landings
            </Link>{" "}
            y{" "}
            <Link href="/tarjetas-nfc" className="underline decoration-white/20 underline-offset-2 hover:text-[#98A0B3]">
              tarjetas NFC
            </Link>
            .
          </p>
          <p className="mt-3 text-xs text-[#5A6072]">
            <Link
              href="/politica-de-privacidad"
              className="underline decoration-white/20 underline-offset-2 hover:text-[#98A0B3]"
            >
              Política de tratamiento de datos personales
            </Link>
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:justify-self-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#CEC6E0]">
              Navegaci&oacute;n
            </p>
            <div className="mt-3 space-y-2">
              {SITE_CONFIG.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-[#98A0B3] transition-colors hover:text-[#E4DFF7]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#CEC6E0]">
              Acciones
            </p>
            <div className="mt-3 space-y-2">
              <a
                href={SITE_CONFIG.diagnosisPath}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-[#98A0B3] transition-colors hover:text-[#E4DFF7]"
              >
                {SITE_CONFIG.diagnosisCtaLabel}
              </a>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-[#98A0B3] transition-colors hover:text-[#E4DFF7]"
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
