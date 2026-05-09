import QualifyForm from "../QualifyForm";
import VslPlayer from "./VslPlayer";
import { Check, ShellFooter, ShellHeader } from "./Shell";
import type { ScenarioBrand, VslCopy } from "./types";

export default function VslPage({
  brand,
  copy,
}: {
  brand: ScenarioBrand;
  copy: VslCopy;
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
        <section className="relative overflow-hidden bg-slate-50">
          <div className="mx-auto max-w-4xl px-5 py-12 sm:py-16">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-muted">
                <span className="h-2 w-2 rounded-full bg-brand" />
                {copy.badge}
              </span>
              <h1
                className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl"
                dangerouslySetInnerHTML={{ __html: copy.headline }}
              />
              <p
                className="mx-auto mt-4 max-w-2xl text-lg text-muted sm:text-xl"
                dangerouslySetInnerHTML={{ __html: copy.subhead }}
              />
            </div>

            <div className="relative mx-auto mt-10 max-w-3xl">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/10 via-emerald-100/60 to-amber-100/40 blur-2xl" />
              <VslPlayer
                title={copy.videoTitle}
                subtitle={copy.videoSubtitle}
                runtime={copy.script.runtime}
                beats={copy.script.beats}
              />
              <p className="mt-3 text-center text-xs text-muted">
                {copy.videoCaption}
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-2xl gap-3 text-sm sm:grid-cols-3">
              {copy.trust.map((t) => (
                <div
                  key={t}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-white px-4 py-3 text-slate-700 shadow-sm"
                >
                  <Check />
                  <span className="font-medium">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-white">
          <div className="mx-auto max-w-4xl px-5 py-14">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                {copy.beatsEyebrow}
              </span>
              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                {copy.beatsHeadline}
              </h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {copy.educationalBeats.map((b) => (
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

        <section
          id="qualify"
          className="scroll-mt-20 border-t border-border bg-surface"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-16 md:grid-cols-5 md:py-20">
            <div className="md:col-span-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                {copy.qualifier.eyebrow}
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {copy.qualifier.headline}
              </h2>
              <p className="mt-4 text-lg text-muted">{copy.qualifier.body}</p>
              <ul className="mt-6 space-y-3 text-base text-slate-700">
                {copy.qualifier.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Check />
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

        <ShellFooter brand={brand} />
      </main>
    </div>
  );
}
