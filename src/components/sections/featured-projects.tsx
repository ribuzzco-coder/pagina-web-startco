import Link from "next/link";

import { ProjectShowcase } from "@/components/sections/project-showcase";
import { Container } from "@/components/ui/container";

export function FeaturedProjects() {
  return (
    <section id="trabajos" className="scroll-mt-20 bg-[#191021] py-14 text-[#f8f0ff] sm:py-20">
      <Container className="grid items-center gap-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-14">
        <div>
          <h2 className="mb-5 font-heading text-4xl font-semibold leading-tight tracking-[-.045em] sm:text-5xl">Proyectos de clientes</h2>
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-[#ead4ff]">
            <Link href="/portafolio-comercial" className="underline underline-offset-4">Ver presentación comercial</Link>
            <Link href="/landings" className="underline underline-offset-4">Explorar las landings</Link>
          </div>
        </div>
        <ProjectShowcase />
      </Container>
    </section>
  );
}
