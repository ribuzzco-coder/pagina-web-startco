import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SITE_CONFIG } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-[#8d88a9]/20 bg-[#0d0920] py-14">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Image
            src="/brand/ribuzz-lockup.png"
            alt="Logo RiBuzz"
            width={1337}
            height={812}
            sizes="128px"
            className="h-auto w-32"
          />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#98A0B3] sm:text-base">
            Trabajamos con tu marca en estrategia, comunicación, contenido y conversión para definir o mejorar cómo vendes.
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
          <p className="mt-5 text-xs leading-relaxed text-[#a59ab9]">
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
          <p className="mt-3 text-xs text-[#a59ab9]">
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
              <Link href="/#para-quien" className="block text-sm text-[#cdb8e0] hover:underline">¿RiBuzz es para mi marca?</Link>
              <Link href="/#antes-de-decidir" className="block text-sm text-[#cdb8e0] hover:underline">Preguntas antes de empezar</Link>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#CEC6E0]">
              Acciones
            </p>
            <div className="mt-3 space-y-2">
              <Link
                href={SITE_CONFIG.diagnosisPath}
                className="block text-sm text-[#98A0B3] transition-colors hover:text-[#E4DFF7]"
              >
                {SITE_CONFIG.diagnosisCtaLabel}
              </Link>
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
