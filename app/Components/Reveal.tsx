"use client";

import type { ReactNode } from "react";
import { m } from "framer-motion";

type Props = {
  children: ReactNode;
  delay?: number;
  x?: number;
  y?: number;
  className?: string;
};

/** Fades, rises and un-blurs its content the first time it scrolls into view. */
export default function Reveal({ children, delay = 0, x = 0, y = 26, className }: Props) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, x, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.85, ease: [0.2, 0.7, 0.2, 1], delay }}
    >
      {children}
    </m.div>
  );
}
