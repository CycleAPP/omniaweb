'use client';

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: Variant;
  size?: Size;
}

const baseClasses =
  "relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-transform duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--accent)]/90 text-black shadow-[0_20px_60px_-25px_rgba(34,228,255,0.5)] hover:-translate-y-[2px] hover:shadow-[0_25px_70px_-30px_rgba(65,243,197,0.65)]",
  outline:
    "border border-white/20 bg-white/5 text-zinc-100 hover:bg-white/10 hover:-translate-y-[2px]",
  ghost:
    "text-zinc-200 hover:text-white hover:bg-white/5 hover:-translate-y-[2px]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-12 px-7 text-base",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
