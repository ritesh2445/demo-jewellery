import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/layout";
import { site, whatsappUrl } from "@/data/site";
import { fadeUp } from "@/lib/animations";
import { MapPin, Phone, MessageCircle, Clock, Instagram } from "lucide-react";

const title = "Visit — Tanishq Jewellers Ghatanji";
const description =
  "Visit Tanishq Jewellers at Rakesh Chandarana Road, Ghatanji, Maharashtra. Store hours, directions and contact details.";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: VisitPage,
});

function VisitPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink py-28 text-white md:py-40">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden pr-6 opacity-[0.04]">
          <span className="font-serif text-[18vw] font-light leading-none tracking-tight">
            GHATANJI
          </span>
        </div>
        <motion.div
          {...fadeUp}
          className="relative mx-auto max-w-screen-xl px-5 md:px-8"
        >
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold md:text-xs">
            Find Us
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl md:mt-6 md:text-6xl lg:text-7xl">
            Come Visit
            <br />
            The Store.
          </h1>
        </motion.div>
      </section>

      {/* Main info grid */}
      <section className="mx-auto max-w-screen-xl px-5 py-20 md:px-8 md:py-32">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          {/* Address & Hours */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-10"
          >
            <div>
              <div className="mb-3 flex items-center gap-2 text-gold">
                <MapPin size={14} strokeWidth={1.5} />
                <p className="font-sans text-[10px] uppercase tracking-[0.25em] md:text-xs">
                  Address
                </p>
              </div>
              <p className="font-serif text-2xl font-light leading-snug text-ink">
                Tanishq Jewellers
              </p>
              <p className="mt-2 font-sans text-sm font-light leading-relaxed text-muted">
                Rakesh Chandarana Road
                <br />
                Ghatanji, Maharashtra 445301
              </p>
              <a
                href={site.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 border border-ink px-5 py-2.5 font-sans text-[10px] font-medium uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-white"
              >
                <MapPin size={12} strokeWidth={1.5} /> Get Directions
              </a>
            </div>

            <div>
              <div className="mb-3 flex items-center gap-2 text-gold">
                <Clock size={14} strokeWidth={1.5} />
                <p className="font-sans text-[10px] uppercase tracking-[0.25em] md:text-xs">
                  Store Hours
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
                  <p className="font-sans text-xs text-muted">Monday – Saturday</p>
                  <p className="font-sans text-xs font-medium text-ink">10:00 AM – 9:00 PM</p>
                </div>
                <div className="flex items-start justify-between gap-4 pt-1">
                  <p className="font-sans text-xs text-muted">Sunday</p>
                  <p className="font-sans text-xs font-medium text-ink">10:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold md:text-xs">
              Contact Us
            </p>
            <p className="font-sans text-sm font-light leading-relaxed text-muted">
              For enquiries on specific pieces, bridal appointments, or general
              questions — reach us on WhatsApp, call the store, or drop by in
              person. We're happy to help.
            </p>

            <div className="mt-2 flex flex-col gap-3">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-ink px-6 py-4 font-sans text-xs font-medium uppercase tracking-widest text-white transition-opacity hover:opacity-90"
              >
                <MessageCircle size={16} strokeWidth={1.5} />
                Enquire on WhatsApp
              </a>
              <a
                href={`tel:${site.phoneTel}`}
                className="flex items-center gap-3 border border-ink px-6 py-4 font-sans text-xs font-medium uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-white"
              >
                <Phone size={16} strokeWidth={1.5} />
                {site.phone}
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 border border-border px-6 py-4 font-sans text-xs font-medium uppercase tracking-widest text-muted transition-colors hover:border-ink hover:text-ink"
              >
                <Instagram size={16} strokeWidth={1.5} />
                {site.instagramHandle}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map embed */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-screen-xl px-5 py-16 md:px-8 md:py-20">
          <motion.div {...fadeUp}>
            <p className="mb-6 font-sans text-[10px] uppercase tracking-[0.25em] text-gold md:text-xs">
              Location
            </p>
          </motion.div>
          <div className="overflow-hidden border border-border">
            <iframe
              title="Tanishq Jewellers Ghatanji Location"
              src="https://maps.google.com/maps?q=Tanishq+Jewellers+Rakesh+Chandarana+Road+Ghatanji+Maharashtra+445301&output=embed"
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Bridal appointment CTA */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-screen-xl px-5 md:px-8">
          <motion.div
            {...fadeUp}
            className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-muted md:text-xs">
                Bridal
              </p>
              <h2 className="mt-3 font-serif text-2xl font-light text-ink sm:text-3xl md:text-4xl">
                Planning Your Bridal Look?
              </h2>
              <p className="mt-3 max-w-md font-sans text-sm font-light leading-relaxed text-muted">
                Book a private appointment and we'll walk you through our complete
                bridal collection — gold, kundan, and diamond sets made to order
                for your ceremony.
              </p>
            </div>
            <a
              href={whatsappUrl("a bridal jewellery appointment")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 bg-ink px-8 py-4 font-sans text-xs font-medium uppercase tracking-widest text-white transition-opacity hover:opacity-90"
            >
              <MessageCircle size={14} strokeWidth={1.5} />
              Book via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
