"use client";

import { useEffect, useState } from "react";

/** Types and deletes each phrase. Shows the first phrase only if the visitor prefers reduced motion. */
export default function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [n, setN] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [still, setStill] = useState(false);

  useEffect(() => {
    setStill(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (still) return;
    const word = words[i];

    if (deleting && n === 0) {
      setDeleting(false);
      setI((i + 1) % words.length);
      return;
    }

    const atEnd = !deleting && n === word.length;
    const wait = atEnd ? 1600 : deleting ? 35 : 70;
    const t = setTimeout(() => {
      if (atEnd) setDeleting(true);
      else setN(n + (deleting ? -1 : 1));
    }, wait);
    return () => clearTimeout(t);
  }, [n, deleting, i, still, words]);

  return (
    <>
      <span className="text-fg" aria-hidden>
        {still ? words[0] : words[i].slice(0, n)}
        {!still && (
          <span className="caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.15em] bg-brand" />
        )}
      </span>
      <span className="sr-only">{words.join(", ")}</span>
    </>
  );
}
