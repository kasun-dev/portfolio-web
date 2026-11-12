"use client";

import { useEffect, useRef, useState, type ComponentType, type SVGProps } from "react";
import { LINKS, NAV, SITE } from "../data/content";
import {
  BookmarkIcon,
  CloseIcon,
  HomeIcon,
  PenIcon,
  RouteIcon,
  StoriesIcon,
  TagIcon,
  UserIcon,
} from "./Icons";

const ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  home: HomeIcon,
  about: UserIcon,
  skills: TagIcon,
  projects: StoriesIcon,
  timeline: RouteIcon,
  education: BookmarkIcon,
  contact: PenIcon,
};

const ELSEWHERE = [
  { label: "GitHub", href: LINKS.github },
  { label: "LinkedIn", href: LINKS.linkedin },
  { label: "Medium", href: LINKS.medium },
  { label: "Instagram", href: LINKS.instagram },
  { label: "WhatsApp", href: LINKS.whatsapp },
];

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [active, setActive] = useState("home");
  const panel = useRef<HTMLElement>(null);

  // Scroll-spy: the section crossing the upper part of the viewport is current.
  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    els.forEach((el) => io.observe(el));
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        setActive("contact");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Small screens: the menu is a drawer. Esc closes it, the page behind stays put.
  useEffect(() => {
    if (!open) return;
    panel.current?.querySelector<HTMLElement>("a")?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        document.getElementById("menu-button")?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={onClose} aria-hidden />
      )}
      <aside
        ref={panel}
        id="site-menu"
        aria-label="Site"
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col overflow-y-auto border-r border-line bg-bg transition-[transform,visibility] duration-200 lg:visible lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full max-lg:invisible"
        }`}
      >
        <div className="flex h-14 shrink-0 items-center justify-between pl-6 pr-3">
          <a
            href="#home"
            onClick={onClose}
            className="font-display text-[22px] font-bold leading-none tracking-tight"
          >
            {SITE.name}
          </a>
          <button
            type="button"
            onClick={() => {
              onClose();
              document.getElementById("menu-button")?.focus();
            }}
            aria-label="Close menu"
            className="grid h-10 w-10 place-items-center rounded-full text-muted hover:bg-surface hover:text-fg lg:hidden"
          >
            <CloseIcon />
          </button>
        </div>

        <nav aria-label="Sections" className="px-3 pt-3">
          <ul className="space-y-0.5">
            {NAV.map((n) => {
              const Icon = ICONS[n.id];
              const on = active === n.id;
              return (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={onClose}
                    aria-current={on ? "true" : undefined}
                    className={`flex items-center gap-4 rounded-md px-3 py-2.5 text-[15px] transition-colors ${
                      on
                        ? "bg-surface font-semibold text-fg"
                        : "text-muted hover:bg-surface hover:text-fg"
                    }`}
                  >
                    <Icon strokeWidth={on ? 2.3 : 1.7} />
                    {n.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mx-6 my-5 border-t border-line" />

        <div className="px-6">
          <h2 className="text-sm font-semibold">Elsewhere</h2>
          <ul className="mt-3 space-y-1">
            {ELSEWHERE.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mx-2 flex items-center gap-3 rounded-md px-2 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-fg"
                >
                  <span
                    aria-hidden
                    className="grid h-6 w-6 place-items-center rounded-full bg-surface text-xs font-semibold text-fg"
                  >
                    {l.label[0]}
                  </span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto px-6 py-6 text-[13px] text-muted">
          <a href={LINKS.cv} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
            Download CV
          </a>
        </div>
      </aside>
    </>
  );
}
