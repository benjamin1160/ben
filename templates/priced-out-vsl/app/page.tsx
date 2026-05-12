import Link from "next/link";
import QualifyForm from "./QualifyForm";
import PricedOutVslPlayer from "./priced-out/vsl/PricedOutVslPlayer";

export const metadata = {
  title: "Watch: The Pre-Approved Buyer's Honest Out",
  description:
    "A 5-minute walkthrough of why pre-approved Florida buyers are quietly stepping out of the traditional market and into homes that actually fit.",
};

export default function PricedOutVsl() {
  return (
    <div className="sunset theme-canvas flex flex-1 flex-col">
      <header className="sticky top-0 z-40 border-b border-border bg-white/90 backdrop-blur">
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
          <Link
            href="#qualify"
            className="inline-flex items-center justify-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-strong"
          >
            See What Fits
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden bg-slate-50">
          <div className="mx-auto max-w-4xl px-5 py-12 sm:py-16">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-muted">
                <span className="h-2 w-2 rounded-full bg-brand" />
                For pre-approved FL buyers · Real homes $50K–$150K
              </span>
              <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Watch this before you stretch into a $385K mortgage.
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted sm:text-xl">
                A 5-minute walkthrough of why pre-approved Florida buyers are
                quietly stepping out of the traditional market and into homes
                that actually fit — sold honestly, trade-offs included.
              </p>
            </div>

            <div className="relative mx-auto mt-10 max-w-3xl">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/10 via-emerald-100/60 to-amber-100/40 blur-2xl" />
              <PricedOutVslPlayer />
              <p className="mt-3 text-center text-xs text-muted">
                Tap the video to read the full transcript · Sound on recommended
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-2xl gap-3 text-sm sm:grid-cols-3">
              <Trust label="No credit pull" />
              <Trust label="Real human follow-up" />
              <Trust label="Trade-offs explained" />
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-white">
          <div className="mx-auto max-w-4xl px-5 py-14">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                What you&apos;ll learn in 5 minutes
              </span>
              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Three things most pre-approved buyers never get told.
              </h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <Beat
                num="01"
                title="Why your pre-approval letter feels worse, not better"
                body="The number the bank says yes to is the number the market makes brutal. Median FL site-built is $385K and the all-in payment is suffocating even at the buyer's max."
              />
              <Beat
                num="02"
                title="The quiet $50K–$150K Florida inventory"
                body="Modern manufactured homes — HUD-code, hurricane-rated, on owned land or in resident-owned communities. Real ownership, real neighborhood."
              />
              <Beat
                num="03"
                title="The honest trade-off, sold straight"
                body="Manufactured appreciates slower than site-built. You actually own one this year. Equity here in 5–7 years becomes the down payment on the site-built place — if you still want it then."
              />
            </div>
          </div>
        </section>

        <section
          id="qualify"
          className="border-t border-border bg-surface scroll-mt-20"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-16 md:grid-cols-5 md:py-20">
            <div className="md:col-span-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                Next step
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Watched it? Here&apos;s the form.
              </h2>
              <p className="mt-4 text-lg text-muted">
                Answer a few questions and a licensed Florida ownership
                specialist calls you within one business day. One human, not a
                call center. They&apos;ll tell you straight whether this path
                actually fits — or whether to stay where you are.
              </p>
              <ul className="mt-6 space-y-3 text-base text-slate-700">
                <li className="flex items-start gap-3">
                  <Check />
                  Under 60 seconds.
                </li>
                <li className="flex items-start gap-3">
                  <Check />
                  No credit pull. Nothing on your record.
                </li>
                <li className="flex items-start gap-3">
                  <Check />
                  No obligation. If it doesn&apos;t fit, we say so.
                </li>
              </ul>
            </div>
            <div className="md:col-span-3">
              <QualifyForm />
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
              <Link
                href="/grab/priced-out/vsl"
                className="inline-flex items-center gap-1 font-medium text-slate-700 underline-offset-2 hover:text-slate-900 hover:underline"
              >
                Grab this template →
              </Link>
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

function Trust({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-white px-4 py-3 text-slate-700 shadow-sm">
      <Check />
      <span className="font-medium">{label}</span>
    </div>
  );
}

function Beat({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <p className="font-mono text-xs font-semibold text-brand-strong">{num}</p>
      <h3 className="mt-2 text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-base text-muted">{body}</p>
    </div>
  );
}

function Check() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand/10 text-brand-strong">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-3 w-3"
        aria-hidden="true"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  );
}
