import Link from "next/link";
import PricedOutSqueezeForm from "./PricedOutSqueezeForm";

export const metadata = {
  title: "Priced out of Florida real estate? See what fits.",
  description:
    "Pre-approved but locked out of every house you actually want? Three fields and we'll send a real shortlist of FL homes from $50K–$150K with all-in monthly payments.",
};

export default function PricedOutSqueeze() {
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
            FL homes · $50K–$150K
          </span>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-12 md:grid-cols-2 md:py-20">
            <div className="flex flex-col justify-center">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
                <span className="h-2 w-2 rounded-full bg-brand" />
                For pre-approved buyers priced out of FL
              </span>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                You can afford a home. Just not at $385K.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted sm:text-xl">
                Florida homes from{" "}
                <span className="font-semibold text-slate-900">
                  $50K–$150K
                </span>
                . All-in payments as low as{" "}
                <span className="font-semibold text-slate-900">
                  $702/mo
                </span>
                . Tell us three things and we&apos;ll send a real shortlist
                today.
              </p>

              <ul className="mt-8 space-y-3 text-base text-slate-700">
                <li className="flex items-start gap-3">
                  <Check />
                  No credit pull. Nothing on your record.
                </li>
                <li className="flex items-start gap-3">
                  <Check />
                  Real ownership, real deed — not a lot rental.
                </li>
                <li className="flex items-start gap-3">
                  <Check />
                  All-in payments, not teaser numbers.
                </li>
              </ul>

              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-border bg-white p-4">
                <div className="flex -space-x-2">
                  <Avatar color="#0f766e" />
                  <Avatar color="#0d9488" />
                  <Avatar color="#f59e0b" />
                </div>
                <p className="text-sm text-muted">
                  Pre-approved Florida buyers closing every week.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/10 via-emerald-100/60 to-amber-100/40 blur-2xl" />
              <PricedOutSqueezeForm />
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-surface">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-5 py-10 sm:grid-cols-3">
            <Proof
              stat="~$385K"
              label="FL median that won&rsquo;t come back to you"
            />
            <Proof
              stat="~$702/mo"
              label="All-in on a typical 3 bed manufactured"
            />
            <Proof
              stat="60–120 days"
              label="To real keys, real deed"
            />
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
                href="/grab/priced-out/squeeze"
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

function Avatar({ color }: { color: string }) {
  return (
    <span
      className="inline-block h-8 w-8 rounded-full border-2 border-white"
      style={{ backgroundColor: color }}
      aria-hidden="true"
    />
  );
}

function Proof({ stat, label }: { stat: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
      <p className="text-2xl font-bold tracking-tight text-brand-strong">
        {stat}
      </p>
      <p
        className="mt-1 text-sm text-slate-700"
        dangerouslySetInnerHTML={{ __html: label }}
      />
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
