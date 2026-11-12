"use client";

import { PenIcon, MenuIcon } from "./Icons";
import SearchBox from "./SearchBox";
import ThemeToggle from "./ThemeToggle";

export default function TopBar({ onMenu }: { onMenu: () => void }) {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-2 border-b border-line bg-bg px-3 sm:gap-3 sm:px-6">
      <button
        type="button"
        id="menu-button"
        onClick={onMenu}
        aria-label="Open menu"
        aria-controls="site-menu"
        className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-muted hover:bg-surface hover:text-fg lg:hidden"
      >
        <MenuIcon />
      </button>

      <SearchBox />

      <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-2">
        <a
          href="#contact"
          className="hidden h-10 items-center gap-2 rounded-full px-3 text-sm text-muted transition-colors hover:text-fg sm:inline-flex"
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
