import type { ScenarioCopy } from "../../../_templates/types";
import { defaultApplicationForm } from "../../../_templates/sharedForm";

const BRAND = {
  name: "Florida Home Path",
  scenarioSlug: "i-own-land",
  hrefBase: "/i-own-land",
  disclosure:
    "Payment examples are illustrative and depend on credit, location, and home choice. Equal housing opportunity.",
  footerCopyright: "Florida Home Path",
};

const copy: ScenarioCopy = {
  brand: BRAND,
  squeeze: {
    meta: {
      title: "You own land in Florida — what now? See your options.",
      description:
        "If you already own land and aren't sure how to put a home on it, three fields and we'll send a real plan: cost to clear, cost to set, and the all-in monthly.",
    },
    badge: "For landowners with no plan yet",
    headerRight: "Florida landowners · land-home plans",
    headline: "You bought the land. Now what?",
    subhead:
      "Most landowners freeze after the deed is signed — clearing, permits, septic, the home itself. Tell us where the land is and we'll send the actual sequence, with the actual cost.",
    bullets: [
      "We tell you whether your land is buildable — for free.",
      "Real numbers for clearing, septic, well, and set — not guesses.",
      "Modern manufactured homes from $50K–$150K, set on your land.",
    ],
    avatarsLine: "Florida landowners getting a real plan every week.",
    formTitle: "What's the next move on your land?",
    formSubhead: "Three fields. We'll send a real plan — not a sales pitch.",
    fields: {
      name: { label: "First name", placeholder: "Alex" },
      phone: { label: "Mobile number", placeholder: "(555) 555-0123" },
      third: {
        label: "Where's your land?",
        placeholder: "Pick a county…",
        options: [
          "Polk County",
          "Pasco County",
          "Marion County",
          "Hernando County",
          "Putnam County",
          "Citrus County",
          "Other Florida county",
          "Not sure",
        ],
      },
    },
    submit: "Send me my plan",
    microFootnote: "Under 60 seconds · No credit pull · No obligation",
    successTitle: "Got it, {name}.",
    successBody:
      "A Florida ownership specialist will call within one business day with the actual sequence for your land — and the all-in cost.",
    proofs: [
      { stat: "60–120 days", label: "From land to keys, typical" },
      { stat: "~$702/mo", label: "All-in on a typical 3 bed manufactured" },
      { stat: "Free", label: "Buildability check on your parcel" },
    ],
  },

  vsl: {
    meta: {
      title: "Watch: How to actually put a home on the land you already own",
      description:
        "A 5-minute walkthrough of the exact sequence — clear, permit, set, finance — for putting a manufactured home on your Florida land.",
    },
    badge: "For Florida landowners · The actual sequence",
    headerCta: "Get my plan",
    headline: "You own the land. Watch the next 5 minutes before you do anything else.",
    subhead:
      "The order of operations matters. Most landowners do step three before step one and lose six months. Here's the sequence, in plain English.",
    videoTitle: "Land-to-Keys in Plain English",
    videoSubtitle:
      "How a Florida landowner actually goes from raw parcel to a real home, in the right order.",
    videoCaption: "Tap the video to read the full transcript · Sound on recommended",
    trust: ["Buildability check is free", "Real human follow-up", "No surprise costs"],
    script: {
      title: "Land-to-Keys in Plain English",
      runtime: "5:08",
      beats: [
        {
          time: "0:00",
          label: "Hook",
          lines: [
            "If you bought Florida land thinking you&apos;d figure out the home part later — that part is now. And it&apos;s where most people get stuck.",
            "I&apos;m going to walk you through the exact sequence, because if you do it out of order, you waste six months and a lot of money.",
          ],
        },
        {
          time: "0:35",
          label: "Step 1 · Buildability",
          lines: [
            "First step is buildability. Some Florida parcels can&apos;t take a permanent home — wetlands, setback issues, septic perc fail. You need to know that before you spend a dollar more.",
            "We do this check for free. It takes 24–48 hours. You get a yes, no, or a yes-with-conditions.",
          ],
        },
        {
          time: "1:10",
          label: "Step 2 · Clearing & site work",
          lines: [
            "If it&apos;s buildable, you clear and prep the site. Tree work, pad, septic, well or county water hookup. Florida runs $8,000–$25,000 depending on your parcel.",
            "We get three quotes for you. You don&apos;t hire anyone you don&apos;t like.",
          ],
        },
        {
          time: "1:55",
          label: "Step 3 · Pick the home",
          lines: [
            "Now you pick the home. Modern manufactured — HUD-code, hurricane-rated, three bed two bath. $50K to $150K depending on size. Built in a factory, set on your foundation, and you&apos;re inside in 30–60 days from delivery.",
          ],
        },
        {
          time: "2:35",
          label: "Step 4 · Financing",
          lines: [
            "Land-home loans exist and most landowners don&apos;t know it. If you own the land outright, the land becomes part of the down payment — sometimes the entire down payment.",
            "Five percent down on a $89,500 home runs about $702 a month all in, with your land as collateral.",
          ],
        },
        {
          time: "3:20",
          label: "Step 5 · Permitting & set",
          lines: [
            "While the home is being built, your county is permitting. We pull the permits. Set day is the most exciting day — the home arrives on a flatbed and gets craned onto the foundation. Two days, max.",
          ],
        },
        {
          time: "4:00",
          label: "Step 6 · Hookups & CO",
          lines: [
            "Power, water, septic hooked in. County signs the certificate of occupancy. You move in.",
            "Total time from a raw parcel to keys: 60 to 120 days, typical.",
          ],
        },
        {
          time: "4:35",
          label: "Offer",
          lines: [
            "Fill out the form. We do the buildability check on your parcel for free. If your land works, we send the actual three-quote plan. If it doesn&apos;t, we tell you why — and what to do instead.",
            "No credit pull. One human call. That&apos;s the whole step.",
          ],
        },
      ],
    },
    beatsEyebrow: "What you'll learn in 5 minutes",
    beatsHeadline: "The three things landowners get wrong.",
    educationalBeats: [
      {
        num: "01",
        title: "They start with the home, not the land.",
        body: "You can't pick a home before you know what your parcel can take. Buildability first. Always.",
      },
      {
        num: "02",
        title: "They don't know land-home loans exist.",
        body: "If your land is owned, it counts as the down payment. You can be in a $90K home for a few thousand out of pocket.",
      },
      {
        num: "03",
        title: "They hire the first contractor that calls.",
        body: "Three quotes, every time. We get them for you. The spread on site work is often $10K+ between bids.",
      },
    ],
    qualifier: {
      eyebrow: "Next step",
      headline: "Tell us about your parcel.",
      body: "We'll do the buildability check for free, and a licensed Florida ownership specialist will call you within one business day with the actual sequence and cost for your land.",
      bullets: [
        "Under 60 seconds.",
        "Free buildability check on your parcel.",
        "Three real quotes for site work — not one.",
      ],
    },
  },

  hybrid: {
    meta: {
      title: "You own Florida land — here's how to actually put a home on it.",
      description:
        "The honest sequence: buildability, clearing, the home, financing, permits, set. Real numbers, real timelines, real plan.",
    },
    badge: "For landowners with no plan yet",
    headerCta: "Get my plan",
    headline: "You own the land. Now the home goes on it.",
    subhead:
      "Most Florida landowners freeze after the deed is signed. The sequence isn't intuitive — and the contractors won't explain it. Here's the actual path.",
    primaryCta: "Show me my plan",
    secondaryCta: "See the numbers",
    microFootnote:
      "Free buildability check. No credit pull. A real person calls — not a bot.",
    heroCard: {
      eyebrow: "Land + home, all in",
      bigStat: "$89,500",
      bigStatSecondary: "+ your land",
      chip: "The honest stack",
      rows: [
        { label: "3 bed manufactured", value: "$89,500" },
        { label: "Site work (clearing, septic)", value: "~$15,000" },
        { label: "Permits & set", value: "~$3,500" },
        { label: "All-in monthly (5% down)", value: "~$840/mo" },
      ],
      microline:
        "Same parcel, same home, plain math. <span class='font-semibold text-brand-strong'>You're in for under $1,000/mo.</span>",
      avatarsLine: "Florida landowners closing land-home loans every week.",
    },
    painEyebrow: "Why most landowners stall",
    painHeadline: "It isn't the land. It's that nobody tells you the order.",
    painSubhead:
      "The home part has six steps. Out of order, you lose months. In order, you're inside in 60–120 days.",
    painStats: [
      {
        stat: "6 mo",
        label: "Time lost when landowners hire site work before buildability is checked.",
      },
      { stat: "$10K+", label: "Typical spread between site-work bids on the same parcel." },
      { stat: "0", label: "Contractors who will explain the sequence for free." },
    ],
    pivotEyebrow: "Three real options",
    pivotHeadline: "What landowners actually do.",
    pivotOptions: [
      {
        title: "Sit on it.",
        body: "Pay taxes every year, watch the property line stay empty, tell yourself you'll get to it next spring.",
        bad: true,
      },
      {
        title: "Sell the land.",
        body: "Maybe break even, maybe lose to capital gains, definitely walk away from the original plan.",
        bad: true,
      },
      {
        title: "Put a home on it the right way.",
        body: "Buildability first, three quotes for site work, modern manufactured set on your foundation, land-home loan with your parcel as the down payment.",
        bad: false,
      },
    ],
    emotionalHeadline: "You didn&apos;t buy land to keep paying rent.",
    emotionalBody:
      "The land was supposed to be the start. Six months from now, you can be living on it — or you can be staring at the same empty lot.",
    emotionalKicker: "The sequence isn't hard. Knowing it is.",
    pathEyebrow: "The path",
    pathHeadline: "Six steps, in order.",
    pathSubhead:
      "We've walked landowners through this hundreds of times. Skipping a step doesn't save time — it adds months.",
    benefits: [
      {
        num: "01",
        title: "Buildability + financing prep",
        body: "Free check on your parcel. We pull the property card, confirm setbacks, and price the land-home loan with your land as collateral.",
      },
      {
        num: "02",
        title: "Three quotes for site work",
        body: "Clearing, pad, septic, well or hookup. We bring three local contractors. You pick. Spread is usually $10K+.",
      },
      {
        num: "03",
        title: "Pick the home, set, move in",
        body: "Three bed manufactured, hurricane-rated, set on your foundation in 30–60 days from delivery. Permits and CO included.",
      },
    ],
    numbersEyebrow: "Real numbers",
    numbersHeadline: "What land + home actually costs.",
    numbersSubhead:
      "All-in monthly payments on a 20-year fixed land-home loan with 5% down. Your real number depends on the parcel and home choice.",
    priceCards: [
      {
        price: "$58,000",
        payment: "~$520",
        tag: "Starter",
        features: [
          "2 bed / 1 bath · ~960 sq ft",
          "Smaller pad, simpler site work",
          "Land already owned outright",
        ],
      },
      {
        price: "$89,500",
        payment: "~$840",
        tag: "Most popular",
        highlight: true,
        features: [
          "3 bed / 2 bath · ~1,300 sq ft",
          "Standard site work",
          "What most landowners pick",
        ],
      },
      {
        price: "$139,000",
        payment: "~$1,210",
        tag: "Family",
        features: [
          "4 bed / 2 bath · ~1,700 sq ft",
          "Full pad + septic + well",
          "Room for the long haul",
        ],
      },
    ],
    stories: [
      {
        quote:
          "We bought 1.2 acres in Marion in 2021 thinking we'd build that summer. Three years later it was still empty. The Florida Home Path team did the buildability check in two days, lined up three site-work bids, and we were inside a 3/2 manufactured 87 days after we signed the loan.",
        name: "Aisha & Marc",
        place: "Marion County, FL",
      },
      {
        quote:
          "Nobody told me my land could be the down payment. I was saving for two more years before I called. Should have called the first day.",
        name: "Greg",
        place: "Putnam County, FL",
      },
    ],
    qualifierEyebrow: "Next step",
    qualifierHeadline: "Tell us about your parcel.",
    qualifierBody:
      "Free buildability check. A licensed Florida specialist calls within one business day with the actual sequence and cost.",
    qualifierBullets: [
      "Free buildability check on your parcel.",
      "Three real site-work bids — we pull them.",
      "Land-home loan with your parcel as down payment.",
    ],
  },

  bridge: {
    meta: {
      title: "Before you sit on that land another year — read this.",
      description:
        "A short pre-frame for Florida landowners about why the home part isn't as expensive or complicated as it looks.",
    },
    badge: "Quick read · 90 seconds",
    headerRight: "A short note before the next page",
    headline: "Before you let the land sit another year — read this.",
    leadParas: [
      "You bought the land. The home was supposed to follow. Then life happened, contractors didn't call back, and you stopped opening the file.",
      "The next page is the actual sequence — six steps, in order, with the actual cost. Most landowners don't realize how close they already are.",
    ],
    reframes: [
      {
        num: "01",
        title: "Your land is the down payment.",
        body: "Land-home loans treat your parcel as collateral. Most landowners qualify for 95% financing on the home with effectively zero new money down.",
      },
      {
        num: "02",
        title: "The sequence is six steps, not sixty.",
        body: "Buildability, clearing, home, financing, permits, set. We do four of the six for you. The other two we explain in plain English.",
      },
      {
        num: "03",
        title: "60–120 days, typical.",
        body: "Not five years. Not next spring. Two-to-four months from your signed application to the certificate of occupancy.",
      },
    ],
    caveatsEyebrow: "Two things to keep in mind",
    caveatsHeadline: "The next page isn't for everyone — and that's on purpose.",
    caveats: [
      {
        strong: "If your land isn't buildable,",
        body: "we'll tell you straight. The check is free and takes 48 hours. No pressure to do anything else.",
      },
      {
        strong: "If you're set on a site-built home,",
        body: "this isn't the path. Manufactured is the affordable, fast version — not the only version. Close the tab if it's not your fit.",
      },
    ],
    finalHeadline: "Ready? Here's the page.",
    finalSubhead: "Five minutes to read. If your land doesn't work, we say so.",
    finalCta: "Show me the next page",
    finalCtaHref: "/i-own-land/hybrid",
    finalCtaSub: "Opens on this site · Free buildability check · No obligation",
    ps: "The biggest reason landowners stay stuck isn't money — it's that nobody ever sat them down with the sequence. The next page is the sequence.",
  },

  application: {
    meta: {
      title: "Land-to-Home Application — Florida Home Path",
      description:
        "Tell us about your parcel and we'll send the buildability check, three site-work quotes, and a real cost plan.",
    },
    badge: "Application · ~3 minutes",
    headerRight: "Application · Reviewed by a human",
    headline: "Your land. The full plan.",
    subhead:
      "You've seen the sequence. This is the next step: a real application that a real human reads before they call. Honest answers get honest answers back.",
    trust: [
      { title: "No credit pull", body: "Estimates only. Nothing here hits your record." },
      {
        title: "Reviewed by a human",
        body: "One licensed Florida specialist — not a call center.",
      },
      {
        title: "Free buildability check",
        body: "We pull the property card and confirm your parcel works.",
      },
    ],
    fallbackHeadline: "Not ready to apply yet?",
    fallbackBody:
      "Read the longer page first — it covers the six-step sequence, the real costs, and the financing.",
    fallbackCta: "Read the long page first",
    fallbackCtaHref: "/i-own-land/hybrid",
    form: defaultApplicationForm({
      sectionBTitle: "Where you stand today.",
      q: {
        currentSituation: {
          label: "What's your current land situation?",
          options: [
            "Own the land outright",
            "Land is mortgaged",
            "Land is in family / inherited",
            "Closing on land soon",
          ],
        },
        currentMonthly: {
          label: "Roughly what's your current monthly housing cost?",
          placeholder: "e.g. $1,800",
        },
        preApproval: {
          label: "Have you talked to a lender about a land-home loan?",
          options: [
            "No, not yet",
            "Yes — explored but didn't pull",
            "Yes — pre-approved",
            "Have a different lender already",
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
          label: "Cash on hand (above your land)",
          options: [
            "Under $5,000",
            "$5,000–$10,000",
            "$10,000–$25,000",
            "$25,000+",
          ],
        },
        county: {
          label: "Florida county where the land is",
          placeholder: "e.g. Polk, Marion, Putnam",
        },
        beds: {
          label: "Bedrooms you need",
          options: ["2", "3", "4+", "Flexible"],
        },
        budget: {
          label: "Target home price (on top of the land)",
          options: ["Under $80K", "$80K–$120K", "$120K–$160K", "$160K+"],
        },
        timeline: {
          label: "When would you want to be on the land?",
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
          label: "Anything we should know about the parcel?",
          placeholder:
            "Acreage, well/septic status, easements, dealbreakers — all useful.",
        },
      },
    }),
  },

  thankYou: {
    meta: {
      title: "Got it — what happens next on your land",
      description:
        "Your land-to-home application is in. A specialist will pull your property card and call within one business day.",
    },
    badge: "Application received",
    headerRight: "Application received",
    headline: "Got it. We're pulling your property card now.",
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
        body: "One licensed Florida ownership specialist — not a call center. They'll have pulled your property card before they dial.",
      },
      {
        num: "03",
        when: "If your land is buildable",
        title: "A real plan with three quotes.",
        body: "Site-work bids from three local contractors, a home shortlist that fits your acreage, and the all-in land-home payment.",
      },
      {
        num: "04",
        when: "If your land isn't buildable",
        title: "An honest answer + a plan.",
        body: "We tell you exactly why — wetlands, setbacks, perc, whatever — and what to do instead. That part is free too.",
      },
    ],
    bookingHeadline: "Want to lock in your call time right now?",
    bookingBody:
      "Pick a 15-minute slot on a specialist's calendar. You stay first in line.",
    bookingCta: "Pick a call time",
    bookingCtaHref: "/i-own-land/booking",
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
        body: "Move our welcome email out of Promotions. The plan comes by email and you don't want it buried.",
      },
    ],
    readMoreHeadline: "While you wait — read the long page.",
    readMoreBody: "The six-step sequence, the costs, the financing — laid out straight.",
    readMorePrimary: "Read the long page",
    readMorePrimaryHref: "/i-own-land/hybrid",
    readMoreSecondary: "Or watch the 5-minute version",
    readMoreSecondaryHref: "/i-own-land/vsl",
  },

  booking: {
    meta: {
      title: "Book your land-to-home call — Florida Home Path",
      description:
        "Pick a 15-minute slot with a licensed Florida ownership specialist. They'll have your property card open before they dial.",
    },
    badge: "15-minute call · Eastern time",
    headerRight: "Book your 15-minute call",
    headline: "Pick when we should call.",
    subhead:
      "A 15-minute call with a licensed Florida ownership specialist. They'll have pulled your property card before they dial.",
    trust: [
      { title: "15 minutes", body: "No more, no less." },
      {
        title: "One human",
        body: "Same person who reads your file. Not a call center.",
      },
      {
        title: "Property card open",
        body: "We pull it before the call so you don't repeat yourself.",
      },
    ],
    coverEyebrow: "What we'll cover on the call",
    coverHeadline: "No fluff. Three things, in order.",
    coverBullets: [
      {
        num: "01",
        title: "What your parcel can take.",
        body: "Buildability, setbacks, septic, the actual constraints — straight from the property card and county records.",
      },
      {
        num: "02",
        title: "Three site-work quotes.",
        body: "Clearing, pad, septic, hookups — three local contractors, sent the same day if your land works.",
      },
      {
        num: "03",
        title: "The all-in land-home cost.",
        body: "Home + site work + permits + financing, in one number. No add-ons after the fact.",
      },
    ],
    fallbackHeadline: "Not ready to book?",
    fallbackBody:
      "No problem. Submit the application and a specialist will call you in their next available window.",
    fallbackCta: "Submit the application instead",
    fallbackCtaHref: "/i-own-land/application",
  },
};

export default copy;
