import type { ScenarioCopy } from "../../../_templates/types";
import { defaultApplicationForm } from "../../../_templates/sharedForm";

const BRAND = {
  name: "Florida Home Path",
  scenarioSlug: "first-generation",
  hrefBase: "/first-generation",
  disclosure:
    "Payment examples are illustrative and depend on credit, location, and home choice. Equal housing opportunity. ITIN financing available — ask the specialist.",
  footerCopyright: "Florida Home Path",
};

const copy: ScenarioCopy = {
  brand: BRAND,
  squeeze: {
    meta: {
      title: "First time buying a home in the U.S.? Real Florida path, plain language.",
      description:
        "First home in America? Three fields and we'll send a real Florida shortlist with the whole process explained — ITIN financing, plain language, no surprises.",
    },
    badge: "For first-time U.S. buyers · Plain language",
    headerRight: "First-time U.S. homebuyer · Plain English / Español",
    headline: "First home in America? We&apos;ll walk you through it.",
    subhead:
      "Your name on the deed. The American dream made concrete. Three fields and we'll send a real Florida shortlist plus the whole process in plain language — including ITIN financing and what the bank actually needs.",
    bullets: [
      "ITIN financing available — Social Security number not required.",
      "Plain-language process: every step, no surprises.",
      "Specialists who speak English and Spanish.",
    ],
    avatarsLine: "First-generation Florida homeowners every week. Your name on the deed.",
    formTitle: "Tell us about the family.",
    formSubhead: "Three fields. We send a real shortlist + the whole process in plain language.",
    fields: {
      name: { label: "First name", placeholder: "Maria" },
      phone: { label: "Mobile number", placeholder: "(555) 555-0123" },
      third: {
        label: "What's the situation?",
        placeholder: "Pick the closest…",
        options: [
          "First home in America, have SSN",
          "First home in America, ITIN only",
          "First home in America, mixed family",
          "Helping family buy first home",
          "Not sure where to start",
        ],
      },
    },
    submit: "Send me the path",
    microFootnote: "Under 60 seconds · No credit pull · English or Spanish on the call",
    successTitle: "Got it, {name}.",
    successBody:
      "A bilingual specialist will call within one business day with a real Florida shortlist and the whole homebuying process explained — paso a paso.",
    proofs: [
      { stat: "ITIN", label: "Financing available without SSN" },
      { stat: "$702/mo", label: "Typical all-in payment for a 3 bed family home" },
      { stat: "Bilingual", label: "English and Spanish specialists on every call" },
    ],
  },

  vsl: {
    meta: {
      title: "Watch: Tu primera casa en Florida, paso a paso",
      description:
        "A 5-minute walkthrough — in plain language — of how first-generation buyers in Florida actually buy their first home, including ITIN financing.",
    },
    badge: "First-time U.S. buyers · English / Español",
    headerCta: "Show me the path",
    headline: "Tu primera casa. The American dream — paso a paso.",
    subhead:
      "Five minutes on how first-generation Florida buyers actually do it — including ITIN financing, what the bank really wants, and what the catch isn't.",
    videoTitle: "Tu Primera Casa, Paso a Paso",
    videoSubtitle:
      "How first-generation Florida buyers go from renting to a deed in their name.",
    videoCaption: "Tap the video for the full transcript · Available in English or Spanish",
    trust: ["No credit pull", "ITIN financing available", "Bilingual specialists"],
    script: {
      title: "Tu Primera Casa, Paso a Paso",
      runtime: "5:08",
      beats: [
        {
          time: "0:00",
          label: "Hook",
          lines: [
            "If you came to America to build something — and the rent keeps eating it — this is for you.",
            "I&apos;m going to show you the actual path to your first U.S. home, in plain language. No tricks, no surprises.",
          ],
        },
        {
          time: "0:35",
          label: "What's possible",
          lines: [
            "First-generation buyers in Florida buy real homes every week. Your name on the deed. Three or four bedrooms. A yard. Real ownership.",
            "It doesn&apos;t require a million dollars or a 30-year-old credit history. It requires the right path.",
          ],
        },
        {
          time: "1:15",
          label: "Step 1: ITIN financing",
          lines: [
            "If you don&apos;t have a Social Security number, you can still buy. ITIN loans exist. You file taxes with an ITIN, you build credit with an ITIN, you finance a home with an ITIN.",
            "Most first-time buyers don&apos;t know this. We work with lenders who do this every day.",
          ],
        },
        {
          time: "2:00",
          label: "Step 2: What the bank actually needs",
          lines: [
            "Two years of work history (any job — W-2 or 1099). Two years of tax returns (with SSN or ITIN). A down payment of $5,000 to $10,000 for the homes we work with.",
            "That&apos;s it. We help you organize the paperwork before the bank ever sees it.",
          ],
        },
        {
          time: "2:50",
          label: "Step 3: The home",
          lines: [
            "Modern manufactured homes between $50,000 and $150,000. Three bedrooms, real yards, real deeds. HUD-code, hurricane-rated.",
            "Your name on the title. The American dream is a piece of paper, and we get you that paper.",
          ],
        },
        {
          time: "3:35",
          label: "Step 4: Closing",
          lines: [
            "Sixty to a hundred and twenty days from your application. We have bilingual closing agents in most Florida counties.",
            "On closing day you sign, you get the keys, and you walk into a home that has your name on the deed.",
          ],
        },
        {
          time: "4:20",
          label: "What this isn&apos;t",
          lines: [
            "We&apos;re not a notary scam. We&apos;re not a rent-to-own gotcha. We&apos;re not asking for a deposit before anything is real.",
            "We&apos;re a licensed FL business. The license is verifiable below this video. Verify before you trust.",
          ],
        },
        {
          time: "4:55",
          label: "Offer",
          lines: [
            "Three fields. A bilingual specialist calls within one business day. Honest, no credit pull, no pressure.",
            "Your first home in America is closer than you think.",
          ],
        },
      ],
    },
    beatsEyebrow: "What you'll learn in 5 minutes",
    beatsHeadline: "Three things first-generation buyers wish they'd known.",
    educationalBeats: [
      {
        num: "01",
        title: "ITIN financing is real.",
        body: "Without a Social Security number, you can still finance a home. Most first-time buyers don't know this. Most lenders won't bring it up.",
      },
      {
        num: "02",
        title: "$5,000–$10,000 down is enough.",
        body: "On the homes we work with. Not 20%. Not $50,000. The down payment myth keeps families renting for years they didn't need to.",
      },
      {
        num: "03",
        title: "Bilingual specialists matter.",
        body: "Every step in your language — application, closing, paperwork. So nothing gets lost in translation when stakes are highest.",
      },
    ],
    qualifier: {
      eyebrow: "Next step",
      headline: "Tell us about the family. We do the rest.",
      body: "A bilingual specialist calls within one business day with a real shortlist and the process explained in plain language.",
      bullets: [
        "Under 60 seconds.",
        "ITIN-friendly. No SSN required to apply.",
        "Specialists who speak your language.",
      ],
    },
  },

  hybrid: {
    meta: {
      title: "First home in Florida — for first-generation buyers, in plain language",
      description:
        "Your name on a deed in America. ITIN financing, plain process, real homes between $50K–$150K. The American dream made concrete.",
    },
    badge: "For first-time U.S. buyers",
    headerCta: "Show me the path",
    headline: "Your first home. Your name on the deed.",
    subhead:
      "If you came here to build something, the rent is eating it. There's a real Florida path to your first home — in plain language, with ITIN financing, and bilingual specialists who walk you through every step.",
    primaryCta: "Show me the path",
    secondaryCta: "See real numbers",
    microFootnote:
      "Under 60 seconds. No credit pull. Bilingual specialists. Honest about what's possible.",
    heroCard: {
      eyebrow: "Renting vs. owning",
      bigStat: "$2,100/mo",
      bigStatSecondary: "vs $702/mo",
      chip: "Same family, different paper",
      rows: [
        { label: "Florida 3-bed family rent", value: "~$2,100/mo" },
        { label: "3 bed manufactured (own)", value: "~$702/mo" },
        { label: "Down payment needed", value: "$5K–$10K" },
        { label: "ITIN financing", value: "Available" },
      ],
      microline:
        "Same family, same county. <span class='font-semibold text-brand-strong'>One path is rent. The other is a deed.</span>",
      avatarsLine: "First-generation Florida homeowners every week.",
    },
    painEyebrow: "Why first-time buyers stay renters longer",
    painHeadline: "It isn&apos;t money. It&apos;s the maze.",
    painSubhead:
      "The down-payment myth, the SSN myth, the paperwork in the wrong language. Three lies that keep first-generation families renting an extra five years.",
    painStats: [
      { stat: "20%", label: "What people think they need to put down. Actual number is often 5%." },
      { stat: "ITIN", label: "Available financing path most lenders won't mention" },
      { stat: "5 yrs", label: "Average extra time first-gen renters lose to misinformation" },
    ],
    pivotEyebrow: "Three real options",
    pivotHeadline: "What first-generation families actually do.",
    pivotOptions: [
      {
        title: "Keep renting and saving for 20% down.",
        body: "On a $385K site-built home, that's $77,000. Most families never get there — and the price keeps moving.",
        bad: true,
      },
      {
        title: "Buy a fixer with a sketchy seller.",
        body: "Surprise costs, no inspector who speaks the language, contracts you didn't fully understand. Many first-time buyers regret this within two years.",
        bad: true,
      },
      {
        title: "Buy a real, modern manufactured home with a guided process.",
        body: "$5K–$10K down, ITIN-friendly financing, bilingual specialists, every step in plain language. Real deed in your name.",
        bad: false,
      },
    ],
    emotionalHeadline: "You came here to build something.",
    emotionalBody:
      "A deed in your name is the American dream made concrete. Your kids inherit it. Your name is on the public record. Whatever you came here for, this is the foundation.",
    emotionalKicker: "Real ownership isn't a luxury. It's a deed.",
    pathEyebrow: "The Path In",
    pathHeadline: "The first-generation Florida path.",
    pathSubhead:
      "Modern manufactured homes — real, affordable, deeded — with guided closing in your language.",
    benefits: [
      {
        num: "01",
        title: "ITIN-friendly financing",
        body: "Don't have a Social Security number? You can still finance. ITIN loans are real, and we work with lenders who do them every day.",
      },
      {
        num: "02",
        title: "$5K–$10K down is enough",
        body: "On the homes we work with. The 20% myth has cost first-generation families five extra years of renting. Drop it.",
      },
      {
        num: "03",
        title: "Bilingual, plain-language guidance",
        body: "Every step — application, paperwork, closing — in English or Spanish. Nothing gets lost in translation when the stakes are highest.",
      },
    ],
    numbersEyebrow: "Real numbers",
    numbersHeadline: "What the first home actually costs.",
    numbersSubhead:
      "All-in monthly payments on a 20-year fixed loan with $5K–$10K down. Real homes you could move into in 60–120 days.",
    priceCards: [
      {
        price: "$58,000",
        payment: "~$455",
        tag: "Starter",
        features: [
          "2 bed / 1 bath · ~960 sq ft",
          "Move-in ready",
          "ITIN financing available",
        ],
      },
      {
        price: "$89,500",
        payment: "~$702",
        tag: "Most popular",
        highlight: true,
        features: [
          "3 bed / 2 bath · ~1,300 sq ft",
          "Real yard, real deed",
          "What most first-time buyers pick",
        ],
      },
      {
        price: "$139,000",
        payment: "~$1,090",
        tag: "Big family",
        features: [
          "4 bed / 2 bath · ~1,700 sq ft",
          "Room for grandparents too",
          "Multi-generation living",
        ],
      },
    ],
    stories: [
      {
        quote:
          "We came from Honduras in 2018. I thought we needed twenty percent down — that's $40,000 we didn't have. The Florida Home Path team showed us we needed $7,000. Three bedrooms, our name on the deed. My daughter was born in our own house, not a rental.",
        name: "Lucia & Walter",
        place: "Polk County, FL",
      },
      {
        quote:
          "I have an ITIN, not a Social. Three lenders had told me no. Florida Home Path connected me to a lender who does this every day. Closed on my home in 84 days. I cried at the closing table — happy ones.",
        name: "Tomás",
        place: "Pasco County, FL",
      },
    ],
    qualifierEyebrow: "Next step",
    qualifierHeadline: "Tell us about the family.",
    qualifierBody:
      "A bilingual specialist calls within one business day with a real shortlist and the process explained — paso a paso.",
    qualifierBullets: [
      "Under 60 seconds.",
      "ITIN-friendly. No SSN required to apply.",
      "Bilingual specialists on every call.",
    ],
  },

  bridge: {
    meta: {
      title: "Antes de firmar otro alquiler — léelo.",
      description:
        "A short, honest pre-frame for first-generation Florida buyers about the American homebuying path.",
    },
    badge: "Quick read · 90 seconds · ENG/ESP",
    headerRight: "A short note before the next page",
    headline: "Before you sign another lease — read this.",
    leadParas: [
      "If you came to America to build something, the rent is eating it. Maybe everyone you know is renting too. The path looks invisible.",
      "The next page is the actual first-generation Florida path to a real home — in plain language, with ITIN financing, and the lies broken down honestly.",
    ],
    reframes: [
      {
        num: "01",
        title: "It isn't 20% down.",
        body: "On the homes we work with, $5K–$10K is the typical down payment. The 20% number costs first-generation families five extra years of renting.",
      },
      {
        num: "02",
        title: "ITIN works.",
        body: "Without a Social Security number, you can still finance. The lenders who do this don't advertise it — but it's real, and we use it.",
      },
      {
        num: "03",
        title: "Bilingual closing isn't optional.",
        body: "If your closing isn't in your language, paperwork hides things. We work in English and Spanish at every step.",
      },
    ],
    caveatsEyebrow: "Two things to keep in mind",
    caveatsHeadline: "The next page isn't for everyone — and that's on purpose.",
    caveats: [
      {
        strong: "If you only want a $385K site-built home,",
        body: "this isn't that. Modern manufactured is the affordable, fast version — not the only version. Close the tab if it's not your fit.",
      },
      {
        strong: "If your family is ready to put their name on a deed,",
        body: "this is the path most first-generation Florida buyers actually use. The math works.",
      },
    ],
    finalHeadline: "Ready? Here's the page.",
    finalSubhead:
      "Five minutes to read — in English or Spanish on the call. If now isn't right, we say so.",
    finalCta: "Show me the page",
    finalCtaHref: "/first-generation/hybrid",
    finalCtaSub: "Opens on this site · No credit pull · Bilingual specialists",
    ps: "The American dream is a piece of paper with your name on it. The next page is how to get the paper.",
  },

  application: {
    meta: {
      title: "First-Generation Application — Florida Home Path",
      description:
        "Tell us about the family and we'll send a real shortlist plus the whole homebuying process in plain language. ITIN-friendly.",
    },
    badge: "Application · ~3 minutes · ENG/ESP",
    headerRight: "Application · Bilingual review",
    headline: "Tell us about the family.",
    subhead:
      "You've seen the path. This is the next step: a real application that a bilingual specialist reads before they call. Honest answers, both directions, in your language.",
    trust: [
      { title: "No credit pull", body: "Estimates only. Nothing here hits your record." },
      { title: "ITIN-friendly", body: "SSN is not required to apply." },
      {
        title: "Bilingual review",
        body: "English or Spanish — your call.",
      },
    ],
    fallbackHeadline: "Not ready to apply?",
    fallbackBody:
      "Read the longer page first — it covers ITIN financing, the down-payment myth, and the trade-offs.",
    fallbackCta: "Read the long page first",
    fallbackCtaHref: "/first-generation/hybrid",
    form: defaultApplicationForm({
      sectionATitle: "How do we reach you? · ¿Cómo te contactamos?",
      sectionBTitle: "Where the family stands today.",
      q: {
        currentSituation: {
          label: "Where is the family living now?",
          options: [
            "Renting an apartment",
            "Renting a house",
            "Living with family",
            "Other",
          ],
        },
        currentMonthly: {
          label: "Roughly how much rent are you paying now?",
          placeholder: "e.g. $2,100",
        },
        preApproval: {
          label: "Lender / financing situation",
          options: [
            "Not yet — exploring",
            "Pre-approved (SSN)",
            "Pre-approved (ITIN)",
            "Need help finding the right lender",
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
          label: "Credit score (estimate is fine — no pull)",
          options: [
            "Under 580",
            "580–639",
            "640–699",
            "700+",
            "Building credit / new to credit",
            "Not sure",
          ],
        },
        downPayment: {
          label: "Money saved for a down payment",
          options: [
            "Under $3,000",
            "$3,000–$7,000",
            "$7,000–$15,000",
            "$15,000+",
          ],
        },
        county: {
          label: "Florida county or area you want",
          placeholder: "e.g. Polk, Pasco, near family in Tampa",
        },
        beds: {
          label: "Bedrooms you need",
          options: ["2", "3", "4", "5+"],
        },
        budget: {
          label: "Target home price range",
          options: ["Under $80K", "$80K–$120K", "$120K–$160K", "$160K+"],
        },
        timeline: {
          label: "When do you want to be in the new home?",
          options: [
            "ASAP",
            "Next 60–90 days",
            "3–6 months",
            "Just exploring",
          ],
        },
        bestTime: {
          label: "Best time for a 15-minute call",
          options: [
            "Mornings",
            "Lunchtime",
            "Afternoons",
            "Evenings (after work)",
          ],
        },
        notes: {
          label: "Anything else? Algo más?",
          placeholder:
            "Family size, language preference, immigration status, dealbreakers — useful detail in any language.",
        },
      },
      successTitle: "Recibido, {name}. Application received.",
      successBody:
        "A bilingual licensed Florida specialist will read your file and call within one business day. Honest answers, in your language.",
    }),
  },

  thankYou: {
    meta: {
      title: "Recibido — your bilingual specialist will call",
      description:
        "Application received. A bilingual specialist will call within one business day with a real shortlist and the process explained.",
    },
    badge: "Application received · ENG/ESP",
    headerRight: "Application received · ENG/ESP",
    headline: "Recibido. Your file is on a bilingual specialist's desk.",
    subhead:
      "A real human — bilingual — will call within one business day. Don't close this tab yet — two things in 60 seconds make sure the call connects.",
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
        title: "A bilingual specialist calls.",
        body: "English or Spanish — your call. They'll have read your file before they dial.",
      },
      {
        num: "03",
        when: "If the math works",
        title: "A real shortlist for the family.",
        body: "Three to five 3 and 4-bedroom homes with all-in monthly payments. Sent in your language.",
      },
      {
        num: "04",
        when: "If the timing isn't right",
        title: "An honest answer + a plan.",
        body: "If now isn't the moment — credit needs three more months, or the lender needs a tax return — we tell you straight what to do next.",
      },
    ],
    bookingHeadline: "Want to lock in your call time right now?",
    bookingBody: "Pick a 15-minute slot — bilingual specialists run all hours.",
    bookingCta: "Pick a call time",
    bookingCtaHref: "/first-generation/booking",
    bookingCtaSub: "Takes 30 seconds · You can reschedule any time",
    actionsEyebrow: "Two things to do right now",
    actionsHeadline: "So the call connects.",
    actions: [
      {
        num: "1",
        title: "Save us in your contacts.",
        body: "“Florida Home Path” with a Florida area code. We call from 941, 813, 407, or 904 numbers.",
      },
      {
        num: "2",
        title: "Pull your last 2 paystubs and tax return.",
        body: "We need them. Pull them now so the lender call moves fast.",
      },
    ],
    readMoreHeadline: "While you wait — read the long page.",
    readMoreBody: "ITIN financing, the down-payment myth, the actual process. Five minutes.",
    readMorePrimary: "Read the long page",
    readMorePrimaryHref: "/first-generation/hybrid",
    readMoreSecondary: "Or watch the 5-minute version",
    readMoreSecondaryHref: "/first-generation/vsl",
  },

  booking: {
    meta: {
      title: "Book your bilingual call — Florida Home Path",
      description:
        "Pick a 15-minute slot with a bilingual licensed Florida specialist. English or Spanish, your call.",
    },
    badge: "15-minute call · ENG/ESP",
    headerRight: "Book your bilingual call",
    headline: "Pick when we should call.",
    subhead:
      "A 15-minute call with a bilingual licensed Florida ownership specialist. They'll have your file open and a family shortlist ready.",
    trust: [
      { title: "15 minutes", body: "No more, no less." },
      {
        title: "Bilingual",
        body: "English or Spanish — your call.",
      },
      {
        title: "ITIN-friendly",
        body: "SSN not required to talk or to qualify.",
      },
    ],
    coverEyebrow: "What we'll cover on the call",
    coverHeadline: "No fluff. Three things, in order.",
    coverBullets: [
      {
        num: "01",
        title: "What actually fits the family.",
        body: "Bedrooms, county, payment ceiling, language preference. We work backwards from your reality.",
      },
      {
        num: "02",
        title: "Real homes available right now.",
        body: "Three to five matches with all-in payments. Sent the same day, in your language.",
      },
      {
        num: "03",
        title: "Honest path forward.",
        body: "If now isn't right, here's what to do in the next 90 days. If it is, here's the next concrete step.",
      },
    ],
    fallbackHeadline: "Not ready to book?",
    fallbackBody:
      "Submit the application and a bilingual specialist will call you in their next available window.",
    fallbackCta: "Submit the application instead",
    fallbackCtaHref: "/first-generation/application",
  },
};

export default copy;
