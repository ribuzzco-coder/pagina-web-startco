"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// RiBuzz brand colors
const COLORS = ["#E625FF", "#0FEFFD", "#B16EFF", "#ffffff"];

function pickColor(ix: number, iy: number, density: number): string {
  const t = (ix + iy) / (density * 2);
  if (t < 0.25) return COLORS[0];
  if (t < 0.5)  return COLORS[2];
  if (t < 0.75) return COLORS[1];
  return COLORS[3];
}

function makeSpriteMaterial(color: string): THREE.SpriteMaterial {
  const canvas = document.createElement("canvas");
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext("2d")!;
  const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 14);
  grad.addColorStop(0, color);
  grad.addColorStop(1, "transparent");
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(16, 16, 14, 0, Math.PI * 2);
  ctx.fill();
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.82 });
}

export function ParticleWaves() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const DENSITY    = 38;
    const SEPARATION = 110;
    const AMPLITUDE  = 55;
    const SPEED      = 0.055;

    // Scene
    const scene    = new THREE.Scene();
    const camera   = new THREE.PerspectiveCamera(50, containerRef.current.clientWidth / containerRef.current.clientHeight, 1, 10000);
    camera.position.set(0, 700, 1100);
    camera.lookAt(scene.position);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Particles
    const particles: THREE.Sprite[] = [];
    const materials: Map<string, THREE.SpriteMaterial> = new Map();

    for (let ix = 0; ix < DENSITY; ix++) {
      for (let iy = 0; iy < DENSITY; iy++) {
        const color = pickColor(ix, iy, DENSITY);
        if (!materials.has(color)) materials.set(color, makeSpriteMaterial(color));

        const sprite = new THREE.Sprite(materials.get(color)!);
        sprite.position.x = ix * SEPARATION - (DENSITY * SEPARATION) / 2;
        sprite.position.z = iy * SEPARATION - (DENSITY * SEPARATION) / 2;
        sprite.position.y = -400;
        sprite.scale.setScalar(9);
        particles.push(sprite);
        scene.add(sprite);
      }
    }

    // Mouse parallax
    const mouse = { x: 0, y: 0 };
    const half  = { x: containerRef.current.clientWidth / 2, y: containerRef.current.clientHeight / 2 };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX - half.x) * 0.4;
      mouse.y = (e.clientY - half.y) * 0.4;
    };
    window.addEventListener("mousemove", onMouseMove);

    const onResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      half.x = w / 2;
      half.y = h / 2;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // Animation loop
    let count = 0;
    let raf: number;

    const animate = () => {
      raf = requestAnimationFrame(animate);

      // Smooth camera follow
      camera.position.x += (mouse.x - camera.position.x) * 0.04;
      camera.position.y += (-mouse.y + 700 - camera.position.y) * 0.04;
      camera.lookAt(scene.position);

      let i = 0;
      for (let ix = 0; ix < DENSITY; ix++) {
        for (let iy = 0; iy < DENSITY; iy++) {
          const p = particles[i++];
          p.position.y =
            -400 +
            Math.sin((ix + count) * 0.3) * AMPLITUDE +
            Math.sin((iy + count) * 0.5) * AMPLITUDE;

          const s =
            (Math.sin((ix + count) * 0.3) + 1) * 2.2 +
            (Math.sin((iy + count) * 0.5) + 1) * 2.2;
          p.scale.setScalar(Math.max(2, s));
        }
      }

      renderer.render(scene, camera);
      count += SPEED;
    };

    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      materials.forEach((m) => m.dispose());
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
