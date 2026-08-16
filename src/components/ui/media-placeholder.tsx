import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MediaPlaceholderProps {
  gradient: string;
  aspectRatio?: string;
  className?: string;
  children?: ReactNode;
}

export function MediaPlaceholder({
  gradient,
  aspectRatio = "aspect-square",
  className,
  children,
}: MediaPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br",
        gradient,
        aspectRatio,
        className,
      )}
    >
      {children}
    </div>
  );
}

export function JewelSilhouette() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="h-[38%] w-[38%] rounded-full border border-ink/10" />
      <div className="absolute h-[8%] w-[8%] rounded-full border border-ink/10" />
    </div>
  );
}
