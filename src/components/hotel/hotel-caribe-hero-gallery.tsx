"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const heroImages = [
  "/images/hotel-caribe/rotacion-0.jpg",
  "/images/hotel-caribe/rotacion-1.jpg",
  "/images/hotel-caribe/rotacion-2.jpg",
  "/images/hotel-caribe/rotacion-3.jpg",
  "/images/hotel-caribe/rotacion-4.jpg",
] as const;

export function HotelCaribeHeroGallery() {
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  const opacity0 = useTransform(scrollY, [0, 420, 980], [1, 1, 0]);
  const opacity1 = useTransform(scrollY, [420, 980, 1560], [0, 1, 0]);
  const opacity2 = useTransform(scrollY, [980, 1560, 2200], [0, 1, 0]);
  const opacity3 = useTransform(scrollY, [1560, 2300, 3040], [0, 1, 0]);
  const opacity4 = useTransform(scrollY, [2280, 3080, 3880], [0, 1, 1]);

  const opacities = [opacity0, opacity1, opacity2, opacity3, opacity4];

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
