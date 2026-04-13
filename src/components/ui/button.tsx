import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
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
    "border border-[#E625FF]/55 bg-[linear-gradient(135deg,#E625FF,#B11CD4)] text-white shadow-[0_8px_18px_rgba(230,37,255,0.22)] hover:border-[#f089ff]/75 hover:bg-[linear-gradient(135deg,#f03dff,#bf28df)]",
  secondary:
    "border border-white/10 bg-white/[0.03] text-[#F5F7FA] hover:border-white/16 hover:bg-white/[0.06]",
  ghost: "border border-transparent bg-transparent text-[#C7CBD6] hover:bg-white/6 hover:text-[#F5F7FA]",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-sm sm:text-base",
};

const baseStyle =
  "inline-flex items-center justify-center rounded-full font-semibold tracking-[0.01em] transition-colors duration-200 disabled:pointer-events-none disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E625FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B10]";

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

    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
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

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
