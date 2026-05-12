import Link from "next/link";
import QualifyForm from "../QualifyForm";
import { Avatar, ShellFooter, ShellHeader } from "./Shell";
import type { HybridCopy, ScenarioBrand } from "./types";

export default function HybridPage({
  brand,
  copy,
}: {
  brand: ScenarioBrand;
  copy: HybridCopy;
}) {
  return (
    <div className="sunset theme-canvas flex flex-1 flex-col">
      <ShellHeader
        brand={brand}
        rightCta={copy.headerCta}
        rightCtaHref="#qualify"
        sticky
      />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
            <div className="flex flex-col justify-center">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
                <span className="h-2 w-2 rounded-full bg-brand" />
                {copy.badge}
              </span>
              <h1
                className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
                dangerouslySetInnerHTML={{ __html: copy.headline }}
              />
              <p
                className="mt-5 max-w-xl text-lg text-muted sm:text-xl"
                dangerouslySetInnerHTML={{ __html: copy.subhead }}
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#qualify"
                  className="inline-flex items-center justify-center rounded-xl bg-brand px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-brand-strong"
                >
                  {copy.primaryCta}
                </Link>
                <Link
                  href="#proof"
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-white px-6 py-4 text-base font-semibold text-slate-900 transition hover:border-brand/50"
                >
                  {copy.secondaryCta}
                </Link>
              </div>
              <p className="mt-4 text-sm text-muted">{copy.microFootnote}</p>
            </div>

            <div className="relative">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/10 via-emerald-100/60 to-amber-100/40 blur-2xl" />
                <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted">
                        {copy.heroCard.eyebrow}
                      </p>
                      <p className="mt-1 text-3xl font-bold tracking-tight">
                        {copy.heroCard.bigStat}
                        <span className="ml-1 text-base font-medium text-muted">
                          {copy.heroCard.bigStatSecondary}
                        </span>
                      </p>
                    </div>
                    <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand-strong">
                      {copy.heroCard.chip}
                    </span>
                  </div>
                  <div className="mt-5 space-y-3 text-sm">
                    {copy.heroCard.rows.map((r) => (
                      <div
                        key={r.label}
                        className="flex items-center justify-between border-b border-border pb-2 last:border-0 last:pb-0"
                      >
                        <span className="text-muted">{r.label}</span>
                        <span className="font-semibold text-slate-900">
                          {r.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-xl bg-surface p-4 text-sm text-slate-700">
                    <span dangerouslySetInnerHTML={{ __html: copy.heroCard.microline }} />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-border bg-white p-4">
                  <div className="flex -space-x-2">
                    <Avatar color="#0f766e" />
                    <Avatar color="#0d9488" />
                    <Avatar color="#f59e0b" />
                  </div>
                  <p className="text-sm text-muted">{copy.heroCard.avatarsLine}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PAIN STATS */}
        <section className="border-t border-border bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                {copy.painEyebrow}
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {copy.painHeadline}
              </h2>
              <p className="mt-4 text-lg text-muted">{copy.painSubhead}</p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {copy.painStats.map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-border bg-white p-6 shadow-sm"
                >
                  <p className="text-3xl font-bold tracking-tight text-brand-strong">
                    {s.stat}
                  </p>
                  <p
                    className="mt-2 text-sm text-slate-700"
                    dangerouslySetInnerHTML={{ __html: s.label }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PIVOT */}
        <section className="border-t border-border bg-white">
          <div className="mx-auto max-w-4xl px-5 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                {copy.pivotEyebrow}
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {copy.pivotHeadline}
              </h2>
            </div>
            <ul className="mt-10 space-y-4 text-base">
              {copy.pivotOptions.map((o) => (
                <li
                  key={o.title}
                  className={`flex gap-4 rounded-2xl border p-5 ${
                    o.bad
                      ? "border-rose-200 bg-rose-50/50"
                      : "border-brand/30 bg-brand/5"
                  }`}
                >
                  <span
                    className={`mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full text-xs font-bold ${
                      o.bad
                        ? "bg-rose-100 text-rose-700"
                        : "bg-brand text-white"
                    }`}
                  >
                    {o.bad ? "×" : "✓"}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                      {o.title}
                    </h3>
                    <p
                      className="mt-1 text-base leading-relaxed text-slate-700"
                      dangerouslySetInnerHTML={{ __html: o.body }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* EMOTIONAL */}
        <section className="border-t border-border bg-slate-900 text-white">
          <div className="mx-auto max-w-4xl px-5 py-20 text-center">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-5xl"
              dangerouslySetInnerHTML={{ __html: copy.emotionalHeadline }}
            />
            <p
              className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl"
              dangerouslySetInnerHTML={{ __html: copy.emotionalBody }}
            />
            <p className="mt-6 text-lg font-medium text-white">
              {copy.emotionalKicker}
            </p>
          </div>
        </section>

        {/* PATH */}
        <section className="border-t border-border bg-white">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                {copy.pathEyebrow}
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {copy.pathHeadline}
              </h2>
              <p className="mt-4 text-lg text-muted">{copy.pathSubhead}</p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {copy.benefits.map((b) => (
                <div
                  key={b.num}
                  className="rounded-2xl border border-border bg-white p-6 shadow-sm"
                >
                  <p className="font-mono text-xs font-semibold text-brand-strong">
                    {b.num}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-base text-muted">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROOF / NUMBERS */}
        <section id="proof" className="scroll-mt-20 border-t border-border bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                {copy.numbersEyebrow}
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {copy.numbersHeadline}
              </h2>
              <p className="mt-4 text-lg text-muted">{copy.numbersSubhead}</p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {copy.priceCards.map((c) => (
                <div
                  key={c.tag}
                  className={`rounded-3xl border bg-white p-6 shadow-sm ${
                    c.highlight
                      ? "border-brand ring-2 ring-brand/20"
                      : "border-border"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-strong">
                      {c.tag}
                    </span>
                  </div>
                  <p className="mt-4 text-3xl font-bold tracking-tight">{c.price}</p>
                  <p className="text-sm text-muted">
                    Approx. {c.payment}/mo all-in
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-700">
                    {c.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {copy.stories.map((s) => (
                <div
                  key={s.name}
                  className="rounded-2xl border border-border bg-white p-6 shadow-sm"
                >
                  <p className="text-base italic text-slate-700">
                    “<span dangerouslySetInnerHTML={{ __html: s.quote }} />”
                  </p>
                  <p className="mt-4 text-sm font-semibold text-slate-900">
                    {s.name}
                  </p>
                  <p className="text-xs text-muted">{s.place}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUALIFIER */}
        <section
          id="qualify"
          className="scroll-mt-20 border-t border-border bg-white"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-16 md:grid-cols-5 md:py-20">
            <div className="md:col-span-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                {copy.qualifierEyebrow}
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {copy.qualifierHeadline}
              </h2>
              <p className="mt-4 text-lg text-muted">{copy.qualifierBody}</p>
              <ul className="mt-6 space-y-3 text-base text-slate-700">
                {copy.qualifierBullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand" />
                    <span dangerouslySetInnerHTML={{ __html: b }} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-3">
              <QualifyForm />
            </div>
          </div>
        </section>

        <ShellFooter brand={brand} styleSlug="hybrid" />
      </main>
    </div>
  );
}
