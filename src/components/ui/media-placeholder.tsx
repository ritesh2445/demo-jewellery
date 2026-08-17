import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MediaPlaceholderProps {
  gradient: string;
  src?: string;
  alt?: string;
  eager?: boolean;
  aspectRatio?: string;
  className?: string;
  imageClassName?: string;
  children?: ReactNode;
}

export function MediaPlaceholder({
  gradient,
  src,
  alt = "",
  eager = false,
  aspectRatio = "aspect-square",
  className,
  imageClassName,
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
      {src && (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className={cn("absolute inset-0 h-full w-full object-cover", imageClassName)}
        />
      )}
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
