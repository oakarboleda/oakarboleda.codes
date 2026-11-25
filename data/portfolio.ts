export const profile = {
  name: "Oak Deden-Arboleda",
  shortName: "Oak",
  title: "Senior Full-Stack Software Engineer",
  location: "Minneapolis, MN",
  email: "applied@oakarboleda.codes",
  phone: "(651) 900-2007",
  linkedin: "https://linkedin.com/in/oakarboleda",
  github: "https://github.com/oakarboleda",
  portfolio: "https://www.oakarboleda.codes",
  resumeHref: "/Oak-Deden-Arboleda-Resume.pdf",
  status: "Available",
  headline:
    "I build scalable web and mobile products that users love and engineers respect.",
  summary:
    "Senior Full-Stack Software Engineer with 10+ years architecting scalable web and mobile applications across media, healthcare, and e-commerce. Proven track record leading cross-functional teams, building enterprise design systems and monorepo infrastructures, and delivering secure, high-traffic platforms.",
  focus: [
    { label: "Core Focus", value: "React · TypeScript · Next.js" },
    { label: "Location", value: "Minneapolis, MN" },
    { label: "Full-Stack", value: "Node · Python · Laravel · AWS" },
  ],
};

export const stats = [
  { value: "10+ Years", label: "Production experience" },
  { value: "React & TS", label: "Core engineering focus" },
  { value: "Media & Health", label: "High-traffic platforms" },
  { value: "Team Lead", label: "Mentorship & delivery" },
  { value: "Full-Stack", label: "Web, mobile & APIs" },
  { value: "Design Systems", label: "Tokens & monorepos" },
];

export const selectedWork = [
  {
    number: "01",
    eyebrow: "Straight Arrow News · Senior Full-Stack",
    title: "Membership, Paywall & Editorial Platform",
    role: "Senior Full-Stack Engineer",
    highlight:
      "Architected WordPress VIP membership and paywall systems with Piano auth, geo-rules, tiered access, and a local entitlement cache across web and mobile.",
    description:
      "Shipped subscriber-aware ad and video pipelines, launched a custom WordPress block theme in the monorepo, and extended the public REST API with access-level, author, and Media Miss bias data—backed by Sentry, CSP, and universal links.",
    bullets: [
      "Coming Soon and Limited Series editorial workflows with privacy-safe newsletter attribution via SHA-256 hashing",
      "Consent-gated ad loading and ad-free playback for paying subscribers",
      "Global header, navigation, homepage story modules, and design-token system",
    ],
    tags: [
      "TypeScript",
      "React",
      "WordPress VIP",
      "Piano",
      "REST APIs",
      "Sentry",
      "CSP",
      "Monorepo",
    ],
  },
  {
    number: "02",
    eyebrow: "UnitedHealth Group & Optum · Senior Software Engineer",
    title: "Design System Migration & Monorepo Mobile Launch",
    role: "Senior Software Engineer",
    highlight:
      "Modernized web and React Native apps by migrating legacy core components to the Abyss Library using Atomic Design principles.",
    description:
      "Pioneered a monorepo infrastructure at Optum to unify shared packages and launch a production mobile application from scratch. Built React, TypeScript, and GraphQL features for a Broker-facing application while leading a cross-functional Agile team.",
    bullets: [
      "Unified shared packages and shipped a production mobile app from scratch",
      "Partnered with stakeholders to deliver Broker-facing GraphQL workflows",
      "Mentored three junior developers on unit and E2E testing practices",
    ],
    tags: [
      "React",
      "React Native",
      "TypeScript",
      "GraphQL",
      "Abyss Library",
      "Monorepo",
      "Atomic Design",
    ],
  },
  {
    number: "03",
    eyebrow: "The Star Tribune · Software Engineer",
    title: "React Native Release Driving 30% Revenue Growth",
    role: "Software Engineer",
    highlight:
      "Spearheaded a major React Native mobile app release that revitalized the product line and drove a 30% annual revenue increase.",
    description:
      "Ran serverless A/B experiments via Optimizely and AWS Lambda to optimize conversion, and refactored legacy Java and C++ libraries to reduce technical debt and modernize front-end scalability.",
    bullets: [
      "Major React Native release with measurable revenue impact",
      "Optimizely + AWS Lambda experiments for conversion lifts",
      "Legacy Java/C++ library modernization for front-end scale",
    ],
    tags: [
      "React Native",
      "JavaScript",
      "Optimizely",
      "AWS Lambda",
      "A/B Testing",
      "Mobile",
    ],
  },
  {
    number: "04",
    eyebrow: "Selected Project · FairGame AI",
    title: "FairGame AI: Evidence Analysis for Employment Law",
    role: "Builder · AI-Assisted Platform",
    highlight:
      "Developed an AI-assisted evidence analysis platform that cross-references emails, chats, voicemails, and documents to identify employment law violations.",
    description:
      "Generates structured legal reports from heterogeneous evidence sources—combining LLM workflows with careful document handling for high-stakes analysis.",
    bullets: [
      "Cross-referenced multi-channel evidence into a single analysis pipeline",
      "Structured legal report generation from unstructured inputs",
      "AI-assisted workflows oriented around accuracy and auditability",
    ],
    tags: ["AI / LLM", "TypeScript", "Document Analysis", "Reporting"],
  },
  {
    number: "05",
    eyebrow: "Selected Projects · Product Builds",
    title: "Skater Stats & 2 UR Table",
    role: "Full-Stack Builder",
    highlight:
      "Shipped domain-specific products from scratch—hockey analytics for youth associations and a DTC marketplace for regional farms and artisans.",
    description:
      "Skater Stats tracks player and team performance for coaches and parents. 2 UR Table connects local producers with buyers without corporate marketplace overhead.",
    bullets: [
      "Hockey analytics for associations, coaches, and parents",
      "Direct-to-consumer marketplace for regional farms and artisans",
      "End-to-end product ownership from concept to usable software",
    ],
    tags: ["Full-Stack", "Analytics", "Marketplace", "Product"],
  },
];

export const experience = [
  {
    company: "Straight Arrow News",
    location: "Remote",
    dates: "Apr 2025 – Nov 2026",
    role: "Senior Full-Stack Engineer",
    bullets: [
      "Architected WordPress VIP membership and paywall systems with Piano auth, geo-rules, tiered access, and local entitlement caching across web and mobile.",
      "Shipped subscriber-aware ad and video pipelines with consent-gated loading and ad-free playback for paying users.",
      "Launched a custom WordPress block theme in the monorepo—global header, navigation, homepage modules, and design tokens.",
      "Configured Sentry, CSP, and universal links; extended the public REST API with access-level, author, and Media Miss bias data.",
    ],
    tags: ["TypeScript", "React", "WordPress VIP", "REST", "Sentry", "CSP"],
  },
  {
    company: "UnitedHealth Group & Optum",
    location: "Remote · via Experience IT",
    dates: "Mar 2022 – Nov 2024",
    role: "Senior Software Engineer",
    bullets: [
      "Migrated legacy web and React Native components to the Abyss Library using Atomic Design.",
      "Built a monorepo to unify shared packages and launch a production mobile application from scratch.",
      "Delivered Broker-facing features in React, TypeScript, and GraphQL.",
      "Led a cross-functional Agile team and mentored three junior developers on unit and E2E testing.",
    ],
    tags: ["React", "React Native", "TypeScript", "GraphQL", "Monorepo"],
  },
  {
    company: "The Star Tribune",
    location: "Minneapolis, MN",
    dates: "Apr 2019 – Apr 2021",
    role: "Software Engineer",
    bullets: [
      "Led a major React Native release that drove a 30% annual revenue increase.",
      "Ran serverless A/B experiments with Optimizely and AWS Lambda.",
      "Refactored legacy Java and C++ libraries to reduce debt and improve front-end scalability.",
    ],
    tags: ["React Native", "Optimizely", "AWS Lambda", "Mobile"],
  },
  {
    company: "Irish Titan",
    location: "Saint Louis Park, MN",
    dates: "Feb 2018 – Feb 2019",
    role: "Full-Stack Software Engineer",
    bullets: [
      "Architected custom Shopify themes with Liquid, HTML5, CSS3, and JavaScript alongside Drupal, Magento, and WordPress builds.",
      "Built responsive storefronts and third-party API integrations that improved mobile usability and conversion.",
    ],
    tags: ["Shopify", "Liquid", "JavaScript", "WordPress", "Drupal"],
  },
  {
    company: "Earlier Engineering Roles",
    location: "Minneapolis area",
    dates: "2014 – 2017",
    role: "Frontend & Associate Engineer",
    bullets: [
      "JAMF — modular AngularJS/TypeScript features and V10 UI groundwork.",
      "Gander Mountain — responsive e-commerce architecture and product detail pages.",
      "AIMIA — loyalty portal interfaces and analytics for Hallmark, Kellogg, and Pampers.",
      "Capella University — Liferay portal modules and WCAG 2.0 accessibility leadership.",
      "3M (Horizon Integrations) — Magento/CMS PHP customization and responsive front ends.",
    ],
    tags: ["AngularJS", "TypeScript", "E-commerce", "WCAG 2.0", "PHP"],
  },
];

export const principles = [
  {
    number: "01",
    title: "Design systems that scale with the product",
    body: "I build token-driven component libraries and monorepo infrastructures so teams ship consistent UI without reinventing patterns—whether that’s Abyss Atomic Design at Optum or a WordPress block theme with shared design tokens.",
    tags: ["Design Tokens", "Atomic Design", "Monorepos", "Component Libraries"],
  },
  {
    number: "02",
    title: "Security and privacy as default engineering",
    body: "From Content Security Policy and consent-gated ads to privacy-safe newsletter attribution with SHA-256 hashing, I treat trust and compliance as product requirements—not afterthoughts.",
    tags: ["CSP", "Privacy", "Auth & Entitlements", "Observability"],
  },
  {
    number: "03",
    title: "Accessibility and craft in every interface",
    body: "WCAG-minded UI, semantic structure, and resilient frontends are non-negotiable. Complex workflows should feel clear on every device—web, iOS, and Android.",
    tags: ["WCAG 2.0", "Semantic HTML", "Responsive UI", "React Native"],
  },
  {
    number: "04",
    title: "Quality through TDD, mentorship, and clarity",
    body: "I lead cross-functional teams, mentor junior engineers on unit and E2E testing, and partner with UX and product so ambiguity is resolved before it becomes production debt.",
    tags: ["TDD", "Playwright", "Jest", "Mentorship", "Agile Leadership"],
  },
];

export const skillGroups = [
  {
    title: "Frontend Architecture & Core",
    description:
      "High-performance, accessible interfaces for web and mobile products.",
    skills: [
      "React",
      "React Native",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Design Tokens & Component Libraries",
      "WordPress Block Themes",
      "WCAG 2.0 Accessibility",
      "HTML5 & Modern CSS",
    ],
  },
  {
    title: "Backend, APIs & CMS",
    description:
      "APIs, CMS platforms, and service boundaries that hold up in production.",
    skills: [
      "Node.js",
      "Laravel",
      "Python",
      "RESTful APIs",
      "GraphQL",
      "Microservices",
      "AWS Lambda",
      "WordPress VIP",
      "Shopify (Liquid)",
    ],
  },
  {
    title: "Cloud, Data & DevOps",
    description:
      "Infrastructure and data layers that keep delivery fast and reliable.",
    skills: [
      "AWS",
      "Docker",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "MongoDB",
      "Firebase",
      "Monorepo Infrastructure",
      "CI/CD Pipelines",
      "Git",
    ],
  },
  {
    title: "AI, Security & Observability",
    description:
      "Modern product capabilities with security and visibility built in.",
    skills: [
      "LLM / AI API Integration",
      "Content Security Policy (CSP)",
      "Privacy-Safe Analytics",
      "Sentry",
      "Playwright",
      "Jest",
      "Optimizely (A/B Testing)",
    ],
  },
];

export const about = {
  heading: "Engineering software that stands up in production.",
  paragraphs: [
    "I’m a senior full-stack engineer with over a decade of experience building web and mobile products across media, healthcare, and e-commerce. Recent work spans Straight Arrow News membership and paywall systems, Optum’s design-system and monorepo mobile launch, and a Star Tribune React Native release that drove meaningful revenue growth.",
    "I care about the full product lifecycle—design systems, secure entitlements, accessible interfaces, CI visibility, and AI-assisted workflows that stay accountable. Outside client and employer work, I’ve built FairGame AI for employment-law evidence analysis, Skater Stats for youth hockey analytics, and 2 UR Table for local producers.",
    "I lead through clarity: mentoring engineers, partnering with UX and product, and shipping systems that teams can extend without fear.",
  ],
  education: "B.S. in Software Development — The Art Institute International Minnesota",
  facts: [
    { label: "Location", value: "Minneapolis, MN (Remote-friendly)" },
    { label: "Primary Focus", value: "Senior Full-Stack & Product Engineering" },
    { label: "Core Languages", value: "TypeScript, JavaScript, Python, PHP, SQL" },
    { label: "Education", value: "B.S. Software Development" },
    { label: "Status", value: "Open to Senior Full-Stack / Frontend roles" },
  ],
};

export const contact = {
  heading: "Let’s build something that lasts.",
  body: "I’m open to senior full-stack and frontend opportunities with teams that care about craft, accessibility, and shipping real products. If you’re building media, health, commerce, or AI-assisted platforms—I’d love to talk.",
  cta: "Specializing in React, TypeScript, React Native, and modern full-stack delivery.",
};
