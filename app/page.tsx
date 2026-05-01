import Link from "next/link";

type Variation = {
  slug: string;
  number: number;
  name: string;
  scenario: string[];
  psychology: string[];
  trigger: string;
  buying: string;
  state: "pain" | "aspiration";
  status: "live" | "planned";
};

const variations: Variation[] = [
  {
    slug: "/sick-of-renting",
    number: 1,
    name: "Sick of Renting",
    scenario: ["Renting, rising costs", "Moderate income, possible credit issues"],
    psychology: ["Feels stuck, wants control"],
    trigger: "Lower monthly payment",
    buying: "Escape from rent",
    state: "pain",
    status: "live",
  },
  {
    slug: "/denied-everywhere",
    number: 2,
    name: "Denied Everywhere",
    scenario: ["Rejected by traditional lenders", "Credit issues, has income"],
    psychology: ["Frustrated, skeptical, guarded", "Expects rejection"],
    trigger: "A path that doesn't end in 'no'",
    buying: "Second chance",
    state: "pain",
    status: "planned",
  },
  {
    slug: "/i-own-land",
    number: 3,
    name: "I Own Land — Now What?",
    scenario: ["Has land already", "Doesn't understand next steps"],
    psychology: ["Confused, overwhelmed", "Wants direction"],
    trigger: "A clear next move",
    buying: "Clarity + execution",
    state: "aspiration",
    status: "planned",
  },
  {
    slug: "/land-and-home",
    number: 4,
    name: "Land + Home Package",
    scenario: ["Wants land and home together", "Early research phase"],
    psychology: ["Overwhelmed, cautious", "Needs guidance"],
    trigger: "Step-by-step plan",
    buying: "Clear step-by-step plan",
    state: "aspiration",
    status: "planned",
  },
  {
    slug: "/family-home",
    number: 5,
    name: "Working-Class Family",
    scenario: ["Crowded living situation", "Kids involved"],
    psychology: ["Emotional, future-focused", "Wants stability and pride"],
    trigger: "A better life for the kids",
    buying: "Better life for family",
    state: "aspiration",
    status: "planned",
  },
  {
    slug: "/retiree-downsize",
    number: 6,
    name: "Retiree / Downsizer",
    scenario: ["Selling home or fixed income", "Wants simpler living"],
    psychology: ["Risk-averse, values comfort", "Avoids complexity"],
    trigger: "Simplicity, no surprises",
    buying: "Simplicity + security",
    state: "aspiration",
    status: "planned",
  },
  {
    slug: "/need-it-now",
    number: 7,
    name: "Urgent / Time-Pressured",
    scenario: ["Divorce, eviction, relocation"],
    psychology: ["Stressed, decisive", "Wants speed and certainty"],
    trigger: "Move-in date, fast",
    buying: "Immediate solution",
    state: "pain",
    status: "planned",
  },
  {
    slug: "/investor",
    number: 8,
    name: "Investor",
    scenario: ["Rental or flip strategy"],
    psychology: ["Logical, ROI-driven", "No emotion"],
    trigger: "Cap rate / cash-on-cash",
    buying: "Cash flow / returns",
    state: "pain",
    status: "planned",
  },
  {
    slug: "/skeptical-buyer",
    number: 9,
    name: "Skeptical Buyer",
    scenario: ["Burned before or distrustful"],
    psychology: ["Guarded, slow decision-maker", "Needs transparency"],
    trigger: "Receipts, references, no fluff",
    buying: "Trust",
    state: "aspiration",
    status: "planned",
  },
  {
    slug: "/first-generation",
    number: 10,
    name: "Immigrant / First-Gen",
    scenario: ["First-time U.S. property buyer"],
    psychology: ["Aspirational, family-driven", "Needs guidance"],
    trigger: "The dream, made concrete",
    buying: "Ownership / American dream",
    state: "aspiration",
    status: "planned",
  },
];

export default function Variations() {
  const pain = variations.filter((v) => v.state === "pain");
  const aspiration = variations.filter((v) => v.state === "aspiration");

  return (
    <div className="flex flex-1 flex-col bg-white text-slate-900">
      <main className="mx-auto w-full max-w-6xl px-5 py-16 md:py-24">
        <header className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
            Internal · Landing Page Master Sheet
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Landing page variations.
          </h1>
          <p className="mt-4 text-lg text-muted">
            One page per buyer scenario. Each speaks to a specific situation,
            psychology, and trigger — because they&apos;re not buying a home,
            they&apos;re buying a solution to their situation.
          </p>
          <div className="mt-6 grid gap-3 text-sm sm:grid-cols-3">
            <Stat value={String(variations.length)} label="Total variations" />
            <Stat
              value={String(variations.filter((v) => v.status === "live").length)}
              label="Live"
            />
            <Stat
              value={String(
                variations.filter((v) => v.status === "planned").length,
              )}
              label="Planned"
            />
          </div>
        </header>

        <Section
          eyebrow="Pain-driven"
          title="Move fast when the solution is clear."
          subtitle="Renters, credit-challenged, urgent buyers. Lead with the escape."
          variations={pain}
        />

        <Section
          eyebrow="Aspiration-driven"
          title="Move slowly without guidance."
          subtitle="Families, land buyers, retirees. Lead with the plan."
          variations={aspiration}
        />

        <div className="mt-20 rounded-3xl border border-border bg-slate-900 p-8 text-white sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">
            Core truth
          </p>
          <p className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            They are not buying a home. They are buying a solution to their
            situation.
          </p>
        </div>
      </main>
    </div>
  );
}

function Section({
  eyebrow,
  title,
  subtitle,
  variations,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  variations: Variation[];
}) {
  return (
    <section className="mt-16">
      <div className="flex items-end justify-between gap-4 border-b border-border pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">
            {eyebrow}
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
            {title}
          </h2>
          <p className="mt-1 text-sm text-muted">{subtitle}</p>
        </div>
        <span className="text-sm text-muted">{variations.length} pages</span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {variations.map((v) => (
          <Card key={v.slug} v={v} />
        ))}
      </div>
    </section>
  );
}

function Card({ v }: { v: Variation }) {
  const isLive = v.status === "live";

  const inner = (
    <>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-mono text-muted">
            #{String(v.number).padStart(2, "0")}
          </p>
          <h3 className="mt-1 text-lg font-semibold tracking-tight">{v.name}</h3>
          <p className="mt-1 font-mono text-xs text-brand-strong">{v.slug}</p>
        </div>
        <StatusBadge status={v.status} />
      </div>

      <dl className="mt-5 space-y-3 text-sm">
        <Row label="Scenario" items={v.scenario} />
        <Row label="Psychology" items={v.psychology} />
        <RowText label="Trigger" value={v.trigger} />
        <RowText label="Buying" value={v.buying} />
      </dl>

      {isLive && (
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-strong opacity-0 transition group-hover:opacity-100">
          View live page
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m13 5 7 7-7 7" />
          </svg>
        </span>
      )}
      {!isLive && (
        <span className="mt-5 text-sm text-muted">Not built yet</span>
      )}
    </>
  );

  if (isLive) {
    return (
      <Link
        href={v.slug}
        className="group flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:border-brand/50 hover:shadow-md"
      >
        {inner}
      </Link>
    );
  }

  return (
    <div className="flex flex-col rounded-2xl border border-dashed border-border bg-surface p-6">
      {inner}
    </div>
  );
}

function Row({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="grid grid-cols-[88px_1fr] gap-3">
      <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
        {label}
      </dt>
      <dd className="text-slate-700">
        <ul className="space-y-0.5">
          {items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </dd>
    </div>
  );
}

function RowText({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[88px_1fr] gap-3">
      <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
        {label}
      </dt>
      <dd className="font-medium text-slate-900">{value}</dd>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4">
      <p className="text-2xl font-bold tracking-tight">{value}</p>
      <p className="mt-1 text-xs text-muted">{label}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: "live" | "planned" }) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2.5 py-1 text-xs font-semibold text-brand-strong">
        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
        Live
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
      <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
      Planned
    </span>
  );
}
