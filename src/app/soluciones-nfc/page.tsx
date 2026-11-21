import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Tarjetas y soluciones con tecnología NFC",
  description: "Explora tarjetas y llaveros NFC de RiBuzz. Conoce piezas reales y elige qué quieres que abra el celular de tu cliente al acercarlo.",
  path: "/soluciones-nfc",
});

const formats = [
  { name: "Tarjetas NFC", image: "/images/client-cards/hotel-caribe-plaza-front.png", alt: "Frente de la tarjeta diseñada para Hotel Caribe Plaza", text: "Para una visita comercial o una recepción. Una tarjeta puede abrir un perfil con los datos de contacto, la ubicación y el canal de atención.", href: "/tarjetas-nfc", action: "Explorar tarjetas" },
  { name: "Llaveros NFC", image: "/images/nfc-projects/llaveros-nfc-armario-de-suenos.jpg", alt: "Llaveros personalizados de Armario de Sueños sobre su empaque", text: "Para llevar la marca después del encuentro. Diseñamos la forma de la pieza y definimos qué experiencia digital abre.", href: "/nfc#proyectos-llaveros", action: "Ver el proyecto de llaveros" },
];

export default function SolucionesNfcPage() {
  return (
    <>
      <section className="overflow-hidden bg-[#191022] py-14 text-white sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-[.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.16em] text-[#d6b4f4]">Soluciones NFC</p>
            <h1 className="mt-4 max-w-[16ch] font-heading text-5xl font-semibold">Un toque para seguir en contacto.</h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#e0d2e7]">Acerca un celular compatible a una tarjeta o llavero NFC. Al tocar la notificación, tu cliente puede abrir tu perfil, consultar un catálogo o escribirte por WhatsApp.</p>
            <div className="mt-7 flex flex-wrap items-center gap-5"><Button href="#formatos">Elegir un formato</Button><Link href="/nfc-demo" className="font-semibold underline underline-offset-4">Ver la tarjeta en 3D ↗</Link></div>
          </div>
          <Link href="/hotelcaribeplaza" data-funnel-event="case_open" className="group block overflow-hidden rounded-3xl bg-[#dfcdec] text-[#2d1e35]">
            <div className="relative grid aspect-[1.7] place-items-center bg-[radial-gradient(ellipse_at_top_left,#f6f0fb,#c7abd7)]">
              <div className="relative aspect-[1.586] w-[66%] rotate-[-8deg] overflow-hidden rounded-xl shadow-[0_20px_30px_#46304f55] motion-safe:transition-transform motion-safe:duration-500 group-hover:rotate-[-3deg]"><Image src="/images/client-cards/hotel-caribe-plaza-front.png" fill preload sizes="(min-width:1024px) 350px, 60vw" alt="Tarjeta NFC del Hotel Caribe Plaza" className="object-cover" /></div>
            </div>
            <div className="flex items-center justify-between gap-4 px-5 py-4"><strong>Hotel Caribe Plaza</strong><span className="text-sm font-semibold underline">Ver qué abre la tarjeta del hotel ↗</span></div>
          </Link>
        </Container>
      </section>
      <section id="formatos" className="scroll-mt-24 bg-[#f5f0eb] py-16 text-[#291c30]">
        <Container><h2 className="max-w-xl font-heading text-4xl font-semibold sm:text-5xl">Elige la pieza según dónde la va a usar tu cliente.</h2>
          <div className="mt-9 grid gap-6 md:grid-cols-2">{formats.map(format => <Link href={format.href} aria-label={format.action} key={format.name} data-scroll-reveal className="overflow-hidden rounded-2xl border border-[#d1c1d4] bg-white">
            <div className="relative aspect-[2/1] bg-[#e8deeb]"><Image src={format.image} alt={format.alt} fill sizes="(min-width:768px) 510px, 95vw" className={format.name === "Tarjetas NFC" ? "object-contain p-4" : "object-cover"} /></div>
            <div className="p-6"><h3 className="font-heading text-2xl font-semibold">{format.name}</h3><p className="my-3 leading-relaxed text-[#594b5e]">{format.text}</p><span className="font-semibold underline underline-offset-4">{format.action} ↗</span></div>
          </Link>)}</div>
        </Container>
      </section>
      <section className="bg-[#e5d5ef] py-16 text-[#291b31]"><Container className="grid items-start gap-8 lg:grid-cols-2">
        <h2 className="max-w-md font-heading text-4xl font-semibold">¿Qué quieres que pase después del toque?</h2>
        <div><p className="mb-6 max-w-lg leading-relaxed">Elige una acción que tenga sentido en ese momento. En una feria puede ser guardar un contacto. Frente a un producto, consultar sus detalles. Cuéntanos dónde entregarás la pieza y definimos contigo el formato y el destino.</p><Button href="/nfc#filtro-nfc">Consultar mi proyecto NFC</Button></div>
      </Container></section>
    </>
  );
}
