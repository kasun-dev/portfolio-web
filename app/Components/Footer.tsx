import { SITE } from "../data/content";
import { container } from "../data/ui";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg/50 py-10 backdrop-blur-md">
      <div
        className={`${container} flex flex-col items-start justify-between gap-4 text-sm text-muted sm:flex-row sm:items-center`}
      >
        <p>
          &copy; {new Date().getFullYear()} {SITE.name}. Built with Next.js and
          Tailwind CSS.
        </p>
        <a href="#home" className="underline decoration-brand decoration-2 underline-offset-4 hover:text-fg">
          Back to top
        </a>
      </div>
    </footer>
  );
}
