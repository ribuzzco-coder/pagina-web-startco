"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import type { TouchEvent } from "react";

type FiammataCollection = {
  name: string;
  href: string;
  images: [string, string, string];
};

type FiammataCollectionGridProps = {
  collections: readonly FiammataCollection[];
};

const SWIPE_THRESHOLD = 36;

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="fiammata-collection-arrow__icon">
      <path
        d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
    </svg>
  );
}

export function FiammataCollectionGrid({
  collections,
}: FiammataCollectionGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeIndices, setActiveIndices] = useState<number[]>(
    () => collections.map(() => 0),
  );
  const touchStartX = useRef<number | null>(null);

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

  const selectedCollection =
    selectedIndex === null ? null : (collections[selectedIndex] ?? null);

  const rotateCollection = (collectionIndex: number, direction: 1 | -1) => {
    setActiveIndices((current) =>
      current.map((value, index) => {
        if (index !== collectionIndex) return value;

        return (value + direction + 3) % 3;
      }),
    );
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd =
    (collectionIndex: number) => (event: TouchEvent<HTMLDivElement>) => {
      const startX = touchStartX.current;
      const endX = event.changedTouches[0]?.clientX ?? null;

      touchStartX.current = null;

      if (startX === null || endX === null) return;

      const deltaX = endX - startX;
      if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;

      rotateCollection(collectionIndex, deltaX < 0 ? 1 : -1);
    };

  return (
    <>
      <div className="fiammata-collection-grid">
        {collections.map((collection, index) => (
          <article key={collection.name} className="fiammata-collection-card">
            <div className="fiammata-collection-stack-shell">
              <button
                type="button"
                className="fiammata-collection-arrow fiammata-collection-arrow--left"
                onClick={() => rotateCollection(index, -1)}
                aria-label={`Ver imagen anterior de ${collection.name}`}
              >
                <ArrowIcon direction="left" />
              </button>

              <button
                type="button"
                className="fiammata-collection-trigger"
                onClick={() => setSelectedIndex(index)}
                aria-label={`Ver coleccion ${collection.name}`}
              >
                <div
                  className="fiammata-collection-stack"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd(index)}
                >
                  {[0, 1, 2].map((imageIndex) => {
                    const activeIndex = activeIndices[index] ?? 0;
                    const offset = (imageIndex - activeIndex + 3) % 3;
                    const slotClassName =
                      offset === 0
                        ? "fiammata-collection-stack__front"
                        : offset === 1
                          ? "fiammata-collection-stack__back fiammata-collection-stack__back--one"
                          : "fiammata-collection-stack__back fiammata-collection-stack__back--two";

                    return (
                      <div
                        key={`${collection.name}-${imageIndex}`}
                        className={slotClassName}
                      >
                        <Image
                          src={collection.images[imageIndex]}
                          alt={offset === 0 ? collection.name : ""}
                          fill
                          sizes={
                            offset === 0
                              ? "(max-width: 767px) 68vw, 280px"
                              : "(max-width: 767px) 56vw, 220px"
                          }
                          className="fiammata-collection-stack__image"
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="fiammata-collection-copy">
                  <p>{collection.name}</p>
                  <span>Ver coleccion</span>
                </div>
              </button>

              <button
                type="button"
                className="fiammata-collection-arrow fiammata-collection-arrow--right"
                onClick={() => rotateCollection(index, 1)}
                aria-label={`Ver imagen siguiente de ${collection.name}`}
              >
                <ArrowIcon direction="right" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {typeof document !== "undefined" && selectedCollection
        ? createPortal(
            <div
              className="fiammata-collection-lightbox"
              role="dialog"
              aria-modal="true"
              aria-label={selectedCollection.name}
              onClick={() => setSelectedIndex(null)}
            >
              <div
                className="fiammata-collection-lightbox__panel"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  className="fiammata-collection-lightbox__close"
                  onClick={() => setSelectedIndex(null)}
                  aria-label={`Cerrar coleccion ${selectedCollection.name}`}
                >
                  x
                </button>

                <div className="fiammata-collection-lightbox__gallery">
                  {selectedCollection.images.map((image, imageIndex) => (
                    <a
                      key={`${selectedCollection.name}-${imageIndex}`}
                      className="fiammata-collection-lightbox__frame"
                      href={selectedCollection.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={image}
                        alt={`${selectedCollection.name} ${imageIndex + 1}`}
                        fill
                        sizes="(max-width: 767px) 84vw, 320px"
                        className="fiammata-collection-lightbox__image"
                        priority={imageIndex === 0}
                      />
                    </a>
                  ))}
                </div>

                <div className="fiammata-collection-lightbox__meta">
                  <div>
                    <p className="fiammata-collection-lightbox__eyebrow">Coleccion destacada</p>
                    <h3>{selectedCollection.name}</h3>
                  </div>
                  <a
                    href={selectedCollection.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fiammata-collection-lightbox__cta"
                  >
                    Ver mas
                  </a>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
