"use client"

import { useState } from "react"
import {
  LandingDemoGateProvider,
  MiniOperationalDemo,
  MiniRevenueDemo,
} from "@/components/sections/ecosystem-mini-demos"

type FeatureDocPreview = {
  referenceId: string
  surfaceTitle: string
  /** Three short lines under the pillar title */
  featureSummary: [string, string, string]
  teaserTitle: string
  teaserDescription: string
  demo: "revenue" | "operational"
}

function FeaturePillarOverviewButton({ onClose }: { onClose: () => void }) {
  return (
    <button
      type="button"
      onClick={onClose}
      className="inline-flex shrink-0 items-center justify-center self-start rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-800 shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 sm:px-4 sm:text-sm touch-manipulation"
    >
      Overview
    </button>
  )
}

function FeatureTeaserCard({
  title,
  description,
  onTry,
}: {
  title: string
  description: string
  onTry: () => void
}) {
  return (
    <div className="px-4 py-5 sm:px-5 sm:py-6">
      <h4 className="font-display font-semibold tracking-tight text-slate-900 text-[1.0625rem] leading-snug sm:text-lg">
        {title}
      </h4>
      <p className="mt-2 text-[13px] leading-relaxed text-slate-600 sm:text-sm">{description}</p>
      <button
        type="button"
        onClick={onTry}
        className="mt-5 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-colors hover:from-blue-600 hover:to-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 touch-manipulation"
      >
        Try for free
      </button>
    </div>
  )
}

const previews: FeatureDocPreview[] = [
  {
    referenceId: "pillar-revenue-intelligence",
    surfaceTitle: "Revenue Intelligence",
    featureSummary: [
      "Ask revenue questions in plain language, not spreadsheet tabs.",
      "See runway, retention, and cash timing in one place.",
      "Turn trends into the next prompts your team should actually answer.",
    ],
    teaserTitle: "Revenue Q&A teaser",
    teaserDescription:
      "Translate how you're trending into the three prompts you'd pitch your finance brain.",
    demo: "revenue",
  },
  {
    referenceId: "pillar-operational-systems",
    surfaceTitle: "Operational systems",
    featureSummary: [
      "Map the tools and workflows your business actually runs on.",
      "Spot gaps in docs, handoffs, and month end before they stall growth.",
      "Get a prioritized ops focus in three taps, founder ready.",
    ],
    teaserTitle: "Systems sanity check",
    teaserDescription:
      "Three taps. DreamScale previews the next operational moves, lightweight and founder-real.",
    demo: "operational",
  },
]

function FeatureDocCard({ doc }: { doc: FeatureDocPreview }) {
  const [tryDemoOpen, setTryDemoOpen] = useState(false)

  return (
    <div
      role="article"
      aria-labelledby={`eco-card-heading-${doc.referenceId}`}
      className="rounded-[22px] p-4 sm:p-5 opacity-100 translate-y-0"
      style={{
        background: "linear-gradient(155deg, #e5f6ff 0%, #d9eff9 42%, #f4f9fc 100%)",
      }}
    >
      <header className="mb-4 flex flex-wrap items-start justify-between gap-3 gap-y-3">
        <div className="min-w-0 flex-1 space-y-1">
          <h3
            id={`eco-card-heading-${doc.referenceId}`}
            className="font-display font-semibold tracking-tight text-slate-900"
            style={{ fontSize: "clamp(1.05rem, 2vw, 1.25rem)" }}
          >
            {doc.surfaceTitle}
          </h3>
          <div className="mt-2 max-w-prose space-y-1 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
            {doc.featureSummary.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
        {tryDemoOpen ? <FeaturePillarOverviewButton onClose={() => setTryDemoOpen(false)} /> : null}
      </header>

      <div className="rounded-2xl border border-slate-200/70 bg-white shadow-[0_2px_6px_rgba(15,23,42,0.04),0_18px_50px_-28px_rgba(15,23,42,0.16)]">
        {tryDemoOpen ? (
          <div className="px-4 pb-6 pt-5 sm:px-5 sm:pb-8">
            {doc.demo === "revenue" ? <MiniRevenueDemo embedded /> : <MiniOperationalDemo embedded />}
          </div>
        ) : (
          <FeatureTeaserCard
            title={doc.teaserTitle}
            description={doc.teaserDescription}
            onTry={() => setTryDemoOpen(true)}
          />
        )}
      </div>
    </div>
  )
}

export function EcosystemSection() {
  return (
    <section
      id="ecosystem"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-slate-50/60"
    >
      <div className="container mx-auto" style={{ maxWidth: "1440px", width: "100%" }}>
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-14 md:mb-16 opacity-100 translate-y-0">
          <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-slate-500 mb-3">
            Inside the workspace
          </p>
          <h2
            className="font-display font-semibold tracking-tight text-slate-900"
            style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)", lineHeight: 1.15 }}
          >
            Everything your business needs, one place
          </h2>
          <p
            className="mt-5 text-slate-600 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(1rem, 1.2vw, 1.125rem)" }}
          >
            Set up your profile once and every tool already knows your team, your numbers, and your goals. No switching between apps. It all just works together.
          </p>
        </div>

        <LandingDemoGateProvider>
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 sm:gap-14 lg:gap-16">
            {previews.map((doc) => (
              <FeatureDocCard key={doc.referenceId} doc={doc} />
            ))}
          </div>
        </LandingDemoGateProvider>
      </div>
    </section>
  )
}
