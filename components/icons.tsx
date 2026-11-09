type P = React.SVGProps<SVGSVGElement>;
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const ArrowUpRight = (p: P) => (
  <svg width="12" height="12" viewBox="0 0 24 24" {...base} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const Chevron = ({ up, ...p }: P & { up?: boolean }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    {...base}
    {...p}
    style={{ transform: up ? "rotate(180deg)" : undefined, transition: "transform .2s" }}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const CodeIcon = (p: P) => (
  <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...p}>
    <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
  </svg>
);

export const MailIcon = (p: P) => (
  <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const AtIcon = (p: P) => (
  <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
  </svg>
);
