"use client";

import { useState } from "react";

type FormState = {
  name: string;
  phone: string;
  rent: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  rent: "",
};

export default function SqueezeForm() {
  const [data, setData] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="theme-card p-8">
        <div
          className="mb-3 inline-flex h-10 w-10 items-center justify-center bg-brand/10 text-brand"
          style={{ borderRadius: "var(--radius-pill)" }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="theme-display text-3xl">
          Got it, {data.name || "friend"}.
        </h3>
        <p className="mt-2 text-muted">
          A Florida ownership specialist will call within one business day with
          real homes in your range — no credit pull, no obligation.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="theme-card p-6 sm:p-8"
      aria-label="See what you qualify for"
    >
      <h2 className="theme-display text-3xl sm:text-4xl">
        See your real Florida payment.
      </h2>
      <p className="mt-2 text-sm text-muted">
        Three quick fields. No credit pull. A real person calls — not a bot.
      </p>

      <div className="mt-6 grid gap-3">
        <label className="block">
          <span className="text-sm font-medium text-foreground/80">
            First name
          </span>
          <input
            type="text"
            required
            autoComplete="given-name"
            value={data.name}
            onChange={(e) => update("name", e.target.value)}
            className="mt-1 w-full border border-border bg-card px-4 py-3 text-base text-foreground outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
            style={{ borderRadius: "var(--radius-md)" }}
            placeholder="Alex"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-foreground/80">
            Mobile number
          </span>
          <input
            type="tel"
            required
            autoComplete="tel"
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="mt-1 w-full border border-border bg-card px-4 py-3 text-base text-foreground outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
            style={{ borderRadius: "var(--radius-md)" }}
            placeholder="(555) 555-0123"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-foreground/80">
            What you pay in rent now
          </span>
          <select
            required
            value={data.rent}
            onChange={(e) => update("rent", e.target.value)}
            className="mt-1 w-full border border-border bg-card px-4 py-3 text-base text-foreground outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
            style={{ borderRadius: "var(--radius-md)" }}
          >
            <option value="" disabled>
              Choose a range…
            </option>
            <option>Under $1,200</option>
            <option>$1,200–$1,700</option>
            <option>$1,700–$2,200</option>
            <option>$2,200+</option>
          </select>
        </label>
      </div>

      <button
        type="submit"
        className="theme-cta mt-6 inline-flex w-full items-center justify-center px-6 py-4 text-base font-semibold"
      >
        Show me my payment
      </button>
      <p className="mt-3 text-center text-xs text-muted">
        Under 60 seconds · No credit pull · No obligation
      </p>
    </form>
  );
}
