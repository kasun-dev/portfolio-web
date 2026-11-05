/**
 * All portfolio content lives here. Edit this file to update the site;
 * the components only render what is defined below.
 */

export const SITE = {
  name: "Kasun Jayamaha",
  role: "Software Engineer",
  // Used for SEO, sitemap and share cards. Change it if you add a custom domain.
  url: "https://kasun-dev.github.io/portfolio-web",
  email: "kasunjayamaha.dev@gmail.com",
  location: "Colombo, Sri Lanka",
  githubUser: "kasun-dev",
  // Shown under the hero heading. Set to "" to hide it.
  availability: "Open to internships and freelance work",
  description:
    "Kasun Jayamaha is a software engineering undergraduate from Colombo, Sri Lanka, building full-stack web apps, mobile apps and IoT systems with React, Next.js, NestJS, Flutter and ESP32.",
};

export const LINKS = {
  github: "https://github.com/kasun-dev",
  linkedin: "https://www.linkedin.com/in/kasun-jayamaha-32963829b/",
  instagram: "https://www.instagram.com/kx.0023/",
  photography: "https://www.instagram.com/click.ed_by/",
  facebook:
    "https://www.facebook.com/profile.php?id=100031979594182&mibextid=ZbWKwL",
  medium: "https://medium.com/@ks2005755",
  whatsapp: "https://wa.me/qr/CD35YS53WK6JP1",
  cv: "./cv.pdf",
};

/** Google Form that receives the contact form submissions. */
export const CONTACT_FORM = {
  action:
    "https://docs.google.com/forms/d/e/1FAIpQLSc2aCuFsjK5n8R9aRmpiOhruipe0iG_nO8n7yjjRVXCwjebnw/formResponse",
  fields: {
    name: "entry.1825895740",
    email: "entry.11226799",
    message: "entry.674492514",
  },
};

export const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "timeline", label: "Timeline" },
  { id: "contact", label: "Contact" },
];

export const ROLES = [
  "full-stack web apps",
  "IoT systems on ESP32",
  "Flutter and Kotlin apps",
  "backend APIs",
];

export type SkillGroup =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Databases"
  | "Mobile"
  | "Tools and hardware";

export type Skill = { name: string; icon: string; group: SkillGroup };

/** Order matters: the honeycomb fills row by row (5, 4, 5, 4, 4). */
export const SKILLS: Skill[] = [
  { name: "C", icon: "c.svg", group: "Languages" },
  { name: "C++", icon: "cpp.svg", group: "Languages" },
  { name: "Java", icon: "java.svg", group: "Languages" },
  { name: "JavaScript", icon: "javascript.svg", group: "Languages" },
  { name: "TypeScript", icon: "typescript.svg", group: "Languages" },
  { name: "React", icon: "react.svg", group: "Frontend" },
  { name: "Next.js", icon: "nextjs.webp", group: "Frontend" },
  { name: "HTML", icon: "html.svg", group: "Frontend" },
  { name: "CSS", icon: "css.svg", group: "Frontend" },
  { name: "Tailwind CSS", icon: "tailwind.svg", group: "Frontend" },
  { name: "Node.js", icon: "nodejs.svg", group: "Backend" },
  { name: "Express", icon: "express.png", group: "Backend" },
  { name: "NestJS", icon: "nestjs.svg", group: "Backend" },
  { name: "MongoDB", icon: "mongodb.svg", group: "Databases" },
  { name: "MySQL", icon: "mysql.svg", group: "Databases" },
  { name: "Firebase", icon: "firebase.svg", group: "Databases" },
  { name: "Flutter", icon: "flutter.svg", group: "Mobile" },
  { name: "Kotlin", icon: "kotlin.svg", group: "Mobile" },
  { name: "Figma", icon: "figma.svg", group: "Tools and hardware" },
  { name: "Postman", icon: "postman.svg", group: "Tools and hardware" },
  { name: "Arduino", icon: "arduino.svg", group: "Tools and hardware" },
  { name: "ESP32", icon: "esp32.png", group: "Tools and hardware" },
];

export const SKILL_ROWS = [5, 4, 5, 4, 4];

export const ALSO_USED = [
  "PostgreSQL",
  "Prisma",
  "Docker",
  "Kafka",
  "gRPC",
  "Nuxt.js",
  "Stripe",
  "Typesense",
  "JWT",
  "REST APIs",
  "Java Servlets",
  "Room and MVVM",
  "Git and GitHub",
];

export type ProjectType = "Fullstack" | "Frontend" | "Backend" | "Mobile" | "IoT";

export type Project = {
  id: string;
  title: string;
  type: ProjectType;
  description: string;
  tech: string[];
  cover?: string;
  repo?: string;
  live?: string;
  design?: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "thoughtpad",
    title: "ThoughtPAD",
    type: "Fullstack",
    featured: true,
    description:
      "A post-sharing platform where people write, edit and search posts, with paid subscriptions handled through an integrated payment system.",
    tech: ["Nuxt.js", "NestJS", "PostgreSQL", "Typesense", "Zod", "Stripe", "Cloudinary"],
    cover: "thoughtpad.webp",
  },
  {
    id: "food-delivery",
    title: "Food Delivery Platform",
    type: "Fullstack",
    featured: true,
    description:
      "A food delivery platform split into microservices for restaurants, delivery, payments and notifications, with services talking over gRPC and Kafka.",
    tech: ["MERN", "gRPC", "Docker", "Kafka", "MongoDB"],
    cover: "food-delivery.webp",
    repo: "https://github.com/Food-Delivery-App-SLIIT-DS-Project",
  },
  {
    id: "esp32-smart-home",
    title: "ESP32 Smart Home",
    type: "IoT",
    featured: true,
    description:
      "Real-time control of home appliances through an ESP32 and a relay module, with Firebase syncing state to a Flutter app.",
    tech: ["ESP32", "Firebase", "Flutter", "Arduino", "Relay module"],
    cover: "esp32-smart-home.webp",
    repo: "https://github.com/kasun-dev/smartHomePro-flutterApp",
  },
  {
    id: "hms",
    title: "H-Link Hospital Management",
    type: "Fullstack",
    description:
      "Manages hospital workflows: patient records, consultations, appointments, billing and staff.",
    tech: ["Next.js", "NestJS", "Prisma", "SQL", "Tailwind CSS"],
    cover: "hms.webp",
    repo: "https://github.com/SLIIT-3Y-S1/CSSE_HMS",
    design:
      "https://www.figma.com/design/0nE8s6GlJZCh0OjQBZs8jb/hlink?node-id=0-1&t=YaQGUNAVtBD0Qxva-1",
  },
  {
    id: "nourish-lanka",
    title: "Nourish Lanka",
    type: "Fullstack",
    description:
      "Connects food donors with NGOs and communities in need: post surplus food, schedule pickups and track donation history.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    cover: "nourish-lanka.webp",
    repo: "https://github.com/OsinduV/NourishLanka-Food_Donation_System-MERN",
  },
  {
    id: "ideomix",
    title: "IdeoMix",
    type: "Frontend",
    description:
      "A meeting point for entrepreneurs and investors, with tools for sharing ideas and matching them to funding.",
    tech: ["HTML", "CSS", "JavaScript"],
    cover: "ideomix.webp",
    repo: "https://github.com/kasun-dev/ideomix",
    live: "https://kasun-dev.github.io/ideomix/",
  },
  {
    id: "esp32-research",
    title: "ESP32 Research Experiments",
    type: "IoT",
    description:
      "A growing set of personal ESP32 experiments with code, circuit diagrams and write-ups.",
    tech: ["ESP32", "Arduino", "Firebase", "Bluetooth and WiFi", "React", "Flutter"],
    cover: "esp32-research.webp",
    repo: "https://github.com/kasun-dev/ESP32-IoT-Research-Experiments",
  },
  {
    id: "pawpal",
    title: "PawPal",
    type: "Mobile",
    description:
      "A mobile app for pet owners: adoption, lost-pet tracking, donations and a community space.",
    tech: ["Flutter", "Firebase"],
    cover: "pawpal.webp",
    repo: "https://github.com/SLIIT-3Y-S1/UEE_PetsAdoption",
    design:
      "https://www.figma.com/design/F1QJrmVUbH8uYb2c9M3uBA/pawpal?node-id=0-1&t=grPbMRP04FMnuKsV-1",
  },
  {
    id: "finance-backend",
    title: "Finance Tracker API",
    type: "Backend",
    description:
      "A REST API for tracking income and expenses, with authentication and spending analytics.",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    cover: "finance-backend.webp",
    repo: "https://github.com/kasun-dev/FinancialTracker-NodeBackend",
  },
  {
    id: "country-search",
    title: "Country Search",
    type: "Frontend",
    description:
      "Search for any country and see its details, using the REST Countries API.",
    tech: ["React", "REST API", "CSS Modules"],
    cover: "country-search.webp",
    repo: "https://github.com/kasun-dev/countrySearch-Frontend",
    live: "https://country-search-frontend.vercel.app/",
  },
  {
    id: "wht-todo",
    title: "Wht to Do",
    type: "Mobile",
    description:
      "An Android to-do app for planning the day, with a clean interface and local storage.",
    tech: ["Kotlin", "Android SDK", "MVVM", "Room"],
    repo: "https://github.com/kasun-dev/whtTODO",
  },
  {
    id: "laundry-pro",
    title: "Laundry Management System",
    type: "Fullstack",
    description:
      "A Java web app for laundry services with user management and order tracking.",
    tech: ["Java Servlets", "JSP", "MySQL", "CSS"],
    repo: "https://github.com/kasun-dev/laundryProProject",
  },
  {
    id: "portfolio",
    title: "This portfolio",
    type: "Frontend",
    description:
      "The site you are on: a single-page Next.js build, exported statically and hosted on GitHub Pages.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "GitHub Pages"],
    cover: "portfolio.webp",
    repo: "https://github.com/kasun-dev/portfolio-web",
  },
];

export const PROJECT_TYPES: ("All" | ProjectType)[] = [
  "All",
  "Fullstack",
  "Frontend",
  "Backend",
  "Mobile",
  "IoT",
];

/** Newest first. Edit freely: this is a starting point drawn from your repositories. */
export const TIMELINE = [
  {
    when: "Year 4",
    title: "IoT component of a final-year research project",
    body: "Building the ESP32-based IoT part of a group research project.",
  },
  {
    when: "Year 3",
    title: "Distributed systems and enterprise apps",
    body: "Built a microservices food delivery platform (gRPC, Kafka, Docker) and a hospital management system for university modules.",
  },
  {
    when: "Ongoing",
    title: "Self-directed hardware experiments",
    body: "ESP32, Firebase and Flutter experiments, documented with code and circuit diagrams on GitHub.",
  },
  {
    when: "Since the start",
    title: "Software engineering at SLIIT",
    body: "Sri Lanka Institute of Information Technology, Colombo.",
  },
];
