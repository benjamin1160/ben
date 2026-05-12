import type { ScenarioCopy } from "../../../_templates/types";
import { defaultApplicationForm } from "../../../_templates/sharedForm";

const BRAND = {
  name: "Florida Home Path",
  scenarioSlug: "retiree-downsize",
  hrefBase: "/retiree-downsize",
  disclosure:
    "Payment examples are illustrative and depend on credit, location, and home choice. Equal housing opportunity.",
  footerCopyright: "Florida Home Path",
};

const copy: ScenarioCopy = {
  brand: BRAND,
  squeeze: {
    meta: {
      title: "Simpler living in Florida — for retirees who want zero surprises",
      description:
        "Selling the family home or living on a fixed income? Three fields and we'll send a real shortlist of Florida homes built for simpler living — small footprint, low taxes, no surprises.",
    },
    badge: "For retirees who want simpler",
    headerRight: "FL homes for retirees · Simpler living",
    headline: "A simpler home. A simpler life.",
    subhead:
      "After thirty years in the same house, the math changes. We help retirees downsize without the chaos — small footprint, low monthly, real ownership, and zero surprises at closing.",
    bullets: [
      "Small homes built for one or two people. Less to clean, less to fix.",
      "All-in monthly that fits a fixed income. No teaser numbers.",
      "Quiet, age-friendly Florida communities — your neighbors are your speed.",
    ],
    avatarsLine: "Florida retirees moving in every week. No regrets.",
    formTitle: "What does simpler look like for you?",
    formSubhead: "Three fields. We'll send a real shortlist tonight.",
    fields: {
      name: { label: "First name", placeholder: "Pat" },
      phone: { label: "Mobile number", placeholder: "(555) 555-0123" },
      third: {
        label: "What's pushing the move?",
        placeholder: "Pick the closest…",
        options: [
          "Selling the family home",
          "Fixed income, want lower payments",
          "Want less to maintain",
          "Want to be near family in FL",
          "Just exploring options",
        ],
      },
    },
    submit: "Send me the shortlist",
    microFootnote: "Under 60 seconds · No credit pull · No obligation",
    successTitle: "Got it, {name}.",
    successBody:
      "A specialist will call within one business day with a shortlist of homes built for simpler living — and the all-in monthly cost.",
    proofs: [
      { stat: "~$520/mo", label: "All-in on a typical 2 bed retirement home" },
      { stat: "$50K–$120K", label: "Median price for retiree downsize homes" },
      { stat: "Zero", label: "Surprise costs at closing — list price is the price" },
    ],
  },

  vsl: {
    meta: {
      title: "Watch: A simpler home in Florida — built for retirees",
      description:
        "A 5-minute walkthrough of how to downsize in Florida without the stress — sold honestly, with the trade-offs included.",
    },
    badge: "For retirees · Simpler, calmer, smaller",
    headerCta: "See what fits",
    headline: "Watch this before you list the family home.",
    subhead:
      "Five minutes on how to downsize without the chaos — small home, low monthly, age-friendly community, no surprises.",
    videoTitle: "Simpler Living in Florida",
    videoSubtitle:
      "How retirees downsize honestly — small footprint, low monthly, quiet community.",
    videoCaption: "Tap the video to read the full transcript",
    trust: ["No credit pull", "Real human follow-up", "Trade-offs explained"],
    script: {
      title: "Simpler Living in Florida",
      runtime: "5:10",
      beats: [
        {
          time: "0:00",
          label: "Hook",
          lines: [
            "If you&apos;re sitting in a four-bedroom house with one occupied bedroom — this is for you.",
            "I&apos;m going to walk you through the simpler-living option in Florida, in five minutes. Honest, no upsell.",
          ],
        },
        {
          time: "0:35",
          label: "The math changes after retirement",
          lines: [
            "When you stopped working, the numbers shifted. Property tax on the family home is the same as it was. Insurance is higher. The roof has another five years.",
            "Most retirees don&apos;t have a problem. They have a too-big house.",
          ],
        },
        {
          time: "1:15",
          label: "What simpler actually means",
          lines: [
            "A small home. One or two bedrooms, 800 to 1,200 square feet. A guest room for the grandkids. A real yard, but a small one.",
            "All-in monthly between $400 and $700. Property tax under $500 a year. Insurance proportional to the home, not a five-bedroom legacy.",
          ],
        },
        {
          time: "2:00",
          label: "Communities, not just homes",
          lines: [
            "Most retirees we work with end up in age-restricted or age-friendly communities — your neighbors are your speed, the streets are quiet, and there&apos;s a real social fabric.",
            "Pickleball, potlucks, mahjong. Some have boat slips. Some have golf. Some are just quiet.",
          ],
        },
        {
          time: "2:50",
          label: "Honest trade-off",
          lines: [
            "Manufactured homes appreciate slower than the family home you&apos;re selling. That&apos;s honest.",
            "But you&apos;re not optimizing for appreciation anymore. You&apos;re optimizing for cash flow, low maintenance, and peace.",
          ],
        },
        {
          time: "3:30",
          label: "Real retirees",
          lines: [
            "Marge sold a four-bedroom in The Villages adjacent for $385,000. Bought a 2/2 in a quiet community for $98,000, paid cash. Banked the rest. Her monthly is $180 in lot rent, $120 in property tax, and $80 in insurance.",
            "Frank and Jean sold their home in Atlanta and moved to Polk for the warmth. They put $40K down on a $112K home, payment is $620, and they live on Frank&apos;s pension without touching savings.",
          ],
        },
        {
          time: "4:30",
          label: "Offer",
          lines: [
            "Three fields below this video. A licensed specialist calls within one business day.",
            "We&apos;ll tell you straight whether this path fits your retirement, or whether to stay where you are. No credit pull, no pressure.",
          ],
        },
      ],
    },
    beatsEyebrow: "What you'll learn in 5 minutes",
    beatsHeadline: "Three things retirees wish they'd known sooner.",
    educationalBeats: [
      {
        num: "01",
        title: "The big house is taxing your retirement.",
        body: "Property tax, insurance, roof, AC, the lawn. None of those scale down with the smaller occupancy.",
      },
      {
        num: "02",
        title: "$400–$700/mo is realistic.",
        body: "All-in. Some retirees pay cash from the sale of the family home and have zero mortgage at all.",
      },
      {
        num: "03",
        title: "The community is the move.",
        body: "Quiet streets, your-speed neighbors, age-friendly amenities. Most retirees pick the community first, the home second.",
      },
    ],
    qualifier: {
      eyebrow: "Next step",
      headline: "Tell us what simpler looks like.",
      body: "A specialist calls within one business day with a shortlist tuned to your retirement — community, footprint, monthly.",
      bullets: [
        "Under 60 seconds.",
        "No credit pull. Nothing on your record.",
        "If it doesn't fit, we say so.",
      ],
    },
  },

  hybrid: {
    meta: {
      title: "Florida retirement, simpler — small homes, low monthly, no chaos",
      description:
        "Downsizing without the stress. The honest math, the real homes, the right communities.",
    },
    badge: "For retirees who want simpler",
    headerCta: "See what fits",
    headline: "Less house. More retirement.",
    subhead:
      "After thirty years in the family home, the math is upside-down. Smaller, simpler, and intentionally quiet — the way retirement was supposed to feel.",
    primaryCta: "Show me what fits",
    secondaryCta: "See the numbers",
    microFootnote:
      "Under 60 seconds. No credit pull. A real person calls — not a bot.",
    heroCard: {
      eyebrow: "Family home vs. simpler home",
      bigStat: "$385K",
      bigStatSecondary: "vs $98K",
      chip: "What you'd actually live in",
      rows: [
        { label: "Old family home (taxes + insurance)", value: "~$1,400/mo" },
        { label: "2 bed retirement (cash purchase)", value: "~$380/mo" },
        { label: "Annual delta freed up", value: "~$12,000" },
        { label: "Equity unlocked from family home", value: "~$200,000+" },
      ],
      microline:
        "Same household, half the monthly. <span class='font-semibold text-brand-strong'>Retirement actually feels like retirement.</span>",
      avatarsLine: "Florida retirees moving in every week. No regrets reported.",
    },
    painEyebrow: "The Big-House Tax",
    painHeadline: "The family home stopped working when you stopped working.",
    painSubhead:
      "Property taxes, insurance, the roof, the lawn — none of it scaled down with the empty bedrooms.",
    painStats: [
      { stat: "~$8K/yr", label: "Average FL property tax + insurance on a 4-bedroom" },
      { stat: "$24K/yr", label: "Average FL retiree spends maintaining a too-big home" },
      { stat: "60%", label: "Of retiree wealth tied up in a house they don't need anymore" },
    ],
    pivotEyebrow: "Three real options",
    pivotHeadline: "What retirees actually do.",
    pivotOptions: [
      {
        title: "Stay in the family home.",
        body: "Pay $1,400 a month in carrying costs to live in three rooms. Watch the maintenance list grow every year.",
        bad: true,
      },
      {
        title: "Move to a Florida 55+ tower with HOA fees.",
        body: "$700/mo HOA, special assessments every other year, rules about everything, parking lottery.",
        bad: true,
      },
      {
        title: "Buy a small home in a quiet age-friendly community.",
        body: "Real ownership, real deed, real yard. $50K–$120K, monthly under $700, lot rent or owned land. Quiet streets, your-speed neighbors.",
        bad: false,
      },
    ],
    emotionalHeadline: "Retirement is supposed to feel like retirement.",
    emotionalBody:
      "Not like running a 2,800-square-foot maintenance project for two people. The simpler home isn&apos;t a downgrade — it&apos;s a return to the size of life you actually live.",
    emotionalKicker: "The right house at sixty-five is smaller than the right house at thirty-five.",
    pathEyebrow: "The Path In",
    pathHeadline: "Florida homes built for simpler living.",
    pathSubhead:
      "Modern manufactured homes — small footprint, low monthly, age-friendly communities.",
    benefits: [
      {
        num: "01",
        title: "A footprint that fits two people",
        body: "One or two bedrooms, 800–1,200 sq ft. A guest room for the grandkids. Real space, not too much space.",
      },
      {
        num: "02",
        title: "A monthly your retirement can carry",
        body: "$400–$700 all-in. Some retirees pay cash and have zero mortgage. Property tax under $500/yr is common.",
      },
      {
        num: "03",
        title: "A community at your speed",
        body: "Quiet streets, age-friendly amenities, your neighbors are your generation. Pickleball, potlucks, golf — or just quiet.",
      },
    ],
    numbersEyebrow: "Real numbers",
    numbersHeadline: "What simpler actually costs.",
    numbersSubhead:
      "All-in monthly payments on a 20-year fixed loan with 20% down (typical for retirees with home equity).",
    priceCards: [
      {
        price: "$54,000",
        payment: "~$320",
        tag: "Quietest",
        features: [
          "1 bed / 1 bath · ~700 sq ft",
          "Resident-owned community",
          "Smallest, simplest, calmest",
        ],
      },
      {
        price: "$89,500",
        payment: "~$520",
        tag: "Most popular",
        highlight: true,
        features: [
          "2 bed / 2 bath · ~1,100 sq ft",
          "Guest room for visits",
          "What most retirees pick",
        ],
      },
      {
        price: "$118,000",
        payment: "~$680",
        tag: "Family-friendly",
        features: [
          "2 bed / 2 bath · ~1,300 sq ft",
          "Owned land, no lot rent",
          "Room for the kids and grandkids",
        ],
      },
    ],
    stories: [
      {
        quote:
          "I sold the family home in 2024 — four bedrooms, two of them empty for ten years. Bought a 2/2 in Polk County for $98K cash. Property tax is $360 a year. I sleep better, I see my grandchildren more, and there's a pickleball court I can walk to.",
        name: "Marge",
        place: "Polk County, FL",
      },
      {
        quote:
          "We moved from Atlanta for the warmth. Put $40K down on a $112K home in a quiet community, payment is $620. Frank's pension covers it without touching the IRA. We thought we were sacrificing — turns out we were just stopping the bleed.",
        name: "Frank & Jean",
        place: "Hernando County, FL",
      },
    ],
    qualifierEyebrow: "Next step",
    qualifierHeadline: "Tell us what simpler looks like.",
    qualifierBody:
      "A specialist calls within one business day with a shortlist tuned to your retirement — community, footprint, monthly.",
    qualifierBullets: [
      "Under 60 seconds.",
      "No credit pull. Nothing on your record.",
      "If now isn't the right time, we tell you when it is.",
    ],
  },

  bridge: {
    meta: {
      title: "Before you list the family home — read this.",
      description:
        "A short pre-frame for retirees about why downsizing in Florida doesn't have to mean compromise.",
    },
    badge: "Quick read · 90 seconds",
    headerRight: "A short note before the next page",
    headline: "Before you list the family home — read this.",
    leadParas: [
      "You've been thinking about it for two years. The bedrooms are mostly empty. The maintenance list never gets shorter. But the family home has thirty years in it, and starting over feels heavy.",
      "The next page isn't about giving anything up. It's about right-sizing — to the life you actually live, in the community that fits you now.",
    ],
    reframes: [
      {
        num: "01",
        title: "Smaller isn't a compromise.",
        body: "It's a return to the footprint you actually use. The empty bedrooms don't add to your life — they just bill you in property tax.",
      },
      {
        num: "02",
        title: "The math is generational.",
        body: "Selling the family home unlocks equity that pays cash for the simpler one and refills your retirement accounts. Most retirees we work with end up with zero mortgage.",
      },
      {
        num: "03",
        title: "The community is the point.",
        body: "Age-friendly Florida communities are quiet, social, and walkable. Most retirees pick the community first.",
      },
    ],
    caveatsEyebrow: "Two things to keep in mind",
    caveatsHeadline: "The next page isn't for everyone — and that's on purpose.",
    caveats: [
      {
        strong: "If you want a 4-bedroom site-built home,",
        body: "this isn't that. This is the smaller, simpler version. Close the tab if it isn't right — no harm done.",
      },
      {
        strong: "If you're willing to think about right-sizing,",
        body: "this is the path most retirees we know actually take. The math is honest.",
      },
    ],
    finalHeadline: "Ready? Here's the page.",
    finalSubhead: "Five minutes to read. If now isn't the right time, we say so.",
    finalCta: "Show me the next page",
    finalCtaHref: "/retiree-downsize/hybrid",
    finalCtaSub: "Opens on this site · No credit pull · No obligation",
    ps: "The biggest reason retirees stay stuck isn't money — it's that nobody ever sat them down with the simpler-living math. The next page is the math.",
  },

  application: {
    meta: {
      title: "Retiree Downsize Application — Florida Home Path",
      description:
        "Tell us what simpler looks like and we'll send a shortlist tuned to your retirement.",
    },
    badge: "Application · ~3 minutes",
    headerRight: "Application · Reviewed by a human",
    headline: "Tell us what simpler looks like.",
    subhead:
      "You've seen the path. This is the next step: a real application that a real human reads before they call. Honest answers, both directions.",
    trust: [
      { title: "No credit pull", body: "Estimates only. Nothing here hits your record." },
      {
        title: "Reviewed by a human",
        body: "One licensed Florida specialist — not a call center.",
      },
      { title: "One business day", body: "Quiet call window of your choice." },
    ],
    fallbackHeadline: "Not ready to apply?",
    fallbackBody: "Read the longer page first — math, communities, the trade-offs.",
    fallbackCta: "Read the long page first",
    fallbackCtaHref: "/retiree-downsize/hybrid",
    form: defaultApplicationForm({
      sectionBTitle: "Where you stand today.",
      q: {
        currentSituation: {
          label: "What's your current housing?",
          options: [
            "Own the family home (free and clear)",
            "Own with a mortgage",
            "Renting",
            "With family",
          ],
        },
        currentMonthly: {
          label: "Roughly what's your current monthly housing cost?",
          placeholder: "e.g. $1,400 (taxes + insurance + maintenance)",
        },
        preApproval: {
          label: "Are you planning to pay cash or finance?",
          options: [
            "Pay cash from sale of current home",
            "Pay cash from savings",
            "Finance most of it",
            "Not sure yet",
          ],
        },
        comfortablePayment: {
          label: "Comfortable monthly housing cost (all-in)",
          options: [
            "Under $400/mo",
            "$400–$700/mo",
            "$700–$1,000/mo",
            "$1,000+/mo",
          ],
        },
        income: {
          label: "Retirement income range (Social Security + pension + draws)",
          options: ["Under $30K", "$30K–$60K", "$60K–$100K", "$100K+"],
        },
        credit: {
          label: "Credit score range (estimate is fine — no pull)",
          options: ["Under 580", "580–639", "640–699", "700+", "Not sure"],
        },
        downPayment: {
          label: "Cash on hand for the move",
          options: [
            "Under $20,000",
            "$20,000–$60,000",
            "$60,000–$150,000",
            "$150,000+ (likely from home sale)",
          ],
        },
        county: {
          label: "Florida county / community type you want",
          placeholder: "e.g. Polk 55+, Citrus quiet, near family in Tampa",
        },
        beds: {
          label: "Bedrooms you want",
          options: ["1", "2", "3", "Flexible"],
        },
        budget: {
          label: "Target home price range",
          options: ["Under $60K", "$60K–$100K", "$100K–$140K", "$140K+"],
        },
        timeline: {
          label: "When do you want to be in the new place?",
          options: [
            "ASAP",
            "Next 3–6 months",
            "Once the family home sells",
            "Just exploring",
          ],
        },
        bestTime: {
          label: "Best time for a 15-minute call",
          options: [
            "Mornings",
            "Lunchtime",
            "Afternoons",
            "Evenings (eastern)",
          ],
        },
        notes: {
          label: "Anything we should know about your retirement?",
          placeholder:
            "Health considerations, family nearby, hobbies, what 'simpler' means to you.",
        },
      },
    }),
  },

  thankYou: {
    meta: {
      title: "Got it — your simpler-living shortlist is on the way",
      description:
        "Application received. A specialist will call within one business day with a shortlist tuned to your retirement.",
    },
    badge: "Application received",
    headerRight: "Application received",
    headline: "Got it. We're pulling simpler-living matches now.",
    subhead:
      "Don't close this tab yet. Two small things in the next 60 seconds make sure the call connects.",
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
        body: "One licensed Florida specialist. They'll have read your file. Around 10–15 minutes — quiet, honest, no pitch.",
      },
      {
        num: "03",
        when: "If the math works",
        title: "A real shortlist tuned to your retirement.",
        body: "Three to five small homes in age-friendly communities, with all-in monthly costs and lot details.",
      },
      {
        num: "04",
        when: "If now isn't the right time",
        title: "An honest answer + a plan.",
        body: "If selling the family home or moving isn't right yet, we tell you straight — and what to do instead. That part is free too.",
      },
    ],
    bookingHeadline: "Want to lock in your call time right now?",
    bookingBody: "Pick a 15-minute slot. Mornings or afternoons, your call.",
    bookingCta: "Pick a call time",
    bookingCtaHref: "/retiree-downsize/booking",
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
        body: "Move our welcome email out of Promotions. The shortlist comes by email — easy to miss otherwise.",
      },
    ],
    readMoreHeadline: "While you wait — read the long page.",
    readMoreBody:
      "The math, the communities, the trade-offs — laid out clearly.",
    readMorePrimary: "Read the long page",
    readMorePrimaryHref: "/retiree-downsize/hybrid",
    readMoreSecondary: "Or watch the 5-minute version",
    readMoreSecondaryHref: "/retiree-downsize/vsl",
  },

  booking: {
    meta: {
      title: "Book your call — Florida Home Path",
      description:
        "Pick a 15-minute slot with a licensed Florida ownership specialist. Quiet, honest, no pitch.",
    },
    badge: "15-minute call · Eastern time",
    headerRight: "Book your 15-minute call",
    headline: "Pick when we should call.",
    subhead:
      "A 15-minute call. They'll have your file open and a simpler-living shortlist ready.",
    trust: [
      { title: "15 minutes", body: "No more, no less." },
      { title: "One human", body: "Same person who reads your file." },
      {
        title: "Quiet, no pitch",
        body: "We don't sell — we explain. Honest answers, both ways.",
      },
    ],
    coverEyebrow: "What we'll cover on the call",
    coverHeadline: "No pressure. Three things, in order.",
    coverBullets: [
      {
        num: "01",
        title: "What simpler looks like for you.",
        body: "Bedrooms, footprint, community type. We work backwards from your retirement, not your old life.",
      },
      {
        num: "02",
        title: "Real homes available right now.",
        body: "Three to five matches with all-in monthly costs and community details — sent the same day.",
      },
      {
        num: "03",
        title: "The honest trade-offs.",
        body: "We'll tell you what's worth waiting for, what's a dealbreaker, and what most people regret.",
      },
    ],
    fallbackHeadline: "Not ready to book?",
    fallbackBody:
      "Submit the application and a specialist will call you in their next available window.",
    fallbackCta: "Submit the application instead",
    fallbackCtaHref: "/retiree-downsize/application",
  },
};

export default copy;
