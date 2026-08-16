import { motion } from "framer-motion";
import { categories } from "@/data/categories";
import { CategoryTile } from "@/components/ui/category-tile";
import { SectionLabel } from "@/components/ui/section-label";
import { fadeUp } from "@/lib/animations";

export function ShopByCategory() {
  return (
    <section className="py-20 md:py-28">
      <motion.div {...fadeUp} className="mx-auto max-w-screen-xl px-4 md:px-8">
        <SectionLabel>Shop by product</SectionLabel>
        <div className="mt-10 hidden grid-cols-6 gap-6 md:grid">
          {categories.map((c) => (
            <CategoryTile key={c.id} category={c} />
          ))}
        </div>
        <div className="-mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:hidden">
          {categories.map((c) => (
            <CategoryTile key={c.id} category={c} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
