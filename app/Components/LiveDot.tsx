/** A small green status dot with a slow pulse, for "happening now" lines. */
export default function LiveDot({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`live-dot ${className}`} />;
}
