import Link from "next/link";
import QualifyForm from "../../QualifyForm";

export const metadata = {
  title: "Priced out of Florida real estate? Read this.",
  description:
    "If you can afford a home but not a Florida home, here's the honest next-best-thing — modern manufactured homes from $50K–$150K. Real ownership, real neighborhoods, real price.",
};

export default function PricedOutHybrid() {
  return (
    <div className="flex flex-1 flex-col bg-white text-slate-900">
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
            See What Fits Your Budget
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
                For pre-approved buyers priced out of FL real estate
              </span>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                You can afford a home. Just not a Florida home.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted sm:text-xl">
                The bank says yes. The market says no. Median Florida
                site-built homes are now north of{" "}
                <span className="font-semibold text-slate-900">$385K</span>,
                and the all-in payment on that math doesn&apos;t work for
                most pre-approved buyers either. There&apos;s an honest
                second answer most of them haven&apos;t heard.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#qualify"
                  className="inline-flex items-center justify-center rounded-xl bg-brand px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-brand-strong"
                >
                  Show me what actually fits
                </Link>
                <Link
                  href="#price-trap"
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-white px-6 py-4 text-base font-semibold text-slate-900 transition hover:border-brand/50"
                >
                  See the numbers
                </Link>
              </div>
              <p className="mt-4 text-sm text-muted">
                Under 60 seconds. No credit pull. A real person calls you —
                not a bot. Not a teaser ad.
              </p>
            </div>

            {/* Hero card */}
            <div className="relative">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/10 via-emerald-100/60 to-amber-100/40 blur-2xl" />
                <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted">
                        Same buyer, two paths
                      </p>
                      <p className="mt-1 text-3xl font-bold tracking-tight">
                        $385K
                        <span className="ml-1 text-base font-medium text-muted">
                          vs $89K
                        </span>
                      </p>
                    </div>
                    <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand-strong">
                      The honest gap
                    </span>
                  </div>
                  <div className="mt-5 space-y-3 text-sm">
                    <Row
                      label="FL median site-built"
                      value="~$2,800/mo all in"
                    />
                    <Row
                      label="3 bed manufactured"
                      value="~$702/mo all in"
                    />
                    <Row label="Down payment delta" value="~$25K saved" />
                    <Row label="Years to wait, gone" value="0" />
                  </div>
                  <div className="mt-5 rounded-xl bg-surface p-4 text-sm text-slate-700">
                    Same household, same income, same county.{" "}
                    <span className="font-semibold text-brand-strong">
                      One path is realistic this year.
                    </span>{" "}
                    The other is a wait that turns into never.
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-border bg-white p-4">
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
            </div>
          </div>
        </section>

        {/* THE PRICE TRAP */}
        <section id="price-trap" className="border-t border-border bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                The Price Trap
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                It isn&apos;t in your head. The math actually broke.
              </h2>
              <p className="mt-4 text-lg text-muted">
                Florida didn&apos;t just get more expensive — it lapped your
                income. The data is brutal and it isn&apos;t getting better
                this year.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <StatCard
                stat="~$385K"
                label="Median Florida single-family home, 2025"
                href="https://www.floridarealtors.org/news-media/news-articles/2025"
                source="floridarealtors.org"
              />
              <StatCard
                stat="+58%"
                label="FL home prices since 2019. Wages didn't follow."
                href="https://fred.stlouisfed.org/series/FLSTHPI"
                source="fred.stlouisfed.org"
              />
              <StatCard
                stat="~$92K"
                label="Income now needed to qualify for that median home"
                href="https://www.nar.realtor/research-and-statistics"
                source="nar.realtor"
              />
            </div>

            {/* Chart */}
            <div className="mt-12 rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-10">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    FL median home price vs. median income, 2014 → 2025
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    The two lines that were supposed to move together.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted">
                  <Legend color="var(--brand)" label="Median home price" />
                  <Legend color="#cbd5e1" label="Median income" />
                </div>
              </div>
              <PriceChart />
              <p className="mt-4 text-xs text-muted">
                Illustrative trend. The gap between these two lines is the
                reason your pre-approval letter feels like a participation
                trophy.
              </p>
            </div>
          </div>
        </section>

        {/* HONEST PIVOT */}
        <section className="border-t border-border bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-20 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                The honest pivot
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                You have three real options. Two of them are bad.
              </h2>
              <ul className="mt-6 space-y-4 text-base">
                <Option
                  title="Keep waiting."
                  body="Median FL prices rose 4–7% per year since 2019. Your savings rate didn&rsquo;t. Every year you wait, the down payment number gets bigger faster than your account does."
                  bad
                />
                <Option
                  title="Stretch into a $385K home you'll resent."
                  body="Pre-approved doesn&rsquo;t mean comfortable. Eating PB&J for 30 years to pay a $2,800 mortgage isn&rsquo;t ownership — it&rsquo;s a hostage situation with a deed."
                  bad
                />
                <Option
                  title="Buy the affordable version of the same thing."
                  body="A modern manufactured home on owned land. Real square footage, real neighborhood, real deed in your name. $50K–$150K. The next-best-thing, sold honestly."
                />
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-8">
              <h3 className="text-lg font-semibold tracking-tight">
                Site-built vs. manufactured — straight talk
              </h3>
              <p className="mt-1 text-sm text-muted">
                Where they actually match, and where they don&rsquo;t. No
                spin.
              </p>
              <div className="mt-6 grid grid-cols-3 text-sm">
                <Compare label="" head1="Site-built" head2="Manufactured" />
                <Compare
                  label="Real ownership / deed"
                  head1="Yes"
                  head2="Yes"
                  match
                />
                <Compare
                  label="Real square footage"
                  head1="Yes"
                  head2="Yes"
                  match
                />
                <Compare
                  label="Fixed mortgage payment"
                  head1="Yes"
                  head2="Yes"
                  match
                />
                <Compare
                  label="Avg. FL price (3 bed)"
                  head1="$385K+"
                  head2="$80–$150K"
                />
                <Compare
                  label="Time to close"
                  head1="60–120 days"
                  head2="60–120 days"
                  match
                />
                <Compare
                  label="Appreciates over time"
                  head1="Faster"
                  head2="Slower but real"
                />
                <Compare
                  label="Hurricane-rated build"
                  head1="Code"
                  head2="HUD Wind Zone II"
                  match
                />
              </div>
              <p className="mt-5 text-xs text-muted">
                The honest take: site-built appreciates faster. Manufactured
                lets you actually own this year. Trade-off, not a trick.
              </p>
            </div>
          </div>
        </section>

        {/* EMOTIONAL TURN */}
        <section className="border-t border-border bg-slate-900 text-white">
          <div className="mx-auto max-w-4xl px-5 py-20 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              You aren&apos;t broke. You&apos;re priced out.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
              That&apos;s a different problem with a different answer. The
              fix isn&apos;t to earn $30K more. It isn&apos;t to wait three
              more years for the market to crash. It&apos;s to buy the
              version of the home you actually want, at the price the math
              actually allows.
            </p>
            <p className="mt-6 text-lg font-medium text-white">
              Affordable ownership isn&apos;t a downgrade. It&apos;s a deed.
            </p>
          </div>
        </section>

        {/* OWNERSHIP AS THE EXIT */}
        <section className="border-t border-border bg-white">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                The Path In
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Florida homes from $50K–$150K. Yes, really.
              </h2>
              <p className="mt-4 text-lg text-muted">
                Modern manufactured homes — the affordable, honest version
                of homeownership. Real square footage, real neighborhoods,
                real deed.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Benefit
                title="A price you can actually afford"
                body="The list price is the price. No surprise add-ons, no &ldquo;final&rdquo; numbers that climb $40K once you&rsquo;re in conversation. If it works for you on paper, it&rsquo;ll still work at closing."
                icon={<TagIcon />}
              />
              <Benefit
                title="A payment your spreadsheet survives"
                body="Most of our buyers go from $2,800 in renting-or-stretching to a $700–$1,100 fixed mortgage. Same household, different financial life."
                icon={<WalletIcon />}
              />
              <Benefit
                title="The same upgrade path"
                body="Build equity here for 5–7 years. Use it as the down payment on the site-built place when prices come back to earth — or don&rsquo;t. Either way, you owned the whole time."
                icon={<StairsIcon />}
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
                What &ldquo;affordable&rdquo; actually means here.
              </h2>
              <p className="mt-4 text-lg text-muted">
                Illustrative all-in monthly payments on a 20-year fixed loan
                with 5% down. Your real number depends on credit, location,
                and home choice — but most of our pre-approved buyers come in
                better, not worse.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <PriceCard
                price="$58,000"
                payment="~$455"
                tag="Starter"
                features={[
                  "2 bed / 1 bath · ~960 sq ft",
                  "Move-in ready",
                  "Owned land or resident-owned community",
                ]}
              />
              <PriceCard
                price="$89,500"
                payment="~$702"
                tag="Most popular"
                highlight
                features={[
                  "3 bed / 2 bath · ~1,300 sq ft",
                  "Updated kitchen",
                  "What our pre-approved buyers pick",
                ]}
              />
              <PriceCard
                price="$139,000"
                payment="~$1,090"
                tag="Family"
                features={[
                  "4 bed / 2 bath · ~1,700 sq ft",
                  "Quiet community lot",
                  "Less than the $385K mortgage by a lot",
                ]}
              />
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <Story
                quote="We were pre-approved for $310K, but the actual payment was suffocating — $2,400 a month before food, daycare, anything. We finally bought a 3/2 manufactured for $94K, and our payment is $760. We&apos;re putting the difference into savings for later."
                name="Priya & Tom"
                place="Polk County, FL"
              />
              <Story
                quote="I kept waiting for the market to crash. It didn&apos;t. I bought a $112K home in a quiet community and stopped checking Zillow at 1am. Best decision I made in three years."
                name="Devon"
                place="Pasco County, FL"
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
                The objections most pre-approved buyers actually have.
              </h2>
              <p className="mt-4 text-lg text-muted">
                Asked and answered honestly. We&apos;d rather lose you here
                than waste your call.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              <Faq
                q="Is this the same as a trailer in a park?"
                a="No. Modern manufactured homes are HUD-code, hurricane-rated, on permanent foundations, and indistinguishable from a small ranch from the curb. We work with homes on owned land or in resident-owned communities — not month-to-month lot rentals."
              />
              <Faq
                q="Will it appreciate?"
                a="Honest answer: yes, but slower than a site-built home in the same county. Manufactured homes on owned land in FL have appreciated meaningfully every year of the last decade — just not at the 7%/yr clip site-built saw. The trade-off is you actually own one this year instead of waiting forever."
              />
              <Faq
                q="What about hurricanes and insurance?"
                a="Florida HUD Wind Zone II homes are built to withstand 110+ mph sustained winds. Insurance runs $1,200–$2,400/yr depending on county and proximity to coast — comparable to a small site-built home. We bake it into the all-in payment, so what you see is what you pay."
              />
              <Faq
                q="If I'm pre-approved for $310K, why would I buy at $90K?"
                a="Because pre-approved isn't the same as comfortable. Buying at half your max means a payment that survives a job change, a kid, or a bad year — and it leaves real cash to invest, save, or upgrade later. The wealthiest renter you know is the one who didn't borrow to the ceiling."
              />
              <Faq
                q="Can I sell it later if I want a site-built home?"
                a="Yes. Manufactured homes on owned land are sold the same way as any other home — MLS listing, agent, title company. Plan on 30–90 days to sell. Most of our buyers who do this hold for 5–7 years, build equity, and roll into a site-built place once the market catches them."
              />
              <Faq
                q="What's the actual catch?"
                a="Two: financing options are narrower than for site-built (we only work with lenders who actually fund manufactured), and inventory in the $50K–$150K band is genuinely tight — closes run 60–120 days. If you need keys next month, this isn't that. If you can plan a season ahead, it works."
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
                See What Fits Your Budget
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Tell us your real budget. We&apos;ll send you real homes.
              </h2>
              <p className="mt-4 text-lg text-muted">
                A short, honest conversation — not a 14-tab spreadsheet. We
                match your budget to inventory, send a shortlist, and tell
                you what each one actually costs to own per month.
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
                  No obligation. If the math doesn&apos;t work, we say so.
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
              The market isn&apos;t coming back to you.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted">
              FL site-built prices have climbed every year since 2012, recession
              included. The $89K manufactured home today is the $96K manufactured
              home next spring. The $310K pre-approval doesn&apos;t go further
              by waiting — it just expires.
            </p>
            <div className="mx-auto mt-8 grid max-w-xl gap-3 text-left sm:grid-cols-3">
              <UrgencyStat value="~$385K" label="FL median that won&apos;t move" />
              <UrgencyStat value="60–120 days" label="To real keys, real deed" />
              <UrgencyStat value="1 call" label="To know if it&apos;s a fit" />
            </div>
            <div className="mt-8 flex flex-col items-center gap-3">
              <Link
                href="#qualify"
                className="inline-flex items-center justify-center rounded-xl bg-brand px-7 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-brand-strong"
              >
                Show me what actually fits
              </Link>
            </div>
          </div>
        </section>

        <footer className="border-t border-border bg-white">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-8 text-xs text-muted sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Florida Home Path</p>
            <p className="max-w-xl">
              Payment examples are illustrative and depend on credit,
              location, and home choice. Equal housing opportunity.
            </p>
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

function PriceChart() {
  // Indexed values 2014–2025, illustrative for FL median home vs FL median income
  const price = [100, 105, 113, 122, 131, 140, 154, 178, 198, 210, 218, 224];
  const income = [100, 102, 105, 108, 111, 114, 118, 122, 126, 130, 133, 136];
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
    "'25",
  ];
  const w = 800;
  const h = 280;
  const pad = { l: 40, r: 20, t: 20, b: 30 };
  const max = 240;
  const min = 95;
  const xStep = (w - pad.l - pad.r) / (price.length - 1);
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
      aria-label="Florida median home price index vs. median income index, 2014 to 2025"
    >
      {[100, 140, 180, 220].map((g) => (
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
        d={toPath(income)}
        fill="none"
        stroke="#cbd5e1"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={toPath(price)}
        fill="none"
        stroke="var(--brand)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {price.map((v, i) => (
        <circle
          key={i}
          cx={pad.l + i * xStep}
          cy={yScale(v)}
          r={i === price.length - 1 ? 5 : 0}
          fill="var(--brand)"
        />
      ))}
    </svg>
  );
}

function Option({
  title,
  body,
  bad,
}: {
  title: string;
  body: string;
  bad?: boolean;
}) {
  return (
    <li className="flex items-start gap-3 rounded-xl border border-border bg-white p-4">
      <span
        className={`mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full text-xs font-bold ${
          bad
            ? "bg-rose-100 text-rose-700"
            : "bg-brand/10 text-brand-strong"
        }`}
        aria-hidden="true"
      >
        {bad ? "✕" : "✓"}
      </span>
      <div>
        <p className="text-base font-semibold tracking-tight text-slate-900">
          {title}
        </p>
        <p
          className="mt-1 text-sm text-slate-700"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </li>
  );
}

function Compare({
  label,
  head1,
  head2,
  match,
}: {
  label: string;
  head1: string;
  head2: string;
  match?: boolean;
}) {
  const isHeader = label === "";
  return (
    <>
      <div
        className={`col-span-1 border-b border-border/70 px-2 py-2 text-xs ${
          isHeader ? "font-semibold uppercase tracking-wider text-muted" : "text-muted"
        }`}
      >
        {label}
      </div>
      <div
        className={`col-span-1 border-b border-border/70 px-2 py-2 text-center text-xs ${
          isHeader
            ? "font-semibold uppercase tracking-wider text-muted"
            : "font-medium text-slate-700"
        }`}
      >
        {head1}
      </div>
      <div
        className={`col-span-1 border-b border-border/70 px-2 py-2 text-center text-xs ${
          isHeader
            ? "font-semibold uppercase tracking-wider text-muted"
            : `font-medium ${match ? "text-brand-strong" : "text-slate-700"}`
        }`}
      >
        {head2}
      </div>
    </>
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

function TagIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M20.59 13.41 13 21l-9-9V4h8z" />
      <circle cx="7.5" cy="7.5" r="1.5" />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M16 12h4" />
      <path d="M3 9h18" />
    </svg>
  );
}

function StairsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M3 20h4v-4h4v-4h4V8h4V4" />
    </svg>
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
