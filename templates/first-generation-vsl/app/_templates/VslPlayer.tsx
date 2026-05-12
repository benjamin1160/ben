"use client";

import { useEffect, useState } from "react";
import type { VslBeat } from "./types";

export default function VslPlayer({
  title,
  subtitle,
  runtime,
  beats,
}: {
  title: string;
  subtitle: string;
  runtime: string;
  beats: VslBeat[];
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Play video — opens the full script as a transcript"
        className="group relative block w-full overflow-hidden rounded-3xl border border-border bg-slate-900 shadow-lg transition hover:shadow-xl"
      >
        <div
          className="relative aspect-video w-full"
          style={{
            background:
              "radial-gradient(1200px 600px at 30% 10%, rgba(15,118,110,0.55), transparent 60%), radial-gradient(900px 500px at 80% 90%, rgba(245,158,11,0.35), transparent 60%), linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f766e 100%)",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(1px_1px_at_25%_30%,rgba(255,255,255,0.18)_50%,transparent_51%),radial-gradient(1px_1px_at_70%_60%,rgba(255,255,255,0.14)_50%,transparent_51%),radial-gradient(1px_1px_at_50%_80%,rgba(255,255,255,0.12)_50%,transparent_51%)] [background-size:120px_120px]" />

          <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-rose-400" />
            Watch · {runtime}
          </div>

          <div className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
            CC
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-2xl transition group-hover:scale-105 sm:h-24 sm:w-24">
              <span className="absolute inset-0 -z-10 rounded-full bg-white/30 blur-xl" />
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-1 h-9 w-9 sm:h-10 sm:w-10"
                aria-hidden="true"
              >
                <path d="M8 5.5v13l11-6.5z" />
              </svg>
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 sm:p-6">
            <p className="text-left text-lg font-semibold text-white sm:text-xl">
              {title}
            </p>
            <p className="mt-1 text-left text-sm text-white/75">{subtitle}</p>
            <div className="mt-3 flex items-center gap-3">
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/20">
                <div className="h-full w-[6%] rounded-full bg-white" />
              </div>
              <span className="text-[11px] font-medium text-white/70">
                0:18 / {runtime}
              </span>
            </div>
          </div>
        </div>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="vsl-script-title"
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-brand">
                  Full transcript · {runtime}
                </p>
                <h3
                  id="vsl-script-title"
                  className="mt-0.5 text-lg font-bold tracking-tight text-slate-900"
                >
                  {title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close transcript"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-slate-600 transition hover:bg-surface hover:text-slate-900"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-6 sm:px-8">
              <ol className="space-y-7">
                {beats.map((b) => (
                  <li key={b.time} className="grid gap-3 sm:grid-cols-[88px_1fr]">
                    <div>
                      <p className="font-mono text-sm font-semibold text-brand-strong">
                        {b.time}
                      </p>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted">
                        {b.label}
                      </p>
                    </div>
                    <div className="space-y-3 text-base leading-relaxed text-slate-800">
                      {b.lines.map((line, idx) => (
                        <p key={idx} dangerouslySetInnerHTML={{ __html: line }} />
                      ))}
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border-t border-border bg-surface px-6 py-4 text-xs text-muted sm:px-8">
              Press{" "}
              <kbd className="rounded border border-border bg-white px-1.5 py-0.5 font-mono">
                Esc
              </kbd>{" "}
              to close · Tap outside to dismiss
            </div>
          </div>
        </div>
      )}
    </>
  );
}
