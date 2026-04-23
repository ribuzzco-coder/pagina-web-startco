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

  const raw0 = useTransform(scrollY, [0, 260, 760, 1120], [1, 1, 0.18, 0]);
  const raw1 = useTransform(scrollY, [760, 1080, 1640, 2040], [0, 0.24, 1, 0]);
  const raw2 = useTransform(scrollY, [1700, 2080, 2700, 3160], [0, 0.24, 1, 0]);
  const raw3 = useTransform(scrollY, [2740, 3200, 3900, 4460], [0, 0.24, 1, 0]);
  const raw4 = useTransform(scrollY, [3880, 4380, 5200, 5900], [0, 0.22, 1, 1]);

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
