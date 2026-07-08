"use client"

import { Check } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { APP_SIGNUP_URL } from "@/lib/site"

/* ----------------------------------------------------------------------------
 * EDIT YOUR PRICING HERE
 * Replace the names, prices, descriptions, and feature lists below.
 * Set `highlight: true` on the plan you want to emphasize.
 * -------------------------------------------------------------------------- */
type Plan = {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  highlight: boolean
}

const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    period: "/ month",
    description: "Everything you need to explore the full workspace.",
    features: [
      "Access to all modules",
      "Bizora AI chat: 5 messages, then 8-hour wait",
      "2 AI runs/month per tool (Systems, Revenue, Leadership & more)",
      "Venture Quest: Sales branch only",
      "1 workspace, 1 collaborator",
      "Community support",
    ],
    cta: "Get started free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$19.99",
    period: "/ month",
    description: "For founders and teams who want DreamScale, uncapped.",
    features: [
      "Everything in Free, plus",
      "Unlimited Bizora AI chat & file uploads",
      "Unlimited AI runs across every tool",
      "Venture Quest: all branches, goals & streak multipliers",
      "Google, Notion & Slack integrations",
      "20 workspaces, 50 collaborators",
      "Pro badge + priority support",
    ],
    cta: "Upgrade to Pro",
    highlight: true,
  },
]

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 surface-dots py-20 sm:py-24"
      aria-labelledby="pricing-heading"
    >
      <div className="container mx-auto px-4" style={{ maxWidth: "1100px" }}>
        <SectionHeader
          eyebrow="Pricing"
          title="Choose the plan that fits"
          description="Start free and upgrade whenever you're ready. Cancel anytime."
        />

        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={[
                "flex flex-col rounded-[1.35rem] p-7 transition-shadow",
                plan.highlight
                  ? "flex flex-col rounded-[1.35rem] bg-gradient-to-br from-[rgb(0,149,255)] via-blue-600 to-blue-700 p-7 text-white shadow-2xl shadow-blue-500/30 ring-1 ring-blue-500/40"
                  : "card-accent flex flex-col p-7 pl-7 text-slate-900",
              ].join(" ")}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-medium">{plan.name}</h3>
                {plan.highlight && (
                  <span className="rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                    Popular
                  </span>
                )}
              </div>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-semibold">{plan.price}</span>
                <span className={plan.highlight ? "text-white/70" : "text-slate-500"}>
                  {plan.period}
                </span>
              </div>

              <p className={`mt-3 text-sm ${plan.highlight ? "text-white/80" : "text-slate-600"}`}>
                {plan.description}
              </p>

              <a
                href={APP_SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  "mt-6 inline-flex min-h-[48px] w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-colors",
                  plan.highlight
                    ? "bg-white text-blue-700 hover:bg-blue-50"
                    : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700",
                ].join(" ")}
              >
                {plan.cta}
              </a>

              <ul className="mt-7 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.highlight ? "text-white" : "text-[rgb(0,149,255)]"
                      }`}
                    />
                    <span className={plan.highlight ? "text-white/90" : "text-slate-700"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
