import { ArrowRight } from "lucide-react";
import { site, whatsappUrl } from "@/data/site";

export function VisitTeaser() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-white md:py-28">
      <div className="mx-auto grid max-w-screen-xl gap-10 px-5 md:grid-cols-2 md:gap-12 md:px-8">
        <div>
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/50 md:text-xs">Find us</p>
          <h2 className="mt-3 font-serif text-3xl font-light text-white sm:text-4xl md:mt-4 md:text-5xl">
            Visit The Store.
          </h2>
          <p className="mt-6 max-w-sm font-sans text-sm font-light leading-relaxed text-white/60">
            {site.address}
          </p>
          <p className="mt-4 font-sans text-sm font-light text-white/60">
            {site.hours.weekdays}
            <br />
            {site.hours.sunday}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
            <a
              href={`tel:${site.phoneTel}`}
              className="border border-white px-7 py-3 font-sans text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-ink active:bg-white active:text-ink"
            >
              Call
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="bg-white px-7 py-3 font-sans text-xs font-medium uppercase tracking-widest text-ink transition-opacity hover:opacity-90"
            >
              WhatsApp
            </a>
            <a
              href={site.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-2 py-3 font-sans text-xs font-medium uppercase tracking-widest text-white/80 hover:text-white"
            >
              Directions
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
        <div className="pointer-events-none relative hidden md:block">
          <span className="absolute right-0 top-1/2 origin-center -translate-y-1/2 rotate-90 font-serif text-8xl font-light tracking-tight text-white/5">
            GHATANJI
          </span>
        </div>
      </div>
    </section>
  );
}
