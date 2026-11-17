"use client";

import { useEffect, useState } from "react";
import { iconBtn } from "../data/ui";
import { PenIcon, MenuIcon } from "./Icons";
import SearchBox from "./SearchBox";
import ThemeToggle from "./ThemeToggle";

export default function TopBar({ onMenu }: { onMenu: () => void }) {
  // A soft shadow appears once the page has scrolled under the bar
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 flex h-14 items-center gap-2 border-b border-line bg-bg px-3 transition-shadow duration-200 sm:gap-3 sm:px-6 ${
        scrolled ? "shadow-[0_8px_16px_-14px_rgb(0_0_0/0.35)]" : ""
      }`}
    >
      <button
        type="button"
        id="menu-button"
        onClick={onMenu}
        aria-label="Open menu"
        aria-controls="site-menu"
        className={`${iconBtn} lg:hidden`}
      >
        <MenuIcon />
      </button>

      <SearchBox />

      <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-2">
        <a
          href="#contact"
          className="hidden h-10 items-center gap-2 rounded-full px-3 text-sm text-muted transition-colors duration-150 hover:bg-surface hover:text-fg active:scale-[0.97] sm:inline-flex"
        >
          <PenIcon width={18} height={18} />
          Contact
        </a>
        <ThemeToggle />
        <a href="#home" aria-label="Back to the top" className="ml-1 shrink-0">
          <img
            src="./img/avatar-96.webp"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-cover"
          />
        </a>
      </div>
    </header>
  );
}
