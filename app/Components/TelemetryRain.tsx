"use client";

import { useEffect, useRef } from "react";

const CHARS = "0123456789ABCDEF{}<>/#$%=+*";

/** Sensor readings drifting down the screen. Light on the GPU: one small
 *  canvas at 1x, ~20 frames a second, paused when the tab is hidden and
 *  drawn once (no motion) for visitors who prefer reduced motion. */
export default function TelemetryRain() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    // Phones skip the rain entirely: it is decoration and the battery matters more
    if (!window.matchMedia("(min-width: 1024px)").matches) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let colW = 24;
    let heads: number[] = [];
    let speeds: number[] = [];
    let head = "255 210 63";
    let trail = "244 245 247";
    let raf = 0;
    let last = 0;

    const readColours = () => {
      const cs = getComputedStyle(document.documentElement);
      const dark = document.documentElement.classList.contains("dark");
      head = cs.getPropertyValue(dark ? "--brand" : "--accent").trim() || head;
      trail = cs.getPropertyValue("--fg").trim() || trail;
    };

    const resize = () => {
      if (!w && !canvas.width) canvas.width = 1;
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      colW = w < 640 ? 28 : 24;
      const cols = Math.ceil(w / colW);
      heads = Array.from({ length: cols }, () => Math.random() * (h / 16));
      speeds = Array.from({ length: cols }, () => 0.25 + Math.random() * 0.6);
      ctx.font = "13px ui-monospace, SFMono-Regular, monospace";
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const rows = Math.ceil(h / 16);
      for (let c = 0; c < heads.length; c++) {
        const x = c * colW + 6;
        const hy = Math.floor(heads[c]);
        for (let k = 0; k < 14; k++) {
          const row = hy - k;
          if (row < 0 || row > rows) continue;
          const a = k === 0 ? 0.7 : 0.32 * (1 - k / 14);
          ctx.fillStyle = `rgb(${k === 0 ? head : trail} / ${a})`;
          // stable glyph per cell so it does not flicker every frame
          const g = CHARS[(row * 7 + c * 13) % CHARS.length];
          ctx.fillText(g, x, row * 16);
        }
      }
    };

    const step = (t: number) => {
      raf = requestAnimationFrame(step);
      if (document.hidden || t - last < 50) return;
      last = t;
      for (let c = 0; c < heads.length; c++) {
        heads[c] += speeds[c];
        if (heads[c] * 16 > h + 14 * 16) heads[c] = -Math.random() * 20;
      }
      draw();
    };

    // Start after the page has settled so it never competes with first paint
    let idle: ReturnType<typeof setTimeout>;
    const begin = () => {
      readColours();
      resize();
      draw();
      if (!still) raf = requestAnimationFrame(step);
    };
    idle = setTimeout(begin, 1500);

    window.addEventListener("resize", resize);
    const mo = new MutationObserver(() => {
      readColours();
      if (still) draw();
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => {
      clearTimeout(idle);
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      mo.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="absolute inset-0 h-full w-full opacity-90 [mask-image:linear-gradient(to_left,#000,transparent_75%)] [-webkit-mask-image:linear-gradient(to_left,#000,transparent_75%)]"
    />
  );
}
