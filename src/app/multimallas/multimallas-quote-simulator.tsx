"use client";

import { FormEvent, useMemo, useState } from "react";

import styles from "./multimallas.module.css";

const services = [
  "Mallas de nylon",
  "Estructuras deportivas",
  "Cerramientos y seguridad",
  "Mantenimiento deportivo",
] as const;

const spaceTypes = ["Cancha o escenario deportivo", "Conjunto o unidad residencial", "Colegio o institución", "Empresa o comercio", "Otro"] as const;
const sizeRanges = ["Menos de 50 m²", "Entre 50 y 200 m²", "Más de 200 m²", "Aún no tengo las medidas"] as const;

export function MultimallasQuoteSimulator() {
  const [service, setService] = useState<(typeof services)[number]>(services[0]);
  const [space, setSpace] = useState<(typeof spaceTypes)[number]>(spaceTypes[0]);
  const [size, setSize] = useState<(typeof sizeRanges)[number]>(sizeRanges[0]);
  const [city, setCity] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const whatsappUrl = useMemo(() => {
    const lines = [
      "Hola, quiero solicitar una cotización a Multimallas.",
      `Servicio: ${service}.`,
      `Espacio: ${space}.`,
      `Tamaño aproximado: ${size}.`,
      `Ciudad: ${city.trim() || "Por confirmar"}.`,
      notes.trim() ? `Detalles adicionales: ${notes.trim()}.` : "",
    ].filter(Boolean);
    return `https://wa.me/573122716575?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [city, notes, service, size, space]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className={styles.simulator} id="cotizador" aria-labelledby="cotizador-titulo">
      <div className={styles.simulatorIntro}>
        <p className={styles.eyebrow}>COTIZADOR VIRTUAL</p>
        <h2 id="cotizador-titulo">Prepare su solicitud en <em>menos de un minuto.</em></h2>
        <p>Esta guía organiza la información que necesitamos para orientarlo. El valor final se confirma directamente según su espacio, medidas y requerimientos.</p>
        <div className={styles.simulatorSteps} aria-label="Pasos del cotizador"><span>1. Servicio</span><span>2. Espacio</span><span>3. WhatsApp</span></div>
      </div>
      <form className={styles.quoteForm} onSubmit={handleSubmit}>
        <label>¿Qué servicio necesita?<select value={service} onChange={(event) => setService(event.target.value as (typeof services)[number])}>{services.map((option) => <option key={option}>{option}</option>)}</select></label>
        <label>¿Para qué tipo de espacio?<select value={space} onChange={(event) => setSpace(event.target.value as (typeof spaceTypes)[number])}>{spaceTypes.map((option) => <option key={option}>{option}</option>)}</select></label>
        <label>¿Cuál es el tamaño aproximado?<select value={size} onChange={(event) => setSize(event.target.value as (typeof sizeRanges)[number])}>{sizeRanges.map((option) => <option key={option}>{option}</option>)}</select></label>
        <label>¿En qué ciudad está el proyecto?<input value={city} onChange={(event) => setCity(event.target.value)} placeholder="Ej.: Medellín" autoComplete="address-level2" /></label>
        <label className={styles.formWide}>¿Hay algo más que debamos saber? <small>Opcional</small><textarea value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="Medidas, fotos disponibles, estado actual o necesidad específica." rows={3} /></label>
        <div className={styles.quoteActions}><button type="submit">Preparar mi solicitud <span aria-hidden="true">→</span></button>{submitted && <div className={styles.quoteReady} role="status"><strong>Su solicitud está lista.</strong><span>Abra WhatsApp para enviarla al equipo.</span><a href={whatsappUrl} target="_blank" rel="noreferrer">Continuar por WhatsApp <span aria-hidden="true">↗</span></a></div>}</div>
      </form>
    </section>
  );
}
