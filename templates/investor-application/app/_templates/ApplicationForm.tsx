"use client";

import { useState } from "react";
import type { ApplicationFormCopy } from "./types";

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

export default function ApplicationForm({
  copy,
}: {
  copy: ApplicationFormCopy;
}) {
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
          {copy.successTitle.replace("{name}", data.firstName || "friend")}
        </h3>
        <p className="mt-3 text-base text-muted">{copy.successBody}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-10"
    >
      <Section eyebrow={copy.sectionAEyebrow} title={copy.sectionATitle}>
        <Grid>
          <Text label="First name" value={data.firstName} onChange={(v) => update("firstName", v)} required autoComplete="given-name" />
          <Text label="Last name" value={data.lastName} onChange={(v) => update("lastName", v)} required autoComplete="family-name" />
          <Text label="Email" type="email" value={data.email} onChange={(v) => update("email", v)} required autoComplete="email" />
          <Text label="Mobile number" type="tel" value={data.phone} onChange={(v) => update("phone", v)} required autoComplete="tel" />
        </Grid>
      </Section>

      <Section eyebrow={copy.sectionBEyebrow} title={copy.sectionBTitle}>
        <Select
          label={copy.q.currentSituation.label}
          options={copy.q.currentSituation.options}
          value={data.currentSituation}
          onChange={(v) => update("currentSituation", v)}
          required
        />
        <Text
          label={copy.q.currentMonthly.label}
          value={data.currentMonthly}
          onChange={(v) => update("currentMonthly", v)}
          placeholder={copy.q.currentMonthly.placeholder}
        />
        <Select
          label={copy.q.preApproval.label}
          options={copy.q.preApproval.options}
          value={data.preApproval}
          onChange={(v) => update("preApproval", v)}
          required
        />
        <Select
          label={copy.q.comfortablePayment.label}
          options={copy.q.comfortablePayment.options}
          value={data.comfortablePayment}
          onChange={(v) => update("comfortablePayment", v)}
          required
        />
      </Section>

      <Section eyebrow={copy.sectionCEyebrow} title={copy.sectionCTitle}>
        <Grid>
          <Select
            label={copy.q.income.label}
            options={copy.q.income.options}
            value={data.income}
            onChange={(v) => update("income", v)}
            required
          />
          <Select
            label={copy.q.credit.label}
            options={copy.q.credit.options}
            value={data.credit}
            onChange={(v) => update("credit", v)}
            required
          />
          <Select
            label={copy.q.downPayment.label}
            options={copy.q.downPayment.options}
            value={data.downPayment}
            onChange={(v) => update("downPayment", v)}
            required
          />
          <Text
            label={copy.q.county.label}
            value={data.county}
            onChange={(v) => update("county", v)}
            placeholder={copy.q.county.placeholder}
          />
        </Grid>
      </Section>

      <Section eyebrow={copy.sectionDEyebrow} title={copy.sectionDTitle}>
        <Grid>
          <Select
            label={copy.q.beds.label}
            options={copy.q.beds.options}
            value={data.beds}
            onChange={(v) => update("beds", v)}
          />
          <Select
            label={copy.q.budget.label}
            options={copy.q.budget.options}
            value={data.budget}
            onChange={(v) => update("budget", v)}
          />
          <Select
            label={copy.q.timeline.label}
            options={copy.q.timeline.options}
            value={data.timeline}
            onChange={(v) => update("timeline", v)}
            required
          />
          <Select
            label={copy.q.bestTime.label}
            options={copy.q.bestTime.options}
            value={data.bestTime}
            onChange={(v) => update("bestTime", v)}
          />
        </Grid>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">
            {copy.q.notes.label}
          </span>
          <textarea
            rows={4}
            value={data.notes}
            onChange={(e) => update("notes", e.target.value)}
            placeholder={copy.q.notes.placeholder}
            className="mt-1 w-full rounded-xl border border-border bg-white px-4 py-3 text-base outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </label>
      </Section>

      <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-border bg-surface p-4 text-sm text-slate-700">
        <input
          type="checkbox"
          required
          checked={data.consent}
          onChange={(e) => update("consent", e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-border text-brand focus:ring-brand"
        />
        <span>{copy.consent}</span>
      </label>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-xl bg-brand px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-brand-strong"
      >
        {copy.submit}
      </button>
    </form>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="space-y-4">
      <legend className="-mt-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          {eyebrow}
        </p>
        <h3 className="mt-1 text-xl font-bold tracking-tight">{title}</h3>
      </legend>
      {children}
    </fieldset>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2">{children}</div>;
}

function Text({
  label,
  value,
  onChange,
  required,
  type = "text",
  placeholder,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="mt-1 w-full rounded-xl border border-border bg-white px-4 py-3 text-base outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </label>
  );
}

function Select({
  label,
  options,
  value,
  onChange,
  required,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <select
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-xl border border-border bg-white px-4 py-3 text-base outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
      >
        <option value="" disabled>
          Choose…
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
