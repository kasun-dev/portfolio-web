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
        className={`${container} relative`}
      >
        <div className="max-w-2xl">
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

      </div>
    </section>
  );
}
