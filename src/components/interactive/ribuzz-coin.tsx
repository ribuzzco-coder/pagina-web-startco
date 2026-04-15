"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

import { cn } from "@/lib/utils";

type RiBuzzCoinProps = {
  className?: string;
  logoSrc?: string;
  logoAlt?: string;
};

export function RibuzzCoin({
  className,
  logoSrc = "/ribuzz-mark.png",
  logoAlt = "Logo RiBuzz",
}: RiBuzzCoinProps) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const hoverBoost = useMotionValue(0);

  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [18, -18]), {
    stiffness: 210,
    damping: 17,
    mass: 0.72,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-24, 24]), {
    stiffness: 210,
    damping: 17,
    mass: 0.72,
  });
  const translateX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-22, 22]), {
    stiffness: 150,
    damping: 16,
  });
  const translateY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-18, 18]), {
    stiffness: 150,
    damping: 16,
  });

  const glareX = useTransform(pointerX, [-0.5, 0.5], ["24%", "76%"]);
  const glareY = useTransform(pointerY, [-0.5, 0.5], ["18%", "82%"]);
  const haloScale = useSpring(useTransform(hoverBoost, [0, 1], [1, 1.11]), {
    stiffness: 140,
    damping: 18,
  });
  const ringOpacity = useSpring(useTransform(hoverBoost, [0, 1], [0.34, 0.78]), {
    stiffness: 160,
    damping: 16,
  });
  const coinFloatY = useTransform(hoverBoost, [0, 1], [0, -12]);
  const coinDepth = useTransform(pointerX, [-0.5, 0.5], [-6, 6]);

  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.28), rgba(255,255,255,0.08) 18%, transparent 38%)`;

  useEffect(() => {
    hoverBoost.set(1);

    const handleMove = (event: MouseEvent) => {
      const viewportWidth = window.innerWidth || 1;
      const viewportHeight = window.innerHeight || 1;
      const x = event.clientX / viewportWidth - 0.5;
      const y = event.clientY / viewportHeight - 0.5;

      pointerX.set(x);
      pointerY.set(y);
    };

    const handleLeave = () => {
      pointerX.set(0);
      pointerY.set(0);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [hoverBoost, pointerX, pointerY]);

  return (
    <div className={cn("relative mx-auto flex h-[460px] w-full max-w-[620px] items-center justify-center sm:h-[620px]", className)}>
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-[14%] bottom-10 h-18 rounded-full bg-[radial-gradient(circle,rgba(11,239,253,0.12),rgba(230,37,255,0.08)_46%,transparent_72%)] blur-2xl"
        style={{ scale: haloScale }}
      />

      <motion.div
        aria-hidden="true"
        className="absolute h-[440px] w-[440px] rounded-full border border-white/8 bg-[radial-gradient(circle_at_50%_50%,rgba(13,18,31,0.22),rgba(11,11,16,0)_72%)] sm:h-[520px] sm:w-[520px]"
        style={{ opacity: ringOpacity, scale: haloScale }}
      />

      <motion.div
        aria-hidden="true"
        className="absolute h-[350px] w-[350px] rounded-full border border-[#0feffd]/18 sm:h-[420px] sm:w-[420px]"
        style={{
          opacity: ringOpacity,
          rotateZ: useTransform(pointerX, [-0.5, 0.5], [-18, 18]),
          scale: haloScale,
        }}
      />

      <motion.div
        className="relative [perspective:1600px]"
        style={{
          x: translateX,
          y: translateY,
        }}
      >
        <motion.div
          className="relative h-[320px] w-[320px] sm:h-[390px] sm:w-[390px]"
          animate={{
            y: [0, -16, 0],
            rotateZ: [0, 1.1, 0, -1.1, 0],
          }}
          transition={{
            duration: 7.8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{ y: coinFloatY }}
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="absolute inset-[4.5%] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(230,37,255,0.26),rgba(18,20,35,0.96)_54%,rgba(7,9,16,1)_78%)] shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_34px_90px_rgba(0,0,0,0.52),0_0_65px_rgba(230,37,255,0.16)]" />
            <div className="absolute inset-[7.5%] rounded-full border border-white/8 bg-[linear-gradient(145deg,rgba(255,255,255,0.16),rgba(255,255,255,0.02)_26%,rgba(255,255,255,0.02)_70%,rgba(230,37,255,0.08))]" />
            <motion.div
              className="absolute inset-[8.5%] rounded-full"
              style={{ background: glareBackground }}
            />
            <div className="absolute inset-[11%] rounded-full border border-[#0feffd]/16" />
            <div className="absolute inset-[13.5%] rounded-full border border-[#e625ff]/18 shadow-[0_0_40px_rgba(230,37,255,0.18)]" />
            <div className="absolute inset-[9.5%] rounded-full bg-[radial-gradient(circle_at_30%_24%,rgba(255,255,255,0.16),transparent_24%),radial-gradient(circle_at_68%_72%,rgba(15,239,253,0.1),transparent_28%)]" />

            <motion.div
              aria-hidden="true"
              className="absolute inset-[16%] rounded-full border border-white/6"
              style={{
                translateZ: -8,
                rotateZ: useTransform(pointerX, [-0.5, 0.5], [-8, 8]),
              }}
            >
              <div className="absolute left-[20%] top-[42%] h-px w-[60%] bg-[linear-gradient(90deg,transparent,rgba(177,110,255,0.22),transparent)]" />
              <div className="absolute left-[32%] top-[24%] h-[52%] w-px bg-[linear-gradient(180deg,transparent,rgba(15,239,253,0.2),transparent)]" />
              <div className="absolute left-[22%] top-[28%] h-2 w-2 rounded-full bg-[#0feffd]/35 shadow-[0_0_10px_rgba(15,239,253,0.25)]" />
              <div className="absolute right-[24%] top-[34%] h-2 w-2 rounded-full bg-[#e625ff]/35 shadow-[0_0_10px_rgba(230,37,255,0.25)]" />
              <div className="absolute bottom-[24%] left-[46%] h-2 w-2 rounded-full bg-white/24 shadow-[0_0_8px_rgba(255,255,255,0.18)]" />
            </motion.div>

            <motion.div
              className="absolute inset-[18.5%] flex items-center justify-center rounded-full border border-white/8 bg-[radial-gradient(circle_at_50%_48%,rgba(17,21,35,0.96),rgba(9,10,18,0.98)_76%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
              style={{
                translateZ: 26,
                x: coinDepth,
              }}
            >
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_34%_28%,rgba(255,255,255,0.14),transparent_26%),radial-gradient(circle_at_50%_100%,rgba(230,37,255,0.12),transparent_30%)]" />
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={300}
                height={300}
                priority
                className="relative h-[82%] w-[82%] object-contain drop-shadow-[0_0_18px_rgba(230,37,255,0.28)]"
              />
            </motion.div>

            <motion.div
              aria-hidden="true"
              className="absolute inset-[2.5%] rounded-full border border-[#b16eff]/14"
              style={{
                opacity: ringOpacity,
                rotateZ: useTransform(pointerX, [-0.5, 0.5], [-26, 26]),
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
