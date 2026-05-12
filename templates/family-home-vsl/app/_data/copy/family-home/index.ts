import type { ScenarioCopy } from "../../../_templates/types";
import { defaultApplicationForm } from "../../../_templates/sharedForm";

const BRAND = {
  name: "Florida Home Path",
  scenarioSlug: "family-home",
  hrefBase: "/family-home",
  disclosure:
    "Payment examples are illustrative and depend on credit, location, and home choice. Equal housing opportunity.",
  footerCopyright: "Florida Home Path",
};

const copy: ScenarioCopy = {
  brand: BRAND,
  squeeze: {
    meta: {
      title: "A real Florida home for your family — under $1,000/mo",
      description:
        "Tired of cramming the kids into a two-bedroom rental? Three fields and we'll send a real shortlist of 3 and 4-bedroom Florida homes that actually fit your monthly.",
    },
    badge: "For working-class families ready to stop renting",
    headerRight: "FL homes for families · 3 & 4 bedrooms",
    headline: "Your kids deserve their own room.",
    subhead:
      "Three, four bedrooms. A yard. A real address — not a rental that doubles every two years. Tell us where you want to live and we'll send a shortlist tonight.",
    bullets: [
      "Real ownership, real deed — your name on it.",
      "Payments most families pay run $700–$1,100 all in.",
      "No bait-and-switch. The list price is the price.",
    ],
    avatarsLine: "Florida families closing on their first homes every week.",
    formTitle: "Where should the family land?",
    formSubhead: "Three fields. We'll send a real shortlist tonight.",
    fields: {
      name: { label: "First name", placeholder: "Alex" },
      phone: { label: "Mobile number", placeholder: "(555) 555-0123" },
      third: {
        label: "How many bedrooms do you need?",
        placeholder: "Pick the count…",
        options: ["2 bedrooms", "3 bedrooms", "4 bedrooms", "5+ bedrooms"],
      },
    },
    submit: "Send me the shortlist",
    microFootnote: "Under 60 seconds · No credit pull · No obligation",
    successTitle: "Got it, {name}.",
    successBody:
      "A licensed Florida ownership specialist will call within one business day with a shortlist of homes that actually fit the family.",
    proofs: [
      { stat: "~$702/mo", label: "All-in on a typical 3 bed manufactured" },
      { stat: "$80K–$150K", label: "Median family-home range, all in" },
      { stat: "60–120 days", label: "From hello to keys, typical" },
    ],
  },

  vsl: {
    meta: {
      title: "Watch: A real home for your family, in 5 minutes",
      description:
        "A 5-minute walkthrough of how working-class Florida families stop renting and start owning — without the lottery and without the bidding war.",
    },
    badge: "For families ready to stop renting · Real ownership",
    headerCta: "See what fits",
    headline: "Watch this before you sign another lease.",
    subhead:
      "Five minutes on how Florida families with normal incomes are quietly buying real homes — three, four bedrooms, real yards — for less than they're paying in rent.",
    videoTitle: "A Real Home for Your Family",
    videoSubtitle:
      "How working-class Florida families are stopping the rent trap — sold honestly, trade-offs included.",
    videoCaption: "Tap the video to read the full transcript",
    trust: ["No credit pull", "Real human follow-up", "Trade-offs explained"],
    script: {
      title: "A Real Home for Your Family",
      runtime: "5:02",
      beats: [
        {
          time: "0:00",
          label: "Hook",
          lines: [
            "If the kids are sharing a room and the rent went up again — you&apos;re in the conversation 90% of working-class Florida families are having right now.",
            "I&apos;m going to show you the way out, in five minutes. No fluff, no upsell.",
          ],
        },
        {
          time: "0:35",
          label: "The trap",
          lines: [
            "Rent in Florida went up 28% in three years. Median family rent is now over $2,000 a month for a three-bedroom — if you can find one — and the lease keeps renewing higher every year.",
            "Saving 20% for a $385,000 site-built home is mathematically impossible on most family incomes. The math broke.",
          ],
        },
        {
          time: "1:20",
          label: "What the math actually allows",
          lines: [
            "Florida has a quiet inventory of three and four-bedroom homes between $80K and $150K. Modern manufactured — HUD-code, hurricane-rated, real square footage, real yard, real deed.",
            "On a 20-year fixed loan with 5% down, an $89,500 home runs about $702 a month all in. Less than rent, by a lot.",
          ],
        },
        {
          time: "2:10",
          label: "Honest trade-off",
          lines: [
            "I&apos;m going to be straight: a manufactured home appreciates slower than site-built. But you actually own it — instead of paying $24,000 a year in rent that builds nothing.",
            "In five years, you&apos;re sitting on real equity. The kids have stayed in one school. You sleep at night.",
          ],
        },
        {
          time: "3:00",
          label: "Real families",
          lines: [
            "Carla and Mike were paying $2,100 a month for a two-bedroom. They bought a 4/2 manufactured for $112K. New payment: $880. The kids each have their own room. Carla&apos;s mom moved into the spare.",
            "DJ was getting evicted by a landlord who wanted to flip the house. He bought a 3/2 for $78K. His son is still in the same school district. Payment is $620.",
          ],
        },
        {
          time: "3:50",
          label: "What we do",
          lines: [
            "We aren&apos;t a builder. We aren&apos;t a lender. We&apos;re the people who&apos;ve walked 800+ Florida families through this in the last three years.",
            "We pull listings, we run real numbers, we tell you the trade-offs straight. If your situation doesn&apos;t fit, we tell you that too.",
          ],
        },
        {
          time: "4:30",
          label: "Offer",
          lines: [
            "Three fields below this video. A real human calls within one business day. Honest, no credit pull, no pressure.",
            "If your family wants this, the path is open.",
          ],
        },
      ],
    },
    beatsEyebrow: "What you'll learn in 5 minutes",
    beatsHeadline: "Three things working-class families wish they'd known.",
    educationalBeats: [
      {
        num: "01",
        title: "Rent is the worst loan you'll ever have.",
        body: "$24,000 a year in payments that build zero equity. That number compounds against you every year you wait.",
      },
      {
        num: "02",
        title: "The $80K–$150K Florida home is real.",
        body: "Three to four bedrooms, real yards, real deed. Modern manufactured isn't what your grandmother's was.",
      },
      {
        num: "03",
        title: "Most families qualify with less than they think.",
        body: "Down payments often run $3K–$5K. Credit floors are friendlier than you'd guess.",
      },
    ],
    qualifier: {
      eyebrow: "Next step",
      headline: "Ready? Here's the form.",
      body: "Three fields and a licensed Florida specialist calls you within one business day. They'll have read your file. Honest answers, no credit pull.",
      bullets: [
        "Under 60 seconds.",
        "No credit pull. Nothing on your record.",
        "If it doesn't fit, we say so.",
      ],
    },
  },

  hybrid: {
    meta: {
      title: "Real Florida homes for working-class families — under $1,000/mo",
      description:
        "Three to four bedrooms, real yards, real deeds. The honest math on how Florida families stop renting and start owning.",
    },
    badge: "For families ready to stop renting",
    headerCta: "See what fits",
    headline: "A real home. For your family. For less than your rent.",
    subhead:
      "If the kids are sharing rooms and the rent went up again — there's a path most families don't know about. The math is honest and the homes are real.",
    primaryCta: "Show me what fits",
    secondaryCta: "See the numbers",
    microFootnote:
      "Under 60 seconds. No credit pull. A real person calls — not a bot.",
    heroCard: {
      eyebrow: "Same family, two paths",
      bigStat: "$2,100/mo",
      bigStatSecondary: "vs $702/mo",
      chip: "Rent vs own",
      rows: [
        { label: "FL median 3-bed rent", value: "~$2,100/mo" },
        { label: "3 bed manufactured (own)", value: "~$702/mo" },
        { label: "Annual delta saved", value: "~$16,800" },
        { label: "Equity after 5 years (rent)", value: "$0" },
      ],
      microline:
        "Same household. <span class='font-semibold text-brand-strong'>One path builds something. The other doesn't.</span>",
      avatarsLine: "Florida families closing every week — kids in their own rooms.",
    },
    painEyebrow: "The Rent Trap",
    painHeadline: "It isn't getting cheaper. The math is brutal.",
    painSubhead:
      "Florida rent climbed 28% in three years. Wages didn't follow. Every renewal is a mini-eviction notice.",
    painStats: [
      { stat: "+28%", label: "FL rent increase, last three years" },
      { stat: "$25K/yr", label: "What the average FL family pays in rent" },
      { stat: "0%", label: "Of rent that builds equity for your family" },
    ],
    pivotEyebrow: "Three real options",
    pivotHeadline: "What working-class families actually do.",
    pivotOptions: [
      {
        title: "Keep renting.",
        body: "Pay $25K a year, build zero, hope the landlord doesn't sell. Renewal goes up every year.",
        bad: true,
      },
      {
        title: "Wait for a $385K site-built to become affordable.",
        body: "It won't. The math doesn't bend. Florida prices climbed every year since 2012, recession included.",
        bad: true,
      },
      {
        title: "Buy a 3 or 4-bedroom manufactured home.",
        body: "Real deed, real yard, $80K–$150K, payment under $1,100/mo. The path most working-class families actually take.",
        bad: false,
      },
    ],
    emotionalHeadline: "Your kids won&apos;t remember the rent number.",
    emotionalBody:
      "They&apos;ll remember the address. The bedroom that was theirs. The yard. Whether they had to switch schools every two years. You can give them that, even on a normal income.",
    emotionalKicker: "Real ownership isn't a downgrade. It's a deed.",
    pathEyebrow: "The Path In",
    pathHeadline: "Three or four bedrooms. Real square footage.",
    pathSubhead:
      "Modern manufactured homes — the affordable, honest version of homeownership for working families.",
    benefits: [
      {
        num: "01",
        title: "Room for the family",
        body: "Three or four bedrooms, two baths, 1,300–1,800 sq ft. Real space — not a converted closet.",
      },
      {
        num: "02",
        title: "A payment that lets you breathe",
        body: "Most families go from $2,100 in rent to $700–$1,100 in fixed mortgage. Same household, different financial life.",
      },
      {
        num: "03",
        title: "Stability the kids can feel",
        body: "Same address, same schools, same neighbors. Your name on the deed. Build a real life.",
      },
    ],
    numbersEyebrow: "Real numbers",
    numbersHeadline: "What family-sized actually costs.",
    numbersSubhead:
      "All-in monthly payments on a 20-year fixed loan with 5% down. Real homes you could move into in 60–120 days.",
    priceCards: [
      {
        price: "$78,000",
        payment: "~$620",
        tag: "Starter family",
        features: [
          "3 bed / 2 bath · ~1,200 sq ft",
          "Move-in ready",
          "Quiet neighborhood",
        ],
      },
      {
        price: "$112,000",
        payment: "~$880",
        tag: "Most popular",
        highlight: true,
        features: [
          "4 bed / 2 bath · ~1,500 sq ft",
          "Updated kitchen, real yard",
          "What most families pick",
        ],
      },
      {
        price: "$149,000",
        payment: "~$1,180",
        tag: "Big family",
        features: [
          "4 bed / 3 bath · ~1,800 sq ft",
          "Owner-financed lots available",
          "Room for grandparents too",
        ],
      },
    ],
    stories: [
      {
        quote:
          "We were paying $2,100 a month for a two-bedroom and the kids were sharing a bunk bed in the closet — literally. We bought a 4/2 for $112K. Each kid has their own room. My mom moved into the fourth one. The payment is $880.",
        name: "Carla & Mike",
        place: "Hillsborough County, FL",
      },
      {
        quote:
          "My landlord was selling the house out from under us. I had 60 days. We bought a 3/2 for $78K, payment is $620, and my son is still in the same school. He didn't even know how close it was to a disaster.",
        name: "DJ",
        place: "Polk County, FL",
      },
    ],
    qualifierEyebrow: "Next step",
    qualifierHeadline: "Tell us about the family.",
    qualifierBody:
      "A few questions and a licensed Florida specialist calls you within one business day with a real shortlist for your family size and county.",
    qualifierBullets: [
      "Under 60 seconds.",
      "No credit pull. Nothing on your record.",
      "If it doesn't fit yet, we tell you exactly when it will.",
    ],
  },

  bridge: {
    meta: {
      title: "Before the next page — for working-class Florida families",
      description:
        "A short, honest pre-frame for families about why owning may be cheaper than the next rent renewal.",
    },
    badge: "Quick read · 90 seconds",
    headerRight: "A short note before the next page",
    headline: "Before you sign another lease — read this.",
    leadParas: [
      "The rent went up. Again. The kids are still sharing a room. Every year you tell yourself maybe next year will be different.",
      "The next page is the path most working-class Florida families don't know exists. The math is real and the homes are real.",
    ],
    reframes: [
      {
        num: "01",
        title: "It isn't 1990s manufactured.",
        body: "Modern HUD-code, hurricane-rated, three or four bedrooms, real yards. Indistinguishable from a small ranch from the curb.",
      },
      {
        num: "02",
        title: "Rent is the worst loan you'll ever have.",
        body: "$25K a year in payments that build zero equity. Compounding against your family every year you wait.",
      },
      {
        num: "03",
        title: "The all-in payment is usually less than rent.",
        body: "Family rent: ~$2,100/mo. Family mortgage on a 4/2 manufactured: ~$880/mo all in. Same county, same household.",
      },
    ],
    caveatsEyebrow: "Two things to keep in mind",
    caveatsHeadline: "The next page isn't for everyone — and that's on purpose.",
    caveats: [
      {
        strong: "If you only want a site-built home,",
        body: "this isn't that. Close the tab — no harm done. We don't convert anyone with pressure.",
      },
      {
        strong: "If you're willing to look at the math without flinching,",
        body: "this is the path most working-class Florida families actually use to stop renting and start owning. It works.",
      },
    ],
    finalHeadline: "Ready? Here's the page.",
    finalSubhead:
      "Five minutes to read. If the math doesn't work for your family, close the tab — no follow-up.",
    finalCta: "Show me the next page",
    finalCtaHref: "/family-home/hybrid",
    finalCtaSub: "Opens on this site · No credit pull · No obligation",
    ps: "The biggest reason families stay stuck isn't pride — it's that nobody ever sat them down with the numbers. The next page is the numbers, plainly.",
  },

  application: {
    meta: {
      title: "Family Home Application — Florida Home Path",
      description:
        "The full application for working-class Florida families ready to stop renting. Reviewed by a human, called within one business day.",
    },
    badge: "Application · ~3 minutes",
    headerRight: "Application · Reviewed by a human",
    headline: "Tell us about the family.",
    subhead:
      "You've seen the path. This is the next step: a real application that a real human reads before they call. Honest answers, both directions.",
    trust: [
      { title: "No credit pull", body: "Estimates only. Nothing here hits your record." },
      {
        title: "Reviewed by a human",
        body: "One licensed Florida specialist — not a call center.",
      },
      {
        title: "One business day",
        body: "You'll hear from us in your preferred call window.",
      },
    ],
    fallbackHeadline: "Not ready to apply yet?",
    fallbackBody: "Read the longer page first — math, trade-offs, the catch.",
    fallbackCta: "Read the long page first",
    fallbackCtaHref: "/family-home/hybrid",
    form: defaultApplicationForm({
      sectionBTitle: "Where the family stands today.",
      q: {
        currentSituation: {
          label: "What's your current housing?",
          options: [
            "Renting an apartment",
            "Renting a house",
            "Living with family",
            "Other",
          ],
        },
        currentMonthly: {
          label: "Roughly what's your current monthly rent?",
          placeholder: "e.g. $2,100",
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
          label: "Money set aside for a down payment",
          options: [
            "Under $3,000",
            "$3,000–$7,000",
            "$7,000–$15,000",
            "$15,000+",
          ],
        },
        county: {
          label: "Florida county or area you want to live in",
          placeholder: "e.g. Polk, Pasco, near Tampa",
        },
        beds: {
          label: "How many bedrooms does the family need?",
          options: ["2", "3", "4", "5+"],
        },
        budget: {
          label: "Target home price range",
          options: ["Under $80K", "$80K–$120K", "$120K–$160K", "$160K+"],
        },
        timeline: {
          label: "When do you want to be in the new place?",
          options: [
            "ASAP — current lease ending",
            "Next 60–90 days",
            "3–6 months",
            "Just exploring",
          ],
        },
        bestTime: {
          label: "Best time for a 15-minute call",
          options: [
            "Before the kids wake up",
            "Lunchtime",
            "After school pickup",
            "Evenings after bedtime",
          ],
        },
        notes: {
          label: "Anything we should know about the family?",
          placeholder:
            "Number of kids, pets, schools you want to stay in, dealbreakers.",
        },
      },
    }),
  },

  thankYou: {
    meta: {
      title: "Got it — your family's shortlist is on the way",
      description:
        "Your application is in. A specialist will call within one business day with homes that actually fit your family.",
    },
    badge: "Application received",
    headerRight: "Application received",
    headline: "Got it. We're pulling homes for the family now.",
    subhead:
      "Don't close this tab yet. Two things in the next 60 seconds make sure the call connects.",
    timelineEyebrow: "What happens next",
    timelineHeadline: "Here's the timeline.",
    steps: [
      {
        num: "01",
        when: "In the next 5 minutes",
        title: "A confirmation text + email.",
        body: "From a 941, 813, 407, or 904 area code. Save it as “Florida Home Path” — and don't let it go to spam.",
      },
      {
        num: "02",
        when: "Within 1 business day",
        title: "A real person calls you.",
        body: "One licensed Florida specialist. They'll have read your file before they dial. Around 10–15 minutes.",
      },
      {
        num: "03",
        when: "If the math works",
        title: "A real shortlist for the family.",
        body: "Three to five 3 and 4-bedroom homes in your county and price range, with all-in monthly payments. Sent the same day.",
      },
      {
        num: "04",
        when: "If the timing isn't right",
        title: "An honest answer + a plan.",
        body: "If now isn't the moment, we tell you exactly what to do in the next 90 days to make it the moment. That part is free too.",
      },
    ],
    bookingHeadline: "Want to lock in your call time right now?",
    bookingBody: "Pick a 15-minute slot — between school runs is fine.",
    bookingCta: "Pick a call time",
    bookingCtaHref: "/family-home/booking",
    bookingCtaSub: "Takes 30 seconds · You can reschedule any time",
    actionsEyebrow: "Two things to do right now",
    actionsHeadline: "So the call actually connects.",
    actions: [
      {
        num: "1",
        title: "Save us in your contacts.",
        body: "“Florida Home Path” with a Florida area code. We call from 941, 813, 407, or 904 numbers.",
      },
      {
        num: "2",
        title: "Whitelist our email.",
        body: "Move our welcome email out of Promotions. The shortlist comes by email and you don't want it buried.",
      },
    ],
    readMoreHeadline: "While you wait — read the long page.",
    readMoreBody:
      "The math, the trade-offs, the catch — laid out for the family. Worth the five minutes.",
    readMorePrimary: "Read the long page",
    readMorePrimaryHref: "/family-home/hybrid",
    readMoreSecondary: "Or watch the 5-minute version",
    readMoreSecondaryHref: "/family-home/vsl",
  },

  booking: {
    meta: {
      title: "Book your call — Florida Home Path",
      description:
        "Pick a 15-minute slot with a licensed Florida ownership specialist. They'll have your file open and a family-sized shortlist ready.",
    },
    badge: "15-minute call · Eastern time",
    headerRight: "Book your 15-minute call",
    headline: "Pick when we should call.",
    subhead:
      "A 15-minute call. They'll know your family size and county before they dial — no repeating yourself.",
    trust: [
      { title: "15 minutes", body: "No more, no less." },
      { title: "One human", body: "Same person who reads your file. Not a call center." },
      {
        title: "Family-tuned shortlist",
        body: "We pre-build a list before the call — 3 and 4-bedrooms in your price band.",
      },
    ],
    coverEyebrow: "What we'll cover on the call",
    coverHeadline: "No fluff. Three things, in order.",
    coverBullets: [
      {
        num: "01",
        title: "What actually fits the family.",
        body: "Bedrooms, school district, county. We work backwards from the family, not the budget.",
      },
      {
        num: "02",
        title: "Real homes available right now.",
        body: "Three to five matches with all-in monthly payments — sent the same day if it's a fit.",
      },
      {
        num: "03",
        title: "The honest trade-offs.",
        body: "We tell you what's worth waiting on, what's worth jumping on, and what to walk away from.",
      },
    ],
    fallbackHeadline: "Not ready to book?",
    fallbackBody:
      "No problem. Submit the application and a specialist will call you in their next available window.",
    fallbackCta: "Submit the application instead",
    fallbackCtaHref: "/family-home/application",
  },
};

export default copy;
