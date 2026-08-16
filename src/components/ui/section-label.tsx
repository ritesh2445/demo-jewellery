import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-sans text-xs font-normal uppercase tracking-[0.2em] text-muted",
        className,
      )}
    >
      {children}
    </p>
  );
}
