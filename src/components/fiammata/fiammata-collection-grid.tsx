"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

type FiammataCollection = {
  name: string;
  href: string;
  images: [string, string, string];
};

type FiammataCollectionGridProps = {
  collections: readonly FiammataCollection[];
};

export function FiammataCollectionGrid({
  collections,
}: FiammataCollectionGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [activeIndices, setActiveIndices] = useState<number[]>(
    () => collections.map(() => 0),
  );
  const [popKey, setPopKey] = useState<number[]>(
    () => collections.map(() => 0),
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const timers = collections.map((_, collectionIndex) => {
      let timeoutId: number;

      const schedule = () => {
        const nextDelay = 1800 + Math.round(Math.random() * 2400);
        timeoutId = window.setTimeout(() => {
          setActiveIndices((current) =>
            current.map((value, index) =>
              index === collectionIndex ? (value + 1) % 3 : value,
            ),
          );
          setPopKey((current) =>
            current.map((value, index) =>
              index === collectionIndex ? value + 1 : value,
            ),
          );
          schedule();
        }, nextDelay);
      };

      schedule();

      return () => window.clearTimeout(timeoutId);
    });

    return () => {
      timers.forEach((clearTimer) => clearTimer());
    };
  }, [collections]);

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

  return (
    <>
      <div className="fiammata-collection-grid">
        {collections.map((collection, index) => (
          <article key={collection.name} className="fiammata-collection-card">
            <button
              type="button"
              className="fiammata-collection-trigger"
              onClick={() => setSelectedIndex(index)}
              aria-label={`Ver colección ${collection.name}`}
            >
              <div className="fiammata-collection-stack">
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
                      className={`${slotClassName}${offset === 0 ? " fiammata-collection-stack__front--popping" : ""}`}
                      data-pop-seq={offset === 0 ? popKey[index] ?? 0 : undefined}
                    >
                      <Image
                        src={collection.images[imageIndex]}
                        alt={offset === 0 ? collection.name : ""}
                        fill
                        sizes={offset === 0 ? "(max-width: 767px) 68vw, 280px" : "(max-width: 767px) 56vw, 220px"}
                        className="fiammata-collection-stack__image"
                      />
                    </div>
                  );
                })}
              </div>
              <div className="fiammata-collection-copy">
                <p>{collection.name}</p>
                <span>Ver colección</span>
              </div>
            </button>
          </article>
        ))}
      </div>

      {mounted && selectedCollection
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
                <div className="fiammata-collection-lightbox__gallery">
                  {selectedCollection.images.map((image, imageIndex) => (
                    <div
                      key={`${selectedCollection.name}-${imageIndex}`}
                      className="fiammata-collection-lightbox__frame"
                    >
                      <Image
                        src={image}
                        alt={`${selectedCollection.name} ${imageIndex + 1}`}
                        fill
                        sizes="(max-width: 767px) 84vw, 320px"
                        className="fiammata-collection-lightbox__image"
                        priority={imageIndex === 0}
                      />
                    </div>
                  ))}
                </div>

                <div className="fiammata-collection-lightbox__meta">
                  <div>
                    <p className="fiammata-collection-lightbox__eyebrow">Colección destacada</p>
                    <h3>{selectedCollection.name}</h3>
                  </div>
                  <a
                    href={selectedCollection.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fiammata-collection-lightbox__cta"
                  >
                    Ver más
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
