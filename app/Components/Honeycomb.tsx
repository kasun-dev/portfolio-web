"use client";

import { useState, type CSSProperties } from "react";
import { SKILLS, SKILL_ROWS, type Skill } from "../data/content";

const GAP = 4; // px between cells

const rows: Skill[][] = (() => {
  let start = 0;
  return SKILL_ROWS.map((count) => {
    const row = SKILLS.slice(start, start + count);
    start += count;
    return row;
  });
})();

export default function Honeycomb() {
  const [active, setActive] = useState<Skill | null>(null);

  return (
    <div>
      <div
        role="list"
        aria-label="Technologies I use"
        // Pointy-top hexagon: height is 2/sqrt(3) of the width, and rows
        // overlap by a quarter of the height so the cells tessellate.
        style={{ "--w": "clamp(54px, 14vw, 88px)" } as CSSProperties}
        onMouseLeave={() => setActive(null)}
      >
        {rows.map((row, r) => (
          <div
            key={r}
            role="presentation"
            className="flex justify-center"
            style={{
              gap: GAP,
              marginTop: r === 0 ? 0 : `calc(var(--w) * -0.2887 + ${GAP * 0.866}px)`,
            }}
          >
            {row.map((skill) => (
              <div
                key={skill.name}
                role="listitem"
                tabIndex={0}
                aria-label={skill.name}
                onMouseEnter={() => setActive(skill)}
                onFocus={() => setActive(skill)}
                onBlur={() => setActive(null)}
                onClick={() => setActive(skill)}
                className={`hex relative grid shrink-0 cursor-default place-items-center outline-none transition-colors ${
                  active?.name === skill.name ? "bg-brand" : "bg-line"
                }`}
                style={{ width: "var(--w)", height: "calc(var(--w) * 1.1547)" }}
              >
                <span className="hex absolute inset-[2px] grid place-items-center bg-white dark:bg-[#e9ebf1]">
                  <img
                    src={`./img/tech/${skill.icon}`}
                    alt=""
                    loading="lazy"
                    className="h-[44%] w-[44%] object-contain"
                  />
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <p aria-live="polite" className="mt-6 h-6 text-center text-sm text-muted">
        {active ? (
          <>
            <span className="font-medium text-fg">{active.name}</span>{" "}
            <span>{active.group.toLowerCase()}</span>
          </>
        ) : (
          "Hover, tap or focus a hexagon"
        )}
      </p>
    </div>
  );
}
