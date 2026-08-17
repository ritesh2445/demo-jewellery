import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Menu, Phone, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { SearchOverlay } from "@/components/search-overlay";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Collections", to: "/collection" },
  { label: "Gold", to: "/collection/gold" },
  { label: "Diamond", to: "/collection/diamond" },
  { label: "Bridal", to: "/collection/bridal" },
  { label: "About", to: "/about" },
  { label: "Visit", to: "/visit" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      animate={{ opacity: 1 }}
      className={cn(
        "sticky top-0 z-50 h-[72px] border-b border-border bg-white transition-all duration-300",
        scrolled && "bg-white/90 shadow-sm backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-full max-w-screen-xl items-center justify-between gap-4 px-4 md:px-8">
        <Link
          to="/"
          className="min-w-0 shrink-0 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-ink md:text-xs"
        >
          Tanishq Jewellers
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to as never}
              className="font-sans text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
              activeProps={{ className: "text-ink" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-4">
          <button
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
            className="grid h-11 w-11 place-items-center text-ink"
          >
            <Search size={18} strokeWidth={1.5} />
          </button>
          <a
            href={`tel:${site.phoneTel}`}
            aria-label="Call store"
            className="hidden h-11 w-11 place-items-center text-ink md:grid"
          >
            <Phone size={18} strokeWidth={1.5} />
          </a>
          <Link
            to="/visit"
            className="hidden font-sans text-xs font-medium uppercase tracking-widest text-ink lg:block"
          >
            Enquire
          </Link>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="grid h-11 w-11 place-items-center text-ink lg:hidden"
              >
                <Menu size={20} strokeWidth={1.5} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-screen max-w-none border-0 bg-white p-8"
            >
              <SheetTitle className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
                Menu
              </SheetTitle>
              <motion.nav
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.06 } } }}
                className="mt-10 flex flex-col gap-5"
              >
                {navLinks.map((l) => (
                  <motion.div
                    key={l.label}
                    variants={{
                      hidden: { opacity: 0, x: 24 },
                      show: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link
                      to={l.to as never}
                      onClick={() => setMenuOpen(false)}
                      className="font-serif text-[clamp(2.25rem,8vw,3.5rem)] font-light leading-tight text-ink"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <SearchOverlay open={searchOpen} onOpenChange={setSearchOpen} />
    </motion.header>
  );
}
