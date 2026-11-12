"use client";

import { useEffect, useRef, useState } from "react";
import { SITE } from "../data/content";
import { CloseIcon, ChatIcon } from "./Icons";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What has Kasun built?",
  "Tell me about the Haycarb project",
  "What is his tech stack?",
  "How can I contact him?",
];

/** Floating assistant. Only rendered where the server route exists (Vercel). */
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const end = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    input.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  });

  useEffect(() => {
    end.current?.scrollIntoView({ block: "end" });
  }, [msgs, busy]);

  function close() {
    setOpen(false);
    opener.current?.focus();
  }

  async function send(question: string) {
    const q = question.trim();
    if (!q || busy) return;
    const next: Msg[] = [...msgs, { role: "user", content: q }];
    setMsgs(next);
    setText("");
    setError("");
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.reply) {
        setMsgs([...next, { role: "assistant", content: data.reply }]);
      } else {
        setError(data.error || `Something went wrong. You can email ${SITE.email}.`);
      }
    } catch {
      setError(`No connection. You can email ${SITE.email}.`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={(e) => {
            opener.current = e.currentTarget;
            setOpen(true);
          }}
          className="fixed bottom-5 right-5 z-[70] inline-flex h-12 items-center gap-2 rounded-full bg-brand px-5 text-sm font-medium text-onbrand shadow-lg transition-opacity hover:opacity-90"
        >
          <ChatIcon width={18} height={18} />
          Ask about Kasun
        </button>
      )}

      {open && (
        <section
          role="dialog"
          aria-label="Ask about Kasun"
          className="fixed inset-x-0 bottom-0 z-[70] flex h-[min(34rem,calc(100svh-1rem))] flex-col border border-line bg-bg shadow-2xl sm:inset-x-auto sm:bottom-5 sm:right-5 sm:w-[380px] sm:rounded-2xl"
        >
          <header className="flex items-center justify-between border-b border-line px-4 py-3">
            <div>
              <h2 className="text-[15px] font-bold">Ask about Kasun</h2>
              <p className="text-xs text-muted">AI answers from this site. It can make mistakes.</p>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close assistant"
              className="grid h-9 w-9 place-items-center rounded-full text-muted hover:bg-surface hover:text-fg"
            >
              <CloseIcon />
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4" aria-live="polite">
            {msgs.length === 0 && (
              <div>
                <p className="font-display text-[17px] leading-relaxed text-muted">
                  Hi. Ask me about Kasun&apos;s projects, skills or experience.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {SUGGESTIONS.map((s) => (
                    <li key={s}>
                      <button
                        type="button"
                        onClick={() => send(s)}
                        className="rounded-full bg-surface px-3.5 py-1.5 text-left text-sm text-fg hover:bg-line"
                      >
                        {s}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {msgs.map((m, i) => (
              <p
                key={i}
                className={`whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-[15px] leading-relaxed ${
                  m.role === "user"
                    ? "ml-10 bg-brand text-onbrand"
                    : "mr-6 bg-surface font-display text-[16px] text-fg"
                }`}
              >
                {m.content}
              </p>
            ))}
            {busy && (
              <div className="mr-6 space-y-2 rounded-2xl bg-surface px-4 py-3" aria-label="Thinking">
                <div className="sk h-3 w-40 rounded-full" />
                <div className="sk h-3 w-24 rounded-full" />
              </div>
            )}
            {error && (
              <p role="alert" className="text-sm text-red-600 dark:text-red-400">
                {error}
              </p>
            )}
            <div ref={end} />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(text);
            }}
            className="flex items-center gap-2 border-t border-line p-3"
          >
            <label htmlFor="chat-input" className="sr-only">
              Your question
            </label>
            <input
              ref={input}
              id="chat-input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={500}
              placeholder="Ask a question"
              autoComplete="off"
              className="h-10 min-w-0 flex-1 rounded-full bg-surface px-4 text-sm text-fg placeholder:text-muted focus:outline-none"
            />
            <button
              type="submit"
              disabled={busy || !text.trim()}
              className="h-10 rounded-full bg-brand px-4 text-sm font-medium text-onbrand disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </section>
      )}
    </>
  );
}
