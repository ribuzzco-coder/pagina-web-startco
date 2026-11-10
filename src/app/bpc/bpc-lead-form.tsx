"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function BpcLeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = new FormData(event.currentTarget);
    const payload = {
      ...Object.fromEntries(form.entries()),
      consent: form.get("consent") === "on",
    };

    try {
      const response = await fetch("/api/bpc-lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await response.json().catch(() => null);
      if (!response.ok || !body?.ok) throw new Error(body?.error?.message ?? "No pudimos enviar tus datos.");
      setStatus("success");
      setMessage("Gracias. El equipo BPC recibió tu información y te contactará.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "No pudimos enviar tus datos.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="bpc-form">
      <div className="bpc-form__grid">
        <label>Nombre completo<input name="name" required autoComplete="name" placeholder="Tu nombre" /></label>
        <label>Empresa o marca<input name="company" required placeholder="Nombre de tu empresa" /></label>
        <label>Correo de trabajo<input name="email" type="email" required autoComplete="email" placeholder="nombre@empresa.com" /></label>
        <label>WhatsApp<input name="phone" required type="tel" autoComplete="tel" placeholder="+57 300 000 0000" /></label>
        <label>¿Qué buscas?<select name="interest" required defaultValue=""><option value="" disabled>Selecciona una opción</option><option value="marca">Crear una marca</option><option value="maquila">Maquilar un producto existente</option><option value="formulacion">Desarrollar una formulación</option><option value="invima">Orientación regulatoria / INVIMA</option><option value="distribucion">Distribución o alianza comercial</option><option value="otro">Otro</option></select></label>
        <label>Momento del proyecto<select name="stage" required defaultValue=""><option value="" disabled>Selecciona una etapa</option><option value="idea">Tengo una idea</option><option value="desarrollo">Estoy desarrollando</option><option value="marca-activa">Ya tengo una marca activa</option><option value="escalamiento">Busco escalar</option></select></label>
        <label className="bpc-form__full">Volumen estimado<select name="volume" required defaultValue=""><option value="" disabled>Selecciona un rango</option><option value="piloto">Prueba o piloto</option><option value="pequena">Producción pequeña</option><option value="media">Producción media</option><option value="gran-escala">Gran escala</option><option value="por-definir">Aún por definir</option></select></label>
        <label className="bpc-form__full">Cuéntanos brevemente<textarea name="message" rows={4} placeholder="Producto, categoría o necesidad principal (opcional)" /></label>
      </div>
      <label className="bpc-consent"><input name="consent" type="checkbox" required /> Autorizo el tratamiento de mis datos para que BPC Lab me contacte sobre esta solicitud.</label>
      <button type="submit" disabled={status === "sending"}>{status === "sending" ? "Enviando…" : "Enviar perfil comercial →"}</button>
      {message && <p className={`bpc-form__message bpc-form__message--${status}`} role="status">{message}</p>}
    </form>
  );
}
