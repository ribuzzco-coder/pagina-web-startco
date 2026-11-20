"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { featuredProjects } from "@/lib/featured-projects";
import styles from "./project-showcase.module.css";

const projects = [...featuredProjects].sort((a, b) => Number(b.name === "Arkos Wear") - Number(a.name === "Arkos Wear"));

export function ProjectShowcase() {
  const [selected, setSelected] = useState(0);
  const project = projects[selected];

  return (
    <div className={styles.showcase}>
      <fieldset className={styles.selector}>
        <legend className="sr-only">Elegir el proyecto que se muestra</legend>
        {projects.map((item, index) => (
          <label key={item.name} className={styles.choice}>
            <input type="radio" name="proyecto-destacado" checked={selected === index} onChange={() => setSelected(index)} className="sr-only" />
            <span>{item.name}</span>
          </label>
        ))}
      </fieldset>
      <figure className={styles.frame}>
        <Link href={project.href} data-funnel-event="case_open" className={styles.link}>
          <div className={styles.screen}>
            <Image
              key={project.image}
              src={`/portafolio-comercial/assets/${project.image}`}
              alt={project.alt}
              fill
              preload={selected === 0}
              sizes="(min-width: 1024px) 560px, 95vw"
              className={styles.preview}
            />
          </div>
          <div className={styles.caption} aria-live="polite" aria-atomic="true">
            <div><strong>{project.name}</strong><small>{project.category}</small></div>
            <span>{project.action} <i aria-hidden="true">↗</i></span>
          </div>
        </Link>
      </figure>
      <p className="mt-3 text-sm leading-relaxed text-[#dacde3]">{project.detail}</p>
    </div>
  );
}
