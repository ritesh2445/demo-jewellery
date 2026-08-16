import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import { JewelSilhouette, MediaPlaceholder } from "./media-placeholder";
import { cn } from "@/lib/utils";

export function ProductCard({
  product,
  wide = false,
}: {
  product: Product;
  wide?: boolean;
}) {
  return (
    <Link
      to="/product/$slug"
      params={{ slug: product.slug }}
      className="group block"
    >
      <div className="overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MediaPlaceholder
            gradient={product.gradient}
            aspectRatio={wide ? "aspect-[3/2]" : "aspect-[4/5]"}
          >
            <JewelSilhouette />
            {product.newArrival && (
              <span className="absolute left-4 top-4 font-sans text-[10px] uppercase tracking-[0.2em] text-gold">
                New
              </span>
            )}
          </MediaPlaceholder>
        </motion.div>
      </div>
      <div className="pt-4">
        <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold">
          {product.material}
        </p>
        <h3 className="mt-2 font-serif text-lg font-light leading-snug text-ink">
          {product.name}
        </h3>
        <span
          className={cn(
            "mt-3 inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-widest text-ink",
            "opacity-60 transition-opacity duration-300 group-hover:opacity-100",
          )}
        >
          View
          <span className="h-px w-6 bg-ink transition-all duration-300 group-hover:w-10" />
        </span>
      </div>
    </Link>
  );
}
