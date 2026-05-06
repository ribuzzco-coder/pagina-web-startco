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

  useEffect(() => {
    setMounted(true);
  }, []);

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
                <div className="fiammata-collection-stack__back fiammata-collection-stack__back--one">
                  <Image
                    src={collection.images[1]}
                    alt=""
                    fill
                    sizes="(max-width: 767px) 56vw, 220px"
                    className="fiammata-collection-stack__image"
                  />
                </div>
                <div className="fiammata-collection-stack__back fiammata-collection-stack__back--two">
                  <Image
                    src={collection.images[2]}
                    alt=""
                    fill
                    sizes="(max-width: 767px) 56vw, 220px"
                    className="fiammata-collection-stack__image"
                  />
                </div>
                <div className="fiammata-collection-stack__front">
                  <Image
                    src={collection.images[0]}
                    alt={collection.name}
                    fill
                    sizes="(max-width: 767px) 68vw, 280px"
                    className="fiammata-collection-stack__image"
                  />
                </div>
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
