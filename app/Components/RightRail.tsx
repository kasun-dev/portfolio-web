"use client";

import { LINKS, PROJECTS, SITE } from "../data/content";
import { chip } from "../data/ui";
import { TypeIcon } from "./Icons";
import { useShell } from "./Shell";

const TOPICS = ["React", "Next.js", "NestJS", "PostgreSQL", "AWS", "ESP32"];

/** Right column on wide screens, like the "Staff Picks" column on Medium. */
export default function RightRail() {
  const { openProject } = useShell();
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 4);

  return (
    <aside
      aria-label="Highlights"
      className="hidden w-[280px] shrink-0 border-l border-line pl-8 xl:block"
    >
      <div className="sticky top-14 space-y-8 py-9 pr-4">
        <section>
          <h2 className="text-base font-bold">Featured work</h2>
          <ul className="mt-5 space-y-5">
            {featured.map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => openProject(p)}
                  className="group block w-full text-left"
                >
                  <span className="flex items-center gap-2 text-[13px] text-muted">
                    <TypeIcon type={p.type} width={16} height={16} />
                    {p.type}
                  </span>
                  <span className="mt-1.5 block text-base font-bold leading-snug group-hover:underline">
                    {p.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold">Skills I use most</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {TOPICS.map((t) => (
              <li key={t}>
                <a href="#skills" className={`${chip} hover:bg-line`}>
                  {t}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold">Right now</h2>
          <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-muted">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-600" aria-hidden />
            {SITE.availability}
          </p>
        </section>

        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-muted">
          <li><a className="hover:text-fg" href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a className="hover:text-fg" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a className="hover:text-fg" href={LINKS.medium} target="_blank" rel="noopener noreferrer">Medium</a></li>
          <li><a className="hover:text-fg" href={LINKS.cv} target="_blank" rel="noopener noreferrer">CV</a></li>
        </ul>
      </div>
    </aside>
  );
}
