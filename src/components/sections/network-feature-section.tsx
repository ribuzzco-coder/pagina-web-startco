"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SITE_CONFIG } from "@/lib/site-config";

export function NetworkFeatureSection() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const container = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    camera.position.z = 40;

    // --- Plexus Network Implementation (White Focused) ---
    const particlesCount = 65;
    const positions = new Float32Array(particlesCount * 3);
    const velocities = new Float32Array(particlesCount * 3);
    const particleGeometry = new THREE.BufferGeometry();
    const range = 50;

    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * range;
      positions[i * 3 + 1] = (Math.random() - 0.5) * range;
      positions[i * 3 + 2] = (Math.random() - 0.5) * range;

      velocities[i * 3] = (Math.random() - 0.5) * 0.08;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.08;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.08;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Nodes (Mainly White with subtle Cyan tips)
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.7,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(particleGeometry, pointsMaterial);
    scene.add(points);

    // Lines (White/Silver transparency with subtle Magenta hints)
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0xccd0db, 
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    });

    const linesGeometry = new THREE.BufferGeometry();
    const lineMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(lineMesh);

    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      for (let i = 0; i < particlesCount; i++) {
        positions[i * 3] += velocities[i * 3];
        positions[i * 3 + 1] += velocities[i * 3 + 1];
        positions[i * 3 + 2] += velocities[i * 3 + 2];

        for (let j = 0; j < 3; j++) {
            if (Math.abs(positions[i * 3 + j]) > range / 1.6) {
                velocities[i * 3 + j] *= -1;
            }
        }
      }
      particleGeometry.attributes.position.needsUpdate = true;

      const linePositions = [];
      const maxDistance = 14;

      for (let i = 0; i < particlesCount; i++) {
        for (let j = i + 1; j < particlesCount; j++) {
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance) {
            linePositions.push(
              positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
              positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
            );
          }
        }
      }

      linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      
      scene.rotation.y += 0.002;
      scene.rotation.z += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      particleGeometry.dispose();
      pointsMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] border border-white/8 bg-[#0B0B10] shadow-[0_24px_80px_rgba(0,0,0,0.4)] lg:rounded-[48px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.03),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(230,37,255,0.03),transparent_40%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="relative flex flex-col items-center lg:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="z-10 w-full p-8 sm:p-12 lg:w-1/2 lg:p-16"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E7B0EE]">
                Siguiente paso • Interconectividad
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#F5F7FA] sm:text-4xl">
                Descubre dónde se está rompiendo tu crecimiento.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-[#98A0B3] sm:text-lg">
                Te toma menos de 10 minutos. Recibes una lectura inicial y primero revisamos si hay una verdadera oportunidad de mejora.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href={SITE_CONFIG.diagnosisPath} variant="primary" size="lg">
                  Solicitar diagnóstico gratuito
                </Button>
                <Button href="/services" variant="secondary" size="lg">
                  Ver servicios
                </Button>
              </div>
            </motion.div>

            <div className="relative h-[300px] w-full overflow-hidden sm:h-[400px] lg:h-[520px] lg:w-1/2">
              <div ref={canvasRef} className="h-full w-full" />
              <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-[#0B0B10] to-transparent lg:block" />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
      </Container>
    </section>
  );
}
