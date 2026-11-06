/**
 * All portfolio content lives here. Edit this file to update the site;
 * the components only render what is defined below.
 */

export const SITE = {
  name: "Kasun Jayamaha",
  role: "Software Engineer",
  company: "Axceera (Pvt) Ltd",
  // Used for SEO, sitemap and share cards. Change it if you add a custom domain.
  url: "https://kasun-dev.github.io/portfolio-web",
  email: "kasunjayamaha.dev@gmail.com",
  location: "Colombo, Sri Lanka",
  githubUser: "kasun-dev",
  // Shown under the hero heading. Set to "" to hide it.
  availability: "Associate at Axceera, working remotely",
  description:
    "Kasun Jayamaha is a software engineer from Colombo, Sri Lanka, working remotely as an Associate at Axceera. He builds full-stack web apps, cloud backends and IoT systems with React, Next.js, NestJS, AWS and ESP32.",
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
  "backend APIs and microservices",
  "cloud systems on AWS",
  "IoT systems on ESP32",
];

export type SkillGroup =
  | "Languages"
  | "Frontend"
  | "Mobile"
  | "Backend"
  | "Databases"
  | "Cloud and DevOps"
  | "Tools"
  | "IoT and embedded";

export type Skill = { name: string; icon: string; group: SkillGroup };

/** Order matters: the honeycomb fills row by row (see SKILL_ROWS). */
export const SKILLS: Skill[] = [
  { name: "TypeScript", icon: "typescript.svg", group: "Languages" },
  { name: "JavaScript", icon: "javascript.svg", group: "Languages" },
  { name: "Python", icon: "python.svg", group: "Languages" },
  { name: "Java", icon: "java.svg", group: "Languages" },
  { name: "C", icon: "c.svg", group: "Languages" },
  { name: "C++", icon: "cpp.svg", group: "Languages" },
  { name: "React", icon: "react.svg", group: "Frontend" },
  { name: "Next.js", icon: "nextjs.webp", group: "Frontend" },
  { name: "Tailwind CSS", icon: "tailwind.svg", group: "Frontend" },
  { name: "HTML", icon: "html.svg", group: "Frontend" },
  { name: "CSS", icon: "css.svg", group: "Frontend" },
  { name: "Flutter", icon: "flutter.svg", group: "Mobile" },
  { name: "Kotlin", icon: "kotlin.svg", group: "Mobile" },
  { name: "Node.js", icon: "nodejs.svg", group: "Backend" },
  { name: "Express", icon: "express.png", group: "Backend" },
  { name: "NestJS", icon: "nestjs.svg", group: "Backend" },
  { name: "PostgreSQL", icon: "postgresql.svg", group: "Databases" },
  { name: "MongoDB", icon: "mongodb.svg", group: "Databases" },
  { name: "Supabase", icon: "supabase.svg", group: "Databases" },
  { name: "Firebase", icon: "firebase.svg", group: "Databases" },
  { name: "Prisma", icon: "prisma.svg", group: "Databases" },
  { name: "Docker", icon: "docker.svg", group: "Cloud and DevOps" },
  { name: "Kubernetes", icon: "kubernetes.svg", group: "Cloud and DevOps" },
  { name: "AWS", icon: "aws.svg", group: "Cloud and DevOps" },
  { name: "Git", icon: "git.svg", group: "Tools" },
  { name: "Postman", icon: "postman.svg", group: "Tools" },
  { name: "Swagger UI", icon: "swagger.svg", group: "Tools" },
  { name: "Figma", icon: "figma.svg", group: "Tools" },
  { name: "ESP32", icon: "esp32.png", group: "IoT and embedded" },
  { name: "Arduino", icon: "arduino.svg", group: "IoT and embedded" },
];

export const SKILL_ROWS = [6, 5, 6, 5, 5, 3];

/** Skills listed as text only (no hexagon), shown with their group. */
export const SKILL_EXTRAS: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["Responsive design systems"] },
  { group: "Mobile", items: ["React Native"] },
  { group: "Backend", items: ["REST APIs", "WebSockets", "gRPC"] },
  { group: "Cloud and DevOps", items: ["Serverless, compute and storage on AWS"] },
  { group: "Tools", items: ["Custom browser extensions (Swagger PowerAuth)"] },
  {
    group: "IoT and embedded",
    items: ["MQTT", "Serial communication", "RPM sensing", "Controller firmware"],
  },
];

export const ALSO_USED = [
  "MySQL",
  "Kafka",
  "Nuxt.js",
  "Stripe",
  "Typesense",
  "JWT",
  "Java Servlets",
  "Room and MVVM",
  "GitHub",
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

/** Newest first. */
export const TIMELINE = [
  {
    when: "Sep 2026 to now",
    title: "Associate at Axceera (Pvt) Ltd",
    body: "Full-time and remote, at the company where I interned.",
  },
  {
    when: "Sep 2026",
    title: "Graduated from SLIIT",
    body: "Finished my software engineering degree at the Sri Lanka Institute of Information Technology, Colombo.",
  },
  {
    when: "Aug 2025 to Aug 2026",
    title: "Software engineering intern at Axceera (Pvt) Ltd",
    body: "A year working as a software engineer, finishing as I completed my degree.",
  },
  {
    when: "Final year",
    title: "IoT component of a research project",
    body: "Built the ESP32-based IoT part of a group research project.",
  },
  {
    when: "Year 3",
    title: "Distributed systems and enterprise apps",
    body: "Built a microservices food delivery platform (gRPC, Kafka, Docker) and a hospital management system for university modules.",
  },
  {
    when: "Ongoing",
    title: "Hardware experiments",
    body: "ESP32 controllers and sensors, including a YPVS controller with RPM sensing, documented with code and circuit diagrams on GitHub.",
  },
];
