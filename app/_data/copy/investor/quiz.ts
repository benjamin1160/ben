import type { QuizCopy } from "../../../_templates/QuizFunnel";

const copy: QuizCopy = {
  meta: {
    title: "FL Manufactured Rental Buy-Box — 60-Second Quiz",
    description:
      "Six questions, no credit pull. We'll send three to five matched FL manufactured rental deals with full underwriting — cap, COC, DSCR, rent comps.",
  },
  hook: {
    eyebrow: "60-second quiz · Acquisitions only",
    headline: "Six questions and we'll send the deal flow.",
    sub: "Tell us your buy-box. We send three to five matched deals with full underwriting — cap, COC, DSCR, comps.",
    trust: ["No credit pull", "Acquisitions reviewed", "Spreadsheet sent with every deal"],
    ctaPrimary: "Send me the deals",
    socialProof: "Used by 800+ FL manufactured-rental investors this year.",
  },
  questions: [
    {
      id: "strategy",
      question: "What's your strategy?",
      type: "single",
      options: [
        "Long-term rental",
        "Short-term rental (STR)",
        "BRRRR / refinance",
        "Owner-financed exit",
        "Mixed",
      ],
    },
    {
      id: "zip",
      question: "Target Florida region?",
      helper: "ZIP, county, or rough metro.",
      type: "zip",
    },
    {
      id: "experience",
      question: "Current portfolio size?",
      type: "single",
      options: [
        "First investment property",
        "1–4 doors",
        "5–25 doors",
        "25+ doors",
      ],
    },
    {
      id: "cap-floor",
      question: "Minimum cap rate you'll touch?",
      type: "single",
      options: [
        "Anything 7%+",
        "Anything 9%+",
        "Anything 11%+",
        "13%+ only",
      ],
    },
    {
      id: "per-deal",
      question: "Per-deal acquisition target",
      type: "single",
      options: [
        "Under $80K",
        "$80K–$120K",
        "$120K–$160K",
        "$160K+",
      ],
    },
    {
      id: "timeline",
      question: "Capital deployment timeline",
      type: "single",
      options: [
        "ASAP — capital ready",
        "Next 60–90 days",
        "3–6 months",
        "Just exploring",
      ],
    },
  ],
  transition: {
    headline: "Pulling deal flow for your buy-box…",
    checklist: [
      "Cross-checking MLS + off-market in your counties",
      "Underwriting cap, COC, DSCR",
      "Triangulating rent comps",
    ],
  },
  results: {
    eyebrow: "Good news",
    headline: "There's deal flow in your buy-box.",
    sub: "Drop your info below and an acquisitions specialist will send three to five matched deals with full underwriting — usually within 3–5 business days.",
    consent:
      "By submitting, you agree to receive a text and a follow-up call about your buy-box. Standard message rates apply. Reply STOP anytime.",
    ctaPrimary: "Send me the deals",
    reassurance:
      "We never sell your info. Acquisitions reviews every buy-box before deal flow is sent.",
  },
  thankYou: {
    headline: "You're in. Acquisitions has your buy-box.",
    sub: "We're matching deals now. Your acquisitions specialist will call within one business day.",
    steps: [
      "Confirmation text + email arrives in 5 minutes",
      "Acquisitions calls within one business day",
      "Three to five matched deals within 3–5 business days",
    ],
    footer:
      "Didn't get the text? Sometimes it takes a minute. Or call/text us anytime.",
  },
  micro: {
    required: "We need this to send you deal flow.",
    badPhone: "That doesn't look like a phone number — try again?",
    badEmail: "Double-check your email — we'll send the deal package there.",
    submitting: "Hang tight, pulling matched deals…",
    submitError:
      "Something went wrong on our end. Try again, or text us if it keeps happening.",
    back: "Back",
    change: "Change my answer",
  },
};

export default copy;
