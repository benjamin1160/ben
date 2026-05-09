import Link from "next/link";

export const metadata = {
  title: "Before you go any further — read this",
  description:
    "A short pre-frame for Florida renters about what's actually on the next page, and why it's different from what you've probably seen before.",
};

export default function SickOfRentingBridge() {
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
              Wait — before you click the next page.
            </h1>
            <p className="mt-5 text-lg text-muted sm:text-xl">
              If you&apos;re a Florida renter and you clicked the ad about
              owning instead of renting, you&apos;re probably bracing for one
              of two things: a high-pressure pitch, or a credit-pull bait and
              switch.
            </p>
            <p className="mt-4 text-lg text-muted sm:text-xl">
              That&apos;s not what&apos;s on the next page. Here&apos;s what
              actually is.
            </p>
          </div>
        </section>

        <section className="border-t border-border bg-white">
          <div className="mx-auto max-w-3xl px-5 py-14">
            <ol className="space-y-6">
              <Reframe
                num="01"
                title="Real Florida homes between $50K and $150K."
                body="Not a teaser ad. Not a price that disappears when you call. Modern manufactured homes on owned land or in resident-owned communities. Three bed, two bath, real square footage."
              />
              <Reframe
                num="02"
                title="A monthly payment that&apos;s usually less than your rent."
                body="The math has shocked most of our buyers. Sample: $89,500 home, 5% down, 20-year fixed → about $702/mo all-in. Less than half what most of them were paying to a landlord."
              />
              <Reframe
                num="03"
                title="No credit pull on this site. Ever."
                body="The next page asks four short questions and your name and number. Then a real human (a licensed Florida ownership specialist — not a call center) calls you within one business day to tell you, honestly, if it's realistic for you in the next 60–120 days."
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
                      If you need to be in something next week,
                    </strong>{" "}
                    this isn&apos;t that. Closes typically run 60–120 days
                    from first call to keys.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Dot />
                  <span>
                    <strong className="text-slate-900">
                      If you&apos;re willing to plan a season ahead,
                    </strong>{" "}
                    this is the path most Florida renters in the 580–680
                    credit band actually use to stop renting. Quietly.
                    Without anyone selling them anything aggressive.
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
              Take five minutes to read it. If it&apos;s not a fit, close the
              tab — no email, no follow-up, no harm done.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <Link
                href="/sick-of-renting/hybrid"
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
              The single biggest reason renters in Florida stay renters
              isn&apos;t money or credit. It&apos;s never being told that
              ownership is on the menu for them. The next page is just that
              menu. Read it, then decide.
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
              <a
                href="https://github.com/benjamin1160/ben/tree/main/app/sick-of-renting/bridge"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-slate-700 underline-offset-2 hover:text-slate-900 hover:underline"
              >
                Grab this template ↗
              </a>
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
        <p className="mt-2 text-base leading-relaxed text-slate-700">{body}</p>
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
