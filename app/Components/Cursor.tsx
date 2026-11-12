"use client";

import { useEffect, useRef } from "react";

/**
 * A small round pointer with a pulsing ring, for mouse users only. Touch
 * screens and visitors who prefer reduced motion keep the normal cursor.
 * It also turns off the right-click menu outside text fields.
 */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMenu = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (t?.closest("input, textarea")) return; // keep paste and spellcheck
      e.preventDefault();
    };
    document.addEventListener("contextmenu", onMenu);

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || calm) return () => document.removeEventListener("contextmenu", onMenu);

    const root = document.documentElement;
    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    let raf = 0;

    const draw = () => {
      rx += (x - rx) * 0.22; // the ring trails the dot a little
      ry += (y - ry) * 0.22;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px,${y}px,0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      raf = requestAnimationFrame(draw);
    };

    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!root.classList.contains("has-cursor")) {
        rx = x;
        ry = y;
        root.classList.add("has-cursor");
        raf = requestAnimationFrame(draw);
      }
      const t = e.target as HTMLElement | null;
      root.classList.toggle("cursor-link", Boolean(t?.closest("a, button, summary, [role=button]")));
      root.classList.toggle("cursor-text", Boolean(t?.closest("input, textarea")));
    };
    const leave = () => root.classList.remove("has-cursor");

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("mouseleave", leave);
    return () => {
      document.removeEventListener("contextmenu", onMenu);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(raf);
      root.classList.remove("has-cursor", "cursor-link", "cursor-text");
    };
  }, []);

  return (
    <div aria-hidden className="cursor-layer">
      <div ref={ring} className="cursor-ring">
        <span className="cursor-pulse" />
      </div>
      <div ref={dot} className="cursor-dot" />
    </div>
  );
}
