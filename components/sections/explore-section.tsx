import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

/* ----------------------------------------------------------------------------
 * EDIT THE EXPLORE CARDS HERE
 * Each card links to its own page where people can read or test that section.
 * -------------------------------------------------------------------------- */
type ExploreCard = {
  eyebrow: string
  title: string
  description: string
  href: string
  cta: string
  featured?: boolean
}

const cards: ExploreCard[] = [
  {
    eyebrow: "Hands-on",
    title: "Inside the workspace",
    description: "Try the revenue and operations tools yourself — no signup needed.",
    href: "/workspace",
    cta: "Test the features",
    featured: true,
  },
  {
    eyebrow: "Product",
    title: "See the product",
    description: "Watch the competitor intelligence feature in action.",
    href: "/demo",
    cta: "Watch the demo",
  },
  {
    eyebrow: "Why DreamScale",
    title: "The complexity we remove",
    description: "The messy, scattered way of running a business — and what we fix.",
    href: "/why",
    cta: "See what we solve",
  },
  {
    eyebrow: "Social proof",
    title: "Early feedback",
    description: "What first users are saying about DreamScale.",
    href: "/testimonials",
    cta: "Read their words",
  },
  {
    eyebrow: "Pricing",
    title: "Stop paying for 12 tools",
    description: "See how much you save by consolidating your whole stack.",
    href: "/savings",
    cta: "See the savings",
  },
]

export function ExploreSection() {
  return (
    <section
      id="explore"
      className="scroll-mt-24 border-t border-slate-200/70 bg-slate-50/60 py-20 sm:py-24"
      aria-labelledby="explore-heading"
    >
      <div className="container mx-auto px-4" style={{ maxWidth: "1100px" }}>
        <div className="mb-12 text-center">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[rgb(0,149,255)]">
            Explore
          </p>
          <h2
            id="explore-heading"
            className="font-display font-semibold tracking-tight text-slate-900"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", lineHeight: 1.1 }}
          >
            Dive into what matters to you
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Pick a topic to read more or try it out — no endless scrolling.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className={[
                "group flex flex-col justify-between rounded-2xl p-6 transition-all duration-200",
                "w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]",
                card.featured
                  ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-xl shadow-blue-500/25 hover:-translate-y-1"
                  : "border border-slate-200 bg-white text-slate-900 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg",
              ].join(" ")}
            >
              <div>
                <p
                  className={`mb-3 font-mono text-[10px] uppercase tracking-[0.18em] ${
                    card.featured ? "text-blue-100" : "text-[rgb(0,149,255)]"
                  }`}
                >
                  {card.eyebrow}
                </p>
                <h3 className="font-display text-xl font-semibold tracking-tight">{card.title}</h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    card.featured ? "text-white/80" : "text-slate-600"
                  }`}
                >
                  {card.description}
                </p>
              </div>
              <span
                className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${
                  card.featured ? "text-white" : "text-blue-700"
                }`}
              >
                {card.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
