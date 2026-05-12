import type { QuizCopy } from "../../../_templates/QuizFunnel";

const copy: QuizCopy = {
  meta: {
    title: "Skeptical-Buyer Verification Quiz — Florida Home Path",
    description:
      "Six questions, no credit pull. We'll send you our receipts package — recorded deeds, references, license links — before any call.",
  },
  hook: {
    eyebrow: "60-second quiz · Receipts first",
    headline: "Six questions, then receipts. No call until you ask.",
    sub: "Tell us what burned you and what you want to verify. We send the receipts package — public-record deeds, references with phone numbers, license-verification links.",
    trust: ["No credit pull", "Receipts first", "No call until you ask"],
    ctaPrimary: "Send me receipts",
    socialProof:
      "Used by 1,400+ FL buyers this year who wanted proof before a pitch.",
  },
  questions: [
    {
      id: "burned",
      question: "What burned you in real estate before?",
      type: "single",
      options: [
        "Bait-and-switch listings",
        "Surprise closing costs",
        "Pressure / hard close",
        "Salesperson who lied",
        "All of the above",
        "Cautious by default",
      ],
    },
    {
      id: "verify",
      question: "What do you most want to verify?",
      type: "single",
      options: [
        "That this is a real licensed business",
        "That past buyers were happy",
        "That all-in payments are real",
        "That homes aren't bait",
        "All of the above",
      ],
    },
    {
      id: "zip",
      question: "Where in Florida do you want to land?",
      helper: "ZIP, county, or rough area.",
      type: "zip",
    },
    {
      id: "bedrooms",
      question: "Bedrooms you need",
      type: "single",
      options: ["1", "2", "3", "4+"],
    },
    {
      id: "comfortable-payment",
      question: "What monthly payment fits?",
      helper: "All-in: payment + tax + insurance + lot rent if any.",
      type: "single",
      options: [
        "Under $700/mo",
        "$700–$1,000/mo",
        "$1,000–$1,300/mo",
        "$1,300+/mo",
      ],
    },
    {
      id: "timeline",
      question: "When would you actually move?",
      type: "single",
      options: [
        "Once I've verified everything",
        "Next 60–90 days",
        "3–6 months",
        "Just exploring",
      ],
    },
  ],
  transition: {
    headline: "Building your receipts package…",
    checklist: [
      "Pulling 30 most recent recorded deeds",
      "Confirming three references for your area",
      "Linking specialist license verifications",
    ],
  },
  results: {
    eyebrow: "Receipts ready",
    headline: "Drop your email — we send the proof.",
    sub: "We'll send the receipts package by email within hours — recorded deeds, references with phone numbers, FL DBPR license links. Verify everything yourself. We won't call until you ask.",
    consent:
      "By submitting, you agree to receive an email with verification materials. We won't call unless you request it. Reply STOP anytime.",
    ctaPrimary: "Send me the receipts",
    reassurance:
      "We never sell your info. No call until you ask. No chasing if you don't.",
  },
  thankYou: {
    headline: "Receipts package incoming — verify yourself.",
    sub: "Recorded deeds, references with phone numbers, license verifications. Within hours. Email reply only — we don't dial first.",
    steps: [
      "Receipts package arrives in your inbox",
      "You verify everything at your pace",
      "Reply when (or if) you want a call",
    ],
    footer:
      "Didn't get the email? Check spam — sometimes heavy attachments end up there. Or text us anytime.",
  },
  micro: {
    required: "We need this to send you the receipts.",
    badPhone: "That doesn't look like a phone number — try again?",
    badEmail: "Double-check your email — that's where the receipts go.",
    submitting: "Hang tight, building your receipts package…",
    submitError:
      "Something went wrong on our end. Try again, or email us if it keeps happening.",
    back: "Back",
    change: "Change my answer",
  },
};

export default copy;
