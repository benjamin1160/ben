import type { ApplicationFormCopy } from "./types";

// Shared application-form scaffolding. Per-scenario copy can override anything
// — overrides go in each scenario's copy file via spread + key override.
export function defaultApplicationForm(
  overrides: Partial<ApplicationFormCopy> = {},
): ApplicationFormCopy {
  return {
    sectionAEyebrow: "Step 1 of 4",
    sectionATitle: "How do we reach you?",
    sectionBEyebrow: "Step 2 of 4",
    sectionBTitle: "Where you stand today.",
    sectionCEyebrow: "Step 3 of 4",
    sectionCTitle: "The honest financial picture.",
    sectionDEyebrow: "Step 4 of 4",
    sectionDTitle: "What you actually want.",
    q: {
      currentSituation: {
        label: "Where are you living right now?",
        options: ["Renting", "With family", "Own a home", "Other"],
      },
      currentMonthly: {
        label: "Roughly what's your current monthly housing cost?",
        placeholder: "e.g. $1,800",
      },
      preApproval: {
        label: "Have you been pre-approved by a lender?",
        options: [
          "No, not yet",
          "Yes — under $200K",
          "Yes — $200K–$300K",
          "Yes — $300K+",
        ],
      },
      comfortablePayment: {
        label: "What monthly payment would you actually be comfortable with?",
        options: [
          "Under $900/mo",
          "$900–$1,300/mo",
          "$1,300–$1,800/mo",
          "$1,800+/mo",
        ],
      },
      income: {
        label: "Household income range",
        options: [
          "Under $40K",
          "$40K–$70K",
          "$70K–$100K",
          "$100K+",
        ],
      },
      credit: {
        label: "Credit score range (estimate is fine — no pull)",
        options: ["Under 580", "580–639", "640–699", "700+", "Not sure"],
      },
      downPayment: {
        label: "Money set aside for a down payment",
        options: [
          "Under $5,000",
          "$5,000–$10,000",
          "$10,000–$25,000",
          "$25,000+",
        ],
      },
      county: {
        label: "Florida county or area you want to live in",
        placeholder: "e.g. Polk, Pasco, near Tampa",
      },
      beds: {
        label: "Bedrooms you need",
        options: ["2", "3", "4+", "Flexible"],
      },
      budget: {
        label: "Target home price range",
        options: ["Under $80K", "$80K–$120K", "$120K–$160K", "$160K+"],
      },
      timeline: {
        label: "When would you want to move in?",
        options: ["ASAP", "Next 60–90 days", "3–6 months", "Just exploring"],
      },
      bestTime: {
        label: "Best time for a 15-minute call",
        options: ["Mornings", "Lunchtime", "Afternoons", "Evenings"],
      },
      notes: {
        label: "Anything else we should know? (optional)",
        placeholder: "Constraints, dealbreakers, dreams. We read every one.",
      },
    },
    consent:
      "I agree to receive a phone call and texts about my Florida home options. Standard message rates apply. Reply STOP anytime. We never sell your info.",
    submit: "Submit application",
    successTitle: "Application received, {name}.",
    successBody:
      "A licensed Florida ownership specialist will read your file and call you within one business day. Honest answers, both directions.",
    ...overrides,
  };
}
