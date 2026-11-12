import type { ReactNode } from "react";
import { container } from "../data/ui";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

type Props = {
  id: string;
  title: string;
  intro?: string;
  /** Fill the screen height and centre the content (for short sections). */
  fill?: boolean;
  children: ReactNode;
};

export default function Section({ id, title, intro, fill, children }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`pb-20 pt-24 sm:pb-24 sm:pt-28 ${
        fill ? "flex min-h-screen min-h-svh flex-col justify-center" : ""
      }`}
    >
      <div className={container}>
        <header className="max-w-2xl">
          <SectionTitle id={id} text={title} />
          {intro && (
            <Reveal delay={0.1} y={14}>
              <p className="mt-3 text-lg text-muted">{intro}</p>
            </Reveal>
          )}
        </header>
        <Reveal className="mt-12" delay={0.05} y={34}>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
