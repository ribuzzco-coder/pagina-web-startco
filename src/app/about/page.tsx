import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/lib/featured-projects";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Sobre RiBuzz",
  description: "Conoce cómo RiBuzz trabaja con tu equipo en estrategia, comunicación, contenido y conversión. Explora el papel de cada equipo y el trabajo con marcas.",
  path: "/about",
});

const decisions = [
  ["Estrategia", "Elegir por dónde empezar", "Tu equipo trae una prioridad comercial. Juntos decidimos qué cliente, producto y canal atender primero."],
  ["Diseño y contenido", "Poner la idea en manos del cliente", "RiBuzz traduce esa decisión en mensajes, pantallas o piezas. Tu marca comprueba que lo que decimos refleja lo que vende."],
  ["Seguimiento", "Volver a mirar la venta", "Tu equipo comparte qué pasó en la tienda o en las conversaciones. Revisamos esa señal y acordamos el próximo ajuste."],
];

export default function AboutPage() {
  return (
    <>
      <section id="about-hero" className="overflow-hidden bg-[#181020] py-14 text-[#f6edf9] sm:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-[1fr_.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.16em] text-[#d6b4f4]">Sobre RiBuzz</p>
            <h1 className="mt-4 max-w-[16ch] font-heading text-5xl font-semibold">Miramos la venta desde el lado de tu cliente.</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#ded0e6]">Somos el growth partner digital que se sienta con tu equipo a entender por qué alguien se interesa por tu marca, qué le hace dudar y qué necesita para comprar.</p>
            <div className="mt-7 flex flex-wrap items-center gap-5"><Button href="#equipo">Ver quién hace qué</Button><Link className="underline underline-offset-4" href="#casos">Ver nuestro trabajo</Link></div>
          </div>
          <Link href="/proyectos/arkos-wear" data-funnel-event="case_open" className="group block rotate-[-2deg] rounded-2xl bg-[#e3d1ed] p-3 text-[#291b32] shadow-2xl sm:p-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg"><Image src="/portafolio-comercial/assets/arkos-home-capture.webp" alt="Portada de la tienda de Arkos Wear" fill sizes="(min-width:1024px) 440px, 88vw" className="object-cover object-top motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-[1.025]" /></div>
            <div className="flex items-end justify-between gap-4 px-1 pt-3"><div><span className="text-xs uppercase tracking-widest">Dirección de marca</span><strong className="block font-heading text-2xl">Arkos Wear</strong></div><span className="text-sm font-semibold underline">Ver caso ↗</span></div>
          </Link>
        </Container>
      </section>
      <section id="equipo" className="scroll-mt-20 bg-[#f5f0eb] py-16 text-[#261b2b] sm:py-24">
        <Container className="grid items-start gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div><h2 className="font-heading text-4xl font-semibold sm:text-5xl">Quién hace qué cuando trabajamos juntos.</h2><p className="mt-5 max-w-md leading-relaxed">Tú conoces las dudas que escuchas al vender. Nosotros te ayudamos a convertirlas en decisiones sobre la oferta, el contenido y el recorrido de compra.</p><a href={SITE_CONFIG.whatsappUrl} className="mt-5 inline-block font-semibold underline underline-offset-4">Hablar con el equipo ↗</a></div>
          <ol className="border-t border-[#c7b6cc]">{decisions.map(([role,title,work]) => <li key={role} data-scroll-reveal className="border-b border-[#c7b6cc] py-6"><p className="text-xs font-bold uppercase tracking-[.15em] text-[#785188]">{role}</p><h3 className="mt-2 font-heading text-2xl font-semibold">{title}</h3><p className="mt-2 max-w-lg leading-relaxed text-[#59495e]">{work}</p></li>)}</ol>
        </Container>
      </section>
      <section id="casos" className="scroll-mt-20 bg-[#25192e] py-16 text-[#fff8ff] sm:py-24">
        <Container><h2 className="max-w-xl font-heading text-4xl font-semibold sm:text-5xl">Conoce el trabajo a través de las marcas.</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">{featuredProjects.map(project => <Link key={project.name} href={project.href} aria-label={project.action + " · " + project.name} data-funnel-event="case_open" data-scroll-reveal className="group overflow-hidden rounded-2xl border border-[#695173] bg-[#302038]">
            <div className="relative aspect-[2.4/1] overflow-hidden"><Image src={`/portafolio-comercial/assets/${project.image}`} alt={project.alt} fill sizes="(min-width: 768px) 500px, 90vw" className="object-cover object-top motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-[1.025]" /></div>
            <div className="p-5"><h3 className="font-heading text-2xl font-semibold">{project.name}</h3><p className="my-2 text-sm leading-relaxed text-[#e1d2e7]">{project.challenge}</p><p className="mb-3 text-sm leading-relaxed">{project.work}</p><span className="font-semibold text-[#dec1f5] underline underline-offset-4">{project.action} ↗</span></div>
          </Link>)}</div>
        </Container>
      </section>
      <section className="bg-[#e3d1ed] py-14 text-[#24182c]"><Container className="flex flex-wrap items-center justify-between gap-6"><h2 className="max-w-lg font-heading text-4xl font-semibold">¿Qué te preguntan tus clientes antes de comprar?</h2><Button href={SITE_CONFIG.diagnosisPath}>Empezar diagnóstico</Button></Container></section>
    </>
  );
}
