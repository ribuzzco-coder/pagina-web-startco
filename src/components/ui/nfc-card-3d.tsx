import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface NfcCard3dProps {
  className?: string;
  frontImage: string;
  backImage: string;
}

export const NfcCard3d = React.forwardRef<HTMLDivElement, NfcCard3dProps>(
  ({ className, frontImage, backImage }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "nfc-floating-card relative h-[180px] w-[285px] [transform-style:preserve-3d]",
          className
        )}
      >
        {/* Front Face */}
        <div className="absolute inset-0 overflow-hidden rounded-[16px] border border-white/12 bg-[#09090D] shadow-[0_24px_60px_rgba(0,0,0,0.46),0_0_0_1px_rgba(255,255,255,0.05)] [backface-visibility:hidden]">
          <Image
            src={frontImage}
            alt="Frente de la tarjeta NFC"
            fill
            className="object-cover"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.16),transparent_28%,transparent_62%,rgba(255,255,255,0.12))]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)]" />
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 overflow-hidden rounded-[16px] border border-white/12 bg-[#09090D] shadow-[0_24px_60px_rgba(0,0,0,0.46),0_0_0_1px_rgba(255,255,255,0.05)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Image
            src={backImage}
            alt="Reverso de la tarjeta NFC"
            fill
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_32%,transparent_68%,rgba(255,255,255,0.08))]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.42),transparent)]" />
        </div>
      </div>
    );
  }
);
NfcCard3d.displayName = "NfcCard3d";
