"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PhoneMockup } from "./phone-mockup";
import { NfcCard3d } from "./nfc-card-3d";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);

export function Nfc3dShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Create master timeline that repeats
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

      // Initial state
      gsap.set(".nfc-floating-card", {
        x: -380,
        y: 60,
        z: 200,
        rotationX: 25,
        rotationY: 45,
        rotationZ: -10,
        scale: 1.1,
      });

      gsap.set(".nfc-profile-ui", { opacity: 0 });
      gsap.set(".nfc-scan-wave", { opacity: 0, scale: 0.5 });
      gsap.set(".nfc-phone-container", { rotationX: 8, rotationY: -12, z: 0 });

      // 1. Card floats towards the phone
      tl.to(".nfc-floating-card", {
        x: -160,
        y: 10,
        z: 60,
        rotationX: 10,
        rotationY: 15,
        rotationZ: -2,
        scale: 1,
        duration: 1.8,
        ease: "power3.inOut",
      });

      // 2. Card makes a small dipping "tap" motion
      tl.to(".nfc-floating-card", {
        x: -140,
        y: 15,
        z: 30,
        rotationX: 5,
        duration: 0.4,
        ease: "power2.in",
      }).to(".nfc-floating-card", {
        x: -150,
        y: 5,
        z: 45,
        duration: 0.6,
        ease: "power2.out",
      });

      // 3. NFC Wave detection on phone
      tl.to(
        ".nfc-scan-wave",
        {
          opacity: 1,
          scale: 2.2,
          duration: 0.8,
          ease: "expo.out",
        },
        "-=0.7"
      ).to(
        ".nfc-scan-wave",
        {
          opacity: 0,
          scale: 3.5,
          duration: 0.5,
          ease: "power1.in",
        },
        "-=0.2"
      );

      // 4. Reveal the digital profile UI
      tl.to(".nfc-profile-ui", { opacity: 1, duration: 0.1 }, "-=0.3");

      tl.fromTo(
        ".nfc-ui-avatar",
        { scale: 0.5, opacity: 0, y: 15 },
        { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.5)" }
      )
        .fromTo(
          [".nfc-ui-name", ".nfc-ui-role"],
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(
          ".nfc-ui-btn",
          { y: 20, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "back.out(1.2)",
          },
          "-=0.3"
        );

      // 5. Card floats slightly as a resting state while user reads
      tl.to(
        ".nfc-floating-card",
        {
          y: -10,
          rotationY: 20,
          duration: 2.5,
          ease: "sine.inOut",
        },
        "-=1.5"
      );

      // Hover / Perspective Parallax
      const handleMouseMove = (e: MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;

        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;

        // Move the whole phone and card block
        gsap.to(".nfc-phone-container", {
          rotationY: -12 + px * 15,
          rotationX: 8 - py * 15,
          duration: 1,
          ease: "power2.out",
        });

        // Move ambient glow behind
        gsap.to(".nfc-3d-scene-glow", {
          x: px * 120,
          y: py * 120,
          duration: 1.5,
          ease: "power2.out",
        });
      };

      // Only run mousemove on desktop
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      if (!isTouch) {
        window.addEventListener("mousemove", handleMouseMove);
      }

      return () => {
        if (!isTouch) {
          window.removeEventListener("mousemove", handleMouseMove);
        }
      };
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,16,24,0.96),rgba(22,26,39,0.82))] py-20 lg:py-28 [perspective:1800px]"
      )}
    >
      {/* Background glow that follows mouse */}
      <div className="nfc-3d-scene-glow pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E625FF]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#0FEFFD]/10 blur-[120px]" />

      {/* Main 3D Container */}
      <div className="nfc-phone-container relative z-10 [transform-style:preserve-3d]">
        {/* The Phone */}
        <PhoneMockup />

        {/* The Card - Positioned relative to the Phone's center so they rotate together in 3D */}
        <div className="absolute left-1/2 top-1/2 z-20 -translate-y-1/2">
          <NfcCard3d
            frontImage="/images/nfc-front.png"
            backImage="/images/nfc-back.png"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 inset-x-6 mx-auto max-w-lg rounded-[20px] border border-white/8 bg-white/[0.03] px-5 py-4 text-center text-sm leading-relaxed text-[#98A0B3] backdrop-blur-md">
        Acercas la tarjeta, el celular la detecta y en segundos abre la información clave del perfil.
      </div>
    </div>
  );
}
