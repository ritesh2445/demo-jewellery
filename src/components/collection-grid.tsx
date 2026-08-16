import { useMemo } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { ProductCard } from "@/components/ui/product-card";
import { cn } from "@/lib/utils";

const filters = [
  { label: "All", slug: "all" },
  ...categories.map((c) => ({ label: c.name, slug: c.slug })),
  { label: "Gold", slug: "gold" },
  { label: "Diamond", slug: "diamond" },
  { label: "Bridal", slug: "bridal" },
];

export function CollectionGrid({ active = "all" }: { active?: string }) {
  const navigate = useNavigate();

  const list = useMemo(() => {
    if (active === "all") return products;
    return products.filter((p) => p.category === active || p.collection === active);
  }, [active]);

  const select = (slug: string) => {
    if (slug === "all") navigate({ to: "/collection" });
    else navigate({ to: "/collection/$category", params: { category: slug } });
  };

  return (
    <>
      <div className="sticky top-[72px] z-30 border-b border-border bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="flex gap-6 overflow-x-auto py-4 md:justify-center">
            {filters.map((f) => (
              <button
                key={f.slug}
                onClick={() => select(f.slug)}
                className={cn(
                  "shrink-0 whitespace-nowrap border-b-2 pb-1 font-sans text-xs uppercase tracking-widest transition-colors",
                  active === f.slug
                    ? "border-ink text-ink"
                    : "border-transparent text-muted hover:text-ink",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-screen-xl px-4 py-14 md:px-8 md:py-20"
      >
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 md:gap-y-16 lg:grid-cols-4">
          {list.map((p, i) => {
            const wide = (i + 1) % 7 === 0;
            return (
              <div key={p.id} className={cn(wide && "md:col-span-2")}>
                <ProductCard product={p} wide={wide} />
              </div>
            );
          })}
        </div>
        {list.length === 0 && (
          <p className="py-20 text-center font-sans text-sm font-light text-muted">
            No pieces in this selection yet.{" "}
            <Link to="/collection" className="underline underline-offset-4">
              View all
            </Link>
          </p>
        )}
      </motion.div>
    </>
  );
}
