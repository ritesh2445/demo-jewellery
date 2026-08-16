import { motion } from "framer-motion";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/product-card";
import { SectionLabel } from "@/components/ui/section-label";
import { fadeUp } from "@/lib/animations";

export function FeaturedCollection() {
  const featured = products.filter((p) => p.featured).slice(0, 4);
  return (
    <section className="bg-surface py-20 md:py-28">
      <motion.div {...fadeUp} className="mx-auto max-w-screen-xl px-4 md:px-8">
        <SectionLabel>Featured collection</SectionLabel>
        <h2 className="mt-4 font-serif text-4xl font-light tracking-tight text-ink md:text-5xl">
          Pieces We Love
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
