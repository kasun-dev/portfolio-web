import { LINKS, PROJECTS, SITE } from "../data/content";
import { btnOutline, btnPrimary } from "../data/ui";
import { MailIcon } from "./Icons";

/** The top of the page reads like a Medium profile: photo, name, one line, actions. */
export default function Hero() {
  return (
    <section id="home" aria-labelledby="home-title" className="flex min-h-[calc(100svh-3.5rem)] flex-col justify-center py-12">
      <img
        src="./img/avatar.webp"
        alt="Portrait of Kasun Jayamaha"
        width={256}
        height={256}
        fetchPriority="high"
        className="h-20 w-20 rounded-full object-cover sm:h-24 sm:w-24"
      />
      <h1
        id="home-title"
        className="mt-6 text-[38px] font-bold leading-[1.05] tracking-tight sm:text-[56px]"
      >
        {SITE.name}
      </h1>
      <p className="mt-2 text-base text-muted">
        {SITE.role} in {SITE.location}
      </p>
      <p className="mt-6 max-w-[34rem] font-display text-[21px] leading-[1.55] text-fg">
        I build web apps, cloud backends and small devices that talk to them.
        These pages are a feed of the things I have made.
      </p>
      <p className="mt-5 flex items-center gap-2 text-sm text-muted">
        <span className="h-2 w-2 rounded-full bg-emerald-600" aria-hidden />
        {SITE.availability}
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a href={`mailto:${SITE.email}`} className={btnPrimary}>
          <MailIcon width={16} height={16} />
          Email me
        </a>
        <a href={LINKS.cv} target="_blank" rel="noopener noreferrer" className={btnOutline}>
          Download CV
        </a>
        <a href="#projects" className="px-2 text-sm text-muted hover:text-fg">
          See {PROJECTS.length} projects
        </a>
      </div>
    </section>
  );
}
