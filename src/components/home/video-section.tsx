import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { heroBridal } from "@/data/images";

export function VideoSection() {
  return (
    <section className="relative h-[70vh] overflow-hidden bg-ink md:h-[85vh]">
      <img
        src={heroBridal}
        alt="Bridal jewellery campaign"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative flex h-full flex-col items-center justify-center px-4 text-center"
      >
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-white/60">
          The Collection
        </p>
        <h2 className="mt-6 max-w-2xl font-serif text-4xl font-light leading-tight text-white md:text-6xl">
          Discover The Details.
        </h2>
        <Link
          to="/collection"
          className="mt-10 inline-block border border-white px-8 py-3 font-sans text-xs font-medium uppercase tracking-widest text-white transition-colors duration-300 hover:bg-white hover:text-ink"
        >
          View Collection
        </Link>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-12 h-px bg-gold"
        />
      </motion.div>
    </section>
  );
}
