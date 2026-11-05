"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  LINKS,
  PROJECTS,
  PROJECT_TYPES,
  type Project,
  type ProjectType,
} from "../data/content";
import { btnOutline } from "../data/ui";
import { ArrowUpRightIcon } from "./Icons";
import Section from "./Section";

const INITIAL = 6;

function Cover({ project }: { project: Project }) {
  if (project.cover) {
    return (
      <img
        src={`./img/projects/${project.cover}`}
        alt={`${project.title} screenshot`}
        loading="lazy"
        className="h-full w-full object-cover object-top"
      />
    );
  }
  // No screenshot yet: show a hexagon with the project's initials.
  const initials = project.title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
  return (
    <div className="grid h-full w-full place-items-center bg-bg" aria-hidden>
      <div className="hex grid h-24 w-[5.5rem] place-items-center bg-brand text-2xl font-semibold text-[#101218]">
        {initials}
      </div>
    </div>
  );
}

function Card({ project }: { project: Project }) {
  const links = [
    { label: "Code", href: project.repo },
    { label: "Live demo", href: project.live },
    { label: "Design", href: project.design },
  ].filter((l): l is { label: string; href: string } => Boolean(l.href));

  return (
    <motion.li
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface"
    >
      <div className="aspect-[16/9] overflow-hidden border-b border-line bg-bg">
        <Cover project={project} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold leading-snug">{project.title}</h3>
          <span className="mt-0.5 shrink-0 rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
            {project.type}
          </span>
        </div>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-line bg-bg px-2 py-0.5 text-xs text-muted"
            >
              {t}
            </li>
          ))}
        </ul>
        {links.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-5">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title}: ${l.label}`}
                className="inline-flex items-center gap-1 text-sm font-medium underline decoration-brand decoration-2 underline-offset-4"
              >
                {l.label}
                <ArrowUpRightIcon />
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.li>
  );
}

export default function Projects() {
  const [type, setType] = useState<"All" | ProjectType>("All");
  const [showAll, setShowAll] = useState(false);

  const matching =
    type === "All" ? PROJECTS : PROJECTS.filter((p) => p.type === type);
  const visible = showAll ? matching : matching.slice(0, INITIAL);
  const countFor = (t: "All" | ProjectType) =>
    t === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.type === t).length;

  return (
    <Section
      id="projects"
      title="Projects"
      intro="University work, research experiments and personal builds."
    >
      <div role="group" aria-label="Filter projects by type" className="flex flex-wrap gap-2">
        {PROJECT_TYPES.map((t) => (
          <button
            key={t}
            type="button"
            aria-pressed={type === t}
            onClick={() => setType(t)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              type === t
                ? "border-brand bg-brand font-semibold text-[#101218]"
                : "border-line bg-surface text-muted hover:border-fg/40 hover:text-fg"
            }`}
          >
            {t} <span className="opacity-60">{countFor(t)}</span>
          </button>
        ))}
      </div>

      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence initial={false} mode="popLayout">
          {visible.map((p) => (
            <Card key={p.id} project={p} />
          ))}
        </AnimatePresence>
      </ul>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        {matching.length > INITIAL && (
          <button
            type="button"
            className={btnOutline}
            onClick={() => setShowAll((s) => !s)}
            aria-expanded={showAll}
          >
            {showAll ? "Show fewer" : `Show all ${matching.length} projects`}
          </button>
        )}
        <a
          href={LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2 text-sm font-medium underline decoration-brand decoration-2 underline-offset-4"
        >
          More on GitHub
          <ArrowUpRightIcon />
        </a>
      </div>
    </Section>
  );
}
