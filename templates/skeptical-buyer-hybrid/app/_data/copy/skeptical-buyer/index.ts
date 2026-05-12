import type { ScenarioCopy } from "../../../_templates/types";
import { defaultApplicationForm } from "../../../_templates/sharedForm";

const BRAND = {
  name: "Florida Home Path",
  scenarioSlug: "skeptical-buyer",
  hrefBase: "/skeptical-buyer",
  disclosure:
    "Payment examples are illustrative and depend on credit, location, and home choice. Equal housing opportunity.",
  footerCopyright: "Florida Home Path",
};

const copy: ScenarioCopy = {
  brand: BRAND,
  squeeze: {
    meta: {
      title: "Burned before? See the receipts before you trust us.",
      description:
        "If you've been jerked around in real estate before, three fields and we'll send what you actually need: deeds, references, real numbers. Verify everything yourself.",
    },
    badge: "For people who've been burned",
    headerRight: "Verify everything · Show your work",
    headline: "Don&apos;t take our word for it.",
    subhead:
      "If you&apos;ve been burned in real estate before, we get it. Three fields and we&apos;ll send the receipts — recorded deeds, real references, names you can call. Verify everything yourself.",
    bullets: [
      "Recorded deeds on closed deals — public record, look it up.",
      "Names and numbers of past buyers willing to talk.",
      "Specialist license verification, link included.",
    ],
    avatarsLine: "We don&apos;t convert anyone with pressure. We convert with proof.",
    formTitle: "Send me the receipts.",
    formSubhead: "Three fields. We send proof, not a pitch.",
    fields: {
      name: { label: "First name", placeholder: "Alex" },
      phone: { label: "Mobile number", placeholder: "(555) 555-0123" },
      third: {
        label: "What do you most want to verify?",
        placeholder: "Pick one…",
        options: [
          "That this is a real licensed business",
          "That past buyers were happy",
          "That the all-in payment is the actual payment",
          "That the homes are real, not bait",
          "All of the above",
        ],
      },
    },
    submit: "Send me proof",
    microFootnote: "Under 60 seconds · No credit pull · Verify everything yourself",
    successTitle: "Got it, {name}.",
    successBody:
      "Within hours we'll send you recorded deeds, references with names and phone numbers, and a license-verification link. No call until you've checked us out.",
    proofs: [
      { stat: "800+", label: "Documented FL closings, public record" },
      { stat: "Licensed", label: "Verifiable specialist licenses on every team member" },
      { stat: "Names", label: "Real references — not testimonials with stock photos" },
    ],
  },

  vsl: {
    meta: {
      title: "Watch: We brought receipts. Here's all of them.",
      description:
        "A 5-minute walkthrough of every claim we make about Florida manufactured homes — with receipts, public records, and references you can verify yourself.",
    },
    badge: "For people who've been burned · Receipts attached",
    headerCta: "See the receipts",
    headline: "We brought receipts. Watch us show our work.",
    subhead:
      "Five minutes of nothing but proof — recorded deeds, real comps, references, license verifications. Take it apart yourself.",
    videoTitle: "Receipts, Not Promises",
    videoSubtitle:
      "Every claim Florida Home Path makes — with the proof attached.",
    videoCaption: "Tap the video to read the full transcript",
    trust: ["Public-record deeds", "Real references", "Verifiable licenses"],
    script: {
      title: "Receipts, Not Promises",
      runtime: "5:24",
      beats: [
        {
          time: "0:00",
          label: "Hook",
          lines: [
            "If you&apos;ve been burned in real estate — bait listings, pressure closes, surprise costs — you don&apos;t need another pitch.",
            "You need receipts. So this entire video is just receipts.",
          ],
        },
        {
          time: "0:30",
          label: "Claim 1: We&apos;re a real licensed business",
          lines: [
            "Florida Home Path is registered with the Florida Department of State. Our specialists carry active state licenses. The license-verification link is in the description below.",
            "Look us up before you do anything else. We&apos;ll wait.",
          ],
        },
        {
          time: "1:15",
          label: "Claim 2: We&apos;ve actually closed these deals",
          lines: [
            "Every deal we close is recorded as a deed in the buyer&apos;s county. That&apos;s public record. Our last 30 closings are listed below this video with county and parcel numbers — go pull them.",
            "If a real estate company tells you they&apos;ve done X without showing you the deed numbers, walk.",
          ],
        },
        {
          time: "2:00",
          label: "Claim 3: Past buyers were actually happy",
          lines: [
            "Stock-photo testimonials are easy to fake. So we don&apos;t use them.",
            "We have a list of past buyers who agreed to take five minutes on the phone with you. Real names, real numbers. Email us and we&apos;ll send three. Call them. Ask anything.",
          ],
        },
        {
          time: "2:50",
          label: "Claim 4: The all-in payment is the actual payment",
          lines: [
            "When we say a home is $702 a month all in, we mean principal, interest, taxes, insurance, and any required lot rent — itemized, with the lender's pre-disclosure.",
            "We send the worksheet on every deal so you can plug in your own credit and verify the math.",
          ],
        },
        {
          time: "3:35",
          label: "Claim 5: The homes are real",
          lines: [
            "We don&apos;t use bait listings. Every home we send is actually for sale, listed at the price we quoted. We send the MLS link or the seller&apos;s contact directly.",
            "Bait-and-switch is the most common way buyers get burned in this asset class. We don&apos;t do it.",
          ],
        },
        {
          time: "4:20",
          label: "What we won&apos;t do",
          lines: [
            "We won&apos;t ask for a deposit before you&apos;ve verified us. We won&apos;t pressure-close. We won&apos;t tell you a deal is &ldquo;going fast&rdquo; if it isn&apos;t.",
            "If at any point we sound like the people who burned you before, hang up. We mean it.",
          ],
        },
        {
          time: "4:55",
          label: "Offer",
          lines: [
            "Three fields. We send the receipts before we ever pick up the phone. You verify, then you decide.",
          ],
        },
      ],
    },
    beatsEyebrow: "What we send",
    beatsHeadline: "The receipts that come before the call.",
    educationalBeats: [
      {
        num: "01",
        title: "Recorded deeds — public record.",
        body: "Last 30 closings, with county and parcel numbers. Pull them yourself on the county recorder.",
      },
      {
        num: "02",
        title: "Real references with phone numbers.",
        body: "Three past buyers who agreed to take five minutes. Call any of them. Ask anything.",
      },
      {
        num: "03",
        title: "Specialist license verification.",
        body: "FL DBPR link to verify each specialist's active license. Pull it before you talk.",
      },
    ],
    qualifier: {
      eyebrow: "Next step",
      headline: "Send me the receipts first. Then we'll talk.",
      body: "Tell us what you want to verify. We send the proof. You decide if we're worth a call.",
      bullets: [
        "Receipts in your inbox before the call.",
        "Verify everything yourself — public records, references, licenses.",
        "We don't dial until you ask us to.",
      ],
    },
  },

  hybrid: {
    meta: {
      title: "Burned before? Florida Home Path with receipts attached.",
      description:
        "Every claim we make about Florida manufactured homes, with the receipts. Recorded deeds, real references, license verification.",
    },
    badge: "For people who've been burned · Receipts attached",
    headerCta: "See the receipts",
    headline: "We brought receipts. Take it apart.",
    subhead:
      "If you've been burned in real estate — bait listings, surprise costs, pressure closes — you don't need another pitch. You need verifiable proof. Here it is.",
    primaryCta: "Show me the proof",
    secondaryCta: "See past closings",
    microFootnote:
      "Verify everything yourself. We don't dial until you ask us to.",
    heroCard: {
      eyebrow: "Pitch vs. proof",
      bigStat: "800+",
      bigStatSecondary: "recorded deeds",
      chip: "Public record",
      rows: [
        { label: "Stock-photo testimonials", value: "0" },
        { label: "Recorded deeds (public)", value: "800+" },
        { label: "References with names", value: "On request" },
        { label: "License verifications", value: "Linked, public" },
      ],
      microline:
        "We don't pitch. <span class='font-semibold text-brand-strong'>We show our work.</span>",
      avatarsLine: "We convert with proof — not pressure.",
    },
    painEyebrow: "Why people get burned",
    painHeadline: "The standard playbook is built on three lies.",
    painSubhead:
      "Bait listings, hidden costs, pressure closes. They work because most buyers don't know what to verify or how.",
    painStats: [
      { stat: "~30%", label: "Of FL manufactured-home listings are bait — wrong price, gone, or never existed" },
      { stat: "$8K", label: "Average surprise cost on a typical sketchy closing" },
      { stat: "0", label: "Companies that volunteer the deed numbers without being asked" },
    ],
    pivotEyebrow: "Three options",
    pivotHeadline: "How to actually protect yourself.",
    pivotOptions: [
      {
        title: "Trust the pitch.",
        body: "Take their word. Sign without verifying. Hope. Most buyers do this — most buyers regret it.",
        bad: true,
      },
      {
        title: "Stay out of the market entirely.",
        body: "Maybe it's not for you. That's an honest answer too — but it's worth doing the verification before you decide.",
        bad: true,
      },
      {
        title: "Demand receipts. Verify everything.",
        body: "Pull deeds, call references, verify licenses, demand the all-in worksheet. We send all of that before we ever ask you for a call.",
        bad: false,
      },
    ],
    emotionalHeadline: "Trust isn&apos;t a feeling. It&apos;s evidence.",
    emotionalBody:
      "If we tell you we&apos;re honest, you should ignore us. If we hand you 800 recorded deeds, three references with phone numbers, and a license-verification link — verify, and decide.",
    emotionalKicker: "We earn the call. We don't demand it.",
    pathEyebrow: "What we send",
    pathHeadline: "The receipts package.",
    pathSubhead:
      "Sent within hours of your application. Verify everything before any call.",
    benefits: [
      {
        num: "01",
        title: "Past closings (public record)",
        body: "County and parcel numbers for our last 30 closings. Pull them on the county recorder yourself.",
      },
      {
        num: "02",
        title: "Real references",
        body: "Three past buyers who agreed to take five minutes by phone. Names, numbers, no scripts.",
      },
      {
        num: "03",
        title: "License verification + worksheet",
        body: "FL DBPR link for each specialist. Plus the all-in payment worksheet for any deal we mention.",
      },
    ],
    numbersEyebrow: "Real numbers",
    numbersHeadline: "Sample deals — with the worksheets.",
    numbersSubhead:
      "These three deals closed in 2024–2025. Deeds are public. We send the worksheets when you ask.",
    priceCards: [
      {
        price: "$58,000",
        payment: "~$455",
        tag: "Closed Q1",
        features: [
          "2 bed / 1 bath · Polk County",
          "Deed: parcel number sent on request",
          "Buyer agreed to be a reference",
        ],
      },
      {
        price: "$89,500",
        payment: "~$702",
        tag: "Closed Q2",
        highlight: true,
        features: [
          "3 bed / 2 bath · Pasco County",
          "All-in payment worksheet on request",
          "Lender pre-disclosure included",
        ],
      },
      {
        price: "$139,000",
        payment: "~$1,090",
        tag: "Closed Q3",
        features: [
          "4 bed / 2 bath · Marion County",
          "Site work + permit receipts on file",
          "Closing statement on request",
        ],
      },
    ],
    stories: [
      {
        quote:
          "I'd been burned by a manufactured-home dealer in Texas — surprise costs, pressure close, the whole thing. So when these guys offered to send recorded deeds before any call, I called the county recorder myself. Pulled five of them. They were real. That's when I called.",
        name: "Damari",
        place: "Polk County, FL",
      },
      {
        quote:
          "I asked for three references and called every one. They each picked up. None of them were salesy. None of them sounded coached. That's when I trusted enough to schedule.",
        name: "Lien",
        place: "Hernando County, FL",
      },
    ],
    qualifierEyebrow: "Next step",
    qualifierHeadline: "Send me the receipts. Then we'll talk.",
    qualifierBody:
      "Tell us what you want to verify. We send the proof. You decide if we earn a call.",
    qualifierBullets: [
      "Public-record deeds.",
      "Real references with phone numbers.",
      "License verifications + payment worksheets.",
    ],
  },

  bridge: {
    meta: {
      title: "Before you trust another real-estate company — read this.",
      description:
        "A short pre-frame for buyers who've been burned, with our receipts policy.",
    },
    badge: "Quick read · 90 seconds · Receipts policy",
    headerRight: "A short note before the next page",
    headline: "Before you trust another real-estate company — read this.",
    leadParas: [
      "If you're here, somebody before us probably lied to you. Bait listing, surprise costs, pressure close. We know the playbook because we've cleaned up after it.",
      "The next page is our receipts policy. Read it, decide if it earns a call. We won't dial until you ask us to.",
    ],
    reframes: [
      {
        num: "01",
        title: "Trust isn't a feeling.",
        body: "It's evidence. If we tell you we're honest, ignore us. If we hand you 800 recorded deeds, three references, and a license link — verify and decide.",
      },
      {
        num: "02",
        title: "Receipts come first.",
        body: "Before any call, we send public-record proof of closings, real references with phone numbers, and license verifications. Verify everything yourself.",
      },
      {
        num: "03",
        title: "We don't dial until you ask.",
        body: "If you read the receipts and it's not for you, no call ever happens. No spam, no chasing. We don't pressure-close.",
      },
    ],
    caveatsEyebrow: "Two things to keep in mind",
    caveatsHeadline: "The next page isn't for everyone — and that's on purpose.",
    caveats: [
      {
        strong: "If a high-pressure pitch is what you want,",
        body: "we're not that. Other companies will hard-close you in a 90-minute call. We send proof and let you decide.",
      },
      {
        strong: "If you want to verify before you trust,",
        body: "this is the path most cautious FL buyers actually take. The receipts are real and the references will pick up.",
      },
    ],
    finalHeadline: "Ready? Here's the page.",
    finalSubhead: "Five minutes. Read the receipts policy. Decide for yourself.",
    finalCta: "Show me the receipts policy",
    finalCtaHref: "/skeptical-buyer/hybrid",
    finalCtaSub: "Opens on this site · No call until you ask · No credit pull",
    ps: "If you've been burned, the only thing that earns trust back is verifiable evidence. The next page is the evidence.",
  },

  application: {
    meta: {
      title: "Skeptical-Buyer Application — Florida Home Path",
      description:
        "Tell us what you want to verify. We send recorded deeds, references, and license verifications before any call.",
    },
    badge: "Verification request · Reviewed by a human",
    headerRight: "Verification first · No call until you ask",
    headline: "Tell us what you want to verify.",
    subhead:
      "We send the receipts before we dial. Pull deeds, call references, verify licenses — all before any call. If we don't earn it, we don't get it.",
    trust: [
      { title: "No credit pull", body: "Estimates only. Nothing here hits your record." },
      {
        title: "Receipts first, call second",
        body: "We send proof in hours. Call only after you ask.",
      },
      {
        title: "Verify everything",
        body: "Public deeds, real references, license links — all included.",
      },
    ],
    fallbackHeadline: "Not ready to apply?",
    fallbackBody:
      "Read the longer page first — full receipts policy, sample deeds, and what we won't do.",
    fallbackCta: "Read the receipts policy first",
    fallbackCtaHref: "/skeptical-buyer/hybrid",
    form: defaultApplicationForm({
      sectionATitle: "How do we reach you?",
      sectionBTitle: "Where you stand today.",
      q: {
        currentSituation: {
          label: "What burned you in real estate before?",
          options: [
            "Bait-and-switch listings",
            "Surprise closing costs",
            "Pressure / hard close",
            "Salesperson who lied",
            "All of the above",
            "Nothing yet — I'm cautious by default",
          ],
        },
        currentMonthly: {
          label: "Roughly what's your current monthly housing cost?",
          placeholder: "e.g. $1,800",
        },
        preApproval: {
          label: "Pre-approval status",
          options: [
            "No, not yet",
            "Yes — under $200K",
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
          label: "Money set aside for a down payment",
          options: [
            "Under $5,000",
            "$5,000–$15,000",
            "$15,000–$50,000",
            "$50,000+",
          ],
        },
        county: {
          label: "Florida county or area you want",
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
          label: "When do you want to be in the new place?",
          options: [
            "ASAP",
            "Next 60–90 days",
            "3–6 months",
            "Just exploring",
          ],
        },
        bestTime: {
          label: "Best time to email — not call",
          options: [
            "Mornings",
            "Lunchtime",
            "Afternoons",
            "Evenings",
            "I'll reach out when ready",
          ],
        },
        notes: {
          label: "What do you most want us to prove?",
          placeholder:
            "Specific concerns, things you'd verify, what would make you trust this.",
        },
      },
      consent:
        "I agree to receive an email with verification materials (recorded deeds, references, license links). I'll request a phone call only when I'm ready. Reply STOP anytime.",
      submit: "Send me the receipts",
      successTitle: "Got it, {name} — receipts package incoming.",
      successBody:
        "Within hours we'll email you recorded deeds for our last 30 closings, three references with phone numbers, and license-verification links. Verify everything yourself. We won't call until you ask us to.",
    }),
  },

  thankYou: {
    meta: {
      title: "Receipts package incoming — verify everything yourself",
      description:
        "Application received. Within hours we'll email recorded deeds, references, and license verifications. We won't call until you ask us to.",
    },
    badge: "Verification request received",
    headerRight: "We won't call until you ask",
    headline: "Receipts package incoming.",
    subhead:
      "Within hours, you'll have recorded deeds, three references with phone numbers, and license-verification links. Verify everything yourself. We won't call until you ask.",
    timelineEyebrow: "What happens next",
    timelineHeadline: "Here's the timeline — your pace.",
    steps: [
      {
        num: "01",
        when: "In the next 5 minutes",
        title: "A confirmation email.",
        body: "From a “@floridahomepath.com” address. Not a phone call. We promised receipts first.",
      },
      {
        num: "02",
        when: "Within a few hours",
        title: "The receipts package.",
        body: "30 recorded deeds (county + parcel numbers), three references with phone numbers, FL DBPR license verification links.",
      },
      {
        num: "03",
        when: "When you're ready",
        title: "You email us back.",
        body: "Reply with “Let's talk” or book a call slot. We don't dial first. Ever.",
      },
      {
        num: "04",
        when: "If we don't earn it",
        title: "Nothing happens.",
        body: "If after verifying you decide we're not for you, we don't follow up. No spam, no chasing. The receipts are yours to keep.",
      },
    ],
    bookingHeadline: "Decided we earned it? Book the call yourself.",
    bookingBody: "Pick a 15-minute slot when you're ready. Or skip — we won't chase.",
    bookingCta: "Book a call when ready",
    bookingCtaHref: "/skeptical-buyer/booking",
    bookingCtaSub: "Takes 30 seconds · You can reschedule any time",
    actionsEyebrow: "Two things to do right now",
    actionsHeadline: "While the receipts are coming.",
    actions: [
      {
        num: "1",
        title: "Whitelist our email.",
        body: "Move the welcome email out of Promotions. The receipts package is heavy — don't let it land in spam.",
      },
      {
        num: "2",
        title: "Have a county recorder bookmarked.",
        body: "Pull a deed or two yourself. Check parcel numbers, look up sale dates. We send specifics — verify them.",
      },
    ],
    readMoreHeadline: "While you wait — read the full receipts policy.",
    readMoreBody:
      "Every claim we make, with the proof we attach to it. Five minutes.",
    readMorePrimary: "Read the policy",
    readMorePrimaryHref: "/skeptical-buyer/hybrid",
    readMoreSecondary: "Or watch the 5-minute version",
    readMoreSecondaryHref: "/skeptical-buyer/vsl",
  },

  booking: {
    meta: {
      title: "Book your call — Florida Home Path",
      description:
        "Pick a 15-minute slot when you're ready. We won't chase if you don't.",
    },
    badge: "15-minute call · Your pace",
    headerRight: "Book when ready",
    headline: "Pick a time when you're ready.",
    subhead:
      "A 15-minute call. They'll have your verification request in front of them and the receipts package already sent.",
    trust: [
      { title: "15 minutes", body: "No more, no less." },
      {
        title: "Verified first",
        body: "We send receipts before any call.",
      },
      {
        title: "No chasing",
        body: "If you don't book, we don't follow up.",
      },
    ],
    coverEyebrow: "What we'll cover on the call",
    coverHeadline: "No fluff. No pressure. Three things.",
    coverBullets: [
      {
        num: "01",
        title: "What you verified.",
        body: "Did the deeds check out? Did the references pick up? What's still uncertain?",
      },
      {
        num: "02",
        title: "What you actually want.",
        body: "Bedrooms, county, payment ceiling. We work backwards from your reality.",
      },
      {
        num: "03",
        title: "An honest plan.",
        body: "If we can help, here's the next step. If not, here's what to do instead.",
      },
    ],
    fallbackHeadline: "Not ready to book?",
    fallbackBody:
      "No problem. We won't chase. Email when you're ready and we'll pick up.",
    fallbackCta: "Read the receipts policy",
    fallbackCtaHref: "/skeptical-buyer/hybrid",
  },
};

export default copy;
