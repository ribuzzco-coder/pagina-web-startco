import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";
import { ConceptInspector } from "./concept-inspector";

export const metadata = createPageMetadata({
  title: "Arkos Wear · De la investigación a una dirección",
  description: "Una mirada al proceso de investigación y propuesta estratégica para Arkos Wear.",
  path: "/proyectos/arkos-wear",
});

const annotations = [
  { title: "La emoción como mensaje", text: "La investigación propuso poner en primer plano la conexión emocional y la identidad detrás de los diseños, apoyada en las conversaciones recogidas durante el proyecto." },
  { title: "El producto como prueba", text: "La propuesta planteó mostrar la transformación de los diseños con luz como demostración visual, sin atribuir esa característica a todas las prendas." },
  { title: "El proceso como contexto", text: "Se recomendó explicar la autoría y el trabajo manual cerca del producto para ayudar a entender su valor antes de comprar." },
] as const;

export default function ArkosWearCase() {
  return (
    <>
      <section className="relative -mt-[76px] overflow-hidden bg-[#0a0719] pt-[76px]">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_10%,rgba(121,91,224,.28),transparent_50%),linear-gradient(145deg,#090617,#171027)]" />
        <Container className="relative py-16 sm:py-24">
          <Link href="/#trabajos" className="text-sm font-semibold text-[#c7b6ff] underline decoration-[#a58bff]/50 underline-offset-4 hover:text-white">Volver a proyectos</Link>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div><p className="font-heading text-xs font-semibold uppercase tracking-[.18em] text-[#b8a5f9]">Investigación y propuesta · Moda</p><h1 className="mt-5 max-w-4xl font-heading text-5xl font-semibold leading-[.98] tracking-[-.055em] text-white sm:text-7xl">Cómo llevar a la pantalla lo que hace distinta a una camiseta de Arkos Wear.</h1></div>
            <p className="max-w-xl text-lg leading-relaxed text-[#ccc3dc]">Una lectura de marca, producto y referentes que se tradujo en una dirección conceptual para su experiencia digital.</p>
          </div>
          <div className="mt-12 grid gap-4 border-t border-white/10 pt-6 text-sm text-[#c4bad6] sm:grid-cols-3"><p><span className="block text-[#a994ee]">Trabajo documentado</span><strong className="mt-2 block font-semibold text-white">Investigación y propuesta</strong></p><p><span className="block text-[#a994ee]">Pregunta central</span><strong className="mt-2 block font-semibold text-white">¿Qué poner primero?</strong></p><p><span className="block text-[#a994ee]">Estado del caso</span><strong className="mt-2 block font-semibold text-white">Dirección propuesta, octubre 2026</strong></p></div>
        </Container>
      </section>

      <section className="bg-[#100b22] py-16 sm:py-24"><Container><div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-start"><div><div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-white/10 bg-[#171421]"><Image src="/portafolio-comercial/assets/arkos-home-capture.webp" alt="Captura de la página de inicio de Arkos Wear usada como referencia visual" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover object-top" /></div><p className="mt-3 text-sm leading-relaxed text-[#aaa0bb]">Portada pública de Arkos Wear, noviembre de 2026. Las anotaciones recogen la propuesta estratégica de RiBuzz.</p></div><div><p className="font-heading text-xs font-semibold uppercase tracking-[.18em] text-[#b49dff]">Del hallazgo al criterio</p><h2 className="mt-4 font-heading text-4xl font-semibold tracking-[-.05em] text-white">Explora las decisiones propuestas.</h2><p className="mt-4 leading-relaxed text-[#c6bdd9]">Selecciona cada punto para conocer cómo el análisis se convirtió en una recomendación de experiencia.</p><div className="mt-6 divide-y divide-white/10 border-y border-white/10">{annotations.map((item, i) => <details key={item.title} className="group py-5"><summary className="flex cursor-pointer list-none items-center gap-4 font-heading text-lg font-semibold text-white focus-visible:outline-2 focus-visible:outline-[#b49dff]"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#b49dff]/40 text-sm text-[#d5caff]">{i + 1}</span><span className="flex-1">{item.title}</span><span aria-hidden="true" className="text-2xl text-[#b49dff] group-open:rotate-45">+</span></summary><p className="ml-13 mt-4 leading-relaxed text-[#c5bad7]">{item.text}</p></details>)}</div></div></div></Container></section>

      <ConceptInspector />
      <section className="bg-[#100b22] py-16 sm:py-24"><Container><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div><p className="font-heading text-xs font-semibold uppercase tracking-[.18em] text-[#b49dff]">La tensión</p><h2 className="mt-4 font-heading text-4xl font-semibold leading-tight tracking-[-.05em] text-white sm:text-5xl">Diseño, calidad e historia competían por ser lo primero.</h2></div><div className="space-y-5 text-lg leading-relaxed text-[#c9c0dc]"><p>El trabajo identificó una pregunta para la tienda: cómo presentar una prenda que atrae por su diseño, pero cuyo valor también está en la técnica y la historia detrás.</p><p>La propuesta organizó el recorrido por capas: el diseño llama la atención, los detalles de producto ayudan a decidir y la historia profundiza la conexión.</p></div></div></Container></section>

      <section className="bg-[#08051b] py-16 sm:py-24"><Container><div className="max-w-3xl"><p className="font-heading text-xs font-semibold uppercase tracking-[.18em] text-[#b49dff]">Una decisión, tres funciones</p><h2 className="mt-4 font-heading text-4xl font-semibold tracking-[-.05em] text-white sm:text-5xl">Qué se propuso poner al frente.</h2><p className="mt-5 text-lg leading-relaxed text-[#c9c0dc]">La investigación comparó tres territorios según evidencia, contenido disponible y diferenciación. La recomendación combinó sus funciones en lugar de elegir una estética aislada.</p></div><div className="mt-10 grid gap-4 md:grid-cols-3">{[["Mensaje", "Emoción e identidad", "La historia y el significado de los diseños como punto de conexión."], ["Prueba", "Una transformación visible", "La luz revela el diseño en las prendas que cuentan con esa característica."], ["Marco", "El universo de marca", "El guerrero como contexto simbólico, evitando un tono épico literal."]].map(([label,title,copy]) => <article key={label} className="rounded-2xl border border-[#a58bff]/20 bg-[#17102e] p-7"><p className="text-xs font-semibold uppercase tracking-[.16em] text-[#baa5ff]">{label}</p><h3 className="mt-6 font-heading text-2xl font-semibold text-white">{title}</h3><p className="mt-3 leading-relaxed text-[#c4bad5]">{copy}</p></article>)}</div></Container></section>



      <section className="bg-[#08051b] py-16 sm:py-24"><Container><div className="grid gap-10 lg:grid-cols-2"><div><p className="font-heading text-xs font-semibold uppercase tracking-[.18em] text-[#b49dff]">Alcance de este caso</p><h2 className="mt-4 font-heading text-4xl font-semibold tracking-[-.05em] text-white">Qué recibió Arkos Wear.</h2></div><div className="space-y-4 text-lg leading-relaxed text-[#c9c0dc]"><p>Un diagnóstico de marca, una comparación con competidores y un análisis de referentes para decidir qué historia contar al abrir la tienda.</p><p>En octubre de 2026, ese trabajo tomó forma en un concepto y una propuesta de página de inicio.</p></div></div><div className="mt-12 rounded-[28px] border border-[#a58bff]/25 bg-[radial-gradient(circle_at_85%_15%,rgba(132,87,255,.26),transparent_40%),#18102f] p-8 sm:p-12"><h2 className="max-w-3xl font-heading text-3xl font-semibold tracking-[-.04em] text-white sm:text-4xl">¿Qué decisión necesita claridad en tu marca?</h2><p className="mt-4 max-w-2xl leading-relaxed text-[#d0c6e1]">Comparte tu contexto y conversemos sobre el siguiente paso para tu negocio.</p><div className="mt-7 flex flex-wrap items-center gap-5"><span data-funnel-event="diagnostic_cta"><Button href="/diagnostico" size="lg">Solicitar diagnóstico</Button></span><a href="https://arkoswearshop.net/" className="font-semibold text-[#dbcbff] underline underline-offset-4">Visitar la tienda de Arkos Wear ↗</a></div></div></Container></section>
    </>
  );
}
