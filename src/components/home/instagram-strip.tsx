import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { site } from "@/data/site";
import { SectionLabel } from "@/components/ui/section-label";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

const igTileGradients = [
  "from-amber-200 to-rose-200",
  "from-stone-200 to-amber-100",
  "from-rose-100 to-amber-200",
  "from-yellow-100 to-stone-200",
  "from-amber-100 to-rose-100",
  "from-stone-100 to-yellow-100",
];

export function InstagramStrip() {
  return (
    <section className="bg-surface py-20">
      <motion.div {...fadeUp} className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <SectionLabel>Follow the collection</SectionLabel>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 font-sans text-xs uppercase tracking-widest text-ink underline-offset-4 hover:underline"
          >
            {site.instagramHandle}
          </a>
        </div>
        <div className="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-6 md:gap-3 md:px-0">
          {igTileGradients.map((g, i) => (
            <a
              key={i}
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "group relative aspect-square min-w-[140px] shrink-0 overflow-hidden bg-gradient-to-br md:min-w-0",
                g,
              )}
            >
              <span className="absolute inset-0 grid place-items-center bg-black/0 text-white opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100">
                <Instagram size={20} strokeWidth={1.25} />
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
