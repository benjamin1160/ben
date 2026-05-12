import type { ScenarioCopy } from "../../../_templates/types";
import { defaultApplicationForm } from "../../../_templates/sharedForm";

const BRAND = {
  name: "Florida Home Path",
  scenarioSlug: "need-it-now",
  hrefBase: "/need-it-now",
  disclosure:
    "Payment examples are illustrative and depend on credit, location, and home choice. Equal housing opportunity.",
  footerCopyright: "Florida Home Path",
};

const copy: ScenarioCopy = {
  brand: BRAND,
  squeeze: {
    meta: {
      title: "Need a Florida home in 30–60 days? See what's actually available.",
      description:
        "Divorce, eviction, relocation — three fields and we'll send a real shortlist of move-in-ready Florida homes that can close in 30–60 days.",
    },
    badge: "For people on a real deadline",
    headerRight: "Move-in ready · 30–60 days",
    headline: "Need to be in a home — fast?",
    subhead:
      "Divorce, eviction, relocation, lease ending. Tell us your deadline and we'll send a shortlist of Florida homes that can actually close on your timeline.",
    bullets: [
      "Move-in-ready inventory only — no fixers, no waits.",
      "Closes in 30–60 days, not 6 months.",
      "Honest answer if your deadline isn't realistic — we say so.",
    ],
    avatarsLine: "Florida buyers closing on tight deadlines every week.",
    formTitle: "What's your deadline?",
    formSubhead: "Three fields. We'll send a real shortlist tonight.",
    fields: {
      name: { label: "First name", placeholder: "Alex" },
      phone: { label: "Mobile number", placeholder: "(555) 555-0123" },
      third: {
        label: "When do you actually need to be in?",
        placeholder: "Pick the deadline…",
        options: [
          "30 days or less",
          "30–60 days",
          "60–90 days",
          "Flexible — but soon",
        ],
      },
    },
    submit: "Send me what's available",
    microFootnote: "Under 60 seconds · No credit pull · No obligation",
    successTitle: "Got it, {name}.",
    successBody:
      "A specialist will call within hours — not days — with a shortlist that fits your deadline.",
    proofs: [
      { stat: "30–60 days", label: "Typical close-to-keys window for our buyers" },
      { stat: "Same day", label: "Shortlist sent — not a 'we'll get back to you'" },
      { stat: "Move-in-ready", label: "Every home we send. No surprise repairs." },
    ],
  },

  vsl: {
    meta: {
      title: "Watch: Florida home in 30–60 days, honestly",
      description:
        "A 5-minute walkthrough of how to actually buy a Florida home on a real deadline — divorce, eviction, relocation. Sold honestly.",
    },
    badge: "For people on a real deadline · Move-in ready",
    headerCta: "See what's available",
    headline: "Watch this if your deadline is real.",
    subhead:
      "Five minutes on how to actually buy a Florida home in 30–60 days when divorce, eviction, or relocation isn't giving you longer.",
    videoTitle: "Florida Home, Fast and Honest",
    videoSubtitle:
      "How buyers on real deadlines find a move-in-ready home and close in 30–60 days.",
    videoCaption: "Tap the video to read the full transcript",
    trust: ["No credit pull", "Same-day shortlist", "Honest if it's too tight"],
    script: {
      title: "Florida Home, Fast and Honest",
      runtime: "4:48",
      beats: [
        {
          time: "0:00",
          label: "Hook",
          lines: [
            "If you have a real deadline — divorce, eviction, lease ending, relocation — and the standard 60-90 day mortgage timeline doesn&apos;t work for you, this is for you.",
          ],
        },
        {
          time: "0:25",
          label: "Why standard timelines fail you",
          lines: [
            "A typical site-built FL home closes in 60-90 days from offer. Inspections, appraisal, title, lender. If your deadline is 45 days, you&apos;re already losing.",
          ],
        },
        {
          time: "1:00",
          label: "The faster path",
          lines: [
            "Modern manufactured homes, in resident-owned communities or on already-improved lots, can close in 30-60 days. Sometimes faster if it&apos;s a cash deal or the inventory is fresh.",
            "We only show you move-in-ready inventory. No fixers, no waiting on contractors, no surprises.",
          ],
        },
        {
          time: "1:50",
          label: "The honest screen",
          lines: [
            "Here&apos;s the screen we run for you, in order:",
            "One — is the home move-in ready today? Two — does the seller need 60+ days to close? Three — does the lender (or your cash) clear in your window?",
            "If any of those is no, we tell you up front. We won&apos;t waste your last 30 days.",
          ],
        },
        {
          time: "2:45",
          label: "Real cases",
          lines: [
            "Maria had 38 days from divorce filing. We closed her in 34 on a 3/2 in Polk County. Her ex got the house, she got the new keys before he got the alimony pen.",
            "Diego got a relocation offer with a hard 60-day window. He flew in once, picked the home, and we closed in 51 days.",
          ],
        },
        {
          time: "3:35",
          label: "What we won&apos;t do",
          lines: [
            "We won&apos;t show you a home we know can&apos;t close in your window. We won&apos;t tell you 30 days when the realistic answer is 60.",
            "If your deadline is too tight, we tell you what would make it work — and what your fallback should be.",
          ],
        },
        {
          time: "4:20",
          label: "Offer",
          lines: [
            "Three fields. We&apos;ll call within hours, not days. No credit pull. Honest about what your deadline can actually do.",
          ],
        },
      ],
    },
    beatsEyebrow: "What you'll learn in 5 minutes",
    beatsHeadline: "Three things speed-buyers wish they'd known.",
    educationalBeats: [
      {
        num: "01",
        title: "Site-built timelines won't save you.",
        body: "60-90 days, every time. Manufactured can close in 30-60. The math is what it is.",
      },
      {
        num: "02",
        title: "Move-in-ready means move-in-ready.",
        body: "We screen out fixers, waits, and inventory that needs lender pre-approval cycles you don't have time for.",
      },
      {
        num: "03",
        title: "We tell you straight if it's too tight.",
        body: "If your deadline is 14 days, we tell you up front. We don't waste your time — or ours.",
      },
    ],
    qualifier: {
      eyebrow: "Next step",
      headline: "Tell us your deadline.",
      body: "A specialist calls within hours with a shortlist that can actually close in your window.",
      bullets: [
        "Same-day shortlist if it's a fit.",
        "No credit pull. Nothing on your record.",
        "Honest if your timeline is too tight — we say so.",
      ],
    },
  },

  hybrid: {
    meta: {
      title: "Florida home in 30–60 days — for buyers on a real deadline",
      description:
        "Divorce, eviction, relocation. Move-in-ready inventory, real timelines, honest screens.",
    },
    badge: "For people on a real deadline",
    headerCta: "See what's available",
    headline: "You don&apos;t have six months. Here&apos;s the path that actually fits 30 to 60 days.",
    subhead:
      "Divorce, eviction, relocation, lease running out. The standard FL homebuying timeline doesn't fit your math. There's a faster path that's honest about what it can and can't do.",
    primaryCta: "Show me what's available",
    secondaryCta: "See the timeline",
    microFootnote:
      "Under 60 seconds. We call in hours, not days. Honest if your deadline is too tight.",
    heroCard: {
      eyebrow: "Site-built vs. manufactured",
      bigStat: "60–90d",
      bigStatSecondary: "vs 30–60d",
      chip: "Real timeline",
      rows: [
        { label: "Site-built FL home (typical)", value: "60–90 days" },
        { label: "Move-in-ready manufactured", value: "30–60 days" },
        { label: "Cash deals (rare)", value: "14–21 days" },
        { label: "Lender pre-approval needed", value: "Add 7–14 days" },
      ],
      microline:
        "Same buyer, different inventory. <span class='font-semibold text-brand-strong'>The 30 days is real if the deadline is real.</span>",
      avatarsLine: "Florida buyers closing on tight deadlines every week.",
    },
    painEyebrow: "Why standard timelines fail",
    painHeadline: "When the deadline is hard, the math changes.",
    painSubhead:
      "Every part of a normal closing — inspection, appraisal, title, lender — has a queue. If you only have 45 days, you can't afford queueing.",
    painStats: [
      { stat: "45–60d", label: "Average inspection-to-close on FL site-built" },
      { stat: "10–14d", label: "Lender pre-approval, fresh start" },
      {
        stat: "0",
        label: "Real estate agents who'll tell you up front your deadline is too tight",
      },
    ],
    pivotEyebrow: "Three real options",
    pivotHeadline: "What deadline-buyers actually do.",
    pivotOptions: [
      {
        title: "Sign another short-term lease.",
        body: "Pay $4,500 in deposits and one month's rent for 60 more days you don't actually want. Then go through this exact same panic again.",
        bad: true,
      },
      {
        title: "Move in with family.",
        body: "Honest sometimes works. But not for everyone, and not as a six-month plan. The boundaries fray.",
        bad: true,
      },
      {
        title: "Buy a move-in-ready home in 30–60 days.",
        body: "Real path. We show you only inventory that can actually close in your window. We tell you if it can't. No false hope.",
        bad: false,
      },
    ],
    emotionalHeadline: "You don&apos;t need a slogan. You need keys.",
    emotionalBody:
      "Whatever pushed you here — the divorce, the relocation, the eviction notice — isn&apos;t going to wait while you run a six-month homebuying process. The math has to fit the deadline, and most paths don&apos;t.",
    emotionalKicker: "30 to 60 days is the realistic window. We work in it.",
    pathEyebrow: "The Path In",
    pathHeadline: "Move-in-ready inventory. Honest screens.",
    pathSubhead: "We only show you what can actually close in your window.",
    benefits: [
      {
        num: "01",
        title: "Same-day shortlist",
        body: "Within 24 hours of your application, you have 3-5 homes that can actually close in your timeline. Not a maybe list — a real list.",
      },
      {
        num: "02",
        title: "Move-in ready, screened",
        body: "No fixers. No waiting on contractors. No appliances that ship in 8 weeks. Move in the day you close.",
      },
      {
        num: "03",
        title: "Honest if it can't",
        body: "If your deadline is 14 days, we tell you. We don't burn your last weeks on a process that won't finish in time.",
      },
    ],
    numbersEyebrow: "Real numbers",
    numbersHeadline: "What's actually in the 30–60 day band.",
    numbersSubhead:
      "All-in monthly payments on a 20-year fixed loan with 5% down. Move-in-ready inventory only.",
    priceCards: [
      {
        price: "$58,000",
        payment: "~$455",
        tag: "Fastest",
        features: [
          "2 bed / 1 bath · ~960 sq ft",
          "Vacant — closes fastest",
          "Resident-owned community",
        ],
      },
      {
        price: "$89,500",
        payment: "~$702",
        tag: "Most popular",
        highlight: true,
        features: [
          "3 bed / 2 bath · ~1,300 sq ft",
          "Move-in ready, no repairs",
          "30-day close achievable",
        ],
      },
      {
        price: "$139,000",
        payment: "~$1,090",
        tag: "Family-fast",
        features: [
          "4 bed / 2 bath · ~1,700 sq ft",
          "Vacant or seller-flexible",
          "45-day close typical",
        ],
      },
    ],
    stories: [
      {
        quote:
          "I had 38 days from filing the divorce papers. The realtors I called all said 60-90. Florida Home Path called back in three hours, sent me four homes the same day, and we closed on day 34. My ex got the house, I got the keys first.",
        name: "Maria",
        place: "Polk County, FL",
      },
      {
        quote:
          "Got a hard 60-day relocation window. Flew in once, walked through three homes, picked one. Closed in 51 days. The team coordinated everything while I was still working.",
        name: "Diego",
        place: "Pasco County, FL",
      },
    ],
    qualifierEyebrow: "Next step",
    qualifierHeadline: "Tell us your deadline.",
    qualifierBody:
      "A specialist calls within hours with a shortlist that can actually close in your window — and tells you straight if it can't.",
    qualifierBullets: [
      "Same-day shortlist.",
      "Move-in-ready only.",
      "Honest screen — no false hope.",
    ],
  },

  bridge: {
    meta: {
      title: "Before you sign another short-term lease — read this.",
      description:
        "A short pre-frame for buyers on a deadline about why 30–60 day Florida homebuying is real.",
    },
    badge: "Quick read · 90 seconds",
    headerRight: "A short note before the next page",
    headline: "Before you sign another short-term lease — read this.",
    leadParas: [
      "Whatever brought you here — divorce, eviction, relocation, a sale of the family home — has a deadline. The deadline isn't moving.",
      "The next page is the only Florida path we know of that fits a real 30–60 day window without lying about it.",
    ],
    reframes: [
      {
        num: "01",
        title: "Site-built isn't your timeline.",
        body: "Site-built FL homes close in 60–90 days, every time. Inspections, appraisal, title, lender. If your deadline is tight, the math doesn't bend.",
      },
      {
        num: "02",
        title: "Move-in-ready manufactured can.",
        body: "Already inspected, already on permanent foundations, already permitted. We show you only inventory that can close in your window.",
      },
      {
        num: "03",
        title: "We tell you straight if it's too tight.",
        body: "14 days? Probably no. 30 days? Usually yes. 45+ days? Almost always. We won't burn your last weeks on a maybe.",
      },
    ],
    caveatsEyebrow: "Two things to keep in mind",
    caveatsHeadline: "The next page isn't for everyone — and that's on purpose.",
    caveats: [
      {
        strong: "If you have 6+ months,",
        body: "you don't need this. Use the regular path with regular agents. We're built for the people who don't have that runway.",
      },
      {
        strong: "If your deadline is real and uncomfortably close,",
        body: "this is the path. Move-in-ready, honest screens, fast calls. We've done this hundreds of times.",
      },
    ],
    finalHeadline: "Ready? Here's the page.",
    finalSubhead: "Five minutes to read. If your deadline is too tight, we say so.",
    finalCta: "Show me the next page",
    finalCtaHref: "/need-it-now/hybrid",
    finalCtaSub: "Opens on this site · No credit pull · No obligation",
    ps: "If you're past panic and into planning, that's where we work. The next page is the math.",
  },

  application: {
    meta: {
      title: "Need-It-Now Application — Florida Home Path",
      description:
        "Tell us your deadline and we'll send a shortlist that can actually close in your window — or tell you straight if it can't.",
    },
    badge: "Application · ~3 minutes · Reviewed today",
    headerRight: "Application · Reviewed by a human",
    headline: "Tell us your deadline.",
    subhead:
      "You've seen the path. This is the next step: a real application that gets read today, not next week. Honest answers, both directions.",
    trust: [
      { title: "No credit pull", body: "Estimates only. Nothing here hits your record." },
      { title: "Reviewed today", body: "We don't queue deadline files." },
      { title: "Same-day callback", body: "Within hours of submission." },
    ],
    fallbackHeadline: "Not ready to apply?",
    fallbackBody: "Read the longer page first — timeline, screens, real numbers.",
    fallbackCta: "Read the long page first",
    fallbackCtaHref: "/need-it-now/hybrid",
    form: defaultApplicationForm({
      sectionATitle: "How do we reach you fast?",
      sectionBTitle: "What's the deadline?",
      q: {
        currentSituation: {
          label: "What's pushing the timeline?",
          options: [
            "Divorce / separation",
            "Eviction / landlord selling",
            "Relocation for work",
            "Lease ending soon",
            "Other",
          ],
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
            "Paying cash",
          ],
        },
        comfortablePayment: {
          label: "Comfortable monthly payment range",
          options: [
            "Under $700/mo",
            "$700–$1,000/mo",
            "$1,000–$1,300/mo",
            "$1,300+/mo",
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
          label: "Cash on hand for the move",
          options: [
            "Under $5,000",
            "$5,000–$15,000",
            "$15,000–$50,000",
            "$50,000+",
          ],
        },
        county: {
          label: "Florida county or area you need to be in",
          placeholder: "e.g. Polk, Pasco, near Tampa",
        },
        beds: {
          label: "Bedrooms you need",
          options: ["1", "2", "3", "4+"],
        },
        budget: {
          label: "Target home price range",
          options: ["Under $80K", "$80K–$120K", "$120K–$160K", "$160K+"],
        },
        timeline: {
          label: "Hard deadline to be in the new place?",
          options: [
            "30 days or less",
            "30–60 days",
            "60–90 days",
            "Flexible — but soon",
          ],
        },
        bestTime: {
          label: "Best time for a same-day callback",
          options: ["Morning", "Lunchtime", "Afternoon", "Evening", "Anytime"],
        },
        notes: {
          label: "What's the deadline-driving event?",
          placeholder:
            "Court date, last lease day, relocation start. The honester, the better.",
        },
      },
      successTitle: "Got it, {name} — your file is on a specialist's desk now.",
      successBody:
        "We pull deadline files first. A specialist will call within hours, not days, with what we can actually do for your window.",
    }),
  },

  thankYou: {
    meta: {
      title: "Got it — your deadline file is on a specialist's desk now",
      description:
        "Application received. We pull deadline files first. A specialist will call within hours.",
    },
    badge: "Application received · Deadline file",
    headerRight: "Deadline file · Priority",
    headline: "Got it. Your file is on a specialist's desk now.",
    subhead:
      "We pull deadline files first. A real human will call within hours — not days. Don't close this tab yet.",
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
        when: "Within hours — not days",
        title: "A specialist calls you.",
        body: "Deadline files don't queue. They'll have read your file before they dial.",
      },
      {
        num: "03",
        when: "If your deadline is achievable",
        title: "A same-day shortlist.",
        body: "3-5 move-in-ready homes that can actually close in your window. Real numbers, real timelines.",
      },
      {
        num: "04",
        when: "If your deadline is too tight",
        title: "An honest answer + a fallback.",
        body: "We tell you straight what's possible and what isn't. We help you find a stopgap if needed. No false hope.",
      },
    ],
    bookingHeadline: "Want to lock in a same-day call?",
    bookingBody: "Pick a 15-minute slot today or tomorrow.",
    bookingCta: "Pick a call time",
    bookingCtaHref: "/need-it-now/booking",
    bookingCtaSub: "Takes 30 seconds",
    actionsEyebrow: "Two things to do right now",
    actionsHeadline: "So we can hit your deadline.",
    actions: [
      {
        num: "1",
        title: "Save us in your contacts.",
        body: "“Florida Home Path” with a Florida area code. We call from 941, 813, 407, or 904 numbers.",
      },
      {
        num: "2",
        title: "Pull your last 2 paystubs.",
        body: "If you're financing, we'll need them. Pull them now so the lender call can move fast.",
      },
    ],
    readMoreHeadline: "While you wait — read the long page.",
    readMoreBody: "Timeline, screens, real numbers. Five minutes.",
    readMorePrimary: "Read the long page",
    readMorePrimaryHref: "/need-it-now/hybrid",
    readMoreSecondary: "Or watch the 5-minute version",
    readMoreSecondaryHref: "/need-it-now/vsl",
  },

  booking: {
    meta: {
      title: "Book a same-day call — Florida Home Path",
      description:
        "Pick a 15-minute slot today or tomorrow. We pull deadline files first.",
    },
    badge: "15-minute call · Same-day available",
    headerRight: "Same-day available",
    headline: "Pick when we should call.",
    subhead:
      "A 15-minute call. They'll have your deadline in front of them and a list ready to walk through.",
    trust: [
      { title: "Same-day", body: "Pick today or tomorrow." },
      { title: "One human", body: "Same person who reads your file." },
      { title: "Deadline-tuned", body: "We screen the list before the call." },
    ],
    coverEyebrow: "What we'll cover on the call",
    coverHeadline: "No fluff. Three things, in order.",
    coverBullets: [
      {
        num: "01",
        title: "Confirm your deadline.",
        body: "What's hard, what's flexible, what happens if we miss it.",
      },
      {
        num: "02",
        title: "The shortlist.",
        body: "3-5 move-in-ready homes that can actually close in your window.",
      },
      {
        num: "03",
        title: "Honest answer.",
        body: "If we can hit it, here's the plan. If we can't, here's the fallback. We don't sell false hope.",
      },
    ],
    fallbackHeadline: "Not ready to book?",
    fallbackBody:
      "Submit the application and a specialist will call you within hours.",
    fallbackCta: "Submit the application instead",
    fallbackCtaHref: "/need-it-now/application",
  },
};

export default copy;
