"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";

import styles from "./home-growth-visual.module.css";

const areas = [
  { name: "Estrategia", title: "Elegir dónde competir.", text: "Si tus clientes vuelven a comprar por WhatsApp, una prioridad puede ser facilitar ese pedido antes de invertir en atraer visitas.", model: "compass" },
  { name: "Comunicación", title: "Hacer claro tu valor.", text: "Encontramos las palabras para explicar por qué alguien elegiría tu marca.", model: "dialog" },
  { name: "Contenido", title: "Responder antes de vender.", text: "Convertimos las dudas de tus clientes en piezas que les ayudan a decidir.", model: "pages" },
  { name: "Conversión", title: "Facilitar el siguiente paso.", text: "Revisamos el camino de la consulta a la compra y resolvemos lo que la frena.", model: "funnel" },
] as const;

export function HomeGrowthVisual() {
  const [active, setActive] = useState(0);
  const area = areas[active];
  return (
    <section className={styles.visual} aria-label="Explora el sistema comercial">
      <div className={styles.stage} aria-hidden="true">
        <span className={styles.legend}>Sistema comercial</span>
        <span className={styles.counter}>0{active + 1} / 04</span>
        {active === 0 ? (
          <div className={styles.decision}>
            <div className={styles.decisionHeading}><Image src="/brand/ribuzz-face.png" alt="" width={32} height={32} />Ejemplo de prioridad</div>
            <dl>
              <div><dt>Cliente</dt><dd>Quien ya te compró</dd></div>
              <div><dt>Oferta</dt><dd>Su próximo pedido</dd></div>
              <div><dt>Canal</dt><dd>WhatsApp</dd></div>
            </dl>
          </div>
        ) : (
          <>
          <div className={styles.ground} />
          <div key={area.model} className={styles.scene} data-model={area.model}>
            {[0, 1, 2, 3].map((level) => (
              <div className={styles.layer} key={level} style={{ "--level": level } as CSSProperties}>
                {level === 3 && <div className={styles.mark}><Image src="/brand/ribuzz-face.png" alt="" width={68} height={68} /></div>}
              </div>
            ))}
          </div>
          </>
        )}
      </div>
      <div className={styles.controls} role="group" aria-label="Áreas del sistema comercial">
        {areas.map((item, index) => (
          <button type="button" key={item.name} aria-pressed={active === index} onClick={() => setActive(index)}>{item.name}</button>
        ))}
      </div>
      <div className={styles.copy} aria-live="polite" aria-atomic="true">
        <h2>{area.title}</h2>
        <p>{area.text}</p>
      </div>
    </section>
  );
}
