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
    const body = new URLSearchParams({
      [CONTACT_FORM.fields.name]: String(data.get("name") ?? ""),
      [CONTACT_FORM.fields.email]: String(data.get("email") ?? ""),
      [CONTACT_FORM.fields.message]: String(data.get("message") ?? ""),
    });

    try {
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
      className="rounded-2xl border border-line bg-surface p-6 sm:p-8"
    >
      <h3 className="text-xl font-semibold">Send a message</h3>

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
