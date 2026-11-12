import { TIMELINE } from "../data/content";

export default function Timeline() {
  return (
    <section id="timeline" aria-labelledby="timeline-title" className="border-t border-line py-12">
      <h2 id="timeline-title" className="text-[28px] font-bold leading-tight tracking-tight">
        Timeline
      </h2>
      <p className="mt-3 font-display text-lg leading-relaxed text-muted">
        From the first lecture at SLIIT to where I work today.
      </p>
      <ol className="mt-10">
        {TIMELINE.map((t, i) => (
          <li key={t.title} className="relative pb-9 pl-8 last:pb-0">
            {i < TIMELINE.length - 1 && (
              <span aria-hidden className="absolute bottom-0 left-[5px] top-3 w-px bg-line" />
            )}
            <span
              aria-hidden
              className={`absolute left-0 top-[7px] h-[11px] w-[11px] rounded-full ${
                t.current ? "bg-emerald-600" : "border-2 border-muted bg-bg"
              }`}
            />
            <p className="text-sm text-muted">
              {t.when}
              {t.current && <span className="ml-2 font-medium text-fg">Now</span>}
            </p>
            <h3 className="mt-1 text-lg font-bold leading-snug">{t.title}</h3>
            <p className="mt-2 font-display text-[17px] leading-[1.65] text-muted">{t.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
