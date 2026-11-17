import { MEDIUM_FEED } from "./content";

/**
 * Latest Medium posts for the assistant's knowledge base. Runs on the server only
 * (the chat route), is cached for an hour, and never throws: if the feed is
 * unreachable the assistant simply answers without the blog section.
 */
const TTL = 60 * 60 * 1000;
const MAX_POSTS = 10;
let cache: { at: number; text: string } | null = null;

const clean = (html: string) =>
  html
    .replace(/<(script|style|figure)[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();

export async function blogKnowledge(): Promise<string> {
  if (cache && Date.now() - cache.at < TTL) return cache.text;
  try {
    const res = await fetch(MEDIUM_FEED, { signal: AbortSignal.timeout(4000) });
    const data = await res.json();
    if (data?.status !== "ok" || !Array.isArray(data.items)) throw new Error("feed");
    const posts = (data.items as Record<string, unknown>[])
      .slice(0, MAX_POSTS)
      .map((item) => {
        const title = String(item.title ?? "").trim();
        const link = String(item.link ?? "").split("?")[0];
        if (!title || !/^https:\/\/medium\.com\//.test(link)) return null;
        const date = String(item.pubDate ?? "").slice(0, 10);
        const body = clean(String(item.content ?? item.description ?? "")).slice(0, 700);
        return `- "${title}"${date ? ` (${date})` : ""}\n  ${body}\n  Read: ${link}`;
      })
      .filter(Boolean);
    const text = posts.join("\n");
    cache = { at: Date.now(), text };
    return text;
  } catch {
    // keep serving the last good copy, and retry in 5 minutes
    const text = cache?.text ?? "";
    cache = { at: Date.now() - TTL + 5 * 60 * 1000, text };
    return text;
  }
}
