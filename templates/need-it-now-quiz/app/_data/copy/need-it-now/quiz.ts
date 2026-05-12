import type { QuizCopy } from "../../../_templates/QuizFunnel";

const copy: QuizCopy = {
  meta: {
    title: "Need a Florida home in 30–60 days? — 60-Second Quiz",
    description:
      "Six questions, no credit pull. We'll send a same-day shortlist of move-in-ready Florida homes that can close in your window.",
  },
  hook: {
    eyebrow: "60-second quiz · Priority file",
    headline: "Six questions and we'll know if your deadline is achievable.",
    sub: "Move-in-ready inventory only. Honest screen. We'll tell you up front if your timeline is too tight.",
    trust: ["No credit pull", "Same-day shortlist", "Honest if it's too tight"],
    ctaPrimary: "Show me what's available",
    socialProof:
      "Used by 1,800+ Florida buyers this year racing a real deadline.",
  },
  questions: [
    {
      id: "trigger",
      question: "What's pushing the timeline?",
      type: "single",
      options: [
        "Divorce / separation",
        "Eviction / landlord selling",
        "Relocation for work",
        "Lease ending",
        "Other",
      ],
    },
    {
      id: "deadline",
      question: "When do you need to be in the new place?",
      helper: "Honest is best — we'll tell you straight if it's too tight.",
      type: "single",
      options: [
        "14 days or less",
        "15–30 days",
        "30–60 days",
        "60–90 days",
        "Flexible but soon",
      ],
    },
    {
      id: "zip",
      question: "Where in Florida do you need to land?",
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
      id: "cash",
      question: "Cash on hand for the move",
      type: "single",
      options: [
        "Under $5,000",
        "$5,000–$15,000",
        "$15,000–$50,000",
        "$50,000+",
      ],
    },
  ],
  transition: {
    headline: "Screening for your deadline…",
    checklist: [
      "Pulling move-in-ready inventory in your area",
      "Filtering for sellers who can close in your window",
      "Estimating your all-in monthly payment",
    ],
  },
  results: {
    eyebrow: "Good news",
    headline: "Your deadline looks achievable.",
    sub: "Drop your info below and we'll text you a same-day shortlist of homes that can actually close in your window.",
    consent:
      "By submitting, you agree to receive a text and a follow-up call about your deadline. Standard message rates apply. Reply STOP anytime.",
    ctaPrimary: "Send me the shortlist",
    reassurance:
      "We never sell your info. One short conversation. No credit pull, no false hope.",
  },
  thankYou: {
    headline: "You're in. Watch your phone in the next 30 minutes.",
    sub: "Deadline files don't queue. We're already pulling your shortlist.",
    steps: [
      "Same-day text with a real shortlist",
      "Pick a 15-minute call time",
      "Honest plan or honest fallback — we say so",
    ],
    footer:
      "Didn't get the text? Sometimes it takes a minute. Or call/text us anytime.",
  },
  micro: {
    required: "We need this to send you your shortlist.",
    badPhone: "That doesn't look like a phone number — try again?",
    badEmail: "Double-check your email — we'll send your shortlist there too.",
    submitting: "Hang tight, pulling deadline-fit inventory…",
    submitError:
      "Something went wrong on our end. Try again, or text us if it keeps happening.",
    back: "Back",
    change: "Change my answer",
  },
};

export default copy;
