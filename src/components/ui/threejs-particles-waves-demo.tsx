"use client";

import { Card } from "@/components/ui/card";
import { ThreejsParticlesWaves } from "@/components/ui/threejs-particles-waves";

export function ThreejsParticlesWavesDemo() {
  return (
    <Card className="relative overflow-hidden rounded-[32px] p-0">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-[linear-gradient(180deg,rgba(11,11,16,0.92),rgba(11,11,16,0))]" />
      <div className="relative z-10 px-6 pb-0 pt-6 sm:px-8 sm:pt-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
          Prueba visual interna
        </p>
        <h3 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-[#F5F7FA] sm:text-3xl">
          Waves Three.js para evaluar atmósfera, profundidad y movimiento en inicio
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#98A0B3] sm:text-base">
          Esta versión se dejó para probar en Docker cómo se siente una superficie
          animada en la home sin tocar todavía la experiencia final del sitio.
        </p>
      </div>
      <ThreejsParticlesWaves className="mt-4 h-[420px] rounded-none border-0 sm:h-[520px]" />
    </Card>
  );
}
