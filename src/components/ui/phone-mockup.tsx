import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  className?: string;
}

export const PhoneMockup = React.forwardRef<HTMLDivElement, PhoneMockupProps>(
  ({ className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative h-[520px] w-[260px] shrink-0 rounded-[40px] border border-white/10 bg-[#090B11] p-3 shadow-[0_32px_80px_rgba(0,0,0,0.6)]",
          className
        )}
      >
        {/* Phone Screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[30px] border border-white/5 bg-[linear-gradient(180deg,#121622,#1A2030)]">
          {/* Dynamic Notch / Camera */}
          <div className="absolute left-1/2 top-2 z-20 flex h-6 w-20 -translate-x-1/2 items-center justify-center rounded-full bg-black">
            <div className="h-2 w-2 rounded-full bg-white/20"></div>
          </div>

          {/* GSAP Target: Phone Pulse Scan Wave */}
          <div className="nfc-scan-wave pointer-events-none absolute left-1/2 top-[18%] z-10 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0FEFFD]/40 bg-[#0FEFFD]/10 opacity-0" />

          {/* Inner UI (Profile Card) */}
          <div className="nfc-profile-ui pointer-events-none absolute inset-0 z-10 flex flex-col items-center px-5 pt-20 opacity-0">
            <div className="nfc-ui-avatar relative overflow-hidden h-20 w-20 rounded-full bg-gradient-to-tr from-[#E625FF] to-[#0FEFFD] p-[2px] shadow-[0_0_24px_rgba(230,37,255,0.4)]">
              <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[#121622] p-0.5">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-[#1A2030]">
                  <Image 
                    src="/ribuzz-mark.png" 
                    alt="RiBuzz Logo" 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>
            </div>

            <h3 className="nfc-ui-name mt-4 text-xl font-bold tracking-tight text-[#F5F7FA]">RiBuzz</h3>
            <p className="nfc-ui-role mb-8 mt-1 text-center text-xs text-[#98A0B3]">Sistema de Crecimiento Comercial.</p>

            <div className="w-full space-y-3">
              <div className="nfc-ui-btn flex h-12 w-full items-center justify-center rounded-xl border border-white/5 bg-white/10 text-sm font-semibold text-white shadow-lg backdrop-blur-md">
                Guardar Contacto
              </div>
              <div className="nfc-ui-btn flex h-12 w-full items-center justify-center rounded-xl border border-[#25D366]/40 bg-[#25D366]/20 text-sm font-semibold text-[#25D366] shadow-[0_0_12px_rgba(37,211,102,0.2)]">
                WhatsApp
              </div>
              <div className="nfc-ui-btn flex h-12 w-full items-center justify-center rounded-xl border border-white/5 bg-white/5 text-sm font-semibold text-white">
                Instagram
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
PhoneMockup.displayName = "PhoneMockup";
