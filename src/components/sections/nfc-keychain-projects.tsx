import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionTitle } from "@/components/ui/section-title";

const media = {
  design: "/images/nfc-projects/llavero-nfc-diseno.jpeg",
  product: "/images/nfc-projects/llaveros-nfc-armario-de-suenos.jpg",
  processVideo: "/images/nfc-projects/llavero-nfc-proceso.mp4",
  detailVideo: "/images/nfc-projects/llavero-nfc-detalle.mp4",
} as const;

export function NfcKeychainProjects() {
  return (
    <>
      <SectionDivider />
      <section className="nfc-product-proof cv-auto py-20 sm:py-24" id="proyectos-llaveros">
        <Container>
          <SectionTitle
            eyebrow="Proyectos reales"
            title="Un llavero puede ser mucho más que un recuerdo"
            description="Estas piezas pasan del diseño 3D a un objeto que abre una experiencia real de marca. El NFC se integra en algo que la gente quiere conservar y usar."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <Card interactiveGlow={false} className="overflow-hidden rounded-[30px] p-0">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#100b25]">
                <Image
                  src={media.product}
                  alt="Llaveros NFC personalizados de Armario de Sueños sobre empaque RiBuzz"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#CEC6E0]">Producto terminado</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#E4DFF7]">Marca visible, pieza tangible y acceso digital.</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#98A0B3] sm:text-base">Un llavero no tiene que ser un recuerdo pasivo: puede abrir un perfil, una oferta, una reserva o el siguiente paso de una campaña.</p>
              </div>
            </Card>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <Card interactiveGlow={false} className="overflow-hidden rounded-[30px] p-0 sm:grid sm:grid-cols-[0.82fr_1.18fr]">
                <div className="relative aspect-square overflow-hidden bg-[#100b25] sm:aspect-auto">
                  <Image
                    src={media.design}
                    alt="Diseño 3D de llavero NFC personalizado"
                    fill
                    sizes="(min-width: 640px) 28vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#CEC6E0]">Diseño 3D</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#E4DFF7]">Tu identidad no se adapta a una plantilla.</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#98A0B3]">Construimos la pieza desde la forma, el logo y los detalles que hacen reconocible a la marca.</p>
                </div>
              </Card>

              <div className="grid gap-5 sm:grid-cols-2">
                <VideoCard src={media.processVideo} poster={media.design} title="Proceso de fabricación del llavero NFC" label="Proceso" />
                <VideoCard src={media.detailVideo} poster={media.product} title="Detalle de llaveros NFC terminados" label="Detalle" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function VideoCard({ src, poster, title, label }: { src: string; poster: string; title: string; label: string }) {
  return (
    <Card interactiveGlow={false} className="overflow-hidden rounded-[26px] p-0">
      <div className="relative bg-[#100b25]">
        <video className="aspect-[4/5] w-full object-contain" controls autoPlay muted loop playsInline preload="auto" poster={poster} aria-label={title}>
        <source src={src} type="video/mp4" />
        Tu navegador no admite video HTML5.
        </video>
        <span className="pointer-events-none absolute left-3 top-3 rounded-full border border-white/20 bg-[#09052a]/75 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur">Video</span>
      </div>
      <div className="p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#CEC6E0]">{label}</p>
        <p className="mt-2 text-sm font-semibold text-[#E4DFF7]">{title}</p>
      </div>
    </Card>
  );
}
