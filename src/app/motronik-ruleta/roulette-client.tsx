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
    color: "#0B0D12",
    textColor: "#F8FAFC",
  },
  {
    internalCode: "FREE_PRODUCT_1",
    label: "Producto gratis",
    shortLabel: "Gratis",
    prizeType: "free-product",
    isWinner: true,
    color: "#9F2119",
    textColor: "#FFFFFF",
  },
  {
    internalCode: "NO_PRIZE_2",
    label: "Intentalo de nuevo",
    shortLabel: "Otra vez",
    prizeType: "none",
    isWinner: false,
    color: "#171B24",
    textColor: "#F7FAFF",
  },
  {
    internalCode: "DISCOUNT_5_1",
    label: "5% de descuento",
    shortLabel: "5%",
    prizeType: "discount",
    isWinner: true,
    color: "#25B8FF",
    textColor: "#06121C",
  },
  {
    internalCode: "SURPRISE_GIFT_1",
    label: "Regalo sorpresa",
    shortLabel: "Regalo",
    prizeType: "surprise",
    isWinner: true,
    color: "#153B54",
    textColor: "#F3FAFF",
  },
  {
    internalCode: "NO_PRIZE_3",
    label: "Sigue intentando",
    shortLabel: "Sigue",
    prizeType: "none",
    isWinner: false,
    color: "#111318",
    textColor: "#F7FAFF",
  },
  {
    internalCode: "FREE_PRODUCT_2",
    label: "Producto gratis",
    shortLabel: "Gratis",
    prizeType: "free-product",
    isWinner: true,
    color: "#7F1715",
    textColor: "#FFFFFF",
  },
  {
    internalCode: "NO_PRIZE_4",
    label: "Intentalo de nuevo",
    shortLabel: "Otra vez",
    prizeType: "none",
    isWinner: false,
    color: "#222733",
    textColor: "#F7FAFF",
  },
  {
    internalCode: "DISCOUNT_5_2",
    label: "5% de descuento",
    shortLabel: "5%",
    prizeType: "discount",
    isWinner: true,
    color: "#1C98D8",
    textColor: "#F7FBFF",
  },
  {
    internalCode: "SURPRISE_GIFT_2",
    label: "Regalo sorpresa",
    shortLabel: "Regalo",
    prizeType: "surprise",
    isWinner: true,
    color: "#0E2C42",
    textColor: "#FFFFFF",
  },
];

const segmentAngle = 360 / wheelSegments.length;

const prizeSummary = [
  ["40%", "Sin premio"],
  ["20%", "Producto gratis"],
  ["20%", "5% descuento"],
  ["20%", "Regalo sorpresa"],
] as const;

function createValidationCode() {
  return `MR-${Math.floor(1000 + Math.random() * 9000)}`;
}

function getResultTone(prizeType: PrizeType) {
  if (prizeType === "none") {
    return "border-white/14 bg-white/[0.04] text-[#D9E2EF]";
  }

  if (prizeType === "discount") {
    return "border-[#25B8FF]/50 bg-[#25B8FF]/12 text-[#BFEAFF]";
  }

  if (prizeType === "surprise") {
    return "border-[#25B8FF]/35 bg-[#153B54]/24 text-[#D8F4FF]";
  }

  return "border-[#C43B2F]/55 bg-[#9F2119]/16 text-[#FFD3CA]";
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

      <section className="relative mx-auto grid min-h-[calc(100vh-76px)] w-full max-w-[88rem] items-center gap-5 px-4 py-5 sm:px-6 lg:grid-cols-[0.58fr_1.42fr] lg:px-8 lg:py-4">
        <div className="motronik-shell relative overflow-hidden rounded-[24px] border border-white/10 px-5 py-6 text-center shadow-[0_24px_64px_rgba(0,0,0,0.34)] backdrop-blur-[12px] sm:px-7 sm:py-7 lg:text-left">
          <div className="motronik-shell__flare" />
          <div className="relative flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-4">
              <span className="motronik-logo-ring grid h-20 w-20 shrink-0 place-items-center rounded-full border shadow-[0_18px_40px_rgba(0,0,0,0.32)] sm:h-24 sm:w-24">
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
                <p className="text-xs font-black uppercase tracking-[0.26em] text-[#25B8FF]">
                  Activacion Motronik
                </p>
              </div>
            </div>

            <h1 className="mt-5 w-full text-4xl font-black uppercase leading-[0.96] tracking-[0.02em] text-[#F5F7FA] sm:text-5xl lg:text-[2.75rem] xl:text-[3.25rem]">
              <span className="block">Ruleta</span>
              <span className="block text-[#FF7A63]">Motronik</span>
            </h1>

            <p className="mt-4 max-w-xl text-base font-semibold leading-relaxed text-[#E9EEF7]">
              Gira una vez y presenta el resultado al equipo Motronik para
              validar tu premio o beneficio.
            </p>

            <div className="mt-4 grid w-full max-w-xl grid-cols-2 gap-3 lg:grid-cols-1 xl:grid-cols-2">
              {prizeSummary.map(([value, label]) => (
                <div
                  key={label}
                  className="motronik-card relative overflow-hidden rounded-[16px] border px-4 py-3 text-center"
                >
                  <span className="motronik-neon-edge" />
                  <p className="relative text-2xl font-black text-white">{value}</p>
                  <p className="mt-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#AEB8C8]">
                    {label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

        <div className="motronik-shell relative mx-auto flex w-full max-w-5xl flex-col items-center gap-5 overflow-hidden rounded-[24px] border border-white/10 px-5 py-6 shadow-[0_24px_64px_rgba(0,0,0,0.34)] backdrop-blur-[12px] sm:px-7 sm:py-7 lg:flex-row lg:justify-center lg:gap-7">
          <div className="motronik-shell__flare" />
          <div className="motronik-roulette-stage relative">
            <div className="absolute left-1/2 top-[-0.55rem] z-20 h-0 w-0 -translate-x-1/2 border-x-[20px] border-t-[34px] border-x-transparent border-t-[#F5F7FA] drop-shadow-[0_8px_12px_rgba(0,0,0,0.42)]" />
            <div className="motronik-roulette-frame relative rounded-full border-[10px] border-[#F5F7FA] bg-[#0C0F15] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.48),0_0_44px_rgba(255,77,56,0.14),0_0_54px_rgba(37,184,255,0.1),inset_0_0_0_1px_rgba(255,255,255,0.22)] sm:border-[14px] sm:p-4">
              <div className="absolute inset-[-1.2rem] rounded-full border border-[#25B8FF]/20" />
              <div className="absolute inset-[-0.45rem] rounded-full border border-white/10" />
              <div
                className="relative h-full w-full rounded-full shadow-[inset_0_0_0_8px_rgba(255,255,255,0.14),inset_0_0_46px_rgba(0,0,0,0.42)] transition-transform duration-[4300ms] ease-[cubic-bezier(0.12,0.74,0.12,1)]"
                style={{
                  background: `conic-gradient(from -90deg, ${wheelGradient})`,
                  transform: `rotate(${rotation}deg)`,
                }}
              >
                <div className="absolute inset-0 rounded-full bg-[repeating-conic-gradient(from_-90deg,rgba(255,255,255,0.2)_0deg,rgba(255,255,255,0.2)_1deg,transparent_1deg,transparent_36deg)]" />
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
                      <span className="max-w-[5.2rem] text-[0.58rem] font-black uppercase leading-[1.08] tracking-[0.05em] drop-shadow-[0_1px_2px_rgba(0,0,0,0.62)] sm:max-w-[6.4rem] sm:text-[0.72rem]">
                        {segment.shortLabel}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="absolute left-1/2 top-1/2 z-10 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[7px] border-[#ff4d38]/70 bg-[linear-gradient(180deg,#FFFFFF,#EEF3F8)] shadow-[0_16px_42px_rgba(0,0,0,0.46),0_0_24px_rgba(255,77,56,0.2),0_0_34px_rgba(37,184,255,0.12)] sm:h-36 sm:w-36">
                <div className="absolute inset-2 rounded-full border border-[#101722]/10" />
                <Image
                  src={motronikLogo}
                  alt="Logo Motronik"
                  width={94}
                  height={94}
                  className="relative h-20 w-20 object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.22)] sm:h-24 sm:w-24"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="relative z-10 flex w-full max-w-sm flex-col items-center lg:max-w-[20rem]">
            <button
              type="button"
              onClick={spinWheel}
              disabled={isSpinning}
              className="min-h-14 w-full rounded-full border border-[#ff4d38]/45 bg-[linear-gradient(180deg,rgba(255,77,56,0.2),rgba(127,23,21,0.28))] px-7 py-3 text-base font-black uppercase tracking-[0.12em] text-[#FFD6D0] shadow-[0_18px_42px_rgba(255,77,56,0.18)] transition hover:-translate-y-0.5 hover:border-[#25B8FF]/50 hover:shadow-[0_24px_52px_rgba(255,77,56,0.26)] active:translate-y-0 disabled:cursor-wait disabled:opacity-70"
            >
              {isSpinning ? "Girando..." : result ? "Girar de nuevo" : "Girar ruleta"}
            </button>

            <div
              className={`mt-4 min-h-[11rem] w-full rounded-[22px] border px-5 py-5 text-center backdrop-blur ${result ? getResultTone(result.prizeType) : "border-white/10 bg-white/[0.04] text-[#DCE5F2]"}`}
              aria-live="polite"
            >
            {result ? (
              <>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-current/80">
                  Resultado
                </p>
                <h2 className="mt-2 text-3xl font-black uppercase leading-tight tracking-[0.02em] sm:text-4xl">
                  {result.label}
                </h2>
                <p className="mx-auto mt-3 max-w-md text-sm font-semibold leading-relaxed text-white sm:text-base">
                  {result.isWinner
                    ? "Presenta este resultado al equipo para reclamar tu beneficio."
                    : "Muestra este resultado al operador para validar el giro."}
                </p>
                <div className="mx-auto mt-4 w-full max-w-xs rounded-[18px] border border-white/18 bg-black/28 px-4 py-3">
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
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#25B8FF]">
                  Un giro por validacion
                </p>
                <p className="mt-3 max-w-md text-sm font-semibold leading-relaxed sm:text-base">
                  Presiona el boton cuando el operador indique que puedes jugar.
                </p>
              </div>
            )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
