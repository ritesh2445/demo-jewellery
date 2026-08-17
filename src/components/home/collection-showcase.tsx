import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { collections } from "@/data/collections";
import { collectionImages } from "@/data/images";
import { cn } from "@/lib/utils";

export function CollectionShowcase() {
  const panels = collections.filter((c) => c.slug === "gold" || c.slug === "diamond");
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {panels.map((c) => (
        <Link
          key={c.id}
          to="/collection/$category"
          params={{ category: c.slug }}
          className={cn(
            "group relative flex h-[55vh] items-end overflow-hidden bg-gradient-to-br md:h-[65vh]",
            c.gradient,
          )}
        >
          <img
            src={collectionImages[c.slug]}
            alt={`${c.name} collection`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative p-8 md:p-12"
          >
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-white/60">
              {c.tagline}
            </p>
            <h3 className="mt-4 font-serif text-4xl font-light text-white md:text-5xl">
              {c.name}
            </h3>
            <span className="mt-6 inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-widest text-white">
              Explore
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </motion.div>
        </Link>
      ))}
    </section>
  );
}
