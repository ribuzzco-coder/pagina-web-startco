"use client";

import { useState } from "react";

const perspectives = [
  {
    label: "Mensaje",
    title: "Lo que llevas por dentro",
    quote: "Hay cosas que no sabemos decir. Las dibujamos.",
    explanation: "La emoción y la identidad se propusieron como punto de entrada para conectar cada diseño con quien lo lleva.",
    number: "01",
  },
  {
    label: "Prueba",
    title: "Sombra y sol",
    quote: "Bajo la sombra es una cosa. Bajo el sol, es otra.",
    explanation: "La transformación con luz se planteó como demostración visual en los diseños que cuentan con esa característica.",
    number: "02",
  },
  {
    label: "Marco",
    title: "Armadura cotidiana",
    quote: "No es para pelear. Es para sostenerte.",
    explanation: "El universo del guerrero se conservó como referencia simbólica, sin imponer un tono épico literal.",
    number: "03",
  },
] as const;

export function ConceptInspector() {
  const [active, setActive] = useState(0);
  const item = perspectives[active];

  return (
    <section className="bg-[#0b071a] py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div><p className="font-heading text-xs font-semibold uppercase tracking-[.18em] text-[#b49dff]">Una pieza de la propuesta</p><h2 className="mt-4 font-heading text-4xl font-semibold tracking-[-.05em] text-white sm:text-5xl">Una idea, tres papeles.</h2></div>
          <p className="max-w-xl text-lg leading-relaxed text-[#c9c0dc]">Explora los fragmentos de la dirección conceptual y la función que se propuso para cada uno.</p>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-[28px] border border-[#b49dff]/25 bg-[#17102e] lg:grid-cols-[.35fr_.65fr]">
          <div className="flex flex-wrap gap-2 border-b border-white/10 p-4 lg:flex-col lg:border-b-0 lg:border-r lg:p-6" role="group" aria-label="Perspectivas de la propuesta">
            {perspectives.map((perspective, index) => (
              <button key={perspective.label} type="button" aria-pressed={active === index} onClick={() => setActive(index)} className={`flex min-h-12 flex-1 items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4c7ff] motion-reduce:transition-none lg:flex-none ${active === index ? "border-[#b49dff]/60 bg-[#3b2b69] text-white" : "border-transparent text-[#c2b7d6] hover:bg-white/[.06] hover:text-white"}`}>
                <span className="text-xs text-[#baa5ff]">{perspective.number}</span>{perspective.label}
              </button>
            ))}
          </div>
          <div className="relative min-h-[290px] overflow-hidden p-7 sm:p-10" aria-live="polite" aria-atomic="true">
            <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full bg-[#7c5bde]/20 blur-3xl" />
            <div key={item.label} className="relative animate-[arkos-reveal_350ms_ease-out_both] motion-reduce:animate-none">
              <p className="text-xs font-semibold uppercase tracking-[.17em] text-[#bca8ff]">{item.label} · {item.title}</p>
              <blockquote className="mt-7 max-w-xl font-heading text-3xl font-semibold leading-tight tracking-[-.04em] text-white sm:text-4xl">“{item.quote}”</blockquote>
              <p className="mt-6 max-w-xl leading-relaxed text-[#cbc1dd]">{item.explanation}</p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-[#aaa0bb]">Fragmentos de la dirección conceptual propuesta en octubre de 2026. Se muestran como parte del proceso, no como afirmación de implementación.</p>
      </div>
      <style>{`@keyframes arkos-reveal { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </section>
  );
}
