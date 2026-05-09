import type { QuizCopy } from "../../../_templates/QuizFunnel";

const copy: QuizCopy = {
  meta: {
    title: "Priced out of Florida? — 60-Second Affordable Home Quiz",
    description:
      "Pre-approved but locked out of every house you actually like? Six questions, no credit pull. See which Florida homes from $50K–$150K actually fit your budget.",
  },
  hook: {
    eyebrow: "60-second quiz",
    headline: "Pre-approved but priced out of every Florida home you want?",
    sub: "Six quick questions and we'll show you which Florida homes between $50K and $150K actually fit your budget — and what the all-in payment really looks like. No $300K stretches, no payments you'll resent in two years.",
    trust: ["No credit pull", "No spam", "Takes about 60 seconds"],
    ctaPrimary: "Show me what fits",
    socialProof:
      "Used by 8,400+ pre-approved Florida buyers this year who decided not to stretch into a payment they'd resent.",
  },
  questions: [
    {
      id: "frustration",
      question: "What's the worst part of the Florida market for you?",
      helper: "Pick the one that hurts most.",
      type: "single",
      options: [
        "Every house I like is way out of my budget",
        "I'm pre-approved but the payment is brutal",
        "I'm tired of waiting for prices to drop",
        "I refuse to bury myself in a 30-year mortgage",
      ],
    },
    {
      id: "zip",
      question: "Where in Florida do you want to live?",
      helper: "ZIP code or area — we'll check what's actually for sale near you.",
      type: "zip",
    },
    {
      id: "timeline",
      question: "How soon would you want to be in the new place?",
      type: "single",
      options: [
        "ASAP — I'm done waiting",
        "Next 3–6 months",
        "This year",
        "Just exploring for now",
      ],
    },
    {
      id: "preapproval",
      question: "What did the bank pre-approve you for?",
      helper:
        "Honest is fine. We use this to show you what's left over once you stop overstretching.",
      type: "single",
      options: [
        "Under $200K",
        "$200K–$300K",
        "$300K–$450K",
        "$450K+",
        "I haven't gotten pre-approved yet",
      ],
    },
    {
      id: "comfortable-payment",
      question: "What monthly payment would you actually be comfortable with?",
      helper:
        "Not the max the bank says — the number that lets you sleep, save, and live.",
      type: "single",
      options: [
        "Under $900/mo",
        "$900–$1,300/mo",
        "$1,300–$1,800/mo",
        "$1,800+/mo",
      ],
    },
    {
      id: "down-payment",
      question: "How much do you have set aside for a down payment?",
      helper:
        "On homes in this range, 5–10% is typical — most buyers need a lot less than they expect.",
      type: "single",
      options: [
        "Under $5,000",
        "$5,000–$10,000",
        "$10,000–$25,000",
        "$25,000+",
      ],
    },
  ],
  transition: {
    headline: "Matching you to homes that actually fit…",
    checklist: [
      "Cross-checking your budget with real Florida inventory",
      "Estimating your all-in monthly payment",
      "Filtering out anything you'd resent in 3 years",
    ],
  },
  results: {
    eyebrow: "Good news",
    headline: "There are homes that actually fit your budget.",
    sub: "Based on your answers, you likely have several Florida homes between $50K and $150K that fit your budget comfortably (not at the ceiling). Drop your info below and we'll text you a real shortlist with all-in monthly payments — not teaser numbers.",
    consent:
      "By submitting, you agree to receive a text and a follow-up call about your home shortlist. Standard message rates apply. Reply STOP anytime.",
    ctaPrimary: "Send me the shortlist",
    reassurance:
      "We never sell your info. One short conversation. No credit pull, no pressure.",
  },
  thankYou: {
    headline: "You're in. Watch your phone in the next 2 minutes.",
    sub: "We're texting you a shortlist of Florida homes that match your budget and area, plus a link to grab a 15-minute call with a specialist who'll walk you through the real numbers — and tell you straight if any of them are wrong for you.",
    steps: [
      "Text arrives with your shortlist + all-in monthly payments",
      "Pick a 15-minute call time that works for you",
      "We walk you through what fits and what doesn't — no pressure, no credit pull",
    ],
    footer:
      "Didn't get the text? Sometimes it takes a minute. Or call/text us anytime.",
  },
  micro: {
    required: "We need this to send you your shortlist.",
    badPhone: "That doesn't look like a phone number — try again?",
    badEmail: "Double-check your email — we'll send your shortlist there too.",
    submitting: "Hang tight, pulling your shortlist…",
    submitError:
      "Something went wrong on our end. Try again, or text us if it keeps happening.",
    back: "Back",
    change: "Change my answer",
  },
};

export default copy;
