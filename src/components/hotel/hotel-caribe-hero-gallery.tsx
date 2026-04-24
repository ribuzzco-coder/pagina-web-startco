"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const defaultHeroImages = [
  "/images/hotel-caribe/rotar-1.png",
  "/images/hotel-caribe/rotar-2.png",
  "/images/hotel-caribe/rotar-3.png",
  "/images/hotel-caribe/rotar-4.png",
  "/images/hotel-caribe/rotar-5.png",
] as const;

export function HotelCaribeHeroGallery({
  images = defaultHeroImages,
}: {
  images?: readonly string[];
}) {
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  const raw0 = useTransform(scrollY, [0, 180, 620, 960], [1, 1, 0.16, 0]);
  const raw1 = useTransform(scrollY, [520, 900, 1400, 1820], [0, 0.22, 1, 0]);
  const raw2 = useTransform(scrollY, [1340, 1760, 2320, 2740], [0, 0.22, 1, 0]);
  const raw3 = useTransform(scrollY, [2260, 2700, 3280, 3740], [0, 0.22, 1, 0]);
  const raw4 = useTransform(scrollY, [3200, 3660, 4300, 4900], [0, 0.22, 1, 1]);

  const springConfig = { stiffness: 34, damping: 24, mass: 1.05 };

  const opacities = [
    useSpring(raw0, springConfig),
    useSpring(raw1, springConfig),
    useSpring(raw2, springConfig),
    useSpring(raw3, springConfig),
    useSpring(raw4, springConfig),
  ];

  return (
    <div className="hotel-caribe-hero-gallery" aria-hidden="true">
      {images.map((src, index) => (
        <motion.div
          key={src}
          className="hotel-caribe-hero-gallery__layer"
          style={{
            opacity: prefersReducedMotion ? (index === 0 ? 1 : 0) : opacities[index],
          }}
        >
          <div
            className="hotel-caribe-hero-gallery__image"
            style={{ backgroundImage: `url(${src})` }}
          />
        </motion.div>
      ))}
    </div>
  );
}
