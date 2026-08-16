import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Phone } from "lucide-react";
import { site, whatsappUrl } from "@/data/site";

const links = [
  { label: "Collection", to: "/collection" },
  { label: "Gold", to: "/collection/gold" },
  { label: "Diamond", to: "/collection/diamond" },
  { label: "Bridal", to: "/collection/bridal" },
  { label: "About", to: "/about" },
  { label: "Visit", to: "/visit" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-[0.22em] text-ink">
              Tanishq Jewellers
            </p>
            <p className="mt-2 font-sans text-xs uppercase tracking-widest text-muted">
              Ghatanji, Maharashtra
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to as never}
                className="font-sans text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
            >
              <Instagram size={14} strokeWidth={1.5} /> Instagram
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
            >
              <MessageCircle size={14} strokeWidth={1.5} /> WhatsApp
            </a>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
            >
              <Phone size={14} strokeWidth={1.5} /> Call
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-xs font-light text-muted">{site.address}</p>
          <p className="font-sans text-xs font-light text-muted">
            © 2024 Tanishq Jewellers Ghatanji. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
