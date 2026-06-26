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
    label: "10% en prendas seleccionadas",
    wheelLabel: "10%",
    codePrefix: "NUNA10",
    color: "#2f211a",
    textColor: "#fffaf3",
  },
  {
    id: "discount-15",
    label: "15% en prendas seleccionadas",
    wheelLabel: "15%",
    codePrefix: "NUNA15",
    color: "#bf9078",
    textColor: "#21130d",
  },
  {
    id: "discount-5",
    label: "5% en prendas seleccionadas",
    wheelLabel: "5%",
    codePrefix: "NUNA5",
    color: "#d7ddc9",
    textColor: "#2f211a",
  },
];

const SEGMENT_ANGLE = 360 / PRIZES.length;
const WHEEL_LABEL_RADIUS = 34;

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
    errors.name = "Cuentanos tu nombre.";
  }

  if (!emailPattern.test(form.email.trim())) {
    errors.email = "Ingresa un correo valido.";
  }

  if (phoneDigits.length < 7 || phoneDigits.length > 15) {
    errors.phone = "Ingresa un celular valido.";
  }

  if (!form.birthday || Number.isNaN(birthdayTime)) {
    errors.birthday = "Selecciona tu cumpleanos.";
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
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateForm(form);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setStep("wheel");
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
      <div className={styles.shell}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Regalo Nuna Amautta</p>
          <h2>
            Reclama tu regalo
            <span>y deja que la ruleta elija tu descuento.</span>
          </h2>
          <p>
            Completa tus datos, gira una sola vez y presenta el código en
            Instagram para validar tu descuento. Válido en prendas seleccionadas
            de la colección actual.
          </p>

          <div className={styles.prizes} aria-label="Premios disponibles">
            {PRIZES.map((prize) => (
              <span key={prize.id}>{prize.label}</span>
            ))}
          </div>

          <p className={styles.disclaimer}>
            * Descuentos aplicables únicamente en prendas seleccionadas.
            No acumulable con otras promociones.
          </p>
        </div>

        {step === "form" ? (
          <div className={styles.panel}>
            <div className={styles.formHeader}>
              <Image
                src={logoSrc}
                alt="Nuna Amautta"
                width={88}
                height={56}
                className={styles.logo}
              />
              <div>
                <p>Antes de girar</p>
                <h3>Queremos conocerte</h3>
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
                  placeholder="Como te llamas?"
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
                    errors.birthday ? "nuna-birthday-error" : undefined
                  }
                />
                {errors.birthday && (
                  <small id="nuna-birthday-error">{errors.birthday}</small>
                )}
              </label>

              <button className={styles.primaryButton} type="submit">
                <span>Ir a la ruleta</span>
                <ArrowIcon />
              </button>
            </form>

            <p className={styles.privacy}>
              Al continuar aceptas el tratamiento de tus datos para esta
              actividad promocional.
            </p>
          </div>
        ) : (
          <div className={`${styles.panel} ${styles.wheelPanel}`}>
            <p className={styles.eyebrow}>Tu giro ganador</p>
            <h3 className={styles.wheelTitle}>
              Hola, {form.name.trim().split(/\s+/)[0]}. Todos ganan.
            </h3>

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
                <p>Felicidades</p>
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
