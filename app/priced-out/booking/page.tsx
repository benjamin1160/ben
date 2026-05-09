import Link from "next/link";
import BookingPicker from "../../sick-of-renting/booking/BookingPicker";

export const metadata = {
  title: "Book your call — Florida Home Path",
  description:
    "Pick a 15-minute slot with a licensed Florida ownership specialist. One human, no credit pull, no obligation.",
};

export default function PricedOutBooking() {
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
            Book your 15-minute call
          </span>
        </div>
      </header>

      <main className="flex-1 bg-slate-50">
        <section className="border-b border-border bg-white">
          <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
              <span className="h-2 w-2 rounded-full bg-brand" />
              15-minute call · Eastern time
            </span>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Pick when we should call.
            </h1>
            <p className="mt-4 text-lg text-muted sm:text-xl">
              A 15-minute call with a licensed Florida ownership specialist.
              They&apos;ll have read your file before they dial. Honest
              answers, both directions.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <Trust title="15 minutes" body="No more, no less." />
              <Trust
                title="One human"
                body="Same person who reads your file. Not a call center."
              />
              <Trust
                title="No credit pull"
                body="Nothing on the call hits your record."
              />
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
            <BookingPicker />
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">
              What we&apos;ll cover on the call
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              No fluff. Three things, in order.
            </h2>
            <ol className="mt-8 space-y-4">
              <Bullet
                num="01"
                title="What actually fits your real budget."
                body="Not the bank&rsquo;s max. The number that lets you sleep, save, and live. We work backwards from there."
              />
              <Bullet
                num="02"
                title="Real homes available right now."
                body="A specific shortlist in your county and price band, with all-in monthly payments. Sent the same day if it&rsquo;s a fit."
              />
              <Bullet
                num="03"
                title="The honest trade-offs."
                body="Manufactured appreciates slower than site-built. Inventory in this band is tight. Closes run 60–120 days. We&rsquo;ll tell you whether the timing actually works — or whether to come back in 3 months."
              />
            </ol>
          </div>
        </section>

        <section className="border-t border-border bg-surface">
          <div className="mx-auto max-w-3xl px-5 py-12 text-center">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
              Not ready to book?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted">
              No problem. Submit the application and a specialist will call
              you in their next available window.
            </p>
            <div className="mt-5">
              <Link
                href="/priced-out/application"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-brand/50 hover:bg-white"
              >
                Submit the application instead
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
      <p className="mt-1 text-xs text-muted">{body}</p>
    </div>
  );
}

function Bullet({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) {
  return (
    <li className="grid gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm sm:grid-cols-[64px_1fr]">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 font-mono text-sm font-semibold text-brand-strong">
        {num}
      </div>
      <div>
        <h3 className="text-lg font-semibold tracking-tight text-slate-900">
          {title}
        </h3>
        <p
          className="mt-1 text-base leading-relaxed text-slate-700"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </li>
  );
}
