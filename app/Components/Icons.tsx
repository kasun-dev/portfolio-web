import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const stroke = (p: P) => ({
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...p,
});

export const GitHubIcon = (p: P) => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export const LinkedInIcon = (p: P) => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export const MailIcon = (p: P) => (
  <svg {...stroke(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const SunIcon = (p: P) => (
  <svg {...stroke(p)}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

export const MoonIcon = (p: P) => (
  <svg {...stroke(p)}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

export const MenuIcon = (p: P) => (
  <svg {...stroke(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (p: P) => (
  <svg {...stroke(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const ArrowUpRightIcon = (p: P) => (
  <svg {...stroke({ width: 16, height: 16, ...p })}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const ArrowDownIcon = (p: P) => (
  <svg {...stroke({ width: 16, height: 16, ...p })}>
    <path d="M12 5v14M5 12l7 7 7-7" />
  </svg>
);

export const CopyIcon = (p: P) => (
  <svg {...stroke({ width: 16, height: 16, ...p })}>
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M5 15V6a2 2 0 0 1 2-2h9" />
  </svg>
);

export const CheckIcon = (p: P) => (
  <svg {...stroke({ width: 16, height: 16, ...p })}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const SearchIcon = (p: P) => (
  <svg {...stroke({ width: 18, height: 18, ...p })}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-4-4" />
  </svg>
);

export const HomeIcon = (p: P) => (
  <svg {...stroke(p)}>
    <path d="M4 11 12 4l8 7v8a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z" />
  </svg>
);

export const UserIcon = (p: P) => (
  <svg {...stroke(p)}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" />
  </svg>
);

export const TagIcon = (p: P) => (
  <svg {...stroke(p)}>
    <path d="M3 12V4h8l10 10-8 8z" />
    <circle cx="7.5" cy="8.5" r="1" />
  </svg>
);

export const StoriesIcon = (p: P) => (
  <svg {...stroke(p)}>
    <path d="M6 3h9l4 4v14H6z" />
    <path d="M14 3v5h5M9 13h7M9 17h7" />
  </svg>
);

export const RouteIcon = (p: P) => (
  <svg {...stroke(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const BookmarkIcon = (p: P) => (
  <svg {...stroke(p)}>
    <path d="M6 3h12v18l-6-4-6 4z" />
  </svg>
);

export const PenIcon = (p: P) => (
  <svg {...stroke(p)}>
    <path d="M4 20l1-4L16 5l3 3L8 19z" />
    <path d="m14 7 3 3" />
  </svg>
);

/** Minimal line icons for the places I am elsewhere. */
export const BranchIcon = (p: P) => (
  <svg {...stroke({ width: 18, height: 18, ...p })}>
    <circle cx="6" cy="5.5" r="2.2" />
    <circle cx="6" cy="18.5" r="2.2" />
    <circle cx="18" cy="8.5" r="2.2" />
    <path d="M6 7.7v8.6M18 10.7c0 4-6 3-11 6.2" />
  </svg>
);
export const InIcon = (p: P) => (
  <svg {...stroke({ width: 18, height: 18, ...p })}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
    <path d="M8 10.5V16M8 7.8v.01M12 16v-5.5M12 13c0-1.6 1-2.6 2.4-2.6s2.1 1 2.1 2.6V16" />
  </svg>
);
export const BookIcon = (p: P) => (
  <svg {...stroke({ width: 18, height: 18, ...p })}>
    <path d="M12 6.5C10 5 7 4.5 4 5v13c3-.5 6 0 8 1.5M12 6.5c2-1.5 5-2 8-1.5v13c-3-.5-6 0-8 1.5M12 6.5v13" />
  </svg>
);
export const CameraIcon = (p: P) => (
  <svg {...stroke({ width: 18, height: 18, ...p })}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="3.8" />
    <path d="M17.3 6.8v.01" />
  </svg>
);
export const ChatIcon = (p: P) => (
  <svg {...stroke({ width: 18, height: 18, ...p })}>
    <path d="M4 20l1.2-4.1A8 8 0 1 1 8.2 19z" />
    <path d="M9 9.5c.3 2.4 2.1 4.2 4.5 4.5l1.2-1.2-1.8-1-.8.7a3 3 0 0 1-1.6-1.6l.7-.8-1-1.8z" />
  </svg>
);

/** One small icon per project type, used in place of a photo. */
const TYPE_PATHS: Record<string, string> = {
  IoT: "M9 9h6v6H9zM9 4v3M15 4v3M9 17v3M15 17v3M4 9h3M4 15h3M17 9h3M17 15h3",
  Fullstack: "m12 3 9 5-9 5-9-5zM3 13l9 5 9-5",
  Frontend: "M3.5 5h17v14h-17zM3.5 9.5h17M7 7.2v.01",
  Backend: "M4 5h16v5H4zM4 14h16v5H4zM8 7.5v.01M8 16.5v.01",
  Mobile: "M7 3h10v18H7zM11 18h2",
  Desktop: "M3 5h18v12H3zM9 21h6M12 17v4",
  Tool: "M14.5 6.5a4 4 0 0 0-5 5L4 17l3 3 5.5-5.5a4 4 0 0 0 5-5l-2.5 2.5-2-.5-.5-2z",
};
export function TypeIcon({ type, ...p }: P & { type: string }) {
  return (
    <svg {...stroke({ width: 18, height: 18, ...p })}>
      <path d={TYPE_PATHS[type] ?? TYPE_PATHS.Tool} />
    </svg>
  );
}
