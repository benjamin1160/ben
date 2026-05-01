import Link from "next/link";

type PageStyle = {
  slug: string;
  name: string;
  short: string;
  purpose: string;
  group: "entry" | "midfunnel" | "terminal";
};

type Variation = {
  slug: string;
  number: number;
  name: string;
  scenario: string[];
  psychology: string[];
  trigger: string;
  buying: string;
  state: "pain" | "aspiration";
  liveStyles: string[];
};

const pageStyles: PageStyle[] = [
  {
    slug: "quiz",
    name: "Quiz",
    short: "Multi-step qualifier",
    purpose: "1 question per screen. Pre-qualifies and engages.",
    group: "entry",
  },
  {
    slug: "squeeze",
    name: "Squeeze",
    short: "3-field lead capture",
    purpose: "Single screen. Headline + 3 fields. Speed over depth.",
    group: "entry",
  },
  {
    slug: "vsl",
    name: "VSL",
    short: "Video sales letter",
    purpose: "2–5 min video at top, form below. Builds trust.",
    group: "entry",
  },
  {
    slug: "hybrid",
    name: "Hybrid",
    short: "Short-form sales + form",
    purpose: "Scrollable but tight. Education + conversion.",
    group: "entry",
  },
  {
    slug: "bridge",
    name: "Bridge",
    short: "Click-through warm-up",
    purpose: "Pre-frames the offer. No form, just one CTA.",
    group: "entry",
  },
  {
    slug: "application",
    name: "Application",
    short: "High-intent form",
    purpose: "Multi-field form. For warm traffic only.",
    group: "midfunnel",
  },
  {
    slug: "thank-you",
    name: "Thank You",
    short: "Confirmation + next steps",
    purpose: "Sets expectations. Massively boosts contact rate.",
    group: "terminal",
  },
  {
    slug: "booking",
    name: "Booking",
    short: "Calendar embed",
    purpose: "Convert hot leads into appointments.",
    group: "terminal",
  },
];

const variations: Variation[] = [
  {
    slug: "sick-of-renting",
    number: 1,
    name: "Sick of Renting",
    scenario: ["Renting, rising costs", "Moderate income, possible credit issues"],
    psychology: ["Feels stuck, wants control"],
    trigger: "Lower monthly payment",
    buying: "Escape from rent",
    state: "pain",
    liveStyles: ["hybrid"],
  },
  {
    slug: "denied-everywhere",
    number: 2,
    name: "Denied Everywhere",
    scenario: ["Rejected by traditional lenders", "Credit issues, has income"],
    psychology: ["Frustrated, skeptical, guarded", "Expects rejection"],
    trigger: "A path that doesn't end in 'no'",
    buying: "Second chance",
    state: "pain",
    liveStyles: [],
  },
  {
    slug: "i-own-land",
    number: 3,
    name: "I Own Land — Now What?",
    scenario: ["Has land already", "Doesn't understand next steps"],
    psychology: ["Confused, overwhelmed", "Wants direction"],
    trigger: "A clear next move",
    buying: "Clarity + execution",
    state: "aspiration",
    liveStyles: [],
  },
  {
    slug: "land-and-home",
    number: 4,
    name: "Land + Home Package",
    scenario: ["Wants land and home together", "Early research phase"],
    psychology: ["Overwhelmed, cautious", "Needs guidance"],
    trigger: "Step-by-step plan",
    buying: "Clear step-by-step plan",
    state: "aspiration",
    liveStyles: [],
  },
  {
    slug: "family-home",
    number: 5,
    name: "Working-Class Family",
    scenario: ["Crowded living situation", "Kids involved"],
    psychology: ["Emotional, future-focused", "Wants stability and pride"],
    trigger: "A better life for the kids",
    buying: "Better life for family",
    state: "aspiration",
    liveStyles: [],
  },
  {
    slug: "retiree-downsize",
    number: 6,
    name: "Retiree / Downsizer",
    scenario: ["Selling home or fixed income", "Wants simpler living"],
    psychology: ["Risk-averse, values comfort", "Avoids complexity"],
    trigger: "Simplicity, no surprises",
    buying: "Simplicity + security",
    state: "aspiration",
    liveStyles: [],
  },
  {
    slug: "need-it-now",
    number: 7,
    name: "Urgent / Time-Pressured",
    scenario: ["Divorce, eviction, relocation"],
    psychology: ["Stressed, decisive", "Wants speed and certainty"],
    trigger: "Move-in date, fast",
    buying: "Immediate solution",
    state: "pain",
    liveStyles: [],
  },
  {
    slug: "investor",
    number: 8,
    name: "Investor",
    scenario: ["Rental or flip strategy"],
    psychology: ["Logical, ROI-driven", "No emotion"],
    trigger: "Cap rate / cash-on-cash",
    buying: "Cash flow / returns",
    state: "pain",
    liveStyles: [],
  },
  {
    slug: "skeptical-buyer",
    number: 9,
    name: "Skeptical Buyer",
    scenario: ["Burned before or distrustful"],
    psychology: ["Guarded, slow decision-maker", "Needs transparency"],
    trigger: "Receipts, references, no fluff",
    buying: "Trust",
    state: "aspiration",
    liveStyles: [],
  },
  {
    slug: "first-generation",
    number: 10,
    name: "Immigrant / First-Gen",
    scenario: ["First-time U.S. property buyer"],
    psychology: ["Aspirational, family-driven", "Needs guidance"],
    trigger: "The dream, made concrete",
    buying: "Ownership / American dream",
    state: "aspiration",
    liveStyles: [],
  },
];

export default function Variations() {
  const totalCombos = variations.length * pageStyles.length;
  const liveCombos = variations.reduce(
    (acc, v) => acc + v.liveStyles.length,
    0,
  );
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
            Funnel architecture.
          </h1>
          <p className="mt-4 text-lg text-muted">
            <span className="font-semibold text-slate-900">
              {variations.length} buyer scenarios
            </span>{" "}
            ×{" "}
            <span className="font-semibold text-slate-900">
              {pageStyles.length} page styles
            </span>{" "}
            = {totalCombos} possible pages. Each page lives at{" "}
            <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-sm">
              /[scenario]/[style]
            </code>
            .
          </p>
          <div className="mt-6 grid gap-3 text-sm sm:grid-cols-3">
            <Stat value={String(totalCombos)} label="Possible pages" />
            <Stat value={String(liveCombos)} label="Live" />
            <Stat
              value={String(totalCombos - liveCombos)}
              label="Not built"
            />
          </div>
        </header>

        {/* PAGE STYLES REFERENCE */}
        <section className="mt-16">
          <div className="border-b border-border pb-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">
              Page styles
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              The {pageStyles.length} layouts each scenario can wear.
            </h2>
            <p className="mt-1 text-sm text-muted">
              Cold-traffic entry styles, mid-funnel filters, and terminal
              pages.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {pageStyles.map((s) => (
              <StyleCard key={s.slug} s={s} />
            ))}
          </div>
        </section>

        {/* MATRIX */}
        <BuyerSection
          eyebrow="Pain-driven"
          title="Move fast when the solution is clear."
          subtitle="Renters, credit-challenged, urgent buyers. Lead with the escape."
          variations={pain}
        />

        <BuyerSection
          eyebrow="Aspiration-driven"
          title="Move slowly without guidance."
          subtitle="Families, land buyers, retirees. Lead with the plan."
          variations={aspiration}
        />

        {/* CORE TRUTH */}
        <div className="mt-20 rounded-3xl border border-border bg-slate-900 p-8 text-white sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">
            Core principle
          </p>
          <p className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Cold traffic doesn&apos;t want to buy a home. They want to see if
            it&apos;s possible, understand the process, and feel like they
            won&apos;t get screwed.
          </p>
          <p className="mt-4 text-base text-slate-300">
            Every page above is a different door into that same answer.
          </p>
        </div>
      </main>
    </div>
  );
}

function StyleCard({ s }: { s: PageStyle }) {
  const groupLabel =
    s.group === "entry"
      ? "Entry"
      : s.group === "midfunnel"
        ? "Mid-funnel"
        : "Terminal";
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-surface p-5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-muted">/{s.slug}</span>
        <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
          {groupLabel}
        </span>
      </div>
      <h3 className="mt-2 text-lg font-semibold tracking-tight">{s.name}</h3>
      <p className="text-sm font-medium text-slate-700">{s.short}</p>
      <p className="mt-2 text-sm text-muted">{s.purpose}</p>
    </div>
  );
}

function BuyerSection({
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
        <span className="text-sm text-muted">{variations.length} scenarios</span>
      </div>

      <div className="mt-6 grid gap-4">
        {variations.map((v) => (
          <BuyerCard key={v.slug} v={v} />
        ))}
      </div>
    </section>
  );
}

function BuyerCard({ v }: { v: Variation }) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <div className="grid gap-6 md:grid-cols-[260px_1fr] md:items-start">
        <div>
          <p className="font-mono text-xs text-muted">
            #{String(v.number).padStart(2, "0")} · /{v.slug}
          </p>
          <h3 className="mt-1 text-xl font-semibold tracking-tight">
            {v.name}
          </h3>
          <dl className="mt-4 space-y-2 text-sm">
            <Meta label="Scenario" items={v.scenario} />
            <Meta label="Psychology" items={v.psychology} />
            <MetaText label="Trigger" value={v.trigger} />
            <MetaText label="Buying" value={v.buying} />
          </dl>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            Page style variations
          </p>
          <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {pageStyles.map((s) => (
              <StyleChip
                key={s.slug}
                buyerSlug={v.slug}
                style={s}
                live={v.liveStyles.includes(s.slug)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StyleChip({
  buyerSlug,
  style,
  live,
}: {
  buyerSlug: string;
  style: PageStyle;
  live: boolean;
}) {
  const href = `/${buyerSlug}/${style.slug}`;
  const inner = (
    <>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold tracking-tight">
          {style.name}
        </span>
        {live ? (
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-brand-strong">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Live
          </span>
        ) : (
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            —
          </span>
        )}
      </div>
      <p className="mt-0.5 font-mono text-[11px] text-muted">{href}</p>
      <p className="mt-1 text-xs text-muted">{style.short}</p>
    </>
  );

  if (live) {
    return (
      <Link
        href={href}
        className="group flex flex-col rounded-xl border border-brand/30 bg-brand/5 px-3 py-2.5 transition hover:border-brand/60 hover:bg-brand/10"
      >
        {inner}
      </Link>
    );
  }

  return (
    <div className="flex flex-col rounded-xl border border-dashed border-border bg-surface px-3 py-2.5 opacity-70">
      {inner}
    </div>
  );
}

function Meta({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted">
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

function MetaText({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted">
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
