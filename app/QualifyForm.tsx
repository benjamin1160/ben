"use client";

import { useState } from "react";

type Step = 0 | 1 | 2 | 3 | 4;

type FormState = {
  rent: string;
  county: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
};

const initialState: FormState = {
  rent: "",
  county: "",
  timeline: "",
  name: "",
  email: "",
  phone: "",
};

export default function QualifyForm() {
  const [step, setStep] = useState<Step>(0);
  const [data, setData] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 4;
  const progress = Math.round((step / totalSteps) * 100);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function next() {
    setStep((s) => (Math.min(4, s + 1) as Step));
  }

  function back() {
    setStep((s) => (Math.max(0, s - 1) as Step));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
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
        <h3 className="text-2xl font-semibold tracking-tight">
          You&apos;re on the list, {data.name || "friend"}.
        </h3>
        <p className="mt-2 text-muted">
          A Florida ownership specialist will reach out within one business day
          with homes in your price range and the next steps. No obligation, no
          pressure.
        </p>
        <ul className="mt-6 space-y-2 text-sm text-slate-700">
          <li>• We&apos;ll match you to homes from $50K–$150K near you.</li>
          <li>• You&apos;ll see real monthly payment numbers, not estimates.</li>
          <li>• If now isn&apos;t the right time, that&apos;s okay too.</li>
        </ul>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs font-medium text-muted">
          <span>
            Step {Math.min(step + 1, totalSteps)} of {totalSteps}
          </span>
          <span>{progress}% complete</span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface">
          <div
            className="h-full bg-brand transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {step === 0 && (
        <div>
          <h3 className="text-xl font-semibold tracking-tight">
            What are you paying in rent right now?
          </h3>
          <p className="mt-1 text-sm text-muted">
            We use this to compare against an ownership payment.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {["Under $1,200", "$1,200–$1,700", "$1,700–$2,200", "$2,200+"].map(
              (option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    update("rent", option);
                    next();
                  }}
                  className={`rounded-xl border px-3 py-3 text-sm font-medium transition ${
                    data.rent === option
                      ? "border-brand bg-brand/5 text-brand-strong"
                      : "border-border bg-white text-slate-700 hover:border-brand/50"
                  }`}
                >
                  {option}
                </button>
              ),
            )}
          </div>
        </div>
      )}

      {step === 1 && (
        <div>
          <h3 className="text-xl font-semibold tracking-tight">
            Where in Florida are you looking?
          </h3>
          <p className="mt-1 text-sm text-muted">
            Pick the closest area. We have homes across the state.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              "Tampa Bay",
              "Orlando / Central FL",
              "Jacksonville",
              "Fort Myers / SW FL",
              "Miami / South FL",
              "Anywhere in FL",
            ].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  update("county", option);
                  next();
                }}
                className={`rounded-xl border px-3 py-3 text-sm font-medium transition ${
                  data.county === option
                    ? "border-brand bg-brand/5 text-brand-strong"
                    : "border-border bg-white text-slate-700 hover:border-brand/50"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="text-xl font-semibold tracking-tight">
            When would you want to move in?
          </h3>
          <p className="mt-1 text-sm text-muted">
            Honest answer is fine. There&apos;s no wrong one.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {["ASAP", "1–3 months", "3–6 months", "Just exploring"].map(
              (option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    update("timeline", option);
                    next();
                  }}
                  className={`rounded-xl border px-3 py-3 text-sm font-medium transition ${
                    data.timeline === option
                      ? "border-brand bg-brand/5 text-brand-strong"
                      : "border-border bg-white text-slate-700 hover:border-brand/50"
                  }`}
                >
                  {option}
                </button>
              ),
            )}
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 className="text-xl font-semibold tracking-tight">
            Where should we send your match?
          </h3>
          <p className="mt-1 text-sm text-muted">
            We&apos;ll text or email a short list of homes that fit. No spam,
            no pressure.
          </p>
          <div className="mt-5 grid gap-3">
            <label className="block">
              <span className="text-sm font-medium text-slate-700">
                First name
              </span>
              <input
                type="text"
                required
                value={data.name}
                onChange={(e) => update("name", e.target.value)}
                className="mt-1 w-full rounded-xl border border-border bg-white px-4 py-3 text-base outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                placeholder="Alex"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Email</span>
              <input
                type="email"
                required
                value={data.email}
                onChange={(e) => update("email", e.target.value)}
                className="mt-1 w-full rounded-xl border border-border bg-white px-4 py-3 text-base outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                placeholder="you@email.com"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-700">
                Phone (optional)
              </span>
              <input
                type="tel"
                value={data.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="mt-1 w-full rounded-xl border border-border bg-white px-4 py-3 text-base outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                placeholder="(555) 555-0123"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-brand px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-brand-strong"
          >
            See What I Qualify For
          </button>
          <p className="mt-3 text-center text-xs text-muted">
            Takes under 60 seconds. No credit pull. No obligation.
          </p>
        </div>
      )}

      {step > 0 && step < 3 && (
        <div className="mt-6 flex items-center justify-between text-sm">
          <button
            type="button"
            onClick={back}
            className="text-muted hover:text-slate-900"
          >
            ← Back
          </button>
          <span className="text-xs text-muted">Tap an option to continue</span>
        </div>
      )}

      {step === 3 && (
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={back}
            className="text-sm text-muted hover:text-slate-900"
          >
            ← Back
          </button>
        </div>
      )}
    </form>
  );
}
