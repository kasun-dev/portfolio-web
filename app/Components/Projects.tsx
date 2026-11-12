"use client";

import { useMemo, useState } from "react";
import {
  PROJECTS,
  PROJECT_TYPES,
  SITE,
  type Project,
} from "../data/content";
import { ArrowUpRightIcon } from "./Icons";
import { useShell } from "./Shell";

const INITIAL = 6;

function Thumb({ project }: { project: Project }) {
  if (project.cover) {
    return (
      <img
        src={`./img/projects/${project.cover}`}
        alt=""
        loading="lazy"
        width={112}
        height={112}
        className="h-full w-full object-cover object-top"
      />
    );
  }
  const initials = project.title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
  return (
    <span
      aria-hidden
      className="grid h-full w-full place-items-center font-display text-3xl font-bold text-muted"
    >
      {initials}
    </span>
  );
}

function Row({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  const links = [
    { label: project.repoLabel ?? "Code", href: project.repo },
    { label: "Live", href: project.live },
    { label: "Post", href: project.post },
    { label: "Design", href: project.design },
  ].filter((l): l is { label: string; href: string } => Boolean(l.href));

  return (
    <li className="relative flex gap-5 border-b border-line py-7 sm:gap-8">
      <div className="min-w-0 flex-1">
        <p className="flex items-center gap-2 text-[13px] text-muted">
          <img
            src="./img/avatar-96.webp"
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 rounded-full object-cover"
          />
          <span className="text-fg">{SITE.name}</span>
          {project.status && (
            <>
              <span aria-hidden>·</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" aria-hidden />
                {project.status}
              </span>
            </>
          )}
        </p>
        <h3 className="mt-2.5 text-xl font-bold leading-snug tracking-tight sm:text-[22px]">
          <button
            type="button"
            onClick={() => onOpen(project)}
            aria-label={`${project.title}: read more`}
            className="text-left after:absolute after:inset-0 hover:underline hover:decoration-1 hover:underline-offset-4"
          >
            {project.title}
          </button>
        </h3>
        <p className="mt-1.5 line-clamp-2 font-display text-base leading-[1.6] text-muted sm:line-clamp-3">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="rounded-full bg-surface px-3 py-1 text-[13px] text-fg">
            {project.type}
          </span>
          <span className="text-[13px] text-muted">
            {project.tech.slice(0, 3).join(", ")}
            {project.tech.length > 3 && ` +${project.tech.length - 3}`}
          </span>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title}: ${l.label}`}
              className="relative z-10 inline-flex items-center gap-1 text-[13px] font-medium text-fg underline underline-offset-4 decoration-line hover:decoration-fg"
            >
              {l.label}
              <ArrowUpRightIcon width={13} height={13} />
            </a>
          ))}
        </div>
      </div>
      <div className="h-20 w-20 shrink-0 overflow-hidden bg-surface sm:h-28 sm:w-28">
        <Thumb project={project} />
      </div>
    </li>
  );
}

export default function Projects() {
  const { query, setQuery, openProject } = useShell();
  const [tab, setTab] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const tabs = useMemo(
    () => [
      "All",
      "Featured",
      ...PROJECT_TYPES.filter((t) => t !== "All" && PROJECTS.some((p) => p.type === t)),
    ],
    [],
  );

  const q = query.trim().toLowerCase();
  const matching = PROJECTS.filter((p) => {
    const inTab = tab === "All" || (tab === "Featured" ? p.featured : p.type === tab);
    if (!inTab) return false;
    if (!q) return true;
    return [p.title, p.description, p.type, ...p.tech].join(" ").toLowerCase().includes(q);
  });
  const visible = showAll || q ? matching : matching.slice(0, INITIAL);

  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t border-line pt-12">
      <h2 id="projects-title" className="text-[28px] font-bold leading-tight tracking-tight">
        Projects
      </h2>
      <p className="mt-3 font-display text-lg leading-relaxed text-muted">
        Things I have built for university, for clients and for myself.
      </p>

      <div className="sticky top-14 z-20 mt-8 bg-bg">
        <div role="group" aria-label="Filter projects" className="flex gap-7 overflow-x-auto border-b border-line">
          {tabs.map((t) => {
            const on = tab === t;
            return (
              <button
                key={t}
                type="button"
                aria-pressed={on}
                onClick={() => {
                  setTab(t);
                  setShowAll(false);
                }}
                className={`relative shrink-0 py-3.5 text-sm transition-colors ${
                  on
                    ? "text-fg after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-fg"
                    : "text-muted hover:text-fg"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>

      <p role="status" className="sr-only">
        {matching.length} {matching.length === 1 ? "project" : "projects"} shown
      </p>

      {visible.length > 0 ? (
        <ul>
          {visible.map((p) => (
            <Row key={p.id} project={p} onOpen={openProject} />
          ))}
        </ul>
      ) : (
        <div className="border-b border-line py-14 text-center">
          <p className="font-display text-lg text-muted">
            No projects match &ldquo;{query}&rdquo;.
          </p>
          <button
            type="button"
            onClick={() => setQuery("")}
            className="mt-4 text-sm font-medium underline underline-offset-4"
          >
            Clear search
          </button>
        </div>
      )}

      {!showAll && !q && matching.length > INITIAL && (
        <div className="py-8">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="text-sm font-medium text-fg underline underline-offset-4"
          >
            See all {matching.length} projects
          </button>
        </div>
      )}
    </section>
  );
}
