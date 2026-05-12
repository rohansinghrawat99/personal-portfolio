"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "yellow" | "blue" | "muted";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block border-2 border-foreground px-2 py-0.5 text-xs font-mono font-bold uppercase tracking-wide",
        variant === "yellow" && "bg-primary text-foreground",
        variant === "blue" && "bg-accent-blue text-white border-accent-blue",
        variant === "muted" && "bg-muted text-foreground",
        variant === "default" && "bg-card-bg text-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
