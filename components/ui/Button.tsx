"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center border-2 border-foreground font-mono font-bold uppercase tracking-wide",
          "shadow-[4px_4px_0px_#0A0A0A] transition-all duration-150",
          "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#0A0A0A]",
          "active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#0A0A0A]",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:translate-x-0 disabled:translate-y-0",
          variant === "primary" && "bg-primary text-foreground hover:bg-primary",
          variant === "secondary" && "bg-card-bg text-foreground hover:bg-muted",
          variant === "ghost" && "bg-transparent border-foreground text-foreground hover:bg-muted shadow-none hover:shadow-none",
          size === "sm" && "px-3 py-1.5 text-xs",
          size === "md" && "px-5 py-2.5 text-sm",
          size === "lg" && "px-8 py-4 text-base",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
