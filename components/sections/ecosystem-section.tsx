"use client"

import { useState, type ReactNode } from "react"
import { Check, HelpCircle, Layers, User } from "lucide-react"
import {
  LandingDemoGateProvider,
  MiniOperationalDemo,
  MiniRevenueDemo,
} from "@/components/sections/ecosystem-mini-demos"

type RevenueInsightAlert = {
  message: string
}

type SystemsChecklistItem = {
  done: boolean
  /** e.g. "Documentation & playbooks (Notion)" */
  label: string
}

type FeatureDocPreview = {
  /** Short id for screenshots / emails, e.g. pillar-revenue */
  referenceId: string
  surfaceTitle: string
  variant: "revenue-insights" | "operational-checklist"
  /** Required when `variant === "revenue-insights"` */
  revenueAlerts?: RevenueInsightAlert[]
  /** Required when `variant === "operational-checklist"` */
  systemsChecklist?: SystemsChecklistItem[]
  /** Optional smaller follow-up card (operational pillar): e.g. revenue ladder checklist */
  ladderChecklist?: {
    title: string
    items: SystemsChecklistItem[]
  }
  introBefore: string
  introBold: string
  introAfter: string
  docHeading: string
  subHeading: string
  subHeadingNote: string // shown in muted parens style
}

function FeaturePillarTryToggle({
  open,
  onOpen,
  onClose,
}: {
  open: boolean
  onOpen: () => void
  onClose: () => void
}) {
  if (open) {
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
  return (
    <button
      type="button"
      onClick={onOpen}
      className="inline-flex shrink-0 items-center justify-center self-start rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-3.5 py-2 text-xs font-semibold text-white shadow-md shadow-blue-500/18 transition-colors hover:from-blue-600 hover:to-blue-700 hover:shadow-lg hover:shadow-blue-500/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:px-4 sm:text-sm touch-manipulation"
    >
      Try it now
    </button>
  )
}

const previews: FeatureDocPreview[] = [
  {
    referenceId: "pillar-revenue-intelligence",
    surfaceTitle: "Revenue Intelligence",
    variant: "revenue-insights",
    revenueAlerts: [
      { message: "How do I see which discounts are quietly eating margin this quarter?" },
      { message: "When does invoiced cash land versus our close dates across regions?" },
      { message: "Where’s the rolling ARR bridge for enterprise logo churn this month?" },
      { message: "Which segments shrank gross margin fastest versus the prior quarter, and why?" },
      { message: "What’s tying up working capital longest after we close enterprise deals?" },
      { message: "Where did realized ACV drift from forecast for top 10 logos this cycle?" },
    ],
    introBefore: "",
    introBold: "Signals from revenue, not a static dashboard",
    introAfter:
      ": cohorts, NRR, runway, and cash timing surface as plain questions your team would actually ask. Then you open the right view without digging random tabs.",
    docHeading: "Revenue Q&A",
    subHeading: "From metrics to next questions",
    subHeadingNote: "Plain language nudges on your numbers, not slides for show",
  },
  {
    referenceId: "pillar-operational-systems",
    surfaceTitle: "Operational systems",
    variant: "operational-checklist",
    systemsChecklist: [
      { done: true, label: "Documentation & playbooks (Notion)" },
      { done: true, label: "Customer CRM & pipeline (HubSpot)" },
      { done: false, label: "Finance & month end close (QuickBooks)" },
      { done: false, label: "Cross tool automation (Zapier)" },
    ],
    introBefore: "Here live ",
    introBold: "the systems your company actually runs on",
    introAfter:
      ", not slideware. Real tools tied to how work flows so SOPs, owners, and health checks stay visible.",
    docHeading: "Systems stack",
    subHeading: "Coverage & gaps",
    subHeadingNote: "common SMB / startup footprint",
    ladderChecklist: {
      title: "Steps to reach $10K/month",
      items: [
        { done: true, label: "One offer, one ICP, one price that fits" },
        { done: true, label: "Repeatable sales motion with a weekly score (leads, then calls, then closes)" },
        { done: true, label: "Delivery that protects margin (clear scope, onboarding, tiers for support)" },
        { done: false, label: "Lightweight invoicing & tax rhythm you won’t dread each month" },
        { done: false, label: "One growth loop shipped (referrals, content cadence, or partner channel)" },
        { done: false, label: "Churn checkpoints: cancellation reasons logged and reviewed" },
        { done: false, label: "Hiring triggers written down, not “when it feels busy”" },
        { done: false, label: "$10K run-rate: backlog + runway buffer for the next sprint of growth" },
      ],
    },
  },
]

function OperationalSystemsChecklist({
  items,
  compact,
}: {
  items: SystemsChecklistItem[]
  /** Tighter spacing for secondary ladder checklist rows */
  compact?: boolean
}) {
  const box = compact ? "h-4 w-4 rounded-[2.5px] border-[1.5px]" : "h-[18px] w-[18px] rounded-[3px] border-2"
  const icon = compact ? "h-2.5 w-2.5" : "h-3 w-3"
  const gap = compact ? "gap-2.5" : "gap-3"
  const space = compact ? "space-y-2.5" : "space-y-3.5"
  const text = compact
    ? "text-[12.5px] leading-snug sm:text-[13px]"
    : "text-[14px] leading-snug sm:text-[15px]"

  return (
    <div
      className={`rounded-xl border border-slate-200/60 bg-[#fafafa] ${compact ? "px-3 py-2.5 sm:px-3.5 sm:py-3" : "px-3.5 py-3.5 sm:px-4 sm:py-4"}`}
    >
      <p className="sr-only">Illustrative systems checklist; preview only.</p>
      <ul className={`m-0 list-none p-0 ${space}`} role="list">
        {items.map((row, i) => (
          <li key={`${row.label}-${i}`} className={`flex items-start ${gap}`}>
            <span
              className={`mt-0.5 flex shrink-0 items-center justify-center ${box} ${
                row.done ? "border-[#2563eb] bg-[#2563eb]" : "border-slate-900 bg-white"
              }`}
              aria-hidden
            >
              {row.done ? <Check className={`${icon} text-white`} strokeWidth={3} aria-hidden /> : null}
            </span>
            <span
              className={`min-w-0 flex-1 ${text} ${
                row.done
                  ? "text-slate-400 line-through decoration-slate-400 [text-decoration-thickness:1px]"
                  : "font-normal text-slate-900"
              }`}
            >
              {row.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const revenueBackdropLines = [
  "Why is expansion revenue pacing behind plan in mid market?",
  "Which SKUs look underpriced versus last quarter’s win rate?",
  "What changed in net retention versus the trailing 90 days?",
  "Where are invoice to cash days widening versus our target?",
  "Which enterprise accounts slipped out of this quarter’s commit?",
  "How much of churn is logo versus dollar weighted right now?",
  "Where should we pull forward pipeline coverage before month end?",
]

/** Blurred “Revenue Q&A” list behind stacked notification-style cards */
function RevenueIntelligenceBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-3 inset-y-10 overflow-hidden rounded-lg sm:inset-x-5 sm:inset-y-12">
      <div className="absolute inset-[-18%_-10%_-12%_-10%] scale-[1.06] blur-[clamp(11px,2.5vw,17px)]">
        <div className="rounded-lg border border-slate-200/70 bg-white px-5 py-6 shadow-inner">
          <p className="text-[1.35rem] font-bold tracking-tight text-slate-400 sm:text-2xl">Revenue Q&amp;A</p>

          <div className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-1 border-b border-slate-100 pb-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <HelpCircle className="h-3.5 w-3.5" aria-hidden />
              Question
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Layers className="h-3.5 w-3.5" aria-hidden />
              Segment
            </span>
            <span className="inline-flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" aria-hidden />
              Owner
            </span>
          </div>

          <ul className="mt-4 max-h-[220px] space-y-2.5 overflow-hidden text-[11px] leading-snug text-slate-500 sm:text-[11.5px]">
            {revenueBackdropLines.map((line) => (
              <li key={line} className="border-b border-slate-50/90 pb-2 last:border-0 last:pb-0">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_18%,transparent_40%,rgba(255,255,255,0.9)_92%)]" />
    </div>
  )
}

/** Overlapping prompt cards + blurred backdrop (revenue pillar only) */
function StackedPromptShowcase({
  prompts,
  backdrop,
  figCaptionId,
  figCaptionSr,
}: {
  prompts: RevenueInsightAlert[]
  backdrop: ReactNode
  figCaptionId: string
  figCaptionSr: string
}) {
  const nudges = ["", "sm:translate-x-4 translate-x-2", "sm:-translate-x-5 -translate-x-2.5 sm:-translate-x-6"]
  const tall = prompts.length > 4
  const minFigure = tall ? "min-h-[340px] sm:min-h-[400px]" : "min-h-[280px] sm:min-h-[300px]"
  /** Tighter overlap when many cards so the pile stays bounded */
  const overlap = prompts.length > 5 ? "-mt-5 sm:-mt-[1.35rem]" : "-mt-6 sm:-mt-7"

  return (
    <figure className={`relative mx-auto mt-2 w-full overflow-visible ${minFigure}`} aria-labelledby={figCaptionId}>
      <figcaption id={figCaptionId} className="sr-only">
        {figCaptionSr}
      </figcaption>

      {backdrop}

      <div className="relative z-[2] px-6 pb-12 pt-10 sm:px-8 sm:pb-14 sm:pt-12">
        <div className="mx-auto w-[min(96%,24rem)] sm:w-[min(92%,26rem)]">
          {prompts.map((pulse, i) => {
            const tug = nudges[i % nudges.length] ?? ""

            return (
              <article
                key={`${pulse.message}-${i}`}
                className={`relative rounded-lg border border-slate-200/70 bg-white px-3.5 py-2.5 shadow-[0_1px_0_rgba(15,23,42,0.04),0_8px_24px_-18px_rgba(15,23,42,0.14)] sm:rounded-[11px] sm:px-4 sm:py-3 ${tug} ${i > 0 ? overlap : ""}`}
                style={{ zIndex: 280 - i * 36 }}
              >
                <p className="border-l-2 border-sky-500/55 pl-3 text-[12.75px] font-medium leading-[1.45] tracking-[-0.01em] text-slate-700 sm:text-[13px]">
                  {pulse.message}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </figure>
  )
}

function RevenueInsightsNotifications({
  alerts,
}: {
  alerts: RevenueInsightAlert[]
}) {
  return (
    <StackedPromptShowcase
      prompts={alerts}
      backdrop={<RevenueIntelligenceBackdrop />}
      figCaptionId="eco-revenue-alerts-caption"
      figCaptionSr="Revenue intelligence prompts over a blurred revenue Q and A list"
    />
  )
}

function FeatureDocCard({ doc }: { doc: FeatureDocPreview }) {
  const [tryDemoOpen, setTryDemoOpen] = useState(false)

  const isRevenue =
    doc.variant === "revenue-insights" && !!doc.revenueAlerts && doc.revenueAlerts.length > 0
  const isOperational =
    doc.variant === "operational-checklist" && !!doc.systemsChecklist && doc.systemsChecklist.length > 0

  if (isRevenue) {
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
            <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-slate-500">
              Email ref · <span className="normal-case tracking-normal">{doc.referenceId}</span>
            </p>
          </div>
          <FeaturePillarTryToggle
            open={tryDemoOpen}
            onOpen={() => setTryDemoOpen(true)}
            onClose={() => setTryDemoOpen(false)}
          />
        </header>

        <div className="rounded-2xl border border-slate-200/70 bg-white shadow-[0_2px_6px_rgba(15,23,42,0.04),0_18px_50px_-28px_rgba(15,23,42,0.16)]">
          {tryDemoOpen ? (
            <div className="px-4 pb-6 pt-5 sm:px-5 sm:pb-8">
              <MiniRevenueDemo embedded />
            </div>
          ) : (
            <>
              <div className="space-y-3 px-4 pb-2 pt-5 sm:px-5 sm:pb-3 sm:pt-[1.375rem]">
                <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px] sm:leading-relaxed">
                  {doc.introBefore}
                  <strong className="font-semibold text-slate-900">{doc.introBold}</strong>
                  {doc.introAfter}
                </p>

                <div>
                  <h4 className="font-semibold tracking-tight text-slate-900 text-[1.0625rem] leading-snug sm:text-lg">
                    {doc.docHeading}
                  </h4>
                  <p className="mt-1 text-[13px] font-medium leading-snug text-slate-600 sm:text-sm">
                    {doc.subHeading}
                    <span className="font-normal text-slate-400">
                      {" "}
                      (<span>{doc.subHeadingNote}</span>)
                    </span>
                  </p>
                </div>
              </div>

              <div className="-mt-px border-t border-slate-100/90 bg-slate-50/70 px-3 pb-4 pt-8 sm:px-4 sm:pb-5 sm:pt-9">
                <RevenueInsightsNotifications alerts={doc.revenueAlerts!} />
              </div>
            </>
          )}
        </div>
      </div>
    )
  }

  if (isOperational) {
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
            <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-slate-500">
              Email ref · <span className="normal-case tracking-normal">{doc.referenceId}</span>
            </p>
          </div>
          <FeaturePillarTryToggle
            open={tryDemoOpen}
            onOpen={() => setTryDemoOpen(true)}
            onClose={() => setTryDemoOpen(false)}
          />
        </header>

        <div className="rounded-2xl border border-slate-200/70 bg-white shadow-[0_2px_6px_rgba(15,23,42,0.04),0_18px_50px_-28px_rgba(15,23,42,0.16)]">
          {tryDemoOpen ? (
            <div className="px-4 pb-5 pt-5 sm:px-5 sm:pb-6 sm:pt-[1.375rem]">
              <MiniOperationalDemo embedded />
            </div>
          ) : (
            <>
              <div className="space-y-4 px-4 pb-5 pt-5 sm:px-5 sm:pb-5 sm:pt-[1.375rem]">
                <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px] sm:leading-relaxed">
                  {doc.introBefore}
                  <strong className="font-semibold text-slate-900">{doc.introBold}</strong>
                  {doc.introAfter}
                </p>

                <div>
                  <h4 className="font-semibold tracking-tight text-slate-900 text-[1.0625rem] leading-snug sm:text-lg">
                    {doc.docHeading}
                  </h4>
                  <p className="mt-1 text-[13px] font-medium leading-snug text-slate-600 sm:text-sm">
                    {doc.subHeading}
                    <span className="font-normal text-slate-400">
                      {" "}
                      (<span>{doc.subHeadingNote}</span>)
                    </span>
                  </p>
                </div>

                <OperationalSystemsChecklist items={doc.systemsChecklist!} />
              </div>

              {doc.ladderChecklist ? (
                <div className="-mt-px border-t border-slate-100/90 bg-slate-50/70 px-4 pb-5 pt-6 sm:px-5 sm:pb-6 sm:pt-8">
                  <div className="mb-4 max-w-prose space-y-1">
                    <h5 className="text-[1.0625rem] font-semibold leading-snug tracking-tight text-slate-900 sm:text-lg">
                      {doc.ladderChecklist.title}
                    </h5>
                    <p className="text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                      A practical ladder: systems and revenue habits in one place, so you see what&apos;s done and what
                      unlocks the next milestone.
                    </p>
                  </div>
                  <OperationalSystemsChecklist items={doc.ladderChecklist.items} />
                </div>
              ) : null}
            </>
          )}
        </div>
      </div>
    )
  }

  return null
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
          <div
            className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 sm:gap-14 lg:gap-16"
          >
            {previews.map((doc) => (
              <FeatureDocCard key={doc.referenceId} doc={doc} />
          ))}
        </div>
        </LandingDemoGateProvider>
      </div>
    </section>
  )
}
