"use client";

import { useEffect, useMemo, useState } from "react";
import {
  m,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import TelemetryRain from "./TelemetryRain";

/**
 * "Signal": the portrait is a living backdrop for the whole page. The camera
 * is tied to scroll: it drifts continuously between a wide shot (hero), the
 * face (About, Contact), the watch (Skills) and the lapel (Projects). Over it:
 * falling sensor readings, a scan line, flickering hexagon cells and pinned
 * telemetry tags, so the picture reads as a connected device node.
 */

type Pose = { fx: number; fy: number; scale: number; opacity: number; mobile: number };

/** Focus point in photo coordinates (0..1), zoom, and opacity per section. */
const SECTIONS: { id: string; pose: Pose }[] = [
  { id: "home", pose: { fx: 0.5, fy: 0.5, scale: 1, opacity: 1, mobile: 0.34 } },
  { id: "about", pose: { fx: 0.49, fy: 0.3, scale: 1.5, opacity: 0.75, mobile: 0.22 } },
  { id: "skills", pose: { fx: 0.54, fy: 0.85, scale: 1.55, opacity: 0.6, mobile: 0.18 } },
  { id: "projects", pose: { fx: 0.62, fy: 0.62, scale: 1.25, opacity: 0.38, mobile: 0.14 } },
  { id: "timeline", pose: { fx: 0.5, fy: 0.45, scale: 1.1, opacity: 0.4, mobile: 0.14 } },
  { id: "education", pose: { fx: 0.49, fy: 0.3, scale: 1.3, opacity: 0.55, mobile: 0.16 } },
  { id: "contact", pose: { fx: 0.49, fy: 0.3, scale: 1.5, opacity: 0.8, mobile: 0.24 } },
];

/** Tags pinned to the photo (positions are % of the photo). Hero only. */
const TAGS = [
  { text: "node-01 · online", x: 44, y: 91 },
  { text: "kasun/status → retained", x: 63, y: 55 },
  { text: "−42 dBm", x: 27, y: 20 },
];

/** Hexagon cells over the figure: [x%, y%, delay s, duration s]. */
const CELLS: [number, number, number, number][] = [
  [38, 14, 0.2, 5.5], [58, 18, 1.8, 6.5], [30, 30, 3.1, 5], [66, 34, 0.9, 7],
  [44, 46, 2.4, 6], [24, 52, 4.2, 5.5], [72, 58, 1.2, 6.5], [50, 64, 3.6, 5],
  [34, 74, 0.5, 7], [62, 82, 2.9, 6], [80, 44, 4.6, 5.5], [18, 38, 1.5, 6.5],
];

/** Where each section sits in the page's scroll progress (0..1). */
function useStops() {
  const [stops, setStops] = useState<number[]>(() =>
    SECTIONS.map((_, i) => i / (SECTIONS.length - 1)),
  );
  useEffect(() => {
    const calc = () => {
      const vh = window.innerHeight;
      const max = document.documentElement.scrollHeight - vh;
      if (max <= 0) return;
      let prev = -0.001;
      const next = SECTIONS.map((s, i) => {
        const el = document.getElementById(s.id);
        const fallback = i / (SECTIONS.length - 1);
        if (!el) return Math.max(prev + 0.001, fallback);
        const r = el.getBoundingClientRect();
        const centre = r.top + window.scrollY + Math.min(r.height, vh) / 2 - vh / 2;
        const v = Math.min(1, Math.max(0, centre / max));
        prev = Math.max(prev + 0.001, v);
        return prev;
      });
      setStops((old) =>
        old.length === next.length && old.every((o, i) => Math.abs(o - next[i]) < 0.002)
          ? old
          : next,
      );
    };
    calc();
    const ro = new ResizeObserver(calc);
    ro.observe(document.body);
    window.addEventListener("resize", calc);
    window.addEventListener("load", calc);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", calc);
      window.removeEventListener("load", calc);
    };
  }, []);
  return stops;
}

export default function PortraitBackdrop() {
  const reduce = useReducedMotion();
  const [desktop, setDesktop] = useState(true);
  const [vh, setVh] = useState(900);
  const stops = useStops();

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const on = () => {
      setDesktop(mq.matches);
      setVh(window.innerHeight);
    };
    on();
    mq.addEventListener("change", on);
    window.addEventListener("resize", on);
    return () => {
      mq.removeEventListener("change", on);
      window.removeEventListener("resize", on);
    };
  }, []);

  // Camera: scroll progress, smoothed
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 70, damping: 22, mass: 0.6 });

  const outputs = useMemo(() => {
    const H = vh * 1.04; // photo box height
    const W = (H * 2) / 3;
    const k = desktop ? 1 : 0.4;
    const scale = SECTIONS.map(({ pose }) => 1 + (pose.scale - 1) * k);
    return {
      scale,
      x: SECTIONS.map(({ pose }, i) => -(pose.fx - 0.5) * W * scale[i]),
      y: SECTIONS.map(({ pose }, i) => -(pose.fy - 0.5) * H * scale[i]),
      opacity: SECTIONS.map(({ pose }) => (desktop ? pose.opacity : pose.mobile)),
    };
  }, [desktop, vh]);

  const scale = useTransform(progress, stops, outputs.scale);
  const x = useTransform(progress, stops, outputs.x);
  const y = useTransform(progress, stops, outputs.y);
  const opacity = useTransform(progress, stops, outputs.opacity);
  const tagOpacity = useTransform(progress, [0, Math.max(stops[1] * 0.5, 0.02)], [1, 0]);

  // Pointer parallax (desktop, fine pointer, motion allowed)
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 40, damping: 18 });
  const sy = useSpring(py, { stiffness: 40, damping: 18 });
  useEffect(() => {
    if (reduce || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const move = (e: PointerEvent) => {
      px.set((e.clientX / window.innerWidth - 0.5) * -22);
      py.set((e.clientY / window.innerHeight - 0.5) * -14);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [reduce, px, py]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg"
    >
      <TelemetryRain />

      {/* The photo box: 2:3 like the picture, sized from the viewport height */}
      <div
        className="absolute left-1/2 top-1/2 h-[104svh] w-[calc(104svh*2/3)] -translate-x-1/2 -translate-y-1/2 lg:left-auto lg:right-[3vw] lg:translate-x-0"
        // Feather all four edges so the photo dissolves into the page
        style={{
          WebkitMaskImage:
            "linear-gradient(to right,transparent,#000 24%,#000 78%,transparent),linear-gradient(to bottom,transparent,#000 10%,#000 72%,transparent)",
          WebkitMaskComposite: "source-in",
          maskImage:
            "linear-gradient(to right,transparent,#000 24%,#000 78%,transparent),linear-gradient(to bottom,transparent,#000 10%,#000 72%,transparent)",
          maskComposite: "intersect",
        }}
      >
        <m.div className="h-full w-full" style={{ x: sx, y: sy }}>
          <m.div
            className="relative h-full w-full"
            style={reduce ? { opacity: outputs.opacity[0] } : { scale, x, y, opacity }}
          >
            <div className="backdrop-breathe relative h-full w-full">
              <img
                src="./img/portrait.webp"
                srcSet="./img/portrait-500.webp 500w, ./img/portrait.webp 750w"
                sizes="(min-width: 1024px) 70svh, 100vw"
                alt=""
                width={750}
                height={1123}
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover [filter:saturate(0.85)_contrast(1.04)]"
              />

              {/* Warm rim light */}
              <div className="absolute inset-0 bg-[radial-gradient(60%_45%_at_70%_30%,rgb(var(--brand)/0.22),transparent_70%)] mix-blend-soft-light" />

              {/* Hexagon cells flickering over the figure */}
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full text-brand"
              >
                {CELLS.map(([cx, cy, d, t], i) => (
                  <polygon
                    key={i}
                    className="hex-cell"
                    points="0,-3.4 2.9,-1.7 2.9,1.7 0,3.4 -2.9,1.7 -2.9,-1.7"
                    transform={`translate(${cx} ${cy})`}
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="0.25"
                    style={{ animationDelay: `${d}s`, animationDuration: `${t}s` }}
                  />
                ))}
              </svg>

              {/* Scan line sweeping top to bottom */}
              <div className="backdrop-scan absolute inset-x-0 top-0 h-[22%] bg-gradient-to-b from-transparent via-brand/25 to-transparent" />

              <m.div className="hidden lg:block" style={{ opacity: tagOpacity }}>
                {TAGS.map((t) => (
                  <span
                    key={t.text}
                    className="absolute whitespace-nowrap rounded-full border border-brand/60 bg-bg/70 px-2.5 py-1 font-mono text-[10px] tracking-wide text-fg"
                    style={{ left: `${t.x}%`, top: `${t.y}%` }}
                  >
                    <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 align-middle" />
                    {t.text}
                  </span>
                ))}
              </m.div>
            </div>
          </m.div>
        </m.div>
      </div>

      {/* Washes keep the text readable: strong on the left, light on the photo side */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg/95 via-bg/60 to-bg/0 lg:via-bg/45" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg to-transparent" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-bg/80 to-transparent" />
    </div>
  );
}
