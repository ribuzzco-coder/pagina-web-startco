import type { Metadata } from "next";
import Image from "next/image";

import { createPageMetadata } from "@/lib/metadata";

import { MultimallasQuoteSimulator } from "./multimallas-quote-simulator";
import styles from "./multimallas.module.css";

const whatsapp = "https://wa.me/573122716575";
const message = (text: string) => `${whatsapp}?text=${encodeURIComponent(text)}`;

export const metadata: Metadata = createPageMetadata({
  title: "Multimallas Medellín | Mallas y estructuras deportivas",
  description: "Cuéntanos tu necesidad y recibe orientación para tu proyecto de mallas, cerramientos, estructuras deportivas o mantenimiento.",
  path: "/multimallas",
});

const services = [
  {
    number: "01",
    title: "Mallas de nylon",
    text: "Para cerramientos, placas deportivas, cubiertas, divisiones, porterías y redes deportivas.",
    image: "/images/multimallas/malla-nylon.png",
    alt: "Mallas de nylon para diferentes usos",
    message: "Hola, necesito orientación sobre mallas de nylon para mi proyecto.",
  },
  {
    number: "02",
    title: "Estructuras deportivas",
    text: "Fabricación e instalación de jaulas, porterías, integrados y estructuras para canchas.",
    image: "/images/multimallas/hero-estructuras.jpg",
    alt: "Cancha deportiva con estructura metálica",
    message: "Hola, quiero cotizar una estructura deportiva.",
  },
  {
    number: "03",
    title: "Cerramientos y seguridad",
    text: "Soluciones en malla para delimitar y proteger espacios, sin perder funcionalidad.",
    image: "/images/multimallas/proyecto-01.jpg",
    alt: "Cerramiento instalado con malla de seguridad",
    message: "Hola, necesito un cerramiento o una solución de seguridad en malla.",
  },
  {
    number: "04",
    title: "Mantenimiento deportivo",
    text: "Suministro, reparación y mantenimiento de grama sintética y reparación de mallas en nylon.",
    image: "/images/multimallas/hero-gramas.png",
    alt: "Grama sintética para escenarios deportivos",
    message: "Hola, necesito mantenimiento o reparación para una cancha o malla.",
  },
] as const;

const questions = [
  ["¿Qué tipo de proyecto realiza Multimallas?", "Mallas de nylon, cerramientos, estructuras metálicas deportivas, porterías, jaulas y servicios de reparación y mantenimiento deportivo."],
  ["¿Atienden proyectos fuera de Medellín?", "Sí. Multimallas indica que realiza proyectos deportivos en cualquier lugar del país. Escríbenos con la ubicación para revisar tu caso."],
  ["¿Qué información debo enviar para cotizar?", "Cuéntanos el tipo de espacio, la ciudad, medidas aproximadas y, si puedes, comparte fotos. Así la conversación por WhatsApp empieza con mejor contexto."],
] as const;

export default function MultimallasPage() {
  return (
    <main className={styles.page}>
      <a className={styles.skip} href="#servicios">Ir a los servicios</a>
      <header className={styles.header}>
        <a className={styles.logo} href="#inicio" aria-label="Multimallas, inicio"><Image src="/images/multimallas/logo.png" alt="Multimallas" width={216} height={60} priority /></a>
        <a className={styles.headerCta} href={message("Hola, quiero recibir orientación para mi proyecto.")} target="_blank" rel="noreferrer">Hablar por WhatsApp</a>
      </header>

      <section className={styles.hero} id="inicio">
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>MALLAS · CERRAMIENTOS · ESTRUCTURAS DEPORTIVAS</p>
          <h1>La solución correcta para <em>proteger y equipar</em> su espacio.</h1>
          <p className={styles.lead}>Fabricación e instalación para escenarios deportivos, conjuntos, colegios y proyectos especiales. Cuéntenos lo que necesita: le orientamos por WhatsApp.</p>
          <div className={styles.actions}>
            <a className={styles.primaryCta} href={message("Hola, quiero asesoría para mi proyecto. Mi necesidad es:")} target="_blank" rel="noreferrer">Solicitar orientación <span aria-hidden="true">→</span></a>
            <a className={styles.secondaryCta} href="#cotizador">Usar cotizador virtual</a>
          </div>
          <p className={styles.contactLine}>Atención directa: <strong>+57 312 271 6575</strong></p>
        </div>
        <div className={styles.heroVisual}>
          <Image src="/images/multimallas/hero-canchas.jpg" alt="Cerramiento de cancha sintética realizado por Multimallas" fill priority sizes="(max-width: 900px) 100vw, 38vw" />
          <aside className={styles.heroCard} aria-label="Cómo cotizar">
            <p>¿Necesita cotizar?</p>
            <ol><li>Escríbanos por WhatsApp.</li><li>Comparta medidas, ciudad y fotos.</li><li>Reciba orientación para su proyecto.</li></ol>
            <a href="#cotizador">Usar cotizador virtual <span aria-hidden="true">↓</span></a>
          </aside>
        </div>
      </section>

      <section className={styles.trust} aria-label="Compromiso Multimallas">
        <div className={styles.trustTrack}>
          <div className={styles.trustSet}><p>Fabricación e instalación</p><span aria-hidden="true" /> <p>Proyectos deportivos en Colombia</p><span aria-hidden="true" /> <p>Compromiso, cumplimiento y responsabilidad</p><span aria-hidden="true" /></div>
          <div className={styles.trustSet} aria-hidden="true"><p>Fabricación e instalación</p><span /> <p>Proyectos deportivos en Colombia</p><span /> <p>Compromiso, cumplimiento y responsabilidad</p><span /></div>
        </div>
      </section>

      <section className={styles.section} id="servicios">
        <div className={styles.sectionIntro}><p className={styles.eyebrow}>SERVICIOS</p><h2>Una conversación sencilla, una solución <em>bien planteada.</em></h2><p>Seleccione el servicio que más se acerca a su necesidad. El botón abre WhatsApp con el mensaje listo para enviar.</p></div>
        <div className={styles.serviceGrid}>{services.map((service) => <article className={styles.service} key={service.title}><div className={styles.serviceImage}><Image src={service.image} alt={service.alt} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw" /></div><p className={styles.number}>{service.number}</p><h3>{service.title}</h3><p>{service.text}</p><a href="#cotizador">Cotizar este servicio <span aria-hidden="true">→</span></a></article>)}</div>
      </section>

      <section className={styles.process}>
        <div><p className={styles.eyebrow}>ASÍ EMPEZAMOS</p><h2>Menos vueltas. <em>Más claridad.</em></h2><p>Para proyectos de servicio, una buena cotización comienza entendiendo el espacio y el objetivo.</p></div>
        <ol><li><b>01</b><div><h3>Cuéntenos su necesidad</h3><p>Tipo de proyecto, ciudad y uso del espacio.</p></div></li><li><b>02</b><div><h3>Comparta medidas o fotos</h3><p>La información visual ayuda a orientar la alternativa adecuada.</p></div></li><li><b>03</b><div><h3>Revise la propuesta</h3><p>Converse directamente con el equipo por WhatsApp.</p></div></li></ol>
      </section>

      <MultimallasQuoteSimulator />

      <section className={styles.projects}>
        <div className={styles.projectsVisual} aria-label="Galería de proyectos de Multimallas"><Image className={styles.projectMain} src="/images/multimallas/proyecto-02.jpg" alt="Cancha sintética con cerramiento en malla" fill sizes="(max-width: 900px) 100vw, 50vw" /><Image className={styles.projectInset} src="/images/multimallas/proyecto-03.jpg" alt="Detalle de una instalación de malla" width={190} height={190} /></div>
        <div><p className={styles.eyebrow}>EXPERIENCIA EN PROYECTOS</p><h2>Trabajo realizado en espacios que <em>sí se usan.</em></h2><p>En su portafolio público, Multimallas registra proyectos como el Estadio Alberto Grisales en Rionegro, la Unidad Deportiva Las Estancias en Medellín y canchas en distintas regiones del país.</p><a className={styles.textCta} href="https://www.multimallas.com.co/proyectos-ejecutados/" target="_blank" rel="noreferrer">Ver proyectos ejecutados <span aria-hidden="true">↗</span></a></div>
      </section>

      <section className={styles.faq} aria-labelledby="preguntas"><div><p className={styles.eyebrow}>PREGUNTAS FRECUENTES</p><h2 id="preguntas">Resolvamos lo importante antes de <em>escribirnos.</em></h2></div><div>{questions.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>

      <section className={styles.finalCta}>
        <p className={styles.eyebrow}>¿TIENE UN PROYECTO EN MENTE?</p><h2>Hablemos de su espacio.</h2><p>Organice su necesidad en el cotizador y envíela al equipo por WhatsApp.</p><a className={styles.primaryCta} href="#cotizador">Usar cotizador virtual <span aria-hidden="true">→</span></a>
      </section>

      <footer className={styles.footer}><div><a className={styles.logo} href="#inicio"><Image src="/images/multimallas/logo.png" alt="Multimallas" width={216} height={60} /></a><p>Medellín, Colombia</p></div><div><a href="tel:+576043343148">(604) 334 3148</a><a href="mailto:multimallasmedellin@gmail.com">multimallasmedellin@gmail.com</a></div><a href={message("Hola, tengo una solicitud:")} target="_blank" rel="noreferrer">WhatsApp: 312 271 6575 ↗</a></footer>
    </main>
  );
}
