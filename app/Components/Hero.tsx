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

function Portrait() {
  return (
    <div
      className="rise relative mx-auto aspect-[4/5] w-full max-w-[340px] lg:mx-0 lg:ml-auto lg:h-[var(--h)] lg:w-[calc(var(--h)*4/5)] lg:max-w-none"
      // The box is sized from the viewport height so the portrait always fits on screen.
      style={{ ...delay(0.2), "--h": "min(70svh, 640px)" } as CSSProperties}
    >
      {/* The soft shadow (light mode only) lives on this wrapper so it follows the
          faded silhouette. On the image itself the mask would clip it to a box. */}
      <div className="absolute inset-0 drop-shadow-[0_6px_16px_rgba(16,18,24,0.28)] dark:drop-shadow-none">
        {/* Half-body cutout with its white outline baked in; the lower edge fades into the page. */}
        <img
          src="./img/kasun.webp"
          alt="Portrait of Kasun Jayamaha in a suit and tie"
          width={994}
          height={1300}
          fetchPriority="high"
          decoding="async"
          className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 [-webkit-mask-image:linear-gradient(to_bottom,#000_80%,transparent)] [mask-image:linear-gradient(to_bottom,#000_80%,transparent)]"
        />
      </div>
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
      {/* Faint honeycomb texture across the page background */}
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
            I&apos;m a SLIIT graduate based in {SITE.location.split(",")[0]}, working
            remotely at {SITE.company}. I build web platforms, cloud backends and
            connected devices, from the database to the circuit board.
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
