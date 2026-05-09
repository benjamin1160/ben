import type { QuizCopy } from "../../../_templates/QuizFunnel";

const copy: QuizCopy = {
  meta: {
    title: "Florida Retirement, Simpler — 60-Second Quiz",
    description:
      "Six questions, no credit pull. We'll send a real shortlist of small Florida homes built for simpler retirement living.",
  },
  hook: {
    eyebrow: "60-second quiz",
    headline: "Six questions and we'll send a shortlist tuned to your retirement.",
    sub: "Small footprint, low monthly, age-friendly community. We'll tell you what fits — by region, by community, by the cost-of-life math.",
    trust: ["No credit pull", "No spam", "Takes about 60 seconds"],
    ctaPrimary: "Show me what fits",
    socialProof:
      "Used by 3,100+ Florida retirees this year right-sizing without the chaos.",
  },
  questions: [
    {
      id: "trigger",
      question: "What's pushing the move?",
      type: "single",
      options: [
        "Selling the family home",
        "Lower carrying costs",
        "Less to maintain",
        "Be closer to family",
        "Just exploring",
      ],
    },
    {
      id: "zip",
      question: "Where in Florida do you want to land?",
      helper: "ZIP, county, or rough area — near family is fine too.",
      type: "zip",
    },
    {
      id: "community",
      question: "What kind of community?",
      type: "single",
      options: [
        "Quiet, age-friendly",
        "55+ active community",
        "Family-mixed neighborhood",
        "No preference yet",
      ],
    },
    {
      id: "size",
      question: "How much home do you actually want?",
      type: "single",
      options: [
        "1 bed / very small",
        "2 bed (one for guests)",
        "2 bed + small office/craft room",
        "3 bed",
      ],
    },
    {
      id: "comfortable-payment",
      question: "What monthly housing cost actually fits?",
      helper: "All-in: payment + tax + insurance + lot rent if any.",
      type: "single",
      options: [
        "Under $400/mo",
        "$400–$700/mo",
        "$700–$1,000/mo",
        "$1,000+/mo",
      ],
    },
    {
      id: "cash",
      question: "Cash on hand for the move",
      helper:
        "Most retirees pay cash from the home sale. Estimate is fine.",
      type: "single",
      options: [
        "Under $20,000",
        "$20,000–$60,000",
        "$60,000–$150,000",
        "$150,000+",
      ],
    },
  ],
  transition: {
    headline: "Pulling matches for your retirement…",
    checklist: [
      "Cross-checking communities in your area",
      "Estimating all-in monthly cost",
      "Filtering for age-friendly amenities",
    ],
  },
  results: {
    eyebrow: "Good news",
    headline: "There's a quieter, simpler home in your range.",
    sub: "Drop your info below and we'll text you a shortlist of small homes in age-friendly Florida communities — usually within one business day.",
    consent:
      "By submitting, you agree to receive a text and a follow-up call. Standard message rates apply. Reply STOP anytime.",
    ctaPrimary: "Send me the shortlist",
    reassurance:
      "We never sell your info. One short conversation. No credit pull, no pressure.",
  },
  thankYou: {
    headline: "You're in. Watch your phone in the next 2 minutes.",
    sub: "We're texting your shortlist plus a link to grab a 15-minute call.",
    steps: [
      "Text arrives with your retirement shortlist",
      "Pick a 15-minute call time",
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
