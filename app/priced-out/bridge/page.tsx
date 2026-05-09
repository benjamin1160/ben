import Link from "next/link";

export const metadata = {
  title: "Before the next page — a quick honest read for pre-approved buyers",
  description:
    "A short pre-frame about why most pre-approved Florida buyers ignore manufactured homes — and why the math says they shouldn't.",
};

export default function PricedOutBridge() {
  return (
    <div className="sunset theme-canvas flex flex-1 flex-col">
      <header className="border-b border-border bg-white/90 backdrop-blur">
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
              Florida Home Path
            </span>
          </div>
          <span className="hidden text-xs text-muted sm:block">
            A short note before the next page
          </span>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden bg-slate-50">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_400px_at_20%_-10%,rgba(15,118,110,0.10),transparent),radial-gradient(700px_400px_at_80%_110%,rgba(245,158,11,0.10),transparent)]" />
          <div className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-muted">
              <span className="h-2 w-2 rounded-full bg-brand" />
              Quick read · 90 seconds
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Before you click — read this honestly.
            </h1>
            <p className="mt-5 text-lg text-muted sm:text-xl">
              You&apos;re pre-approved. The bank already said yes. The
              problem isn&apos;t whether you can buy — it&apos;s that the
              house you actually want has a payment that breaks your
              spreadsheet.
            </p>
            <p className="mt-4 text-lg text-muted sm:text-xl">
              The next page is about a path most pre-approved buyers
              dismiss in three seconds. Here&apos;s why three seconds is the
              wrong amount of time to spend on it.
            </p>
          </div>
        </section>

        <section className="border-t border-border bg-white">
          <div className="mx-auto max-w-3xl px-5 py-14">
            <ol className="space-y-6">
              <Reframe
                num="01"
                title="It&apos;s not what you think it is."
                body="When most pre-approved buyers hear &ldquo;manufactured home&rdquo; they picture a 1980s singlewide in a lot-rental park. That&rsquo;s not what we work with. Modern HUD-code, hurricane-rated, three bed two bath, on owned land or in resident-owned communities. Indistinguishable from a small ranch from the curb."
              />
              <Reframe
                num="02"
                title="The trade-off is real, and we&apos;re going to tell you about it."
                body="Manufactured appreciates slower than site-built — three to four percent a year instead of six or seven. We&rsquo;re not going to pretend otherwise. The trade-off is that you actually own one this year, build equity, and have something to roll into a site-built place in five to seven years if you still want it."
              />
              <Reframe
                num="03"
                title="The all-in payment is the headline."
                body="$385K site-built FL home → about $2,800/mo all in. $89K manufactured → about $702/mo all in. Same household, same county. The next page shows you what your number would actually be."
              />
            </ol>
          </div>
        </section>

        <section className="border-t border-border bg-surface">
          <div className="mx-auto max-w-3xl px-5 py-14">
            <div className="rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                Two things to keep in mind
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                The next page isn&apos;t for everyone — and that&apos;s on
                purpose.
              </h2>
              <ul className="mt-6 space-y-4 text-base text-slate-700">
                <li className="flex items-start gap-3">
                  <Dot />
                  <span>
                    <strong className="text-slate-900">
                      If you only want a site-built home and nothing else
                      will do,
                    </strong>{" "}
                    this isn&apos;t that. Close the tab — no harm done. We
                    don&apos;t convert anyone with pressure.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Dot />
                  <span>
                    <strong className="text-slate-900">
                      If you&apos;re willing to look at the math without
                      flinching,
                    </strong>{" "}
                    this is the path most pre-approved Florida buyers
                    actually use to stop renting and stop stretching — five
                    to seven years before the site-built market becomes
                    realistic again.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-white">
          <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-20">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready? Here&apos;s the page.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
              Five minutes to read. If the math doesn&apos;t work for you,
              close the tab — no email, no follow-up.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <Link
                href="/priced-out/hybrid"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-7 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-brand-strong"
              >
                Show me the next page
                <span
                  aria-hidden
                  className="transition group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
              <p className="text-xs text-muted">
                Opens on this site · No credit pull · No obligation
              </p>
            </div>

            <p className="mx-auto mt-12 max-w-xl text-left text-sm italic text-slate-600">
              <span className="font-semibold not-italic text-slate-900">
                P.S.
              </span>{" "}
              The single biggest reason pre-approved buyers stay stuck
              isn&apos;t pride — it&apos;s that nobody ever sat them down
              with the actual numbers. The next page is just those numbers,
              put plainly.
            </p>
          </div>
        </section>

        <footer className="border-t border-border bg-white">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-8 text-xs text-muted sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Florida Home Path</p>
            <div className="flex items-center gap-4">
              <p className="max-w-xl">
                Payment examples are illustrative and depend on credit,
                location, and home choice. Equal housing opportunity.
              </p>
              <Link href="/" className="hover:text-slate-900">
                All pages
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Reframe({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) {
  return (
    <li className="grid gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm sm:grid-cols-[64px_1fr] sm:p-7">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 font-mono text-sm font-semibold text-brand-strong">
        {num}
      </div>
      <div>
        <h3
          className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          className="mt-2 text-base leading-relaxed text-slate-700"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </li>
  );
}

function Dot() {
  return (
    <span
      aria-hidden
      className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand"
    />
  );
}
