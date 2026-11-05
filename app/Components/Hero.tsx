import type { CSSProperties } from "react";
import { LINKS, ROLES, SITE } from "../data/content";
import { btnOutline, btnPrimary, container } from "../data/ui";
import { ArrowDownIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";
import Typewriter from "./Typewriter";

/** Staggers the single page-load sequence. */
const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

const social = [
  { label: "GitHub", href: LINKS.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: LINKS.linkedin, Icon: LinkedInIcon },
  { label: "Email", href: `mailto:${SITE.email}`, Icon: MailIcon },
];

/* ------------------------------------------------------------------ */
/* Portrait artwork: a honeycomb of yellow and white hexagons behind    */
/* the photo, and a rectangular platform under his feet. All drawn in   */
/* a 400 x 500 box that matches the panel's 4:5 shape.                  */
/* ------------------------------------------------------------------ */

const YELLOW = "#ffd23f";
const R = 40; // hexagon radius
const HEX_W = Math.sqrt(3) * R; // pointy-top hexagon width
const GAP = 3; // visual gap between neighbouring cells

/** Points for a pointy-top hexagon. */
function hexPoints(cx: number, cy: number, r: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 180) * (60 * i - 90);
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");
}

/**
 * One character per cell, left to right:
 *   Y yellow solid   y yellow outline   W white outline
 *   w white solid    G dark solid       . empty
 * Even rows are offset by half a cell, which is what makes it a honeycomb.
 * Cells directly behind his head stay outline-only so the face reads clearly.
 */
const ROWS: { y: number; wide: boolean; cells: string }[] = [
  { y: 95, wide: true, cells: "WGWYW" },
  { y: 155, wide: false, cells: "YWWG" },
  { y: 215, wide: true, cells: "GWGWY" },
  { y: 275, wide: false, cells: "WGGW" },
  { y: 335, wide: true, cells: "YWGWw" },
  { y: 395, wide: false, cells: "y..W" },
];

function Honeycomb() {
  return (
    <g strokeLinejoin="round">
      {ROWS.flatMap(({ y, wide, cells }) =>
        cells.split("").map((c, i) => {
          if (c === ".") return null;
          const x = wide ? 200 + (i - 2) * HEX_W : 200 + (i - 1.5) * HEX_W;
          const points = hexPoints(x, y, R - GAP);
          const key = `${x.toFixed(0)}-${y}`;
          switch (c) {
            case "Y":
              return <polygon key={key} points={points} fill={YELLOW} />;
            case "y":
              return <polygon key={key} points={points} fill="none" stroke={YELLOW} strokeWidth="2.5" />;
            case "W":
              return <polygon key={key} points={points} fill="none" stroke="#fff" strokeOpacity="0.9" strokeWidth="1.75" />;
            case "w":
              return <polygon key={key} points={points} fill="#fff" fillOpacity="0.95" />;
            default:
              return <polygon key={key} points={points} fill="#232632" stroke="#fff" strokeOpacity="0.12" />;
          }
        })
      )}
    </g>
  );
}

function Portrait() {
  return (
    <div
      className="rise relative mx-auto aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-[2rem] bg-[#14161d] ring-1 ring-line lg:mx-0 lg:ml-auto lg:h-[var(--h)] lg:w-[calc(var(--h)*4/5)] lg:max-w-none"
      // The panel is sized from the viewport height so it always fits on screen.
      style={{ ...delay(0.2), "--h": "min(70svh, 640px)" } as CSSProperties}
    >
      <svg aria-hidden viewBox="0 0 400 500" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="glow" cx="50%" cy="42%" r="60%">
            <stop offset="0%" stopColor={YELLOW} stopOpacity="0.16" />
            <stop offset="100%" stopColor={YELLOW} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="500" fill="url(#glow)" />
        <Honeycomb />
        {/* Rectangular platform: a solid slab he stands on, and a lighter step below it */}
        <rect x="28" y="452" width="344" height="22" rx="4" fill={YELLOW} />
        <rect x="64" y="481" width="272" height="13" rx="3" fill="none" stroke="#fff" strokeOpacity="0.9" strokeWidth="1.75" />
      </svg>
      <img
        src="./img/kasun.webp"
        alt="Portrait of Kasun Jayamaha in a suit and tie"
        width={530}
        height={1300}
        fetchPriority="high"
        decoding="async"
        // 87% of the panel tall, with his feet planted on the middle of the slab.
        className="absolute bottom-[7.4%] left-1/2 h-[87%] w-auto max-w-none -translate-x-1/2"
      />
    </div>
  );
}

export default function Hero() {
  return (
    // One viewport tall, with the content centred in the space under the fixed
    // header, so the first screen looks balanced at any window size.
    <section
      id="home"
      className="relative flex min-h-screen min-h-svh items-center overflow-hidden pb-12 pt-28"
    >
      {/* Faint honeycomb, echoing the hexagons around the portrait */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full text-fg opacity-[0.07] [mask-image:radial-gradient(ellipse_70%_60%_at_75%_40%,#000,transparent)]"
      >
        <defs>
          <pattern id="hexgrid" width="28" height="49" patternUnits="userSpaceOnUse">
            <path
              fill="currentColor"
              d="M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexgrid)" />
      </svg>

      <div
        className={`${container} relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]`}
      >
        <div>
          {SITE.availability && (
            <p
              className="rise inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-muted"
              style={delay(0)}
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
              {SITE.availability}
            </p>
          )}

          <h1
            className="rise mt-6 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            style={delay(0.08)}
          >
            Kasun
            <br />
            Jayamaha
          </h1>

          <p
            className="rise mt-6 min-h-[3.5rem] text-lg text-muted sm:min-h-0 sm:text-2xl"
            style={delay(0.16)}
          >
            Software engineer building <Typewriter words={ROLES} />
          </p>

          <p
            className="rise mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
            style={delay(0.24)}
          >
            I study at SLIIT in {SITE.location.split(",")[0]} and build web
            platforms, mobile apps and connected devices, from the database to
            the circuit board.
          </p>

          <div className="rise mt-8 flex flex-wrap items-center gap-3" style={delay(0.32)}>
            <a href="#projects" className={btnPrimary}>
              View projects
              <ArrowDownIcon />
            </a>
            <a
              href={LINKS.cv}
              target="_blank"
              rel="noopener noreferrer"
              className={btnOutline}
            >
              Download CV
            </a>
            <ul className="ml-1 flex items-center gap-1">
              {social.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-full text-muted transition-colors hover:text-fg"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Portrait />
      </div>
    </section>
  );
}
