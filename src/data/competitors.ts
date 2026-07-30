// Centralised source of truth for the "Competitor Alternatives" conquesting pages.
// Each competitor renders through the data-driven <CompetitorAlternative> page,
// so updates here propagate to every /alternatives/[slug] URL automatically.

export interface CompetitorFaq {
  question: string;
  answer: string;
}

export interface CompetitorComparisonRow {
  label: string;
  driveDojo: string;
  competitor: string;
}

export interface CompetitorDifferentiator {
  title: string;
  description: string;
}

export interface Competitor {
  slug: string;
  name: string;
  shortName: string;
  category: "national" | "local";
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  intro: string;
  painPoints: string[];
  comparison: CompetitorComparisonRow[];
  differentiators: CompetitorDifferentiator[];
  faqs: CompetitorFaq[];
  ctaText: string;
}

// ─── Drive Dojo's constant advantages (shared across every comparison table) ───
export const DD_DIFFERENTIATORS: CompetitorDifferentiator[] = [
  {
    title: "No Waiting Lists",
    description:
      "See live availability and book your first lesson in 60 seconds. No callbacks, no weeks of waiting — you simply pick the slot that suits you.",
  },
  {
    title: "Premium Mercedes-Benz A-Class",
    description:
      "Learn in a 2024 automatic Mercedes-Benz A-Class with dual controls. A calmer, more modern car than the standard hatchbacks most franchises use.",
  },
  {
    title: "Fully Qualified ADI — Not a Trainee",
    description:
      "Every lesson is with a DVSA Approved Driving Instructor (ADI). You will never be handed to a trainee PDI still building their hours.",
  },
  {
    title: "1-to-1, Same Instructor",
    description:
      "Consistent 1-to-1 tuition from the same instructor every time. No churn, no re-explaining your progress to a stranger.",
  },
  {
    title: "Klarna Pay in 3",
    description:
      "Spread the cost interest-free with Klarna. Book your block of lessons and pay in 3 instalments — no large upfront outlay.",
  },
  {
    title: "Hundreds of Local Passes",
    description:
      "Join the hundreds of East London learners who passed first time with us — a 98% first-time pass rate, 13% above the national average.",
  },
];

// Drive Dojo column values (constant)
const DD_CAR = "2024 Mercedes-Benz A-Class (automatic, dual-control)";
const DD_INSTRUCTOR = "Fully qualified DVSA ADI — never a trainee PDI";
const DD_WAIT = "Book live in 60 seconds — no waiting list";
const DD_FORMAT = "1-to-1, same instructor every lesson";
const DD_PAY = "Klarna Pay in 3, interest-free";
const DD_PRICE = "All-inclusive, no hidden franchise fees";
const DD_PASS = "Teach until test-ready — 98% first-time pass rate";

// Competitor-column presets
const NATIONAL = {
  car: "Standard franchise hatchback (mixed, often older models)",
  instructor: "Often trainee PDIs on franchise agreements",
  wait: "Weeks-long waiting lists are common",
  format: "High student volume; instructor churn between lessons",
  pay: "Upfront block booking; finance sometimes at a cost",
  price: "Franchise fees can mean hidden costs passed to you",
  pass: "Block-based; progress tied to lesson hours purchased",
};

const LOCAL = {
  car: "Usually a single older manual or automatic car",
  instructor: "A qualified ADI, but one person covering all areas",
  wait: "Depends on that instructor's diary — often weeks",
  format: "1-to-1 but limited availability; no backup instructor",
  pay: "Bank transfer or cash; rarely instalment plans",
  price: "Transparent but full payment usually upfront",
  pass: "Good local knowledge, but no scale or pass guarantee",
};

function buildComparison(cols: typeof NATIONAL): CompetitorComparisonRow[] {
  return [
    { label: "Car you learn in", driveDojo: DD_CAR, competitor: cols.car },
    { label: "Instructor qualification", driveDojo: DD_INSTRUCTOR, competitor: cols.instructor },
    { label: "Waiting time", driveDojo: DD_WAIT, competitor: cols.wait },
    { label: "Lesson format", driveDojo: DD_FORMAT, competitor: cols.format },
    { label: "Payments", driveDojo: DD_PAY, competitor: cols.pay },
    { label: "Pricing transparency", driveDojo: DD_PRICE, competitor: cols.price },
    { label: "Pass-rate focus", driveDojo: DD_PASS, competitor: cols.pass },
  ];
}

function buildFaqs(name: string, switchReason: string): CompetitorFaq[] {
  return [
    {
      question: `How does Drive Dojo compare to ${name} in East London?`,
      answer: `Drive Dojo and ${name} both help East London learners pass, but the experience differs. With Drive Dojo you book live in 60 seconds (no waiting list), learn in a 2024 Mercedes-Benz A-Class with a fully qualified ADI, get consistent 1-to-1 lessons from the same instructor, and spread the cost with Klarna Pay in 3. ${name} typically relies on a franchise or single-instructor model, which can mean waiting lists, trainee instructors, or limited slots. If you value flexibility, a premium car, and a guaranteed ADI, Drive Dojo is the stronger choice.`,
    },
    {
      question: `Why do learners switch from ${name} to Drive Dojo?`,
      answer: switchReason,
    },
    {
      question: "Can I book automatic driving lessons instantly?",
      answer:
        "Yes. Drive Dojo shows live availability — book your automatic Mercedes-Benz A-Class lesson online in 60 seconds, with Klarna Pay in 3 interest-free. No waiting lists and no callbacks.",
    },
    {
      question: "Are your instructors fully qualified ADIs?",
      answer:
        "Yes. Every Drive Dojo lesson is with a fully qualified DVSA Approved Driving Instructor (ADI) — never a trainee PDI. You get consistent, 1-to-1 instruction from the same instructor.",
    },
    {
      question: "Do you offer Klarna payments?",
      answer:
        "Yes. Spread the cost of your lessons with Klarna Pay in 3 interest-free instalments at checkout when you book your block of lessons online.",
    },
  ];
}

export const competitors: Competitor[] = [
  {
    slug: "red-driving-school",
    name: "RED Driving School",
    shortName: "RED",
    category: "national",
    metaTitle: "RED Driving School Alternatives | Drive Dojo East London",
    metaDescription:
      "Considering RED Driving School? Compare RED vs Drive Dojo in East London — no waiting lists, a Mercedes-Benz A-Class, Klarna payments and a fully qualified ADI. Book instantly.",
    keywords:
      "RED driving school alternative, RED driving school review, RED driving lessons, alternative to RED driving school, Drive Dojo vs RED, driving lessons East London",
    intro:
      "If you have been looking at RED Driving School but want to avoid long waiting lists and trainee instructors, Drive Dojo offers a simpler path in East London — book a Mercedes-Benz A-Class lesson live in 60 seconds, pay with Klarna, and learn 1-to-1 with a fully qualified ADI.",
    painPoints: [
      "Weeks-long waiting lists before your first lesson",
      "Lessons often with trainee PDIs still building their hours",
      "Franchise model means instructors manage huge student volumes",
      "Hidden franchise costs can appear in lesson pricing",
    ],
    comparison: buildComparison({
      ...NATIONAL,
      car: "RED-branded franchise hatchbacks (mixed, often older models)",
    }),
    differentiators: DD_DIFFERENTIATORS,
    faqs: buildFaqs(
      "RED Driving School",
      "Many learners come to Drive Dojo after experiencing RED's waiting lists and trainee instructors. They want a guaranteed 1-to-1 slot with a fully qualified ADI, a calmer car, and the ability to pay in instalments — without the franchise overhead."
    ),
    ctaText: "Book Your First Lesson — £70",
  },
  {
    slug: "aa-driving-school",
    name: "AA Driving School",
    shortName: "AA",
    category: "national",
    metaTitle: "AA Driving School Alternatives | Drive Dojo East London",
    metaDescription:
      "AA Driving School review & alternatives. Compare AA vs Drive Dojo in East London — instant booking, Mercedes-Benz A-Class, Klarna, fully qualified ADI. Join hundreds of local passes.",
    keywords:
      "AA driving school alternative, AA driving school review, AA driving lessons, alternative to AA driving school, Drive Dojo vs AA",
    intro:
      "The AA is a trusted name, but AA Driving School lessons in East London can mean waiting lists and franchise instructors. Drive Dojo gives you the same goal — passing first time — with live booking, a premium car, and 1-to-1 ADI tuition.",
    painPoints: [
      "Waiting lists while a slot opens with a local franchise instructor",
      "Instructor churn as franchisees manage large student books",
      "Lessons sometimes with trainee PDIs rather than qualified ADIs",
      "Franchise overheads that can push up the effective hourly cost",
    ],
    comparison: buildComparison(NATIONAL),
    differentiators: DD_DIFFERENTIATORS,
    faqs: buildFaqs(
      "AA Driving School",
      "AA Driving School has brand trust, but East London learners tell us they switched for live booking, a premium car, and a consistent ADI rather than being assigned whoever is free."
    ),
    ctaText: "Book Your First Lesson — £70",
  },
  {
    slug: "bsm-driving-school",
    name: "BSM (British School of Motoring)",
    shortName: "BSM",
    category: "national",
    metaTitle: "BSM Driving Lessons Alternatives | Drive Dojo East London",
    metaDescription:
      "BSM driving lessons alternatives in East London. Compare BSM vs Drive Dojo — no waiting lists, Mercedes-Benz A-Class, Klarna Pay in 3, fully qualified ADI. Book your first lesson in 60 seconds.",
    keywords:
      "BSM driving lessons, BSM driving school alternative, BSM review, alternative to BSM, Drive Dojo vs BSM",
    intro:
      "BSM has history, but modern learners in East London often want more flexibility. Drive Dojo lets you skip the waiting list, learn in a Mercedes-Benz A-Class, and spread the cost with Klarna.",
    painPoints: [
      "Backlog of learners waiting for the next available instructor",
      "High student-to-instructor ratios under the franchise model",
      "Trainee PDIs covering some lessons",
      "Block booking required upfront, with limited instalment options",
    ],
    comparison: buildComparison(NATIONAL),
    differentiators: DD_DIFFERENTIATORS,
    faqs: buildFaqs(
      "BSM",
      "BSM's heritage is appealing, yet learners often switch for flexibility — instant booking, Klarna, and a Mercedes-Benz A-Class instead of a standard hatchback."
    ),
    ctaText: "Book Your First Lesson — £70",
  },
  {
    slug: "drivethrul",
    name: "DriveThruL",
    shortName: "DriveThruL",
    category: "local",
    metaTitle: "DriveThruL Alternatives | Drive Dojo East London",
    metaDescription:
      "Comparing DriveThruL driving lessons in East London? Drive Dojo offers live booking, a Mercedes-Benz A-Class, Klarna payments and a fully qualified ADI. Book your first lesson in 60 seconds.",
    keywords:
      "DriveThruL alternative, DriveThruL review, DriveThruL driving lessons, DriveThruL East London, Drive Dojo vs DriveThruL",
    intro:
      "DriveThruL is a local East London option, but availability depends on a single instructor's diary. Drive Dojo gives you the same local knowledge with live booking, a backup instructor, and Klarna flexibility.",
    painPoints: [
      "Limited slots tied to one instructor's availability",
      "No backup instructor if they are on holiday or unwell",
      "Payment usually upfront, with few instalment options",
      "A single older car rather than a consistent modern fleet",
    ],
    comparison: buildComparison({
      ...LOCAL,
      wait: "Limited to one instructor's diary — often weeks",
    }),
    differentiators: DD_DIFFERENTIATORS,
    faqs: buildFaqs(
      "DriveThruL",
      "DriveThruL is a genuine local option, but a single instructor's diary limits slots. Learners switch to Drive Dojo for the same local knowledge plus live availability and a backup instructor."
    ),
    ctaText: "Book Your First Lesson — £70",
  },
  {
    slug: "ezlicense",
    name: "EzLicense",
    shortName: "EzLicense",
    category: "local",
    metaTitle: "EzLicense Driving Lessons Alternatives | Drive Dojo",
    metaDescription:
      "EzLicense vs Drive Dojo in East London. Compare pricing, car, and instructor quality. Book instantly in a Mercedes-Benz A-Class with Klarna and a fully qualified ADI.",
    keywords:
      "EzLicense alternative, EzLicense review, EzLicense driving lessons East London, Drive Dojo vs EzLicense",
    intro:
      "EzLicense works for some East London learners, but if you want transparent all-inclusive pricing, a newer automatic car, and the option to pay in instalments, Drive Dojo is worth comparing.",
    painPoints: [
      "Availability limited by a small local team",
      "Pricing not always all-inclusive or easy to compare",
      "Few flexible payment options beyond upfront payment",
      "Car quality and consistency can vary",
    ],
    comparison: buildComparison(LOCAL),
    differentiators: DD_DIFFERENTIATORS,
    faqs: buildFaqs(
      "EzLicense",
      "EzLicense works for some, but learners switch to Drive Dojo for transparent all-inclusive pricing, Klarna instalments, and a newer automatic car."
    ),
    ctaText: "Book Your First Lesson — £70",
  },
  {
    slug: "abbies-driving-school",
    name: "Abbie's Driving School",
    shortName: "Abbie's",
    category: "local",
    metaTitle: "Abbie's Driving School Alternatives | Drive Dojo East London",
    metaDescription:
      "Considering Abbie's Driving School in East London? Compare with Drive Dojo — instant live booking, Mercedes-Benz A-Class, Klarna, fully qualified ADI. Join hundreds of passes.",
    keywords:
      "Abbie's driving school alternative, Abbie's driving school review, Abbie's driving lessons East London",
    intro:
      "Abbie's offers personal tuition in East London, but a single diary means limited slots. Drive Dojo pairs that local touch with live booking, Klarna, and a Mercedes-Benz A-Class with dual controls.",
    painPoints: [
      "Slots constrained by one instructor's calendar",
      "No cover if that instructor is unavailable",
      "Payment typically upfront",
      "One car, so less consistency if it's off the road",
    ],
    comparison: buildComparison(LOCAL),
    differentiators: DD_DIFFERENTIATORS,
    faqs: buildFaqs(
      "Abbie's Driving School",
      "Abbie's offers personal tuition, yet availability is limited. Learners switch for instant booking, Klarna, and a Mercedes-Benz A-Class with dual controls."
    ),
    ctaText: "Book Your First Lesson — £70",
  },
  {
    slug: "kims-driving-school",
    name: "Kim's Driving School",
    shortName: "Kim's",
    category: "local",
    metaTitle: "Kim's Driving School Alternatives | Drive Dojo East London",
    metaDescription:
      "Kim's Driving School vs Drive Dojo in East London. Compare car, instructor quality and payments. Book a Mercedes-Benz A-Class lesson live with Klarna.",
    keywords:
      "Kim's driving school alternative, Kim's driving school review, Kim's driving lessons East London",
    intro:
      "Kim's is well regarded locally in East London, but learners who want live slots, instalment payments, and a consistent ADI in a premium car often choose Drive Dojo instead.",
    painPoints: [
      "Booking depends on one instructor's free time",
      "Limited cover during holidays or illness",
      "Few instalment or finance options",
      "A single car rather than a managed fleet",
    ],
    comparison: buildComparison(LOCAL),
    differentiators: DD_DIFFERENTIATORS,
    faqs: buildFaqs(
      "Kim's Driving School",
      "Kim's is well regarded locally, but learners switch to Drive Dojo for live slots, instalment payments, and a consistent ADI in a premium car."
    ),
    ctaText: "Book Your First Lesson — £70",
  },
  {
    slug: "first-drive-group",
    name: "First Drive Group",
    shortName: "First Drive",
    category: "local",
    metaTitle: "First Drive Group Alternatives | Drive Dojo East London",
    metaDescription:
      "First Drive Group driving lessons vs Drive Dojo in East London. No waiting lists, Mercedes-Benz A-Class, Klarna Pay in 3, fully qualified ADI. Book in 60 seconds.",
    keywords:
      "First Drive Group alternative, First Drive driving lessons, First Drive Group review East London",
    intro:
      "First Drive Group covers East London, but learners who want to start this week — not wait for a diary to open — switch to Drive Dojo for live booking, Klarna, and a Mercedes-Benz A-Class.",
    painPoints: [
      "Waiting for the next available slot across the group",
      "Instructor assignment can vary lesson to lesson",
      "Limited instalment payment choices",
      "Mixed fleet with inconsistent car quality",
    ],
    comparison: buildComparison(LOCAL),
    differentiators: DD_DIFFERENTIATORS,
    faqs: buildFaqs(
      "First Drive Group",
      "First Drive Group covers East London, but learners switch for no waiting lists, Klarna Pay in 3, and a Mercedes-Benz A-Class."
    ),
    ctaText: "Book Your First Lesson — £70",
  },
  {
    slug: "local-independent-east-london",
    name: "Independent Driving Instructors in East London & Ilford",
    shortName: "Local Independents",
    category: "local",
    metaTitle: "Independent Driving Instructors East London & Ilford | Drive Dojo",
    metaDescription:
      "Comparing independent driving instructors in East London and Ilford? Drive Dojo combines local route knowledge with live booking, a Mercedes-Benz A-Class, Klarna and a fully qualified ADI.",
    keywords:
      "independent driving instructor East London, independent driving instructor Ilford, local driving instructor alternative, Drive Dojo vs independent instructor",
    intro:
      "Independent instructors in East London and Ilford offer personal 1-to-1 tuition, but a single diary means limited slots and no backup. Drive Dojo pairs that local knowledge with live availability, a backup instructor, and Klarna flexibility.",
    painPoints: [
      "A single diary means limited weekly slots",
      "No backup instructor if they are unavailable",
      "Payment usually upfront, with few instalment options",
      "One car, so consistency suffers if it's off the road",
    ],
    comparison: buildComparison({
      ...LOCAL,
      instructor: "A qualified ADI, but one person covering East London & Ilford",
      wait: "Limited to one instructor's diary across East London & Ilford",
    }),
    differentiators: DD_DIFFERENTIATORS,
    faqs: buildFaqs(
      "independent instructors in East London and Ilford",
      "Independent instructors offer personal 1-to-1 tuition, but a single diary means limited slots and no backup. Learners switch to Drive Dojo for the same local knowledge plus live availability, Klarna, and a backup instructor."
    ),
    ctaText: "Book Your First Lesson — £70",
  },
];

export function getCompetitor(slug: string): Competitor | undefined {
  return competitors.find((c) => c.slug === slug);
}
