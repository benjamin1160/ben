"use client";

import { useEffect, useState } from "react";

type Beat = {
  time: string;
  label: string;
  lines: string[];
};

const SCRIPT: { title: string; runtime: string; beats: Beat[] } = {
  title: "The Florida Renter's Exit Plan",
  runtime: "4:38",
  beats: [
    {
      time: "0:00",
      label: "Hook · Pattern interrupt",
      lines: [
        "If you're renting in Florida right now and your landlord just sent another \"market adjustment\" letter — stop. Don't sign it yet.",
        "In the next four minutes I'm going to show you the exact path Florida renters making $40K–$70K a year are using to stop renting and own a home for less than what they're paying now.",
        "I'm not selling you anything on this page. There's no credit pull. There's a real person who calls — that's it.",
      ],
    },
    {
      time: "0:25",
      label: "Problem · Name the pain",
      lines: [
        "Here's what nobody tells you. The average Florida renter will hand $22,000+ to a landlord this year and own nothing on December 31st.",
        "Rent in this state has climbed about 70% in a decade. Wages haven't. That gap is not in your head.",
        "And if you wait another twelve months, you don't stay still. Your $1,700 rent becomes $1,780. Then $1,860. Then the lease gets non-renewed and you start over somewhere worse.",
      ],
    },
    {
      time: "1:05",
      label: "Stakes · 10-year cost",
      lines: [
        "Run the math on ten more years. At a conservative 4.5% annual increase, $1,700 a month today is roughly $251,000 in rent over the next decade.",
        "$251,000 — handed to a stranger. Equity built: zero. That's the price of staying still.",
      ],
    },
    {
      time: "1:30",
      label: "False solutions · Why the obvious paths fail",
      lines: [
        "By now most renters have tried two things. One: a big-bank mortgage, where the loan officer takes one look at a 620 credit score and a thin file and says \"come back in two years.\"",
        "Two: rent-to-own scams that take your deposit and disappear when the seller's mood changes.",
        "Both feel like rejection. Both leave you exactly where you started. There's a third path most people don't know exists.",
      ],
    },
    {
      time: "2:05",
      label: "Solution reveal · The mechanism",
      lines: [
        "Florida has a quiet inventory of homes between $50,000 and $150,000. Real square footage. Real neighborhoods. Real ownership — your name on the deed.",
        "Modern manufactured homes on owned land or in resident-owned communities. Three bed, two bath, updated kitchen, $89,500 average.",
        "On a 20-year fixed loan with 5% down, that's a payment around $702 a month, all in — taxes, insurance, the whole thing. That's less than half of what most of our buyers were paying in rent.",
      ],
    },
    {
      time: "2:50",
      label: "Proof · Real buyers",
      lines: [
        "Marcus and Dani in Hillsborough County were paying $1,950 in Tampa. Got a hike letter every spring. Today their payment is $740. It's theirs. The hike letters stopped.",
        "Renee in Lake County didn't think anyone like her could buy a home in Florida in 2026. She closed in 73 days.",
        "We have buyers in the 580–680 credit band closing every week. Down payments most often run $3,000 to $5,000 — not $30,000.",
      ],
    },
    {
      time: "3:25",
      label: "Offer · The exact next step",
      lines: [
        "Here's the offer. You fill out the short form below this video — three questions, takes about a minute.",
        "A licensed Florida ownership specialist (one human, not a call center) calls you within one business day.",
        "You talk for ten or fifteen minutes. They tell you, honestly, whether ownership is realistic for you in the next 60 to 120 days. If it's not, they say so. If it is, you get a short list of real homes in your price range — not teaser ads.",
      ],
    },
    {
      time: "3:55",
      label: "Risk reversal · Why this is safe",
      lines: [
        "No credit pull. Nothing on your record. No obligation. No deposit. No \"sign here today\" pressure.",
        "If now isn't the right time, that's fine — we'll tell you what to fix and when to come back.",
      ],
    },
    {
      time: "4:15",
      label: "Urgency · Why now",
      lines: [
        "Two reasons not to wait. Inventory in this price band is genuinely tight; the $89K home today is the $96K home next spring.",
        "And your rent renewal lands before that. Every month you wait costs you twice — another rent check that builds zero equity, plus a higher entry point on the way out.",
      ],
    },
    {
      time: "4:30",
      label: "CTA · Clear close",
      lines: [
        "Fill out the form. Three questions. Real person calls. That's the whole step.",
        "I'll talk to you soon.",
      ],
    },
  ],
};

export default function VslPlayer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Play video — opens the full script as a transcript"
        className="group relative block w-full overflow-hidden rounded-3xl border border-border bg-slate-900 shadow-lg transition hover:shadow-xl"
      >
        <div
          className="relative aspect-video w-full"
          style={{
            background:
              "radial-gradient(1200px 600px at 30% 10%, rgba(15,118,110,0.55), transparent 60%), radial-gradient(900px 500px at 80% 90%, rgba(245,158,11,0.35), transparent 60%), linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f766e 100%)",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(1px_1px_at_25%_30%,rgba(255,255,255,0.18)_50%,transparent_51%),radial-gradient(1px_1px_at_70%_60%,rgba(255,255,255,0.14)_50%,transparent_51%),radial-gradient(1px_1px_at_50%_80%,rgba(255,255,255,0.12)_50%,transparent_51%)] [background-size:120px_120px]" />

          <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-rose-400" />
            Watch · {SCRIPT.runtime}
          </div>

          <div className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
            CC
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-2xl transition group-hover:scale-105 sm:h-24 sm:w-24">
              <span className="absolute inset-0 -z-10 rounded-full bg-white/30 blur-xl" />
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-1 h-9 w-9 sm:h-10 sm:w-10"
                aria-hidden="true"
              >
                <path d="M8 5.5v13l11-6.5z" />
              </svg>
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 sm:p-6">
            <p className="text-left text-lg font-semibold text-white sm:text-xl">
              {SCRIPT.title}
            </p>
            <p className="mt-1 text-left text-sm text-white/75">
              Why your rent is funding someone else&rsquo;s retirement — and the
              quiet Florida inventory most renters never hear about.
            </p>
            <div className="mt-3 flex items-center gap-3">
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/20">
                <div className="h-full w-[8%] rounded-full bg-white" />
              </div>
              <span className="text-[11px] font-medium text-white/70">
                0:21 / {SCRIPT.runtime}
              </span>
            </div>
          </div>
        </div>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="vsl-script-title"
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-brand">
                  Full transcript · {SCRIPT.runtime}
                </p>
                <h3
                  id="vsl-script-title"
                  className="mt-0.5 text-lg font-bold tracking-tight text-slate-900"
                >
                  {SCRIPT.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close transcript"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-slate-600 transition hover:bg-surface hover:text-slate-900"
              >
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
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-6 sm:px-8">
              <ol className="space-y-7">
                {SCRIPT.beats.map((b) => (
                  <li
                    key={b.time}
                    className="grid gap-3 sm:grid-cols-[88px_1fr]"
                  >
                    <div>
                      <p className="font-mono text-sm font-semibold text-brand-strong">
                        {b.time}
                      </p>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted">
                        {b.label}
                      </p>
                    </div>
                    <div className="space-y-3 text-base leading-relaxed text-slate-800">
                      {b.lines.map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border-t border-border bg-surface px-6 py-4 text-xs text-muted sm:px-8">
              Press <kbd className="rounded border border-border bg-white px-1.5 py-0.5 font-mono">Esc</kbd>{" "}
              to close · Tap outside to dismiss
            </div>
          </div>
        </div>
      )}
    </>
  );
}
