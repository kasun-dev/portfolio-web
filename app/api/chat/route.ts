import { SYSTEM_PROMPT } from "../../data/knowledge";

/**
 * Chat assistant backed by the Gemini API.
 * Needs GEMINI_API_KEY. Optional: GEMINI_MODEL (default gemini-3.5-flash-lite).
 * Only runs on a server host (Vercel); the static GitHub Pages build skips it.
 */

const MAX_TURNS = 10;
const MAX_CHARS = 500;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 15;
const hits = new Map<string, number[]>();

const json = (body: object, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });

type Msg = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  const key = process.env.GEMINI_API_KEY;
  if (!key) return json({ error: "The assistant is not set up on this server." }, 503);

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    return json({ error: "You have asked a lot of questions. Please try again in a few minutes." }, 429);
  }
  hits.set(ip, [...recent, now]);

  let body: { messages?: unknown };
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  const raw = Array.isArray(body.messages) ? body.messages : [];
  const messages: Msg[] = raw
    .filter(
      (m): m is Msg =>
        m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string",
    )
    .slice(-MAX_TURNS)
    .map((m) => ({ role: m.role, content: m.content.trim().slice(0, MAX_CHARS) }))
    .filter((m) => m.content);

  if (!messages.length || messages[messages.length - 1].role !== "user") {
    return json({ error: "Ask a question to get started." }, 400);
  }
  // Gemini wants the conversation to start with the visitor
  while (messages[0].role !== "user") messages.shift();

  const model = process.env.GEMINI_MODEL || "gemini-3.5-flash-lite";
  let res: Response;
  try {
    res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
      {
        method: "POST",
        headers: { "content-type": "application/json", "x-goog-api-key": key },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: messages.map((m) => ({
            role: m.role === "user" ? "user" : "model",
            parts: [{ text: m.content }],
          })),
          generationConfig: { temperature: 0.3, maxOutputTokens: 500 },
        }),
      },
    );
  } catch {
    return json({ error: "The assistant could not be reached. Try again shortly." }, 502);
  }

  if (!res.ok) return json({ error: "The assistant is unavailable right now. Please email Kasun instead." }, 502);

  const data = await res.json().catch(() => null);
  const reply: string | undefined = data?.candidates?.[0]?.content?.parts
    ?.map((p: { text?: string }) => p.text ?? "")
    .join("")
    .trim();
  if (!reply) return json({ error: "I could not answer that. Try rephrasing, or email Kasun." }, 502);

  return json({ reply });
}
