"use client";

import Image from "next/image";
import Link from "next/link";
import { NavigationFeedback } from "./navigation-feedback";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";
import { useEffect, useEffectEvent, useRef, useState } from "react";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { Container } from "@/components/ui/container";
import { SITE_CONFIG } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isHeroTop, setIsHeroTop] = useState(false);
  const [inGallery, setInGallery] = useState(false);
  const activeHref = (pathname === "/" && inGallery) || pathname.startsWith("/proyectos/") ? "/#trabajos" : pathname;
  const [activeBubbleStyle, setActiveBubbleStyle] = useState<{
    width: number;
    x: number;
    opacity: number;
  }>({
    width: 0,
    x: 0,
    opacity: 0,
  });
  const [isBubbleMorphing, setIsBubbleMorphing] = useState(false);
  const lastScrollYRef = useRef(0);
  const navRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const morphTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const desktop = window.matchMedia("(min-width: 64rem)");
    function closeOutside(event: Event) {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setIsOpen(false);
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    }
    function closeOnDesktop() {
      if (desktop.matches) setIsOpen(false);
    }
    document.addEventListener("keydown", escape);
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("focusin", closeOutside);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", escape);
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("focusin", closeOutside);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [isOpen]);

  const handleScroll = useEffectEvent(() => {
    if (isOpen) {
      setIsHidden(false);
      return;
    }

    const currentScrollY = window.scrollY;
    const gallery = pathname === "/" ? document.getElementById("trabajos")?.getBoundingClientRect() : undefined;
    setInGallery(Boolean(gallery && gallery.top < window.innerHeight / 2 && gallery.bottom > 80));
    const isScrollingDown = currentScrollY > lastScrollYRef.current;
    const hasScrolledEnough = currentScrollY > 88;
    const hero = document.getElementById("home-hero");
    const heroBottom = hero ? hero.offsetTop + hero.offsetHeight - 76 : 0;
    const shouldShowTransparent = pathname === "/" && currentScrollY < Math.max(heroBottom, 0);

    if (isScrollingDown && hasScrolledEnough) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    setIsHeroTop(shouldShowTransparent);
    lastScrollYRef.current = currentScrollY;
  });

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;
    const frame = window.requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, isOpen]);

  const syncActiveBubble = useEffectEvent(() => {
    if (!navRef.current) {
      return;
    }

    const activeLink = navRef.current.querySelector<HTMLAnchorElement>("[data-nav-active='true']");

    if (!activeLink) {
      setActiveBubbleStyle((current) =>
        current.opacity === 0 ? current : { ...current, opacity: 0 },
      );
      return;
    }

    setActiveBubbleStyle({
      width: activeLink.offsetWidth,
      x: activeLink.offsetLeft,
      opacity: 1,
    });
  });

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      syncActiveBubble();
      setIsBubbleMorphing(true);
      morphTimeoutRef.current = window.setTimeout(() => setIsBubbleMorphing(false), 760);
    });

    window.addEventListener("resize", syncActiveBubble);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", syncActiveBubble);
      if (morphTimeoutRef.current !== null) {
        window.clearTimeout(morphTimeoutRef.current);
      }
    };
  }, [activeHref]);

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        isHeroTop
          ? "border-b border-transparent bg-transparent backdrop-blur-0"
          : "border-b border-[#8d88a9]/20 bg-[#0d0920]/92 backdrop-blur-xl",
        isHidden ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <Container className="flex h-[76px] items-center gap-5">
        <Link
          href="/"
          className="group inline-flex items-center"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={SITE_CONFIG.wordmark}
            alt="Logo RiBuzz"
            width={1337}
            height={242}
            sizes="(min-width: 640px) 150px, 132px"
            priority
            className="h-auto w-[132px] object-contain transition-transform duration-300 motion-safe:group-hover:scale-[1.02] sm:w-[150px]"
          />
        </Link>

        <nav
          ref={navRef}
          className="relative ml-auto hidden items-center gap-1 rounded-xl border border-[#8d88a9]/20 bg-[#15102b]/72 p-1 lg:mr-8 lg:flex xl:mr-12"
          aria-label="Principal"
        >
          <span
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-y-1 left-0 border border-[#9e82ff]/55 bg-[#2b2050] shadow-[0_4px_14px_rgba(5,2,18,0.35)] transition-[transform,width,opacity,border-radius,box-shadow,filter] duration-[420ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
              isBubbleMorphing && "nav-blob-morphing",
            )}
            style={{
              width: `${activeBubbleStyle.width}px`,
              "--blob-x": `${activeBubbleStyle.x}px`,
              transform: `translateX(${activeBubbleStyle.x}px)`,
              opacity: activeBubbleStyle.opacity,
              borderRadius: isBubbleMorphing
                ? "980px 1020px 970px 1030px / 1005px 980px 1020px 990px"
                : "999px 999px 990px 1010px / 990px 1010px 985px 1005px",
            } as CSSProperties}
          />
          {SITE_CONFIG.navLinks.map((link) => {
            const isActive = link.href === activeHref;
            const isDiagnosisLink = link.href === "/diagnostico";

            return (
              <Link
                key={link.href}
                href={link.href}
                data-nav-active={isActive ? "true" : "false"}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "relative z-10 whitespace-nowrap rounded-full border px-2.5 py-2 xl:px-4 text-sm font-medium tracking-[0.01em] transition-[color,border-color,box-shadow,background-color,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isActive
                    ? isDiagnosisLink
                      ? "border-[#6939E2]/65 bg-[linear-gradient(135deg,#6939E2,#4E06BA)] text-white shadow-[0_0_0_1px_rgba(105,57,226,0.18),0_0_24px_rgba(105,57,226,0.32)]"
                      : "border-transparent bg-transparent text-[#f7f5ff]"
                    : isDiagnosisLink
                      ? "border-[#6939E2]/65 bg-[linear-gradient(135deg,#6939E2,#4E06BA)] text-white shadow-[0_0_0_1px_rgba(105,57,226,0.18),0_0_24px_rgba(105,57,226,0.32)] hover:border-[#785fdd]/80 hover:bg-[linear-gradient(135deg,#6939e2,#4e06ba)] hover:text-white hover:shadow-[0_0_0_1px_rgba(105,57,226,0.24),0_0_28px_rgba(105,57,226,0.4)]"
                : "border-transparent text-[#b7b0cb] hover:border-[#9e82ff]/35 hover:bg-[#211a3c] hover:text-[#f7f5ff]",
                )}
              >
                {link.label}<NavigationFeedback />
              </Link>
            );
          })}

          <Link
            href={SITE_CONFIG.giftsPath}
            aria-label="Regalos y documentos de valor"
            className="relative z-10 ml-1 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#c53a57] bg-[linear-gradient(180deg,#731a2d,#681426)] text-[#ffb1c2] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_0_1px_rgba(255,77,109,0.14),0_0_24px_rgba(255,77,109,0.24)] transition-[transform,border-color,box-shadow,background-color,color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] hover:border-[#e05a76] hover:bg-[linear-gradient(180deg,#822136,#75172b)] hover:text-[#ffdbe3] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_0_1px_rgba(255,77,109,0.18),0_0_30px_rgba(255,77,109,0.34)]"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5.25 10.25h13.5v8.5a1.25 1.25 0 0 1-1.25 1.25H6.5a1.25 1.25 0 0 1-1.25-1.25z" />
              <path d="M4 10.25h16v-2.1A1.15 1.15 0 0 0 18.85 7H5.15A1.15 1.15 0 0 0 4 8.15z" />
              <path d="M12 7v13" />
              <path d="M12 7c-.15-2.45-1.2-3.85-3-3.85-1.35 0-2.25.93-2.25 2.03 0 1.18.88 1.82 2.18 1.82z" />
              <path d="M12 7c.15-2.45 1.2-3.85 3-3.85 1.35 0 2.25.93 2.25 2.03 0 1.18-.88 1.82-2.18 1.82z" />
            </svg>
          </Link>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="ribuzz-mobile-menu"
          className="group ml-auto inline-grid h-12 w-12 place-items-center rounded-full border border-[#9277a7] bg-[#2a1d36] text-[#ead7ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#dec5ff] aria-expanded:bg-[#dec5f5] aria-expanded:text-[#291933] lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span aria-hidden="true" className="relative block h-5 w-[22px]">
            <span className="absolute left-0 top-[3px] h-0.5 w-full rounded-full bg-current motion-safe:transition-transform group-aria-expanded:translate-y-[6px] group-aria-expanded:rotate-45" />
            <span className="absolute left-0 top-[9px] h-0.5 w-4 rounded-full bg-current group-aria-expanded:opacity-0" />
            <span className="absolute left-0 top-[15px] h-0.5 w-full rounded-full bg-current motion-safe:transition-transform group-aria-expanded:-translate-y-[6px] group-aria-expanded:-rotate-45" />
          </span>
        </button>
      </Container>

      <MobileMenu isOpen={isOpen} activeHref={activeHref} onClose={() => setIsOpen(false)} />
    </header>
  );
}
