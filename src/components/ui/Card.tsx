'use client';

import * as React from "react";
import { cn } from "@/lib/utils";

export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_-40px_rgba(0,0,0,0.9)]",
      className,
    )}
    {...props}
  />
));

Card.displayName = "Card";

export const CardHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6 pb-2", className)} {...props} />
);

CardHeader.displayName = "CardHeader";

export const CardTitle = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    className={cn("text-lg font-semibold text-zinc-100", className)}
    {...props}
  />
);

CardTitle.displayName = "CardTitle";

export const CardDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-sm text-zinc-400", className)} {...props} />
);

CardDescription.displayName = "CardDescription";

export const CardContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("px-6 pb-6 pt-2", className)} {...props} />
);

CardContent.displayName = "CardContent";

export const CardFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("px-6 pb-6 pt-2", className)} {...props} />
);

CardFooter.displayName = "CardFooter";
