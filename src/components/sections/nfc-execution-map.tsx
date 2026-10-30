"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionTitle } from "@/components/ui/section-title";
import { cn } from "@/lib/utils";

const possibilities = [
  {
    title: "Vender",
    examples: "Catálogo, landing, cupón, pago o checkout.",
    result: "La persona pasa del interés a una oferta concreta.",
    action: "Ver productos",
  },
  {
    title: "Conversar",
    examples: "WhatsApp, contacto guardable o perfil digital.",
    result: "El contacto llega al canal donde puedes responder y hacer seguimiento.",
    action: "Escribir por WhatsApp",
  },
  {
    title: "Explicar",
    examples: "Sitio web, portafolio, video, PDF o presentación.",
    result: "Tu información correcta queda disponible en el momento preciso.",
    action: "Abrir portafolio",
  },
  {
    title: "Activar",
    examples: "Registro, formulario, dinámica, premio o campaña.",
    result: "Una interacción presencial se convierte en participación medible.",
    action: "Participar",
  },
  {
    title: "Atender",
    examples: "Menú, reserva, Maps, soporte o garantía.",
    result: "El cliente resuelve lo que necesita sin buscarte ni instalar una app.",
    action: "Resolver ahora",
  },
  {
    title: "Fidelizar",
    examples: "Beneficio, membresía, contenido privado o comunidad.",
    result: "El objeto físico se convierte en un acceso que incentiva volver.",
    action: "Ver beneficio",
  },
] as const;

export function NfcExecutionMap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = possibilities[activeIndex];

  return (
    <>
      <SectionDivider />
      <section className="nfc-product-possibilities cv-auto py-20 sm:py-24" id="que-puede-hacer">
        <Container>
          <SectionTitle
            eyebrow="Qué puede abrir"
            title="Un toque abre el siguiente paso de tu negocio"
            description="NFC abre un enlace. Tú decides qué debe ocurrir después."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {possibilities.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "min-h-[8.8rem] rounded-[18px] border p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#785FDD] sm:min-h-0 sm:rounded-[22px] sm:p-5",
                    activeIndex === index
                      ? "border-[#785FDD]/75 bg-[#6939E2]/14 text-[#E4DFF7]"
                      : "border-white/8 bg-white/[0.025] text-[#CEC6E0] hover:border-[#785FDD]/45 hover:bg-white/[0.05]",
                  )}
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#98A0B3] sm:text-sm">{item.examples}</p>
                </button>
              ))}
            </div>

            <Card interactiveGlow={false} className="nfc-product-flow flex min-h-[22rem] flex-col justify-between rounded-[22px] p-6 sm:p-8">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#CEC6E0]">Ejemplo de ejecución</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#E4DFF7]">{active.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-[#CEC6E0]">{active.examples}</p>
                <div className="mt-7 grid items-center gap-3 sm:grid-cols-[1fr_auto_1fr]">
                  <Flow title="NFC físico" copy="Tarjeta, llavero o punto de contacto." />
                  <span className="mx-auto text-2xl text-[#987DFF]">→</span>
                  <Flow title="Activo digital" copy={active.examples} accent />
                </div>
                <p className="mt-6 border-l-2 border-[#785FDD] pl-4 text-sm leading-relaxed text-[#98A0B3]">{active.result}</p>
              </div>
              <Button href="#productos" className="mt-8 w-full" size="lg">Ver formatos para implementarlo</Button>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}

function Flow({ title, copy, accent = false }: { title: string; copy: string; accent?: boolean }) {
  return <div className={cn("rounded-2xl border p-4", accent ? "border-[#785FDD]/45 bg-[#6939E2]/10" : "border-white/8 bg-white/[0.025]")}><p className="text-sm font-semibold text-[#E4DFF7]">{title}</p><p className="mt-2 text-xs leading-relaxed text-[#98A0B3]">{copy}</p></div>;
}
