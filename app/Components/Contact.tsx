"use client";

import { useState } from "react";
import { LINKS, SITE } from "../data/content";
import { btnPrimary } from "../data/ui";
import ContactForm from "./ContactForm";
import { ArrowUpRightIcon, CheckIcon, CopyIcon, MailIcon } from "./Icons";

const profiles = [
  { label: "GitHub", handle: "kasun-dev", href: LINKS.github },
  { label: "LinkedIn", handle: "kasun-jayamaha", href: LINKS.linkedin },
  { label: "WhatsApp", handle: "Send a message", href: LINKS.whatsapp },
  { label: "Instagram", handle: "@kx.0023", href: LINKS.instagram },
  { label: "Medium", handle: "@ks2005755", href: LINKS.medium },
  { label: "Facebook", handle: "Don Kasun Jayamaha", href: LINKS.facebook },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${SITE.email}`;
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="min-h-[calc(100svh-3.5rem)] border-t border-line py-16">
      <h2 id="contact-title" className="text-[34px] font-bold leading-[1.1] tracking-tight sm:text-[46px]">
        Contact
      </h2>
      <p className="mt-4 font-display text-xl leading-relaxed text-muted">
        Have a project, an opportunity or a question? I read every message.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a href={`mailto:${SITE.email}`} className={btnPrimary}>
          <MailIcon width={16} height={16} />
          {SITE.email}
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-fg"
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
          <span role="status">{copied ? "Copied" : "Copy email"}</span>
        </button>
      </div>

      <ul className="mt-8 border-t border-line">
        {profiles.map((p) => (
          <li key={p.label} className="border-b border-line">
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 py-4 transition-colors hover:text-muted"
            >
              <span className="font-medium">{p.label}</span>
              <span className="flex items-center gap-1.5 text-sm text-muted">
                {p.handle}
                <ArrowUpRightIcon />
              </span>
            </a>
          </li>
        ))}
      </ul>

      <ContactForm />
    </section>
  );
}
