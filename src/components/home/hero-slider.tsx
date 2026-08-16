import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    gradient: "from-stone-900 via-stone-800 to-amber-950",
    eyebrow: "New Arrival",
    headline: "Timeless Gold",
    subtitle: "Jewellery designed to become part of your story.",
    cta: "Explore Collection",
    ctaLink: "/collection",
    textAlign: "left" as const,
  },
  {
    gradient: "from-amber-950 via-stone-900 to-stone-950",
    eyebrow: "Bridal",
    headline: "For Moments\nThat Matter.",
    subtitle: "Crafted for your most cherished ceremonies.",
    cta: "View Bridal",
    ctaLink: "/collection/bridal",
    textAlign: "center" as const,
  },
  {
    gradient: "from-slate-900 via-stone-800 to-slate-950",
    eyebrow: "Fine Diamonds",
    headline: "Let It Sparkle.",
    subtitle: "Precision cut, beautifully set in gold.",
    cta: "Discover Diamonds",
    ctaLink: "/collection/diamond",
    textAlign: "left" as const,
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(index + 1), 5500);
    return () => clearTimeout(t);
  }, [index, paused, go]);

  const slide = slides[index];

  return (
    <section
      className="relative min-h-[90svh] w-full overflow-hidden md:min-h-[95svh]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className={cn("absolute inset-0 bg-gradient-to-br", slide.gradient)}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      <div className="relative flex min-h-[90svh] items-end md:min-h-[95svh]">
        <div className="mx-auto w-full max-w-screen-xl px-4 pb-16 md:px-8 md:pb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                slide.textAlign === "center" && "md:mx-auto md:max-w-2xl md:text-center",
              )}
            >
              <p className="mb-4 font-sans text-xs uppercase tracking-[0.25em] text-white/70">
                {slide.eyebrow}
              </p>
              <h1 className="mb-4 whitespace-pre-line font-serif text-5xl font-light leading-[1.05] tracking-tight text-white md:text-7xl">
                {slide.headline}
              </h1>
              <p
                className={cn(
                  "mb-8 max-w-sm font-sans text-sm font-light text-white/70",
                  slide.textAlign === "center" && "md:mx-auto",
                )}
              >
                {slide.subtitle}
              </p>
              <Link
                to={slide.ctaLink as never}
                className="inline-block border border-white px-8 py-3 font-sans text-xs font-medium uppercase tracking-widest text-white transition-colors duration-300 hover:bg-white hover:text-ink"
              >
                {slide.cta}
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <motion.div
        key={`line-${index}`}
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="absolute bottom-16 right-6 h-px bg-gold md:bottom-20 md:right-10"
      />

      <div className="pointer-events-none absolute left-6 right-6 top-1/2 flex -translate-y-1/2 justify-between">
        <button
          aria-label="Previous slide"
          onClick={() => go(index - 1)}
          className="pointer-events-auto grid h-11 w-11 place-items-center text-white/80 transition-colors hover:text-white"
        >
          <ChevronLeft size={20} strokeWidth={1.25} />
        </button>
        <button
          aria-label="Next slide"
          onClick={() => go(index + 1)}
          className="pointer-events-auto grid h-11 w-11 place-items-center text-white/80 transition-colors hover:text-white"
        >
          <ChevronRight size={20} strokeWidth={1.25} />
        </button>
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.eyebrow}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => go(i)}
            className="h-6 px-1"
          >
            <motion.span
              animate={{ width: i === index ? 20 : 6 }}
              transition={{ duration: 0.4 }}
              className={cn(
                "block h-[2px] rounded-full",
                i === index ? "bg-white" : "bg-white/40",
              )}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
