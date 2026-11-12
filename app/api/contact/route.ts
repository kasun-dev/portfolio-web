/**
 * Sends contact form messages by email with Resend.
 * Needs RESEND_API_KEY and CONTACT_TO_EMAIL (the inbox that receives messages).
 * Optional: CONTACT_FROM_EMAIL.
 * Only runs on a server host (Vercel); the static GitHub Pages build skips it.
 */

const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 4;

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const json = (body: object, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });

export async function POST(req: Request) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) return json({ error: "Email is not set up on this server." }, 503);

  // Best-effort rate limit per visitor (resets when the server instance restarts)
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_HITS) return json({ error: "Too many messages. Try again later." }, 429);
  hits.set(ip, [...recent, now]);

  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  if (data.website) return json({ ok: true }); // honeypot: pretend it worked

  const name = String(data.name ?? "").trim().slice(0, 100);
  const email = String(data.email ?? "").trim().slice(0, 200);
  const message = String(data.message ?? "").trim().slice(0, 5000);
  if (!name || message.length < 10 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "Please fill in your name, a valid email and a message." }, 400);
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "content-type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `Portfolio message from ${name.replace(/[\r\n]/g, " ")}`,
      html: `<p><strong>${esc(name)}</strong> (${esc(email)})</p><p style="white-space:pre-wrap">${esc(message)}</p>`,
      text: `${name} (${email})\n\n${message}`,
    }),
  });

  if (!res.ok) {
    // Shows up in the Vercel function logs, e.g. an unverified sender or recipient
    console.error("Resend rejected the message:", res.status, await res.text().catch(() => ""));
    return json({ error: "The email service refused the message." }, 502);
  }
  return json({ ok: true });
}
