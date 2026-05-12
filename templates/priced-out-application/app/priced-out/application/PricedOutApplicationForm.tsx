"use client";

import { useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  currentSituation: string;
  currentMonthly: string;
  preApproval: string;
  comfortablePayment: string;
  income: string;
  credit: string;
  downPayment: string;
  county: string;
  beds: string;
  budget: string;
  timeline: string;
  bestTime: string;
  notes: string;
  consent: boolean;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  currentSituation: "",
  currentMonthly: "",
  preApproval: "",
  comfortablePayment: "",
  income: "",
  credit: "",
  downPayment: "",
  county: "",
  beds: "",
  budget: "",
  timeline: "",
  bestTime: "",
  notes: "",
  consent: false,
};

export default function PricedOutApplicationForm() {
  const [data, setData] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-border bg-white p-8 shadow-sm sm:p-12">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Application received, {data.firstName || "friend"}.
        </h3>
        <p className="mt-3 text-base text-muted">
          A licensed Florida ownership specialist will read your file and
          call you at{" "}
          <span className="font-semibold text-slate-900">
            {data.phone || "the number you provided"}
          </span>{" "}
          within one business day
          {data.bestTime ? (
            <>
              {" "}
              — we&apos;ll aim for your preferred window:{" "}
              <span className="font-semibold text-slate-900">
                {data.bestTime}
              </span>
            </>
          ) : (
            ""
          )}
          .
        </p>
        <ul className="mt-6 space-y-3 text-base text-slate-700">
          <li className="flex items-start gap-3">
            <Bullet />
            We&apos;ll send a real shortlist in the{" "}
            {data.budget ? (
              <strong>{data.budget}</strong>
            ) : (
              <strong>$50K–$150K</strong>
            )}{" "}
            range that fits your county and bedroom count.
          </li>
          <li className="flex items-start gap-3">
            <Bullet />
            All-in monthly payments — taxes, insurance, the works. No teaser
            numbers.
          </li>
          <li className="flex items-start gap-3">
            <Bullet />
            If the math doesn&apos;t work, the specialist tells you straight
            and explains what to do instead.
          </li>
        </ul>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
      aria-label="Priced-out Florida home application"
    >
      <Section
        eyebrow="01 · About you"
        title="Who are we talking to?"
        subtitle="Just so the specialist knows who they're calling."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="First name" required>
            <input
              type="text"
              required
              autoComplete="given-name"
              value={data.firstName}
              onChange={(e) => update("firstName", e.target.value)}
              className={inputCls}
              placeholder="Alex"
            />
          </Field>
          <Field label="Last name" required>
            <input
              type="text"
              required
              autoComplete="family-name"
              value={data.lastName}
              onChange={(e) => update("lastName", e.target.value)}
              className={inputCls}
              placeholder="Rivera"
            />
          </Field>
          <Field label="Email" required>
            <input
              type="email"
              required
              autoComplete="email"
              value={data.email}
              onChange={(e) => update("email", e.target.value)}
              className={inputCls}
              placeholder="you@email.com"
            />
          </Field>
          <Field label="Mobile number" required>
            <input
              type="tel"
              required
              autoComplete="tel"
              value={data.phone}
              onChange={(e) => update("phone", e.target.value)}
              className={inputCls}
              placeholder="(555) 555-0123"
            />
          </Field>
        </div>
      </Section>

      <Section
        eyebrow="02 · Where you stand today"
        title="Current housing situation."
        subtitle="Helps us see the gap between what you pay now and what would actually work."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Where you are right now" required>
            <select
              required
              value={data.currentSituation}
              onChange={(e) => update("currentSituation", e.target.value)}
              className={inputCls}
            >
              <option value="" disabled>
                Choose…
              </option>
              <option>Renting in FL</option>
              <option>Renting outside FL, moving to FL</option>
              <option>Own a home, want to downsize</option>
              <option>Living with family</option>
              <option>Other</option>
            </select>
          </Field>
          <Field label="Current monthly housing cost" required>
            <select
              required
              value={data.currentMonthly}
              onChange={(e) => update("currentMonthly", e.target.value)}
              className={inputCls}
            >
              <option value="" disabled>
                Choose a range…
              </option>
              <option>Under $1,500</option>
              <option>$1,500–$2,200</option>
              <option>$2,200–$2,800</option>
              <option>$2,800–$3,500</option>
              <option>$3,500+</option>
            </select>
          </Field>
        </div>
      </Section>

      <Section
        eyebrow="03 · The bank vs. you"
        title="What the bank says vs. what actually works."
        subtitle="The most important question is the second one. No credit pull on any of this."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Pre-approved amount" required>
            <select
              required
              value={data.preApproval}
              onChange={(e) => update("preApproval", e.target.value)}
              className={inputCls}
            >
              <option value="" disabled>
                Choose…
              </option>
              <option>Under $200K</option>
              <option>$200K–$300K</option>
              <option>$300K–$450K</option>
              <option>$450K+</option>
              <option>Haven&apos;t gotten pre-approved yet</option>
            </select>
          </Field>
          <Field label="Monthly payment you&apos;d actually be comfortable with" required>
            <select
              required
              value={data.comfortablePayment}
              onChange={(e) => update("comfortablePayment", e.target.value)}
              className={inputCls}
            >
              <option value="" disabled>
                Not the bank&apos;s max…
              </option>
              <option>Under $900</option>
              <option>$900–$1,300</option>
              <option>$1,300–$1,800</option>
              <option>$1,800–$2,400</option>
              <option>$2,400+</option>
            </select>
          </Field>
          <Field label="Estimated credit score" required>
            <select
              required
              value={data.credit}
              onChange={(e) => update("credit", e.target.value)}
              className={inputCls}
            >
              <option value="" disabled>
                Best estimate…
              </option>
              <option>Under 620</option>
              <option>620–679</option>
              <option>680–719</option>
              <option>720–759</option>
              <option>760+</option>
              <option>Not sure</option>
            </select>
          </Field>
          <Field label="Household monthly income" required>
            <select
              required
              value={data.income}
              onChange={(e) => update("income", e.target.value)}
              className={inputCls}
            >
              <option value="" disabled>
                Choose a range…
              </option>
              <option>Under $4,500</option>
              <option>$4,500–$6,500</option>
              <option>$6,500–$9,000</option>
              <option>$9,000–$12,000</option>
              <option>$12,000+</option>
            </select>
          </Field>
          <Field label="Savings available for down payment" required>
            <select
              required
              value={data.downPayment}
              onChange={(e) => update("downPayment", e.target.value)}
              className={inputCls}
            >
              <option value="" disabled>
                Choose a range…
              </option>
              <option>Under $5,000</option>
              <option>$5,000–$10,000</option>
              <option>$10,000–$25,000</option>
              <option>$25,000–$50,000</option>
              <option>$50,000+</option>
            </select>
          </Field>
        </div>
      </Section>

      <Section
        eyebrow="04 · The home you want"
        title="Where, what, when."
        subtitle="If you're not sure, leave it. We'll work it out on the call."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Florida county / area" required>
            <select
              required
              value={data.county}
              onChange={(e) => update("county", e.target.value)}
              className={inputCls}
            >
              <option value="" disabled>
                Choose…
              </option>
              <option>Tampa Bay</option>
              <option>Orlando / Central FL</option>
              <option>Jacksonville</option>
              <option>Estero / SW FL</option>
              <option>Miami / South FL</option>
              <option>Panhandle / NW FL</option>
              <option>Anywhere in FL</option>
            </select>
          </Field>
          <Field label="Bedrooms needed">
            <select
              value={data.beds}
              onChange={(e) => update("beds", e.target.value)}
              className={inputCls}
            >
              <option value="">No preference</option>
              <option>2 bed</option>
              <option>3 bed</option>
              <option>4+ bed</option>
            </select>
          </Field>
          <Field label="Comfortable purchase price" required>
            <select
              required
              value={data.budget}
              onChange={(e) => update("budget", e.target.value)}
              className={inputCls}
            >
              <option value="" disabled>
                Choose a range…
              </option>
              <option>$50K–$80K</option>
              <option>$80K–$110K</option>
              <option>$110K–$150K</option>
              <option>Open — show me what fits</option>
            </select>
          </Field>
          <Field label="When you&apos;d want to move in" required>
            <select
              required
              value={data.timeline}
              onChange={(e) => update("timeline", e.target.value)}
              className={inputCls}
            >
              <option value="" disabled>
                Honest answer…
              </option>
              <option>ASAP (next 30 days)</option>
              <option>1–3 months</option>
              <option>3–6 months</option>
              <option>6–12 months</option>
              <option>Just exploring</option>
            </select>
          </Field>
        </div>
      </Section>

      <Section
        eyebrow="05 · The call"
        title="When&apos;s a good time to reach you?"
        subtitle="One human, one call, 10–15 minutes. Not a call center."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Best time to call" required>
            <select
              required
              value={data.bestTime}
              onChange={(e) => update("bestTime", e.target.value)}
              className={inputCls}
            >
              <option value="" disabled>
                Choose a window…
              </option>
              <option>Mornings (8a–12p)</option>
              <option>Afternoons (12p–5p)</option>
              <option>Evenings (5p–8p)</option>
              <option>Weekends only</option>
              <option>Any time, just call</option>
            </select>
          </Field>
          <Field label="Anything else we should know?">
            <textarea
              value={data.notes}
              onChange={(e) => update("notes", e.target.value)}
              rows={3}
              className={`${inputCls} min-h-[100px] resize-y`}
              placeholder="Specific neighborhood you&apos;re trying to be near, kids in school, self-employed income, anything you want the specialist to see before the call."
            />
          </Field>
        </div>
      </Section>

      <div className="rounded-2xl border border-border bg-surface p-5">
        <label className="flex items-start gap-3 text-sm text-slate-700">
          <input
            type="checkbox"
            required
            checked={data.consent}
            onChange={(e) => update("consent", e.target.checked)}
            className="mt-0.5 h-4 w-4 flex-none rounded border-border text-brand focus:ring-brand"
          />
          <span>
            I&apos;m okay with a Florida ownership specialist calling or
            texting me about homes in my range. No spam, no third parties, no
            credit pull. I can opt out any time.
          </span>
        </label>
      </div>

      <div className="flex flex-col items-center gap-3">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-xl bg-brand px-7 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-brand-strong sm:w-auto sm:px-12"
        >
          Submit my application
        </button>
        <p className="text-center text-xs text-muted">
          Reviewed by a human · One business day · No credit pull
        </p>
      </div>
    </form>
  );
}

const inputCls =
  "mt-1 w-full rounded-xl border border-border bg-white px-4 py-3 text-base outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";

function Section({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8">
      <legend className="px-2 text-[11px] font-semibold uppercase tracking-wider text-brand">
        {eyebrow}
      </legend>
      <h2
        className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p className="mt-1 text-sm text-muted">{subtitle}</p>
      <div className="mt-6">{children}</div>
    </fieldset>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span
        className="text-sm font-medium text-slate-700"
        dangerouslySetInnerHTML={{
          __html:
            label +
            (required
              ? ""
              : ' <span class="ml-1 text-xs font-normal text-muted">(optional)</span>'),
        }}
      />
      {children}
    </label>
  );
}

function Bullet() {
  return (
    <span
      aria-hidden
      className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand"
    />
  );
}
