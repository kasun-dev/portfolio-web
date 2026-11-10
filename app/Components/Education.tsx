import { CREDENTIALS } from "../data/content";
import { ArrowUpRightIcon } from "./Icons";
import Section from "./Section";

export default function Education() {
  return (
    <Section
      id="education"
      fill
      title="Education and certifications"
      intro="What I studied, what I have certified, and where I write."
    >
      <ul className="grid gap-5 md:grid-cols-3">
        {CREDENTIALS.map((c) => (
          <li
            key={c.title}
            className="flex flex-col rounded-2xl border border-line bg-surface p-6"
          >
            <p className="text-sm text-muted">{c.kind}</p>
            <h3 className="mt-2 text-lg font-semibold leading-snug">{c.title}</h3>
            <p className="mt-2 text-pretty text-[15px] leading-relaxed text-muted">{c.detail}</p>
            {c.note && (
              <p className="mt-3 border-l-2 border-brand pl-3 text-sm leading-relaxed text-muted">
                {c.note}
              </p>
            )}
            {c.href && (
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold underline decoration-brand decoration-2 underline-offset-4"
              >
                {c.cta}
                <ArrowUpRightIcon />
              </a>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
