"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { publicEnv } from "@/lib/public-env";
import { SITE_CONFIG } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import type { ApiErrorPayload, ApiSuccess } from "@/types/api";

type CalApi = {
  (...args: unknown[]): void;
  loaded?: boolean;
  ns: Record<string, CalApi>;
  q: unknown[];
};

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: { sitekey: string; callback: (token: string) => void; "expired-callback"?: () => void },
      ) => string;
    };
    Cal?: CalApi;
  }
}

const NEWSLETTER_URL = "https://forms.monday.com/forms/3cbb05c0c156282155e6fa80b5922cb1?r=use1";

const inputClassName =
  "w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[#E4DFF7] placeholder:text-[#5A6072] outline-none transition-colors focus:border-[#6939E2]/60 focus:bg-white/[0.05]";

const labelClassName = "text-[13px] font-medium text-[#CEC6E0]";

type RoutingTier = "llamada" | "regalos" | "newsletter";

type NonEmpty<T> = Exclude<T, "">;
type ChoiceOption<T extends string> = {
  value: T;
  title: string;
  description: string;
};

type FormState = {
  nombre: string;
  empresa: string;
  cargo: string;
  email: string;
  whatsapp: string;
  sector: string;
  queVende: string;
  aQuienVende: string;
  procesoActual: "" | "aun_validando" | "funciona_informal" | "consistente";
  queFrena: string;
  metaConcreta: string;
  presupuesto: "" | "definido" | "aproximado" | "explorando";
  urgencia: "" | "ya" | "proximo_mes" | "tres_meses" | "explorando";
  autoridad: "" | "yo_decido" | "en_conjunto" | "no_decido";
  tamanoEquipo: string;
  contexto: string;
  dataConsent: boolean;
  website: string; // honeypot
};

const processOptions: readonly ChoiceOption<NonEmpty<FormState["procesoActual"]>>[] = [
  {
    value: "aun_validando",
    title: "Estoy validando",
    description: "Hay oferta o idea, pero todavía falta confirmar respuesta del mercado.",
  },
  {
    value: "funciona_informal",
    title: "Vende, pero no con sistema",
    description: "Hay clientes, pero la venta depende de impulso, memoria o urgencia.",
  },
  {
    value: "consistente",
    title: "Ya hay proceso",
    description: "Existe venta repetible y ahora hace falta escalar con más estructura.",
  },
] as const;

const investmentOptions: readonly ChoiceOption<NonEmpty<FormState["presupuesto"]>>[] = [
  {
    value: "definido",
    title: "Sí, definida",
    description: "Ya hay capacidad para iniciar si el alcance tiene sentido.",
  },
  {
    value: "aproximado",
    title: "Hay un rango",
    description: "Existe una idea de inversión, pero falta aterrizarla al alcance.",
  },
  {
    value: "explorando",
    title: "Estamos explorando",
    description: "Primero necesitan claridad antes de definir inversión.",
  },
] as const;

const urgencyOptions: readonly ChoiceOption<NonEmpty<FormState["urgencia"]>>[] = [
  {
    value: "ya",
    title: "Ahora",
    description: "Hay urgencia y disposición para mover esto pronto.",
  },
  {
    value: "proximo_mes",
    title: "Próximo mes",
    description: "Quieren preparar el terreno y empezar con orden.",
  },
  {
    value: "tres_meses",
    title: "Próximos 3 meses",
    description: "Hay intención, pero todavía se está organizando la prioridad.",
  },
  {
    value: "explorando",
    title: "Solo explorando",
    description: "Buscan entender si esta ruta tiene sentido para más adelante.",
  },
] as const;

const authorityOptions: readonly ChoiceOption<NonEmpty<FormState["autoridad"]>>[] = [
  {
    value: "yo_decido",
    title: "Sí, decido",
    description: "Puedes aprobar el avance si la propuesta responde al objetivo.",
  },
  {
    value: "en_conjunto",
    title: "Decidimos en equipo",
    description: "Participas y necesitas validar con socio, dirección o equipo.",
  },
  {
    value: "no_decido",
    title: "No decido",
    description: "Estás explorando para llevar contexto a quien toma la decisión.",
  },
] as const;

const initialState: FormState = {
  nombre: "",
  empresa: "",
  cargo: "",
  email: "",
  whatsapp: "",
  sector: "",
  queVende: "",
  aQuienVende: "",
  procesoActual: "",
  queFrena: "",
  metaConcreta: "",
  presupuesto: "",
  urgencia: "",
  autoridad: "",
  tamanoEquipo: "",
  contexto: "",
  dataConsent: false,
  website: "",
};

const STEPS = [
  {
    id: "contacto",
    title: "Primero ubicamos el negocio",
    description: "Datos mínimos para entender quién consulta y desde qué contexto llega.",
  },
  {
    id: "negocio",
    title: "Luego entendemos el sistema actual",
    description: "Qué vendes, a quién, cómo está funcionando y dónde se está frenando el avance.",
  },
  {
    id: "decision",
    title: "Finalmente definimos la ruta",
    description: "Confirmamos urgencia, capacidad de decisión y siguiente paso correcto.",
  },
] as const;

const LAST_STEP = STEPS.length - 1;

function StepProgress({ step }: { step: number }) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-2">
        {STEPS.map((s, index) => (
          <div
            key={s.id}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-colors duration-300",
              index <= step ? "bg-[#6939E2]" : "bg-white/10",
            )}
          />
        ))}
      </div>
      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8b6ff0]">
        Paso {step + 1} de {STEPS.length}
      </p>
    </div>
  );
}

function ChoiceCards<T extends string>({
  name,
  value,
  options,
  onChange,
  columns = "sm:grid-cols-3",
}: {
  name: string;
  value: T | "";
  options: readonly ChoiceOption<T>[];
  onChange: (value: T) => void;
  columns?: string;
}) {
  return (
    <div className={cn("grid gap-3", columns)}>
      {options.map((option) => {
        const selected = value === option.value;

        return (
          <label
            key={option.value}
            className={cn(
              "group cursor-pointer rounded-2xl border p-4 transition duration-200",
              "bg-white/[0.025] hover:-translate-y-0.5 hover:border-[#8b6ff0]/40 hover:bg-[#6939E2]/8",
              selected
                ? "border-[#8b6ff0]/70 bg-[#6939E2]/14 shadow-[0_0_26px_rgba(105,57,226,0.18)]"
                : "border-white/10",
            )}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selected}
              required
              onChange={() => onChange(option.value)}
              className="sr-only"
            />
            <span className="flex items-start gap-3">
              <span
                className={cn(
                  "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold transition",
                  selected
                    ? "border-[#8b6ff0] bg-[#6939E2] text-white"
                    : "border-white/18 text-transparent group-hover:border-[#8b6ff0]/60",
                )}
                aria-hidden="true"
              >
                ✓
              </span>
              <span>
                <span className="block text-sm font-semibold text-[#E4DFF7]">{option.title}</span>
                <span className="mt-1 block text-xs leading-relaxed text-[#98A0B3]">
                  {option.description}
                </span>
              </span>
            </span>
          </label>
        );
      })}
    </div>
  );
}

export function DiagnosticRequestForm({ bookingUrl }: { bookingUrl: string }) {
  const [form, setForm] = useState<FormState>(initialState);
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted" | "error">("idle");
  const [routingTier, setRoutingTier] = useState<RoutingTier | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const bookingContainerRef = useRef<HTMLDivElement | null>(null);

  const calLink = bookingUrl.replace(/^https?:\/\/(app\.)?cal\.com\//, "");

  const turnstileEnabled = Boolean(publicEnv.NEXT_PUBLIC_TURNSTILE_SITE_KEY);

  useEffect(() => {
    if (!turnstileEnabled || step !== LAST_STEP || !turnstileContainerRef.current) {
      return;
    }

    const scriptId = "cf-turnstile-script";

    function render() {
      if (window.turnstile && turnstileContainerRef.current) {
        window.turnstile.render(turnstileContainerRef.current, {
          sitekey: publicEnv.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,
          callback: (token: string) => setTurnstileToken(token),
          "expired-callback": () => setTurnstileToken(null),
        });
      }
    }

    if (window.turnstile) {
      render();
      return;
    }

    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    script.onload = render;
    document.body.appendChild(script);
  }, [turnstileEnabled, step]);

  useEffect(() => {
    const container = bookingContainerRef.current;

    if (status !== "submitted" || routingTier !== "llamada" || !container) {
      return;
    }

    if (container.dataset.calInitialized === "true") {
      return;
    }
    container.dataset.calInitialized = "true";

    // Bootstrap oficial de cal.com: define window.Cal de forma sincrona (encolando
    // comandos) mientras el script real (app.cal.com/embed/embed.js) carga en segundo plano.
    if (!window.Cal) {
      (function (C: Window, embedUrl: string, initCommand: string) {
        const push = (target: CalApi, args: unknown) => {
          target.q.push(args);
        };
        const bootstrap = ((...args: unknown[]) => {
          const cal = C.Cal!;

          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            const script = C.document.createElement("script");
            script.src = embedUrl;
            C.document.head.appendChild(script);
            cal.loaded = true;
          }

          if (args[0] === initCommand) {
            const namespace = args[1] as string | undefined;
            const namespacedApi = ((...nsArgs: unknown[]) => {
              push(namespacedApi, nsArgs);
            }) as CalApi;
            namespacedApi.q = [];

            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || namespacedApi;
              push(cal.ns[namespace], args);
              push(cal, ["initNamespace", namespace]);
            } else {
              push(cal, args);
            }
            return;
          }

          push(cal, args);
        }) as CalApi;
        bootstrap.q = [];
        bootstrap.ns = {};
        C.Cal = bootstrap;
      })(window, "https://app.cal.com/embed/embed.js", "init");
    }

    window.Cal!("init", { origin: "https://cal.com" });
    window.Cal!("inline", {
      elementOrSelector: container,
      calLink,
      config: {
        layout: "month_view",
        ...(form.nombre ? { name: form.nombre } : {}),
        ...(form.email ? { email: form.email } : {}),
      },
    });

    // El iframe de cal.com toma el 100% del alto de este contenedor. Si le damos
    // un alto fijo mayor al que el contenido realmente necesita, cal.com centra
    // el contenido dejando un hueco arriba y abajo. __dimensionChanged reporta el
    // alto real del contenido para que ajustemos el contenedor y no quede espacio
    // sobrante ni el calendario se corte.
    window.Cal!("on", {
      action: "__dimensionChanged",
      callback: (event: CustomEvent<{ data: { iframeHeight?: number } }>) => {
        const iframeHeight = event.detail?.data?.iframeHeight;

        if (iframeHeight && bookingContainerRef.current) {
          bookingContainerRef.current.style.height = `${Math.max(iframeHeight, 480)}px`;
        }
      },
    });
  }, [status, routingTier, calLink, form.nombre, form.email]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleNext() {
    if (!formRef.current?.reportValidity()) {
      return;
    }
    setStep((current) => Math.min(current + 1, LAST_STEP));
  }

  function handleBack() {
    setStep((current) => Math.max(current - 1, 0));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (step !== LAST_STEP) {
      handleNext();
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);
    setFieldErrors({});

    try {
      const response = await fetch("/api/diagnostic-request", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          nombre: form.nombre,
          empresa: form.empresa,
          cargo: form.cargo || undefined,
          email: form.email,
          whatsapp: form.whatsapp || undefined,
          sector: form.sector,
          queVende: form.queVende,
          aQuienVende: form.aQuienVende,
          procesoActual: form.procesoActual,
          queFrena: form.queFrena,
          metaConcreta: form.metaConcreta || undefined,
          presupuesto: form.presupuesto,
          urgencia: form.urgencia,
          autoridad: form.autoridad,
          tamanoEquipo: form.tamanoEquipo || undefined,
          contexto: form.contexto || undefined,
          source: "website:diagnostico",
          dataConsent: form.dataConsent,
          turnstileToken: turnstileToken ?? undefined,
          website: form.website,
        }),
      });

      const payload = (await response.json()) as
        | ApiSuccess<{ received: boolean; duplicate: boolean; fitScore: number; routingTier: RoutingTier }>
        | ApiErrorPayload;

      if (!response.ok || !payload.ok) {
        const errorPayload = payload as ApiErrorPayload;
        setErrorMessage(errorPayload.error?.message ?? "No pudimos enviar el formulario. Intenta de nuevo.");
        setFieldErrors(errorPayload.error?.fieldErrors ?? {});
        setStatus("error");
        return;
      }

      setRoutingTier(payload.data.routingTier);
      setStatus("submitted");
    } catch {
      setErrorMessage("No pudimos conectar con el servidor. Revisa tu conexión e intenta de nuevo.");
      setStatus("error");
    }
  }

  if (status === "submitted" && routingTier === "llamada") {
    return (
      <Card className="rounded-[28px] p-6 sm:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8b6ff0]">
          Paso 2 de 2
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#E4DFF7] [text-wrap:balance]">
          Agenda la llamada de introducción
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#98A0B3] [text-wrap:pretty] sm:text-base">
          Ya recibimos tu información. Agenda directamente en el calendario y llegamos con contexto
          para hablar de etapa, bloqueo y alcance.
        </p>
        <div
          ref={bookingContainerRef}
          className="mt-6 h-[780px] w-full min-w-[320px] rounded-[20px] border border-white/8 bg-white transition-[height] duration-200"
        />
      </Card>
    );
  }

  if (status === "submitted" && routingTier === "regalos") {
    return (
      <Card className="rounded-[28px] p-6 sm:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8b6ff0]">
          Gracias por contarnos tu momento
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#E4DFF7] [text-wrap:balance]">
          Tu siguiente paso es ordenar la base
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#98A0B3] [text-wrap:pretty] sm:text-base">
          Con lo que nos compartiste, primero conviene aclarar oferta, cliente y siguiente decisión.
          Te dejamos recursos para avanzar antes de invertir en un proceso más amplio.
        </p>
        <Button href={SITE_CONFIG.giftsPath} size="lg" className="mt-6 w-full sm:w-auto">
          Ver recursos gratuitos
        </Button>
      </Card>
    );
  }

  if (status === "submitted") {
    return (
      <Card className="rounded-[28px] p-6 sm:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8b6ff0]">
          Gracias por contarnos tu momento
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#E4DFF7] [text-wrap:balance]">
          Tu ruta actual es madurar la decisión
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#98A0B3] [text-wrap:pretty] sm:text-base">
          En este momento conviene seguir recibiendo criterio, ejemplos y recursos. Retoma la
          conversación cuando la prioridad, la urgencia o la capacidad de ejecución estén más claras.
        </p>
        <Button href={NEWSLETTER_URL} size="lg" className="mt-6 w-full sm:w-auto">
          Sumarme a la lista
        </Button>
      </Card>
    );
  }

  const currentStep = STEPS[step];
  const isLastStep = step === LAST_STEP;

  return (
    <Card className="rounded-[28px] p-6 sm:p-8">
      <StepProgress step={step} />
      <h3 className="text-2xl font-semibold tracking-tight text-[#E4DFF7] [text-wrap:balance]">
        {currentStep.title}
      </h3>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#98A0B3] [text-wrap:pretty] sm:text-base">
        {currentStep.description}
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-7 grid gap-5">
        <input
          type="text"
          name="website"
          value={form.website}
          onChange={(event) => updateField("website", event.target.value)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {step === 0 ? (
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="grid gap-2">
              <label className={labelClassName} htmlFor="nombre">Nombre completo *</label>
              <input
                id="nombre"
                required
                minLength={2}
                maxLength={120}
                placeholder="Tu nombre y apellido"
                className={inputClassName}
                value={form.nombre}
                onChange={(event) => updateField("nombre", event.target.value)}
              />
              {fieldErrors.nombre ? <p className="text-xs text-[#ff8fa3]">{fieldErrors.nombre[0]}</p> : null}
            </div>

            <div className="grid gap-2">
              <label className={labelClassName} htmlFor="empresa">Empresa *</label>
              <input
                id="empresa"
                required
                minLength={2}
                maxLength={160}
                placeholder="Nombre de la marca o empresa"
                className={inputClassName}
                value={form.empresa}
                onChange={(event) => updateField("empresa", event.target.value)}
              />
              {fieldErrors.empresa ? <p className="text-xs text-[#ff8fa3]">{fieldErrors.empresa[0]}</p> : null}
            </div>

            <div className="grid gap-2">
              <label className={labelClassName} htmlFor="email">Correo *</label>
              <input
                id="email"
                type="email"
                required
                maxLength={160}
                placeholder="correo@empresa.com"
                className={inputClassName}
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
              />
              {fieldErrors.email ? <p className="text-xs text-[#ff8fa3]">{fieldErrors.email[0]}</p> : null}
            </div>

            <div className="grid gap-2">
              <label className={labelClassName} htmlFor="whatsapp">WhatsApp (opcional)</label>
              <input
                id="whatsapp"
                placeholder="+57 300 000 0000"
                className={inputClassName}
                value={form.whatsapp}
                onChange={(event) => updateField("whatsapp", event.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <label className={labelClassName} htmlFor="sector">Sector / industria *</label>
              <input
                id="sector"
                required
                minLength={2}
                maxLength={120}
                placeholder="Ej: salud, moda, B2B, educación..."
                className={inputClassName}
                value={form.sector}
                onChange={(event) => updateField("sector", event.target.value)}
              />
              {fieldErrors.sector ? <p className="text-xs text-[#ff8fa3]">{fieldErrors.sector[0]}</p> : null}
            </div>

            <div className="grid gap-2">
              <label className={labelClassName} htmlFor="tamanoEquipo">Tamaño de equipo (opcional)</label>
              <input
                id="tamanoEquipo"
                placeholder="Ej: 3 personas, 10 personas..."
                className={inputClassName}
                value={form.tamanoEquipo}
                onChange={(event) => updateField("tamanoEquipo", event.target.value)}
              />
            </div>
          </div>
        ) : null}

        {step === 1 ? (
          <>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <label className={labelClassName} htmlFor="queVende">¿Qué vendes principalmente? *</label>
                <input
                  id="queVende"
                  required
                  minLength={2}
                  maxLength={200}
                  placeholder="Ej: servicios, cursos, producto físico, software..."
                  className={inputClassName}
                  value={form.queVende}
                  onChange={(event) => updateField("queVende", event.target.value)}
                />
                {fieldErrors.queVende ? <p className="text-xs text-[#ff8fa3]">{fieldErrors.queVende[0]}</p> : null}
              </div>

              <div className="grid gap-2">
                <label className={labelClassName} htmlFor="aQuienVende">¿A quién se lo vendes? *</label>
                <input
                  id="aQuienVende"
                  required
                  minLength={2}
                  maxLength={200}
                  placeholder="Ej: empresas, emprendedores, pacientes, consumidores finales..."
                  className={inputClassName}
                  value={form.aQuienVende}
                  onChange={(event) => updateField("aQuienVende", event.target.value)}
                />
                {fieldErrors.aQuienVende ? <p className="text-xs text-[#ff8fa3]">{fieldErrors.aQuienVende[0]}</p> : null}
              </div>
            </div>

            <div className="grid gap-2">
              <p className={labelClassName}>¿Cuál frase describe mejor tu proceso comercial hoy? *</p>
              <ChoiceCards
                name="procesoActual"
                value={form.procesoActual}
                options={processOptions}
                onChange={(selected) => updateField("procesoActual", selected)}
              />
            </div>

            <div className="grid gap-2">
              <label className={labelClassName} htmlFor="queFrena">¿Qué está frenando más el avance ahora? *</label>
              <textarea
                id="queFrena"
                required
                minLength={2}
                maxLength={600}
                rows={3}
                placeholder="Ej: invertimos en pauta y no responde, dependemos del fundador, no sabemos qué automatizar..."
                className={inputClassName}
                value={form.queFrena}
                onChange={(event) => updateField("queFrena", event.target.value)}
              />
              {fieldErrors.queFrena ? <p className="text-xs text-[#ff8fa3]">{fieldErrors.queFrena[0]}</p> : null}
            </div>

            <div className="grid gap-2">
              <label className={labelClassName} htmlFor="metaConcreta">¿Qué meta quieren mover en los próximos 3 meses? (opcional)</label>
              <input
                id="metaConcreta"
                maxLength={600}
                placeholder="Ej: vender más sin depender de referidos, aumentar conversión, ordenar seguimiento..."
                className={inputClassName}
                value={form.metaConcreta}
                onChange={(event) => updateField("metaConcreta", event.target.value)}
              />
            </div>
          </>
        ) : null}

        {step === 2 ? (
          <>
            <div className="grid gap-5">
              <div className="grid gap-2">
                <p className={labelClassName}>¿Tienen una inversión definida para trabajar esto? *</p>
                <ChoiceCards
                  name="presupuesto"
                  value={form.presupuesto}
                  options={investmentOptions}
                  onChange={(selected) => updateField("presupuesto", selected)}
                />
              </div>

              <div className="grid gap-2">
                <p className={labelClassName}>¿Cuándo les gustaría empezar? *</p>
                <ChoiceCards
                  name="urgencia"
                  value={form.urgencia}
                  options={urgencyOptions}
                  onChange={(selected) => updateField("urgencia", selected)}
                  columns="sm:grid-cols-2 lg:grid-cols-4"
                />
              </div>

              <div className="grid gap-2">
                <p className={labelClassName}>¿Participas en la decisión de contratar? *</p>
                <ChoiceCards
                  name="autoridad"
                  value={form.autoridad}
                  options={authorityOptions}
                  onChange={(selected) => updateField("autoridad", selected)}
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label className={labelClassName} htmlFor="contexto">Contexto adicional (opcional)</label>
              <input
                id="contexto"
                placeholder="Algo importante que debamos saber antes de clasificar tu ruta"
                className={inputClassName}
                value={form.contexto}
                onChange={(event) => updateField("contexto", event.target.value)}
              />
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5">
              <input
                id="dataConsent"
                type="checkbox"
                required
                checked={form.dataConsent}
                onChange={(event) => updateField("dataConsent", event.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-white/[0.03] accent-[#6939E2]"
              />
              <label htmlFor="dataConsent" className="text-xs leading-relaxed text-[#98A0B3] [text-wrap:pretty] sm:text-sm">
                Acepto que RiBuzz trate mis datos personales para contactarme y evaluar esta
                solicitud, según la{" "}
                <Link
                  href="/politica-de-privacidad"
                  target="_blank"
                  className="underline decoration-white/30 underline-offset-2 hover:text-[#CEC6E0]"
                >
                  Política de tratamiento de datos personales
                </Link>
                . *
              </label>
            </div>
            {fieldErrors.dataConsent ? (
              <p className="text-xs text-[#ff8fa3]">{fieldErrors.dataConsent[0]}</p>
            ) : null}

            {turnstileEnabled ? <div ref={turnstileContainerRef} className="mt-1" /> : null}
          </>
        ) : null}

        {errorMessage ? (
          <p className="rounded-2xl border border-[#ff4d6d]/24 bg-[#ff4d6d]/8 px-4 py-3 text-sm text-[#FF9EB0]">
            {errorMessage}
          </p>
        ) : null}

        <div className={cn("flex items-center gap-3", step === 0 ? "justify-end" : "justify-between")}>
          {step > 0 ? (
            <Button type="button" variant="secondary" size="lg" onClick={handleBack}>
              Anterior
            </Button>
          ) : null}

          {isLastStep ? (
            <Button type="submit" size="lg" disabled={status === "submitting"} className="sm:w-auto">
              {status === "submitting" ? "Enviando..." : "Enviar y ver siguiente paso"}
            </Button>
          ) : (
            <Button type="button" size="lg" onClick={handleNext} className="sm:w-auto">
              Siguiente
            </Button>
          )}
        </div>
      </form>
    </Card>
  );
}
