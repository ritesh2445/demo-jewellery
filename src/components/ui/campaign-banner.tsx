import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CampaignBannerProps {
  gradient: string;
  eyebrow: string;
  headline: string;
  cta: string;
  ctaLink: string;
  textAlign?: "left" | "center";
}

export function CampaignBanner({
  gradient,
  eyebrow,
  headline,
  cta,
  ctaLink,
  textAlign = "center",
}: CampaignBannerProps) {
  return (
    <section
      className={cn(
        "relative flex h-[60vh] w-full items-center overflow-hidden bg-gradient-to-br md:h-[70vh]",
        gradient,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={cn(
          "relative mx-auto w-full max-w-screen-xl px-4 md:px-8",
          textAlign === "center" && "md:text-center",
        )}
      >
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-white/60">
          {eyebrow}
        </p>
        <h2
          className={cn(
            "my-6 whitespace-pre-line font-serif text-4xl font-light leading-tight text-white md:text-6xl",
            textAlign === "center" ? "md:mx-auto md:max-w-xl" : "max-w-xl",
          )}
        >
          {headline}
        </h2>
        <Link
          to={ctaLink as never}
          className="inline-block border border-white px-8 py-3 font-sans text-xs font-medium uppercase tracking-widest text-white transition-colors duration-300 hover:bg-white hover:text-ink"
        >
          {cta}
        </Link>
      </motion.div>
    </section>
  );
}
