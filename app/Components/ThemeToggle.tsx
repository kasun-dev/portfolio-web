"use client";

import { useEffect, useRef, useState } from "react";
import { iconBtn } from "../data/ui";
import { MoonIcon, SunIcon } from "./Icons";

/**
 * The theme class is set before first paint by the inline script in layout.tsx.
 * Switching reveals the new theme as a circle growing from the button where the
 * browser supports it, and cross-fades the colours everywhere else.
 */
export default function ThemeToggle() {
  const btn = useRef<HTMLButtonElement>(null);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const read = () => setDark(root.classList.contains("dark"));
    read();
    const mo = new MutationObserver(read);
    mo.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => mo.disconnect();
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");
    const apply = () => {
      root.classList.toggle("dark", next);
      try {
        localStorage.setItem("theme", next ? "dark" : "light");
      } catch {
        /* storage can be blocked; the choice just won't persist */
      }
    };

    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (calm) return apply();

    const vt = (document as Document & { startViewTransition?: (cb: () => void) => { ready: Promise<void> } })
      .startViewTransition;
    if (vt && btn.current) {
      const r = btn.current.getBoundingClientRect();
      const x = r.left + r.width / 2;
      const y = r.top + r.height / 2;
      const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
      const t = vt.call(document, apply);
      t.ready
        .then(() =>
          root.animate(
            { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
            { duration: 500, easing: "cubic-bezier(.4,0,.2,1)", pseudoElement: "::view-transition-new(root)" },
          ),
        )
        .catch(() => {});
      return;
    }

    root.classList.add("theme-fade");
    apply();
    setTimeout(() => root.classList.remove("theme-fade"), 350);
  };

  return (
    <button
      ref={btn}
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className={iconBtn}
    >
      <span className="relative grid h-5 w-5 place-items-center">
        <MoonIcon className="absolute transition-all duration-300 ease-out dark:-rotate-90 dark:scale-50 dark:opacity-0" />
        <SunIcon className="absolute rotate-90 scale-50 opacity-0 transition-all duration-300 ease-out dark:rotate-0 dark:scale-100 dark:opacity-100" />
      </span>
    </button>
  );
}
