"use client"

import { useMemo, useState } from "react"

/**
 * Overlap archetypes; rounded public tier shorthand (USD/teammate/month), illustrative only.
 * Labels mirror DreamScale pillars (Bizora workstation, Revenue Intelligence, rivalry, roadmap cockpit,
 * systems footprint, collaborator rituals) versus the usual scattered founder stack, not generic site builders or meeting bots.
 */
const STACK_TOOLS = [
  { id: "bizora-ai", label: "Context aware AI workstation (Bizora class seats)", pricePerUser: 26, defaultChecked: true },
  { id: "revenue-intel", label: "Revenue Q&A & intelligence overlays", pricePerUser: 34, defaultChecked: true },
  { id: "rival-intel", label: "Competitor scans & positioning intel", pricePerUser: 26, defaultChecked: true },
  {
    id: "roadmap-cockpit",
    label: "Roadmap & execution dashboards in one cockpit",
    pricePerUser: 21,
    defaultChecked: true,
  },
  { id: "crm-pipeline", label: "CRM & pipeline workspaces (seat overlap)", pricePerUser: 41, defaultChecked: false },
  {
    id: "sop-docs",
    label: "Systems & playbook documentation sprawl",
    pricePerUser: 14,
    defaultChecked: false,
  },
  {
    id: "finance-reporting",
    label: "Finance close, models & spreadsheet glue",
    pricePerUser: 19,
    defaultChecked: false,
  },
  { id: "goals-runway", label: "Goals, runway & scenario trackers", pricePerUser: 18, defaultChecked: false },
  {
    id: "automation-tier",
    label: "Cross tool automation (Zapier / Make class)",
    pricePerUser: 22,
    defaultChecked: false,
  },
  {
    id: "analytics-extra",
    label: "Standalone analytics seats on top",
    pricePerUser: 24,
    defaultChecked: false,
  },
  {
    id: "calendar-briefings",
    label: "Calendars plus weekly briefing hacks",
    pricePerUser: 12,
    defaultChecked: false,
  },
  {
    id: "collaborator-rituals",
    label: "Collaborator moods & morale micro apps",
    pricePerUser: 11,
    defaultChecked: false,
  },
] as const

export function StackSavingsSection() {
  const defaultSelected = useMemo(() => {
    const s = new Set<string>()
    for (const t of STACK_TOOLS) {
      if (t.defaultChecked) s.add(t.id)
    }
    return s
  }, [])

  const [selected, setSelected] = useState<Set<string>>(() => new Set(defaultSelected))

  /** Per-seat stack overlap (no unpublished DreamScale price; no carve-out yet). */
  const totals = useMemo(() => {
    const perSeatMonth = STACK_TOOLS.reduce(
      (sum, row) => (selected.has(row.id) ? sum + row.pricePerUser : sum),
      0,
    )
    return {
      monthly: perSeatMonth,
      annual: perSeatMonth * 12,
    }
  }, [selected])

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <section
      id="savings"
      className="relative scroll-mt-28 bg-white py-16 sm:py-20 md:py-24 lg:py-28"
      aria-labelledby="stack-savings-heading"
    >
      <div className="container mx-auto px-4" style={{ maxWidth: "960px", width: "100%" }}>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="stack-savings-heading"
            className="font-display font-semibold tracking-tight text-slate-900"
            style={{ fontSize: "clamp(1.75rem, 3.8vw, 2.875rem)", lineHeight: 1.12 }}
          >
            More momentum. Fewer invoices.
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed" style={{ fontSize: "clamp(1rem, 1.2vw, 1.0625rem)" }}>
            Bring your strategy AI, revenue signals, rivalry lens, collaborator rituals, and systems truth under one roof.
            Calculate savings below.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-slate-200/95 bg-white shadow-[0_1px_0_rgba(15,23,42,0.05),0_24px_64px_-40px_rgba(15,23,42,0.16)]">
          <fieldset className="m-0 border-0 p-0">
            <legend className="sr-only">Toggle overlapping SaaS categories to visualize stacked spend</legend>
            {/* One grid so rows share height across columns (fixes uneven row 4 + stray grey strips). */}
            <div className="grid grid-cols-1 gap-px bg-slate-200 sm:grid-cols-3">
              {STACK_TOOLS.map((tool) => {
                const checked = selected.has(tool.id)
                return (
                  <label
                    key={tool.id}
                    className={`flex min-h-[72px] h-full cursor-pointer items-start gap-3 bg-white px-4 py-3.5 transition-colors hover:bg-slate-50/90 sm:min-h-[76px] sm:px-4 sm:py-4 ${
                      checked ? "shadow-[inset_3px_0_0_rgb(0,149,255)]" : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggle(tool.id)}
                      className="mt-0.5 h-[18px] w-[18px] shrink-0 rounded-[3px] border-slate-300 accent-[rgb(0,149,255)] text-[rgb(0,149,255)]"
                    />
                    <span className="flex min-w-0 flex-1 flex-wrap items-start justify-between gap-x-2 gap-y-0.5 leading-snug">
                      <span className="font-medium text-[0.935rem] text-slate-900 sm:text-[0.9575rem]">{tool.label}</span>
                      <span className="shrink-0 text-[13px] text-slate-400">${tool.pricePerUser}/user</span>
                    </span>
                  </label>
                )
              })}
            </div>
          </fieldset>

          <div className="grid grid-cols-1 gap-px border-t border-slate-200 bg-slate-200 sm:grid-cols-2">
            <div className="flex flex-col justify-center gap-1 bg-[#f3f5f8] px-6 py-6 text-center sm:text-left">
              <span className="text-[13px] font-semibold text-slate-800">Monthly savings</span>
              <p
                className="font-display text-[2rem] font-semibold tracking-tight text-slate-900 sm:text-[2.125rem]"
                aria-live="polite"
              >
                $
                {totals.monthly.toLocaleString("en-US", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </p>
            </div>
            <div className="flex flex-col justify-center gap-1 bg-[#f3f5f8] px-6 py-6 text-center sm:text-left">
              <span className="text-[13px] font-semibold text-slate-800">Annual savings</span>
              <p
                className="font-display text-[2rem] font-semibold tracking-tight text-slate-900 sm:text-[2.125rem]"
                aria-live="polite"
              >
                $
                {totals.annual.toLocaleString("en-US", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
