import type { QuizCopy } from "../../../_templates/QuizFunnel";

const copy: QuizCopy = {
  meta: {
    title: "Land + Home in Florida — 60-Second Plan Quiz",
    description:
      "Six questions, no credit pull. We'll send three matched parcel + home combos with the all-in monthly payment.",
  },
  hook: {
    eyebrow: "60-second quiz",
    headline: "Six questions and we'll send three real Florida combos.",
    sub: "Parcel + home + site work + financing — all-in monthly. We do the matching, you pick the favorite.",
    trust: ["No credit pull", "No spam", "Takes about 60 seconds"],
    ctaPrimary: "Show me my combos",
    socialProof:
      "Used by 2,300+ Florida buyers this year doing land + home as one transaction.",
  },
  questions: [
    {
      id: "stage",
      question: "Where are you in the process right now?",
      type: "single",
      options: [
        "Just starting to look",
        "Looking at parcels",
        "Looking at homes",
        "Already have a parcel in mind",
      ],
    },
    {
      id: "zip",
      question: "What part of Florida do you want to land in?",
      helper: "ZIP, county, or rough area.",
      type: "zip",
    },
    {
      id: "acreage",
      question: "How much land do you want?",
      type: "single",
      options: [
        "Under 0.5 acres",
        "0.5–1 acre",
        "1–5 acres",
        "5+ acres",
        "Flexible",
      ],
    },
    {
      id: "bedrooms",
      question: "Bedrooms you need in the home",
      type: "single",
      options: ["2", "3", "4+", "Flexible"],
    },
    {
      id: "comfortable-payment",
      question: "What monthly payment would you actually be comfortable with?",
      helper: "All-in: parcel + home + site work, one payment.",
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
      question: "When would you want to be in the new place?",
      type: "single",
      options: ["ASAP", "Next 60–90 days", "3–6 months", "Just exploring"],
    },
  ],
  transition: {
    headline: "Matching parcels and homes for your box…",
    checklist: [
      "Cross-checking buildable parcels in your area",
      "Pricing site work for your acreage",
      "Filtering combos that fit your monthly",
    ],
  },
  results: {
    eyebrow: "Good news",
    headline: "There are real combos in your range.",
    sub: "Drop your info below and we'll text you three matched parcel + home combos with the all-in monthly — usually within a week.",
    consent:
      "By submitting, you agree to receive a text and a follow-up call. Standard message rates apply. Reply STOP anytime.",
    ctaPrimary: "Send me the combos",
    reassurance:
      "We never sell your info. One short conversation. No credit pull, no pressure.",
  },
  thankYou: {
    headline: "You're in. Watch your phone in the next 2 minutes.",
    sub: "We're texting you three matched combos plus a link to grab a 15-minute call.",
    steps: [
      "Text arrives with your three combos",
      "Pick a 15-minute call time",
      "We walk you through each one — straight",
    ],
    footer:
      "Didn't get the text? Sometimes it takes a minute. Or call/text us anytime.",
  },
  micro: {
    required: "We need this to send you your combos.",
    badPhone: "That doesn't look like a phone number — try again?",
    badEmail: "Double-check your email — we'll send your combos there too.",
    submitting: "Hang tight, building your combos…",
    submitError:
      "Something went wrong on our end. Try again, or text us if it keeps happening.",
    back: "Back",
    change: "Change my answer",
  },
};

export default copy;
