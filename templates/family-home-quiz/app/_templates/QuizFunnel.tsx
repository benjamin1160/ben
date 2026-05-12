"use client";

import { useEffect, useMemo, useState } from "react";

export type QuizQuestion = {
  id: string;
  question: string;
  helper?: string;
  type: "single" | "zip";
  options?: string[];
};

export type QuizCopy = {
  meta: { title: string; description: string };
  hook: {
    eyebrow: string;
    headline: string;
    sub: string;
    trust: string[];
    ctaPrimary: string;
    socialProof: string;
  };
  questions: QuizQuestion[];
  transition: { headline: string; checklist: string[] };
  results: {
    eyebrow: string;
    headline: string;
    sub: string;
    consent: string;
    ctaPrimary: string;
    reassurance: string;
  };
  thankYou: {
    headline: string;
    sub: string;
    steps: string[];
    footer: string;
  };
  micro: {
    required: string;
    badPhone: string;
    badEmail: string;
    submitting: string;
    submitError: string;
    back: string;
    change: string;
  };
};

type FormData = { firstName: string; phone: string; email: string };

export default function QuizFunnel({ copy }: { copy: QuizCopy }) {
  const totalQs = copy.questions.length;
  const HOOK = 0;
  const QSTART = 1;
  const QEND = totalQs;
  const TRANSITION = totalQs + 1;
  const RESULTS = totalQs + 2;
  const THANKYOU = totalQs + 3;

  const [step, setStep] = useState<number>(HOOK);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [form, setForm] = useState<FormData>({
    firstName: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (step !== TRANSITION) return;
    const t = setTimeout(() => setStep(RESULTS), 2400);
    return () => clearTimeout(t);
  }, [step, TRANSITION, RESULTS]);

  const progress = useMemo(() => {
    if (step < QSTART) return 0;
    if (step > QEND) return 100;
    return Math.round(((step - QSTART + 1) / totalQs) * 100);
  }, [step, totalQs, QSTART, QEND]);

  function selectAnswer(qid: string, value: string, autoAdvance: boolean) {
    setAnswers((a) => ({ ...a, [qid]: value }));
    if (autoAdvance) {
      setStep((s) => (s < QEND ? s + 1 : TRANSITION));
    }
  }

  function back() {
    setStep((s) => Math.max(HOOK, s - 1));
  }

  function validateForm(): boolean {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = copy.micro.required;
    if (!form.phone.trim()) e.phone = copy.micro.required;
    else if (!/^[0-9()+\-\s]{7,}$/.test(form.phone))
      e.phone = copy.micro.badPhone;
    if (!form.email.trim()) e.email = copy.micro.required;
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      e.email = copy.micro.badEmail;
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function submit() {
    if (!validateForm()) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      // Per-client lead destination plugs in here. Stubbed for now.
      await new Promise((r) => setTimeout(r, 600));
      setStep(THANKYOU);
    } catch {
      setSubmitError(copy.micro.submitError);
    } finally {
      setSubmitting(false);
    }
  }

  const onQuiz = step >= QSTART && step <= QEND;
  const currentQ = onQuiz ? copy.questions[step - QSTART] : null;

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      {onQuiz && (
        <div className="sticky top-0 z-10 h-1 w-full bg-surface">
          <div
            className="h-full bg-brand transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-5 py-10 sm:py-16">
        {step === HOOK && (
          <Hook copy={copy} onStart={() => setStep(QSTART)} />
        )}

        {onQuiz && currentQ && (
          <QuestionScreen
            key={currentQ.id}
            q={currentQ}
            index={step - QSTART}
            total={totalQs}
            value={answers[currentQ.id] || ""}
            onSelect={(v) =>
              selectAnswer(currentQ.id, v, currentQ.type === "single")
            }
            onNext={() =>
              step < QEND ? setStep(step + 1) : setStep(TRANSITION)
            }
            onBack={back}
            backLabel={copy.micro.back}
          />
        )}

        {step === TRANSITION && <Transition copy={copy} />}

        {step === RESULTS && (
          <Results
            copy={copy}
            form={form}
            setForm={setForm}
            errors={errors}
            submit={submit}
            submitting={submitting}
            submitError={submitError}
            onBack={() => setStep(QEND)}
          />
        )}

        {step === THANKYOU && <ThankYou copy={copy} />}
      </main>
    </div>
  );
}

function Hook({
  copy,
  onStart,
}: {
  copy: QuizCopy;
  onStart: () => void;
}) {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-strong">
        {copy.hook.eyebrow}
      </span>
      <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
        {copy.hook.headline}
      </h1>
      <p className="mt-4 text-lg text-muted">{copy.hook.sub}</p>

      <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
        {copy.hook.trust.map((t) => (
          <li key={t} className="flex items-center gap-1.5">
            <Check />
            <span>{t}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onStart}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-brand-strong active:translate-y-px sm:w-fit"
      >
        {copy.hook.ctaPrimary}
        <span aria-hidden>→</span>
      </button>

      <p className="mt-6 text-xs text-muted">{copy.hook.socialProof}</p>
    </div>
  );
}

function QuestionScreen({
  q,
  index,
  total,
  value,
  onSelect,
  onNext,
  onBack,
  backLabel,
}: {
  q: QuizQuestion;
  index: number;
  total: number;
  value: string;
  onSelect: (v: string) => void;
  onNext: () => void;
  onBack: () => void;
  backLabel: string;
}) {
  const canAdvance = q.type === "zip" ? value.trim().length >= 3 : !!value;

  return (
    <div className="flex flex-1 flex-col">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex w-fit items-center gap-1 text-sm text-muted transition hover:text-slate-900"
      >
        <span aria-hidden>←</span> {backLabel}
      </button>

      <p className="mt-8 font-mono text-xs text-muted">
        Question {index + 1} of {total}
      </p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
        {q.question}
      </h2>
      {q.helper && <p className="mt-2 text-sm text-muted">{q.helper}</p>}

      <div className="mt-6 flex flex-1 flex-col">
        {q.type === "single" && q.options && (
          <ul className="flex flex-col gap-2">
            {q.options.map((opt) => {
              const selected = value === opt;
              return (
                <li key={opt}>
                  <button
                    type="button"
                    onClick={() => onSelect(opt)}
                    className={
                      "flex w-full items-center justify-between rounded-xl border px-4 py-3.5 text-left text-base font-medium transition " +
                      (selected
                        ? "border-brand bg-brand/5 text-slate-900"
                        : "border-border bg-white text-slate-700 hover:border-slate-400 hover:bg-surface")
                    }
                  >
                    <span>{opt}</span>
                    <span
                      aria-hidden
                      className={
                        "h-4 w-4 rounded-full border transition " +
                        (selected
                          ? "border-brand bg-brand"
                          : "border-slate-300")
                      }
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        )}

        {q.type === "zip" && (
          <div>
            <input
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              maxLength={10}
              value={value}
              onChange={(e) => onSelect(e.target.value)}
              placeholder="Enter ZIP code"
              className="w-full rounded-xl border border-border bg-white px-4 py-4 text-lg font-medium tracking-wide outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
            <button
              type="button"
              onClick={onNext}
              disabled={!canAdvance}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-brand-strong active:translate-y-px disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-fit"
            >
              Continue <span aria-hidden>→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Transition({ copy }: { copy: QuizCopy }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center">
      <Spinner />
      <h2 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
        {copy.transition.headline}
      </h2>
      <ul className="mt-6 flex flex-col gap-2 text-left text-sm text-slate-700">
        {copy.transition.checklist.map((item, i) => (
          <li
            key={item}
            className="flex items-center gap-2 opacity-0"
            style={{
              animation: `fadeIn 400ms ease-out ${i * 600}ms forwards`,
            }}
          >
            <Check />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <style>{`@keyframes fadeIn { to { opacity: 1; } }`}</style>
    </div>
  );
}

function Results({
  copy,
  form,
  setForm,
  errors,
  submit,
  submitting,
  submitError,
  onBack,
}: {
  copy: QuizCopy;
  form: FormData;
  setForm: (v: FormData) => void;
  errors: Record<string, string>;
  submit: () => void;
  submitting: boolean;
  submitError: string | null;
  onBack: () => void;
}) {
  return (
    <div className="flex flex-1 flex-col">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex w-fit items-center gap-1 text-sm text-muted transition hover:text-slate-900"
      >
        <span aria-hidden>←</span> {copy.micro.change}
      </button>

      <span className="mt-8 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-strong">
        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
        {copy.results.eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {copy.results.headline}
      </h2>
      <p className="mt-3 text-base text-muted">{copy.results.sub}</p>

      <form
        className="mt-6 flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        <Field
          label="First name"
          name="firstName"
          autoComplete="given-name"
          value={form.firstName}
          onChange={(v) => setForm({ ...form, firstName: v })}
          error={errors.firstName}
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="(555) 123-4567"
          value={form.phone}
          onChange={(v) => setForm({ ...form, phone: v })}
          error={errors.phone}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={form.email}
          onChange={(v) => setForm({ ...form, email: v })}
          error={errors.email}
        />

        <p className="mt-1 text-xs text-muted">{copy.results.consent}</p>

        {submitError && (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
            {submitError}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-brand-strong active:translate-y-px disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {submitting ? copy.micro.submitting : copy.results.ctaPrimary}
          {!submitting && <span aria-hidden>→</span>}
        </button>

        <p className="text-center text-xs text-muted">
          {copy.results.reassurance}
        </p>
      </form>
    </div>
  );
}

function ThankYou({ copy }: { copy: QuizCopy }) {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="inline-flex w-fit items-center justify-center rounded-full bg-brand/10 p-3">
        <BigCheck />
      </div>
      <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
        {copy.thankYou.headline}
      </h2>
      <p className="mt-3 text-base text-muted">{copy.thankYou.sub}</p>

      <ol className="mt-8 flex flex-col gap-3">
        {copy.thankYou.steps.map((s, i) => (
          <li
            key={s}
            className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
              {i + 1}
            </span>
            <span className="pt-0.5 text-sm text-slate-700">{s}</span>
          </li>
        ))}
      </ol>

      <p className="mt-8 text-xs text-muted">{copy.thankYou.footer}</p>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  inputMode,
  autoComplete,
  placeholder,
  value,
  onChange,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  inputMode?: "text" | "numeric" | "tel" | "email";
  autoComplete?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <input
        type={type}
        name={name}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={
          "rounded-xl border bg-white px-4 py-3 text-base outline-none transition focus:ring-2 " +
          (error
            ? "border-red-400 focus:border-red-500 focus:ring-red-100"
            : "border-border focus:border-brand focus:ring-brand/20")
        }
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  );
}

function Check() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-brand"
      aria-hidden
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function BigCheck() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-brand"
      aria-hidden
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function Spinner() {
  return (
    <div
      className="h-10 w-10 animate-spin rounded-full border-4 border-brand/20 border-t-brand"
      aria-hidden
    />
  );
}
