"use client";

import Image from "next/image";
import type { CSSProperties, FormEvent } from "react";
import { useMemo, useState } from "react";

import styles from "./nuna-gift.module.css";

type FormData = {
  name: string;
  email: string;
  phone: string;
  birthday: string;
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
};

const EMPTY_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  birthday: "",
};

const PRIZES: Prize[] = [
  {
    id: "discount-10",
    label: "10% en referencias seleccionadas",
    wheelLabel: "10%",
    codePrefix: "NUNA10",
    color: "#2b2118",
    textColor: "#fff7e8",
  },
  {
    id: "discount-15",
    label: "15% en referencias seleccionadas",
    wheelLabel: "15%",
    codePrefix: "NUNA15",
    color: "#a06a35",
    textColor: "#fff7e8",
  },
  {
    id: "discount-20",
    label: "20% en referencias seleccionadas",
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

function getTodayInputValue() {
  const now = new Date();
  return now.toISOString().slice(0, 10);
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

  if (!form.birthday || Number.isNaN(birthdayTime)) {
    errors.birthday = "Selecciona tu cumpleaños.";
  } else if (birthdayTime > Date.now()) {
    errors.birthday = "La fecha no puede ser futura.";
  }

  return errors;
}

function createValidationCode(prefix: string) {
  return `${prefix}-${Math.floor(1000 + Math.random() * 9000)}`;
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

  const wheelGradient = useMemo(
    () =>
      PRIZES.map((prize, index) => {
        const start = index * SEGMENT_ANGLE;
        const end = (index + 1) * SEGMENT_ANGLE;
        return `${prize.color} ${start}deg ${end}deg`;
      }).join(", "),
    [],
  );

  function updateField(field: keyof FormData, value: string) {
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
        sourcePath: window.location.pathname,
      }),
    });

    if (!response.ok) {
      throw new Error("Gift lead could not be saved.");
    }
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
    if (isSpinning || result) return;

    const selectedIndex = Math.floor(Math.random() * PRIZES.length);
    const selectedPrize = PRIZES[selectedIndex];
    const selectedCenter = selectedIndex * SEGMENT_ANGLE + SEGMENT_ANGLE / 2;
    const currentNormalized = ((rotation % 360) + 360) % 360;
    const targetNormalized = (360 - selectedCenter) % 360;
    const delta = (targetNormalized - currentNormalized + 360) % 360;
    const fullTurns = 6 + Math.floor(Math.random() * 2);
    const nextRotation = rotation + fullTurns * 360 + delta;

    setIsSpinning(true);
    setRotation(nextRotation);

    window.setTimeout(() => {
      setResult({
        ...selectedPrize,
        validationCode: createValidationCode(selectedPrize.codePrefix),
      });
      setIsSpinning(false);
    }, 4200);
  }

  function claimPrize() {
    window.location.assign(instagramUrl);
  }

  return (
    <section className={styles.section} id="reclama-tu-regalo">
      <div className={styles.phone}>
        <header className={styles.topbar}>
          <div className={styles.kicker}>
            <span>02 / Regalo</span>
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
            <Image
              src={logoSrc}
              alt="Nuna Amautta"
              width={240}
              height={154}
              className={styles.heroLogo}
            />
            <h1>
              Reclama tu regalo
              <span>y gira la ruleta.</span>
            </h1>
            <p>
              Completa tus datos, recibe un código y preséntalo en Instagram
              para validar tu descuento.
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
              actividad promocional. Descuento válido en referencias
              seleccionadas. No acumulable con otras promociones.
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
                    background: `conic-gradient(from -90deg, ${wheelGradient})`,
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
                <p>Un giro por persona. Siempre hay premio.</p>
              </div>
            ) : (
              <div className={styles.resultCard} aria-live="polite">
                <p>¡Felicidades!</p>
                <h3>{result.label}</h3>
                <span>{result.validationCode}</span>
                <button type="button" onClick={claimPrize}>
                  Reclamar premio en Instagram
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
