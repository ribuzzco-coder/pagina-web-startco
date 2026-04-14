"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useEffectEvent, useRef, useState } from "react";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SITE_CONFIG } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollYRef = useRef(0);

  const handleScroll = useEffectEvent(() => {
    if (isOpen) {
      setIsHidden(false);
      return;
    }

    const currentScrollY = window.scrollY;
    const isScrollingDown = currentScrollY > lastScrollYRef.current;
    const hasScrolledEnough = currentScrollY > 88;

    if (isScrollingDown && hasScrolledEnough) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    lastScrollYRef.current = currentScrollY;
  });

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-white/8 bg-[#0B0B10]/92 backdrop-blur-sm transition-transform duration-300",
        isHidden ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <Container className="flex h-[76px] items-center justify-between gap-5">
        <Link
          href="/"
          className="group inline-flex items-center"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={SITE_CONFIG.logoPlaceholder}
            alt="Logo RiBuzz"
            width={759}
            height={180}
            sizes="(max-width: 1024px) 140px, 168px"
            priority
            className="h-9 w-auto object-contain opacity-96 transition duration-300 group-hover:scale-[1.02] group-hover:opacity-100 sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {SITE_CONFIG.navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === link.href : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium tracking-[0.01em] transition-[color,border-color,box-shadow,background-color] duration-200",
                  isActive
                    ? "border-white/75 bg-white text-[#7A1A8A] shadow-[0_0_0_1px_rgba(255,255,255,0.3),0_0_18px_rgba(230,37,255,0.2)]"
                    : "border-transparent text-[#98A0B3] hover:border-[#E625FF]/55 hover:bg-[#1A1320] hover:text-[#F5F7FA] hover:shadow-[0_0_0_1px_rgba(230,37,255,0.24),0_0_24px_rgba(230,37,255,0.28)]",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href={SITE_CONFIG.diagnosisPath} size="md">
            {SITE_CONFIG.diagnosisCtaShortLabel}
          </Button>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#F5F7FA] transition hover:border-white/18 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="text-lg leading-none">{isOpen ? "x" : "="}</span>
        </button>
      </Container>

      <MobileMenu isOpen={isOpen} pathname={pathname} onClose={() => setIsOpen(false)} />
    </header>
  );
}
