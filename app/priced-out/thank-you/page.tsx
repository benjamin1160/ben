import Link from "next/link";

export const metadata = {
  title: "You're on the list — what happens next",
  description:
    "What to expect now that your priced-out Florida home application is in. A real person calls within one business day.",
};

export default function PricedOutThankYou() {
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
            Application received
          </span>
        </div>
      </header>

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
              Application received
            </span>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Got it. A real human will call you.
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted sm:text-xl">
              Don&apos;t close this tab yet. There are two things you should
              do in the next 60 seconds that will make sure the call actually
              connects.
            </p>
          </div>
        </section>

        <section className="border-t border-border bg-white">
          <div className="mx-auto max-w-3xl px-5 py-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">
              What happens next
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Here&apos;s the timeline.
            </h2>

            <ol className="mt-8 space-y-6">
              <Step
                num="01"
                when="In the next 5 minutes"
                title="A confirmation text + email."
                body="From a 941, 813, 407, or 904 area code (depends on which specialist gets your file). Save it in your contacts as “Florida Home Path” so it doesn't go to spam."
              />
              <Step
                num="02"
                when="Within 1 business day"
                title="A real person calls you."
                body="One licensed Florida ownership specialist — not a call center, not a bot. They'll have read your application before they dial. The call runs about 10–15 minutes."
              />
              <Step
                num="03"
                when="If the math works"
                title="A real shortlist with all-in payments."
                body="Sent the same day. Three to five homes in your county and price band, with the actual monthly cost — taxes, insurance, the works. You decide what to look at next."
              />
              <Step
                num="04"
                when="If the math doesn&apos;t work"
                title="An honest answer + a plan."
                body="If this path isn&rsquo;t the right one for you right now, the specialist tells you straight — and explains what to do instead. That part is free too."
              />
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
                Want to lock in your call time right now?
              </h2>
              <p className="mt-3 text-base text-muted">
                Pick a 15-minute slot on a specialist&apos;s calendar. You
                stay first in line, and you don&apos;t have to wonder when
                the phone&apos;s going to ring.
              </p>
              <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/priced-out/booking"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-strong"
                >
                  Pick a call time
                  <span
                    aria-hidden
                    className="transition group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </Link>
                <p className="text-xs text-muted">
                  Takes 30 seconds · You can reschedule any time
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-white">
          <div className="mx-auto max-w-3xl px-5 py-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">
              Two things to do right now
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              So the call actually connects.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Action
                num="1"
                title="Save us in your contacts."
                body="Add &ldquo;Florida Home Path&rdquo; with a Florida area code. Specialists call from 941, 813, 407, or 904 numbers."
              />
              <Action
                num="2"
                title="Whitelist our email."
                body="Move our welcome email out of Promotions. The shortlist comes by email and you don&rsquo;t want it buried."
              />
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-slate-900 text-white">
          <div className="mx-auto max-w-3xl px-5 py-14 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              While you wait — read the long page.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-slate-300">
              The math, the trade-offs, the catch — laid out straight. Worth
              the five minutes before the call.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/priced-out/hybrid"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Read the long page
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/priced-out/vsl"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-transparent px-6 py-3 text-base font-semibold text-white transition hover:border-white/50"
              >
                Or watch the 5-minute version
                <span aria-hidden>→</span>
              </Link>
            </div>
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
                href="https://github.com/benjamin1160/ben/tree/main/app/priced-out/thank-you"
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

function Step({
  num,
  when,
  title,
  body,
}: {
  num: string;
  when: string;
  title: string;
  body: string;
}) {
  return (
    <li className="grid gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm sm:grid-cols-[64px_1fr] sm:p-7">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 font-mono text-sm font-semibold text-brand-strong">
        {num}
      </div>
      <div>
        <p
          className="text-[11px] font-semibold uppercase tracking-wider text-muted"
          dangerouslySetInnerHTML={{ __html: when }}
        />
        <h3 className="mt-1 text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
          {title}
        </h3>
        <p
          className="mt-2 text-base leading-relaxed text-slate-700"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </li>
  );
}

function Action({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
          {num}
        </span>
        <h3 className="text-base font-semibold tracking-tight text-slate-900">
          {title}
        </h3>
      </div>
      <p
        className="mt-3 text-sm leading-relaxed text-slate-700"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
}
