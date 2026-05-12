import type { ScenarioBrand, SqueezeCopy } from "./types";
import { Avatar, Check, ShellFooter, ShellHeader } from "./Shell";
import SqueezeForm from "./SqueezeForm";

export default function SqueezePage({
  brand,
  copy,
}: {
  brand: ScenarioBrand;
  copy: SqueezeCopy;
}) {
  return (
    <div className="sunset theme-canvas flex flex-1 flex-col">
      <ShellHeader brand={brand} rightLabel={copy.headerRight} />

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-12 md:grid-cols-2 md:py-20">
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

              <ul className="mt-8 space-y-3 text-base text-slate-700">
                {copy.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Check />
                    <span dangerouslySetInnerHTML={{ __html: b }} />
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-border bg-white p-4">
                <div className="flex -space-x-2">
                  <Avatar color="#0f766e" />
                  <Avatar color="#0d9488" />
                  <Avatar color="#f59e0b" />
                </div>
                <p className="text-sm text-muted">{copy.avatarsLine}</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/10 via-emerald-100/60 to-amber-100/40 blur-2xl" />
              <SqueezeForm copy={copy} />
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-surface">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-5 py-10 sm:grid-cols-3">
            {copy.proofs.map((p, i) => (
              <div key={i} className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                <p className="text-2xl font-bold tracking-tight text-brand-strong">
                  {p.stat}
                </p>
                <p
                  className="mt-1 text-sm text-slate-700"
                  dangerouslySetInnerHTML={{ __html: p.label }}
                />
              </div>
            ))}
          </div>
        </section>

        <ShellFooter brand={brand} styleSlug="squeeze" />
      </main>
    </div>
  );
}
