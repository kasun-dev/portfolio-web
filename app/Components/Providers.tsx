"use client";

import type { ReactNode } from "react";
import { LazyMotion, MotionConfig } from "framer-motion";

const features = () => import("./motionFeatures").then((mod) => mod.default);

/** One place for animation setup: features load after first paint, and the
 *  visitor's reduced-motion setting is honoured everywhere. */
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={features} strict>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
}
