"use client";

import { type ReactNode, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionDivider } from "@/components/ui/section-divider";
import { SITE_CONFIG } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type Product = "Tarjeta NFC" | "Llavero NFC" | "Pedido por volumen";
type Purpose = "Networking y ventas" | "Evento o activación" | "Regalo o membresía" | "Menú, reserva o experiencia";
type Quantity = "1 unidad" | "2 a 4 unidades" | "5 a 9 unidades" | "10 a 49 unidades" | "50 o más unidades";
type AddOn = "Solo el NFC" | "Diseño de tarjeta ($90.000)" | "Diseño 3D exclusivo ($150.000)" | "Perfil digital ($350.000)";

const products: Array<{ value: Product; price: string; copy: string }> = [
  { value: "Tarjeta NFC", price: "$89.900", copy: "Para compartir tu perfil, contacto o portafolio en una reunión." },
  { value: "Llavero NFC", price: "$49.900 c/u · mínimo 5", copy: "Para convertir un objeto de marca en un acceso digital que se lleva todos los días." },
  { value: "Pedido por volumen", price: "Desde $24.900 c/u · 50 tarjetas", copy: "Para equipos, eventos y activaciones que requieren cantidad y consistencia." },
];

const purposes: Purpose[] = ["Networking y ventas", "Evento o activación", "Regalo o membresía", "Menú, reserva o experiencia"];
const cardQuantities: Quantity[] = ["1 unidad", "2 a 4 unidades", "5 a 9 unidades", "10 a 49 unidades", "50 o más unidades"];
const keychainQuantities: Quantity[] = ["5 a 9 unidades", "10 a 49 unidades", "50 o más unidades"];
const addOns: AddOn[] = ["Solo el NFC", "Diseño de tarjeta ($90.000)", "Diseño 3D exclusivo ($150.000)", "Perfil digital ($350.000)"];

export function NfcRequestForm() {
  const [step, setStep] = useState(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [purpose, setPurpose] = useState<Purpose | null>(null);
  const [quantity, setQuantity] = useState<Quantity | null>(null);
  const [addOn, setAddOn] = useState<AddOn>("Solo el NFC");
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const selectedProduct = useMemo(() => products.find((item) => item.value === product), [product]);
  const availableQuantities = product === "Llavero NFC" ? keychainQuantities : cardQuantities;
  const canContinue = Boolean(
    (step === 1 && product) ||
      (step === 2 && purpose) ||
      (step === 3 && quantity) ||
      (step === 4 && name.trim() && whatsapp.trim()),
  );

  const next = () => {
    if (canContinue && step < 4) setStep((current) => current + 1);
  };

  const handleSubmit = () => {
    if (!canContinue || !product || !purpose || !quantity) return;

    const message = [
      "Hola, completé el filtro para cotizar un producto NFC.",
      "",
      `Producto: ${product}`,
      `Objetivo: ${purpose}`,
      `Cantidad: ${quantity}`,
      `Complemento: ${addOn}`,
      `Nombre: ${name}`,
      `Negocio: ${business || "No indicado"}`,
      `WhatsApp: ${whatsapp}`,
    ].join("\n");

    setSubmitted(true);
    window.open(`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <SectionDivider />
      <section id="filtro-nfc" className="nfc-product-request cv-auto py-20 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="max-w-xl lg:sticky lg:top-24">
            <p className="nfc-product-kicker text-[11px] font-semibold uppercase tracking-[0.16em] text-[#CEC6E0]">Configura tu solución</p>
            <h2 className="mt-4 text-[2rem] font-semibold leading-[1.02] text-[#E4DFF7] [font-family:var(--font-saira)] sm:text-[2.8rem]">Cuéntanos qué debería pasar después del toque.</h2>
            <p className="mt-5 text-[0.98rem] leading-relaxed text-[#BDB7D5] sm:text-base">En cuatro respuestas identificamos el formato, el activo digital y el nivel de personalización adecuado para cotizar sin adivinar.</p>
            <div className="mt-7 hidden space-y-3 lg:block">
              {["Elige el formato", "Define el objetivo comercial", "Configura cantidad y complementos", "Recibe una cotización enfocada"].map((item, index) => (
                <div key={item} className={cn("flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm transition", index + 1 === step ? "border-[#785FDD]/70 bg-[#6939E2]/12 text-[#E4DFF7]" : "border-white/8 bg-white/[0.025] text-[#98A0B3]")}>
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/8 text-xs font-bold">{index + 1}</span>{item}
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 lg:hidden" aria-label="El filtro tiene cuatro pasos">
              {[1, 2, 3, 4].map((item) => <span key={item} className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-xs font-semibold text-[#E4DFF7]">{item}</span>)}
              <span className="ml-1 text-xs text-[#BDB7D5]">4 pasos · 2 minutos</span>
            </div>
            <p className="mt-7 hidden text-sm leading-relaxed text-[#98A0B3] lg:block">El filtro no es un catálogo. Es el punto de entrada para que la recomendación, el precio y la producción tengan sentido para tu caso.</p>
          </div>

          <Card interactiveGlow={false} className="rounded-[30px] p-5 sm:p-8">
            <div className="mb-7 flex items-center justify-between gap-4"><p className="text-sm font-semibold text-[#E4DFF7]">Paso {step} de 4</p><div className="flex gap-1.5" aria-label={`Paso ${step} de 4`}>{[1, 2, 3, 4].map((item) => <span key={item} className={cn("h-1.5 w-8 rounded-full transition sm:w-11", item <= step ? "bg-[#785FDD]" : "bg-white/10")} />)}</div></div>

            {step === 1 ? <Step title="¿Qué formato necesitas?" description="Elige por el uso, no por apariencia. Después afinamos el diseño y la experiencia digital."><div className="grid gap-3">{products.map((item) => <ChoiceCard key={item.value} active={product === item.value} onClick={() => setProduct(item.value)} title={item.value} meta={item.price} description={item.copy} />)}</div></Step> : null}
            {step === 2 ? <Step title="¿Qué resultado debe activar?" description="El uso define a dónde debe llevar el NFC y qué debe ocurrir después del toque."><div className="grid gap-3 sm:grid-cols-2">{purposes.map((item) => <ChoiceCard key={item} active={purpose === item} onClick={() => setPurpose(item)} title={item} />)}</div></Step> : null}
            {step === 3 ? <Step title="Cantidad y nivel de personalización" description={product === "Llavero NFC" ? "Los llaveros se producen desde 5 unidades. A partir de 50 obtienes el mejor valor por unidad." : "Las tarjetas se producen desde 1 unidad. A partir de 50 obtienes el mejor valor por unidad."}><div className="grid gap-3 sm:grid-cols-2">{availableQuantities.map((item) => <ChoiceCard key={item} active={quantity === item} onClick={() => setQuantity(item)} title={item} />)}</div><label className="mt-6 grid gap-2 text-sm font-semibold text-[#E4DFF7]">Complemento que necesitas<select value={addOn} onChange={(event) => setAddOn(event.target.value as AddOn)} className="rounded-xl border border-white/10 bg-[#100b25] px-4 py-3 text-base font-normal text-[#E4DFF7] outline-none transition focus:border-[#785FDD] sm:text-sm">{addOns.map((item) => <option key={item}>{item}</option>)}</select></label></Step> : null}
            {step === 4 ? <Step title="¿A nombre de quién enviamos la cotización?" description={selectedProduct ? `Seleccionaste ${selectedProduct.value.toLowerCase()} (${selectedProduct.price}). Enviaremos el contexto completo a WhatsApp.` : "Déjanos tus datos para continuar."}><div className="grid gap-4 sm:grid-cols-2"><Field label="Nombre" value={name} onChange={setName} autoComplete="name" required /><Field label="WhatsApp" value={whatsapp} onChange={setWhatsapp} autoComplete="tel" inputMode="tel" required /></div><div className="mt-4"><Field label="Negocio o marca" value={business} onChange={setBusiness} autoComplete="organization" /></div></Step> : null}

            <div className="mt-8 flex flex-col-reverse gap-3 border-t border-white/8 pt-6 sm:flex-row sm:justify-between">{step > 1 ? <Button className="max-sm:w-full" type="button" variant="secondary" onClick={() => setStep((current) => current - 1)}>Atrás</Button> : <span />}{step < 4 ? <Button className="max-sm:w-full" type="button" disabled={!canContinue} onClick={next}>Continuar</Button> : <Button className="max-sm:w-full" type="button" disabled={!canContinue} onClick={handleSubmit}>Recibir cotización por WhatsApp</Button>}</div>
            <p aria-live="polite" className="mt-4 text-center text-xs leading-relaxed text-[#98A0B3]">{submitted ? "Abrimos WhatsApp con tu solicitud ya segmentada." : "No guardamos tu solicitud en un catálogo: la usamos para orientar la cotización."}</p>
          </Card>
        </Container>
      </section>
    </>
  );
}

function Step({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return <div><h3 className="text-2xl font-semibold tracking-tight text-[#E4DFF7]">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[#98A0B3] sm:text-base">{description}</p><div className="mt-6">{children}</div></div>;
}

function ChoiceCard({ active, onClick, title, meta, description }: { active: boolean; onClick: () => void; title: string; meta?: string; description?: string }) {
  return <button type="button" onClick={onClick} className={cn("rounded-2xl border p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#785FDD]", active ? "border-[#785FDD] bg-[#6939E2]/13 shadow-[0_0_0_1px_rgba(120,95,221,0.2)]" : "border-white/10 bg-white/[0.025] hover:border-[#785FDD]/50 hover:bg-white/[0.05]")}><div className="flex items-start justify-between gap-3"><span className="text-sm font-semibold text-[#E4DFF7]">{title}</span>{meta ? <span className="whitespace-nowrap text-sm font-bold text-[#BBAAFF]">{meta}</span> : null}</div>{description ? <p className="mt-2 text-sm leading-relaxed text-[#98A0B3]">{description}</p> : null}</button>;
}

function Field({ label, value, onChange, autoComplete, inputMode, required }: { label: string; value: string; onChange: (value: string) => void; autoComplete: string; inputMode?: "tel"; required?: boolean }) {
  return <label className="grid gap-2 text-sm font-semibold text-[#E4DFF7]">{label}{required ? <span className="sr-only"> requerido</span> : null}<input value={value} onChange={(event) => onChange(event.target.value)} autoComplete={autoComplete} inputMode={inputMode} className="rounded-xl border border-white/10 bg-[#100b25] px-4 py-3 text-base font-normal text-[#E4DFF7] outline-none transition focus:border-[#785FDD] sm:text-sm" /></label>;
}
