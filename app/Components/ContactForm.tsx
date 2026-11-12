"use client";

import { useState } from "react";
import { CONTACT_FORM, SITE } from "../data/content";
import { btnPrimary, field } from "../data/ui";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("website")) return; // honeypot: real visitors never fill this in

    setStatus("sending");
    const fields = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    try {
      // Preferred: the email route (Resend), available on the Vercel site.
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        form.reset();
        setStatus("sent");
        return;
      }
      // Bad input or a rate limit is shown as an error. Anything else (no email route on
      // a static host, or the email service failing) falls back to the Google Form so
      // the message is never lost.
      const info = await res.clone().json().catch(() => ({}));
      if (info?.reason) console.warn("Email route failed, using the Google Form instead:", info.reason);
      if ([400, 429].includes(res.status)) {
        setStatus("error");
        return;
      }
    } catch {
      /* network error: try the fallback below */
    }

    try {
      const body = new URLSearchParams({
        [CONTACT_FORM.fields.name]: fields.name,
        [CONTACT_FORM.fields.email]: fields.email,
        [CONTACT_FORM.fields.message]: fields.message,
      });
      // Google Forms does not send CORS headers, so the response is opaque.
      await fetch(CONTACT_FORM.action, { method: "POST", mode: "no-cors", body });
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-12"
    >
      <h3 className="text-xl font-bold">Send a message</h3>

      <div className="mt-6 space-y-5">
        <label className="block text-sm font-medium">
          Name
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={field}
          />
        </label>
        <label className="block text-sm font-medium">
          Email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={field}
          />
        </label>
        <label className="block text-sm font-medium">
          Message
          <textarea
            name="message"
            required
            minLength={10}
            rows={5}
            placeholder="What would you like to build or discuss?"
            className={`${field} resize-y`}
          />
        </label>
        {/* Honeypot field, hidden from people and assistive tech */}
        <input
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          className="hidden"
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className={`${btnPrimary} disabled:opacity-60`}
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
        <p
          role="status"
          className={`text-sm ${status === "error" ? "text-red-500" : "text-muted"}`}
        >
          {status === "sent" && "Message sent. I'll reply to the email you gave."}
          {status === "error" &&
            `The message did not send. Check your connection and try again, or email ${SITE.email}.`}
        </p>
      </div>
    </form>
  );
}
