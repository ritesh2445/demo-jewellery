import { useMemo, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/product-card";

export function SearchOverlay({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products.filter((p) =>
      [p.name, p.category, p.collection, p.material, ...p.tags]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [query]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="h-screen w-screen max-w-none overflow-y-auto rounded-none border-0 bg-white p-6 md:p-12">
        <DialogTitle className="mb-8 text-center font-serif text-3xl font-light text-ink md:text-4xl">
          Search The Collection
        </DialogTitle>
        <div className="mx-auto w-full max-w-screen-md">
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type to search..."
            className="w-full border-b border-border bg-transparent pb-4 font-serif text-xl font-light text-ink outline-none placeholder:text-muted focus:border-ink"
          />
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {results.map((p) => (
              <div key={p.id} onClick={() => onOpenChange(false)}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
          {query && results.length === 0 && (
            <p className="mt-10 text-center font-sans text-sm font-light text-muted">
              No pieces found. Try a different search.
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
