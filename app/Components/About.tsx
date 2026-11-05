import { LINKS, SITE } from "../data/content";
import { btnOutline } from "../data/ui";
import Section from "./Section";

const facts = [
  { term: "Studying at", detail: "Sri Lanka Institute of Information Technology (SLIIT)" },
  { term: "Based in", detail: SITE.location },
  { term: "Main stack", detail: "React, Next.js, NestJS, MongoDB, PostgreSQL" },
  { term: "Hardware", detail: "ESP32 and Arduino" },
];

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="mx-auto w-full max-w-[340px] overflow-hidden rounded-[2rem] bg-[#14161d] ring-1 ring-line">
          <img
            src="./img/kasun-about.webp"
            alt="Kasun working at a desk"
            width={756}
            height={1100}
            loading="lazy"
            className="h-auto w-full"
          />
        </div>

        <div>
          <div className="max-w-xl space-y-4 text-lg leading-relaxed text-muted">
            <p>
              I&apos;m a software engineering student who likes projects that
              reach past the screen: an app that switches real appliances
              through an ESP32, or a delivery platform made of services that
              talk to each other.
            </p>
            <p>
              Most of my work is full-stack TypeScript with React, Next.js and
              NestJS. I also write Flutter and Kotlin for mobile, and C++ for
              ESP32 firmware.
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
              <div key={f.term} className="border-t border-line pt-3">
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
