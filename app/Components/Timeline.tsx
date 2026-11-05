import { TIMELINE } from "../data/content";
import Section from "./Section";

export default function Timeline() {
  return (
    <Section id="timeline" title="Timeline" intro="How I got here, newest first.">
      <ol className="relative max-w-2xl border-l border-line pl-8">
        {TIMELINE.map((item) => (
          <li key={item.title} className="relative pb-10 last:pb-0">
            <span
              aria-hidden
              className="hex absolute -left-[2.6rem] top-1 h-5 w-[1.1rem] bg-brand"
            />
            <p className="text-sm text-muted">{item.when}</p>
            <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
            <p className="mt-1 text-muted">{item.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
