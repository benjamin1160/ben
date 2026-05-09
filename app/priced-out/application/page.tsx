import Link from "next/link";
import PricedOutApplicationForm from "./PricedOutApplicationForm";

export const metadata = {
  title: "Florida Home Application — Priced Out of Traditional",
  description:
    "The full application for pre-approved Florida buyers serious about an affordable path. Reviewed by a human, called within one business day. No credit pull.",
};

export default function PricedOutApplication() {
  return (
    <div className="flex flex-1 flex-col bg-white text-slate-900">
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
            Application · Reviewed by a human
          </span>
        </div>
      </header>

      <main className="flex-1 bg-slate-50">
        <section className="border-b border-border bg-white">
          <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
              <span className="h-2 w-2 rounded-full bg-brand" />
              Application · ~3 minutes
            </span>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              The full application.
            </h1>
            <p className="mt-4 text-lg text-muted sm:text-xl">
              You&apos;ve seen what the path looks like. This is the next
              step: a real application that a real human will read before
              they call you. Honest answers get honest answers back.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <Trust title="No credit pull" body="Estimates only. Nothing here hits your record." />
              <Trust
                title="Reviewed by a human"
                body="One licensed Florida specialist — not a call center."
              />
              <Trust
                title="One business day"
                body="You&rsquo;ll hear from us in your preferred call window."
              />
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
            <PricedOutApplicationForm />
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-5 py-12 text-center sm:py-16">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Not ready to apply yet?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-muted">
              That&apos;s fine. Read the longer page first — it covers the
              math, the trade-offs, and the honest catch.
            </p>
            <div className="mt-6">
              <Link
                href="/priced-out/hybrid"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-brand/50 hover:bg-surface"
              >
                Read the long page first
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

function Trust({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4">
      <p className="text-sm font-semibold tracking-tight text-slate-900">
        {title}
      </p>
      <p
        className="mt-1 text-xs text-muted"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
}
