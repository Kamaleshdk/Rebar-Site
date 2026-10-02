/** Subtle blueprint grid overlay used behind hero/dark sections. Decorative only. */
export function TechnicalGrid({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id="tgrid" width="56" height="56" patternUnits="userSpaceOnUse">
          <path d="M 56 0 L 0 0 0 56" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        </pattern>
        <pattern id="tgrid-major" width="224" height="224" patternUnits="userSpaceOnUse">
          <path d="M 224 0 L 0 0 0 224" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.9" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#tgrid)" />
      <rect width="100%" height="100%" fill="url(#tgrid-major)" />
    </svg>
  )
}
