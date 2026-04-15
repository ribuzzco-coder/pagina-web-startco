"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

import { cn } from "@/lib/utils";

type ThreejsParticlesWavesProps = {
  className?: string;
  showControls?: boolean;
  backgroundMode?: boolean;
  showHint?: boolean;
  initialDensity?: number;
  initialSpeed?: number;
  initialAmplitude?: number;
  initialSeparation?: number;
  initialParticleColor?: string;
  initialBackgroundColor?: string;
};

export function ThreejsParticlesWaves({
  className,
  showControls = false,
  backgroundMode = false,
  showHint = true,
  initialDensity = 38,
  initialSpeed = 0.06,
  initialAmplitude = 55,
  initialSeparation = 105,
  initialParticleColor = "#ffffff",
  initialBackgroundColor = "#090b14",
}: ThreejsParticlesWavesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const particlesRef = useRef<THREE.Sprite[]>([]);
  const materialRef = useRef<THREE.SpriteMaterial | null>(null);
  const animationRef = useRef<number | null>(null);
  const countRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const halfRef = useRef({ x: 0, y: 0 });

  const [density, setDensity] = useState(initialDensity);
  const [speed, setSpeed] = useState(initialSpeed);
  const [amplitude, setAmplitude] = useState(initialAmplitude);
  const [separation, setSeparation] = useState(initialSeparation);
  const [particleColor, setParticleColor] = useState(initialParticleColor);
  const [backgroundColor, setBackgroundColor] = useState(initialBackgroundColor);

  const presets = useMemo(
    () => [
      { particles: "#ffffff", background: "#090b14" },
      { particles: "#E625FF", background: "#0B0B10" },
      { particles: "#0FEFFD", background: "#111827" },
      { particles: "#FFD93D", background: "#16213E" },
      { particles: "#A8E6CF", background: "#2C3E50" },
    ],
    [],
  );

  const fallbackStars = useMemo(
    () =>
      Array.from({ length: 120 }, (_, index) => ({
        id: index,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 3 + Math.random() * 7,
        opacity: 0.28 + Math.random() * 0.58,
        duration: 6 + Math.random() * 9,
        delay: Math.random() * 8,
        driftX: -18 + Math.random() * 36,
        driftY: -14 + Math.random() * 28,
      })),
    [],
  );

  const createParticleMaterial = (color: string) => {
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const context = canvas.getContext("2d");

    if (!context) {
      return new THREE.SpriteMaterial({ transparent: true });
    }

    context.clearRect(0, 0, 32, 32);
    context.fillStyle = color;
    context.beginPath();
    context.arc(16, 16, 12, 0, Math.PI * 2, true);
    context.fill();

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;

    return new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
    });
  };

  const recreateParticles = () => {
    if (!sceneRef.current || !materialRef.current) {
      return;
    }

    particlesRef.current.forEach((particle) => {
      sceneRef.current?.remove(particle);
    });
    particlesRef.current = [];

    for (let ix = 0; ix < density; ix++) {
      for (let iy = 0; iy < density; iy++) {
        const particle = new THREE.Sprite(materialRef.current);
        particle.position.x = ix * separation - (density * separation) / 2;
        particle.position.z = iy * separation - (density * separation) / 2;
        particle.position.y = -400;
        particle.scale.setScalar(10);

        particlesRef.current.push(particle);
        sceneRef.current.add(particle);
      }
    }
  };

  useEffect(() => {
    if (!shellRef.current) {
      return;
    }

    const shell = shellRef.current;

    if (backgroundMode) {
      const updateParallax = (clientX: number, clientY: number) => {
        const rect = shell.getBoundingClientRect();
        const relativeX = clientX - rect.left - rect.width / 2;
        const relativeY = clientY - rect.top - rect.height / 2;
        shell.style.setProperty("--hero-parallax-x", `${relativeX * 0.03}px`);
        shell.style.setProperty("--hero-parallax-y", `${relativeY * 0.024}px`);
      };

      const handleMouseMove = (event: MouseEvent) => {
        updateParallax(event.clientX, event.clientY);
      };

      const handleTouchMove = (event: TouchEvent) => {
        if (event.touches.length !== 1) {
          return;
        }

        const touch = event.touches[0];
        updateParallax(touch.clientX, touch.clientY);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("touchmove", handleTouchMove, { passive: false });

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("touchmove", handleTouchMove);
      };
    }

    if (!containerRef.current) {
      return;
    }

    const container = containerRef.current;
    const initialWidth = shell.clientWidth;
    const initialHeight = shell.clientHeight || container.clientHeight || 360;
    halfRef.current = { x: initialWidth / 2, y: initialHeight / 2 };

    const camera = new THREE.PerspectiveCamera(50, initialWidth / initialHeight, 1, 10000);
    camera.position.set(0, 800, 1000);
    cameraRef.current = camera;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(initialWidth, initialHeight);
    renderer.setClearColor(new THREE.Color(backgroundColor), 1);
    rendererRef.current = renderer;

    container.appendChild(renderer.domElement);

    materialRef.current = createParticleMaterial(particleColor);
    recreateParticles();

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = event.clientX - halfRef.current.x;
      mouseRef.current.y = event.clientY - halfRef.current.y;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length !== 1) {
        return;
      }

      const touch = event.touches[0];
      mouseRef.current.x = touch.pageX - halfRef.current.x;
      mouseRef.current.y = touch.pageY - halfRef.current.y;
    };

    const handleResize = () => {
      if (!shellRef.current || !cameraRef.current || !rendererRef.current) {
        return;
      }

      const width = shellRef.current.clientWidth;
      const height = shellRef.current.clientHeight || 360;
      halfRef.current = { x: width / 2, y: height / 2 };
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(shell);

    const animate = () => {
      if (!cameraRef.current || !rendererRef.current || !sceneRef.current) {
        return;
      }

      animationRef.current = window.requestAnimationFrame(animate);

      cameraRef.current.position.x += (mouseRef.current.x - cameraRef.current.position.x) * 0.05;
      cameraRef.current.position.y += (-mouseRef.current.y - cameraRef.current.position.y) * 0.05;
      cameraRef.current.lookAt(sceneRef.current.position);

      let particleIndex = 0;
      for (let ix = 0; ix < density; ix++) {
        for (let iy = 0; iy < density; iy++) {
          const particle = particlesRef.current[particleIndex++];
          if (!particle) {
            continue;
          }

          particle.position.y =
            -400 +
            Math.sin((ix + countRef.current) * 0.3) * amplitude +
            Math.sin((iy + countRef.current) * 0.5) * amplitude;

          const scale =
            (Math.sin((ix + countRef.current) * 0.3) + 1) * 2 +
            (Math.sin((iy + countRef.current) * 0.5) + 1) * 2;
          particle.scale.setScalar(scale * 2);
        }
      }

      rendererRef.current.render(sceneRef.current, cameraRef.current);
      countRef.current += speed;
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
      }
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();

      particlesRef.current.forEach((particle) => {
        scene.remove(particle);
      });
      particlesRef.current = [];

      materialRef.current?.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [backgroundMode, amplitude, backgroundColor, density, particleColor, separation, speed]);

  useEffect(() => {
    if (backgroundMode) {
      return;
    }

    if (rendererRef.current) {
      rendererRef.current.setClearColor(new THREE.Color(backgroundColor), 1);
    }
  }, [backgroundColor, backgroundMode]);

  return (
    <div
      ref={shellRef}
      className={cn(
        "relative w-full overflow-hidden bg-black",
        backgroundMode && "h-full min-h-0",
        !backgroundMode && "rounded-[28px] border border-white/10",
        className,
      )}
    >
      <div
        ref={containerRef}
        className={cn(
          "w-full",
          backgroundMode
            ? "pointer-events-none absolute inset-0 h-full min-h-0 opacity-0"
            : "h-full min-h-[360px]",
        )}
      />

      {backgroundMode ? (
        <div className="particle-starfield pointer-events-none absolute inset-0 z-[3]">
          {fallbackStars.map((star) => (
            <span
              key={star.id}
              className="particle-star"
              style={
                {
                  left: `${star.left}%`,
                  top: `${star.top}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  opacity: star.opacity,
                  animationDuration: `${star.duration}s`,
                  animationDelay: `-${star.delay}s`,
                  "--star-drift-x": `${star.driftX}px`,
                  "--star-drift-y": `${star.driftY}px`,
                } as CSSProperties
              }
            />
          ))}
          {fallbackStars.slice(0, 20).map((star) => (
            <span
              key={`glow-${star.id}`}
              className="particle-star particle-star--glow"
              style={
                {
                  left: `${star.left}%`,
                  top: `${star.top}%`,
                  width: `${star.size * 3.2}px`,
                  height: `${star.size * 3.2}px`,
                  opacity: Math.min(star.opacity * 0.42, 0.34),
                  animationDuration: `${star.duration * 1.2}s`,
                  animationDelay: `-${star.delay}s`,
                  "--star-drift-x": `${star.driftX * 0.65}px`,
                  "--star-drift-y": `${star.driftY * 0.65}px`,
                } as CSSProperties
              }
            />
          ))}
        </div>
      ) : null}

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_10%_15%,rgba(230,37,255,0.16),transparent_20%),radial-gradient(circle_at_85%_18%,rgba(15,239,253,0.14),transparent_22%)]" />

      {showHint ? (
        <div className="pointer-events-none absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[#C7CBD6] backdrop-blur-sm">
          Mueve el cursor para cambiar la cámara
        </div>
      ) : null}

      {showControls ? (
        <div className="absolute right-4 top-4 z-10 w-56 rounded-[20px] border border-white/10 bg-black/70 p-4 text-white backdrop-blur-md">
          <div className="mb-3">
            <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C7CBD6]">
              Densidad
            </label>
            <input
              type="range"
              min="10"
              max="80"
              value={density}
              onChange={(event) => setDensity(Number.parseInt(event.target.value, 10))}
              className="w-full"
            />
          </div>

          <div className="mb-3">
            <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C7CBD6]">
              Velocidad
            </label>
            <input
              type="range"
              min="0.01"
              max="0.3"
              step="0.01"
              value={speed}
              onChange={(event) => setSpeed(Number.parseFloat(event.target.value))}
              className="w-full"
            />
          </div>

          <div className="mb-3">
            <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C7CBD6]">
              Altura
            </label>
            <input
              type="range"
              min="10"
              max="150"
              value={amplitude}
              onChange={(event) => setAmplitude(Number.parseInt(event.target.value, 10))}
              className="w-full"
            />
          </div>

          <div className="mb-3">
            <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C7CBD6]">
              Espaciado
            </label>
            <input
              type="range"
              min="50"
              max="200"
              value={separation}
              onChange={(event) => setSeparation(Number.parseInt(event.target.value, 10))}
              className="w-full"
            />
          </div>

          <div className="mb-3 grid grid-cols-2 gap-3">
            <label className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C7CBD6]">
              Partículas
              <input
                type="color"
                value={particleColor}
                onChange={(event) => setParticleColor(event.target.value)}
                className="mt-2 h-8 w-full cursor-pointer rounded border-none bg-transparent"
              />
            </label>
            <label className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C7CBD6]">
              Fondo
              <input
                type="color"
                value={backgroundColor}
                onChange={(event) => setBackgroundColor(event.target.value)}
                className="mt-2 h-8 w-full cursor-pointer rounded border-none bg-transparent"
              />
            </label>
          </div>

          <div className="grid grid-cols-5 gap-1">
            {presets.map((preset) => (
              <button
                key={`${preset.particles}-${preset.background}`}
                type="button"
                onClick={() => {
                  setParticleColor(preset.particles);
                  setBackgroundColor(preset.background);
                }}
                className="h-6 rounded border border-white/15 transition hover:scale-105 hover:border-white/40"
                style={{
                  background: `linear-gradient(90deg, ${preset.particles} 50%, ${preset.background} 50%)`,
                }}
                aria-label="Aplicar preset de color"
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
