import { Container } from "@/components/ui/container";

const steps = [
  { title: "Entender", description: "Contexto, cliente y negocio", path: "M11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm6 14 4 4" },
  { title: "Enfocar", description: "Prioridades y estrategia", path: "M12 3v4m0 10v4M3 12h4m10 0h4M7 7l2 2m6 6 2 2M17 7l-2 2M9 15l-2 2M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" },
  { title: "Construir", description: "Activos, canales y procesos", path: "M4 6h16v12H4zM4 10h16M8 14h3m3 0h2" },
  { title: "Aprender", description: "Seguimiento y mejora", path: "M4 19h16M6 16l4-5 3 2 5-7M15 6h3v3" },
] as const;

export function GrowthMap() {
  return <section className="overflow-hidden bg-[#0b0720] py-20 sm:py-28"><Container><div className="max-w-3xl"><p className="font-heading text-xs font-semibold uppercase tracking-[.18em] text-[#a990ff]">Nuestro recorrido de trabajo</p><h2 className="mt-4 font-heading text-4xl font-semibold tracking-[-.05em] text-white sm:text-5xl">De la claridad a la acción.</h2><p className="mt-5 text-lg leading-relaxed text-[#c6bddb]">Una ruta compartida para conectar lo que tu marca necesita con lo que construimos y aprendemos juntos.</p></div><div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><div aria-hidden="true" className="absolute left-[10%] right-[10%] top-10 hidden h-px bg-gradient-to-r from-[#7956ec]/20 via-[#a992ff] to-[#7956ec]/20 lg:block" />{steps.map((step) => <article key={step.title} className="relative rounded-2xl border border-[#8e73ef]/20 bg-[#15102e] p-6"><div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#a991ff]/30 bg-[#34235d] text-[#cbbaff]"><svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={step.path}/></svg></div><h3 className="mt-8 font-heading text-xl font-semibold text-white">{step.title}</h3><p className="mt-2 leading-relaxed text-[#bfb5d4]">{step.description}</p></article>)}</div></Container></section>;
}
