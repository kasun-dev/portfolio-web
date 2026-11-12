"use client";

import { useRef } from "react";
import { PenIcon, MenuIcon, SearchIcon } from "./Icons";
import { useShell } from "./Shell";
import ThemeToggle from "./ThemeToggle";

export default function TopBar({ onMenu }: { onMenu: () => void }) {
  const { query, setQuery } = useShell();
  const input = useRef<HTMLInputElement>(null);

  const toProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ block: "start" });

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

      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          toProjects();
        }}
        className="flex h-10 min-w-0 flex-1 items-center gap-2 rounded-full bg-surface px-4 sm:max-w-[300px] sm:flex-none sm:basis-[300px]"
      >
        <SearchIcon className="shrink-0 text-muted" />
        <label htmlFor="project-search" className="sr-only">
          Search projects
        </label>
        <input
          ref={input}
          id="project-search"
          type="search"
          value={query}
          placeholder="Search projects"
          autoComplete="off"
          onChange={(e) => {
            const next = e.target.value;
            if (!query && next) toProjects();
            setQuery(next);
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") setQuery("");
          }}
          className="h-full w-full min-w-0 bg-transparent text-sm text-fg placeholder:text-muted focus:outline-none"
        />
      </form>

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
