'use client';

import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-zinc-100 placeholder:text-zinc-500 shadow-inner shadow-black/30 outline-none transition focus:border-[var(--accent)] focus:shadow-[0_0_0_4px_rgba(34,228,255,0.08)]",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);

Input.displayName = "Input";
