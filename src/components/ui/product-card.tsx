import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";
import { productImage } from "@/data/images";
import { MediaPlaceholder } from "./media-placeholder";
import { cn } from "@/lib/utils";

export function ProductCard({
  product,
  wide = false,
}: {
  product: Product;
  wide?: boolean;
}) {
  return (
    <Link to="/product/$slug" params={{ slug: product.slug }} className="group block">
      <div className="relative overflow-hidden bg-surface">
        <MediaPlaceholder
          gradient={product.gradient}
          src={productImage(product.slug)}
          alt={`${product.name} — ${product.material}`}
          aspectRatio={wide ? "aspect-[3/2]" : "aspect-[4/5]"}
          imageClassName="transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {product.newArrival && (
            <span className="absolute left-4 top-4 bg-white/90 px-2.5 py-1 font-sans text-[10px] uppercase tracking-[0.2em] text-ink">
              New
            </span>
          )}
        </MediaPlaceholder>
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
