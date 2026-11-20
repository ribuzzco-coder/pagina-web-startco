import Link from "next/link";
import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "shimmer";
type ButtonSize = "md" | "lg";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type LinkButtonProps = ButtonBaseProps & {
  href: string;
  external?: boolean;
};

type NativeButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border border-[#8f6cff]/70 bg-[#6d42e8] text-white shadow-[0_8px_22px_rgba(109,66,232,0.28)] hover:-translate-y-px hover:border-[#b5a1ff] hover:bg-[#7b55ef] hover:shadow-[0_12px_30px_rgba(109,66,232,0.36)]",
  secondary:
    "border border-[#8d88a9]/35 bg-[#171329]/72 text-[#f5f3ff] hover:border-[#9d7cff]/65 hover:bg-[#211a39] hover:shadow-[0_8px_20px_rgba(20,13,49,0.36)]",
  ghost:
    "border border-transparent bg-transparent text-[#CEC6E0] hover:bg-white/6 hover:text-[#E4DFF7] hover:shadow-[0_0_10px_rgba(105,57,226,0.1)]",
  shimmer:
    "group/shimmer relative isolate overflow-hidden border border-[#785fdd]/45 text-white shadow-[0_0_20px_rgba(105,57,226,0.35)] [background:var(--shimmer-bg)] hover:border-[#9c88e8]/75 hover:shadow-[0_0_0_1px_rgba(105,57,226,0.24),0_0_30px_rgba(105,57,226,0.46)]",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-sm sm:text-base",
};

const baseStyle =
  "inline-flex items-center justify-center rounded-lg font-semibold tracking-[0.01em] transition-[color,border-color,background-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:pointer-events-none disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6cff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08041E] active:translate-y-px";

const shimmerVars = {
  "--shimmer-spread": "100deg",
  "--shimmer-color": "#F1EEFF",
  "--shimmer-speed": "2.6s",
  "--shimmer-cut": "0.075em",
  "--shimmer-bg": "linear-gradient(135deg,#6939E2,#4E06BA)",
} as CSSProperties;

function ShimmerLayers() {
  return (
    <>
      {/* traveling spark, clipped to the pill */}
      <span className="pointer-events-none absolute inset-0 -z-30 overflow-visible rounded-full blur-[2px] [container-type:size]">
        <span className="absolute inset-0 h-[100cqh] animate-[shimmer-slide_var(--shimmer-speed)_ease-in-out_infinite_alternate] [aspect-ratio:1] [border-radius:0]">
          <span className="absolute -inset-full w-auto animate-[spin-around_var(--shimmer-speed)_ease-in-out_infinite] [background:conic-gradient(from_calc(270deg-(var(--shimmer-spread)*0.5)),transparent_0,var(--shimmer-color)_var(--shimmer-spread),transparent_var(--shimmer-spread))]" />
        </span>
      </span>
      {/* solid backdrop, inset by --shimmer-cut so only a thin ring of spark shows at the edge */}
      <span className="pointer-events-none absolute -z-20 rounded-full [background:var(--shimmer-bg)] [inset:var(--shimmer-cut)]" />
      {/* glass highlight */}
      <span className="pointer-events-none absolute inset-0 -z-10 rounded-full shadow-[inset_0_-8px_10px_rgba(255,255,255,0.14)] transition-shadow duration-300 ease-in-out group-hover/shimmer:shadow-[inset_0_-6px_10px_rgba(255,255,255,0.26)] group-active/shimmer:shadow-[inset_0_-10px_10px_rgba(255,255,255,0.26)]" />
    </>
  );
}

function getButtonClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
) {
  return cn(baseStyle, variantStyles[variant], sizeStyles[size], className);
}

export function Button(props: ButtonProps) {
  if ("href" in props && props.href) {
    const {
      href,
      external,
      children,
      className,
      variant = "primary",
      size = "md",
    } = props;

    const classes = getButtonClasses(variant, size, className);
    const isExternal = external ?? href.startsWith("http");
    const style = variant === "shimmer" ? shimmerVars : undefined;

    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} style={style}>
          {variant === "shimmer" ? <ShimmerLayers /> : null}
          {variant === "shimmer" ? <span className="relative">{children}</span> : children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} style={style}>
        {variant === "shimmer" ? <ShimmerLayers /> : null}
        {variant === "shimmer" ? <span className="relative">{children}</span> : children}
      </Link>
    );
  }

  const {
    children,
    className,
    variant = "primary",
    size = "md",
    ...buttonProps
  } = props;

  const classes = getButtonClasses(variant, size, className);
  const style = variant === "shimmer" ? shimmerVars : undefined;

  return (
    <button className={classes} style={style} {...buttonProps}>
      {variant === "shimmer" ? <ShimmerLayers /> : null}
      {variant === "shimmer" ? <span className="relative">{children}</span> : children}
    </button>
  );
}
