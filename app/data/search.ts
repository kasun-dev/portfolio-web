import { PROJECTS, type Project } from "./content";

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim();

/** Projects whose title, type, tech or description contain the text, titles first. */
export function matchProjects(q: string): Project[] {
  const t = norm(q);
  if (!t) return [];
  const scored: [number, Project][] = [];
  for (const p of PROJECTS) {
    const title = norm(p.title);
    if (title.includes(t) || t.includes(title)) scored.push([0, p]);
    else if ([p.type, ...p.tech].some((x) => norm(x).includes(t))) scored.push([1, p]);
    else if (norm(p.description).includes(t)) scored.push([2, p]);
  }
  return scored.sort((a, b) => a[0] - b[0]).map(([, p]) => p);
}

/** Projects named in a piece of text (a question or an answer). */
export function mentionedProjects(text: string): Project[] {
  const t = ` ${norm(text)} `;
  return PROJECTS.filter((p) => {
    const title = norm(p.title);
    return title.length > 3 && t.includes(` ${title} `);
  });
}
