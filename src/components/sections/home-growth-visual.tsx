"use client";

import Image from "next/image";
import { useState } from "react";

import styles from "./home-growth-visual.module.css";

const stages = [
  { label: "Estrategia", detail: "Elegir prioridades", icon: "M12 3 4 7v6c0 4 3.2 6.7 8 8 4.8-1.3 8-4 8-8V7l-8-4Zm-3 9 2 2 4-4" },
  { label: "Comunicación", detail: "Aclarar el mensaje", icon: "M3 12h4l3-7 4 14 3-7h4" },
  { label: "Contenido", detail: "Resolver dudas", icon: "M5 4h14v16H5zM8 8h8M8 12h8M8 16h5" },
  { label: "Conversión", detail: "Facilitar la compra", icon: "M4 5h16l-6 7v5l-4 2v-7L4 5Z" },
] as const;

const examples = [
  { path: "M36 43v31q0 9 7 16l87 67", text: "Definimos a quién vendes y qué valor tiene tu oferta para ese cliente." },
  { path: "M314 43v31q0 9-7 16l-87 67", text: "Acordamos cómo explicar lo que te distingue en tu web, en redes y en una conversación de venta." },
  { path: "M36 303v-31q0-9 7-16l87-67", text: "Convertimos preguntas frecuentes en piezas que ayudan a comparar opciones y decidir." },
  { path: "M314 303v-31q0-9-7-16l-87-67", text: "Seguimos el recorrido desde el primer clic para encontrar dónde se frena la venta." },
] as const;

export function HomeGrowthVisual() {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.visual} aria-label="RiBuzz conecta estrategia, comunicación, contenido y conversión">
      <div className={styles.canvas}>
        <div className={styles.header}><span className={styles.pulse} aria-hidden="true" />Explora el sistema comercial</div>
        <div className={styles.orbit} aria-hidden="true">
          <svg className={styles.connections} viewBox="0 0 350 350" fill="none">
            <g stroke="currentColor" strokeWidth="1.5">
              {examples.map((item, index) => <path key={item.path} d={item.path} opacity={active === index ? 1 : .24} strokeWidth={active === index ? 3 : 1} />)}
            </g>
          </svg>
          <div className={styles.ringOuter} />
          <div className={styles.ringInner} />
          <div className={styles.beam} />
          <div className={styles.coreShadow} />
          <div className={styles.core}>
            <Image src="/brand/ribuzz-face.png" alt="" fill sizes="116px" className={styles.face} />
          </div>
        </div>
        <div className={styles.cards} role="group" aria-label="Áreas del sistema comercial">
          {stages.map((stage, index) => (
            <button type="button" key={stage.label} className={styles.card} aria-pressed={active === index} onClick={() => setActive(index)}>
              <span className={styles.icon}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={stage.icon}/></svg></span>
              <span><strong>{stage.label}</strong><small>{stage.detail}</small></span>
            </button>
          ))}
        </div>
        <p className={styles.explanation} aria-live="polite" aria-atomic="true"><strong>{stages[active].label}.</strong> {examples[active].text}</p>
      </div>
    </div>
  );
}
