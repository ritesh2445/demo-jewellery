import type { ReactNode } from "react";
import { AnnouncementBar } from "./announcement-bar";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-ink">
      <AnnouncementBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
