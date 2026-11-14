"use client";

import Image from "next/image";
import { DM_Serif_Display, Jost } from "next/font/google";
import { FormEvent, useEffect, useRef, useState } from "react";

import styles from "./proyecta.module.css";

const display = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-proyecta-display",
  display: "swap",
});

const sans = Jost({
  subsets: ["latin"],
  variable: "--font-proyecta-sans",
  display: "swap",
});

const ritualSteps = [
  {
    number: "01",
    title: "Enciende tu luz",
    cue: "Respira. Este instante es tuyo.",
    image: "/images/biondaymora/site/boots-campaign.jpg",
    imageAlt: "Botas Bionda y Mora entre flores",
    body: "Busca un lugar tranquilo y enciende una vela. Respira profundo y regálate un instante para estar presente.",
  },
  {
    number: "02",
    title: "Visualiza",
    cue: "Nombra eso hacia lo que quieres ir.",
    image: "/images/biondaymora/site/hero-2026-mobile.jpg",
    imageAlt: "Mujer con botas Bionda y Mora lista para caminar",
    body: "Cierra los ojos e imagina eso hacia lo que quieres caminar. ¿Qué sueño quieres perseguir? ¿Qué deseas construir, vivir o transformar?",
  },
  {
    number: "03",
    title: "Activa tu intención",
    cue: "Haz de tu pieza un símbolo de movimiento.",
    image: "/images/biondaymora/site/margarita.jpg",
    imageAlt: "Botas Margarita Bionda y Mora",
    body: "Toma tu pieza entre tus manos. Mírala, tócala y piensa en aquello que acabas de visualizar. Dale el significado de ese sueño que hoy decides hacer realidad.",
  },
  {
    number: "04",
    title: "Da el primer paso",
    cue: "Llévala contigo. El camino ya empezó.",
    image: "/images/biondaymora/site/look-campaign.jpg",
    imageAlt: "Mujer caminando con botines Bionda y Mora",
    body: "Póntela. Llévala contigo como una declaración de intención y como recordatorio de que tus sueños merecen movimiento, valentía y un camino.",
  },
] as const;

const bootsCollectionUrl = "https://biondaymora.com/collections/botas-todas";

function trackProyectaEvent(name: string, parameters: Record<string, string | number> = {}) {
  const analytics = window as Window & {
    gtag?: (command: string, event: string, parameters: Record<string, string | number>) => void;
  };
  analytics.gtag?.("event", name, { campaign: "proyecta_2027", ...parameters });
}

export function ProyectaExperience() {
  const [activeStep, setActiveStep] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);
  const [intention, setIntention] = useState("");
  const [isSealed, setIsSealed] = useState(false);
  const [projectionImage, setProjectionImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [shareMessage, setShareMessage] = useState("");
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);
  const mobileStepRefs = useRef<Array<HTMLElement | null>>([]);
  const viewedSteps = useRef(new Set<number>());

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setHasEntered(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const observedSteps = [...stepRefs.current, ...mobileStepRefs.current].filter(
      (step): step is HTMLElement => step !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];
        if (current) {
          const nextStep = Number((current.target as HTMLElement).dataset.step);
          setActiveStep(nextStep);
          if (!viewedSteps.current.has(nextStep)) {
            viewedSteps.current.add(nextStep);
            trackProyectaEvent("proyecta_step_viewed", { step: nextStep + 1 });
          }
        }
      },
      { rootMargin: "-28% 0px -45% 0px", threshold: [0.2, 0.45, 0.7] },
    );

    observedSteps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  function sealIntention(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (intention.trim()) {
      setIsSealed(true);
      trackProyectaEvent("proyecta_intention_saved");
    }
  }

  async function generateProjection() {
    if (!intention.trim() || isGenerating) return;
    setIsGenerating(true);

    try {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (!context) return;

      canvas.width = 1080;
      canvas.height = 1920;
      context.fillStyle = "#77795b";
      context.fillRect(0, 0, canvas.width, canvas.height);

      const photo = new window.Image();
      photo.src = "/images/biondaymora/site/boots-campaign.jpg";
      await new Promise<void>((resolve, reject) => {
        photo.onload = () => resolve();
        photo.onerror = () => reject(new Error("No se pudo preparar la imagen."));
      });

      const photoHeight = 930;
      const scale = Math.max(canvas.width / photo.width, photoHeight / photo.height);
      const renderedWidth = photo.width * scale;
      const renderedHeight = photo.height * scale;
      context.drawImage(photo, (canvas.width - renderedWidth) / 2, (photoHeight - renderedHeight) / 2, renderedWidth, renderedHeight);

      context.fillStyle = "rgba(51, 39, 28, 0.28)";
      context.fillRect(0, 0, canvas.width, photoHeight);
      context.fillStyle = "#f5ead8";
      context.font = "600 26px Jost, Arial, sans-serif";
      context.letterSpacing = "4px";
      context.fillText("MI PRÓXIMO PASO · 2027", 78, 1040);
      context.letterSpacing = "0px";
      context.font = "62px Georgia, serif";

      const words = intention.trim().split(/\s+/);
      const lines: string[] = [];
      let line = "";
      words.forEach((word) => {
        const candidate = line ? `${line} ${word}` : word;
        if (context.measureText(candidate).width > 860 && line) {
          lines.push(line);
          line = word;
        } else {
          line = candidate;
        }
      });
      if (line) lines.push(line);

      context.fillText("En 2027 quiero", 78, 1160);
      context.fillText("caminar hacia…", 78, 1232);
      context.font = "italic 66px Georgia, serif";
      lines.slice(0, 4).forEach((text, index) => context.fillText(text, 78, 1380 + index * 82));
      context.strokeStyle = "rgba(245, 234, 216, 0.7)";
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(78, 1760);
      context.lineTo(1002, 1760);
      context.stroke();
      context.font = "600 22px Jost, Arial, sans-serif";
      context.fillText("BIONDA & MORA · PROYECTA 2027", 78, 1820);
      setProjectionImage(canvas.toDataURL("image/png"));
      trackProyectaEvent("proyecta_projection_generated");
    } finally {
      setIsGenerating(false);
    }
  }

  async function shareProjection() {
    if (!projectionImage) return;
    setShareMessage("");
    try {
      const response = await fetch(projectionImage);
      const image = await response.blob();
      const file = new File([image], "mi-proyeccion-bionda-y-mora-2027.png", { type: "image/png" });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          title: "Mi Proyección 2027",
          text: "Lo que sueño también merece un camino.",
          files: [file],
        });
        trackProyectaEvent("proyecta_projection_shared");
      } else {
        setShareMessage("Tu dispositivo no permite compartir esta imagen directamente. Descárgala para compartirla.");
      }
    } catch (error) {
      if (!(error instanceof DOMException && error.name === "AbortError")) {
        setShareMessage("No pudimos abrir el menú de compartir. Puedes descargar tu imagen.");
      }
    }
  }

  return (
    <main className={`${styles.page} ${display.variable} ${sans.variable} ${hasEntered ? styles.pageEntered : ""}`}>
      <header className={styles.header}>
        <Image
          src="/images/biondaymora/site/wordmark.png"
          alt="Bionda y Mora"
          width={220}
          height={52}
          priority
        />
        <p>PROYECTA · 2027</p>
      </header>

      <section className={styles.hero} aria-labelledby="proyecta-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>UN RITUAL PARA TU PRÓXIMO PASO</p>
          <h1 id="proyecta-title">Una luz,<br /><em>una intención,</em><br />un nuevo camino.</h1>
          <p className={styles.lead}>Antes de estrenar esta pieza, regálate unos minutos. Este momento es para ti: para conectar con eso que sueñas y recordar que todo camino comienza con una decisión.</p>
          <a className={styles.heroAction} href="#ritual" onClick={() => trackProyectaEvent("proyecta_ritual_started")}>Comenzar el ritual <span aria-hidden="true">↓</span></a>
          <p className={styles.heroHint} aria-hidden="true">Desliza para entrar</p>
        </div>
      </section>

      <section className={styles.ritual} id="ritual" aria-labelledby="ritual-title" data-active-step={activeStep + 1}>
        <div className={styles.desktopRitual}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>UN MOMENTO PARA TI</p>
            <h2 id="ritual-title">Camina el ritual<br /><em>a tu propio ritmo.</em></h2>
            <p className={styles.progress}>PASO {ritualSteps[activeStep].number} / 04 · {ritualSteps[activeStep].title}</p>
            <p className={styles.moment}>{ritualSteps[activeStep].cue}</p>
            <div className={styles.ritualVisual}>
              <Image
                key={ritualSteps[activeStep].image}
                src={ritualSteps[activeStep].image}
                alt={ritualSteps[activeStep].imageAlt}
                fill
                sizes="(max-width: 760px) 100vw, 25vw"
              />
            </div>
          </div>
          <ol className={styles.steps}>
          {ritualSteps.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <li
                key={step.number}
                ref={(element) => { stepRefs.current[index] = element; }}
                data-step={index}
                className={isActive ? styles.stepActive : undefined}
              >
                <button
                  type="button"
                  onClick={() => {
                    setActiveStep(index);
                    stepRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  aria-pressed={isActive}
                >
                  <span className={styles.stepNumber}>{step.number}</span>
                  <span className={styles.stepContent}>
                    <strong>{step.title}</strong>
                    <span>{step.body}</span>
                  </span>
                  <span className={styles.stepMark} aria-hidden="true">{isActive ? "—" : "+"}</span>
                </button>
              </li>
            );
          })}
          </ol>
        </div>
        <div className={styles.mobileJourney} aria-label="Ritual Proyecta, cuatro pasos">
          {ritualSteps.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <article
                key={step.number}
                ref={(element) => { mobileStepRefs.current[index] = element; }}
                data-step={index}
                className={`${styles.journeyChapter} ${isActive ? styles.journeyChapterActive : ""}`}
              >
                <div className={styles.journeyImage}>
                  <Image src={step.image} alt={step.imageAlt} fill sizes="100vw" />
                </div>
                <div className={styles.journeyCopy}>
                  <p className={styles.journeyMeta}>PROYECTA · {step.number} / 04</p>
                  <p className={styles.journeyCue}>{step.cue}</p>
                  <h3>{step.title}</h3>
                  <p className={styles.journeyBody}>{step.body}</p>
                  {index < ritualSteps.length - 1 && <p className={styles.journeyScroll} aria-hidden="true">Continúa hacia dentro <span>↓</span></p>}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.intentionSection} aria-labelledby="intention-title">
        <div className={styles.intentionPhoto}>
          <Image
            src="/images/biondaymora/site/hero-2026-mobile.jpg"
            alt="Mujer con botas Bionda y Mora lista para caminar"
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </div>
        <div className={styles.intentionPanel}>
          <p className={styles.eyebrow}>MI PRÓXIMO PASO · 2027</p>
          <h2 id="intention-title">En 2027 quiero<br />caminar hacia<span>...</span></h2>
          <form onSubmit={sealIntention} className={styles.intentionForm}>
            <label className={styles.srOnly} htmlFor="intention">Tu intención para 2027</label>
            <textarea
              id="intention"
              value={intention}
              onChange={(event) => {
                setIntention(event.target.value);
                setIsSealed(false);
                setProjectionImage(null);
                setShareMessage("");
              }}
              placeholder="Escribe aquí tu intención"
              maxLength={280}
              rows={3}
            />
            <button type="submit" disabled={!intention.trim()}>{isSealed ? "Intención lista para proyectarse" : "Preparar mi intención"}</button>
          </form>
          {isSealed && (
            <div className={styles.projectionActions}>
              <button type="button" onClick={generateProjection} disabled={isGenerating}>
                {isGenerating ? "Creando tu proyección…" : "Crear mi proyección"}
              </button>
              <p>Convierte este momento en una imagen para guardar o compartir.</p>
            </div>
          )}
          {projectionImage && (
            <figure className={styles.projectionPreview}>
              <Image src={projectionImage} alt="Tu intención Proyecta 2027" width={1080} height={1350} unoptimized />
              <figcaption>
                <span>Tu Proyección 2027 está lista.</span>
                <small>Formato vertical listo para compartir en Stories.</small>
                <div className={styles.shareActions}>
                  <a href={projectionImage} download="mi-proyeccion-bionda-y-mora-2027.png" onClick={() => trackProyectaEvent("proyecta_projection_downloaded")}>Descargar imagen</a>
                  <button type="button" onClick={shareProjection}>Compartir</button>
                </div>
                {shareMessage && <small>{shareMessage}</small>}
              </figcaption>
            </figure>
          )}
          {projectionImage && <p className={styles.celebration}>Tu camino ya tiene dirección.</p>}
          <p className={styles.intentionClosing}>Lo que sueñas también merece un camino.</p>
          <a className={styles.bootsCta} href={bootsCollectionUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackProyectaEvent("proyecta_boots_collection_clicked")}>Descubre las botas que acompañan tu camino <span aria-hidden="true">↗</span></a>
          {projectionImage && <a className={styles.ritualReturn} href="#ritual" onClick={() => trackProyectaEvent("proyecta_ritual_returned")}>Volver a mi ritual <span aria-hidden="true">↑</span></a>}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Tu sueño. Tu camino. Tu momento.</p>
        <Image src="/images/biondaymora/site/wordmark.png" alt="Bionda y Mora" width={192} height={46} />
        <small>Cada paso escribe tu historia.</small>
      </footer>
    </main>
  );
}
