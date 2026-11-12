"use client";

import { useEffect, useState } from "react";
import { LazyMotion, m, useReducedMotion } from "framer-motion";

/**
 * "Signal": the portrait is the fixed backdrop for the whole page. As you move
 * between sections the camera glides to a new part of the photo (face, watch,
 * lapel). A scan line sweeps over it, hexagon cells flicker on it, and small
 * telemetry tags are pinned to it, so the picture reads as a connected device
 * node, the same idea as the honeycomb and the IoT work.
 */

const loadFeatures = () => import("./motionFeatures").then((mod) => mod.default);

type Pose = { fx: number; fy: number; scale: number; opacity: number; mobile: number };

/** Focus point in photo coordinates (0..1), zoom, and opacity per section. */
const POSES: Record<string, Pose> = {
  home: { fx: 0.5, fy: 0.5, scale: 1, opacity: 1, mobile: 0.32 },
  about: { fx: 0.49, fy: 0.3, scale: 1.55, opacity: 0.4, mobile: 0.2 },
  skills: { fx: 0.54, fy: 0.85, scale: 1.6, opacity: 0.5, mobile: 0.18 },
  projects: { fx: 0.62, fy: 0.62, scale: 1.25, opacity: 0.2, mobile: 0.12 },
  timeline: { fx: 0.5, fy: 0.45, scale: 1.1, opacity: 0.22, mobile: 0.12 },
  education: { fx: 0.49, fy: 0.3, scale: 1.3, opacity: 0.3, mobile: 0.14 },
  contact: { fx: 0.49, fy: 0.3, scale: 1.5, opacity: 0.5, mobile: 0.22 },
};
const IDS = Object.keys(POSES);

/** Tags that stay pinned to the photo (positions are % of the photo). */
const TAGS = [
  { id: "node", text: "node-01 · online", x: 60, y: 79, show: ["home"] },
  { id: "topic", text: "kasun/status → retained", x: 63, y: 55, show: ["home"] },
  { id: "sig", text: "−42 dBm", x: 27, y: 20, show: ["home"] },
];

/** Hexagon cells over the figure: [x%, y%, delay s, duration s]. */
const CELLS: [number, number, number, number][] = [
  [38, 14, 0.2, 5.5], [58, 18, 1.8, 6.5], [30, 30, 3.1, 5], [66, 34, 0.9, 7],
  [44, 46, 2.4, 6], [24, 52, 4.2, 5.5], [72, 58, 1.2, 6.5], [50, 64, 3.6, 5],
  [34, 74, 0.5, 7], [62, 82, 2.9, 6], [80, 44, 4.6, 5.5], [18, 38, 1.5, 6.5],
];

function pose(id: string, desktop: boolean) {
  const p = POSES[id] ?? POSES.home;
  return {
    scale: desktop ? p.scale : 1 + (p.scale - 1) * 0.4,
    x: `${-(p.fx - 0.5) * 100 * (desktop ? p.scale : 1 + (p.scale - 1) * 0.4)}%`,
    y: `${-(p.fy - 0.5) * 100 * (desktop ? p.scale : 1 + (p.scale - 1) * 0.4)}%`,
    opacity: desktop ? p.opacity : p.mobile,
  };
}

export default function PortraitBackdrop() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState("home");
  const [desktop, setDesktop] = useState(true);

  // Which section is crossing the middle of the screen
  useEffect(() => {
    const els = IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => !!el,
    );
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const on = () => setDesktop(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  const target = pose(active, desktop);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg"
    >
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
        <LazyMotion features={loadFeatures} strict>
          <m.div
            className="relative h-full w-full"
            initial={false}
            animate={target}
            transition={
              reduce
                ? { duration: 0 }
                : { type: "spring", stiffness: 38, damping: 15, mass: 1.1 }
            }
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

              {/* Warm rim light that follows the scan */}
              <div className="absolute inset-0 bg-[radial-gradient(60%_45%_at_70%_30%,rgb(var(--brand)/0.22),transparent_70%)] mix-blend-soft-light" />

              {/* Hexagon cells flickering over the figure */}
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full text-brand"
              >
                {CELLS.map(([x, y, d, t], i) => (
                  <polygon
                    key={i}
                    className="hex-cell"
                    points="0,-3.4 2.9,-1.7 2.9,1.7 0,3.4 -2.9,1.7 -2.9,-1.7"
                    transform={`translate(${x} ${y})`}
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="0.25"
                    style={{ animationDelay: `${d}s`, animationDuration: `${t}s` }}
                  />
                ))}
              </svg>

              {/* Scan line sweeping top to bottom */}
              <div className="backdrop-scan absolute inset-x-0 top-0 h-[22%] bg-gradient-to-b from-transparent via-brand/25 to-transparent" />

              {TAGS.map((t) => (
                <span
                  key={t.id}
                  className={`absolute hidden whitespace-nowrap rounded-full lg:block border border-brand/60 bg-bg/70 px-2.5 py-1 font-mono text-[10px] tracking-wide text-fg transition-opacity duration-700 ${
                    t.show.includes(active) ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ left: `${t.x}%`, top: `${t.y}%` }}
                >
                  <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 align-middle" />
                  {t.text}
                </span>
              ))}
            </div>
          </m.div>
        </LazyMotion>
      </div>

      {/* Washes keep the text readable: strong on the left, light on the photo side */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/10 lg:via-bg/70" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg to-transparent" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-bg/80 to-transparent" />
    </div>
  );
}
