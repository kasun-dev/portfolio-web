import { ALSO_USED, SKILLS, SKILL_EXTRAS } from "../data/content";
import Honeycomb from "./Honeycomb";
import Section from "./Section";

const groups: string[] = Array.from(
  new Set([...SKILLS.map((s) => s.group as string), ...SKILL_EXTRAS.map((e) => e.group)]),
);

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      intro="The tools I reach for most, from firmware to cloud."
    >
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Honeycomb />

        <div>
          <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {groups.map((group) => (
              <div key={group} className="border-t border-line pt-3">
                <dt className="font-medium">{group}</dt>
                <dd className="mt-1 text-muted">
                  {[
                    ...SKILLS.filter((s) => s.group === group).map((s) => s.name),
                    ...(SKILL_EXTRAS.find((e) => e.group === group)?.items ?? []),
                  ].join(", ")}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 max-w-md text-muted">
            <span className="font-medium text-fg">Also used in projects: </span>
            {ALSO_USED.join(", ")}.
          </p>
        </div>
      </div>
    </Section>
  );
}
