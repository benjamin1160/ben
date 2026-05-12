import Link from "next/link";
import { ShellFooter, ShellHeader } from "./Shell";
import type { ScenarioBrand, ThankYouCopy } from "./types";

export default function ThankYouPage({
  brand,
  copy,
}: {
  brand: ScenarioBrand;
  copy: ThankYouCopy;
}) {
  return (
    <div className="sunset theme-canvas flex flex-1 flex-col">
      <ShellHeader brand={brand} rightLabel={copy.headerRight} />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-slate-50">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_400px_at_20%_-10%,rgba(15,118,110,0.12),transparent),radial-gradient(700px_400px_at_80%_110%,rgba(245,158,11,0.10),transparent)]" />
          <div className="mx-auto max-w-3xl px-5 py-14 text-center sm:py-20">
            <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-muted">
              <span className="h-2 w-2 rounded-full bg-brand" />
              {copy.badge}
            </span>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {copy.headline}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted sm:text-xl">
              {copy.subhead}
            </p>
          </div>
        </section>

        <section className="border-t border-border bg-white">
          <div className="mx-auto max-w-3xl px-5 py-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">
              {copy.timelineEyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              {copy.timelineHeadline}
            </h2>

            <ol className="mt-8 space-y-6">
              {copy.steps.map((s) => (
                <li
                  key={s.num}
                  className="grid gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm sm:grid-cols-[64px_1fr] sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 font-mono text-sm font-semibold text-brand-strong">
                    {s.num}
                  </div>
                  <div>
                    <p
                      className="text-[11px] font-semibold uppercase tracking-wider text-muted"
                      dangerouslySetInnerHTML={{ __html: s.when }}
                    />
                    <h3 className="mt-1 text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
                      {s.title}
                    </h3>
                    <p
                      className="mt-2 text-base leading-relaxed text-slate-700"
                      dangerouslySetInnerHTML={{ __html: s.body }}
                    />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-border bg-surface">
          <div className="mx-auto max-w-3xl px-5 py-14">
            <div className="rounded-3xl border border-brand/30 bg-white p-6 shadow-sm sm:p-10">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand-strong">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Optional · Skip the wait
              </span>
              <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                {copy.bookingHeadline}
              </h2>
              <p className="mt-3 text-base text-muted">{copy.bookingBody}</p>
              <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Link
                  href={copy.bookingCtaHref}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-strong"
                >
                  {copy.bookingCta}
                  <span
                    aria-hidden
                    className="transition group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </Link>
                <p className="text-xs text-muted">{copy.bookingCtaSub}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-white">
          <div className="mx-auto max-w-3xl px-5 py-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">
              {copy.actionsEyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              {copy.actionsHeadline}
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {copy.actions.map((a) => (
                <div
                  key={a.num}
                  className="rounded-2xl border border-border bg-surface p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
                      {a.num}
                    </span>
                    <h3 className="text-base font-semibold tracking-tight text-slate-900">
                      {a.title}
                    </h3>
                  </div>
                  <p
                    className="mt-3 text-sm leading-relaxed text-slate-700"
                    dangerouslySetInnerHTML={{ __html: a.body }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-slate-900 text-white">
          <div className="mx-auto max-w-3xl px-5 py-14 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {copy.readMoreHeadline}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-slate-300">
              {copy.readMoreBody}
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href={copy.readMorePrimaryHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                {copy.readMorePrimary}
                <span aria-hidden>→</span>
              </Link>
              <Link
                href={copy.readMoreSecondaryHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-transparent px-6 py-3 text-base font-semibold text-white transition hover:border-white/50"
              >
                {copy.readMoreSecondary}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>

        <ShellFooter brand={brand} styleSlug="thank-you" />
      </main>
    </div>
  );
}
