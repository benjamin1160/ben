import type { QuizCopy } from "../../../_templates/QuizFunnel";

const copy: QuizCopy = {
  meta: {
    title: "Stop Renting — Take the 60-Second Homeownership Quiz",
    description:
      "See if you qualify to swap your rent for a mortgage. 6 questions, no credit pull, no phone call required.",
  },
  hook: {
    eyebrow: "60-second quiz",
    headline: "Tired of paying your landlord's mortgage?",
    sub: "Answer 6 quick questions and see if you qualify to put that same monthly payment toward a home of your own — even if you've been told no before.",
    trust: ["No credit pull", "No spam", "Takes about 60 seconds"],
    ctaPrimary: "Start the quiz",
    socialProof: "Used by 12,000+ renters this year to map their first move.",
  },
  questions: [
    {
      id: "pain",
      question: "What's pushing you to stop renting?",
      helper: "Pick the one that hits hardest.",
      type: "single",
      options: [
        "My rent keeps going up",
        "I'm sick of throwing money away",
        "I need more space for my family",
        "I want something that's actually mine",
      ],
    },
    {
      id: "zip",
      question: "Where are you looking to buy?",
      helper: "We'll check what's available in your area.",
      type: "zip",
    },
    {
      id: "timeline",
      question: "When would you ideally move in?",
      type: "single",
      options: [
        "ASAP — I'm ready",
        "Next 3–6 months",
        "This year",
        "Just exploring",
      ],
    },
    {
      id: "income",
      question: "What's your monthly household income?",
      helper:
        "Before taxes. We use this to match programs you'll actually qualify for.",
      type: "single",
      options: [
        "Under $3,000/mo",
        "$3,000–$5,000/mo",
        "$5,000–$8,000/mo",
        "$8,000+/mo",
      ],
    },
    {
      id: "credit",
      question: "How's your credit looking?",
      helper: "Be honest — we work with people across the whole range.",
      type: "single",
      options: [
        "Solid (700+)",
        "Decent (620–699)",
        "Rough (under 620)",
        "Honestly, no idea",
      ],
    },
    {
      id: "down-payment",
      question: "How much do you have saved for a down payment?",
      helper: "Some of our programs need a lot less than you'd think.",
      type: "single",
      options: ["Under $2,500", "$2,500–$5,000", "$5,000–$10,000", "$10,000+"],
    },
  ],
  transition: {
    headline: "Building your personalized plan…",
    checklist: [
      "Checking program eligibility",
      "Estimating your monthly payment",
      "Matching you with options in your area",
    ],
  },
  results: {
    eyebrow: "Good news",
    headline: "There's a path forward for you.",
    sub: "Based on your answers, you likely qualify for at least one of our flexible homeownership programs. Drop your info below and we'll text you your personalized plan — including what your monthly payment could look like.",
    consent:
      "By submitting, you agree to receive a text and a follow-up call about your homeownership plan. Standard message rates apply. Reply STOP anytime.",
    ctaPrimary: "Show me my plan",
    reassurance: "We never sell your info. One short conversation. No pressure.",
  },
  thankYou: {
    headline: "You're in. Check your phone in the next 2 minutes.",
    sub: "We're texting you your plan and a link to lock in a 15-minute call with someone on our team. Most people are surprised by what's possible — even folks who've been told no before.",
    steps: [
      "Text arrives with your personalized plan",
      "Pick a 15-minute call time that works for you",
      "We walk you through your real numbers — no pressure, no credit pull",
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
