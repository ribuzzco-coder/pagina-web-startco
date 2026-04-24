"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type MediaItem = {
  image: string;
  name: string;
  tone: string;
};

type HotelCaribeMediaGridProps = {
  items: readonly MediaItem[];
  type: "room" | "space";
};

export function HotelCaribeMediaGrid({
  items,
  type,
}: HotelCaribeMediaGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const selectedItem =
    selectedIndex === null ? null : (items[selectedIndex] ?? null);

  return (
    <>
      <div
        className={
          type === "room"
            ? "hotel-caribe-room-grid"
            : "hotel-caribe-space-grid"
        }
      >
        {items.map((item, index) => {
          const cardClassName =
            type === "room"
              ? `hotel-caribe-room hotel-caribe-room--${item.tone}`
              : `hotel-caribe-space hotel-caribe-space--${item.tone}`;

          const photoClassName =
            type === "room"
              ? "hotel-caribe-room__photo"
              : "hotel-caribe-space__photo";

          const imageClassName =
            type === "room"
              ? "hotel-caribe-room__image"
              : "hotel-caribe-space__image";

          return (
            <article key={item.name} className={cardClassName}>
              <button
                type="button"
                className="hotel-caribe-media-trigger"
                onClick={() => setSelectedIndex(index)}
                aria-label={`Ampliar ${item.name}`}
              >
                <div className={photoClassName}>
                  <div className={imageClassName}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes={
                        type === "room"
                          ? "(max-width: 767px) 45vw, 240px"
                          : "(max-width: 767px) 82vw, 360px"
                      }
                      className="hotel-caribe-media-image"
                    />
                  </div>
                </div>
                <p>{item.name}</p>
              </button>
            </article>
          );
        })}
      </div>

      {selectedItem ? (
        <div
          className="hotel-caribe-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.name}
          onClick={() => setSelectedIndex(null)}
        >
          <div className="hotel-caribe-lightbox__panel">
            <button
              type="button"
              className="hotel-caribe-lightbox__close"
              onClick={() => setSelectedIndex(null)}
              aria-label="Cerrar imagen ampliada"
            >
              &times;
            </button>
            <div className="hotel-caribe-lightbox__media">
              <Image
                src={selectedItem.image}
                alt={selectedItem.name}
                fill
                sizes="100vw"
                className="hotel-caribe-lightbox__image"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
