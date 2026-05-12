import type { ScenarioCopy } from "../../../_templates/types";
import { defaultApplicationForm } from "../../../_templates/sharedForm";

const BRAND = {
  name: "Florida Home Path",
  scenarioSlug: "investor",
  hrefBase: "/investor",
  disclosure:
    "Pro-forma figures are illustrative and depend on credit, location, financing, and operations. Equal housing opportunity.",
  footerCopyright: "Florida Home Path",
};

const copy: ScenarioCopy = {
  brand: BRAND,
  squeeze: {
    meta: {
      title: "Florida manufactured rentals — real cap rates, not pitch decks",
      description:
        "Three fields and we'll send a real shortlist of FL manufactured-home rentals with cap rate, cash-on-cash, and rent comps you can verify yourself.",
    },
    badge: "For investors who want real numbers",
    headerRight: "FL rental investors · Real numbers",
    headline: "Real cap rates. Not pitch decks.",
    subhead:
      "Florida manufactured rentals routinely run 9–14% cap on $50K–$150K acquisitions. Tell us your buy-box and we'll send a shortlist with verifiable rent comps — not seller fantasy.",
    bullets: [
      "Cap rate, cash-on-cash, DSCR — calculated, not promised.",
      "Verifiable rent comps from rentometer, Zillow, on-the-ground specialists.",
      "Off-market opportunities flagged — not just MLS scraps.",
    ],
    avatarsLine: "FL investors closing manufactured rentals every week.",
    formTitle: "Send me the buy-box deals.",
    formSubhead: "Three fields. We'll send a real list — not a pitch.",
    fields: {
      name: { label: "First name", placeholder: "Alex" },
      phone: { label: "Mobile number", placeholder: "(555) 555-0123" },
      third: {
        label: "What's your strategy?",
        placeholder: "Pick one…",
        options: [
          "Long-term rental",
          "Short-term rental (STR)",
          "BRRRR / refinance",
          "Owner-financed exit",
          "Mixed",
        ],
      },
    },
    submit: "Send me the deals",
    microFootnote: "Under 60 seconds · No credit pull · No spam",
    successTitle: "Got it, {name}.",
    successBody:
      "An acquisitions specialist will call within one business day with deals matched to your buy-box and verifiable rent comps.",
    proofs: [
      { stat: "9–14% cap", label: "Typical FL manufactured rental, today" },
      { stat: "$50K–$150K", label: "Median acquisition price" },
      { stat: "30–60d", label: "Typical close-to-cash-flowing window" },
    ],
  },

  vsl: {
    meta: {
      title: "Watch: Florida manufactured rentals, by the numbers",
      description:
        "A 5-minute walkthrough of why Florida manufactured rentals are the most overlooked cash-flow asset class in the state — with real math, not pitch decks.",
    },
    badge: "For investors · Cash flow over story",
    headerCta: "Send me deals",
    headline: "5 minutes on Florida's most overlooked cash-flow asset.",
    subhead:
      "Modern manufactured homes in resident-owned communities and on owned lots — 9–14% cap, real rent demand, low entry. No story, just math.",
    videoTitle: "Florida Manufactured by the Numbers",
    videoSubtitle:
      "Why this asset class quietly outperforms — and what the catch actually is.",
    videoCaption: "Tap the video to read the full transcript",
    trust: ["Verifiable comps", "DSCR & cap calculated", "Off-market flagged"],
    script: {
      title: "Florida Manufactured by the Numbers",
      runtime: "5:18",
      beats: [
        {
          time: "0:00",
          label: "Hook",
          lines: [
            "If you&apos;re an investor and you haven&apos;t looked at Florida manufactured-home rentals yet — you&apos;re leaving 9 to 14 percent on the table.",
          ],
        },
        {
          time: "0:30",
          label: "Why nobody looks",
          lines: [
            "Most investors stick to site-built single-family. The story is cleaner, the lender is friendlier, the LP narrative is easier.",
            "But the cap rates compressed years ago. A FL site-built rental at $385K acquisition rents for $2,400. That&apos;s a 4.5% cap before maintenance.",
          ],
        },
        {
          time: "1:15",
          label: "The numbers",
          lines: [
            "Same county, manufactured rental: acquisition $89K, rent $1,300. That&apos;s a 14% gross cap. Net cap, after lot rent or property tax, runs 9 to 11.",
            "Cash-on-cash with 25% down on a portfolio loan, you&apos;re typically 14 to 22 percent in year one. Site-built can&apos;t touch that.",
          ],
        },
        {
          time: "2:10",
          label: "Why the rent holds",
          lines: [
            "Florida population grew 1.2 million in three years. Site-built supply didn&apos;t. Working-class Florida has nowhere to live except rent — and the manufactured rental is what they can afford.",
            "Tenant base is stickier. Three-year average tenancy, in our portfolio, vs 18 months for $2,400/mo apartments.",
          ],
        },
        {
          time: "3:00",
          label: "The honest catch",
          lines: [
            "Three things you should know:",
            "One — financing is harder. Land-home loans are doable but tighter. DSCR loans on manufactured with permanent foundation work, with a ceiling around $200K acquisition.",
            "Two — exits are slower. The buyer pool is smaller. Plan to hold five to ten years.",
            "Three — some communities have lot rents that scale. Park-owned lot rent is a tail risk if you don&apos;t own the land. We screen for that.",
          ],
        },
        {
          time: "4:00",
          label: "How we work",
          lines: [
            "We&apos;re acquisition specialists for FL manufactured. We pull MLS, off-market, and direct-from-seller. We run cap, cash-on-cash, DSCR, and break-even occupancy on every deal before we send it.",
            "Rent comps come from rentometer, Zillow, and on-the-ground rental managers — not seller fantasy.",
          ],
        },
        {
          time: "4:45",
          label: "Offer",
          lines: [
            "Three fields. Tell us your buy-box. We send deals matched to it within a week — usually with three to five real options, all underwritten honestly.",
            "If you decide to pass, you pass. No pressure, no list spam.",
          ],
        },
      ],
    },
    beatsEyebrow: "What you'll learn in 5 minutes",
    beatsHeadline: "Three things institutional money still ignores.",
    educationalBeats: [
      {
        num: "01",
        title: "Cap-rate spread is real.",
        body: "Site-built FL: 4.5% cap. Manufactured: 9–14% cap. Same county, same tenant pool.",
      },
      {
        num: "02",
        title: "Rent demand is structural.",
        body: "FL population grew 1.2M in three years. Affordable supply didn't follow. Manufactured rentals fill the gap.",
      },
      {
        num: "03",
        title: "Financing has improved.",
        body: "DSCR loans on manufactured-with-permanent-foundation work for portfolios — typical sweet spot is $80K–$150K acquisitions.",
      },
    ],
    qualifier: {
      eyebrow: "Next step",
      headline: "Tell us your buy-box.",
      body: "An acquisitions specialist calls within one business day with deals matched to your strategy. Real numbers, real comps.",
      bullets: [
        "Under 60 seconds.",
        "Verifiable rent comps on every deal.",
        "Honest about which counties are hot and which are saturated.",
      ],
    },
  },

  hybrid: {
    meta: {
      title: "Florida manufactured rentals — the cap-rate breakdown for investors",
      description:
        "9–14% cap, $50K–$150K entry, structural rent demand. The honest math, the real catches, the buy-box.",
    },
    badge: "For investors who want real numbers",
    headerCta: "Send me deals",
    headline: "The cap rate is real. The catch is honest.",
    subhead:
      "Florida manufactured rentals quietly run 9–14% cap on $50K–$150K acquisitions. Most institutional money ignores them. That's the opportunity.",
    primaryCta: "Show me the buy-box",
    secondaryCta: "See the math",
    microFootnote:
      "Under 60 seconds. Verifiable comps on every deal. No spam.",
    heroCard: {
      eyebrow: "Site-built vs. manufactured",
      bigStat: "4.5% cap",
      bigStatSecondary: "vs 12% cap",
      chip: "Same county",
      rows: [
        { label: "FL site-built rental ($385K → $2,400)", value: "~4.5% cap" },
        { label: "FL manufactured rental ($89K → $1,300)", value: "~12% cap" },
        { label: "Cash-on-cash (25% down, DSCR)", value: "~16–22%" },
        { label: "Average tenancy length", value: "~3 yrs" },
      ],
      microline:
        "Same tenant pool, very different math. <span class='font-semibold text-brand-strong'>Compression hasn't hit this asset yet.</span>",
      avatarsLine: "FL investors closing manufactured rentals every week.",
    },
    painEyebrow: "Why investors miss it",
    painHeadline: "The story is harder. The math is easier.",
    painSubhead:
      "Site-built has a cleaner LP pitch. Manufactured has the cap rate. The institutions chose pitch over math.",
    painStats: [
      { stat: "0", label: "Major REITs holding meaningful FL manufactured rental positions" },
      { stat: "1.2M", label: "FL population growth, last 3 years — driving rent demand" },
      { stat: "<5%", label: "Vacancy on quality FL manufactured rentals" },
    ],
    pivotEyebrow: "Three real options",
    pivotHeadline: "Where the cash flow actually is.",
    pivotOptions: [
      {
        title: "Stick with FL site-built single-family.",
        body: "4–5% cap, $385K entry, three-month vacancy cycles. The story is clean. The math is tired.",
        bad: true,
      },
      {
        title: "Build a syndication around an out-of-state market.",
        body: "More work, more management overhead, more LP politics. Most break-even on a 5-year hold.",
        bad: true,
      },
      {
        title: "Build a FL manufactured rental portfolio.",
        body: "9–14% cap, $50K–$150K entry, structural demand, sticky tenants. The asset class institutional money still ignores.",
        bad: false,
      },
    ],
    emotionalHeadline: "The math isn&apos;t hidden. The story is.",
    emotionalBody:
      "Investors don&apos;t miss this asset class because they can&apos;t see it. They miss it because the LP deck is harder to write. The numbers don&apos;t care about the deck.",
    emotionalKicker: "Cash flow > story.",
    pathEyebrow: "The Buy-Box",
    pathHeadline: "What we underwrite.",
    pathSubhead: "Every deal we send is run through real underwriting before you see it.",
    benefits: [
      {
        num: "01",
        title: "Cap, COC, DSCR",
        body: "Calculated on every deal. We send the spreadsheet, you check the inputs. No black-box pro-formas.",
      },
      {
        num: "02",
        title: "Verifiable rent comps",
        body: "Rentometer + Zillow + on-the-ground rental managers we work with. Triangulated, not seller fantasy.",
      },
      {
        num: "03",
        title: "Lot-rent screen",
        body: "Park-owned vs. resident-owned vs. fee-simple lots. We flag tail risk on lot-rent escalation before you commit.",
      },
    ],
    numbersEyebrow: "Real numbers",
    numbersHeadline: "What the buy-box actually looks like.",
    numbersSubhead:
      "Pro-forma cap and cash-on-cash on a 25% down, 7% interest, 25-year DSCR loan. Real deals, real numbers.",
    priceCards: [
      {
        price: "$58,000",
        payment: "~9–11% cap",
        tag: "Entry-level",
        features: [
          "2 bed / 1 bath rental",
          "Resident-owned community",
          "Cash-on-cash ~14%",
        ],
      },
      {
        price: "$89,500",
        payment: "~11–13% cap",
        tag: "Sweet spot",
        highlight: true,
        features: [
          "3 bed / 2 bath rental",
          "Owned lot or fee-simple",
          "Cash-on-cash ~18%",
        ],
      },
      {
        price: "$139,000",
        payment: "~10–12% cap",
        tag: "Family rental",
        features: [
          "4 bed / 2 bath rental",
          "Higher rent ceiling",
          "Cash-on-cash ~16%",
        ],
      },
    ],
    stories: [
      {
        quote:
          "Bought four FL manufactured rentals in 2023 — total $340K, gross rent $5,100/mo. Year-one COC was 19%. The pitch deck is uglier than my site-built portfolio. The numbers are not.",
        name: "Adesh",
        place: "Tampa-area portfolio",
      },
      {
        quote:
          "We were building a ground-up SFR fund and switched mid-stream into manufactured. Same FL counties, same tenant pool, double the cap rate, two-thirds the vacancy. LPs took six months to get comfortable. Now they're asking for fund II.",
        name: "Reign Capital",
        place: "Central FL",
      },
    ],
    qualifierEyebrow: "Next step",
    qualifierHeadline: "Tell us your buy-box.",
    qualifierBody:
      "Strategy, target counties, deal size. An acquisitions specialist calls within one business day with three to five matched deals.",
    qualifierBullets: [
      "Under 60 seconds.",
      "We send the underwriting spreadsheet on every deal.",
      "Honest about which counties are hot and which are saturated.",
    ],
  },

  bridge: {
    meta: {
      title: "Before you write another LP memo on a 5% cap site-built rental — read this.",
      description:
        "A short pre-frame for FL real-estate investors on why manufactured is the cleanest cash-flow story most pitch decks ignore.",
    },
    badge: "Quick read · 90 seconds",
    headerRight: "A short note before the next page",
    headline: "Before you write another LP memo on a 5% cap — read this.",
    leadParas: [
      "Florida site-built single-family rentals priced themselves out of cash flow two years ago. Most investors are pretending the 4.5% cap is fine because the story is clean.",
      "The next page is the asset class with the same tenant pool, same county, double the cap, and two-thirds the vacancy. The story is uglier. The math isn't.",
    ],
    reframes: [
      {
        num: "01",
        title: "It isn't trailer-park investing.",
        body: "We don't touch park-owned lots with escalating rent. We work with fee-simple, resident-owned-community, and owned-lot manufactured. Real assets, real titles.",
      },
      {
        num: "02",
        title: "DSCR works at scale.",
        body: "DSCR loans on manufactured-with-permanent-foundation cleared the friction in 2023. $80K–$150K acquisitions are bankable today.",
      },
      {
        num: "03",
        title: "Tenant stickiness is real.",
        body: "Three-year average tenancy, in our verified portfolios. Half the turnover cost of $2,400/mo apartments.",
      },
    ],
    caveatsEyebrow: "Two things to keep in mind",
    caveatsHeadline: "The next page isn't for everyone — and that's on purpose.",
    caveats: [
      {
        strong: "If your LP narrative requires institutional-grade SFR,",
        body: "this isn't that — yet. The asset class is bankable but still under-institutionalized. That's the opportunity.",
      },
      {
        strong: "If you optimize for cash flow over narrative,",
        body: "this is the most overlooked play in FL right now. Real numbers, real comps, real holds.",
      },
    ],
    finalHeadline: "Ready? Here's the page.",
    finalSubhead: "Five minutes to read. The underwriting spreadsheet is real.",
    finalCta: "Show me the next page",
    finalCtaHref: "/investor/hybrid",
    finalCtaSub: "Opens on this site · No credit pull · No spam",
    ps: "Most investors miss this asset class because they didn't write the LP memo on it. The next page is the LP memo.",
  },

  application: {
    meta: {
      title: "Investor Buy-Box Application — Florida Home Path",
      description:
        "Tell us your buy-box and we'll send three to five matched FL manufactured rental deals with full underwriting.",
    },
    badge: "Buy-Box · Reviewed by acquisitions",
    headerRight: "Buy-Box · Reviewed by acquisitions",
    headline: "Send us your buy-box.",
    subhead:
      "You've seen the math. This is the next step: a real buy-box that an acquisitions specialist reads before they call.",
    trust: [
      { title: "No credit pull", body: "Estimates only. Nothing here hits your record." },
      {
        title: "Reviewed by acquisitions",
        body: "Real underwriter — not a CRM auto-responder.",
      },
      {
        title: "Underwriting included",
        body: "Cap, COC, DSCR, comps — sent with every deal.",
      },
    ],
    fallbackHeadline: "Not ready to apply?",
    fallbackBody: "Read the longer page first — the math, the buy-box, the catches.",
    fallbackCta: "Read the long page first",
    fallbackCtaHref: "/investor/hybrid",
    form: defaultApplicationForm({
      sectionATitle: "How do we reach you?",
      sectionBEyebrow: "Step 2 of 4 · Strategy",
      sectionBTitle: "Your buy-box.",
      sectionCEyebrow: "Step 3 of 4 · Capital",
      sectionCTitle: "Capital and structure.",
      sectionDEyebrow: "Step 4 of 4 · Targets",
      sectionDTitle: "What you're hunting.",
      q: {
        currentSituation: {
          label: "Current portfolio?",
          options: [
            "First investment property",
            "1–4 doors",
            "5–25 doors",
            "25+ doors",
          ],
        },
        currentMonthly: {
          label: "Roughly current portfolio gross monthly rent?",
          placeholder: "e.g. $8,500",
        },
        preApproval: {
          label: "Lender / financing structure",
          options: [
            "DSCR loan",
            "Conventional with reserves",
            "Portfolio line of credit",
            "Cash",
            "Not sure yet",
          ],
        },
        comfortablePayment: {
          label: "Target cap rate floor",
          options: [
            "Anything 7%+",
            "Anything 9%+",
            "Anything 11%+",
            "13%+ only",
          ],
        },
        income: {
          label: "Annual capital deployment target",
          options: [
            "Under $250K",
            "$250K–$1M",
            "$1M–$3M",
            "$3M+",
          ],
        },
        credit: {
          label: "Credit score range (no pull)",
          options: ["Under 680", "680–719", "720–759", "760+", "Not sure"],
        },
        downPayment: {
          label: "Per-deal down payment available",
          options: [
            "Under $25,000",
            "$25,000–$60,000",
            "$60,000–$150,000",
            "$150,000+",
          ],
        },
        county: {
          label: "Target Florida counties / regions",
          placeholder: "e.g. Polk + Pasco, Citrus belt, Tampa metro",
        },
        beds: {
          label: "Bedrooms (target)",
          options: ["2", "3", "4", "Mixed"],
        },
        budget: {
          label: "Per-door acquisition target",
          options: [
            "Under $80K",
            "$80K–$120K",
            "$120K–$160K",
            "$160K+",
          ],
        },
        timeline: {
          label: "Acquisition timeline",
          options: [
            "ASAP — capital ready",
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
          label: "Anything we should know about strategy?",
          placeholder:
            "BRRRR, owner-financed exit, STR, hold period, exit thesis. Specifics help.",
        },
      },
      successTitle: "Buy-box received, {name}.",
      successBody:
        "An acquisitions specialist will read your file and call within one business day with three to five matched deals — full underwriting included.",
    }),
  },

  thankYou: {
    meta: {
      title: "Buy-box received — your acquisitions specialist will call",
      description:
        "Application received. Acquisitions will call within one business day with three to five matched deals.",
    },
    badge: "Buy-box received",
    headerRight: "Buy-box received",
    headline: "Got it. Your buy-box is on an acquisitions specialist's desk.",
    subhead:
      "Don't close this tab yet. Two things in the next 60 seconds make the call connect.",
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
        title: "Acquisitions calls you.",
        body: "Real underwriter — not a CRM. They'll have read your buy-box.",
      },
      {
        num: "03",
        when: "Within 3–5 business days",
        title: "Three to five matched deals.",
        body: "Each with cap, COC, DSCR, rent comps, lot status, and the underwriting spreadsheet.",
      },
      {
        num: "04",
        when: "If your buy-box is too tight",
        title: "An honest answer + a recalibration.",
        body: "If the deal flow doesn't match your floor, we say so — and walk you through where to flex if you want.",
      },
    ],
    bookingHeadline: "Want to book the call now?",
    bookingBody: "Pick a 15-minute slot. Acquisitions runs Eastern hours.",
    bookingCta: "Pick a call time",
    bookingCtaHref: "/investor/booking",
    bookingCtaSub: "Takes 30 seconds · You can reschedule any time",
    actionsEyebrow: "Two things to do right now",
    actionsHeadline: "So the call is productive.",
    actions: [
      {
        num: "1",
        title: "Save us in your contacts.",
        body: "“Florida Home Path Acquisitions” with a Florida area code. We call from 941, 813, 407, or 904 numbers.",
      },
      {
        num: "2",
        title: "Pull your underwriting template.",
        body: "If you have one, send it ahead. We'll match outputs so the math compares apples-to-apples.",
      },
    ],
    readMoreHeadline: "While you wait — read the long page.",
    readMoreBody: "The math, the buy-box, the catches. Five minutes.",
    readMorePrimary: "Read the long page",
    readMorePrimaryHref: "/investor/hybrid",
    readMoreSecondary: "Or watch the 5-minute version",
    readMoreSecondaryHref: "/investor/vsl",
  },

  booking: {
    meta: {
      title: "Book your acquisitions call — Florida Home Path",
      description:
        "Pick a 15-minute slot with an acquisitions specialist. We pre-load your buy-box.",
    },
    badge: "15-minute call · Acquisitions",
    headerRight: "Book your acquisitions call",
    headline: "Pick when we should call.",
    subhead:
      "A 15-minute call with an acquisitions specialist. Your buy-box will be in front of them.",
    trust: [
      { title: "15 minutes", body: "No more, no less." },
      {
        title: "Real underwriter",
        body: "Not a CRM auto-responder.",
      },
      {
        title: "Buy-box pre-loaded",
        body: "We pull deal flow before the call.",
      },
    ],
    coverEyebrow: "What we'll cover on the call",
    coverHeadline: "No fluff. Three things, in order.",
    coverBullets: [
      {
        num: "01",
        title: "Confirm your buy-box.",
        body: "Strategy, counties, cap floor, deal size, exit thesis.",
      },
      {
        num: "02",
        title: "Three to five matched deals.",
        body: "Cap, COC, DSCR, rent comps, underwriting spreadsheet — for each.",
      },
      {
        num: "03",
        title: "Honest answer.",
        body: "Where the deal flow is, where it isn't, and what your buy-box would need to flex to clear more inventory.",
      },
    ],
    fallbackHeadline: "Not ready to book?",
    fallbackBody: "Submit the buy-box application and acquisitions will call you in their next available window.",
    fallbackCta: "Submit the buy-box instead",
    fallbackCtaHref: "/investor/application",
  },
};

export default copy;
