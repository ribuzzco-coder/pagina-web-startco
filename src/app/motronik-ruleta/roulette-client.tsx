"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type PrizeType = "none" | "free-product" | "discount" | "surprise";

type WheelSegment = {
  internalCode: string;
  label: string;
  shortLabel: string;
  prizeType: PrizeType;
  isWinner: boolean;
  color: string;
  textColor: string;
};

type SpinResult = WheelSegment & {
  validationCode: string;
};

const motronikLogo = "/images/motronik/logo.webp";
const motronikElement = "/images/motronik/element-cutout.png";

const ashSparks = [
  { left: "6%", top: "14%", delay: "0s", duration: "9s", size: "10px" },
  { left: "18%", top: "28%", delay: "1.4s", duration: "11s", size: "6px" },
  { left: "29%", top: "10%", delay: "0.6s", duration: "10s", size: "8px" },
  { left: "42%", top: "20%", delay: "2.1s", duration: "12s", size: "9px" },
  { left: "58%", top: "12%", delay: "1.1s", duration: "9.5s", size: "7px" },
  { left: "71%", top: "26%", delay: "2.8s", duration: "10.8s", size: "8px" },
  { left: "84%", top: "15%", delay: "0.9s", duration: "11.4s", size: "11px" },
  { left: "92%", top: "34%", delay: "2.4s", duration: "9.8s", size: "6px" },
] as const;

const smokeClouds = [
  { left: "9%", top: "16%", width: "220px", height: "120px", delay: "0s" },
  { left: "68%", top: "14%", width: "260px", height: "140px", delay: "2s" },
  { left: "18%", top: "72%", width: "240px", height: "128px", delay: "1.2s" },
  { left: "72%", top: "76%", width: "210px", height: "116px", delay: "3.1s" },
] as const;

const wheelSegments: WheelSegment[] = [
  {
    internalCode: "NO_PRIZE_1",
    label: "Sigue intentando",
    shortLabel: "Sigue",
    prizeType: "none",
    isWinner: false,
    color: "#101722",
    textColor: "#F7FAFF",
  },
  {
    internalCode: "FREE_PRODUCT_1",
    label: "Producto gratis",
    shortLabel: "Gratis",
    prizeType: "free-product",
    isWinner: true,
    color: "#F24A2F",
    textColor: "#FFFFFF",
  },
  {
    internalCode: "NO_PRIZE_2",
    label: "Intentalo de nuevo",
    shortLabel: "Otra vez",
    prizeType: "none",
    isWinner: false,
    color: "#182236",
    textColor: "#F7FAFF",
  },
  {
    internalCode: "DISCOUNT_5_1",
    label: "5% de descuento",
    shortLabel: "5%",
    prizeType: "discount",
    isWinner: true,
    color: "#FFC83D",
    textColor: "#17110A",
  },
  {
    internalCode: "SURPRISE_GIFT_1",
    label: "Regalo sorpresa",
    shortLabel: "Regalo",
    prizeType: "surprise",
    isWinner: true,
    color: "#18B892",
    textColor: "#031B17",
  },
  {
    internalCode: "NO_PRIZE_3",
    label: "Sigue intentando",
    shortLabel: "Sigue",
    prizeType: "none",
    isWinner: false,
    color: "#0C111B",
    textColor: "#F7FAFF",
  },
  {
    internalCode: "FREE_PRODUCT_2",
    label: "Producto gratis",
    shortLabel: "Gratis",
    prizeType: "free-product",
    isWinner: true,
    color: "#D93327",
    textColor: "#FFFFFF",
  },
  {
    internalCode: "NO_PRIZE_4",
    label: "Intentalo de nuevo",
    shortLabel: "Otra vez",
    prizeType: "none",
    isWinner: false,
    color: "#202B3F",
    textColor: "#F7FAFF",
  },
  {
    internalCode: "DISCOUNT_5_2",
    label: "5% de descuento",
    shortLabel: "5%",
    prizeType: "discount",
    isWinner: true,
    color: "#F6A91D",
    textColor: "#17110A",
  },
  {
    internalCode: "SURPRISE_GIFT_2",
    label: "Regalo sorpresa",
    shortLabel: "Regalo",
    prizeType: "surprise",
    isWinner: true,
    color: "#0EA47E",
    textColor: "#FFFFFF",
  },
];

const segmentAngle = 360 / wheelSegments.length;

function createValidationCode() {
  return `MR-${Math.floor(1000 + Math.random() * 9000)}`;
}

function getResultTone(prizeType: PrizeType) {
  if (prizeType === "none") {
    return "border-white/14 bg-white/[0.04] text-[#D9E2EF]";
  }

  if (prizeType === "discount") {
    return "border-[#FFC83D]/50 bg-[#FFC83D]/12 text-[#FFE7A3]";
  }

  if (prizeType === "surprise") {
    return "border-[#20D6A8]/50 bg-[#20D6A8]/12 text-[#BCFFF0]";
  }

  return "border-[#FF624A]/55 bg-[#FF624A]/12 text-[#FFD3CA]";
}

export function MotronikRouletteClient() {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<SpinResult | null>(null);

  const wheelGradient = useMemo(() => {
    return wheelSegments
      .map((segment, index) => {
        const start = index * segmentAngle;
        const end = (index + 1) * segmentAngle;
        return `${segment.color} ${start}deg ${end}deg`;
      })
      .join(", ");
  }, []);

  function spinWheel() {
    if (isSpinning) return;

    const selectedIndex = Math.floor(Math.random() * wheelSegments.length);
    const selectedSegment = wheelSegments[selectedIndex];
    const selectedCenter = selectedIndex * segmentAngle + segmentAngle / 2;
    const currentNormalized = ((rotation % 360) + 360) % 360;
    const targetNormalized = (360 - selectedCenter) % 360;
    const delta = (targetNormalized - currentNormalized + 360) % 360;
    const fullTurns = 5 + Math.floor(Math.random() * 3);
    const nextRotation = rotation + fullTurns * 360 + delta;

    setResult(null);
    setIsSpinning(true);
    setRotation(nextRotation);

    window.setTimeout(() => {
      setResult({
        ...selectedSegment,
        validationCode: createValidationCode(),
      });
      setIsSpinning(false);
    }, 4300);
  }

  return (
    <main className="motronik-page relative -mt-[76px] min-h-screen overflow-hidden text-white">
      <div className="motronik-page__background" aria-hidden="true">
        <div className="motronik-page__backdrop" />
        <div className="motronik-page__ashfield">
          {ashSparks.map((spark) => (
            <span
              key={`${spark.left}-${spark.top}`}
              className="motronik-ash"
              style={{
                left: spark.left,
                top: spark.top,
                animationDelay: spark.delay,
                animationDuration: spark.duration,
                width: spark.size,
                height: spark.size,
              }}
            />
          ))}
        </div>
        <div className="motronik-page__smoke">
          {smokeClouds.map((cloud) => (
            <span
              key={`${cloud.left}-${cloud.top}`}
              className="motronik-smoke"
              style={{
                left: cloud.left,
                top: cloud.top,
                width: cloud.width,
                height: cloud.height,
                animationDelay: cloud.delay,
              }}
            />
          ))}
        </div>
      </div>

      <section className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-8 px-4 py-7 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div className="motronik-shell relative overflow-hidden rounded-[32px] border border-white/10 px-5 py-7 text-center shadow-[0_24px_64px_rgba(0,0,0,0.34)] backdrop-blur-[12px] sm:rounded-[36px] sm:px-8 sm:py-9 lg:text-left">
          <div className="motronik-shell__flare" />
          <div className="relative flex flex-col items-center lg:items-start">
          <div className="flex items-center gap-3">
            <span className="motronik-logo-ring grid h-20 w-20 place-items-center rounded-full border shadow-[0_18px_40px_rgba(0,0,0,0.32)] sm:h-24 sm:w-24">
              <Image
                src={motronikLogo}
                alt="Motronik"
                width={78}
                height={78}
                priority
                className="h-16 w-16 object-contain sm:h-20 sm:w-20"
              />
            </span>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.26em] text-[#FF7A63]">
                Activacion feria
              </p>
              <h1 className="mt-1 text-3xl font-black uppercase leading-none tracking-[0.04em] sm:text-5xl [font-family:var(--font-zen-dots)]">
                Motronik Ruleta
              </h1>
            </div>
          </div>

          <p className="mt-6 max-w-xl text-lg font-semibold leading-relaxed text-[#E9EEF7] sm:text-xl">
            Gira una vez, descubre tu resultado y validalo con el equipo del
            stand para reclamar tu premio.
          </p>

          <div className="mt-6 grid w-full max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["40%", "Sin premio"],
              ["20%", "Producto gratis"],
              ["20%", "5% descuento"],
              ["20%", "Regalo sorpresa"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="motronik-card relative overflow-hidden rounded-[18px] border px-3 py-3 text-center"
              >
                <span className="motronik-neon-edge" />
                <p className="relative text-xl font-black text-white">{value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.08em] text-[#AEB8C8]">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="motronik-card motronik-card--special relative mt-7 hidden w-full max-w-md overflow-hidden rounded-[26px] border p-4 shadow-[0_18px_50px_rgba(0,0,0,0.22)] lg:block">
            <Image
              src={motronikElement}
              alt=""
              width={460}
              height={260}
              className="absolute -bottom-12 -right-12 h-44 w-44 object-contain opacity-30"
            />
            <p className="relative text-sm font-bold uppercase tracking-[0.18em] text-[#FFC83D]">
              Validacion manual
            </p>
            <p className="relative mt-2 text-sm leading-relaxed text-[#D7DFEA]">
              La pagina solo muestra el resultado y el codigo. La compra,
              entrega y redencion se confirman directamente con el operador.
            </p>
          </div>
          </div>
        </div>

        <div className="motronik-shell relative mx-auto flex w-full max-w-2xl flex-col items-center overflow-hidden rounded-[32px] border border-white/10 px-4 py-6 shadow-[0_24px_64px_rgba(0,0,0,0.34)] backdrop-blur-[12px] sm:rounded-[36px] sm:px-7 sm:py-8">
          <div className="motronik-shell__flare" />
          <div className="relative w-full max-w-[min(88vw,34rem)]">
            <div className="absolute left-1/2 top-[-0.45rem] z-20 h-0 w-0 -translate-x-1/2 border-x-[22px] border-t-[34px] border-x-transparent border-t-[#FFFFFF] drop-shadow-[0_8px_12px_rgba(0,0,0,0.35)]" />
            <div className="relative aspect-square rounded-full border-[10px] border-[#ECEFF4] bg-[#111827] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.45),inset_0_0_0_1px_rgba(0,0,0,0.35)] sm:border-[14px] sm:p-4">
              <div className="absolute inset-[-1.35rem] rounded-full border border-[#F24A2F]/24" />
              <div
                className="relative h-full w-full rounded-full shadow-[inset_0_0_0_7px_rgba(255,255,255,0.18),inset_0_0_46px_rgba(0,0,0,0.35)] transition-transform duration-[4300ms] ease-[cubic-bezier(0.12,0.74,0.12,1)]"
                style={{
                  background: `conic-gradient(from -90deg, ${wheelGradient})`,
                  transform: `rotate(${rotation}deg)`,
                }}
              >
                <div className="absolute inset-0 rounded-full bg-[repeating-conic-gradient(from_-90deg,rgba(255,255,255,0.18)_0deg,rgba(255,255,255,0.18)_1deg,transparent_1deg,transparent_36deg)]" />
                {wheelSegments.map((segment, index) => {
                  const angle = index * segmentAngle + segmentAngle / 2 - 90;

                  return (
                    <div
                      key={segment.internalCode}
                      className="absolute left-1/2 top-1/2 flex h-1/2 w-[6.2rem] origin-top -translate-x-1/2 items-start justify-center pt-5 text-center sm:w-[7.8rem] sm:pt-8"
                      style={{
                        transform: `rotate(${angle}deg)`,
                        color: segment.textColor,
                      }}
                    >
                      <span className="max-w-[5.4rem] text-[0.56rem] font-black uppercase leading-[1.08] tracking-[0.04em] drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] sm:max-w-[6.8rem] sm:text-[0.72rem]">
                        {segment.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="absolute left-1/2 top-1/2 z-10 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[7px] border-white bg-[#090B10] shadow-[0_16px_42px_rgba(0,0,0,0.42)] sm:h-36 sm:w-36">
                <Image
                  src={motronikLogo}
                  alt="Logo Motronik"
                  width={94}
                  height={94}
                  className="h-20 w-20 object-contain sm:h-24 sm:w-24"
                  priority
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={spinWheel}
            disabled={isSpinning}
            className="motronik-pill motronik-pill--red mt-7 min-h-16 w-full max-w-sm rounded-full px-8 py-4 text-lg font-black uppercase tracking-[0.1em] shadow-[0_18px_42px_rgba(255,77,56,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_52px_rgba(255,77,56,0.32)] active:translate-y-0 disabled:cursor-wait disabled:opacity-70"
          >
            {isSpinning ? "Girando..." : result ? "Girar de nuevo" : "Girar ruleta"}
          </button>

          <div
            className={`mt-5 min-h-[12rem] w-full rounded-lg border px-5 py-5 text-center backdrop-blur ${result ? getResultTone(result.prizeType) : "border-white/10 bg-white/[0.04] text-[#DCE5F2]"}`}
            aria-live="polite"
          >
            {result ? (
              <>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-current/80">
                  Resultado
                </p>
                <h2 className="mt-2 text-3xl font-black uppercase leading-tight sm:text-4xl">
                  {result.label}
                </h2>
                <p className="mx-auto mt-3 max-w-md text-base font-semibold leading-relaxed text-white">
                  {result.isWinner
                    ? "Reclama tu premio en el stand. Valida este resultado con el equipo."
                    : "Muestra este resultado al operador. El equipo validara si aplica un nuevo intento."}
                </p>
                <div className="mx-auto mt-4 w-full max-w-xs rounded-lg border border-white/18 bg-black/28 px-4 py-3">
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-white/62">
                    Codigo de validacion
                  </p>
                  <p className="mt-1 text-3xl font-black tracking-[0.12em] text-white">
                    {result.validationCode}
                  </p>
                </div>
              </>
            ) : (
              <div className="flex h-full min-h-[9rem] flex-col items-center justify-center">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#FFC83D]">
                  Un giro por validacion
                </p>
                <p className="mt-3 max-w-md text-base font-semibold leading-relaxed">
                  Presiona el boton cuando el operador indique que puedes jugar.
                  El resultado quedara visible en pantalla.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
