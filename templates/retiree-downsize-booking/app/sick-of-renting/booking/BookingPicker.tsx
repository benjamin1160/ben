"use client";

import { useMemo, useState } from "react";

const TIME_SLOTS_BY_DAY: Record<string, string[]> = {
  weekday: [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "11:30 AM",
    "1:00 PM",
    "2:30 PM",
    "3:00 PM",
    "4:30 PM",
    "5:30 PM",
  ],
  weekend: ["10:00 AM", "11:00 AM", "12:30 PM", "2:00 PM", "3:30 PM"],
};

type Day = {
  iso: string;
  weekday: string;
  monthDay: string;
  isWeekend: boolean;
};

function buildDays(): Day[] {
  const days: Day[] = [];
  const now = new Date();
  for (let i = 1; i <= 10; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    const weekday = d.toLocaleDateString("en-US", { weekday: "short" });
    const monthDay = d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    const dow = d.getDay();
    days.push({
      iso: d.toISOString().slice(0, 10),
      weekday,
      monthDay,
      isWeekend: dow === 0 || dow === 6,
    });
  }
  return days;
}

export default function BookingPicker() {
  const days = useMemo(() => buildDays(), []);
  const [dayIso, setDayIso] = useState<string>(days[0].iso);
  const [time, setTime] = useState<string>("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const selectedDay = days.find((d) => d.iso === dayIso) ?? days[0];
  const slots = selectedDay.isWeekend
    ? TIME_SLOTS_BY_DAY.weekend
    : TIME_SLOTS_BY_DAY.weekday;

  function handleConfirm(e: React.FormEvent) {
    e.preventDefault();
    setConfirmed(true);
  }

  if (confirmed) {
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
          You&apos;re booked, {name || "friend"}.
        </h3>
        <p className="mt-3 text-base text-muted">
          A licensed Florida ownership specialist will call you on{" "}
          <span className="font-semibold text-slate-900">
            {selectedDay.weekday}, {selectedDay.monthDay}
          </span>{" "}
          at <span className="font-semibold text-slate-900">{time}</span> ET at{" "}
          <span className="font-semibold text-slate-900">
            {phone || "the number you provided"}
          </span>
          .
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <Detail label="When" value={`${selectedDay.weekday} · ${selectedDay.monthDay}`} />
          <Detail label="Time" value={`${time} ET`} />
          <Detail label="Length" value="15 min" />
        </div>
        <p className="mt-6 text-sm text-muted">
          Calendar invite headed to your inbox in the next minute. Need to
          reschedule? Just reply to that email — no judgment.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleConfirm}
      className="rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8"
      aria-label="Book a call slot"
    >
      <p className="text-[11px] font-semibold uppercase tracking-wider text-brand">
        Step 1 · Pick a day
      </p>
      <div className="mt-3 -mx-1 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible">
        {days.map((d) => {
          const active = d.iso === dayIso;
          return (
            <button
              key={d.iso}
              type="button"
              onClick={() => {
                setDayIso(d.iso);
                setTime("");
              }}
              className={`flex min-w-[84px] flex-none flex-col items-center rounded-xl border px-3 py-3 text-sm transition ${
                active
                  ? "border-brand bg-brand/5 text-brand-strong"
                  : "border-border bg-white text-slate-700 hover:border-brand/50"
              }`}
            >
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                {d.weekday}
              </span>
              <span className="mt-1 text-base font-semibold tracking-tight">
                {d.monthDay}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-8 text-[11px] font-semibold uppercase tracking-wider text-brand">
        Step 2 · Pick a time (Eastern)
      </p>
      <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
        {slots.map((slot) => {
          const active = slot === time;
          return (
            <button
              key={slot}
              type="button"
              onClick={() => setTime(slot)}
              className={`rounded-xl border px-3 py-3 text-sm font-medium transition ${
                active
                  ? "border-brand bg-brand/5 text-brand-strong"
                  : "border-border bg-white text-slate-700 hover:border-brand/50"
              }`}
            >
              {slot}
            </button>
          );
        })}
      </div>
      <p className="mt-2 text-xs text-muted">
        All times shown in Eastern (FL local). Times you don&apos;t see are
        already taken.
      </p>

      <p className="mt-8 text-[11px] font-semibold uppercase tracking-wider text-brand">
        Step 3 · Confirm
      </p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">First name</span>
          <input
            type="text"
            required
            autoComplete="given-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-xl border border-border bg-white px-4 py-3 text-base outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
            placeholder="Alex"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">
            Mobile number
          </span>
          <input
            type="tel"
            required
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 w-full rounded-xl border border-border bg-white px-4 py-3 text-base outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
            placeholder="(555) 555-0123"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={!time}
        className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-6 py-4 text-base font-semibold text-white shadow-sm transition ${
          time ? "bg-brand hover:bg-brand-strong" : "cursor-not-allowed bg-slate-300"
        }`}
      >
        {time
          ? `Book ${selectedDay.weekday} ${selectedDay.monthDay} at ${time}`
          : "Pick a time to continue"}
      </button>
      <p className="mt-3 text-center text-xs text-muted">
        15 minutes · One human · No credit pull · Reschedule any time
      </p>
    </form>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold tracking-tight text-slate-900">
        {value}
      </p>
    </div>
  );
}
