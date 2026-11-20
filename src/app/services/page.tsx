import Image from "next/image";
import Link from "next/link";
import { GrowthMap } from "@/components/sections/growth-map";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Cómo trabajamos",
  description: "Descubre cómo RiBuzz trabaja con tu equipo en estrategia, comunicación, contenido y conversión, desde la primera revisión hasta la entrega.",
  path: "/services",
});

const areas = [
  { icon: "M12 3v3m0 12v3M3 12h3m12 0h3M6 6l2 2m8 8 2 2M18 6l-2 2M8 16l-2 2M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z", title: "Estrategia", detail: "Decidimos a quién dirigir la oferta y qué canal merece atención primero.", examples: "Cliente prioritario · oferta · hoja de ruta" },
  { icon: "M4 17V7l12-3v16L4 17Zm12-9 4 2v4l-4 2M7 18l1 3h3l-1-3", title: "Comunicación", detail: "Acordamos qué decir sobre la marca y cómo expresarlo en cada canal.", examples: "Propuesta de valor · mensajes · tono de voz" },
  { icon: "M4 5h16v14H4zM4 9h16M8 14h3m3 0h2", title: "Contenido", detail: "Planificamos piezas que responden a las preguntas que surgen antes de comprar.", examples: "Líneas editoriales · guiones · calendario" },
  { icon: "M4 19h16M6 16l4-5 3 2 5-7m-3 0h3v3", title: "Conversión", detail: "Revisamos qué pasa entre la visita, la consulta y la venta para resolver puntos de abandono.", examples: "Landings · fichas de producto · seguimiento comercial" },
] as const;

const paths = [
  { title: "Trabajo continuo con tu equipo", label: "Varias prioridades", text: "Si necesitas revisar varias partes de la venta, elegimos por cuál empezar y acordamos el siguiente ajuste con tu equipo.", points: ["Revisión de tu oferta y tus canales", "Prioridades y responsables", "Implementación y revisión de resultados"] },
  { title: "Proyecto puntual", label: "Un reto definido", text: "Si ya sabes dónde está el problema, delimitamos la tarea. Puede ser reorganizar una ficha de producto o mejorar el seguimiento de consultas.", points: ["Diagnóstico del reto", "Alcance y entregables definidos", "Implementación de la solución"] },
] as const;

const questions = [
  ["¿Qué incluye el trabajo?", "Depende del contexto, el objetivo y el alcance acordado. Después de entender tu necesidad definimos qué se construirá, cómo trabajaremos y qué corresponde a cada parte."],
  ["¿Cuánto cuesta y cuánto tiempo toma?", "La inversión y el plazo dependen del alcance. Te los presentamos en una propuesta una vez entendamos las prioridades y los entregables necesarios."],
  ["¿Qué necesito para empezar?", "Cuéntanos qué vendes, a quién y en qué momento se complica la venta. Un ejemplo reciente basta para empezar."],
  ["¿Qué pasa al enviar el formulario?", "Verás el siguiente paso recomendado. Podrás agendar una primera llamada, elegir un ejercicio o suscribirte a contenidos, según tus respuestas."],
] as const;

export default function ServicesPage() {
  return <>
    <section className="relative -mt-[76px] overflow-hidden bg-[#08051b] pt-[76px]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_15%,rgba(108,67,239,.3),transparent_50%),linear-gradient(140deg,#08051b,#140b31)]" />
      <Container className="relative grid gap-12 py-20 lg:grid-cols-[1fr_.8fr] lg:items-center lg:py-28">
        <div><p className="font-heading text-xs font-semibold uppercase tracking-[.18em] text-[#bcaaff]">Cómo trabajamos</p><h1 className="mt-5 max-w-3xl font-heading text-5xl font-semibold leading-[.98] tracking-[-.055em] text-white sm:text-6xl">Así trabajamos en tu sistema comercial.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#c9c1d9]">Empezamos por una situación que tu equipo reconoce. Si la gente pregunta por un producto y luego se va, revisamos qué vio, qué preguntó y qué respuesta recibió. Con eso elegimos qué cambiar primero.</p><div className="mt-8 flex flex-wrap gap-3"><Button href={SITE_CONFIG.diagnosisPath} size="lg" variant="shimmer">Empezar diagnóstico</Button><Button href="#necesidad" size="lg" variant="secondary">Ver qué podemos resolver</Button></div></div>
        <Link href="/proyectos/arkos-wear" data-funnel-event="case_open" className="block overflow-hidden rounded-xl border border-white/20 bg-[#1c1429] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6c1ff]">
          <Image src="/portafolio-comercial/assets/arkos-home-capture.webp" alt="Portada de la tienda de Arkos Wear" width={1280} height={880} sizes="(min-width: 1024px) 450px, 92vw" className="h-auto w-full" />
          <div className="p-5"><p className="text-xs uppercase tracking-[.16em] text-[#c5a8f1]">Estrategia aplicada</p><p className="mt-1 font-heading text-xl font-semibold text-white">Arkos Wear · Una propuesta para contar cómo cambia una camiseta con la luz ↗</p></div>
        </Link>
      </Container>
    </section>

    <section id="necesidad" className="scroll-mt-20 bg-[#f4f0ed] py-16 text-[#24182d] sm:py-24">
      <Container>
        <h2 className="max-w-2xl font-heading text-4xl font-semibold tracking-[-.045em] sm:text-5xl">¿Qué necesita tu marca hoy?</h2>
        <div className="mt-8 divide-y divide-[#c9bdcb] border-y border-[#c9bdcb]">
          {[
            ["Tenemos muchas iniciativas y cuesta priorizar.", "Revisamos tus objetivos, clientes y canales para elegir dónde concentrar el esfuerzo.", "Una hoja de ruta con prioridades y responsables.", "Contar mi reto", "/diagnostico"],
            ["La gente no entiende qué nos hace diferentes.", "Contrastamos cómo describes tu oferta con las preguntas que recibes al vender.", "Un mensaje principal y ejemplos para la web y redes.", "Contar mi reto", "/diagnostico"],
            ["Publicamos seguido, pero se repiten las mismas dudas.", "Identificamos qué necesita entender tu cliente antes de pedir información o comprar.", "Un calendario de piezas organizado por preguntas y objetivos.", "Contar mi reto", "/diagnostico"],
            ["Hay visitas y consultas, pero pocas ventas.", "Recorremos la experiencia de compra y revisamos en qué paso se pierde el interés.", "Una propuesta de mejora para la ficha, el formulario o el seguimiento.", "Explorar la landing de Bionda y Mora", "/biondaymora"],
          ].map(([need, work, example, label, href], index) => (
            <details key={need} name="situacion" open={index === 0} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded py-5 font-heading text-2xl font-semibold">
                {need}<span aria-hidden="true" className="text-[#76489b] group-open:rotate-45 motion-safe:transition-transform">+</span>
              </summary>
              <div className="grid gap-4 pb-6 md:grid-cols-2">
                <p className="leading-relaxed text-[#584a5b]">{work}</p>
                <div className="border-l-2 border-[#9772b2] pl-4"><strong>Ejemplo de entrega</strong><p className="mt-1">{example}</p><Link href={href} data-funnel-event={href === "/diagnostico" ? "diagnostic_cta" : "case_open"} className="mt-3 inline-block font-semibold text-[#573476] underline underline-offset-4">{label}</Link></div>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>

    <section id="areas" className="bg-[#0c0820] py-20 sm:py-28"><Container><div className="max-w-3xl"><p className="font-heading text-xs font-semibold uppercase tracking-[.18em] text-[#ae91ff]">Áreas de trabajo</p><h2 className="mt-4 font-heading text-4xl font-semibold tracking-[-.05em] text-white sm:text-5xl">Cuatro formas de trabajar en la venta.</h2><p className="mt-5 text-lg leading-relaxed text-[#c6bddb]">El problema de tu marca determina en cuál empezamos.</p></div><div className="mt-12 grid gap-4 md:grid-cols-2">{areas.map((area) => <article key={area.title} className="rounded-2xl border border-[#9e82ff]/20 bg-[#15102f] p-7 sm:p-8"><span className="grid h-12 w-12 place-items-center rounded-xl border border-[#a991ff]/25 bg-[#302153] text-[#c7b7ff]"><svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={area.icon}/></svg></span><h3 className="mt-7 font-heading text-2xl font-semibold text-white">{area.title}</h3><p className="mt-3 max-w-lg leading-relaxed text-[#c5bcd8]">{area.detail}</p><p className="mt-7 border-t border-white/10 pt-4 text-sm text-[#b4a3ea]">{area.examples}</p></article>)}</div></Container></section>

    <section className="bg-[#100927] py-20 sm:py-28"><Container><div className="max-w-3xl"><p className="font-heading text-xs font-semibold uppercase tracking-[.18em] text-[#ae91ff]">Cómo contratar</p><h2 className="mt-4 font-heading text-4xl font-semibold tracking-[-.05em] text-white sm:text-5xl">¿Qué tipo de apoyo necesitas?</h2></div><div className="mt-12 grid gap-4 lg:grid-cols-2">{paths.map((path) => <article key={path.title} className="flex min-w-0 flex-col rounded-[26px] border border-[#a38afa]/25 bg-[linear-gradient(145deg,#1b123c,#100a27)] p-7 sm:p-9"><p className="text-xs font-semibold uppercase tracking-[.16em] text-[#bba8ff]">{path.label}</p><h3 className="mt-5 font-heading break-words text-2xl font-semibold text-white sm:text-3xl">{path.title}</h3><p className="mt-4 max-w-lg leading-relaxed text-[#c8bfdc]">{path.text}</p><ul className="mt-8 space-y-3 border-t border-white/10 pt-6">{path.points.map((point) => <li key={point} className="flex gap-3 text-[#ded8ed]"><span aria-hidden="true" className="text-[#a78bff]">✓</span>{point}</li>)}</ul></article>)}</div><p className="mt-6 max-w-3xl text-sm leading-relaxed text-[#b6abc9]">Antes de empezar, recibes una propuesta con el trabajo acordado, las fechas y la inversión.</p></Container></section>

    <GrowthMap />

    <section className="bg-[#0a061d] py-20 sm:py-28"><Container><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]"><div><p className="font-heading text-xs font-semibold uppercase tracking-[.18em] text-[#ae91ff]">Entregables posibles</p><h2 className="mt-4 font-heading text-4xl font-semibold tracking-[-.05em] text-white sm:text-5xl">¿Qué recibe tu equipo?</h2><p className="mt-5 leading-relaxed text-[#c6bddb]">Estos son ejemplos de entregas que puedes usar en el día a día.</p></div><div className="divide-y divide-white/10 border-y border-white/10">{[["Dirección", "Un mapa que muestra cómo llega una consulta, quién la atiende y dónde se pierde."],["Experiencia digital", "Una página que explica la oferta y facilita comprar, reservar o pedir información."],["Operación", "Una guía que tu equipo puede seguir desde la primera pregunta hasta la respuesta al cliente."],["Aprendizaje", "Un registro de visitas, consultas o compras para decidir qué ajustar."]].map(([title,detail])=><article key={title} className="grid gap-3 py-6 sm:grid-cols-[.45fr_1fr]"><h3 className="font-heading text-xl font-semibold text-[#c4b2ff]">{title}</h3><p className="leading-relaxed text-[#c8bfd9]">{detail}</p></article>)}</div></div></Container></section>



    <section className="bg-[#100927] py-20 sm:py-28"><Container className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]"><div><p className="font-heading text-xs font-semibold uppercase tracking-[.18em] text-[#ae91ff]">Una colaboración clara</p><h2 className="mt-4 font-heading text-4xl font-semibold tracking-[-.05em] text-white sm:text-5xl">¿Qué hace RiBuzz y qué hace tu equipo?</h2></div><div className="space-y-4"><div className="rounded-2xl border border-white/10 bg-[#171034] p-6"><h3 className="font-heading text-xl font-semibold text-white">RiBuzz aporta dirección y ejecución</h3><p className="mt-3 leading-relaxed text-[#c5bbd7]">Revisamos el problema, proponemos qué cambiar y te mostramos el trabajo para que puedas probarlo.</p></div><div className="rounded-2xl border border-white/10 bg-[#171034] p-6"><h3 className="font-heading text-xl font-semibold text-white">Tu equipo aporta contexto y decisiones</h3><p className="mt-3 leading-relaxed text-[#c5bbd7]">Compartes lo que preguntan tus clientes, eliges con nosotros qué atender primero y apruebas las decisiones de marca.</p></div></div></Container></section>

    <section className="bg-[#08051b] py-20 sm:py-28"><Container className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="font-heading text-xs font-semibold uppercase tracking-[.18em] text-[#ae91ff]">Preguntas frecuentes</p><h2 className="mt-4 font-heading text-4xl font-semibold tracking-[-.05em] text-white">Antes de avanzar.</h2></div><div className="divide-y divide-white/10 border-y border-white/10">{questions.map(([question, answer]) => <details key={question} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-lg font-semibold text-white focus-visible:outline-2 focus-visible:outline-[#aa91ff]">{question}<span aria-hidden="true" className="text-2xl text-[#b59fff] group-open:rotate-45">+</span></summary><p className="mt-4 max-w-2xl leading-relaxed text-[#c5bbd7]">{answer}</p></details>)}</div></Container></section>

    <section className="bg-[#100927] py-20"><Container className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-[#a38afa]/20 bg-[#171034] p-8 sm:p-10 lg:flex-row lg:items-center"><div><p className="text-xs font-semibold uppercase tracking-[.16em] text-[#bba8ff]">Trabajo en contexto</p><h2 className="mt-3 font-heading text-3xl font-semibold text-white">¿Cómo contar un producto que cambia con la luz?</h2><p className="mt-3 max-w-2xl leading-relaxed text-[#c8bfdc]">Así convertimos el análisis de Arkos Wear en una propuesta para la portada de su tienda.</p></div><Button href="/proyectos/arkos-wear" variant="secondary">Leer el caso de Arkos Wear</Button></Container></section>

    <section className="bg-[#0c0820] py-20"><Container><div className="rounded-[28px] border border-[#a38afa]/25 bg-[radial-gradient(circle_at_90%_15%,rgba(132,87,255,.3),transparent_35%),#181033] p-8 sm:p-12"><p className="font-heading text-xs font-semibold uppercase tracking-[.18em] text-[#baa6ff]">El siguiente paso</p><h2 className="mt-4 max-w-3xl font-heading text-4xl font-semibold tracking-[-.05em] text-white sm:text-5xl">Cuéntanos dónde está hoy tu marca.</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#d0c7e2]">En 5 a 7 minutos puedes contarnos qué vendes y qué quisieras mejorar.</p><div className="mt-8 flex flex-wrap gap-3"><Button href={SITE_CONFIG.diagnosisPath} size="lg" variant="shimmer">Empezar diagnóstico</Button><Button href="/portafolio-comercial" size="lg" variant="secondary">Ver presentación comercial</Button></div></div></Container></section>
  </>;
}
