import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroBridal, heroDiamond, heroGold } from "@/data/images";
import { cn } from "@/lib/utils";

const slides = [
  {
    image: heroGold,
    alt: "Model wearing an antique 22K gold necklace",
    eyebrow: "New Arrival",
    headline: "Timeless Gold",
    subtitle: "Jewellery designed to become part of your story.",
    cta: "Explore Collection",
    ctaLink: "/collection",
    textAlign: "left" as const,
  },
  {
    image: heroBridal,
    alt: "Bride wearing a kundan bridal jewellery set",
    eyebrow: "Bridal",
    headline: "For Moments\nThat Matter.",
    subtitle: "Crafted for your most cherished ceremonies.",
    cta: "View Bridal",
    ctaLink: "/collection/bridal",
    textAlign: "center" as const,
  },
  {
    image: heroDiamond,
    alt: "Diamond pendant and studs worn on a dark background",
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
    const t = setTimeout(() => go(index + 1), 6000);
    return () => clearTimeout(t);
  }, [index, paused, go]);

  const slide = slides[index] ?? slides[0]!;

  return (
    <section
      className="relative min-h-[88svh] w-full overflow-hidden bg-ink md:min-h-[95svh]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2, ease: "easeInOut" }, scale: { duration: 7, ease: "linear" } }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.alt}
            loading={index === 0 ? "eager" : "lazy"}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

      <div className="relative flex min-h-[88svh] items-end md:min-h-[95svh]">
        <div className="mx-auto w-full max-w-screen-xl px-5 pb-16 md:px-8 md:pb-24">
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
              <p className="mb-3 font-sans text-[10px] uppercase tracking-[0.3em] text-gold md:mb-4 md:text-xs">
                {slide.eyebrow}
              </p>
              <h1 className="mb-4 whitespace-pre-line font-serif text-4xl font-light leading-[1.05] tracking-tight text-white sm:text-5xl md:mb-5 md:text-7xl lg:text-8xl">
                {slide.headline}
              </h1>
              <p
                className={cn(
                  "mb-7 max-w-sm font-sans text-sm font-light leading-relaxed text-white/75 md:mb-9",
                  slide.textAlign === "center" && "md:mx-auto",
                )}
              >
                {slide.subtitle}
              </p>
              <Link
                to={slide.ctaLink as never}
                className="group relative inline-block overflow-hidden border border-white/70 px-8 py-3.5 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-white md:px-10 md:py-4 md:text-xs"
              >
                <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 ease-out group-hover:translate-x-0" />
                <span className="relative transition-colors duration-500 group-hover:text-ink">
                  {slide.cta}
                </span>
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
        className="absolute bottom-20 right-6 h-px bg-gold md:bottom-24 md:right-10"
      />

      <div className="pointer-events-none absolute left-2 right-2 top-1/2 flex -translate-y-1/2 justify-between md:left-6 md:right-6">
        <button
          aria-label="Previous slide"
          onClick={() => go(index - 1)}
          className="pointer-events-auto grid h-12 w-12 place-items-center text-white/70 transition-colors hover:text-white active:text-white"
        >
          <ChevronLeft size={22} strokeWidth={1.2} />
        </button>
        <button
          aria-label="Next slide"
          onClick={() => go(index + 1)}
          className="pointer-events-auto grid h-12 w-12 place-items-center text-white/70 transition-colors hover:text-white active:text-white"
        >
          <ChevronRight size={22} strokeWidth={1.2} />
        </button>
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3 md:bottom-8">
        {slides.map((s, i) => (
          <button
            key={s.headline}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => go(i)}
            className={cn(
              "h-0.5 w-8 transition-all duration-500 md:h-px md:w-10",
              i === index ? "bg-gold" : "bg-white/35",
            )}
          />
        ))}
      </div>
    </section>
  );
}
