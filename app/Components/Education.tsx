import { CREDENTIALS } from "../data/content";
import { ArrowUpRightIcon } from "./Icons";

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="min-h-[calc(100svh-3.5rem)] border-t border-line py-16">
      <h2 id="education-title" className="text-[34px] font-bold leading-[1.1] tracking-tight sm:text-[46px]">
        Education
      </h2>
      <p className="mt-4 font-display text-xl leading-relaxed text-muted">
        What I studied, what I have certified, and where I write.
      </p>
      <ul className="mt-8 border-t border-line">
        {CREDENTIALS.map((c) => (
          <li key={c.title} className="border-b border-line py-6">
            <span className="inline-flex rounded-full bg-surface px-3 py-1 text-xs text-muted">
              {c.kind}
            </span>
            <h3 className="mt-3 text-xl font-bold leading-snug">{c.title}</h3>
            <p className="mt-2 text-[15px] text-muted">{c.detail}</p>
            {c.note && (
              <p className="mt-3 border-l-2 border-fg pl-4 font-display text-[17px] leading-relaxed text-fg">
                {c.note}
              </p>
            )}
            {c.href && (
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium underline underline-offset-4"
              >
                {c.cta}
                <ArrowUpRightIcon />
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
