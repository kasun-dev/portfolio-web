"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { PROJECTS, type Project } from "../data/content";
import { matchProjects, mentionedProjects } from "../data/search";
import { SearchIcon, TypeIcon } from "./Icons";
import { useShell } from "./Shell";

const AI = process.env.NEXT_PUBLIC_CHAT_ENABLED === "1";
const SUGGESTIONS = [
  "What has Kasun built?",
  "Tell me about the Haycarb project",
  "What is his tech stack?",
  "How can I contact him?",
];

type Msg = { role: "user" | "assistant"; content: string };
type Answer = { q: string; full: string; shown: string; status: "loading" | "typing" | "done" | "error"; error?: string };

function ProjectCard({ p, onOpen }: { p: Project; onOpen: (p: Project) => void }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(p)}
      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left hover:bg-surface"
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-surface text-muted">
        <TypeIcon type={p.type} />
      </span>
      <span className="min-w-0">
        <span className="block truncate text-[15px] font-bold">{p.title}</span>
        <span className="block truncate text-[13px] text-muted">{p.status ?? p.type}</span>
      </span>
      <span className="ml-auto shrink-0 text-[13px] font-medium underline underline-offset-4">View details</span>
    </button>
  );
}

/**
 * The top bar search. Typing lists matching projects. Pressing Enter asks the
 * assistant (where the server route exists); the answer appears word by word,
 * with links to any projects it mentions.
 */
export default function SearchBox() {
  const { setQuery, openProject } = useShell();
  const [draft, setDraft] = useState("");
  const [open, setOpen] = useState(false);
  const [ans, setAns] = useState<Answer | null>(null);
  const history = useRef<Msg[]>([]);
  const wrap = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const run = useRef(0); // ignores replies that arrive after the visitor moved on

  const matches = useMemo(() => matchProjects(draft).slice(0, 4), [draft]);

  const stopTyping = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
  };

  useEffect(() => {
    const down = (e: PointerEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", down);
    return () => {
      document.removeEventListener("pointerdown", down);
      stopTyping();
    };
  }, []);

  function reveal(full: string, id: number) {
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (calm) {
      setAns((a) => (a && run.current === id ? { ...a, shown: full, status: "done" } : a));
      return;
    }
    const words = full.split(/(\s+)/); // keeps spaces and line breaks
    let n = 0;
    stopTyping();
    timer.current = setInterval(() => {
      n += 2; // a word and the space after it
      const done = n >= words.length;
      setAns((a) =>
        a && run.current === id
          ? { ...a, shown: words.slice(0, n).join(""), status: done ? "done" : "typing" }
          : a,
      );
      if (done || run.current !== id) stopTyping();
    }, 55);
  }

  async function ask(question: string) {
    const q = question.trim();
    if (!q) return;
    const id = ++run.current;
    stopTyping();
    setDraft(q);
    setAns({ q, full: "", shown: "", status: "loading" });
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: [...history.current.slice(-6), { role: "user", content: q }] }),
      });
      const data = await res.json().catch(() => ({}));
      if (run.current !== id) return;
      if (res.ok && data.reply) {
        history.current = [...history.current, { role: "user", content: q }, { role: "assistant", content: data.reply }];
        setAns({ q, full: data.reply, shown: "", status: "typing" });
        reveal(data.reply, id);
      } else {
        setAns({ q, full: "", shown: "", status: "error", error: data.error || "Something went wrong. Try again." });
      }
    } catch {
      if (run.current === id) setAns({ q, full: "", shown: "", status: "error", error: "No connection. Try again." });
    }
  }

  function showInProjects() {
    setQuery(draft.trim());
    setOpen(false);
    document.getElementById("projects")?.scrollIntoView({ block: "start" });
  }

  function openFrom(p: Project) {
    setOpen(false);
    openProject(p);
  }

  const cards = ans
    ? [...mentionedProjects(ans.q), ...(ans.status === "done" || ans.status === "typing" ? mentionedProjects(ans.full) : [])]
        .filter((p, i, a) => a.findIndex((x) => x.id === p.id) === i)
        .slice(0, 3)
    : [];
  const q = draft.trim();

  return (
    <div ref={wrap} className="relative min-w-0 flex-1 sm:max-w-[300px] sm:flex-none sm:basis-[300px]">
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          if (!q) return;
          if (AI) ask(q);
          else showInProjects();
        }}
        className="flex h-10 items-center gap-2 rounded-full bg-surface px-4"
      >
        <SearchIcon className="shrink-0 text-muted" />
        <label htmlFor="site-search" className="sr-only">
          {AI ? "Search projects or ask a question" : "Search projects"}
        </label>
        <input
          ref={input}
          id="site-search"
          type="search"
          value={draft}
          placeholder={AI ? "Search or ask a question" : "Search projects"}
          autoComplete="off"
          onFocus={() => setOpen(true)}
          onChange={(e) => {
            setDraft(e.target.value);
            setOpen(true);
            if (ans) {
              run.current++;
              stopTyping();
              setAns(null);
            }
            if (!e.target.value) setQuery("");
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              input.current?.blur();
            }
          }}
          className="h-full w-full min-w-0 bg-transparent text-sm text-fg placeholder:text-muted focus:outline-none"
        />
      </form>

      {open && (q || AI) && (
        <div className="z-40 max-h-[75svh] overflow-y-auto rounded-xl border border-line bg-bg p-2 shadow-xl max-sm:fixed max-sm:inset-x-3 max-sm:top-[3.75rem] sm:absolute sm:left-0 sm:top-12 sm:w-[560px]">
          {ans ? (
            <div aria-live="polite">
              <p className="px-3 pb-1 pt-2 text-[13px] text-muted">{ans.q}</p>
              {ans.status === "loading" && (
                <div className="space-y-2.5 px-3 py-3" aria-label="Thinking">
                  <div className="sk h-3.5 w-11/12 rounded-full" />
                  <div className="sk h-3.5 w-4/5 rounded-full" />
                  <div className="sk h-3.5 w-1/2 rounded-full" />
                </div>
              )}
              {ans.status === "error" && (
                <p role="alert" className="px-3 py-3 text-sm text-red-600 dark:text-red-400">
                  {ans.error}
                </p>
              )}
              {(ans.status === "typing" || ans.status === "done") && (
                <p className="whitespace-pre-wrap px-3 py-2 font-display text-[18px] leading-[1.6] text-fg">
                  {ans.shown}
                </p>
              )}
              {cards.length > 0 && (
                <ul className="mt-1 border-t border-line pt-1">
                  {cards.map((p) => (
                    <li key={p.id}>
                      <ProjectCard p={p} onOpen={openFrom} />
                    </li>
                  ))}
                </ul>
              )}
              {ans.status === "done" && (
                <p className="px-3 pb-2 pt-1 text-[12px] text-muted">AI answer from this site. It can make mistakes.</p>
              )}
            </div>
          ) : q ? (
            <div>
              {matches.length > 0 && (
                <>
                  <h3 className="px-3 pb-1 pt-2 text-[13px] font-medium text-muted">Projects</h3>
                  <ul>
                    {matches.map((p) => (
                      <li key={p.id}>
                        <ProjectCard p={p} onOpen={openFrom} />
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <ul className="border-t border-line pt-1">
                {matches.length > 0 && (
                  <li>
                    <button
                      type="button"
                      onClick={showInProjects}
                      className="w-full rounded-lg px-3 py-2.5 text-left text-[15px] hover:bg-surface"
                    >
                      Show all matches in Projects
                    </button>
                  </li>
                )}
                {AI && (
                  <li>
                    <button
                      type="button"
                      onClick={() => ask(q)}
                      className="w-full rounded-lg px-3 py-2.5 text-left text-[15px] hover:bg-surface"
                    >
                      Ask about &ldquo;{q}&rdquo;
                      <span className="ml-2 text-[13px] text-muted">Enter</span>
                    </button>
                  </li>
                )}
                {!AI && matches.length === 0 && (
                  <li className="px-3 py-3 text-sm text-muted">No projects match &ldquo;{q}&rdquo;.</li>
                )}
              </ul>
            </div>
          ) : (
            <div className="p-2">
              <p className="px-1 pb-2 text-[13px] text-muted">Try asking</p>
              <ul className="flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <li key={s}>
                    <button
                      type="button"
                      onClick={() => ask(s)}
                      className="rounded-full bg-surface px-3.5 py-1.5 text-left text-sm hover:bg-line"
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
              <p className="px-1 pt-3 text-[12px] text-muted">{PROJECTS.length} projects to search. Answers are AI generated.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
