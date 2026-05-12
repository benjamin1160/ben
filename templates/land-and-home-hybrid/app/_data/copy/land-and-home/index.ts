import type { ScenarioCopy } from "../../../_templates/types";
import { defaultApplicationForm } from "../../../_templates/sharedForm";

const BRAND = {
  name: "Florida Home Path",
  scenarioSlug: "land-and-home",
  hrefBase: "/land-and-home",
  disclosure:
    "Payment examples are illustrative and depend on credit, location, and home choice. Equal housing opportunity.",
  footerCopyright: "Florida Home Path",
};

const copy: ScenarioCopy = {
  brand: BRAND,
  squeeze: {
    meta: {
      title: "Land + home in Florida — the step-by-step plan",
      description:
        "Want land and a home, all in one package? Three fields and we'll send the actual sequence — find the parcel, match the home, one loan, one closing.",
    },
    badge: "For first-time land + home buyers",
    headline: "Land and a home — the easy way.",
    subhead:
      "Most people try to find land first, then a home, then financing — and quit halfway through. We do all three together: one search, one loan, one closing.",
    bullets: [
      "We find the parcel and the home together.",
      "One land-home loan covers both. One closing.",
      "Real numbers — clearing, septic, set, payment.",
    ],
    avatarsLine: "Florida families closing land + home together every week.",
    formTitle: "Where do you want to land?",
    formSubhead: "Three fields. We'll send a real plan — not a sales pitch.",
    fields: {
      name: { label: "First name", placeholder: "Alex" },
      phone: { label: "Mobile number", placeholder: "(555) 555-0123" },
      third: {
        label: "Where in Florida?",
        placeholder: "Pick a region…",
        options: [
          "Central FL (Polk, Lake)",
          "Tampa / Pasco / Hernando",
          "North-central (Marion, Citrus)",
          "Northeast (Putnam, Clay)",
          "Panhandle",
          "Anywhere — flexible",
        ],
      },
    },
    submit: "Send me the plan",
    microFootnote: "Under 60 seconds · No credit pull · No obligation",
    successTitle: "Got it, {name}.",
    successBody:
      "A specialist will call within one business day with parcel options, home matches, and the all-in payment.",
    proofs: [
      { stat: "60–120 days", label: "Typical land + home, start to keys" },
      { stat: "1 loan", label: "Land-home loan covers both — one closing" },
      { stat: "$50K–$200K", label: "Combined land + home, all in" },
    ],
  },

  vsl: {
    meta: {
      title: "Watch: Land + Home in Florida — the easy way",
      description:
        "A 5-minute walkthrough of how to buy land and a home as one package — one loan, one closing, one move-in.",
    },
    badge: "For people doing both at once · One loan, one closing",
    headerCta: "Get my plan",
    headline: "Land and a home, together. Watch the next 5 minutes.",
    subhead:
      "Most people try to do this in three pieces and quit. The package way is one loan, one closing, one timeline.",
    videoTitle: "Land + Home in 5 Minutes",
    videoSubtitle:
      "How Florida buyers find a parcel, match a home, finance both, and move in — without juggling three transactions.",
    videoCaption: "Tap the video to read the full transcript",
    trust: ["No credit pull", "Real human follow-up", "All-in payment, not teasers"],
    script: {
      title: "Land + Home in 5 Minutes",
      runtime: "5:14",
      beats: [
        {
          time: "0:00",
          label: "Hook",
          lines: [
            "If you&apos;ve been daydreaming about Florida land with a home on it — and you keep getting stuck on which to do first — there&apos;s a simpler way.",
          ],
        },
        {
          time: "0:25",
          label: "The trap",
          lines: [
            "Most people try to find land first, then financing, then a home, then permits. Three loans, three closings, three contractors. Half quit halfway through.",
          ],
        },
        {
          time: "1:00",
          label: "The package",
          lines: [
            "Land-home loans bundle the parcel, the home, and the site work into one transaction. You qualify once, you close once, you move in once.",
            "Combined budgets typically run $50K to $200K all-in — parcel, home, clearing, septic, set, the works.",
          ],
        },
        {
          time: "1:50",
          label: "Step 1 · Define the box",
          lines: [
            "We start with the four numbers: comfortable monthly payment, target acreage, target bedrooms, target Florida region. From those, we filter parcels and homes that fit together.",
          ],
        },
        {
          time: "2:30",
          label: "Step 2 · Three parcels",
          lines: [
            "We send three parcels we know are buildable, with permitted septic and access. You pick.",
          ],
        },
        {
          time: "3:00",
          label: "Step 3 · Match the home",
          lines: [
            "Each parcel has a list of compatible manufactured homes — three bed, two bed, square footage that fits the lot. You pick the home.",
          ],
        },
        {
          time: "3:35",
          label: "Step 4 · One closing",
          lines: [
            "The land-home loan funds the parcel, the home, the site work, and the set — all at one closing. Closing costs are one set of fees, not three.",
          ],
        },
        {
          time: "4:10",
          label: "Step 5 · Set and move in",
          lines: [
            "Site work happens while the home is being built. Set day, the home arrives on a flatbed and gets craned onto your foundation. Two days, you have keys.",
          ],
        },
        {
          time: "4:45",
          label: "Offer",
          lines: [
            "Fill out the form. We send three parcels and three matching homes within a week. No credit pull. One human call.",
          ],
        },
      ],
    },
    beatsEyebrow: "What you'll learn in 5 minutes",
    beatsHeadline: "The three things land + home buyers wish they'd known.",
    educationalBeats: [
      {
        num: "01",
        title: "One loan covers both.",
        body: "Land + home + site work + permits, all in one land-home loan. One application, one closing.",
      },
      {
        num: "02",
        title: "We pick parcel + home together.",
        body: "Compatible by design. Septic, setbacks, dimensions — pre-checked before you see anything.",
      },
      {
        num: "03",
        title: "60–120 days to keys.",
        body: "From your application to certificate of occupancy. Not five years. Not next decade.",
      },
    ],
    qualifier: {
      eyebrow: "Next step",
      headline: "Define the box. We do the rest.",
      body: "Tell us your monthly payment, region, and acreage. A specialist calls within one business day with three real parcel-and-home matches.",
      bullets: [
        "Three parcel + home matches, sent the same week.",
        "All numbers all-in — no surprise costs.",
        "Honest answer if it doesn't fit. We say so.",
      ],
    },
  },

  hybrid: {
    meta: {
      title: "Land + Home in Florida — the actual step-by-step plan",
      description:
        "Buy a parcel and a home as one package. One loan, one closing, one timeline. The honest sequence with real Florida numbers.",
    },
    badge: "For people who want both, in one go",
    headerCta: "Get my plan",
    headline: "Land and a home. Together. The way it should have always worked.",
    subhead:
      "Two transactions become one. One loan, one closing, one timeline. The actual sequence is shorter than you think.",
    primaryCta: "Show me my plan",
    secondaryCta: "See real Florida combos",
    microFootnote:
      "Three parcel + home matches in your inbox. No credit pull. A real person calls.",
    heroCard: {
      eyebrow: "Land + home, all in",
      bigStat: "$110,000",
      bigStatSecondary: "all-in package",
      chip: "Median FL combo",
      rows: [
        { label: "1-acre Polk County parcel", value: "$22,000" },
        { label: "3 bed manufactured", value: "$80,000" },
        { label: "Site work + permits + set", value: "$18,000" },
        { label: "All-in monthly (5% down)", value: "~$960/mo" },
      ],
      microline:
        "One loan, one closing. <span class='font-semibold text-brand-strong'>Under $1,000/mo all in.</span>",
      avatarsLine: "Florida families closing land + home in one week each.",
    },
    painEyebrow: "Why most people quit",
    painHeadline: "Three transactions kill the dream.",
    painSubhead:
      "Find land, get land loan, close on land, find home, get home loan, close on home, get site work loan, close on site work. Half quit by step four.",
    painStats: [
      {
        stat: "3 loans",
        label: "What the old way required. The new way is one.",
      },
      { stat: "~$8K", label: "Closing-cost savings vs. three separate transactions." },
      { stat: "60%", label: "Drop-off rate when buyers try to do this in pieces." },
    ],
    pivotEyebrow: "The package",
    pivotHeadline: "Two paths. One of them is the new normal.",
    pivotOptions: [
      {
        title: "Find land first, figure the rest out later.",
        body: "Most common path. Most common stall — land sits empty for years. Property taxes keep coming.",
        bad: true,
      },
      {
        title: "Find a home, then go look for land.",
        body: "Manufactured retailers do this. They sell you the home, then leave you to find the land. Most of their customers never do.",
        bad: true,
      },
      {
        title: "Land + home as one package.",
        body: "We pick a buildable parcel and a compatible home together. One land-home loan. One closing. 60–120 days to keys.",
        bad: false,
      },
    ],
    emotionalHeadline: "You don&apos;t want to do paperwork three times.",
    emotionalBody:
      "The dream isn't a parcel. It isn't a home. It's the moment you turn the key on a place that's yours, on land that's yours. We compress everything before that moment into one process.",
    emotionalKicker: "One application. One closing. One key.",
    pathEyebrow: "The path",
    pathHeadline: "Five steps, all bundled.",
    pathSubhead: "Week one to keys. The order is fixed for a reason.",
    benefits: [
      {
        num: "01",
        title: "Define the box",
        body: "Monthly payment, region, acreage, bedrooms. We filter from there.",
      },
      {
        num: "02",
        title: "Three parcel + home combos",
        body: "Compatible parcels with compatible homes. Septic, setbacks, dimensions all pre-checked.",
      },
      {
        num: "03",
        title: "One closing, then set",
        body: "Land-home loan funds everything. Site work happens while the home is being built. Set day is two days.",
      },
    ],
    numbersEyebrow: "Real numbers",
    numbersHeadline: "What land + home actually costs.",
    numbersSubhead:
      "All-in monthly payments on a 20-year fixed land-home loan with 5% down — combined parcel + home + site work.",
    priceCards: [
      {
        price: "$72,000",
        payment: "~$640",
        tag: "Starter combo",
        features: [
          "0.5 acre + 2 bed home",
          "Smaller pad, simpler site work",
          "Inland counties (Citrus, Putnam)",
        ],
      },
      {
        price: "$110,000",
        payment: "~$960",
        tag: "Most popular",
        highlight: true,
        features: [
          "1 acre + 3 bed home",
          "Standard site work",
          "What most families pick",
        ],
      },
      {
        price: "$165,000",
        payment: "~$1,420",
        tag: "Family combo",
        features: [
          "2–5 acres + 4 bed home",
          "Full pad + septic + well",
          "Room for the long haul",
        ],
      },
    ],
    stories: [
      {
        quote:
          "We were three months into a parcel-only deal when our lender mentioned land-home loans. Cancelled the parcel-only deal, restarted with Florida Home Path, and 91 days later we were inside a 3/2 on a 1.1-acre Polk parcel. One closing.",
        name: "Beto & Lin",
        place: "Polk County, FL",
      },
      {
        quote:
          "The hardest part was just believing it was actually one transaction. Once it closed I called my brother and told him to do the same thing. He's two weeks out.",
        name: "Reese",
        place: "Citrus County, FL",
      },
    ],
    qualifierEyebrow: "Next step",
    qualifierHeadline: "Tell us the box.",
    qualifierBody:
      "Monthly payment, region, acreage, bedrooms. We send three parcel + home combos within a week.",
    qualifierBullets: [
      "Three matched combos in your inbox.",
      "All numbers all-in — no surprise costs.",
      "Free buildability check on every parcel we send.",
    ],
  },

  bridge: {
    meta: {
      title: "Before you start hunting parcels — read this.",
      description:
        "A short pre-frame for first-time land + home buyers about why doing both at once is the simpler path.",
    },
    badge: "Quick read · 90 seconds",
    headerRight: "A short note before the next page",
    headline: "Before you start hunting parcels alone — read this.",
    leadParas: [
      "You want land. You want a home on it. The natural instinct is to do them in order. That's the slow way, and most people quit halfway.",
      "The next page is about doing both at once — one loan, one closing, one timeline. It's faster, cheaper, and the math is simpler.",
    ],
    reframes: [
      {
        num: "01",
        title: "It isn't two transactions.",
        body: "Land-home loans bundle parcel, home, and site work. One application, one closing, one set of fees.",
      },
      {
        num: "02",
        title: "We pick parcel and home together.",
        body: "Compatibility checked before you see anything — septic, setbacks, dimensions. No surprises at closing.",
      },
      {
        num: "03",
        title: "60–120 days, not five years.",
        body: "From signed application to keys. We've done it hundreds of times.",
      },
    ],
    caveatsEyebrow: "Two things to keep in mind",
    caveatsHeadline: "The next page isn't for everyone — and that's on purpose.",
    caveats: [
      {
        strong: "If you only want a site-built home,",
        body: "this isn't that. We work with modern manufactured homes, set on owned land. It's the affordable, fast version — not the only version.",
      },
      {
        strong: "If you want to take five years and shop slow,",
        body: "this also isn't that. The package path is for people who want to be inside in 60–120 days.",
      },
    ],
    finalHeadline: "Ready? Here's the page.",
    finalSubhead: "Five minutes to read. If the package isn't right, we say so.",
    finalCta: "Show me the next page",
    finalCtaHref: "/land-and-home/hybrid",
    finalCtaSub: "Opens on this site · No credit pull · No obligation",
    ps: "Most first-time buyers don't realize they can do both at once. The next page is the math.",
  },

  application: {
    meta: {
      title: "Land + Home Application — Florida Home Path",
      description:
        "Tell us your box and we'll send three matched parcel + home combos with all-in payments.",
    },
    badge: "Application · ~3 minutes",
    headerRight: "Application · Reviewed by a human",
    headline: "Land + home, in one go.",
    subhead:
      "You've seen the path. Tell us your box and a real human will read your file before they call.",
    trust: [
      { title: "No credit pull", body: "Estimates only. Nothing here hits your record." },
      {
        title: "Reviewed by a human",
        body: "One licensed Florida specialist — not a call center.",
      },
      { title: "Three matched combos", body: "Sent within a week if it's a fit." },
    ],
    fallbackHeadline: "Not ready to apply?",
    fallbackBody: "Read the longer page first — it covers the package, the math, and the catch.",
    fallbackCta: "Read the long page first",
    fallbackCtaHref: "/land-and-home/hybrid",
    form: defaultApplicationForm({
      sectionBTitle: "Where you stand today.",
      q: {
        currentSituation: {
          label: "What's your current housing?",
          options: ["Renting", "Own a site-built home", "With family", "Other"],
        },
        currentMonthly: {
          label: "Roughly what's your current monthly housing cost?",
          placeholder: "e.g. $1,800",
        },
        preApproval: {
          label: "Have you been pre-approved by a lender?",
          options: [
            "No, not yet",
            "Yes — under $100K",
            "Yes — $100K–$200K",
            "Yes — $200K+",
          ],
        },
        comfortablePayment: {
          label: "Comfortable monthly payment range",
          options: [
            "Under $900/mo",
            "$900–$1,300/mo",
            "$1,300–$1,800/mo",
            "$1,800+/mo",
          ],
        },
        income: {
          label: "Household income range",
          options: ["Under $40K", "$40K–$70K", "$70K–$100K", "$100K+"],
        },
        credit: {
          label: "Credit score range (estimate is fine — no pull)",
          options: ["Under 580", "580–639", "640–699", "700+", "Not sure"],
        },
        downPayment: {
          label: "Money set aside for down payment / closing costs",
          options: [
            "Under $5,000",
            "$5,000–$10,000",
            "$10,000–$25,000",
            "$25,000+",
          ],
        },
        county: {
          label: "Florida region/county you want to land in",
          placeholder: "e.g. Central FL, Polk, Citrus",
        },
        beds: {
          label: "Bedrooms you need",
          options: ["2", "3", "4+", "Flexible"],
        },
        budget: {
          label: "Combined target (land + home all-in)",
          options: ["Under $80K", "$80K–$130K", "$130K–$180K", "$180K+"],
        },
        timeline: {
          label: "When would you want to be in the new place?",
          options: [
            "ASAP",
            "Next 60–90 days",
            "3–6 months",
            "Just exploring",
          ],
        },
        bestTime: {
          label: "Best time for a 15-minute call",
          options: ["Mornings", "Lunchtime", "Afternoons", "Evenings"],
        },
        notes: {
          label: "Anything we should know?",
          placeholder:
            "Acreage you want, school zones, family size, dealbreakers.",
        },
      },
    }),
  },

  thankYou: {
    meta: {
      title: "Got it — land + home plan, on the way",
      description:
        "Your land + home application is in. A specialist will call within one business day with three matched combos.",
    },
    badge: "Application received",
    headerRight: "Application received",
    headline: "Got it. We're matching parcels and homes now.",
    subhead:
      "Don't close this tab yet. Two things in the next 60 seconds will make sure the call connects.",
    timelineEyebrow: "What happens next",
    timelineHeadline: "Here's the timeline.",
    steps: [
      {
        num: "01",
        when: "In the next 5 minutes",
        title: "A confirmation text + email.",
        body: "From a 941, 813, 407, or 904 area code. Save it as “Florida Home Path.”",
      },
      {
        num: "02",
        when: "Within 1 business day",
        title: "A real person calls you.",
        body: "One licensed Florida specialist. They'll have read your file before they dial.",
      },
      {
        num: "03",
        when: "Within a week",
        title: "Three parcel + home combos.",
        body: "Each combo includes the parcel, a compatible home, the site-work estimate, and the all-in monthly payment.",
      },
      {
        num: "04",
        when: "If it doesn't fit",
        title: "An honest answer + a plan.",
        body: "If the package math doesn't work right now, we say so — and tell you what to do instead. That part is free.",
      },
    ],
    bookingHeadline: "Want to lock in your call time right now?",
    bookingBody: "Pick a 15-minute slot. You stay first in line.",
    bookingCta: "Pick a call time",
    bookingCtaHref: "/land-and-home/booking",
    bookingCtaSub: "Takes 30 seconds · You can reschedule any time",
    actionsEyebrow: "Two things to do right now",
    actionsHeadline: "So the call actually connects.",
    actions: [
      {
        num: "1",
        title: "Save us in your contacts.",
        body: "“Florida Home Path” with a Florida area code. Specialists call from 941, 813, 407, or 904 numbers.",
      },
      {
        num: "2",
        title: "Whitelist our email.",
        body: "Move our welcome email out of Promotions. The combo email is heavy — don't let it land in spam.",
      },
    ],
    readMoreHeadline: "While you wait — read the long page.",
    readMoreBody: "The package, the math, the catch — laid out straight.",
    readMorePrimary: "Read the long page",
    readMorePrimaryHref: "/land-and-home/hybrid",
    readMoreSecondary: "Or watch the 5-minute version",
    readMoreSecondaryHref: "/land-and-home/vsl",
  },

  booking: {
    meta: {
      title: "Book your land + home call — Florida Home Path",
      description:
        "Pick a 15-minute slot with a licensed Florida ownership specialist. Three matched combos, one call.",
    },
    badge: "15-minute call · Eastern time",
    headerRight: "Book your 15-minute call",
    headline: "Pick when we should call.",
    subhead:
      "A 15-minute call. They'll have your box in front of them and three parcel + home combos ready to walk through.",
    trust: [
      { title: "15 minutes", body: "No more, no less." },
      {
        title: "One human",
        body: "Same person who reads your file. Not a call center.",
      },
      {
        title: "Three combos",
        body: "We pre-build three matches before the call.",
      },
    ],
    coverEyebrow: "What we'll cover on the call",
    coverHeadline: "No fluff. Three things, in order.",
    coverBullets: [
      {
        num: "01",
        title: "Your box.",
        body: "Monthly payment, acreage, bedrooms, region. Confirm we got it right.",
      },
      {
        num: "02",
        title: "The three combos.",
        body: "Parcel, home, site work, all-in payment — for each. You pick what to dig into.",
      },
      {
        num: "03",
        title: "The honest trade-offs.",
        body: "Inventory in this band moves fast. We tell you which combo we'd pick and why — straight.",
      },
    ],
    fallbackHeadline: "Not ready to book?",
    fallbackBody:
      "No problem. Submit the application and a specialist will call you in their next available window.",
    fallbackCta: "Submit the application instead",
    fallbackCtaHref: "/land-and-home/application",
  },
};

export default copy;
