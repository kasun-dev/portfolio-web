"use client";

import { useEffect, useState } from "react";

const LINES: { prompt?: boolean; text: string }[] = [
  { prompt: true, text: "whoami" },
  { text: "kasun jayamaha · software engineer" },
  { prompt: true, text: "cat now.txt" },
  { text: "associate @ axceera (remote)" },
  { text: "building moments + studio click.ed" },
  { text: "learning iot at uc irvine" },
];

/** A small terminal that types out what I'm doing now, once. */
export default function HeroTerminal() {
  const [chars, setChars] = useState(0);
  const total = LINES.reduce((n, l) => n + l.text.length + 1, 0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setChars(total);
      return;
    }
    const start = setTimeout(() => {
      const id = setInterval(() => {
        setChars((c) => {
          if (c >= total) {
            clearInterval(id);
            return c;
          }
          return c + 1;
        });
      }, 38);
    }, 1400);
    return () => clearTimeout(start);
  }, [total]);

  let left = chars;
  return (
    <div
      className="glass w-[21rem] rounded-2xl p-4 font-mono text-[12.5px] leading-relaxed"
      aria-label="Terminal showing what Kasun is working on now"
      role="img"
    >
      <div className="mb-3 flex items-center gap-1.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-xs text-muted">kasun@node-01 ~ zsh</span>
      </div>
      <div aria-hidden className="min-h-[8.6rem]">
        {LINES.map((l, i) => {
          const take = Math.max(0, Math.min(l.text.length, left));
          left -= l.text.length + 1;
          if (take === 0 && i > 0 && left < 0 && chars === 0) return null;
          if (take === 0) return null;
          return (
            <p key={i} className={l.prompt ? "text-fg" : "text-muted"}>
              {l.prompt && <span className="mr-2 text-brand">$</span>}
              {l.text.slice(0, take)}
            </p>
          );
        })}
        <span className="caret inline-block h-[1em] w-[7px] translate-y-[0.15em] bg-brand" />
      </div>
    </div>
  );
}
