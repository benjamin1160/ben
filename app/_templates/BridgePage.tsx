import Link from "next/link";
import { Dot, ShellFooter, ShellHeader } from "./Shell";
import type { BridgeCopy, ScenarioBrand } from "./types";

export default function BridgePage({
  brand,
  copy,
}: {
  brand: ScenarioBrand;
  copy: BridgeCopy;
}) {
  return (
    <div className="sunset theme-canvas flex flex-1 flex-col">
      <ShellHeader brand={brand} rightLabel={copy.headerRight} />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-slate-50">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_400px_at_20%_-10%,rgba(15,118,110,0.10),transparent),radial-gradient(700px_400px_at_80%_110%,rgba(245,158,11,0.10),transparent)]" />
          <div className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-muted">
              <span className="h-2 w-2 rounded-full bg-brand" />
              {copy.badge}
            </span>
            <h1
              className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
              dangerouslySetInnerHTML={{ __html: copy.headline }}
            />
            {copy.leadParas.map((p, i) => (
              <p
                key={i}
                className="mt-5 text-lg text-muted sm:text-xl"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-white">
          <div className="mx-auto max-w-3xl px-5 py-14">
            <ol className="space-y-6">
              {copy.reframes.map((r) => (
                <li
                  key={r.num}
                  className="grid gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm sm:grid-cols-[64px_1fr] sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 font-mono text-sm font-semibold text-brand-strong">
                    {r.num}
                  </div>
                  <div>
                    <h3
                      className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl"
                      dangerouslySetInnerHTML={{ __html: r.title }}
                    />
                    <p
                      className="mt-2 text-base leading-relaxed text-slate-700"
                      dangerouslySetInnerHTML={{ __html: r.body }}
                    />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-border bg-surface">
          <div className="mx-auto max-w-3xl px-5 py-14">
            <div className="rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                {copy.caveatsEyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                {copy.caveatsHeadline}
              </h2>
              <ul className="mt-6 space-y-4 text-base text-slate-700">
                {copy.caveats.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Dot />
                    <span>
                      <strong className="text-slate-900">{c.strong}</strong>{" "}
                      <span dangerouslySetInnerHTML={{ __html: c.body }} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-white">
          <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-20">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {copy.finalHeadline}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
              {copy.finalSubhead}
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <Link
                href={copy.finalCtaHref}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-7 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-brand-strong"
              >
                {copy.finalCta}
                <span aria-hidden className="transition group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
              <p className="text-xs text-muted">{copy.finalCtaSub}</p>
            </div>

            <p className="mx-auto mt-12 max-w-xl text-left text-sm italic text-slate-600">
              <span className="font-semibold not-italic text-slate-900">P.S.</span>{" "}
              <span dangerouslySetInnerHTML={{ __html: copy.ps }} />
            </p>
          </div>
        </section>

        <ShellFooter brand={brand} />
      </main>
    </div>
  );
}
