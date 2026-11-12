"use client";

import { useEffect, useRef, useState } from "react";

const GLYPHS = "01<>/{}#$%&=+*ABCDEFabcdef";

/** The heading decodes from noise into its text when it scrolls into view,
 *  like a sensor locking onto a signal. Screen readers always get the real text. */
export default function SectionTitle({ id, text }: { id: string; text: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [shown, setShown] = useState(text);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const total = 900;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / total);
          const settled = Math.floor(t * text.length);
          setShown(
            text
              .split("")
              .map((ch, i) =>
                ch === " " || i < settled
                  ? ch
                  : GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
              )
              .join(""),
          );
          if (t < 1) raf = requestAnimationFrame(tick);
          else setShown(text);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    // Start scrambled only once we know the heading is below the fold
    const rect = el.getBoundingClientRect();
    if (rect.top > window.innerHeight * 0.4) {
      setShown(text.replace(/\S/g, () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)]));
    }
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [text]);

  return (
    <h2
      id={`${id}-title`}
      ref={ref}
      aria-label={text}
      className="font-display text-4xl font-semibold tracking-tight sm:text-5xl"
    >
      <span aria-hidden>{shown}</span>
    </h2>
  );
}
