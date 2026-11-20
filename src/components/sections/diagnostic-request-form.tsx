"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { publicEnv } from "@/lib/public-env";
import { SITE_CONFIG } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { createBookingConfirmationTracker, trackFunnelEvent } from "@/lib/funnel-analytics";
import { submitDiagnostic } from "@/lib/diagnostic-submit";

type CalApi = {
  (...args: unknown[]): void;
  loaded?: boolean;
  ns: Record<string, CalApi>;
  q: unknown[];
};

declare global {
  interface Window {
    turnstile?: {
      reset: (id: string) => void;
      remove: (id: string) => void;
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
    title: "¿Con quién hablamos?",
    description: "Cuéntanos cómo te llamas, qué marca representas y cómo contactarte.",
  },
  {
    id: "negocio",
    title: "¿Cómo vende tu marca hoy?",
    description: "Piensa en un cliente reciente. ¿Qué buscaba y qué le ayudó o le costó decidir?",
  },
  {
    id: "decision",
    title: "¿Cuándo quieren empezar?",
    description: "Estas respuestas sobre tiempo, inversión y equipo nos ayudan a recomendarte un siguiente paso.",
  },
] as const;

const fieldsByStep = [
  ["nombre", "empresa", "email", "whatsapp", "sector", "tamanoEquipo"],
  ["queVende", "aQuienVende", "procesoActual", "queFrena", "metaConcreta"],
  ["presupuesto", "urgencia", "autoridad", "contexto", "dataConsent"],
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
  error,
  columns = "sm:grid-cols-3",
}: {
  name: string;
  value: T | "";
  options: readonly ChoiceOption<T>[];
  onChange: (value: T) => void;
  error?: string;
  columns?: string;
}) {
  return (
    <div role="radiogroup" aria-invalid={Boolean(error)} aria-labelledby={`${name}-label`} className={cn("grid gap-3", columns)}>
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
              aria-describedby={error ? `${name}-error` : undefined}
              value={option.value}
              checked={selected}
              required
              onChange={() => onChange(option.value)}
              className="peer sr-only"
            />
            <span className="flex items-start gap-3 rounded peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-[#bda6ff]">
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
      {error && <p id={`${name}-error`} className="col-span-full text-xs text-[#ff8fa3]">{error}</p>}
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
  const turnstileWidgetRef = useRef<string | null>(null);
  const bookingContainerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const pendingFocus = useRef<string | null>(null);
  useEffect(() => {
    const target = pendingFocus.current;
    if (!target) return;
    const control = formRef.current?.querySelector<HTMLElement>(`[id="${target}"], [name="${target}"]`);
    (control ?? titleRef.current)?.focus();
    pendingFocus.current = null;
  }, [step, status, fieldErrors]);

  const hasStartedRef = useRef(false);

  const calLink = bookingUrl.replace(/^https?:\/\/(app\.)?cal\.com\//, "");

  const turnstileEnabled = Boolean(publicEnv.NEXT_PUBLIC_TURNSTILE_SITE_KEY);

  useEffect(() => {
    if (!turnstileEnabled || step !== LAST_STEP || !turnstileContainerRef.current) {
      return;
    }

    const scriptId = "cf-turnstile-script";

    function render() {
      if (window.turnstile && turnstileContainerRef.current && turnstileWidgetRef.current === null) {
        turnstileWidgetRef.current = window.turnstile.render(turnstileContainerRef.current, {
          sitekey: publicEnv.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,
          callback: (token: string) => setTurnstileToken(token),
          "expired-callback": () => setTurnstileToken(null),
        });
      }
    }

    let script = document.querySelector<HTMLScriptElement>(`#${scriptId}`);
    if (!script && !window.turnstile) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      document.body.appendChild(script);
    }
    script?.addEventListener("load", render);
    render();
    return () => {
      script?.removeEventListener("load", render);
      if (turnstileWidgetRef.current !== null) {
        window.turnstile?.remove(turnstileWidgetRef.current);
        turnstileWidgetRef.current = null;
      }
    };
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

  useEffect(() => {
    const cal = window.Cal;
    if (!cal || status !== "submitted" || routingTier !== "llamada") return;
    const listener = { action: "bookingSuccessfulV2", callback: createBookingConfirmationTracker() };
    cal("on", listener);
    return () => cal("off", listener);
  }, [status, routingTier]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    if (fieldErrors[key]) {
      setFieldErrors((previous) => {
        const remaining = { ...previous };
        delete remaining[key];
        return remaining;
      });
    }
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleNext() {
    if (!formRef.current?.reportValidity()) {
      trackFunnelEvent("diagnostic_error", "validation");
      return;
    }
    trackFunnelEvent("diagnostic_step", STEPS[step].id);
    pendingFocus.current = "step-title";
    setStep((current) => Math.min(current + 1, LAST_STEP));
  }

  function handleBack() {
    setTurnstileToken(null);
    pendingFocus.current = "step-title";
    setStep((current) => Math.max(current - 1, 0));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (step !== LAST_STEP) {
      handleNext();
      return;
    }

    trackFunnelEvent("diagnostic_submit", "decision");
    setStatus("submitting");
    setErrorMessage(null);
    setFieldErrors({});

    const result = await submitDiagnostic({
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
    });

    if (!result.ok) {
      if (turnstileWidgetRef.current !== null) {
        window.turnstile?.reset(turnstileWidgetRef.current);
        setTurnstileToken(null);
      }
      trackFunnelEvent("diagnostic_error", "request");
      setErrorMessage(result.message);
      for (const [index, fields] of fieldsByStep.entries()) {
        const firstError = fields.find((field) => result.fieldErrors[field]?.length);
        if (firstError) {
          pendingFocus.current = firstError;
          setStep(index);
          break;
        }
      }
      setFieldErrors(result.fieldErrors);
      setStatus("error");
      return;
    }

    trackFunnelEvent("diagnostic_complete", result.tier);
    pendingFocus.current = "confirmation";
    setRoutingTier(result.tier);
    setStatus("submitted");
  }

  if (status === "submitted" && routingTier === "llamada") {
    return (
      <Card className="rounded-[28px] p-6 sm:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8b6ff0]">
          Solicitud recibida
        </p>
        <h3 ref={titleRef} tabIndex={-1} className="scroll-mt-24 mt-3 text-2xl font-semibold tracking-tight text-[#E4DFF7] [text-wrap:balance]">
          Agenda la llamada de introducción
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#98A0B3] [text-wrap:pretty] sm:text-base">
          Ya recibimos tu información. Agenda directamente en el calendario y llegamos con contexto
          para hablar de etapa, bloqueo y alcance.
        </p>
        <a href={bookingUrl} data-funnel-event="booking_click" className="mt-4 inline-block font-semibold text-[#d5baff] underline underline-offset-4">
          Abrir el calendario de RiBuzz
        </a>
        <div
          ref={bookingContainerRef}
          className="mt-6 h-[780px] w-full min-w-0 rounded-[20px] border border-white/8 bg-white transition-[height] duration-200"
        />
      </Card>
    );
  }

  if (status === "submitted" && routingTier === "regalos") {
    const nextDecision = form.presupuesto !== "definido"
      ? "Antes de valorar un proyecto, define con tu equipo qué inversión pueden destinar."
      : form.autoridad === "no_decido"
        ? "Comparte el reto con quien participa en la decisión de contratar."
        : "Cuando tengas una fecha de inicio más cercana, podremos revisar el alcance contigo.";
    return (
      <Card className="rounded-[28px] p-6 sm:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8b6ff0]">
          Gracias por contarnos tu momento
        </p>
        <h3 ref={titleRef} tabIndex={-1} className="scroll-mt-24 mt-3 text-2xl font-semibold tracking-tight text-[#E4DFF7] [text-wrap:balance]">
          Elige un recurso para tu reto
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#98A0B3] [text-wrap:pretty] sm:text-base">
          {nextDecision} Mientras tanto, elige un recurso para el reto que quieres trabajar.
        </p>
        <Button href={`${SITE_CONFIG.giftsPath}?desde=diagnostico`} data-funnel-event="resource_open" size="lg" className="mt-6 w-full sm:w-auto">
          Ver recursos gratuitos
        </Button>
      </Card>
    );
  }

  if (status === "submitted") {
    const pendingDecisions = [
      form.presupuesto !== "definido" && "definir una inversión",
      (form.urgencia === "tres_meses" || form.urgencia === "explorando") && "concretar cuándo empezar",
      form.autoridad === "no_decido" && "involucrar a quien aprueba el proyecto",
    ].filter((decision): decision is string => Boolean(decision));
    return (
      <Card className="rounded-[28px] p-6 sm:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8b6ff0]">
          Gracias por contarnos tu momento
        </p>
        <h3 ref={titleRef} tabIndex={-1} className="scroll-mt-24 mt-3 text-2xl font-semibold tracking-tight text-[#E4DFF7] [text-wrap:balance]">
          Sigue en contacto con RiBuzz
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#98A0B3] [text-wrap:pretty] sm:text-base">
          Recibimos tu solicitud. {pendingDecisions.length > 0 && `Para preparar una conversación comercial, el próximo paso es ${new Intl.ListFormat("es-CO").format(pendingDecisions)}. `}
          Si quieres recibir contenido de RiBuzz, puedes suscribirte ahora.
        </p>
        <Button href={NEWSLETTER_URL} data-funnel-event="newsletter_click" size="lg" className="mt-6 w-full sm:w-auto">
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
      <h3 ref={titleRef} tabIndex={-1} className="scroll-mt-24 text-2xl font-semibold tracking-tight text-[#E4DFF7] [text-wrap:balance]">
        <span className="sr-only">Paso {step + 1} de {STEPS.length}. </span>{currentStep.title}
      </h3>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#98A0B3] [text-wrap:pretty] sm:text-base">
        {currentStep.description}
      </p>

      <form ref={formRef} onSubmit={handleSubmit} onChange={() => {
        if (!hasStartedRef.current) {
          hasStartedRef.current = true;
          trackFunnelEvent("diagnostic_start", "contacto");
        }
      }} className="mt-7 grid gap-5">
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
                aria-invalid={Boolean(fieldErrors.nombre)}
                aria-describedby={fieldErrors.nombre ? "nombre-error" : undefined}
                required
                minLength={2}
                maxLength={120}
                placeholder="Tu nombre y apellido"
                className={inputClassName}
                value={form.nombre}
                onChange={(event) => updateField("nombre", event.target.value)}
              />
              {fieldErrors.nombre ? <p id="nombre-error" className="text-xs text-[#ff8fa3]">{fieldErrors.nombre[0]}</p> : null}
            </div>

            <div className="grid gap-2">
              <label className={labelClassName} htmlFor="empresa">Empresa *</label>
              <input
                id="empresa"
                aria-invalid={Boolean(fieldErrors.empresa)}
                aria-describedby={fieldErrors.empresa ? "empresa-error" : undefined}
                required
                minLength={2}
                maxLength={160}
                placeholder="Nombre de la marca o empresa"
                className={inputClassName}
                value={form.empresa}
                onChange={(event) => updateField("empresa", event.target.value)}
              />
              {fieldErrors.empresa ? <p id="empresa-error" className="text-xs text-[#ff8fa3]">{fieldErrors.empresa[0]}</p> : null}
            </div>

            <div className="grid gap-2">
              <label className={labelClassName} htmlFor="email">Correo *</label>
              <input
                id="email"
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? "email-error" : undefined}
                type="email"
                required
                maxLength={160}
                placeholder="correo@empresa.com"
                className={inputClassName}
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
              />
              {fieldErrors.email ? <p id="email-error" className="text-xs text-[#ff8fa3]">{fieldErrors.email[0]}</p> : null}
            </div>

            <div className="grid gap-2">
              <label className={labelClassName} htmlFor="whatsapp">WhatsApp (opcional)</label>
              <input
                id="whatsapp"
                aria-invalid={Boolean(fieldErrors.whatsapp)}
                aria-describedby={fieldErrors.whatsapp ? "whatsapp-error" : undefined}
                minLength={7}
                maxLength={40}
                placeholder="+57 300 000 0000"
                className={inputClassName}
                value={form.whatsapp}
                onChange={(event) => updateField("whatsapp", event.target.value)}
              />
              {fieldErrors.whatsapp && <p id="whatsapp-error" className="text-xs text-[#ff8fa3]">{fieldErrors.whatsapp[0]}</p>}
            </div>

            <div className="grid gap-2">
              <label className={labelClassName} htmlFor="sector">Sector / industria *</label>
              <input
                id="sector"
                aria-invalid={Boolean(fieldErrors.sector)}
                aria-describedby={fieldErrors.sector ? "sector-error" : undefined}
                required
                minLength={2}
                maxLength={120}
                placeholder="Ej: salud, moda, B2B, educación..."
                className={inputClassName}
                value={form.sector}
                onChange={(event) => updateField("sector", event.target.value)}
              />
              {fieldErrors.sector ? <p id="sector-error" className="text-xs text-[#ff8fa3]">{fieldErrors.sector[0]}</p> : null}
            </div>

            <div className="grid gap-2">
              <label className={labelClassName} htmlFor="tamanoEquipo">Tamaño de equipo (opcional)</label>
              <input
                id="tamanoEquipo"
                aria-invalid={Boolean(fieldErrors.tamanoEquipo)}
                aria-describedby={fieldErrors.tamanoEquipo ? "tamanoEquipo-error" : undefined}
                maxLength={80}
                placeholder="Ej: 3 personas, 10 personas..."
                className={inputClassName}
                value={form.tamanoEquipo}
                onChange={(event) => updateField("tamanoEquipo", event.target.value)}
              />
              {fieldErrors.tamanoEquipo && <p id="tamanoEquipo-error" className="text-xs text-[#ff8fa3]">{fieldErrors.tamanoEquipo[0]}</p>}
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
                aria-invalid={Boolean(fieldErrors.queVende)}
                aria-describedby={fieldErrors.queVende ? "queVende-error" : undefined}
                  required
                  minLength={2}
                  maxLength={200}
                  placeholder="Ej: servicios, cursos, producto físico, software..."
                  className={inputClassName}
                  value={form.queVende}
                  onChange={(event) => updateField("queVende", event.target.value)}
                />
                {fieldErrors.queVende ? <p id="queVende-error" className="text-xs text-[#ff8fa3]">{fieldErrors.queVende[0]}</p> : null}
              </div>

              <div className="grid gap-2">
                <label className={labelClassName} htmlFor="aQuienVende">¿A quién se lo vendes? *</label>
                <input
                  id="aQuienVende"
                aria-invalid={Boolean(fieldErrors.aQuienVende)}
                aria-describedby={fieldErrors.aQuienVende ? "aQuienVende-error" : undefined}
                  required
                  minLength={2}
                  maxLength={200}
                  placeholder="Ej: empresas, emprendedores, pacientes, consumidores finales..."
                  className={inputClassName}
                  value={form.aQuienVende}
                  onChange={(event) => updateField("aQuienVende", event.target.value)}
                />
                {fieldErrors.aQuienVende ? <p id="aQuienVende-error" className="text-xs text-[#ff8fa3]">{fieldErrors.aQuienVende[0]}</p> : null}
              </div>
            </div>

            <div className="grid gap-2">
              <p id="procesoActual-label" className={labelClassName}>¿Cuál frase describe mejor tu proceso comercial hoy? *</p>
              <ChoiceCards
                name="procesoActual"
                  error={fieldErrors.procesoActual?.[0]}
                value={form.procesoActual}
                options={processOptions}
                onChange={(selected) => updateField("procesoActual", selected)}
              />
            </div>

            <div className="grid gap-2">
              <label className={labelClassName} htmlFor="queFrena">¿Qué está frenando más el avance ahora? *</label>
              <textarea
                id="queFrena"
                aria-invalid={Boolean(fieldErrors.queFrena)}
                aria-describedby={fieldErrors.queFrena ? "queFrena-error" : undefined}
                required
                minLength={2}
                maxLength={600}
                rows={3}
                placeholder="Ej: invertimos en pauta y no responde, dependemos del fundador, no sabemos qué automatizar..."
                className={inputClassName}
                value={form.queFrena}
                onChange={(event) => updateField("queFrena", event.target.value)}
              />
              {fieldErrors.queFrena ? <p id="queFrena-error" className="text-xs text-[#ff8fa3]">{fieldErrors.queFrena[0]}</p> : null}
            </div>

            <div className="grid gap-2">
              <label className={labelClassName} htmlFor="metaConcreta">¿Qué meta quieren mover en los próximos 3 meses? (opcional)</label>
              <input
                id="metaConcreta"
                aria-invalid={Boolean(fieldErrors.metaConcreta)}
                aria-describedby={fieldErrors.metaConcreta ? "metaConcreta-error" : undefined}
                maxLength={600}
                placeholder="Ej: vender más sin depender de referidos, aumentar conversión, ordenar seguimiento..."
                className={inputClassName}
                value={form.metaConcreta}
                onChange={(event) => updateField("metaConcreta", event.target.value)}
              />
              {fieldErrors.metaConcreta && <p id="metaConcreta-error" className="text-xs text-[#ff8fa3]">{fieldErrors.metaConcreta[0]}</p>}
            </div>
          </>
        ) : null}

        {step === 2 ? (
          <>
            <div className="grid gap-5">
              <div className="grid gap-2">
                <p id="presupuesto-label" className={labelClassName}>¿Tienen una inversión definida para trabajar esto? *</p>
                <ChoiceCards
                  name="presupuesto"
                  error={fieldErrors.presupuesto?.[0]}
                  value={form.presupuesto}
                  options={investmentOptions}
                  onChange={(selected) => updateField("presupuesto", selected)}
                />
              </div>

              <div className="grid gap-2">
                <p id="urgencia-label" className={labelClassName}>¿Cuándo les gustaría empezar? *</p>
                <ChoiceCards
                  name="urgencia"
                  error={fieldErrors.urgencia?.[0]}
                  value={form.urgencia}
                  options={urgencyOptions}
                  onChange={(selected) => updateField("urgencia", selected)}
                  columns="sm:grid-cols-2 lg:grid-cols-4"
                />
              </div>

              <div className="grid gap-2">
                <p id="autoridad-label" className={labelClassName}>¿Participas en la decisión de contratar? *</p>
                <ChoiceCards
                  name="autoridad"
                  error={fieldErrors.autoridad?.[0]}
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
                aria-invalid={Boolean(fieldErrors.contexto)}
                aria-describedby={fieldErrors.contexto ? "contexto-error" : undefined}
                maxLength={3000}
                placeholder="Por ejemplo, algo que ya probaron o una duda que quieras conversar."
                className={inputClassName}
                value={form.contexto}
                onChange={(event) => updateField("contexto", event.target.value)}
              />
              {fieldErrors.contexto && <p id="contexto-error" className="text-xs text-[#ff8fa3]">{fieldErrors.contexto[0]}</p>}
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5">
              <input
                id="dataConsent"
                aria-invalid={Boolean(fieldErrors.dataConsent)}
                aria-describedby={fieldErrors.dataConsent ? "dataConsent-error" : undefined}
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
              <p id="dataConsent-error" className="text-xs text-[#ff8fa3]">{fieldErrors.dataConsent[0]}</p>
            ) : null}

            {turnstileEnabled ? <div ref={turnstileContainerRef} className="mt-1" /> : null}
          </>
        ) : null}

        {errorMessage ? (
          <p role="alert" className="rounded-2xl border border-[#ff4d6d]/24 bg-[#ff4d6d]/8 px-4 py-3 text-sm text-[#FF9EB0]">
            {errorMessage}
          </p>
        ) : null}

        <div className={cn("flex items-center gap-3", step === 0 ? "justify-end" : "justify-between")}>
          {step > 0 ? (
            <Button type="button" variant="secondary" size="lg" onClick={handleBack} disabled={status === "submitting"}>
              Anterior
            </Button>
          ) : null}

          {isLastStep ? (
            <Button key="submit" type="submit" size="lg" disabled={status === "submitting"} className="sm:w-auto">
              {status === "submitting" ? "Enviando..." : "Enviar y ver siguiente paso"}
            </Button>
          ) : (
            <Button key="next" type="button" size="lg" onClick={(event) => { event.preventDefault(); handleNext(); }} className="sm:w-auto">
              Siguiente
            </Button>
          )}
        </div>
      </form>
    </Card>
  );
}
