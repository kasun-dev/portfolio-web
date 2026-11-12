import { ALSO_USED, SKILLS, SKILL_EXTRAS } from "../data/content";
import { chip } from "../data/ui";

const ORDER = [
  "Languages",
  "Frontend",
  "Mobile",
  "Backend",
  "Databases",
  "Cloud and DevOps",
  "Tools",
  "AI",
  "IoT and embedded",
];

const groups = ORDER.map((group) => ({
  group,
  items: [
    ...SKILLS.filter((s) => s.group === group).map((s) => s.name),
    ...SKILL_EXTRAS.filter((e) => e.group === group).flatMap((e) => e.items),
  ],
})).filter((g) => g.items.length > 0);

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="min-h-[calc(100svh-3.5rem)] border-t border-line py-16">
      <h2 id="skills-title" className="text-[34px] font-bold leading-[1.1] tracking-tight sm:text-[46px]">
        Skills
      </h2>
      <p className="mt-4 font-display text-xl leading-relaxed text-muted">
        What I reach for, grouped by the kind of work.
      </p>
      <dl className="mt-8 border-t border-line">
        {[...groups, { group: "Also used", items: ALSO_USED }].map((g) => (
          <div
            key={g.group}
            className="grid gap-3 border-b border-line py-5 sm:grid-cols-[9rem_1fr] sm:gap-6"
          >
            <dt className="pt-1.5 text-sm text-muted">{g.group}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((name) => (
                  <li key={name} className={chip}>
                    {name}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
