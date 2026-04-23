"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const heroImages = [
  "/images/hotel-caribe/rotar-1.png",
  "/images/hotel-caribe/rotar-2.png",
  "/images/hotel-caribe/rotar-3.png",
  "/images/hotel-caribe/rotar-4.png",
  "/images/hotel-caribe/rotar-5.png",
] as const;

export function HotelCaribeHeroGallery() {
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  const raw0 = useTransform(scrollY, [0, 180, 520, 840], [1, 1, 0.2, 0]);
  const raw1 = useTransform(scrollY, [520, 820, 1260, 1640], [0, 0.26, 1, 0]);
  const raw2 = useTransform(scrollY, [1260, 1640, 2100, 2520], [0, 0.26, 1, 0]);
  const raw3 = useTransform(scrollY, [2100, 2500, 3020, 3460], [0, 0.26, 1, 0]);
  const raw4 = useTransform(scrollY, [2960, 3400, 4040, 4700], [0, 0.24, 1, 1]);

  const springConfig = { stiffness: 42, damping: 26, mass: 0.9 };

  const opacities = [
    useSpring(raw0, springConfig),
    useSpring(raw1, springConfig),
    useSpring(raw2, springConfig),
    useSpring(raw3, springConfig),
    useSpring(raw4, springConfig),
  ];

  return (
    <div className="hotel-caribe-hero-gallery" aria-hidden="true">
      {heroImages.map((src, index) => (
        <motion.div
          key={src}
          className="hotel-caribe-hero-gallery__layer"
          style={{ opacity: prefersReducedMotion ? (index === 0 ? 1 : 0) : opacities[index] }}
        >
          <div className="hotel-caribe-hero-gallery__image" style={{ backgroundImage: `url(${src})` }} />
        </motion.div>
      ))}
    </div>
  );
}
