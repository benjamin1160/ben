import Link from "next/link";
import SqueezeForm from "./SqueezeForm";

export const metadata = {
  title: "Stop renting. See your real Florida payment.",
  description:
    "Florida homes from $50K–$150K. Three quick fields, no credit pull, a real person calls you back.",
};

export default function SickOfRentingSqueeze() {
  return (
    <div className="sunset theme-canvas flex flex-1 flex-col">
      <header className="border-b border-border bg-card/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-2">
            <span
              className="inline-flex h-7 w-7 items-center justify-center bg-brand text-white"
              style={{ borderRadius: "var(--radius-sm)" }}
            >
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
            <span className="theme-display text-sm tracking-tight">
              Florida Home Path
            </span>
          </div>
          <span className="hidden text-xs text-muted sm:block">
            Florida homes · $50K–$150K
          </span>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-12 md:grid-cols-2 md:py-20">
            <div className="flex flex-col justify-center">
              <span
                className="inline-flex w-fit items-center gap-2 border border-border bg-surface px-3 py-1 text-xs font-medium text-muted"
                style={{ borderRadius: "var(--radius-pill)" }}
              >
                <span className="h-2 w-2 rounded-full bg-brand" />
                For renters tired of the rent hike letter
              </span>
              <h1 className="theme-display mt-5 text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
                Your rent could be a mortgage.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted sm:text-xl">
                Florida homes from{" "}
                <span className="font-semibold text-foreground">
                  $50K–$150K
                </span>
                . Payments as low as{" "}
                <span className="font-semibold text-foreground">
                  $455/mo
                </span>
                . Tell us three things and a real person calls you back today.
              </p>

              <ul className="mt-8 space-y-3 text-base text-foreground/90">
                <li className="flex items-start gap-3">
                  <Check />
                  No credit pull. Nothing on your record.
                </li>
                <li className="flex items-start gap-3">
                  <Check />
                  580+ credit lines close every week.
                </li>
                <li className="flex items-start gap-3">
                  <Check />
                  Down payments often $3K–$5K, not $30K.
                </li>
              </ul>

              <div className="theme-card mt-8 flex items-center gap-3 p-4">
                <div className="flex -space-x-2">
                  <Avatar className="bg-brand" />
                  <Avatar className="bg-brand-strong" />
                  <Avatar className="bg-accent" />
                </div>
                <p className="text-sm text-muted">
                  Real Florida families closing every week.
                </p>
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute -inset-6 -z-10 bg-gradient-to-br from-brand/30 via-brand/10 to-accent/30 blur-3xl"
                style={{ borderRadius: "var(--radius-lg)" }}
              />
              <SqueezeForm />
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-surface/70">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-5 py-10 sm:grid-cols-3">
            <Proof
              stat="$455/mo"
              label="Sample payment on a $58K starter home"
            />
            <Proof
              stat="60–120 days"
              label="Typical close timeline from first call"
            />
            <Proof
              stat="1 call"
              label="To know if it&rsquo;s a fit — or if it&rsquo;s not"
            />
          </div>
        </section>

        <footer className="border-t border-border bg-card/60 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-8 text-xs text-muted sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Florida Home Path</p>
            <div className="flex items-center gap-4">
              <p className="max-w-xl">
                Payment examples are illustrative and depend on credit,
                location, and home choice. Equal housing opportunity.
              </p>
              <Link href="/" className="hover:text-foreground">
                All pages
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Avatar({ className }: { className: string }) {
  return (
    <span
      className={`inline-block h-8 w-8 rounded-full border-2 border-card ${className}`}
      aria-hidden="true"
    />
  );
}

function Proof({ stat, label }: { stat: string; label: string }) {
  return (
    <div className="theme-card p-5">
      <p className="theme-display text-3xl text-brand-strong">{stat}</p>
      <p
        className="mt-1 text-sm text-foreground/80"
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
