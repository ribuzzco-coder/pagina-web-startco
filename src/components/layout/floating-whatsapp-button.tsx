import { SITE_CONFIG } from "@/lib/site-config";

export function FloatingWhatsAppButton() {
  return (
    <a
      href={SITE_CONFIG.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-4 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#151722] text-[#D8F9FC] shadow-[0_10px_24px_rgba(0,0,0,0.24)] transition hover:border-[#0FEFFD]/30 hover:bg-[#181B28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0FEFFD] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B10] sm:bottom-6 sm:right-6"
    >
      <span className="text-lg font-semibold">W</span>
    </a>
  );
}
