import type { ReactNode } from "react";
import { container } from "../data/ui";

type Props = {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export default function Section({ id, title, intro, children }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="border-t border-line py-20 sm:py-28"
    >
      <div className={container}>
        <header className="max-w-2xl">
          <h2
            id={`${id}-title`}
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {title}
          </h2>
          {intro && <p className="mt-3 text-lg text-muted">{intro}</p>}
        </header>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
