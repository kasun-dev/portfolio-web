"use client";

import { useEffect, useState } from "react";
import { LINKS, MEDIUM_FEED } from "../data/content";
import { ArrowUpRightIcon } from "./Icons";

type Post = { title: string; link: string; date: string; excerpt: string; minutes: number; image?: string };

const INITIAL = 3;
const CACHE_KEY = "medium-feed-v1";
const CACHE_MS = 30 * 60 * 1000;

/** Pulls what the page needs out of one feed item. Only text and one image are kept. */
function toPost(item: Record<string, unknown>): Post | null {
  const title = String(item.title ?? "").trim();
  const link = String(item.link ?? "").split("?")[0]; // drop the tracking parameter
  if (!title || !/^https:\/\/medium\.com\//.test(link)) return null;

  const html = String(item.content ?? item.description ?? "");
  const doc = new DOMParser().parseFromString(html, "text/html");
  const image = [...doc.querySelectorAll("img")]
    .map((i) => i.getAttribute("src") ?? "")
    .find((src) => /^https:\/\/(cdn-images-1|miro)\.medium\.com\//.test(src));

  const para = [...doc.querySelectorAll("p")]
    .map((p) => (p.textContent ?? "").replace(/\s+/g, " ").trim())
    .find((t) => t.length > 50);
  let excerpt = para ?? "";
  if (excerpt.length > 170) excerpt = excerpt.slice(0, 170).replace(/\s+\S*$/, "") + "…";

  const words = (doc.body.textContent ?? "").split(/\s+/).filter(Boolean).length;
  const when = new Date(String(item.pubDate ?? "").replace(" ", "T") + "Z");
  const date = isNaN(when.getTime())
    ? ""
    : when.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

  return { title, link, date, excerpt, minutes: Math.max(1, Math.round(words / 210)), image };
}

async function loadPosts(): Promise<Post[]> {
  try {
    const cached = JSON.parse(sessionStorage.getItem(CACHE_KEY) ?? "null");
    if (cached && Date.now() - cached.t < CACHE_MS && cached.posts?.length) return cached.posts;
  } catch {
    /* storage can be unavailable; just fetch */
  }
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), 8000);
  try {
    const res = await fetch(MEDIUM_FEED, { signal: ctl.signal });
    const data = await res.json();
    if (data?.status !== "ok" || !Array.isArray(data.items)) throw new Error("feed");
    const posts = data.items.map(toPost).filter((p: Post | null): p is Post => Boolean(p));
    try {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), posts }));
    } catch {
      /* ignore */
    }
    return posts;
  } finally {
    clearTimeout(timer);
  }
}

function SkeletonRow() {
  return (
    <li className="flex gap-5 border-b border-line py-7 sm:gap-8" aria-hidden>
      <div className="min-w-0 flex-1 space-y-3">
        <div className="sk h-3 w-32 rounded-full" />
        <div className="sk h-5 w-11/12 rounded-full" />
        <div className="sk h-3.5 w-full rounded-full" />
        <div className="sk h-3.5 w-2/3 rounded-full" />
      </div>
      <div className="sk h-20 w-20 shrink-0 sm:h-28 sm:w-28" />
    </li>
  );
}

export default function Writing() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [all, setAll] = useState(false);

  useEffect(() => {
    let alive = true;
    loadPosts()
      .then((p) => alive && (p.length ? setPosts(p) : setFailed(true)))
      .catch(() => alive && setFailed(true));
    return () => {
      alive = false;
    };
  }, []);

  const shown = posts ? (all ? posts : posts.slice(0, INITIAL)) : [];

  return (
    <section
      id="writing"
      aria-labelledby="writing-title"
      className="min-h-[calc(100svh-3.5rem)] border-t border-line py-16"
    >
      <h2 id="writing-title" className="text-[34px] font-bold leading-[1.1] tracking-tight sm:text-[46px]">
        Writing
      </h2>
      <p className="mt-4 font-display text-xl leading-relaxed text-muted">
        Notes on IoT, ESP32 and building things, published on Medium.
      </p>

      <ul className="mt-8 border-t border-line" aria-busy={!posts && !failed}>
        {!posts && !failed && [0, 1, 2].map((i) => <SkeletonRow key={i} />)}

        {shown.map((p) => (
          <li key={p.link} className="relative flex gap-5 border-b border-line py-7 sm:gap-8">
            <div className="min-w-0 flex-1">
              <p className="text-[13px] text-muted">
                {p.date}
                {p.date && <span aria-hidden> · </span>}
                {p.minutes} min read
              </p>
              <h3 className="mt-2 text-xl font-bold leading-snug tracking-tight sm:text-[22px]">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="after:absolute after:inset-0 hover:underline hover:decoration-1 hover:underline-offset-4"
                >
                  {p.title}
                  <span className="sr-only"> (opens on Medium)</span>
                </a>
              </h3>
              {p.excerpt && (
                <p className="mt-1.5 line-clamp-2 font-display text-base leading-[1.6] text-muted sm:line-clamp-3">
                  {p.excerpt}
                </p>
              )}
            </div>
            {p.image && (
              <div className="h-20 w-20 shrink-0 overflow-hidden bg-surface sm:h-28 sm:w-28">
                <img
                  src={p.image}
                  alt=""
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  width={112}
                  height={112}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </li>
        ))}

        {failed && (
          <li className="border-b border-line py-12 text-center">
            <p className="font-display text-lg text-muted">The latest posts could not be loaded right now.</p>
          </li>
        )}
      </ul>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 py-8">
        {posts && !all && posts.length > INITIAL && (
          <button
            type="button"
            onClick={() => setAll(true)}
            className="text-sm font-medium text-fg underline underline-offset-4"
          >
            View more
          </button>
        )}
        <a
          href={LINKS.medium}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-fg underline underline-offset-4"
        >
          Read everything on Medium
          <ArrowUpRightIcon />
        </a>
      </div>
    </section>
  );
}
