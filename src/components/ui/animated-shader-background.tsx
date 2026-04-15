"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const AnimatedShaderBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    const updateSize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    updateSize();
    container.appendChild(renderer.domElement);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      },
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float iTime;
        uniform vec2 iResolution;

        float hash(float n) { 
          return fract(sin(n) * 43758.5453123); 
        }
        
        void main() {
          vec2 uv = gl_FragCoord.xy / iResolution.xy;
          // Scale and center coordinate system
          vec2 p = (gl_FragCoord.xy * 2.0 - iResolution.xy) / min(iResolution.x, iResolution.y);
          
          // Diagonal rotation for "falling" direction
          float angle = -0.6; 
          mat2 rotation = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
          vec2 rotatedP = rotation * p;
          
          vec3 finalColor = vec3(0.0);
          
          // RiBuzz Identity Colors
          vec3 cyan = vec3(0.06, 0.94, 0.99);    // #0FEFFD
          vec3 magenta = vec3(0.90, 0.15, 1.00); // #E625FF
          
          // Render shooting stars
          for(float i = 0.0; i < 12.0; i++) {
            float speed = 1.2 + hash(i * 12.4) * 2.2;
            float spawnOffset = hash(i * 43.1) * 6.0 - 3.0;
            
            // Vertical loop with speed and random offset
            float yProgress = mod(rotatedP.y + iTime * speed + hash(i * 15.5) * 8.0, 6.0) - 3.0;
            
            // X distance from the "streak" path
            float xDist = abs(rotatedP.x - spawnOffset);
            
            // Star "head" - small bright point
            float head = smoothstep(0.04, 0.0, abs(yProgress)) * smoothstep(0.015, 0.0, xDist);
            
            // Star "tail" - long fading streak behind the head
            float tailLength = 1.4;
            float tail = smoothstep(tailLength, 0.0, -yProgress) * step(yProgress, 0.0);
            tail *= smoothstep(0.008, 0.0, xDist);
            
            // Combine and add color
            float starIntensity = (head + tail * 0.4);
            vec3 starColor = mix(cyan, magenta, hash(i * 22.8));
            
            finalColor += starColor * starIntensity * (0.6 + hash(i * 9.1) * 0.4);
          }
          
          // Add a very subtle background glow
          finalColor += magenta * 0.02 * (1.0 - length(p * 0.5));
          
          // Output with transparency based on brightness
          float alpha = clamp(length(finalColor) * 1.8, 0.0, 1.0);
          gl_FragColor = vec4(finalColor, alpha * 0.82);
        }
      `,
      transparent: true,
      depthTest: false,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let frameId: number;
    const animate = () => {
      material.uniforms.iTime.value += 0.016;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden h-full w-full mix-blend-screen opacity-90" />
  );
};
