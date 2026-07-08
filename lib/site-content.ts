export const SITE_URL = "https://dreamscale.co.za"

export const faqs = [
  {
    q: "What is DreamScale?",
    a: "DreamScale is an all-in-one AI workspace for founders and small teams. Instead of paying for a dozen separate apps, you run your entire business from one place: an AI assistant, revenue and operations insight, competitor research, team tools, and guided growth, all connected to your business profile.",
  },
  {
    q: "What does the software actually do?",
    a: "You set up your business profile once, then every tool already knows your goals, your numbers, and your team. Bizora AI answers questions and works on your files, Revenue Intelligence tracks cash and runway, Systems maps how your business operates, Competitive Intelligence scans your rivals, TeamSync keeps your people aligned, and Venture Quest walks you through growth step by step. In short, DreamScale is the single place where you plan, run, and grow your entire business.",
  },
  {
    q: "Who is DreamScale for?",
    a: "DreamScale is for people with just an idea who want to scale it, and for people who are past the idea stage and want to grow without juggling twelve different tools. Whether you sell online, run a service, or build a product, DreamScale is built for you.",
  },
  {
    q: "Do I need a credit card to start?",
    a: "No. You can create a free account and explore the full workspace without entering any payment details. Upgrade only when you are ready.",
  },
  {
    q: "Can I cancel or change my plan anytime?",
    a: "Yes. You can upgrade, downgrade, or cancel whenever you like. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "Does DreamScale replace my other tools?",
    a: "That is the idea. DreamScale brings your tools, data, and team into one screen, so you keep the context and the savings instead of spreading everything across separate apps.",
  },
  {
    q: "How is my data handled?",
    a: "Your data stays yours. See our Privacy Policy for the full details on how your information is stored and used.",
  },
] as const

export type ForPage = {
  slug: string
  title: string
  headline: string
  description: string
  pains: string[]
  benefits: string[]
  cta: string
}

export const forPages: ForPage[] = [
  {
    slug: "founders-with-an-idea",
    title: "DreamScale for founders with an idea",
    headline: "Turn your idea into a real business",
    description:
      "You have the vision but not the stack. DreamScale gives you one workspace to plan, test, and grow from day one without buying a dozen tools first.",
    pains: [
      "You are not sure which tools to buy first",
      "Your notes, plans, and research live in five different places",
      "You need guidance, not just another blank doc",
    ],
    benefits: [
      "Venture Quest walks you through the next step every day",
      "Bizora AI helps you think through offers, messaging, and plans",
      "One profile keeps your whole business context in one place",
    ],
    cta: "Start building from your idea",
  },
  {
    slug: "small-teams",
    title: "DreamScale for small teams",
    headline: "One workspace for your whole team",
    description:
      "Small teams lose time when everyone works in separate apps. DreamScale keeps goals, tasks, revenue, and AI support in one shared system.",
    pains: [
      "Context gets lost between chat, docs, and spreadsheets",
      "Nobody has a clear view of cash, priorities, or progress",
      "You pay for multiple tools that barely talk to each other",
    ],
    benefits: [
      "TeamSync keeps people aligned on what matters now",
      "Revenue Intelligence and Systems show how the business is really running",
      "Everyone works from the same business profile",
    ],
    cta: "Bring your team into one workspace",
  },
  {
    slug: "service-businesses",
    title: "DreamScale for service businesses",
    headline: "Run your service business without the chaos",
    description:
      "Agencies, consultants, and service operators need clarity on clients, delivery, and cash. DreamScale connects operations, revenue, and growth in one place.",
    pains: [
      "Client work, internal ops, and sales live in different systems",
      "You react to problems instead of seeing them early",
      "Growth feels harder because nothing is connected",
    ],
    benefits: [
      "Systems maps how work flows through your business",
      "Revenue Intelligence tracks cash and runway in one view",
      "Bizora AI helps with proposals, updates, and planning",
    ],
    cta: "Run your service business smarter",
  },
  {
    slug: "ecommerce-sellers",
    title: "DreamScale for ecommerce sellers",
    headline: "Grow your store with one connected workspace",
    description:
      "Online sellers need more than a storefront. DreamScale helps you track revenue, study competitors, and plan the next move from one dashboard.",
    pains: [
      "Store data, marketing, and planning are spread across tools",
      "Hard to see what is actually driving profit",
      "Competitor moves are easy to miss",
    ],
    benefits: [
      "Revenue Intelligence shows what is working and what is not",
      "Competitive Intelligence scans rivals so you can respond faster",
      "Venture Quest gives you a daily growth path",
    ],
    cta: "Scale your store with clarity",
  },
]

export type VsPage = {
  slug: string
  competitor: string
  title: string
  headline: string
  description: string
  dreamscaleWins: string[]
  competitorLimits: string[]
  rows: { feature: string; dreamscale: string; competitor: string }[]
}

export const vsPages: VsPage[] = [
  {
    slug: "notion",
    competitor: "Notion",
    title: "DreamScale vs Notion | Notion alternative for founders",
    headline: "DreamScale vs Notion",
    description:
      "Notion is great for docs and wikis. DreamScale is built to run your whole business with AI, revenue insight, team alignment, and guided growth.",
    dreamscaleWins: [
      "Built for running a business, not just writing docs",
      "AI wired to your business profile and numbers",
      "Revenue, systems, competitors, and team tools in one place",
    ],
    competitorLimits: [
      "Strong docs, but you still need other apps for ops and growth",
      "No native revenue intelligence or competitor scanning",
      "Business context lives in pages you have to maintain yourself",
    ],
    rows: [
      { feature: "AI assistant", dreamscale: "Bizora wired to your profile", competitor: "General AI add-on" },
      { feature: "Revenue tracking", dreamscale: "Built in", competitor: "Requires separate tools" },
      { feature: "Team alignment", dreamscale: "TeamSync + shared profile", competitor: "Docs and tasks only" },
      { feature: "Growth guidance", dreamscale: "Venture Quest daily paths", competitor: "Manual planning" },
    ],
  },
  {
    slug: "monday",
    competitor: "Monday.com",
    title: "DreamScale vs Monday | Monday alternative for founders",
    headline: "DreamScale vs Monday.com",
    description:
      "Monday is strong for project boards. DreamScale goes further with AI, revenue intelligence, and a full founder workspace connected to one business profile.",
    dreamscaleWins: [
      "More than task boards: AI, revenue, and strategy together",
      "Founder-first workflow instead of generic project management",
      "Fewer tools to stitch together",
    ],
    competitorLimits: [
      "Project management focus, not a full business OS",
      "AI and analytics are not central to the product",
      "Costs rise as you add boards, automations, and integrations",
    ],
    rows: [
      { feature: "Business profile", dreamscale: "One shared context", competitor: "Per-board setup" },
      { feature: "AI support", dreamscale: "Bizora across modules", competitor: "Limited / add-on" },
      { feature: "Revenue insight", dreamscale: "Native module", competitor: "Not included" },
      { feature: "Competitor research", dreamscale: "Built in", competitor: "Not included" },
    ],
  },
  {
    slug: "clickup",
    competitor: "ClickUp",
    title: "DreamScale vs ClickUp | ClickUp alternative for founders",
    headline: "DreamScale vs ClickUp",
    description:
      "ClickUp packs in project features. DreamScale focuses on what founders need: one AI workspace to plan, run, and grow without tool sprawl.",
    dreamscaleWins: [
      "Purpose-built for founders, not generic productivity",
      "Cleaner stack: fewer modules, more business context",
      "Growth guidance with Venture Quest",
    ],
    competitorLimits: [
      "Feature-heavy interface can feel overwhelming",
      "Still needs other apps for revenue and competitive insight",
      "Business strategy is not the core product",
    ],
    rows: [
      { feature: "Ease of focus", dreamscale: "One founder workspace", competitor: "Many views and layers" },
      { feature: "AI context", dreamscale: "Uses your business profile", competitor: "Task-level assistance" },
      { feature: "Revenue tools", dreamscale: "Included", competitor: "Separate stack needed" },
      { feature: "Pricing clarity", dreamscale: "Free + Pro", competitor: "Tiers add up quickly" },
    ],
  },
  {
    slug: "hubspot",
    competitor: "HubSpot",
    title: "DreamScale vs HubSpot | HubSpot alternative for small teams",
    headline: "DreamScale vs HubSpot",
    description:
      "HubSpot is powerful for marketing and CRM at scale. DreamScale gives small teams an all-in-one AI workspace without enterprise complexity or cost.",
    dreamscaleWins: [
      "Built for small teams and founders, not enterprise sales ops",
      "AI, ops, revenue, and team tools in one product",
      "Faster to start without a heavy CRM setup",
    ],
    competitorLimits: [
      "CRM-first; other business workflows need more tools",
      "Can get expensive as contacts and hubs grow",
      "Overkill if you want one simple founder workspace",
    ],
    rows: [
      { feature: "Target user", dreamscale: "Founders & small teams", competitor: "Marketing / sales teams" },
      { feature: "Setup time", dreamscale: "Profile once, start fast", competitor: "CRM and hub configuration" },
      { feature: "AI workspace", dreamscale: "Central to the product", competitor: "Add-on across hubs" },
      { feature: "All-in-one scope", dreamscale: "Plan, run, grow", competitor: "CRM + separate ops tools" },
    ],
  },
]

export const featureHighlights = [
  {
    title: "Bizora AI",
    description:
      "Your AI assistant wired to your business profile. Ask questions, work on files, and get answers that already know your goals, team, and numbers without starting from scratch every time.",
    href: "/workspace",
  },
  {
    title: "Revenue Intelligence",
    description:
      "Track cash, runway, and what is actually driving growth in one place. See revenue signals clearly, spot risks early, and make decisions from real numbers instead of scattered spreadsheets.",
    href: "/workspace",
  },
  {
    title: "Systems",
    description:
      "Map how your business really runs, from sales to delivery to support. Find bottlenecks, fix weak points, and improve how work flows without guessing where things break.",
    href: "/workspace",
  },
  {
    title: "Venture Quest",
    description:
      "Get daily guided steps based on where your business is today. Venture Quest turns big goals into small actions so you always know the next move to keep growing.",
    href: "/why",
  },
] as const
