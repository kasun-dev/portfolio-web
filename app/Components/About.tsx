import { LINKS, SITE } from "../data/content";

const facts = [
  { term: "Working at", detail: `${SITE.company}, as an Associate (remote)` },
  { term: "Graduated from", detail: "Sri Lanka Institute of Information Technology (SLIIT), Sep 2026" },
  { term: "Based in", detail: SITE.location },
  { term: "Main stack", detail: "React, Next.js, NestJS, PostgreSQL, AWS, ESP32" },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="min-h-[calc(100svh-3.5rem)] border-t border-line py-16">
      <h2 id="about-title" className="text-[34px] font-bold leading-[1.1] tracking-tight sm:text-[46px]">
        About
      </h2>
      <div className="mt-6 space-y-6 font-display text-[20px] leading-[1.7] text-fg">
        <p>
          I&apos;m a software engineer who graduated from SLIIT in September
          2026. After a year as an intern at {SITE.company}, I now work there
          full-time as an Associate, remotely from {SITE.location.split(",")[0]}.
        </p>
        <p>
          Most of my work is full-stack TypeScript with React, Next.js and
          NestJS, backed by PostgreSQL, Docker and AWS. Outside work I build
          things that reach past the screen, like an ESP32 controller that
          senses engine RPM and drives a power valve.
        </p>
        <p>
          Away from the keyboard I run{" "}
          <a
            href="https://www.studioclicked.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline decoration-1 underline-offset-4 hover:decoration-2"
          >
            Studio Click.ed
          </a>
          , a photography studio in Colombo, and share mobile photography as{" "}
          <a
            href={LINKS.photography}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-1 underline-offset-4 hover:decoration-2"
          >
            click.ed_by
          </a>{" "}
          and travel when I can.
        </p>
      </div>

      <dl className="mt-10 border-t border-line">
        {facts.map((f) => (
          <div
            key={f.term}
            className="grid gap-1 border-b border-line py-4 sm:grid-cols-[9rem_1fr] sm:gap-6"
          >
            <dt className="text-sm text-muted">{f.term}</dt>
            <dd className="text-[15px]">{f.detail}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
