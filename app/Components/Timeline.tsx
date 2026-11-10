import { TIMELINE, type TimelineItem } from "../data/content";
import Section from "./Section";

function Card({ item }: { item: TimelineItem }) {
  return (
    <div
      className={`rounded-2xl border bg-surface p-5 ${
        item.current ? "border-brand shadow-[0_0_0_3px_rgb(var(--brand)/0.15)]" : "border-line"
      }`}
    >
      <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
      <p className="mt-1.5 text-pretty text-[15px] leading-relaxed text-muted">{item.body}</p>
    </div>
  );
}

function When({ item, className = "" }: { item: TimelineItem; className?: string }) {
  return (
    <p className={`flex items-center gap-2 text-sm font-medium text-muted ${className}`}>
      {item.when}
      {item.current && (
        <span className="rounded-full bg-brand px-2 py-0.5 text-xs font-semibold text-neutral-900">
          Now
        </span>
      )}
    </p>
  );
}

export default function Timeline() {
  return (
    <Section id="timeline" title="Timeline" intro="From my first day at university to today.">
      <ol className="relative mx-auto max-w-4xl">
        {/* The spine: left on phones, centred from md up */}
        <span
          aria-hidden
          className="absolute bottom-2 left-[0.55rem] top-2 w-px bg-line md:left-1/2 md:-translate-x-1/2"
        />
        {TIMELINE.map((item, i) => {
          const left = i % 2 === 0; // card on the left of the spine (md+)
          return (
            <li
              key={item.title}
              className="relative grid grid-cols-[1.1rem_1fr] gap-x-5 pb-10 last:pb-0 md:grid-cols-[1fr_1.1rem_1fr] md:gap-x-8"
            >
              {/* marker */}
              <span
                aria-hidden
                className={`hex relative z-10 mt-5 h-5 w-[1.1rem] md:col-start-2 md:row-start-1 ${
                  item.current ? "bg-brand" : "bg-fg/70"
                }`}
              />
              {/* card */}
              <div
                className={`col-start-2 row-start-1 ${
                  left ? "md:col-start-1" : "md:col-start-3"
                }`}
              >
                <When item={item} className="mb-1.5 md:hidden" />
                <Card item={item} />
              </div>
              {/* date on the opposite side (md+) */}
              <div
                className={`hidden md:row-start-1 md:flex md:items-start md:pt-5 ${
                  left ? "md:col-start-3 md:justify-start" : "md:col-start-1 md:justify-end"
                }`}
              >
                <When item={item} />
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
