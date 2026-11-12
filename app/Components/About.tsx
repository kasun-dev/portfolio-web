import { LINKS, SITE } from "../data/content";
import { btnOutline } from "../data/ui";
import Section from "./Section";

const facts = [
  { term: "Working at", detail: `${SITE.company}, as an Associate (remote)` },
  { term: "Graduated from", detail: "Sri Lanka Institute of Information Technology (SLIIT), Sep 2026" },
  { term: "Based in", detail: SITE.location },
  { term: "Main stack", detail: "React, Next.js, NestJS, PostgreSQL, AWS, ESP32" },
];

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="mx-auto w-full max-w-[340px] glass overflow-hidden rounded-[2rem] p-2">
          <img
            src="./img/kasun-about.webp"
            alt="Kasun working at a desk"
            width={756}
            height={1100}
            loading="lazy"
            className="h-auto w-full rounded-[1.5rem]"
          />
        </div>

        <div>
          <div className="glass max-w-xl space-y-4 rounded-2xl p-6 text-lg leading-relaxed text-fg/85 sm:p-7">
            <p>
              I&apos;m a software engineer who graduated from SLIIT in September
              2026. After a year as an intern at {SITE.company}, I now work
              there full-time as an Associate, remotely from {SITE.location.split(",")[0]}.
            </p>
            <p>
              Most of my work is full-stack TypeScript with React, Next.js and
              NestJS, backed by PostgreSQL, Docker and AWS. Outside work I build
              things that reach past the screen, like an ESP32 controller that
              senses engine RPM and drives a power valve.
            </p>
            <p>
              Away from the keyboard I shoot mobile photography as{" "}
              <a
                href={LINKS.photography}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg underline decoration-brand decoration-2 underline-offset-4"
              >
                click.ed_by
              </a>{" "}
              and travel when I can.
            </p>
          </div>

          <dl className="mt-10 grid max-w-xl gap-x-8 gap-y-5 sm:grid-cols-2">
            {facts.map((f) => (
              <div key={f.term} className="glass rounded-xl p-4">
                <dt className="text-sm text-muted">{f.term}</dt>
                <dd className="mt-1 font-medium">{f.detail}</dd>
              </div>
            ))}
          </dl>

          <a
            href={LINKS.cv}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnOutline} mt-10`}
          >
            Download CV
          </a>
        </div>
      </div>
    </Section>
  );
}
