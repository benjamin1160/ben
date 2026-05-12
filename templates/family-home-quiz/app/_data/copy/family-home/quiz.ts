import type { QuizCopy } from "../../../_templates/QuizFunnel";

const copy: QuizCopy = {
  meta: {
    title: "60-Second Quiz — A Real Florida Home for Your Family",
    description:
      "Six questions, no credit pull. We'll send a real shortlist of 3 and 4-bedroom homes that actually fit your family — and your budget.",
  },
  hook: {
    eyebrow: "60-second quiz",
    headline: "Six questions and we'll send a shortlist for the family.",
    sub: "Three or four bedrooms, real yards, real deeds. We'll show you what fits — by family size, county, and the payment that lets you sleep.",
    trust: ["No credit pull", "No spam", "Takes about 60 seconds"],
    ctaPrimary: "Show me what fits",
    socialProof:
      "Used by 5,200+ Florida families this year tired of renewing the lease.",
  },
  questions: [
    {
      id: "frustration",
      question: "What's the worst part of renting right now?",
      helper: "Pick the one that hurts most.",
      type: "single",
      options: [
        "The kids are sharing rooms",
        "Rent goes up every year",
        "Landlord might sell out from under us",
        "Nothing we pay builds anything",
      ],
    },
    {
      id: "zip",
      question: "Where in Florida do you want the family?",
      helper: "ZIP, county, or rough area.",
      type: "zip",
    },
    {
      id: "bedrooms",
      question: "How many bedrooms does the family need?",
      type: "single",
      options: ["2", "3", "4", "5+"],
    },
    {
      id: "current-rent",
      question: "Roughly what are you paying in rent?",
      type: "single",
      options: [
        "Under $1,200/mo",
        "$1,200–$1,800/mo",
        "$1,800–$2,400/mo",
        "$2,400+/mo",
      ],
    },
    {
      id: "comfortable-payment",
      question: "What monthly payment would actually work?",
      helper: "All-in: mortgage, taxes, insurance.",
      type: "single",
      options: [
        "Under $700/mo",
        "$700–$1,000/mo",
        "$1,000–$1,300/mo",
        "$1,300+/mo",
      ],
    },
    {
      id: "down-payment",
      question: "How much do you have set aside for a down payment?",
      helper: "Most families need less than they expect — $3K–$5K is typical.",
      type: "single",
      options: [
        "Under $3,000",
        "$3,000–$7,000",
        "$7,000–$15,000",
        "$15,000+",
      ],
    },
  ],
  transition: {
    headline: "Matching homes to the family…",
    checklist: [
      "Cross-checking your county for 3 and 4-bedroom inventory",
      "Estimating your all-in monthly payment",
      "Filtering for school zones and family-friendly neighborhoods",
    ],
  },
  results: {
    eyebrow: "Good news",
    headline: "There are real homes for your family — at a payment that fits.",
    sub: "Drop your info below and we'll text you a shortlist of 3 and 4-bedroom homes with all-in monthly payments — usually within one business day.",
    consent:
      "By submitting, you agree to receive a text and a follow-up call. Standard message rates apply. Reply STOP anytime.",
    ctaPrimary: "Send me the shortlist",
    reassurance:
      "We never sell your info. One short conversation. No credit pull, no pressure.",
  },
  thankYou: {
    headline: "You're in. Watch your phone in the next 2 minutes.",
    sub: "We're texting you a shortlist for the family plus a link to grab a 15-minute call.",
    steps: [
      "Text arrives with your family's shortlist",
      "Pick a 15-minute call time that works",
      "We walk you through what fits and what doesn't",
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
