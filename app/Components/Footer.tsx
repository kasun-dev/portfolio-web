import { LINKS, SITE } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10 text-[13px] text-muted">
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        <li><a className="hover:text-fg" href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a className="hover:text-fg" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a className="hover:text-fg" href={LINKS.medium} target="_blank" rel="noopener noreferrer">Medium</a></li>
        <li><a className="hover:text-fg" href="https://github.com/kasun-dev/portfolio-web" target="_blank" rel="noopener noreferrer">Source of this site</a></li>
        <li><a className="hover:text-fg" href="#home">Back to top</a></li>
      </ul>
      <p className="mt-4">&copy; {new Date().getFullYear()} {SITE.name}. Built with Next.js and Tailwind CSS.</p>
    </footer>
  );
}
