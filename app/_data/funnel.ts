export type PageStyle = {
  slug: string;
  name: string;
  short: string;
  purpose: string;
  group: "entry" | "midfunnel" | "terminal";
};

export type Variation = {
  slug: string;
  number: number;
  name: string;
  scenario: string[];
  psychology: string[];
  trigger: string;
  buying: string;
  state: "pain" | "aspiration";
  liveStyles: string[];
};

export const pageStyles: PageStyle[] = [
  {
    slug: "quiz",
    name: "Quiz",
    short: "Multi-step qualifier",
    purpose: "1 question per screen. Pre-qualifies and engages.",
    group: "entry",
  },
  {
    slug: "squeeze",
    name: "Squeeze",
    short: "3-field lead capture",
    purpose: "Single screen. Headline + 3 fields. Speed over depth.",
    group: "entry",
  },
  {
    slug: "vsl",
    name: "VSL",
    short: "Video sales letter",
    purpose: "2–5 min video at top, form below. Builds trust.",
    group: "entry",
  },
  {
    slug: "hybrid",
    name: "Hybrid",
    short: "Short-form sales + form",
    purpose: "Scrollable but tight. Education + conversion.",
    group: "entry",
  },
  {
    slug: "bridge",
    name: "Bridge",
    short: "Click-through warm-up",
    purpose: "Pre-frames the offer. No form, just one CTA.",
    group: "entry",
  },
  {
    slug: "application",
    name: "Application",
    short: "High-intent form",
    purpose: "Multi-field form. For warm traffic only.",
    group: "midfunnel",
  },
  {
    slug: "thank-you",
    name: "Thank You",
    short: "Confirmation + next steps",
    purpose: "Sets expectations. Massively boosts contact rate.",
    group: "terminal",
  },
  {
    slug: "booking",
    name: "Booking",
    short: "Calendar embed",
    purpose: "Convert hot leads into appointments.",
    group: "terminal",
  },
];

export const variations: Variation[] = [
  {
    slug: "sick-of-renting",
    number: 1,
    name: "Sick of Renting",
    scenario: ["Renting, rising costs", "Moderate income, possible credit issues"],
    psychology: ["Feels stuck, wants control"],
    trigger: "Lower monthly payment",
    buying: "Escape from rent",
    state: "pain",
    liveStyles: ["hybrid", "quiz", "squeeze", "vsl", "bridge", "application", "thank-you", "booking"],
  },
  {
    slug: "denied-everywhere",
    number: 2,
    name: "Denied Everywhere",
    scenario: ["Rejected by traditional lenders", "Credit issues, has income"],
    psychology: ["Frustrated, skeptical, guarded", "Expects rejection"],
    trigger: "A path that doesn't end in 'no'",
    buying: "Second chance",
    state: "pain",
    liveStyles: [],
  },
  {
    slug: "i-own-land",
    number: 3,
    name: "I Own Land — Now What?",
    scenario: ["Has land already", "Doesn't understand next steps"],
    psychology: ["Confused, overwhelmed", "Wants direction"],
    trigger: "A clear next move",
    buying: "Clarity + execution",
    state: "aspiration",
    liveStyles: [],
  },
  {
    slug: "land-and-home",
    number: 4,
    name: "Land + Home Package",
    scenario: ["Wants land and home together", "Early research phase"],
    psychology: ["Overwhelmed, cautious", "Needs guidance"],
    trigger: "Step-by-step plan",
    buying: "Clear step-by-step plan",
    state: "aspiration",
    liveStyles: [],
  },
  {
    slug: "family-home",
    number: 5,
    name: "Working-Class Family",
    scenario: ["Crowded living situation", "Kids involved"],
    psychology: ["Emotional, future-focused", "Wants stability and pride"],
    trigger: "A better life for the kids",
    buying: "Better life for family",
    state: "aspiration",
    liveStyles: [],
  },
  {
    slug: "retiree-downsize",
    number: 6,
    name: "Retiree / Downsizer",
    scenario: ["Selling home or fixed income", "Wants simpler living"],
    psychology: ["Risk-averse, values comfort", "Avoids complexity"],
    trigger: "Simplicity, no surprises",
    buying: "Simplicity + security",
    state: "aspiration",
    liveStyles: [],
  },
  {
    slug: "need-it-now",
    number: 7,
    name: "Urgent / Time-Pressured",
    scenario: ["Divorce, eviction, relocation"],
    psychology: ["Stressed, decisive", "Wants speed and certainty"],
    trigger: "Move-in date, fast",
    buying: "Immediate solution",
    state: "pain",
    liveStyles: [],
  },
  {
    slug: "investor",
    number: 8,
    name: "Investor",
    scenario: ["Rental or flip strategy"],
    psychology: ["Logical, ROI-driven", "No emotion"],
    trigger: "Cap rate / cash-on-cash",
    buying: "Cash flow / returns",
    state: "pain",
    liveStyles: [],
  },
  {
    slug: "skeptical-buyer",
    number: 9,
    name: "Skeptical Buyer",
    scenario: ["Burned before or distrustful"],
    psychology: ["Guarded, slow decision-maker", "Needs transparency"],
    trigger: "Receipts, references, no fluff",
    buying: "Trust",
    state: "aspiration",
    liveStyles: [],
  },
  {
    slug: "first-generation",
    number: 10,
    name: "Immigrant / First-Gen",
    scenario: ["First-time U.S. property buyer"],
    psychology: ["Aspirational, family-driven", "Needs guidance"],
    trigger: "The dream, made concrete",
    buying: "Ownership / American dream",
    state: "aspiration",
    liveStyles: [],
  },
];

export function findVariation(slug: string): Variation | undefined {
  return variations.find((v) => v.slug === slug);
}

export function findPageStyle(slug: string): PageStyle | undefined {
  return pageStyles.find((s) => s.slug === slug);
}
