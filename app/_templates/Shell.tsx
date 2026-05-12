import Link from "next/link";
import type { ScenarioBrand } from "./types";

export function ShellHeader({
  brand,
  rightLabel,
  rightCta,
  rightCtaHref,
  sticky = false,
}: {
  brand: ScenarioBrand;
  rightLabel?: string;
  rightCta?: string;
  rightCtaHref?: string;
  sticky?: boolean;
}) {
  return (
    <header
      className={`${sticky ? "sticky top-0 z-40" : ""} border-b border-border bg-white/90 backdrop-blur`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand text-white">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M3 11.5 12 4l9 7.5" />
              <path d="M5 10v10h14V10" />
            </svg>
          </span>
          <span className="text-sm font-semibold tracking-tight">
            {brand.name}
          </span>
        </div>
        {rightCta && rightCtaHref ? (
          <Link
            href={rightCtaHref}
            className="inline-flex items-center justify-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-strong"
          >
            {rightCta}
          </Link>
        ) : rightLabel ? (
          <span className="hidden text-xs text-muted sm:block">{rightLabel}</span>
        ) : null}
      </div>
    </header>
  );
}

export function ShellFooter({
  brand,
  styleSlug,
}: {
  brand: ScenarioBrand;
  styleSlug?: string;
}) {
  const grabHref = styleSlug ? `/grab/${brand.scenarioSlug}/${styleSlug}` : null;
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-8 text-xs text-muted sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {brand.footerCopyright}
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="max-w-xl">{brand.disclosure}</p>
          {grabHref ? (
            <Link
              href={grabHref}
              className="inline-flex items-center gap-1 font-medium text-slate-700 underline-offset-2 hover:text-slate-900 hover:underline"
            >
              Grab this template
              <span aria-hidden>→</span>
            </Link>
          ) : null}
          <Link href="/" className="hover:text-slate-900">
            All pages
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function Check() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand/10 text-brand-strong">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-3 w-3"
        aria-hidden="true"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  );
}

export function Avatar({ color }: { color: string }) {
  return (
    <span
      className="inline-block h-8 w-8 rounded-full border-2 border-white"
      style={{ backgroundColor: color }}
      aria-hidden="true"
    />
  );
}

export function Dot() {
  return (
    <span
      aria-hidden
      className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand"
    />
  );
}
