import Link from "next/link";
import BookingPicker from "../sick-of-renting/booking/BookingPicker";
import { ShellFooter, ShellHeader } from "./Shell";
import type { BookingCopy, ScenarioBrand } from "./types";

export default function BookingPage({
  brand,
  copy,
}: {
  brand: ScenarioBrand;
  copy: BookingCopy;
}) {
  return (
    <div className="sunset theme-canvas flex flex-1 flex-col">
      <ShellHeader brand={brand} rightLabel={copy.headerRight} />

      <main className="flex-1 bg-slate-50">
        <section className="border-b border-border bg-white">
          <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
              <span className="h-2 w-2 rounded-full bg-brand" />
              {copy.badge}
            </span>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {copy.headline}
            </h1>
            <p className="mt-4 text-lg text-muted sm:text-xl">{copy.subhead}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {copy.trust.map((t) => (
                <div
                  key={t.title}
                  className="rounded-2xl border border-border bg-surface p-4"
                >
                  <p className="text-sm font-semibold tracking-tight text-slate-900">
                    {t.title}
                  </p>
                  <p className="mt-1 text-xs text-muted">{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
            <BookingPicker />
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">
              {copy.coverEyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              {copy.coverHeadline}
            </h2>
            <ol className="mt-8 space-y-4">
              {copy.coverBullets.map((b) => (
                <li
                  key={b.num}
                  className="grid gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm sm:grid-cols-[64px_1fr]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 font-mono text-sm font-semibold text-brand-strong">
                    {b.num}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                      {b.title}
                    </h3>
                    <p
                      className="mt-1 text-base leading-relaxed text-slate-700"
                      dangerouslySetInnerHTML={{ __html: b.body }}
                    />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-border bg-surface">
          <div className="mx-auto max-w-3xl px-5 py-12 text-center">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
              {copy.fallbackHeadline}
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted">
              {copy.fallbackBody}
            </p>
            <div className="mt-5">
              <Link
                href={copy.fallbackCtaHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-brand/50"
              >
                {copy.fallbackCta}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>

        <ShellFooter brand={brand} />
      </main>
    </div>
  );
}
