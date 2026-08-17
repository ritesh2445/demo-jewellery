import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getProduct } from "@/data/products";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { productImage } from "@/data/images";
import { imageReveal } from "@/lib/animations";
import { cn } from "@/lib/utils";

function Feature({
  slug,
  index,
  reverse,
}: {
  slug: string;
  index: string;
  reverse?: boolean;
}) {
  const product = getProduct(slug);
  if (!product) return null;

  return (
    <div
      className={cn(
        "mx-auto flex min-h-[80vh] max-w-screen-xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:gap-16 md:px-8",
        reverse && "md:flex-row-reverse",
      )}
    >
      <motion.div {...imageReveal} className="w-full md:w-1/2">
        <MediaPlaceholder
          gradient={product.gradient}
          src={productImage(product.slug)}
          alt={product.name}
          aspectRatio="aspect-[4/5]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="w-full md:w-1/2"
      >
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-gold">{index}</p>
        <h2 className="mt-6 font-serif text-4xl font-light leading-tight tracking-tight text-ink md:text-6xl">
          {product.name}
        </h2>
        <p className="mt-4 font-sans text-xs uppercase tracking-widest text-muted">
          {product.material}
        </p>
        <p className="mt-6 max-w-md font-sans text-sm font-light leading-relaxed text-muted">
          {product.description}
        </p>
        <Link
          to="/product/$slug"
          params={{ slug: product.slug }}
          className="group mt-8 inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-widest text-ink"
        >
          Discover
          <ArrowRight
            size={14}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </motion.div>
    </div>
  );
}

export function EditorialFeature() {
  return (
    <section className="py-10 md:py-16">
      <Feature slug="antique-gold-necklace" index="01" />
      <Feature slug="diamond-solitaire-ring" index="02" reverse />
    </section>
  );
}
