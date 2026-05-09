import Link from "next/link";
import { notFound } from "next/navigation";
import {
  findPageStyle,
  findVariation,
  pageStyles,
  variations,
} from "../../_data/funnel";
import QuizFunnel from "../../_templates/QuizFunnel";
import sickOfRentingQuiz from "../../_data/copy/sick-of-renting/quiz";
import pricedOutQuiz from "../../_data/copy/priced-out/quiz";

export async function generateStaticParams() {
  return variations.flatMap((v) =>
    pageStyles.map((s) => ({ buyer: v.slug, style: s.slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[buyer]/[style]">) {
  const { buyer, style } = await params;
  if (buyer === "sick-of-renting" && style === "quiz") {
    return {
      title: sickOfRentingQuiz.meta.title,
      description: sickOfRentingQuiz.meta.description,
    };
  }
  if (buyer === "priced-out" && style === "quiz") {
    return {
      title: pricedOutQuiz.meta.title,
      description: pricedOutQuiz.meta.description,
    };
  }
  const variation = findVariation(buyer);
  const pageStyle = findPageStyle(style);
  if (!variation || !pageStyle) return {};
  return {
    title: `${variation.name} · ${pageStyle.name} (preview)`,
    description: pageStyle.purpose,
  };
}

export default async function PlaceholderPage({
  params,
}: PageProps<"/[buyer]/[style]">) {
  const { buyer, style } = await params;
  const variation = findVariation(buyer);
  const pageStyle = findPageStyle(style);

  if (!variation || !pageStyle) notFound();

  if (buyer === "sick-of-renting" && style === "quiz") {
    return <QuizFunnel copy={sickOfRentingQuiz} />;
  }

  if (buyer === "priced-out" && style === "quiz") {
    return <QuizFunnel copy={pricedOutQuiz} />;
  }

  const groupLabel =
    pageStyle.group === "entry"
      ? "Entry"
      : pageStyle.group === "midfunnel"
        ? "Mid-funnel"
        : "Terminal";

  return (
    <div className="sunset theme-canvas flex flex-1 flex-col">
      <main className="mx-auto w-full max-w-3xl px-5 py-16 md:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-muted hover:text-slate-900"
        >
          <span aria-hidden>←</span> All pages
        </Link>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-dashed border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
          Not built yet · Preview
        </div>

        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
          {variation.name}
          <span className="text-muted"> · </span>
          {pageStyle.name}
        </h1>

        <p className="mt-4 font-mono text-sm text-muted">
          /{variation.slug}/{pageStyle.slug}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Card title="Buyer scenario" eyebrow={`#${String(variation.number).padStart(2, "0")}`}>
            <Field label="Scenario" items={variation.scenario} />
            <Field label="Psychology" items={variation.psychology} />
            <FieldText label="Trigger" value={variation.trigger} />
            <FieldText label="Buying" value={variation.buying} />
            <FieldText
              label="State"
              value={variation.state === "pain" ? "Pain-driven" : "Aspiration-driven"}
            />
          </Card>

          <Card title="Page style" eyebrow={groupLabel}>
            <FieldText label="Format" value={pageStyle.short} />
            <FieldText label="Purpose" value={pageStyle.purpose} />
          </Card>
        </div>

        <div className="mt-10 rounded-2xl border border-dashed border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            What goes here
          </p>
          <p className="mt-2 text-base text-slate-700">
            This combination hasn&apos;t been built yet. When it ships, this URL
            will render a <span className="font-semibold">{pageStyle.name}</span>{" "}
            layout tuned for the{" "}
            <span className="font-semibold">{variation.name}</span> scenario.
          </p>
        </div>
      </main>
    </div>
  );
}

function Card({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          {title}
        </p>
        <span className="rounded-full bg-surface px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
          {eyebrow}
        </span>
      </div>
      <dl className="mt-4 space-y-3 text-sm">{children}</dl>
    </div>
  );
}

function Field({ label, items }: { label: string; items: string[] }) {
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

function FieldText({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted">
        {label}
      </dt>
      <dd className="font-medium text-slate-900">{value}</dd>
    </div>
  );
}
