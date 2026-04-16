"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { AnimatedShaderBackground } from "@/components/ui/animated-shader-background";
import { cn } from "@/lib/utils";

type RibuzzSystemSceneProps = {
  className?: string;
};

gsap.registerPlugin(useGSAP);

export function RibuzzSystemScene({ className }: RibuzzSystemSceneProps) {
  const scopeRef = useRef<HTMLDivElement | null>(null);
  const rocketRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const scope = scopeRef.current;
      const rocket = rocketRef.current;

      if (!scope || !rocket) return;

      gsap.set(rocket, {
        x: 0,
        y: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        transformPerspective: 1400,
        transformOrigin: "48% 54%",
      });

      const handleMove = (event: PointerEvent) => {
        const rect = scope.getBoundingClientRect();
        const px = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const py = ((event.clientY - rect.top) / rect.height) * 2 - 1;

        gsap.to(rocket, {
          x: px * 14,
          y: py * 10,
          rotation: px * 3.5,
          rotationY: px * 12,
          rotationX: -py * 10,
          duration: 0.5,
          ease: "power3.out",
        });
      };

      const handleLeave = () => {
        gsap.to(rocket, {
          x: 0,
          y: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          duration: 0.7,
          ease: "power3.out",
        });
      };

      scope.addEventListener("pointermove", handleMove);
      scope.addEventListener("pointerleave", handleLeave);

      return () => {
        scope.removeEventListener("pointermove", handleMove);
        scope.removeEventListener("pointerleave", handleLeave);
      };
    },
    { scope: scopeRef },
  );

  return (
    <div
      ref={scopeRef}
      className={cn(
        "relative h-[360px] w-full overflow-hidden rounded-[36px] border border-white/8 bg-[linear-gradient(180deg,rgba(8,10,16,0.99),rgba(6,8,14,0.99))] shadow-[0_30px_80px_rgba(0,0,0,0.34)] sm:h-[430px] lg:h-[520px]",
        className,
      )}
    >
      <AnimatedShaderBackground />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[120px] w-[220px] -translate-x-1/2 translate-y-[104px] rounded-full bg-[radial-gradient(circle,rgba(9,14,24,0.64),transparent_72%)] blur-[20px] sm:h-[150px] sm:w-[280px]" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div
          ref={rocketRef}
          className="relative -translate-x-[20px] -translate-y-[2px] [transform-style:preserve-3d] sm:-translate-x-[26px] lg:-translate-x-[30px]"
        >
          <div className="absolute inset-0 translate-x-[-16px] translate-y-[10px] scale-[1.03] blur-[16px] opacity-24 mix-blend-screen">
            <Image
              src="/images/services-rocket.png"
              alt=""
              aria-hidden="true"
              width={473}
              height={797}
              className="h-auto w-[190px] sm:w-[240px] lg:w-[290px]"
            />
          </div>

          <div className="absolute inset-0 translate-x-[8px] translate-y-[-6px] scale-[1.01] opacity-18 mix-blend-screen [filter:hue-rotate(140deg)_saturate(1.2)]">
            <Image
              src="/images/services-rocket.png"
              alt=""
              aria-hidden="true"
              width={473}
              height={797}
              className="h-auto w-[190px] sm:w-[240px] lg:w-[290px]"
            />
          </div>

          <div className="absolute inset-0 translate-x-[3px] translate-y-[2px] scale-[0.998] opacity-18 mix-blend-multiply">
            <Image
              src="/images/services-rocket.png"
              alt=""
              aria-hidden="true"
              width={473}
              height={797}
              className="h-auto w-[190px] brightness-[0.62] contrast-125 sm:w-[240px] lg:w-[290px]"
            />
          </div>

          <div className="relative z-10">
            <Image
              src="/images/services-rocket.png"
              alt="Cohete RiBuzz"
              width={473}
              height={797}
              priority
              className="h-auto w-[190px] drop-shadow-[0_18px_52px_rgba(230,37,255,0.16)] sm:w-[240px] lg:w-[290px]"
            />
          </div>

          <div className="pointer-events-none absolute left-[24%] top-[10%] z-20 h-[46%] w-[34%] rounded-[999px] bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.01))] blur-[14px] opacity-52 mix-blend-screen" />
        </div>
      </div>
    </div>
  );
}
