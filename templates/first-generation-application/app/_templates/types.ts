export type Meta = { title: string; description: string };

export type SqueezeCopy = {
  meta: Meta;
  badge: string;
  headerRight?: string;
  headline: string;
  subhead: string;
  bullets: [string, string, string];
  avatarsLine: string;
  formTitle: string;
  formSubhead: string;
  fields: {
    name: { label: string; placeholder: string };
    phone: { label: string; placeholder: string };
    third: { label: string; options: string[]; placeholder: string };
  };
  submit: string;
  microFootnote: string;
  // Use {name} as a placeholder for the user's first name.
  successTitle: string;
  successBody: string;
  proofs: [Proof, Proof, Proof];
};

export type VslCopy = {
  meta: Meta;
  badge: string;
  headerCta: string;
  headline: string;
  subhead: string;
  videoTitle: string;
  videoSubtitle: string;
  videoCaption: string;
  trust: [string, string, string];
  script: { title: string; runtime: string; beats: VslBeat[] };
  beatsEyebrow: string;
  beatsHeadline: string;
  educationalBeats: [Beat, Beat, Beat];
  qualifier: { eyebrow: string; headline: string; body: string; bullets: [string, string, string] };
};

export type VslBeat = { time: string; label: string; lines: string[] };

export type HybridCopy = {
  meta: Meta;
  badge: string;
  headerCta: string;
  headline: string;
  subhead: string;
  primaryCta: string;
  secondaryCta: string;
  microFootnote: string;
  heroCard: {
    eyebrow: string;
    bigStat: string;
    bigStatSecondary: string;
    chip: string;
    rows: [Row, Row, Row, Row];
    microline: string;
    avatarsLine: string;
  };
  painEyebrow: string;
  painHeadline: string;
  painSubhead: string;
  painStats: [Proof, Proof, Proof];
  pivotEyebrow: string;
  pivotHeadline: string;
  pivotOptions: [
    { title: string; body: string; bad: boolean },
    { title: string; body: string; bad: boolean },
    { title: string; body: string; bad: boolean },
  ];
  emotionalHeadline: string;
  emotionalBody: string;
  emotionalKicker: string;
  pathEyebrow: string;
  pathHeadline: string;
  pathSubhead: string;
  benefits: [Beat, Beat, Beat];
  numbersEyebrow: string;
  numbersHeadline: string;
  numbersSubhead: string;
  priceCards: [PriceCard, PriceCard, PriceCard];
  stories: [Story, Story];
  qualifierEyebrow: string;
  qualifierHeadline: string;
  qualifierBody: string;
  qualifierBullets: [string, string, string];
};

export type BridgeCopy = {
  meta: Meta;
  badge: string;
  headerRight?: string;
  headline: string;
  leadParas: [string, string];
  reframes: [Beat, Beat, Beat];
  caveatsEyebrow: string;
  caveatsHeadline: string;
  caveats: [{ strong: string; body: string }, { strong: string; body: string }];
  finalHeadline: string;
  finalSubhead: string;
  finalCta: string;
  finalCtaHref: string;
  finalCtaSub: string;
  ps: string;
};

export type ApplicationCopy = {
  meta: Meta;
  badge: string;
  headerRight?: string;
  headline: string;
  subhead: string;
  trust: [
    { title: string; body: string },
    { title: string; body: string },
    { title: string; body: string },
  ];
  fallbackHeadline: string;
  fallbackBody: string;
  fallbackCta: string;
  fallbackCtaHref: string;
  form: ApplicationFormCopy;
};

export type ApplicationFormCopy = {
  sectionAEyebrow: string;
  sectionATitle: string;
  sectionBEyebrow: string;
  sectionBTitle: string;
  sectionCEyebrow: string;
  sectionCTitle: string;
  sectionDEyebrow: string;
  sectionDTitle: string;
  // Question labels (scenario-tuned)
  q: {
    currentSituation: { label: string; options: string[] };
    currentMonthly: { label: string; placeholder: string };
    preApproval: { label: string; options: string[] };
    comfortablePayment: { label: string; options: string[] };
    income: { label: string; options: string[] };
    credit: { label: string; options: string[] };
    downPayment: { label: string; options: string[] };
    county: { label: string; placeholder: string };
    beds: { label: string; options: string[] };
    budget: { label: string; options: string[] };
    timeline: { label: string; options: string[] };
    bestTime: { label: string; options: string[] };
    notes: { label: string; placeholder: string };
  };
  consent: string;
  submit: string;
  // Use {name} as a placeholder for the user's first name.
  successTitle: string;
  successBody: string;
};

export type ThankYouCopy = {
  meta: Meta;
  badge: string;
  headerRight?: string;
  headline: string;
  subhead: string;
  timelineEyebrow: string;
  timelineHeadline: string;
  steps: [Step, Step, Step, Step];
  bookingHeadline: string;
  bookingBody: string;
  bookingCta: string;
  bookingCtaHref: string;
  bookingCtaSub: string;
  actionsEyebrow: string;
  actionsHeadline: string;
  actions: [{ num: string; title: string; body: string }, { num: string; title: string; body: string }];
  readMoreHeadline: string;
  readMoreBody: string;
  readMorePrimary: string;
  readMorePrimaryHref: string;
  readMoreSecondary: string;
  readMoreSecondaryHref: string;
};

export type Step = { num: string; when: string; title: string; body: string };

export type BookingCopy = {
  meta: Meta;
  badge: string;
  headerRight?: string;
  headline: string;
  subhead: string;
  trust: [{ title: string; body: string }, { title: string; body: string }, { title: string; body: string }];
  coverEyebrow: string;
  coverHeadline: string;
  coverBullets: [Beat, Beat, Beat];
  fallbackHeadline: string;
  fallbackBody: string;
  fallbackCta: string;
  fallbackCtaHref: string;
};

export type Proof = { stat: string; label: string };
export type Beat = { num: string; title: string; body: string };
export type Row = { label: string; value: string };
export type PriceCard = {
  price: string;
  payment: string;
  tag: string;
  highlight?: boolean;
  features: [string, string, string];
};
export type Story = { quote: string; name: string; place: string };

export type ScenarioBrand = {
  name: string;
  scenarioSlug: string;
  hrefBase: string;
  disclosure: string;
  footerCopyright: string;
};

export type ScenarioCopy = {
  brand: ScenarioBrand;
  squeeze: SqueezeCopy;
  vsl: VslCopy;
  hybrid: HybridCopy;
  bridge: BridgeCopy;
  application: ApplicationCopy;
  thankYou: ThankYouCopy;
  booking: BookingCopy;
};
