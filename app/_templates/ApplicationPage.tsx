import Link from "next/link";
import ApplicationForm from "./ApplicationForm";
import { ShellFooter, ShellHeader } from "./Shell";
import type { ApplicationCopy, ScenarioBrand } from "./types";

export default function ApplicationPage({
  brand,
  copy,
}: {
  brand: ScenarioBrand;
  copy: ApplicationCopy;
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
                  <p
                    className="mt-1 text-xs text-muted"
                    dangerouslySetInnerHTML={{ __html: t.body }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
            <ApplicationForm copy={copy.form} />
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-5 py-12 text-center sm:py-16">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {copy.fallbackHeadline}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-muted">
              {copy.fallbackBody}
            </p>
            <div className="mt-6">
              <Link
                href={copy.fallbackCtaHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-brand/50 hover:bg-surface"
              >
                {copy.fallbackCta}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>

        <ShellFooter brand={brand} styleSlug="application" />
      </main>
    </div>
  );
}
