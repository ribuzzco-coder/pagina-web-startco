import { SITE_CONFIG } from "@/lib/site-config";

export function FloatingWhatsAppButton() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center gap-3 sm:bottom-6 sm:right-6">
      <a
        href={SITE_CONFIG.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir Instagram"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#E625FF]/24 bg-[#151722] text-white shadow-[0_10px_24px_rgba(0,0,0,0.24)] transition hover:border-[#E625FF]/48 hover:bg-[#181B28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E625FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B10]"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-6 w-6 fill-current"
        >
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.35a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 6.85A5.15 5.15 0 1 1 6.85 12 5.16 5.16 0 0 1 12 6.85Zm0 1.8A3.35 3.35 0 1 0 15.35 12 3.35 3.35 0 0 0 12 8.65Z" />
        </svg>
      </a>

      <a
        href={SITE_CONFIG.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#25D366]/22 bg-[#151722] text-white shadow-[0_10px_24px_rgba(0,0,0,0.24)] transition hover:border-[#25D366]/45 hover:bg-[#181B28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B10]"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-6 w-6 fill-current"
        >
          <path d="M20.52 3.48A11.9 11.9 0 0 0 12.04 0C5.42 0 .04 5.38.04 12c0 2.12.55 4.18 1.6 6L0 24l6.17-1.61A11.92 11.92 0 0 0 12.04 24h.01c6.62 0 12-5.38 12-12 0-3.2-1.25-6.2-3.53-8.52ZM12.05 21.98h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.66.96.98-3.57-.23-.37A9.94 9.94 0 0 1 2.05 12C2.05 6.49 6.53 2 12.05 2c2.65 0 5.15 1.03 7.01 2.91A9.86 9.86 0 0 1 22 12c0 5.51-4.48 9.98-9.95 9.98Zm5.46-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.39-1.48a8.98 8.98 0 0 1-1.66-2.07c-.18-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.91-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.09 3.19 5.07 4.47.71.31 1.27.49 1.7.62.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </div>
  );
}
