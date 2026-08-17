import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/layout";
import { site, whatsappUrl } from "@/data/site";
import { fadeUp } from "@/lib/animations";
import { MessageCircle, Phone, MapPin, Instagram } from "lucide-react";

const title = "About — Tanishq Jewellers Ghatanji";
const description =
  "Learn about Tanishq Jewellers, Ghatanji — fine gold, diamond and bridal jewellery crafted with generations of tradition in Maharashtra.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink py-28 text-white md:py-40">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden pr-8 opacity-[0.04]">
          <span className="font-serif text-[18vw] font-light leading-none tracking-tight">TJ</span>
        </div>
        <motion.div
          {...fadeUp}
          className="relative mx-auto max-w-screen-xl px-5 md:px-8"
        >
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold md:text-xs">
            Our Story
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl md:mt-6 md:text-6xl lg:text-7xl">
            Crafted With Purpose.
            <br />
            Worn With Pride.
          </h1>
        </motion.div>
      </section>

      {/* Story section */}
      <section className="mx-auto max-w-screen-xl px-5 py-20 md:px-8 md:py-32">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold md:text-xs">
              Who We Are
            </p>
            <h2 className="mt-4 font-serif text-3xl font-light leading-tight tracking-tight text-ink sm:text-4xl">
              Tanishq Jewellers,
              <br />
              Ghatanji
            </h2>
            <p className="mt-6 font-sans text-sm font-light leading-relaxed text-muted">
              Rooted in Ghatanji, Maharashtra, Tanishq Jewellers is a trusted
              destination for fine gold, diamond, and bridal jewellery. Every
              piece in our store reflects the rich heritage of Indian
              craftsmanship — designed to mark life's most meaningful moments.
            </p>
            <p className="mt-4 font-sans text-sm font-light leading-relaxed text-muted">
              From traditional 22K gold designs to contemporary diamond
              collections, we curate jewellery that resonates across
              generations. Each piece is selected for its craftsmanship,
              quality, and the story it carries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-10 border-l border-border pl-8 md:pl-12"
          >
            {[
              {
                label: "Craftsmanship",
                text: "Every piece is sourced from master craftspeople using time-honoured techniques.",
              },
              {
                label: "Quality",
                text: "We carry certified, hallmarked jewellery across 18K, 22K gold and diamond categories.",
              },
              {
                label: "Trust",
                text: "Transparent pricing, honest advice, and a welcoming experience for every customer.",
              },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-ink">
                  {item.label}
                </p>
                <p className="mt-2 font-sans text-sm font-light leading-relaxed text-muted">
                  {item.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-screen-xl border-t border-border px-5 md:px-8" />

      {/* Collections overview */}
      <section className="mx-auto max-w-screen-xl px-5 py-20 md:px-8 md:py-32">
        <motion.div {...fadeUp}>
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold md:text-xs">
            What We Offer
          </p>
          <h2 className="mt-4 font-serif text-3xl font-light tracking-tight text-ink sm:text-4xl">
            Our Collections
          </h2>
        </motion.div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              name: "Gold Jewellery",
              detail: "22K & 18K traditional and contemporary designs — necklaces, bangles, earrings and more.",
            },
            {
              name: "Diamond Collection",
              detail: "Certified diamond rings, pendants and earrings set in 18K gold.",
            },
            {
              name: "Bridal Sets",
              detail: "Complete bridal jewellery in kundan, polki and gold — made to order for your ceremony.",
            },
          ].map((col, i) => (
            <motion.div
              key={col.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="border border-border p-6"
            >
              <p className="font-serif text-xl font-light text-ink">{col.name}</p>
              <p className="mt-3 font-sans text-xs font-light leading-relaxed text-muted">{col.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-ink py-16 text-white md:py-24">
        <div className="mx-auto flex max-w-screen-xl flex-col items-start gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/50 md:text-xs">
              Get in touch
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-white sm:text-4xl">
              We'd Love to Help.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white px-6 py-3 font-sans text-xs font-medium uppercase tracking-widest text-ink transition-opacity hover:opacity-90"
            >
              <MessageCircle size={14} strokeWidth={1.5} /> WhatsApp
            </a>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center gap-2 border border-white px-6 py-3 font-sans text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-ink"
            >
              <Phone size={14} strokeWidth={1.5} /> Call
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 font-sans text-xs font-medium uppercase tracking-widest text-white/60 transition-colors hover:text-white"
            >
              <Instagram size={14} strokeWidth={1.5} /> Instagram
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
