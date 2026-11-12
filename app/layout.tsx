import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "@fontsource-variable/source-serif-4/wght.css";
import "./globals.css";
import { LINKS, SITE } from "./data/content";
import Cursor from "./Components/Cursor";
import Providers from "./Components/Providers";
import Shell from "./Components/Shell";
import Splash from "./Components/Splash";

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
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
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
const themeScript = `try{document.documentElement.classList.toggle("dark",localStorage.getItem("theme")==="dark")}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-onbrand"
        >
          Skip to content
        </a>
        <Splash />
        <Cursor />
        <Providers>
          <Shell>{children}</Shell>
        </Providers>
      </body>
    </html>
  );
}
