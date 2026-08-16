import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProductImageViewer({
  open,
  onOpenChange,
  name,
  gradients,
  index,
  setIndex,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  name: string;
  gradients: string[];
  index: number;
  setIndex: (i: number) => void;
}) {
  const go = (n: number) => setIndex((n + gradients.length) % gradients.length);
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="h-screen w-screen max-w-none rounded-none border-0 bg-white p-0">
        <DialogTitle className="sr-only">{name}</DialogTitle>
        <div className="relative flex h-full items-center justify-center p-6 md:p-16">
          <div
            className={cn(
              "aspect-[3/4] h-full max-h-full w-auto max-w-full bg-gradient-to-br",
              gradients[index],
            )}
          />
          <button
            aria-label="Previous image"
            onClick={() => go(index - 1)}
            className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center text-ink"
          >
            <ChevronLeft size={22} strokeWidth={1.25} />
          </button>
          <button
            aria-label="Next image"
            onClick={() => go(index + 1)}
            className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center text-ink"
          >
            <ChevronRight size={22} strokeWidth={1.25} />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
