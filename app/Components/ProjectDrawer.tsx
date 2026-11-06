"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "../data/content";
import { btnOutline } from "../data/ui";
import { ArrowUpRightIcon, CloseIcon } from "./Icons";

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** Side panel with the full details of one project. Slides in from the right. */
export default function ProjectDrawer({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const panel = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    closeBtn.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panel.current) return;
      // Keep keyboard focus inside the panel while it is open.
      const items = Array.from(panel.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const links = [
    { label: "Live site", href: project.live },
    { label: "LinkedIn post", href: project.post },
    { label: project.repoLabel ?? "Code", href: project.repo },
    { label: "Design", href: project.design },
  ].filter((l): l is { label: string; href: string } => Boolean(l.href));

  const t = { duration: reduce ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <div className="fixed inset-0 z-[80]">
      <motion.div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={t}
        aria-hidden
      />
      <motion.div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-drawer-title"
        className="absolute inset-y-0 right-0 flex w-full max-w-xl flex-col border-l border-line bg-surface shadow-2xl"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={t}
      >
        <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3 sm:px-6">
          <span className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
            {project.type}
          </span>
          <button
            ref={closeBtn}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="grid h-10 w-10 place-items-center rounded-full text-muted transition-colors hover:text-fg"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain">
          {project.cover && (
            <div className="border-b border-line bg-bg">
              <img
                src={`./img/projects/${project.cover}`}
                alt={`${project.title} screenshot`}
                className="aspect-[16/9] w-full object-cover object-top"
              />
            </div>
          )}

          <div className="space-y-6 px-5 py-6 sm:px-6">
            <div>
              <h3
                id="project-drawer-title"
                className="text-2xl font-semibold leading-tight"
              >
                {project.title}
              </h3>
              {project.status && (
                <p className="mt-2 inline-flex items-center gap-2 text-sm text-muted">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                  {project.status}
                </p>
              )}
            </div>

            <p className="text-pretty text-base leading-relaxed text-muted">
              {project.description}
            </p>

            {project.ai && (
              <div className="border-l-2 border-brand pl-4">
                <h4 className="font-medium">How Gemini helps</h4>
                <p className="mt-1.5 text-pretty text-[15px] leading-relaxed text-muted">
                  {project.ai}
                </p>
              </div>
            )}

            {project.learned && (
              <div>
                <h4 className="font-medium">What I learned</h4>
                <p className="mt-1.5 text-pretty text-[15px] leading-relaxed text-muted">
                  {project.learned}
                </p>
              </div>
            )}

            <div>
              <h4 className="font-medium">Built with</h4>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-line bg-bg px-2 py-0.5 text-xs text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {links.length > 0 && (
          <div className="flex flex-wrap gap-3 border-t border-line px-5 py-4 sm:px-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={btnOutline}
              >
                {l.label}
                <ArrowUpRightIcon />
              </a>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
