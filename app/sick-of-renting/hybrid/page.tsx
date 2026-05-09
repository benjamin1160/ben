import Link from "next/link";
import QualifyForm from "../../QualifyForm";

export default function Home() {
  return (
    <div className="sunset theme-canvas flex flex-1 flex-col">
      {/* Sticky CTA bar (mobile-first) */}
      <div className="sticky top-0 z-40 border-b border-border bg-white/90 backdrop-blur">
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
            See What You Qualify For
          </Link>
        </div>
      </div>

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
            <div className="flex flex-col justify-center">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
                <span className="h-2 w-2 rounded-full bg-brand" />
                Florida homes from $50K–$150K
              </span>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                Stop paying off your landlord&apos;s mortgage.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted sm:text-xl">
                The average Florida renter will hand{" "}
                <span className="font-semibold text-slate-900">
                  $22,000+
                </span>{" "}
                to a landlord this year and own nothing on Dec 31. There&apos;s
                a Florida home in your budget. Let&apos;s find it before next
                year&apos;s rent hike.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#qualify"
                  className="inline-flex items-center justify-center rounded-xl bg-brand px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-brand-strong"
                >
                  See my real payment
                </Link>
                <Link
                  href="#rent-trap"
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-white px-6 py-4 text-base font-semibold text-slate-900 transition hover:border-brand/50"
                >
                  See the numbers
                </Link>
              </div>
              <p className="mt-4 text-sm text-muted">
                Under 60 seconds. No credit pull. No obligation. A real person
                calls you — not a bot.
              </p>
            </div>

            {/* Hero card / illustration */}
            <div className="relative">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/10 via-emerald-100/60 to-amber-100/40 blur-2xl" />
                <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted">
                        Sample monthly cost
                      </p>
                      <p className="mt-1 text-3xl font-bold tracking-tight">
                        $612
                        <span className="ml-1 text-base font-medium text-muted">
                          /mo
                        </span>
                      </p>
                    </div>
                    <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand-strong">
                      Owned, not rented
                    </span>
                  </div>
                  <div className="mt-5 space-y-3 text-sm">
                    <Row label="Home price" value="$78,500" />
                    <Row label="Down payment" value="$3,925" />
                    <Row label="Loan term" value="20 yr fixed" />
                    <Row label="Est. taxes + lot" value="Included" />
                  </div>
                  <div className="mt-5 rounded-xl bg-surface p-4 text-sm text-slate-700">
                    The same household paying{" "}
                    <span className="font-semibold">$1,850/mo</span> in rent
                    would save{" "}
                    <span className="font-semibold text-brand-strong">
                      ~$14,800/yr
                    </span>{" "}
                    — and build equity instead of giving it away.
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-border bg-white p-4">
                  <div className="flex -space-x-2">
                    <Avatar color="#0f766e" />
                    <Avatar color="#0d9488" />
                    <Avatar color="#f59e0b" />
                  </div>
                  <p className="text-sm text-muted">
                    Real Florida families closing every week.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE RENT TRAP */}
        <section id="rent-trap" className="border-t border-border bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                The Rent Trap
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                It&apos;s not just you. The math really has gotten worse.
              </h2>
              <p className="mt-4 text-lg text-muted">
                Renters didn&apos;t imagine this. The data is clear: rent has
                outpaced both wages and reality for over a decade.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <StatCard
                stat="≈ 70%"
                label="Rent increase over the last decade"
                href="https://ipropertymanagement.com/research/average-rent-by-year"
                source="ipropertymanagement.com"
              />
              <StatCard
                stat="88%"
                label="of U.S. counties where rent rose faster than income"
                href="https://home.treasury.gov/news/featured-stories/rent-house-prices-and-demographics"
                source="treasury.gov"
              />
              <StatCard
                stat="30%+"
                label="of household income now spent on rent"
                href="https://usafacts.org/answers/how-much-do-households-spend-on-rent/country/united-states/"
                source="usafacts.org"
              />
            </div>

            {/* Chart */}
            <div className="mt-12 rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-10">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    Average U.S. rent, 2014 → 2024
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    The line that won&apos;t stop climbing.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted">
                  <Legend color="var(--brand)" label="Avg. rent" />
                  <Legend color="#cbd5e1" label="If it had tracked income" />
                </div>
              </div>
              <RentChart />
              <p className="mt-4 text-xs text-muted">
                Illustrative trend based on national data from{" "}
                <a
                  href="https://ipropertymanagement.com/research/average-rent-by-year"
                  className="underline hover:text-slate-900"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  ipropertymanagement.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* FUTURE PROJECTION */}
        <section className="border-t border-border bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-20 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                10 Years From Now
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                If nothing changes, your rent doesn&apos;t stay still.
              </h2>
              <p className="mt-4 text-lg text-muted">
                At a conservative 4–5% annual increase — lower than most
                Florida markets have actually seen — here&apos;s where
                today&apos;s rent lands by 2036.
              </p>
              <ul className="mt-6 space-y-3 text-base">
                <li className="flex items-baseline justify-between rounded-xl bg-surface px-4 py-3">
                  <span className="text-slate-700">$1,500/mo today</span>
                  <span className="font-semibold">→ ~$2,220–$2,440/mo</span>
                </li>
                <li className="flex items-baseline justify-between rounded-xl bg-surface px-4 py-3">
                  <span className="text-slate-700">$1,700/mo today</span>
                  <span className="font-semibold">→ ~$2,520–$2,770/mo</span>
                </li>
                <li className="flex items-baseline justify-between rounded-xl bg-surface px-4 py-3">
                  <span className="text-slate-700">$2,000/mo today</span>
                  <span className="font-semibold">→ ~$2,960–$3,260/mo</span>
                </li>
              </ul>
              <p className="mt-6 text-base text-slate-700">
                That&apos;s another <strong>$120,000+</strong> handed to a
                landlord over the next decade. None of it comes back.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-8">
              <h3 className="text-lg font-semibold tracking-tight">
                Rent vs. owning a $90K home
              </h3>
              <p className="mt-1 text-sm text-muted">
                10-year projection — what each path actually costs.
              </p>
              <ProjectionChart />
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-white p-4">
                  <p className="text-muted">Rent (10 yrs, 4.5%/yr)</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">
                    ~$251K
                  </p>
                  <p className="text-xs text-muted">Equity built: $0</p>
                </div>
                <div className="rounded-xl border border-brand/30 bg-brand/5 p-4">
                  <p className="text-brand-strong">Own (10 yrs)</p>
                  <p className="mt-1 text-2xl font-bold text-brand-strong">
                    ~$84K
                  </p>
                  <p className="text-xs text-brand-strong/80">
                    + a home that&apos;s yours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EMOTIONAL TURN */}
        <section className="border-t border-border bg-slate-900 text-white">
          <div className="mx-auto max-w-4xl px-5 py-20 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              You don&apos;t have to stay stuck renting.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
              The system isn&apos;t designed for you to win as a renter. That
              isn&apos;t your fault — but it is your problem to solve. There
              is a path most people overlook, and it doesn&apos;t require a
              six-figure income or a perfect credit score.
            </p>
            <p className="mt-6 text-lg font-medium text-white">
              Owning a home isn&apos;t a luxury. It isn&apos;t a right.
              It&apos;s something you go out and claim.
            </p>
          </div>
        </section>

        {/* OWNERSHIP AS THE EXIT */}
        <section className="border-t border-border bg-white">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                The Path Out
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Affordable Florida homes from $50K–$150K.
              </h2>
              <p className="mt-4 text-lg text-muted">
                Modern manufactured homes are how a lot of Florida families
                actually become owners. Real square footage, real
                neighborhoods, real ownership — at a price that works.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Benefit
                title="A payment that doesn&apos;t move"
                body="Lock in a fixed monthly cost. Your landlord can&apos;t raise it next year. Your kids can&apos;t be told to find somewhere new."
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect x="3" y="11" width="18" height="10" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                }
              />
              <Benefit
                title="Control over your home"
                body="Paint the walls. Bring the dog. Plant the garden. Make changes that build value for you — not someone else."
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="m3 11 9-7 9 7" />
                    <path d="M5 10v10h14V10" />
                    <path d="M9 20v-6h6v6" />
                  </svg>
                }
              />
              <Benefit
                title="Equity, not exit fees"
                body="Every payment moves you closer to actually owning something — not closer to next year&apos;s renewal letter."
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M3 17 9 11l4 4 8-9" />
                    <path d="M14 7h7v7" />
                  </svg>
                }
              />
            </div>
          </div>
        </section>

        {/* PROOF / PAYMENTS */}
        <section className="border-t border-border bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                Real Numbers
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                What does a payment actually look like?
              </h2>
              <p className="mt-4 text-lg text-muted">
                These are illustrative monthly costs on a 20-year fixed loan
                with a 5% down payment. Your actual numbers depend on credit,
                location, and home choice.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <PriceCard
                price="$58,000"
                payment="~$455"
                tag="Starter"
                features={[
                  "2 bed / 1 bath",
                  "~960 sq ft",
                  "Move-in ready",
                ]}
              />
              <PriceCard
                price="$89,500"
                payment="~$702"
                tag="Most popular"
                highlight
                features={[
                  "3 bed / 2 bath",
                  "~1,300 sq ft",
                  "Updated kitchen",
                ]}
              />
              <PriceCard
                price="$139,000"
                payment="~$1,090"
                tag="Family"
                features={[
                  "4 bed / 2 bath",
                  "~1,700 sq ft",
                  "Lot in quiet community",
                ]}
              />
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <Story
                quote="We were paying $1,950 in Tampa and getting a rent hike letter every spring. Now our payment is $740 and it&apos;s ours. The hike letters stopped."
                name="Marcus & Dani"
                place="Hillsborough County, FL"
              />
              <Story
                quote="I didn&apos;t think anyone like me could buy a home in Florida in 2026. Turns out I just hadn&apos;t talked to the right person yet."
                name="Renee"
                place="Lake County, FL"
              />
            </div>
          </div>
        </section>

        {/* OBJECTIONS */}
        <section className="border-t border-border bg-white">
          <div className="mx-auto max-w-4xl px-5 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                Straight Answers
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The questions most people ask before they pick up the phone.
              </h2>
              <p className="mt-4 text-lg text-muted">
                No fine print games. Here&apos;s the honest version.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              <Faq
                q="Is this a manufactured home park trap?"
                a="No. We work with homes on owned land and homes in resident-owned communities — both real ownership, not month-to-month lot rentals that can hike on you. We&apos;ll tell you which is which on every home we send you."
              />
              <Faq
                q="What does the monthly payment actually include?"
                a="Loan principal + interest, property taxes, insurance, and any community fees if applicable. The numbers we quote are all-in. If a lender quotes you a teaser without taxes baked in, walk away."
              />
              <Faq
                q="What credit score do I need?"
                a="Most of our buyers close in the 580–680 range. We have lender partners who work with thin files, past medical collections, and self-employed income. There&apos;s no credit pull to find out where you stand."
              />
              <Faq
                q="What if I only have $3K–$5K saved?"
                a="That&apos;s the most common starting point we see. Down payments on these homes typically run 3.5–10%, and there are programs that fold closing costs into the loan. Tell us what you have — we&apos;ll tell you what&apos;s realistic."
              />
              <Faq
                q="What&apos;s the catch?"
                a="The honest catch: inventory in the $50K–$150K range is genuinely tight, so timelines can be 60–120 days from first call to keys. If you need to be in something next week, this isn&apos;t that. If you&apos;re willing to plan a season ahead, this works."
              />
              <Faq
                q="What happens after I submit the form?"
                a="A licensed Florida ownership specialist calls you (one human, not a call center) within one business day. You talk for 10–15 minutes. If it&apos;s a fit, we send real homes in your range. If it&apos;s not, we say so."
              />
            </div>
          </div>
        </section>

        {/* QUALIFICATION FUNNEL */}
        <section
          id="qualify"
          className="border-t border-border bg-white scroll-mt-20"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-20 md:grid-cols-5">
            <div className="md:col-span-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                See What You Qualify For
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A short, honest conversation. That&apos;s the whole step.
              </h2>
              <p className="mt-4 text-lg text-muted">
                Answer a few questions and we&apos;ll match you with Florida
                homes in your price range. We&apos;ll show you a real monthly
                payment based on real homes — not a teaser ad.
              </p>
              <ul className="mt-6 space-y-3 text-base text-slate-700">
                <li className="flex items-start gap-3">
                  <Check />
                  Takes under 60 seconds.
                </li>
                <li className="flex items-start gap-3">
                  <Check />
                  No credit pull. Nothing on your record.
                </li>
                <li className="flex items-start gap-3">
                  <Check />
                  No obligation. If it&apos;s not the right time, that&apos;s
                  fine.
                </li>
              </ul>
            </div>
            <div className="md:col-span-3">
              <QualifyForm />
            </div>
          </div>
        </section>

        {/* URGENCY */}
        <section className="border-t border-border bg-slate-50">
          <div className="mx-auto max-w-4xl px-5 py-16 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Every month you wait costs you twice.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted">
              One: another rent check that builds zero equity. Two: home prices
              and rates in this band have drifted up every year for a decade.
              The $89K home today is the $96K home next spring — and your rent
              renewal lands before that.
            </p>
            <div className="mx-auto mt-8 grid max-w-xl gap-3 text-left sm:grid-cols-3">
              <UrgencyStat value="~$1,850" label="Avg. rent gone next month" />
              <UrgencyStat value="60–120 days" label="Typical close timeline" />
              <UrgencyStat value="1 call" label="To know if it&apos;s a fit" />
            </div>
            <div className="mt-8 flex flex-col items-center gap-3">
              <Link
                href="#qualify"
                className="inline-flex items-center justify-center rounded-xl bg-brand px-7 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-brand-strong"
              >
                See my real payment
              </Link>
            </div>
          </div>
        </section>

        <footer className="border-t border-border bg-white">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-8 text-xs text-muted sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Florida Home Path</p>
            <p className="max-w-xl">
              Payment examples are illustrative and depend on credit, location,
              and home choice. Equal housing opportunity.
            </p>

            <a
                href="https://github.com/benjamin1160/ben/tree/main/app/sick-of-renting/hybrid"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-slate-700 underline-offset-2 hover:text-slate-900 hover:underline"
              >
                Grab this template ↗
              </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border/70 pb-2 last:border-none last:pb-0">
      <span className="text-muted">{label}</span>
      <span className="font-medium text-slate-900">{value}</span>
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

function StatCard({
  stat,
  label,
  href,
  source,
}: {
  stat: string;
  label: string;
  href: string;
  source: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <p className="text-4xl font-bold tracking-tight text-brand-strong">
        {stat}
      </p>
      <p className="mt-2 text-base text-slate-700">{label}</p>
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-muted underline-offset-4 hover:text-slate-900 hover:underline"
      >
        Source: {source}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3 w-3"
          aria-hidden="true"
        >
          <path d="M7 17 17 7" />
          <path d="M8 7h9v9" />
        </svg>
      </a>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span
        className="inline-block h-2.5 w-2.5 rounded-full"
        style={{ backgroundColor: color }}
      />
      {label}
    </span>
  );
}

function RentChart() {
  // Indexed values 2014–2024, illustrative
  const rent = [100, 104, 109, 114, 121, 128, 133, 142, 156, 165, 170];
  const wages = [100, 102, 104, 107, 110, 113, 117, 121, 125, 129, 132];
  const years = [
    "'14",
    "'15",
    "'16",
    "'17",
    "'18",
    "'19",
    "'20",
    "'21",
    "'22",
    "'23",
    "'24",
  ];
  const w = 800;
  const h = 280;
  const pad = { l: 40, r: 20, t: 20, b: 30 };
  const max = 180;
  const min = 95;
  const xStep = (w - pad.l - pad.r) / (rent.length - 1);
  const yScale = (v: number) =>
    pad.t + ((max - v) / (max - min)) * (h - pad.t - pad.b);

  const toPath = (arr: number[]) =>
    arr
      .map((v, i) => `${i === 0 ? "M" : "L"} ${pad.l + i * xStep} ${yScale(v)}`)
      .join(" ");

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="mt-6 h-64 w-full"
      role="img"
      aria-label="U.S. average rent index vs. wage index, 2014 to 2024"
    >
      {[100, 120, 140, 160].map((g) => (
        <g key={g}>
          <line
            x1={pad.l}
            x2={w - pad.r}
            y1={yScale(g)}
            y2={yScale(g)}
            stroke="#e2e8f0"
            strokeDasharray="3 4"
          />
          <text
            x={pad.l - 8}
            y={yScale(g) + 4}
            fontSize="10"
            textAnchor="end"
            fill="#94a3b8"
          >
            {g}
          </text>
        </g>
      ))}
      {years.map((y, i) => (
        <text
          key={y}
          x={pad.l + i * xStep}
          y={h - 10}
          fontSize="10"
          textAnchor="middle"
          fill="#94a3b8"
        >
          {y}
        </text>
      ))}
      <path
        d={toPath(wages)}
        fill="none"
        stroke="#cbd5e1"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={toPath(rent)}
        fill="none"
        stroke="var(--brand)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {rent.map((v, i) => (
        <circle
          key={i}
          cx={pad.l + i * xStep}
          cy={yScale(v)}
          r={i === rent.length - 1 ? 5 : 0}
          fill="var(--brand)"
        />
      ))}
    </svg>
  );
}

function ProjectionChart() {
  const rentMonthly = 1700;
  const ownMonthly = 700;
  const years = 10;
  const rentGrowth = 0.045;
  const rentTotals: number[] = [];
  const ownTotals: number[] = [];
  let rentCum = 0;
  let ownCum = 0;
  for (let y = 1; y <= years; y++) {
    const rentYear = rentMonthly * 12 * Math.pow(1 + rentGrowth, y - 1);
    rentCum += rentYear;
    ownCum += ownMonthly * 12;
    rentTotals.push(rentCum);
    ownTotals.push(ownCum);
  }
  const max = Math.max(...rentTotals);
  const w = 600;
  const h = 240;
  const pad = { l: 30, r: 10, t: 10, b: 30 };
  const xStep = (w - pad.l - pad.r) / years;
  const yScale = (v: number) =>
    pad.t + (1 - v / max) * (h - pad.t - pad.b);

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="mt-4 h-56 w-full"
      role="img"
      aria-label="Cumulative cost of renting versus owning over 10 years"
    >
      {rentTotals.map((v, i) => {
        const x = pad.l + i * xStep + 4;
        const own = ownTotals[i];
        return (
          <g key={i}>
            <rect
              x={x}
              y={yScale(v)}
              width={xStep / 2 - 4}
              height={h - pad.b - yScale(v)}
              fill="#cbd5e1"
              rx="3"
            />
            <rect
              x={x + xStep / 2}
              y={yScale(own)}
              width={xStep / 2 - 4}
              height={h - pad.b - yScale(own)}
              fill="var(--brand)"
              rx="3"
            />
            <text
              x={x + xStep / 2}
              y={h - 10}
              fontSize="9"
              textAnchor="middle"
              fill="#94a3b8"
            >
              Y{i + 1}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function Benefit({
  title,
  body,
  icon,
}: {
  title: string;
  body: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand-strong">
        {icon}
      </div>
      <h3
        className="mt-4 text-lg font-semibold tracking-tight"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p className="mt-2 text-base text-muted">{body}</p>
    </div>
  );
}

function PriceCard({
  price,
  payment,
  tag,
  features,
  highlight,
}: {
  price: string;
  payment: string;
  tag: string;
  features: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-6 shadow-sm ${
        highlight
          ? "border-brand bg-white ring-2 ring-brand/20"
          : "border-border bg-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`text-xs font-semibold uppercase tracking-wider ${
            highlight ? "text-brand-strong" : "text-muted"
          }`}
        >
          {tag}
        </span>
        <span className="text-xs text-muted">FL</span>
      </div>
      <p className="mt-3 text-3xl font-bold tracking-tight">{price}</p>
      <p className="mt-1 text-sm text-muted">
        Roughly{" "}
        <span className="font-semibold text-slate-900">{payment}/mo</span> all
        in
      </p>
      <ul className="mt-5 space-y-2 text-sm text-slate-700">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Story({
  quote,
  name,
  place,
}: {
  quote: string;
  name: string;
  place: string;
}) {
  return (
    <figure className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <blockquote
        className="text-lg text-slate-800"
        dangerouslySetInnerHTML={{ __html: `“${quote}”` }}
      />
      <figcaption className="mt-4 text-sm text-muted">
        <span className="font-semibold text-slate-900">{name}</span> · {place}
      </figcaption>
    </figure>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-border bg-surface p-5 open:bg-white open:shadow-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold tracking-tight text-slate-900">
        <span dangerouslySetInnerHTML={{ __html: q }} />
        <span className="ml-2 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full border border-border bg-white text-brand-strong transition group-open:rotate-45">
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
            <path d="M12 5v14" />
            <path d="M5 12h14" />
          </svg>
        </span>
      </summary>
      <p
        className="mt-3 text-base leading-relaxed text-slate-700"
        dangerouslySetInnerHTML={{ __html: a }}
      />
    </details>
  );
}

function UrgencyStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-white p-4">
      <p className="text-xl font-bold tracking-tight text-slate-900">{value}</p>
      <p
        className="mt-1 text-xs text-muted"
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
