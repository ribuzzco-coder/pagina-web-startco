"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { CSSProperties } from "react";
import { useEffect, useEffectEvent, useRef, useState } from "react";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { Container } from "@/components/ui/container";
import { getSessionSummary, logoutUser } from "@/lib/auth/client";
import { SITE_CONFIG } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isHeroTop, setIsHeroTop] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
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
  const morphTimeoutRef = useRef<number | null>(null);

  const handleScroll = useEffectEvent(() => {
    if (isOpen) {
      setIsHidden(false);
      return;
    }

    const currentScrollY = window.scrollY;
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
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
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
    syncActiveBubble();

    setIsBubbleMorphing(true);
    if (morphTimeoutRef.current !== null) {
      window.clearTimeout(morphTimeoutRef.current);
    }
    morphTimeoutRef.current = window.setTimeout(() => {
      setIsBubbleMorphing(false);
    }, 760);

    window.addEventListener("resize", syncActiveBubble);

    return () => {
      window.removeEventListener("resize", syncActiveBubble);
      if (morphTimeoutRef.current !== null) {
        window.clearTimeout(morphTimeoutRef.current);
      }
    };
  }, [pathname]);

  useEffect(() => {
    let isMounted = true;

    async function loadSession() {
      setIsAuthLoading(true);
      try {
        const result = await getSessionSummary();
        if (!isMounted) {
          return;
        }

        if (!result.ok) {
          setIsAuthenticated(false);
          return;
        }

        setIsAuthenticated(Boolean(result.data.authenticated));
      } catch {
        if (isMounted) {
          setIsAuthenticated(false);
        }
      } finally {
        if (isMounted) {
          setIsAuthLoading(false);
        }
      }
    }

    void loadSession();

    return () => {
      isMounted = false;
    };
  }, [pathname]);

  async function handleLogout() {
    setIsLoggingOut(true);
    try {
      await logoutUser();
      setIsAuthenticated(false);
      setIsOpen(false);
      router.replace("/login");
      router.refresh();
    } catch {
      setIsLoggingOut(false);
    }
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        isHeroTop
          ? "border-b border-transparent bg-transparent backdrop-blur-0"
          : "border-b border-white/8 bg-[#0B0B10]/92 backdrop-blur-sm",
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
            src={SITE_CONFIG.logoPlaceholder}
            alt="Logo RiBuzz"
            width={759}
            height={180}
            sizes="(max-width: 1024px) 140px, 168px"
            priority
            className="h-9 w-auto object-contain opacity-96 transition duration-300 group-hover:scale-[1.02] group-hover:opacity-100 sm:h-10"
          />
        </Link>

        <nav
          ref={navRef}
          className="relative ml-auto hidden items-center gap-1 rounded-full p-1 lg:mr-8 lg:flex xl:mr-12"
          aria-label="Principal"
        >
          <span
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-y-1 left-0 border border-white/58 bg-[radial-gradient(circle_at_28%_26%,rgba(255,255,255,0.98),rgba(255,255,255,0.93)_42%,rgba(249,238,252,0.88)_72%,rgba(255,255,255,0.82)_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_0_14px_rgba(230,37,255,0.14),0_0_24px_rgba(230,37,255,0.1)] blur-[0.08px] transition-[transform,width,opacity,border-radius,box-shadow,filter] duration-[920ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
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
            const isActive =
              link.href === "/" ? pathname === link.href : pathname.startsWith(link.href);
            const isDiagnosisLink = link.href === "/contact";

            return (
              <Link
                key={link.href}
                href={link.href}
                data-nav-active={isActive ? "true" : "false"}
                className={cn(
                  "relative z-10 rounded-full border px-4 py-2 text-sm font-medium tracking-[0.01em] transition-[color,border-color,box-shadow,background-color,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isActive
                    ? isDiagnosisLink
                      ? "border-[#E625FF]/65 bg-[linear-gradient(135deg,#E625FF,#B11CD4)] text-white shadow-[0_0_0_1px_rgba(230,37,255,0.18),0_0_24px_rgba(230,37,255,0.32)]"
                      : "border-transparent bg-transparent text-[#7A1A8A]"
                    : isDiagnosisLink
                      ? "border-[#E625FF]/65 bg-[linear-gradient(135deg,#E625FF,#B11CD4)] text-white shadow-[0_0_0_1px_rgba(230,37,255,0.18),0_0_24px_rgba(230,37,255,0.32)] hover:border-[#f5a2ff]/80 hover:bg-[linear-gradient(135deg,#f03dff,#bf28df)] hover:text-white hover:shadow-[0_0_0_1px_rgba(230,37,255,0.24),0_0_28px_rgba(230,37,255,0.4)]"
                      : "border-transparent text-[#98A0B3] hover:border-[#E625FF]/55 hover:bg-[#1A1320] hover:text-[#F5F7FA] hover:shadow-[0_0_0_1px_rgba(230,37,255,0.24),0_0_24px_rgba(230,37,255,0.28)]",
                )}
              >
                {link.label}
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

        {isAuthLoading ? (
          <span className="hidden rounded-full border border-white/10 px-3 py-2 text-xs text-[#98A0B3] lg:inline-flex">
            Cargando...
          </span>
        ) : isAuthenticated ? (
          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/dashboard"
              className="inline-flex items-center rounded-full border border-white/10 px-3 py-2 text-sm text-[#D9DDE7] transition hover:border-white/20 hover:text-white"
            >
              Dashboard
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="inline-flex items-center rounded-full border border-[#E625FF]/65 bg-[linear-gradient(135deg,#E625FF,#B11CD4)] px-3 py-2 text-sm font-medium text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoggingOut ? "Saliendo..." : "Salir"}
            </button>
          </div>
        ) : (
          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/login"
              className="inline-flex items-center rounded-full border border-white/10 px-3 py-2 text-sm text-[#D9DDE7] transition hover:border-white/20 hover:text-white"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center rounded-full border border-[#E625FF]/65 bg-[linear-gradient(135deg,#E625FF,#B11CD4)] px-3 py-2 text-sm font-medium text-white transition hover:brightness-110"
            >
              Signup
            </Link>
          </div>
        )}

        <button
          type="button"
          aria-label="Abrir menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#F5F7FA] transition hover:border-white/18 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="text-lg leading-none">{isOpen ? "x" : "="}</span>
        </button>
      </Container>

      <MobileMenu
        isOpen={isOpen}
        pathname={pathname}
        isAuthenticated={isAuthenticated}
        isAuthLoading={isAuthLoading}
        onLogout={handleLogout}
        onClose={() => setIsOpen(false)}
      />
    </header>
  );
}
