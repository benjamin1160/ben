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

const REPO = "benjamin1160/ben";

function templateFileName(styleSlug: string) {
  return (
    styleSlug
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("") + "Page.tsx"
  );
}

function sourcePath(styleSlug: string) {
  // The per-scenario page.tsx is just a thin wrapper that binds copy + brand
  // to the shared layout in /app/_templates/<Style>Page.tsx. Link straight to
  // that layout file — the wrapper folder is one trivial re-export and used
  // to render as a near-empty GitHub page.
  return `https://github.com/${REPO}/blob/main/app/_templates/${templateFileName(styleSlug)}`;
}

export function ShellFooter({
  brand,
  styleSlug,
}: {
  brand: ScenarioBrand;
  styleSlug?: string;
}) {
  const grabHref = styleSlug ? sourcePath(styleSlug) : null;
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-8 text-xs text-muted sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {brand.footerCopyright}
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="max-w-xl">{brand.disclosure}</p>
          {grabHref ? (
            <a
              href={grabHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-slate-700 underline-offset-2 hover:text-slate-900 hover:underline"
            >
              <GitHubMark />
              Grab this template
              <span aria-hidden>→</span>
            </a>
          ) : null}
          <Link href="/" className="hover:text-slate-900">
            All pages
          </Link>
        </div>
      </div>
    </footer>
  );
}

function GitHubMark() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="h-3.5 w-3.5"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"
      />
    </svg>
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
