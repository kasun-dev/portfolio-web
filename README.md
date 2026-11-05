# Kasun Jayamaha: Portfolio

A single-page portfolio built with Next.js (App Router), Tailwind CSS and Framer Motion, exported as a static site and deployed to GitHub Pages.

## Features

- Light and dark themes, following the system setting and remembered after the first choice (no flash on load)
- Responsive layout from phone to wide desktop, one codebase (no separate mobile pages)
- Hero with typewriter roles, honeycomb skills grid, filterable project cards, timeline
- Contact form that posts to a Google Form, with a honeypot and clear sent / error states, plus a copy-email button
- Accessible: skip link, visible focus, labelled controls, reduced-motion support
- SEO: page metadata, Open Graph and Twitter cards, JSON-LD `Person` data, `sitemap.xml`, `robots.txt`
- Optimized images (about 1 MB in total, down from about 25 MB)

## Edit the content

Everything you would normally change lives in **`app/data/content.ts`**:

| What | Where |
| --- | --- |
| Name, email, location, availability badge, site URL | `SITE` |
| Social links and CV path | `LINKS` |
| Typewriter phrases in the hero | `ROLES` |
| Skills (honeycomb) | `SKILLS`, `SKILL_ROWS` |
| Projects and filters | `PROJECTS` |
| Timeline entries | `TIMELINE` |
| Google Form endpoint and field ids | `CONTACT_FORM` |

To add a project, add an object to `PROJECTS` and drop a screenshot in `public/img/projects/` (WebP, about 1000 px wide). A project without a `cover` gets a hexagon with its initials.

Colours are tokens in `app/globals.css` (`:root` for light, `.dark` for dark).

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export into ./out
```

## Deploy

Pushing to `main` runs `.github/workflows/nextjs.yml`, which builds the static export and publishes it to GitHub Pages.

If you move to a custom domain, update `SITE.url` in `app/data/content.ts` so share cards, the sitemap and canonical URLs point at it.

## Structure

```
app/
  Components/   Section components (Hero, About, Skills, Projects, Timeline, Contact, Nav, ...)
  data/         content.ts (all copy and links), ui.ts (shared class strings)
  layout.tsx    Fonts, metadata, theme script, JSON-LD
  page.tsx      Page composition
public/
  img/          Optimized portrait, logo, project covers and tech icons
  og.png        Share card
  cv.pdf
```
