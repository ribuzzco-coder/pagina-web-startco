"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, FormEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { NUNA_DISCOUNT_CODES, nunaDiscountUrl } from "@/lib/nuna-discounts";

import styles from "./nuna-gift.module.css";
import { NunaClickTracking } from "./nuna-click-tracking";

type FormData = {
  name: string;
  email: string;
  phone: string;
  birthday: string;
  productInterest: string;
  purchaseStatus: "" | "purchased" | "interested";
};

type FormErrors = Partial<Record<keyof FormData, string>>;

type Prize = {
  id: string;
  label: string;
  wheelLabel: string;
  codePrefix: string;
  color: string;
  textColor: string;
};

type PrizeResult = Prize & {
  validationCode: string;
  shopifyCode?: string;
  redemptionUrl?: string;
};

const EMPTY_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  birthday: "",
  productInterest: "",
  purchaseStatus: "",
};

const PRIZES: Prize[] = [
  {
    id: "discount-10",
    label: "10% en tu pedido",
    wheelLabel: "10%",
    codePrefix: "NUNA10",
    color: "#2b2118",
    textColor: "#fff7e8",
  },
  {
    id: "discount-15",
    label: "15% en tu pedido",
    wheelLabel: "15%",
    codePrefix: "NUNA15",
    color: "#a06a35",
    textColor: "#fff7e8",
  },
  {
    id: "discount-20",
    label: "20% en tu pedido",
    wheelLabel: "20%",
    codePrefix: "NUNA20",
    color: "#e8d6b5",
    textColor: "#2b2118",
  },
];

const SEGMENT_ANGLE = 360 / PRIZES.length;
const WHEEL_LABEL_RADIUS = 34;
const shootBase = "/images/nunaamautta/nov-2025";
const heroImage = `${shootBase}/nuna-nov-2025-22.jpg`;
const panelImage = `${shootBase}/nuna-nov-2025-46.jpg`;
const productSuggestions = [
  "Top Sirena", "Top Nómada", "Top Capucha Alma", "Top Concha", "Top Killa",
  "Top Renacer", "Top Duna", "Top Deusa", "Falda Nómada", "Falda Amar",
  "Falda Mulata", "Falda Short Brújula", "Pantalón Zama", "Pantalón Kairo",
  "Pantalón Dharma", "Vestido Sahara", "Vestido Gaia", "Vestido Gurmuk",
  "Kimono Lunar", "Overol Venus", "Bikini Conchas", "Capa Bruma",
  "Pashmina Munay", "Mangas Etérea", "Perla Mesh Hat", "Magia Mesh Hat",
  "Loto Mesh Hat", "Cristal Mesh Hat", "Armonía Mesh Hat",
];

function getTodayInputValue() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

function validateForm(form: FormData) {
  const errors: FormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneDigits = form.phone.replace(/\D/g, "");
  const birthdayTime = Date.parse(`${form.birthday}T00:00:00`);

  if (form.name.trim().length < 2) {
    errors.name = "Cuéntanos tu nombre.";
  }

  if (!emailPattern.test(form.email.trim())) {
    errors.email = "Ingresa un correo válido.";
  }

  if (phoneDigits.length < 7 || phoneDigits.length > 15) {
    errors.phone = "Ingresa un celular válido.";
  }
  if (form.productInterest.trim().length < 2) {
    errors.productInterest = "Cuéntanos qué producto compraste o te interesó.";
  }
  if (!form.purchaseStatus) errors.purchaseStatus = "Selecciona una opción.";

  if (!form.birthday || Number.isNaN(birthdayTime)) {
    errors.birthday = "Selecciona tu cumpleaños.";
  } else if (birthdayTime > Date.now()) {
    errors.birthday = "La fecha no puede ser futura.";
  }

  return errors;
}

function SparkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 2c.7 6.3 3.7 9.3 10 10-6.3.7-9.3 3.7-10 10-.7-6.3-3.7-9.3-10-10 6.3-.7 9.3-3.7 10-10Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  );
}

export function NunaGiftExperience({
  instagramUrl,
  logoSrc,
}: {
  instagramUrl: string;
  logoSrc: string;
}) {
  const [step, setStep] = useState<"form" | "wheel">("form");
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [result, setResult] = useState<PrizeResult | null>(null);
  const [assignedPrize, setAssignedPrize] = useState<PrizeResult | null>(null);
  const [copyMessage, setCopyMessage] = useState("");
  const spinTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const restoreTimer = window.setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem("nuna-gift-v1") ?? "null");
        const prize = PRIZES.find((item) => item.id === stored?.prize?.id);
        if (prize && typeof stored.prize.validationCode === "string" && typeof stored.name === "string") {
          setResult({ ...prize, validationCode: stored.prize.validationCode,
            shopifyCode: NUNA_DISCOUNT_CODES[prize.id],
            redemptionUrl: nunaDiscountUrl(NUNA_DISCOUNT_CODES[prize.id]),
          });
          setForm({ ...EMPTY_FORM, name: stored.name });
          setStep("wheel");
          setRotation((360 - (PRIZES.indexOf(prize) * SEGMENT_ANGLE + SEGMENT_ANGLE / 2)) % 360);
        }
      } catch { /* Storage may be unavailable in private browsing. */ }
    }, 0);
    return () => {
      window.clearTimeout(restoreTimer);
      window.clearTimeout(spinTimer.current);
    };
  }, []);

  const wheelGradient = useMemo(
    () =>
      PRIZES.map((prize, index) => {
        const start = index * SEGMENT_ANGLE;
        const end = (index + 1) * SEGMENT_ANGLE;
        return `${prize.color} ${start}deg ${end}deg`;
      }).join(", "),
    [],
  );

  function updateField<K extends keyof FormData>(field: K, value: FormData[K]) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitError(null);
  }

  async function saveLead() {
    const response = await fetch("/api/gift-leads", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        brand: "nunaamautta",
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        birthday: form.birthday,
        productInterest: form.productInterest.trim(),
        purchaseStatus: form.purchaseStatus,
        sourcePath: window.location.pathname,
      }),
    });

    if (!response.ok) {
      throw new Error("Gift lead could not be saved.");
    }
    const body = await response.json();
    const prize = PRIZES.find((item) => item.id === body.data?.prize?.id);
    if (!prize || typeof body.data.prize.validationCode !== "string") {
      throw new Error("Missing prize assignment.");
    }
    const assigned = { ...prize, validationCode: body.data.prize.validationCode,
      shopifyCode: body.data.prize.shopifyCode,
      redemptionUrl: body.data.prize.redemptionUrl,
    };
    setAssignedPrize(assigned);
    try {
      localStorage.setItem("nuna-gift-v1", JSON.stringify({ name: form.name.trim().split(/\s+/)[0], prize: assigned }));
    } catch { /* The prize remains available in the current session. */ }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateForm(form);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmittingLead(true);
    setSubmitError(null);

    try {
      await saveLead();
      setStep("wheel");
    } catch {
      setSubmitError(
        "No pudimos guardar tus datos. Revisa tu conexión e intenta de nuevo.",
      );
    } finally {
      setIsSubmittingLead(false);
    }
  }

  function spinWheel() {
    if (isSpinning || result || !assignedPrize) return;

    const selectedIndex = PRIZES.findIndex((item) => item.id === assignedPrize.id);
    const selectedCenter = selectedIndex * SEGMENT_ANGLE + SEGMENT_ANGLE / 2;
    const currentNormalized = ((rotation % 360) + 360) % 360;
    const targetNormalized = (360 - selectedCenter) % 360;
    const delta = (targetNormalized - currentNormalized + 360) % 360;
    const fullTurns = 6 + Math.floor(Math.random() * 2);
    const nextRotation = rotation + fullTurns * 360 + delta;

    setIsSpinning(true);
    setRotation(nextRotation);

    spinTimer.current = window.setTimeout(() => {
      setResult(assignedPrize);
      setIsSpinning(false);
    }, 4200);
  }

  async function copyCode() {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result.shopifyCode ?? result.validationCode);
      setCopyMessage("Código copiado.");
    } catch {
      setCopyMessage("Selecciona el código para copiarlo.");
    }
  }

  return (
    <section data-nuna-links className={styles.section} id="reclama-tu-regalo">
      <NunaClickTracking />
      <div className={styles.phone}>
        <header className={styles.topbar}>
          <div className={styles.kicker}>
            <Link href="/nunaamautta">Volver a Nuna</Link>
            <i aria-hidden="true" />
          </div>
          <Image
            src={logoSrc}
            alt="Nuna Amautta"
            width={136}
            height={88}
            priority
            className={styles.topLogo}
          />
        </header>

        <div className={styles.hero}>
          <Image
            src={heroImage}
            alt="Editorial Nuna Amautta para reclamar regalo"
            fill
            priority
            sizes="480px"
            className={styles.heroImage}
          />
          <div className={styles.heroShade} />
          <div className={styles.heroCopy}>
            <h1>
              Reclama tu regalo
              <span>y gira la ruleta.</span>
            </h1>
            <p>
              Completa tus datos y descubre el descuento que te espera
              para tu próximo pedido.
            </p>
          </div>
        </div>

        <div className={styles.prizes} aria-label="Premios disponibles">
          {PRIZES.map((prize) => (
            <span key={prize.id}>{prize.label}</span>
          ))}
        </div>

        {step === "form" ? (
          <div className={styles.panel}>
            <div className={styles.panelMedia}>
              <Image
                src={panelImage}
                alt="Detalle de styling Nuna Amautta"
                fill
                sizes="440px"
                className={styles.panelImage}
              />
              <div>
                <p>Antes de girar</p>
                <h2>Queremos conocerte</h2>
              </div>
            </div>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <label className={styles.field}>
                <span>Nombre</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  placeholder="¿Cómo te llamas?"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "nuna-name-error" : undefined}
                />
                {errors.name && <small id="nuna-name-error">{errors.name}</small>}
              </label>

              <label className={styles.field}>
                <span>Correo</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder="tu@correo.com"
                  autoComplete="email"
                  inputMode="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email ? "nuna-email-error" : undefined
                  }
                />
                {errors.email && (
                  <small id="nuna-email-error">{errors.email}</small>
                )}
              </label>

              <label className={styles.field}>
                <span>Celular</span>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  placeholder="+57 300 000 0000"
                  autoComplete="tel"
                  inputMode="tel"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={
                    errors.phone ? "nuna-phone-error" : undefined
                  }
                />
                {errors.phone && (
                  <small id="nuna-phone-error">{errors.phone}</small>
                )}
              </label>

              <label className={styles.field}>
                <span>¿Ya compraste en Nuna?</span>
                <select name="purchaseStatus" value={form.purchaseStatus} onChange={(event) => updateField("purchaseStatus", event.target.value as FormData["purchaseStatus"])} aria-invalid={Boolean(errors.purchaseStatus)} aria-describedby={errors.purchaseStatus ? "nuna-purchase-error" : undefined}>
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="purchased">Sí, ya compré</option>
                  <option value="interested">Aún no, estoy descubriendo Nuna</option>
                </select>
                {errors.purchaseStatus && <small id="nuna-purchase-error">{errors.purchaseStatus}</small>}
              </label>

              <label className={styles.field}>
                <span>{form.purchaseStatus === "purchased" ? "¿Qué producto compraste?" : "¿Cuál producto te interesa más?"}</span>
                <input
                  type="text"
                  name="productInterest"
                  list="nuna-products"
                  value={form.productInterest}
                  maxLength={300}
                  onChange={(event) => updateField("productInterest", event.target.value)}
                  placeholder="Nombre o descripción de la prenda"
                  aria-invalid={Boolean(errors.productInterest)}
                  aria-describedby={errors.productInterest ? "nuna-product-error" : undefined}
                />
                <datalist id="nuna-products">
                  {productSuggestions.map((product) => <option key={product} value={product} />)}
                </datalist>
                {errors.productInterest && <small id="nuna-product-error">{errors.productInterest}</small>}
              </label>

              <label className={styles.field}>
                <span>Cumpleaños</span>
                <input
                  type="date"
                  name="birthday"
                  value={form.birthday}
                  max={getTodayInputValue()}
                  onChange={(event) =>
                    updateField("birthday", event.target.value)
                  }
                  autoComplete="bday"
                  aria-invalid={Boolean(errors.birthday)}
                  aria-describedby={
                    errors.birthday ? "nuna-birthday-error" : undefined
                  }
                />
                {errors.birthday && (
                  <small id="nuna-birthday-error">{errors.birthday}</small>
                )}
              </label>

              <button
                className={styles.primaryButton}
                type="submit"
                disabled={isSubmittingLead}
              >
                <span>{isSubmittingLead ? "Guardando..." : "Ir a la ruleta"}</span>
                <ArrowIcon />
              </button>
              {submitError && (
                <p className={styles.submitError} role="alert">
                  {submitError}
                </p>
              )}
            </form>

            <p className={styles.privacy}>
              Al continuar aceptas el tratamiento de tus datos para esta
              actividad promocional. Descuento sobre tu pedido completo,
              sujeto a validación. No acumulable con otras promociones.
            </p>
          </div>
        ) : (
          <div className={`${styles.panel} ${styles.wheelPanel}`}>
            <p className={styles.eyebrow}>Tu giro ganador</p>
            <h2 className={styles.wheelTitle}>
              Hola, {form.name.trim().split(/\s+/)[0]}. Todos ganan.
            </h2>

            <div className={styles.wheelWrap}>
              <div className={styles.pointer} aria-hidden="true" />
              <div className={styles.wheelFrame}>
                <div
                  className={styles.wheel}
                  style={{
                    background: `conic-gradient(${wheelGradient})`,
                    transform: `rotate(${rotation}deg)`,
                  }}
                >
                  <div className={styles.wheelDividers} />
                  {PRIZES.map((prize, index) => {
                    const angle = index * SEGMENT_ANGLE + SEGMENT_ANGLE / 2 - 90;
                    const angleInRadians = (angle * Math.PI) / 180;

                    return (
                      <div
                        key={prize.id}
                        className={styles.wheelLabel}
                        style={
                          {
                            left: `calc(50% + ${
                              Math.cos(angleInRadians) * WHEEL_LABEL_RADIUS
                            }%)`,
                            top: `calc(50% + ${
                              Math.sin(angleInRadians) * WHEEL_LABEL_RADIUS
                            }%)`,
                            color: prize.textColor,
                          } as CSSProperties
                        }
                      >
                        <span style={{ transform: `rotate(${-rotation}deg)` }}>
                          {prize.wheelLabel}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className={styles.wheelCenter}>
                  <Image
                    src={logoSrc}
                    alt=""
                    width={96}
                    height={62}
                    className={styles.centerLogo}
                  />
                </div>
              </div>
            </div>

            {!result ? (
              <div className={styles.spinControls}>
                <button
                  className={styles.spinButton}
                  type="button"
                  onClick={spinWheel}
                  disabled={isSpinning}
                >
                  <SparkIcon />
                  {isSpinning ? "Girando..." : "Girar la ruleta"}
                </button>
                <p>Un premio por correo. Siempre hay premio.</p>
              </div>
            ) : (
              <div className={styles.resultCard} aria-live="polite">
                <p>¡Felicidades!</p>
                <h3>{result.label}</h3>
                <span>{result.shopifyCode ?? result.validationCode}</span>
                <button type="button" onClick={copyCode}>Copiar código</button>
                <p role="status">{copyMessage}</p>
                <a className={styles.primaryButton} href={result.redemptionUrl ?? instagramUrl} target="_blank" rel="noopener noreferrer">
                  {result.redemptionUrl ? "Comprar con mi descuento" : "Reclamar premio en Instagram"}
                </a>
                <a className={styles.primaryButton} href="https://nunaamautta.com/collections/all" target="_blank" rel="noopener noreferrer">Ver la colección</a>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
