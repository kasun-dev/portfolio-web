"use client";

import { MoonIcon, SunIcon } from "./Icons";

/**
 * The theme class is set before first paint by the inline script in layout.tsx.
 * Icons switch with CSS, so there is no hydration mismatch to manage.
 */
export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const nextDark = !root.classList.contains("dark");
    root.classList.toggle("dark", nextDark);
    try {
      localStorage.setItem("theme", nextDark ? "dark" : "light");
    } catch {
      /* storage can be blocked; the choice just won't persist */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-fg transition-colors hover:border-fg/40"
    >
      <SunIcon className="hidden dark:block" />
      <MoonIcon className="block dark:hidden" />
    </button>
  );
}
