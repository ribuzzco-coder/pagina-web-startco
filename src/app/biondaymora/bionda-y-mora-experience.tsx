"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { FormEvent, useMemo, useState } from "react";

import styles from "./bionda-y-mora.module.css";

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
  chance: number;
  color: string;
  textColor: string;
  strokeColor: string;
  textShadow: string;
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
    id: "discount-5",
    label: "5% de descuento",
    wheelLabel: "5%",
    codePrefix: "BYM5",
    chance: 10,
    color: "#552D21",
    textColor: "#FFF8EC",
    strokeColor: "#2B1711",
    textShadow:
      "0 1px 1px rgba(43, 23, 17, 0.88), 1px 0 1px rgba(43, 23, 17, 0.72), -1px 0 1px rgba(43, 23, 17, 0.72), 0 -1px 1px rgba(43, 23, 17, 0.72), 0 3px 6px rgba(43, 23, 17, 0.42)",
  },
  {
    id: "discount-10",
    label: "10% de descuento",
    wheelLabel: "10%",
    codePrefix: "BYM10",
    chance: 60,
    color: "#F5E8D4",
    textColor: "#4A281E",
    strokeColor: "#FFF8EC",
    textShadow:
      "0 1px 0 rgba(255, 248, 236, 0.9), 1px 0 0 rgba(255, 248, 236, 0.72), -1px 0 0 rgba(255, 248, 236, 0.72), 0 -1px 0 rgba(255, 248, 236, 0.72)",
  },
  {
    id: "discount-15",
    label: "15% de descuento",
    wheelLabel: "15%",
    codePrefix: "BYM15",
    chance: 20,
    color: "#A95C3F",
    textColor: "#FFF8EC",
    strokeColor: "#5A2D21",
    textShadow:
      "0 1px 1px rgba(74, 40, 30, 0.82), 1px 0 1px rgba(74, 40, 30, 0.68), -1px 0 1px rgba(74, 40, 30, 0.68), 0 -1px 1px rgba(74, 40, 30, 0.68), 0 3px 6px rgba(74, 40, 30, 0.36)",
  },
  {
    id: "scarf",
    label: "Pañoleta gratis",
    wheelLabel: "Pañoleta",
    codePrefix: "BYMP",
    chance: 10,
    color: "#E1A957",
    textColor: "#3D211B",
    strokeColor: "#FCEFD9",
    textShadow:
      "0 1px 0 rgba(255, 248, 236, 0.88), 1px 0 0 rgba(255, 248, 236, 0.68), -1px 0 0 rgba(255, 248, 236, 0.68), 0 -1px 0 rgba(255, 248, 236, 0.68)",
  },
];

const SEGMENT_ANGLE = 360 / PRIZES.length;
const WHEEL_LABEL_RADIUS = 31;
const TOTAL_CHANCE = PRIZES.reduce((total, prize) => total + prize.chance, 0);

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
    errors.birthday = "Selecciona tu cumpleanos.";
  } else if (birthdayTime > Date.now()) {
    errors.birthday = "La fecha no puede ser futura.";
  }

  return errors;
}

function getTodayInputValue() {
  const now = new Date();
  return now.toISOString().slice(0, 10);
}

function createValidationCode(prefix: string) {
  return `${prefix}-${Math.floor(1000 + Math.random() * 9000)}`;
}

function selectPrizeByChance() {
  const threshold = Math.random() * TOTAL_CHANCE;
  let cumulativeChance = 0;

  for (const prize of PRIZES) {
    cumulativeChance += prize.chance;

    if (threshold < cumulativeChance) {
      return prize;
    }
  }

  return PRIZES[PRIZES.length - 1];
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M16.8 7.2h.01" />
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

function SparkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 2c.7 6.3 3.7 9.3 10 10-6.3.7-9.3 3.7-10 10-.7-6.3-3.7-9.3-10-10 6.3-.7 9.3-3.7 10-10Z" />
    </svg>
  );
}

export function BiondaYMoraExperience() {
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
        brand: "biondaymora",
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
        "No pudimos guardar tus datos. Revisa tu conexion e intenta de nuevo.",
      );
    } finally {
      setIsSubmittingLead(false);
    }
  }

  function spinWheel() {
    if (isSpinning || result) return;

    const selectedPrize = selectPrizeByChance();
    const selectedIndex = PRIZES.findIndex((prize) => prize.id === selectedPrize.id);
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

  function restartExperience() {
    setStep("form");
    setForm(EMPTY_FORM);
    setErrors({});
    setRotation(0);
    setResult(null);
    setIsSpinning(false);
    setIsSubmittingLead(false);
    setSubmitError(null);
  }

  return (
    <main className={styles.page}>
      <div className={styles.ambient} aria-hidden="true">
        <span className={styles.ambientOrbOne} />
        <span className={styles.ambientOrbTwo} />
        <span className={styles.ambientLine} />
      </div>

      <header className={styles.header}>
        <div className={styles.brand}>
          <Image
            src="/images/biondaymora-logo.jpg"
            alt="Bionda y Mora"
            width={84}
            height={84}
            priority
            className={styles.logo}
          />
          <div>
            <p className={styles.brandName}>
              Bionda <span>y</span> Mora
            </p>
            <p className={styles.brandOrigin}>Hecho en Medellín</p>
          </div>
        </div>
        <p className={styles.headerNote}>Donde cada paso transforma</p>
      </header>

      {step === "form" ? (
        <section className={styles.formStage}>
          <div className={styles.photoPanel}>
            <Image
              src="/images/biondaymora-look-1.jpg"
              alt="Look de Bionda y Mora con pañoleta y accesorios"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
              className={styles.photo}
            />
            <div className={styles.photoShade} />
            <div className={styles.photoCopy}>
              <p className={styles.eyebrowLight}>Un regalo para ti</p>
              <h1>
                Gira, gana
                <span>y transforma tu look.</span>
              </h1>
              <p>
                Déjanos tus datos y descubre el detalle que Bionda y Mora
                preparó para ti.
              </p>
            </div>
            <p className={styles.verticalText}>
              BIONDA &amp; MORA · CUERO · RAÍZ · TRANSFORMACIÓN
            </p>
          </div>

          <div className={styles.formPanel}>
            <div className={styles.formCard}>
              <span className={styles.formNumber}>01</span>
              <p className={styles.eyebrow}>Antes de girar</p>
              <h2>Queremos conocerte</h2>
              <p className={styles.formIntro}>
                Completa tus datos para participar. Te tomará menos de un
                minuto.
              </p>

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
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && <small id="name-error">{errors.name}</small>}
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
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && <small id="email-error">{errors.email}</small>}
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
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && <small id="phone-error">{errors.phone}</small>}
                </label>

                <label className={styles.field}>
                  <span>Cumpleanos</span>
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
                      errors.birthday ? "birthday-error" : undefined
                    }
                  />
                  {errors.birthday && (
                    <small id="birthday-error">{errors.birthday}</small>
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
                actividad promocional.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section className={styles.wheelStage}>
          <div className={styles.wheelIntro}>
            <p className={styles.eyebrow}>Tu momento de suerte</p>
            <h1>
              Hola, {form.name.trim().split(/\s+/)[0]}.
              <span>Hay un premio esperándote.</span>
            </h1>
            <p>
              Cada premio tiene una oportunidad definida. Toca el botón y deja
              que la suerte elija por ti.
            </p>

            <div className={styles.prizeList} aria-label="Premios disponibles">
              {PRIZES.map((prize, index) => (
                <div key={prize.id}>
                  <span>0{index + 1}</span>
                  <p>
                    {prize.id === "scarf" ? "Regalo" : `${prize.wheelLabel} dto.`} ·{" "}
                    {prize.chance}%
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`${styles.wheelArea} ${
              result ? styles.wheelAreaWithResult : ""
            }`}
          >
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
                        style={{
                          left: `calc(50% + ${
                            Math.cos(angleInRadians) * WHEEL_LABEL_RADIUS
                          }%)`,
                          top: `calc(50% + ${
                            Math.sin(angleInRadians) * WHEEL_LABEL_RADIUS
                          }%)`,
                          color: prize.textColor,
                          "--wheel-label-stroke": prize.strokeColor,
                          "--wheel-label-shadow": prize.textShadow,
                        } as CSSProperties & Record<string, string>}
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
                    src="/images/biondaymora-logo.jpg"
                    alt=""
                    width={112}
                    height={112}
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
                <p>
                  Un giro por persona · 5%: 10% · 10%: 60% · 15%: 20% ·
                  Regalo: 10%
                </p>
              </div>
            ) : (
              <div className={styles.resultCard} aria-live="polite">
                <p className={styles.resultKicker}>¡Felicidades!</p>
                <h2>{result.label}</h2>
                <p>
                  Guarda este código y preséntalo al equipo de Bionda y Mora
                  para reclamar tu premio.
                </p>
                <strong>{result.validationCode}</strong>
                <a
                  href="https://www.instagram.com/biondaymora/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.instagramButton}
                >
                  <InstagramIcon />
                  Reclamar en Instagram
                </a>
                <button type="button" onClick={restartExperience} className={styles.restartButton}>
                  Jugar de nuevo
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      <footer className={styles.footer}>
        <p>© Bionda y Mora</p>
        <p>100% cuero · 100% hecho en Medellín</p>
      </footer>
    </main>
  );
}
