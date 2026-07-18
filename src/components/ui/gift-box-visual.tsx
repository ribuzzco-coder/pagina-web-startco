"use client";

import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { cn } from "@/lib/utils";

export function GiftIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.25 10.25h13.5v8.5a1.25 1.25 0 0 1-1.25 1.25H6.5a1.25 1.25 0 0 1-1.25-1.25z" />
      <path d="M4 10.25h16v-2.1A1.15 1.15 0 0 0 18.85 7H5.15A1.15 1.15 0 0 0 4 8.15z" />
      <path d="M12 7v13" />
      <path d="M12 7c-.15-2.45-1.2-3.85-3-3.85-1.35 0-2.25.93-2.25 2.03 0 1.18.88 1.82 2.18 1.82z" />
      <path d="M12 7c.15-2.45 1.2-3.85 3-3.85 1.35 0 2.25.93 2.25 2.03 0 1.18-.88 1.82-2.18 1.82z" />
    </svg>
  );
}

export function GiftBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_10px_22px_rgba(0,0,0,0.18),0_0_24px_rgba(105,57,226,0.16)] backdrop-blur-sm",
        className,
      )}
    >
      <GiftIcon className="h-6 w-6 text-[#e4dff7]" />
    </div>
  );
}

export type BoxVisualProps = {
  isUnlocked: boolean;
  className?: string;
};

export function BoxVisual({ isUnlocked, className }: BoxVisualProps) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [16, -16]), {
    stiffness: 180,
    damping: 20,
    mass: 0.7,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-20, 20]), {
    stiffness: 180,
    damping: 20,
    mass: 0.7,
  });
  const liftX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-14, 14]), {
    stiffness: 120,
    damping: 18,
  });
  const liftY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-10, 10]), {
    stiffness: 120,
    damping: 18,
  });
  const glareX = useTransform(pointerX, [-0.5, 0.5], ["24%", "76%"]);
  const glareY = useTransform(pointerY, [-0.5, 0.5], ["16%", "78%"]);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.18), rgba(255,255,255,0.06) 18%, transparent 42%)`;

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    pointerX.set(x);
    pointerY.set(y);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.div
      className={cn(
        "relative mx-auto h-[238px] w-[264px] [perspective:1700px] sm:h-[264px] sm:w-[320px]",
        className,
      )}
      style={{ x: liftX, y: liftY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="absolute inset-x-2 top-6 h-[162px] rounded-full bg-[radial-gradient(circle,rgba(105,57,226,0.38),rgba(147,89,255,0.16)_42%,transparent_78%)] blur-[46px]" />
      <div className="absolute inset-x-12 bottom-3 h-8 rounded-full bg-[radial-gradient(circle,rgba(105,57,226,0.32),rgba(115,74,255,0.12)_55%,transparent_82%)] blur-xl" />

      <div className="absolute left-1/2 top-[118px] z-[6] h-12 w-12 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(105,57,226,0.34),transparent_70%)] blur-lg" />

      <motion.div
        className="relative h-full w-full overflow-hidden [transform-style:preserve-3d]"
        style={{ rotateX, rotateY }}
      >
        <div className="absolute inset-x-[28px] bottom-[52px] z-[3] h-[132px] [transform-style:preserve-3d]">
          <div className="absolute inset-0 rounded-[24px] border border-[#a27df0]/34 bg-[linear-gradient(180deg,rgba(67,69,116,0.9),rgba(39,31,70,0.95)_42%,rgba(20,16,37,0.98))] shadow-[0_34px_84px_rgba(0,0,0,0.42),0_0_54px_rgba(165,96,255,0.14)] [transform:translateZ(0px)] backdrop-blur-xl" />
          <div className="absolute -right-[16px] top-[14px] h-[104px] w-[24px] rounded-r-[18px] bg-[linear-gradient(180deg,rgba(52,47,88,0.95),rgba(18,15,32,1))] [transform:rotateY(66deg)]" />
          <div className="absolute -left-[14px] top-[18px] h-[96px] w-[20px] rounded-l-[16px] bg-[linear-gradient(180deg,rgba(124,121,177,0.42),rgba(36,31,64,0.95))] [transform:rotateY(-66deg)]" />
          <div className="absolute -bottom-[12px] left-[18px] right-[18px] h-[24px] rounded-b-[18px] bg-[linear-gradient(180deg,rgba(22,18,36,1),rgba(10,8,18,1))] [transform:rotateX(-70deg)]" />
          <div className="absolute inset-[8px] rounded-[18px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04)_30%,rgba(255,255,255,0.03)_64%,rgba(0,0,0,0.18))] [transform:translateZ(8px)]" />
          <div className="absolute left-1/2 top-[7px] bottom-[7px] z-[10] w-[30px] -translate-x-1/2 rounded-[14px] bg-[linear-gradient(180deg,rgba(155,118,255,0.38),rgba(105,57,226,0.18)_48%,rgba(49,28,96,0.42))] shadow-[inset_1px_0_rgba(255,255,255,0.14),inset_-1px_0_rgba(0,0,0,0.22)] [transform:translateZ(18px)]" />
          <div className="absolute inset-x-[9px] top-[48px] z-[9] h-[28px] rounded-[14px] bg-[linear-gradient(90deg,rgba(80,52,151,0.28),rgba(164,121,255,0.34)_50%,rgba(80,52,151,0.28))] shadow-[inset_0_1px_rgba(255,255,255,0.14)] [transform:translateZ(16px)]" />
          <motion.div
            className="absolute inset-[10px] rounded-[18px]"
            style={{ background: glareBackground, translateZ: 20 }}
          />
          <div className="absolute inset-x-[22px] top-[-36px] z-[4] h-[138px] overflow-visible [transform:translateZ(11px)]">
            <motion.div
              className="pointer-events-none absolute left-1/2 top-[10px] flex -translate-x-1/2 items-end gap-3"
              initial={false}
              animate={isUnlocked ? { y: 0, opacity: 1 } : { y: 26, opacity: 0 }}
              transition={{ duration: 0.62, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.span
                className="block h-[94px] w-[66px] rotate-[-8deg] overflow-hidden rounded-[14px] border border-[#785FDD]/18 bg-[linear-gradient(180deg,rgba(18,24,36,0.98),rgba(8,12,20,0.98))] shadow-[0_0_18px_rgba(120,95,221,0.1)]"
                initial={false}
                animate={isUnlocked ? { y: 0, rotateZ: -8 } : { y: 20, rotateZ: -4 }}
                transition={{ duration: 0.62, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src="/regalo-iman-portada.png"
                  alt=""
                  width={66}
                  height={94}
                  className="h-full w-full object-cover object-top"
                />
              </motion.span>
              <motion.span
                className="block h-[100px] w-[70px] rotate-[6deg] overflow-hidden rounded-[14px] border border-[#6939E2]/18 bg-[linear-gradient(180deg,rgba(31,20,39,0.98),rgba(14,10,19,0.98))] shadow-[0_0_18px_rgba(105,57,226,0.12)]"
                initial={false}
                animate={isUnlocked ? { y: -6, rotateZ: 6 } : { y: 22, rotateZ: 3 }}
                transition={{ duration: 0.68, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src="/regalo-oferta-portada.png"
                  alt=""
                  width={70}
                  height={100}
                  className="h-full w-full object-cover object-top"
                />
              </motion.span>
            </motion.div>
          </div>
          <div className="absolute inset-x-[30px] bottom-[18px] h-[42px] rounded-full bg-[radial-gradient(circle,rgba(182,95,255,0.26),rgba(105,57,226,0.08)_58%,transparent_82%)] blur-xl [transform:translateZ(10px)]" />
          <GiftBadge className="absolute left-1/2 top-[38px] z-[14] h-12 w-12 -translate-x-1/2 [transform:translateZ(28px)]" />
        </div>

      </motion.div>
    </motion.div>
  );
}
