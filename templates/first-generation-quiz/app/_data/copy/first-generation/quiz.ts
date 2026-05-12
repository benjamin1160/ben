import type { QuizCopy } from "../../../_templates/QuizFunnel";

const copy: QuizCopy = {
  meta: {
    title: "First U.S. Home — 60-Second Bilingual Quiz",
    description:
      "Six questions, no credit pull. We'll send a real Florida shortlist plus the whole homebuying process in plain language. ITIN-friendly, English or Spanish.",
  },
  hook: {
    eyebrow: "60-second quiz · ENG/ESP",
    headline: "Six questions and we'll send the path — in your language.",
    sub: "Real Florida shortlist plus the whole process explained — paso a paso. ITIN-friendly. No credit pull.",
    trust: ["No credit pull", "ITIN-friendly", "Bilingual specialists"],
    ctaPrimary: "Show me the path",
    socialProof:
      "Used by 4,400+ first-generation Florida buyers this year.",
  },
  questions: [
    {
      id: "situation",
      question: "What's the situation?",
      type: "single",
      options: [
        "First U.S. home, have SSN",
        "First U.S. home, ITIN only",
        "Mixed family (some SSN, some ITIN)",
        "Helping family buy first home",
        "Not sure where to start",
      ],
    },
    {
      id: "zip",
      question: "Where in Florida do you want the family?",
      helper: "ZIP, county, or rough area — near family is fine.",
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
      question: "Roughly what's your current rent?",
      type: "single",
      options: [
        "Under $1,200/mo",
        "$1,200–$1,800/mo",
        "$1,800–$2,400/mo",
        "$2,400+/mo",
        "Living with family / no rent",
      ],
    },
    {
      id: "comfortable-payment",
      question: "Comfortable monthly payment range?",
      helper: "All-in: payment + tax + insurance.",
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
      question: "Money saved for a down payment",
      helper: "Most first-time buyers need only $5K–$10K — not 20%.",
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
    headline: "Building your path…",
    checklist: [
      "Cross-checking inventory in your county",
      "Confirming ITIN-friendly lender match",
      "Filtering for school zones near family",
    ],
  },
  results: {
    eyebrow: "Good news",
    headline: "There's a real path for the family.",
    sub: "Drop your info below and we'll text a shortlist plus the process explained — paso a paso. Usually within one business day.",
    consent:
      "By submitting, you agree to receive a text and a follow-up call. Standard message rates apply. Reply STOP anytime.",
    ctaPrimary: "Send me the path",
    reassurance:
      "We never sell your info. ITIN-friendly. Bilingual specialists.",
  },
  thankYou: {
    headline: "Recibido. Watch your phone in the next 2 minutes.",
    sub: "We're texting your shortlist + the process plus a link to grab a 15-minute call — in your language.",
    steps: [
      "Text arrives with your family's path",
      "Pick a 15-minute call time",
      "We walk you through it — paso a paso",
    ],
    footer:
      "Didn't get the text? Sometimes it takes a minute. Call/text us anytime.",
  },
  micro: {
    required: "We need this to send you the path.",
    badPhone: "That doesn't look like a phone number — try again?",
    badEmail: "Double-check your email — we'll send your path there too.",
    submitting: "Hang tight, building your path…",
    submitError:
      "Something went wrong on our end. Try again, or text us if it keeps happening.",
    back: "Back",
    change: "Change my answer",
  },
};

export default copy;
