import Link from "next/link";

import { FeaturedProjects } from "@/components/sections/featured-projects";
import { HomeGrowthVisual } from "@/components/sections/home-growth-visual";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Sistemas comerciales para marcas",
  description: "RiBuzz trabaja con tu equipo para definir o mejorar cómo vende tu marca. Conoce el método, explora proyectos y descubre por dónde empezar.",
  path: "/",
});

const stages = [
  { title: "Diagnóstico", output: "Detectamos dónde se traba la compra.", team: "Compartes objetivos y dudas frecuentes de tus clientes.", ribuzz: "Revisamos tu oferta, tus canales y el recorrido de compra." },
  { title: "Prioridades", output: "Una propuesta con alcance, inversión y plazos.", team: "Eliges qué resolver primero.", ribuzz: "Definimos entregables y responsables contigo." },
  { title: "Ejecución", output: "Una pieza o un proceso listo para usar.", team: "Aportas materiales y validas las decisiones de marca.", ribuzz: "Diseñamos e implementamos la solución acordada." },
  { title: "Seguimiento", output: "Qué cambió y qué probaremos después.", team: "Compartes lo que observas en ventas.", ribuzz: "Revisamos contigo las consultas y las ventas para decidir qué ajustar." },
] as const;

const needs = [
  { question: "¿A qué cliente darle prioridad?", answer: "Elegimos contigo a quién llegar primero, con qué oferta y por qué canal." },
  { question: "¿Cuesta explicar por qué elegirte?", answer: "Damos forma a un mensaje que tu cliente entienda y recuerde." },
  { question: "¿Tu contenido deja dudas?", answer: "Planificamos contenido a partir de las dudas de tus clientes." },
  { question: "¿Hay interés pero pocas ventas?", answer: "Localizamos el paso donde se pierde la compra y lo mejoramos." },
] as const;

const buyingQuestions = [
  ["¿Qué recibo al completar el formulario?", "Al enviarlo sabrás si puedes agendar una llamada, empezar con un ejercicio o suscribirte a contenidos. Si trabajamos juntos, revisaremos dónde se frena la venta y qué cambiar primero."],
  ["¿Tengo que saber qué está fallando?", "Basta con un ejemplo. Si mucha gente pregunta por WhatsApp y pocas conversaciones terminan en venta, ese recorrido nos sirve para empezar a investigar."],
  ["¿Pueden trabajar con mi equipo actual?", "Sí. Acordamos quién hace qué. Tu equipo comparte lo que escucha al vender y revisa con nosotros los cambios antes de ponerlos en marcha."],
  ["¿Puedo contratar un proyecto puntual?", "Sí. Podemos mejorar una parte de tu sistema, como el seguimiento de consultas."],
  ["¿Qué debo tener a mano para empezar?", "Tu oferta, el canal por el que más te contactan y una duda frecuente de tus clientes. Si ya mides visitas, consultas o ventas, esas cifras ayudan a poner el reto en contexto."],
  ["¿Cuánto cuesta y cuánto tarda?", "Tras revisar tu objetivo y los materiales disponibles, te entregamos una propuesta con alcance, inversión y fechas."],
  ["¿Cómo sabremos si el trabajo ayuda?", "Elegimos qué medir según el problema. Si se enfrían las conversaciones por WhatsApp, revisamos cuántas reciben respuesta y cuántas llegan a una compra."],
] as const;

export default function HomePage() {
  return (
    <>
      <section id="home-hero" className="relative -mt-[76px] overflow-hidden bg-[#100a20] pt-[76px] text-white">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_45%,#45325e,transparent_55%)]" />
        <Container className="relative grid gap-9 py-9 sm:py-14 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:gap-12 lg:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#d2baff]">Growth partner digital para marcas</p>
            <h1 className="mt-5 max-w-[15ch] font-heading text-[clamp(2.7rem,5.4vw,5.25rem)] font-semibold leading-[.98] tracking-[-.055em]">¿Qué frena tus <span className="text-[#c8a8ff]">ventas digitales?</span></h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#e3dbe9] sm:text-lg">Definimos o mejoramos tu sistema comercial contigo. Revisamos qué entiende tu cliente, qué necesita para decidir y dónde se queda a mitad de la compra.</p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <span data-funnel-event="hero_cta"><Button href="#como-funciona" size="lg">Explorar el método</Button></span>
              <Link href="/diagnostico" data-funnel-event="diagnostic_cta" className="rounded py-3 font-semibold text-[#e1ccff] underline decoration-[#9278ad] underline-offset-4">Empezar diagnóstico</Link>
            </div>
          </div>
          <HomeGrowthVisual />
        </Container>
      </section>

      <section id="como-funciona" className="scroll-mt-20 bg-[#f4f0ed] py-14 text-[#261d2c] sm:py-20">
        <Container className="grid items-start gap-9 lg:grid-cols-[.78fr_1.22fr] lg:gap-14">
          <div>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight tracking-[-.045em] sm:text-5xl">Así trabajamos con tu equipo.</h2>
            <Link href="/about#equipo" className="mt-5 inline-block font-semibold text-[#58317c] underline underline-offset-4">Ver cómo se organiza el equipo</Link>
          </div>
          <ol className="border-t border-[#c9c0c6]">
            {stages.map((stage, index) => (
              <li key={stage.title} className="border-b border-[#c9c0c6]">
                <details name="metodo" className="group">
                  <summary className="flex cursor-pointer list-none items-baseline gap-4 rounded py-4">
                    <span aria-hidden="true" className="font-mono text-sm text-[#70567b]">0{index + 1}</span>
                    <span className="flex-1"><strong className="block font-heading text-2xl">{stage.title}</strong><span className="mt-1 block text-sm text-[#564a58]">{stage.output}</span></span>
                    <span aria-hidden="true" className="text-xl text-[#76489b] group-open:rotate-45 motion-safe:transition-transform">+</span>
                  </summary>
                  <dl className="grid gap-4 pb-5 pl-8 sm:grid-cols-2">
                    <div><dt className="font-semibold">Tu equipo</dt><dd className="mt-1 text-sm leading-relaxed">{stage.team}</dd></div>
                    <div><dt className="font-semibold">RiBuzz</dt><dd className="mt-1 text-sm leading-relaxed">{stage.ribuzz}</dd></div>
                  </dl>
                </details>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-y border-[#cbb9dc] bg-[#e6daf2] py-12 text-[#25192e] sm:py-16">
        <Container>
          <h2 className="max-w-3xl font-heading text-3xl font-semibold tracking-[-.04em] sm:text-5xl">¿Qué reconoces en tu marca?</h2>
          <div className="mt-7 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {needs.map(({ question, answer }) => (
              <article key={question} className="flex flex-col items-start border-t border-[#aa92bb] pt-4">
                <h3 className="font-heading text-xl font-semibold leading-snug">{question}</h3>
                <p className="my-3 leading-relaxed text-[#504357]">{answer}</p>
              </article>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 font-semibold text-[#51306b] underline underline-offset-4">
            <Link href="#para-quien">Ver si RiBuzz encaja con mi marca</Link>
            <Link href="/services#necesidad">Explorar los servicios</Link>
          </div>
        </Container>
      </section>

      <section id="para-quien" aria-labelledby="encaje-titulo" className="scroll-mt-24 bg-[#171122] py-14 text-white sm:py-20">
        <Container>
          <h2 id="encaje-titulo" className="max-w-2xl font-heading text-4xl font-semibold leading-tight sm:text-5xl">¿Es el momento de trabajar con RiBuzz?</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="flex flex-col rounded-3xl bg-[#e6daf2] p-6 text-[#26192f] sm:p-9">
              <h3 className="font-heading text-2xl font-semibold">Tiene sentido si…</h3>
              <ul className="my-5 flex-1 list-disc space-y-3 pl-5 marker:text-[#76539c]">
                <li>Ya tienes una oferta, pero a tus clientes les cuesta entender por qué elegirte.</li>
                <li>Inviertes en contenido o atraes consultas y necesitas saber dónde se pierde la venta.</li>
                <li>Buscas un equipo que te ayude a elegir prioridades, ejecutar y revisar qué funciona.</li>
              </ul>
              <Link href={SITE_CONFIG.diagnosisPath} data-funnel-event="diagnostic_cta" className="w-fit font-semibold underline underline-offset-4">Contar mi reto <span aria-hidden="true">↗</span></Link>
            </article>
            <article className="flex flex-col rounded-3xl border border-[#705f80] p-6 sm:p-9">
              <h3 className="font-heading text-2xl font-semibold">Tal vez te convenga esperar si…</h3>
              <ul className="my-5 flex-1 list-disc space-y-3 pl-5 text-[#e0d5e6] marker:text-[#bc9dd5]">
                <li>Sigues explorando ideas y aún no sabes qué producto o servicio quieres ofrecer.</li>
                <li>Necesitas a alguien que atienda a diario los mensajes y cierre ventas por ti.</li>
                <li>Tu equipo todavía no puede compartir contexto ni dedicar tiempo a revisar decisiones.</li>
              </ul>
              <Link href={SITE_CONFIG.giftsPath} className="w-fit font-semibold text-[#dcc3ff] underline underline-offset-4">Explorar los recursos de RiBuzz <span aria-hidden="true">↗</span></Link>
            </article>
          </div>
        </Container>
      </section>

      <FeaturedProjects />

      <section id="antes-de-decidir" className="scroll-mt-24 bg-[#f4f0ed] py-14 text-[#261d2c] sm:py-20">
        <Container className="grid items-start gap-6 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="max-w-lg font-heading text-4xl font-semibold tracking-[-.045em] sm:text-5xl">Antes de decidir</h2>

          </div>
          <div className="divide-y divide-[#c9c0c6] border-y border-[#c9c0c6]">
            {buyingQuestions.map(([question, answer]) => (
              <details key={question} name="contratar" className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded py-4 font-heading text-lg font-semibold">
                  {question}<span aria-hidden="true" className="text-[#76489b] group-open:rotate-45 motion-safe:transition-transform">+</span>
                </summary>
                <p className="max-w-xl pb-5 leading-relaxed text-[#564a58]">{answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#e3d4f7] py-16 text-[#21152e] sm:py-24">
        <Container className="grid items-end gap-8 lg:grid-cols-[1fr_.82fr]">
          <div>
            <h2 className="mt-4 max-w-xl font-heading text-4xl font-semibold leading-[1.03] tracking-[-.045em] sm:text-6xl">Cuéntanos qué te frena.</h2>
          </div>
          <div>
            <ol className="space-y-3 border-l-2 border-[#a584bd] pl-5 leading-relaxed">
              <li><strong>Cuéntanos cómo vendes hoy.</strong> El formulario toma de 5 a 7 minutos.</li>
              <li><strong>Recibe una recomendación.</strong> Según tus respuestas, podrás agendar una llamada, consultar recursos o suscribirte a contenidos.</li>
            </ol>
            <div className="mt-6 flex flex-wrap items-center gap-5">
              <span data-funnel-event="diagnostic_cta"><Button href={SITE_CONFIG.diagnosisPath}>Empezar diagnóstico</Button></span>
              <a className="font-semibold underline underline-offset-4" href={SITE_CONFIG.whatsappUrl}>Preguntar por WhatsApp</a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
