import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "@fontsource-variable/fraunces/wght.css";
import "./globals.css";
import { LINKS, SITE } from "./data/content";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import PortraitBackdrop from "./Components/PortraitBackdrop";
import Providers from "./Components/Providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const title = `${SITE.name} | ${SITE.role}`;
const ogImage = `${SITE.url}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title,
  description: SITE.description,
  authors: [{ name: SITE.name, url: SITE.url }],
  keywords: [
    "Kasun Jayamaha",
    "software engineer",
    "full-stack developer",
    "React",
    "Next.js",
    "NestJS",
    "AWS",
    "Docker",
    "ESP32",
    "IoT",
    "Sri Lanka",
    "SLIIT",
  ],
  alternates: { canonical: SITE.url },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title,
    description: SITE.description,
    images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: SITE.description,
    images: [ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#101218" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: SITE.role,
  url: SITE.url,
  image: ogImage,
  email: `mailto:${SITE.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressCountry: "LK",
  },
  worksFor: { "@type": "Organization", name: SITE.company },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Sri Lanka Institute of Information Technology",
  },
  knowsAbout: ["Web development", "Cloud computing", "Microservices", "Internet of Things"],
  sameAs: [LINKS.github, LINKS.linkedin, LINKS.medium, LINKS.instagram],
};

// Runs before first paint so the page never flashes the wrong theme.
const themeScript = `try{var t=localStorage.getItem("theme");if(!t){t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.classList.toggle("dark",t==="dark")}catch(e){document.documentElement.classList.add("dark")}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-[#101218]"
        >
          Skip to content
        </a>
        <Providers>
          <PortraitBackdrop />
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
