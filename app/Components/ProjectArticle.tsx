"use client";

import { useEffect, useRef } from "react";
import { m, useReducedMotion } from "framer-motion";
import { PROJECTS, SITE, type Project } from "../data/content";
import { ArrowUpRightIcon, TypeIcon } from "./Icons";

/**
 * A project opens like a Medium story: a reading page over the feed, with the
 * sidebar and top bar still in place. Esc or the back button returns to the feed.
 */
export default function ProjectArticle({
  project,
  onClose,
  onOpen,
}: {
  project: Project;
  onClose: () => void;
  onOpen: (p: Project) => void;
}) {
  const page = useRef<HTMLDivElement>(null);
  const back = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    back.current?.focus({ preventScroll: true });
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  // Moving to another story starts at the top
  useEffect(() => {
    page.current?.scrollTo({ top: 0 });
  }, [project.id]);

  const links = [
    { label: "Live site", href: project.live },
    { label: project.repoLabel ?? "Code", href: project.repo },
    { label: "LinkedIn post", href: project.post },
    { label: "Design", href: project.design },
  ].filter((l): l is { label: string; href: string } => Boolean(l.href));

  const more = PROJECTS.filter((p) => p.id !== project.id && (p.type === project.type || p.featured)).slice(0, 3);

  return (
    <m.div
      ref={page}
      role="dialog"
      aria-modal="false"
      aria-labelledby="article-title"
      className="fixed bottom-0 left-0 right-0 top-14 z-20 overflow-y-auto overscroll-contain bg-bg lg:left-60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduce ? 0 : 0.15 }}
    >
      <article className="mx-auto w-full max-w-[680px] px-4 pb-24 pt-8 sm:px-6 sm:pt-12">
        <button
          ref={back}
          type="button"
          onClick={onClose}
          className="-ml-2 inline-flex items-center gap-2 rounded-full px-2 py-1.5 text-sm text-muted transition-colors hover:text-fg"
        >
          <span aria-hidden>&larr;</span> Back to projects
        </button>

        <p className="mt-8 flex items-center gap-2 text-sm text-muted">
          <TypeIcon type={project.type} width={16} height={16} />
          {project.type}
        </p>
        <h1
          id="article-title"
          className="mt-3 text-[34px] font-bold leading-[1.1] tracking-tight sm:text-[44px]"
        >
          {project.title}
        </h1>

        <div className="mt-8 flex items-center gap-3">
          <img
            src="./img/avatar-96.webp"
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
          />
          <div>
            <p className="text-[15px] font-medium">{SITE.name}</p>
            {project.status && (
              <p className="flex items-center gap-1.5 text-sm text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" aria-hidden />
                {project.status}
              </p>
            )}
          </div>
        </div>

        {links.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-line py-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-fg hover:text-muted"
              >
                {l.label}
                <ArrowUpRightIcon />
              </a>
            ))}
          </div>
        )}

        {project.cover && (
          <figure className="mt-8">
            <img
              src={`./img/projects/${project.cover}`}
              alt={`${project.title} screenshot`}
              className="w-full bg-surface object-cover object-top"
            />
          </figure>
        )}

        <div className="mt-10 space-y-8 font-display text-[20px] leading-[1.7] text-fg">
          <p>{project.description}</p>
        </div>

        {project.learned && (
          <section className="mt-12">
            <h2 className="font-sans text-[26px] font-bold leading-tight tracking-tight">What I learned</h2>
            <p className="mt-4 font-display text-[20px] leading-[1.7] text-fg">{project.learned}</p>
          </section>
        )}

        {project.ai && (
          <section className="mt-12">
            <h2 className="font-sans text-[26px] font-bold leading-tight tracking-tight">How Gemini helps</h2>
            <blockquote className="mt-4 border-l-[3px] border-fg pl-5 font-display text-[20px] italic leading-[1.7] text-fg">
              {project.ai}
            </blockquote>
          </section>
        )}

        <section className="mt-12">
          <h2 className="font-sans text-[26px] font-bold leading-tight tracking-tight">Built with</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li key={t} className="rounded-full bg-surface px-3.5 py-1.5 text-sm">
                {t}
              </li>
            ))}
          </ul>
        </section>

        {more.length > 0 && (
          <section className="mt-16 border-t border-line pt-10">
            <h2 className="font-sans text-lg font-bold">More from {SITE.name}</h2>
            <ul className="mt-2">
              {more.map((p) => (
                <li key={p.id} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => onOpen(p)}
                    className="group flex w-full items-center gap-3 py-4 text-left"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-surface text-muted">
                      <TypeIcon type={p.type} />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-[17px] font-bold group-hover:underline">{p.title}</span>
                      <span className="block truncate text-[13px] text-muted">{p.status ?? p.type}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </m.div>
  );
}
