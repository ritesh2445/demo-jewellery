import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { Layout } from "@/components/layout/layout";
import { ProductCard } from "@/components/ui/product-card";
import { ProductImageViewer } from "@/components/product-image-viewer";
import { SectionLabel } from "@/components/ui/section-label";
import { getProduct, products } from "@/data/products";
import { productImage } from "@/data/images";
import { site, whatsappUrl } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/product/$slug")({
  head: ({ params }) => {
    const p = getProduct(params.slug);
    const title = p
      ? `${p.name} — ${p.material} | Tanishq Jewellers Ghatanji`
      : "Jewellery | Tanishq Jewellers Ghatanji";
    const description = p
      ? `${p.description} Enquire on WhatsApp or visit our Ghatanji store.`
      : "Fine gold, diamond and bridal jewellery in Ghatanji, Maharashtra.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
      ],
    };
  },
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return null;
  },
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useParams();
  const product = getProduct(slug);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  if (!product) return null;

  const related = products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .concat(products.filter((p) => p.slug !== product.slug && p.collection === product.collection))
    .filter((p, i, arr) => arr.findIndex((x) => x.slug === p.slug) === i)
    .slice(0, 4);

  const main = productImage(product.slug)!;
  const images = [main, main, main];

  return (
    <Layout>
      <div className="mx-auto max-w-screen-xl px-4 pt-8 md:px-8">
        <nav className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted">
          <Link to="/" className="hover:text-ink">
            Home
          </Link>
          <span className="px-2">/</span>
          <Link to="/collection" className="hover:text-ink">
            Collection
          </Link>
          <span className="px-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-screen-xl gap-10 px-4 pb-24 pt-8 md:grid-cols-2 md:gap-16 md:px-8 md:pt-12">
        <div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            onClick={() => setOpen(true)}
            className="block w-full overflow-hidden bg-surface"
            aria-label="Open full image"
          >
            <img
              src={images[index]}
              alt={product.name}
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.button>
          <div className="mt-4 flex gap-3">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`View image ${i + 1}`}
                className={cn(
                  "h-20 w-16 overflow-hidden border bg-surface transition-colors",
                  i === index ? "border-ink" : "border-transparent",
                )}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="md:pt-6"
        >
          <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-gold">
            {product.material}
          </p>
          <h1 className="mt-4 font-serif text-4xl font-light leading-tight tracking-tight text-ink md:text-5xl">
            {product.name}
          </h1>
          <p className="mt-6 max-w-md font-sans text-sm font-light leading-relaxed text-muted">
            {product.description}
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-y-4 border-y border-border py-6 font-sans text-xs">
            <dt className="uppercase tracking-widest text-muted">Availability</dt>
            <dd className="text-ink">{product.availability}</dd>
            <dt className="uppercase tracking-widest text-muted">Collection</dt>
            <dd className="capitalize text-ink">{product.collection}</dd>
            <dt className="uppercase tracking-widest text-muted">Category</dt>
            <dd className="capitalize text-ink">{product.category}</dd>
          </dl>

          <p className="mt-6 font-sans text-xs font-light leading-relaxed text-muted">
            Pricing varies with daily gold rates and final specification. Enquire for a quote.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={whatsappUrl(product.name)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-ink px-8 py-4 font-sans text-xs font-medium uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90"
            >
              <MessageCircle size={15} strokeWidth={1.5} /> Enquire on WhatsApp
            </a>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 border border-ink px-8 py-4 font-sans text-xs font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-white"
            >
              <Phone size={15} strokeWidth={1.5} /> Call Store
            </a>
            <a
              href={site.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-2 py-4 font-sans text-xs font-medium uppercase tracking-[0.2em] text-muted transition-colors hover:text-ink"
            >
              <MapPin size={15} strokeWidth={1.5} /> Directions
            </a>
          </div>
        </motion.div>
      </div>

      {related.length > 0 && (
        <section className="border-t border-border py-16 md:py-24">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <SectionLabel>You may also like</SectionLabel>
            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
            <div className="mt-12 text-right">
              <Link
                to="/collection"
                className="group inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-widest text-ink"
              >
                View all pieces
                <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <div className="sticky bottom-0 z-40 border-t border-border bg-white p-3 md:hidden">
        <a
          href={whatsappUrl(product.name)}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 bg-ink py-4 font-sans text-xs font-medium uppercase tracking-[0.2em] text-white"
        >
          <MessageCircle size={15} strokeWidth={1.5} /> Enquire on WhatsApp
        </a>
      </div>

      <ProductImageViewer
        open={open}
        onOpenChange={setOpen}
        name={product.name}
        images={images}
        index={index}
        setIndex={setIndex}
      />
    </Layout>
  );
}
