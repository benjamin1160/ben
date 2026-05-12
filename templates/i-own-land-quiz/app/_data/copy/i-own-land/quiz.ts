import type { QuizCopy } from "../../../_templates/QuizFunnel";

const copy: QuizCopy = {
  meta: {
    title: "You own Florida land — 60-Second Plan Quiz",
    description:
      "Six questions, no credit pull. We'll tell you whether your land is buildable, what site work runs, and what the all-in land-home payment looks like.",
  },
  hook: {
    eyebrow: "60-second quiz",
    headline: "You bought the land. Six questions and we'll tell you the next move.",
    sub: "We'll tell you whether your parcel is buildable, what site work actually costs, and what your all-in land-home payment would be — in plain numbers.",
    trust: ["No credit pull", "No spam", "Takes about 60 seconds"],
    ctaPrimary: "Show me my plan",
    socialProof:
      "Used by 1,200+ Florida landowners this year who were stuck on what to do next.",
  },
  questions: [
    {
      id: "current-state",
      question: "What's the holdup on your land right now?",
      helper: "Pick the one that hits.",
      type: "single",
      options: [
        "I don't know if it's buildable",
        "Site-work quotes are scattered all over",
        "I don't know how to finance the home part",
        "I just keep putting it off",
      ],
    },
    {
      id: "zip",
      question: "What's the ZIP or county the land is in?",
      helper:
        "We'll pull the property card so the call has real info, not guesses.",
      type: "zip",
    },
    {
      id: "ownership",
      question: "How do you hold the land today?",
      type: "single",
      options: [
        "Owned outright",
        "Mortgaged",
        "Family / inherited",
        "Closing on it soon",
      ],
    },
    {
      id: "acreage",
      question: "Roughly how much land?",
      type: "single",
      options: [
        "Under 0.5 acres",
        "0.5–1 acre",
        "1–5 acres",
        "5+ acres",
        "Not sure",
      ],
    },
    {
      id: "comfortable-payment",
      question: "What monthly payment would you actually be comfortable with?",
      helper:
        "Not the bank's max — the number that lets you sleep, save, and live.",
      type: "single",
      options: [
        "Under $900/mo",
        "$900–$1,300/mo",
        "$1,300–$1,800/mo",
        "$1,800+/mo",
      ],
    },
    {
      id: "timeline",
      question: "When would you want to be on the land?",
      type: "single",
      options: ["ASAP", "Next 60–90 days", "3–6 months", "Just exploring"],
    },
  ],
  transition: {
    headline: "Pulling your property card and matching homes…",
    checklist: [
      "Cross-checking buildability and setbacks",
      "Estimating site work for your acreage",
      "Pricing land-home loans with your land as down payment",
    ],
  },
  results: {
    eyebrow: "Good news",
    headline: "Your land likely works. Here's the next move.",
    sub: "Drop your info below and we'll text you the buildability check, three site-work quotes, and the all-in land-home payment — usually within one business day.",
    consent:
      "By submitting, you agree to receive a text and a follow-up call about your land plan. Standard message rates apply. Reply STOP anytime.",
    ctaPrimary: "Send me the plan",
    reassurance:
      "We never sell your info. One short conversation. No credit pull, no pressure.",
  },
  thankYou: {
    headline: "You're in. Watch your phone in the next 2 minutes.",
    sub: "We're texting your buildability check, three site-work bids, and a home shortlist that fits your acreage — plus a link to grab a 15-minute call.",
    steps: [
      "Text arrives with your buildability check + plan",
      "Pick a 15-minute call time that works for you",
      "We walk you through what fits and what doesn't",
    ],
    footer:
      "Didn't get the text? Sometimes it takes a minute. Or call/text us anytime.",
  },
  micro: {
    required: "We need this to send you your plan.",
    badPhone: "That doesn't look like a phone number — try again?",
    badEmail: "Double-check your email — we'll send your plan there too.",
    submitting: "Hang tight, building your plan…",
    submitError:
      "Something went wrong on our end. Try again, or text us if it keeps happening.",
    back: "Back",
    change: "Change my answer",
  },
};

export default copy;
