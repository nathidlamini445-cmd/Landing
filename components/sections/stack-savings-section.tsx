const STACK_TOOLS = [
  { label: "AI workstation", price: 26 },
  { label: "Revenue intelligence", price: 34 },
  { label: "Competitor intel", price: 26 },
  { label: "Roadmap dashboards", price: 21 },
  { label: "CRM & pipeline", price: 41 },
  { label: "Docs & playbooks", price: 14 },
  { label: "Finance & models", price: 19 },
  { label: "Goals & runway", price: 18 },
  { label: "Automations", price: 22 },
  { label: "Analytics", price: 24 },
  { label: "Calendars & briefings", price: 12 },
  { label: "Team morale tools", price: 11 },
] as const

const TOTAL_SAVED = STACK_TOOLS.reduce((sum, t) => sum + t.price, 0)

export function StackSavingsSection() {
  return (
    <section
      id="savings"
      className="relative scroll-mt-28 bg-white py-16 sm:py-20 md:py-24 lg:py-28"
      aria-labelledby="stack-savings-heading"
    >
      <div className="container mx-auto px-4" style={{ maxWidth: "960px", width: "100%" }}>
        {/* headline */}
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="stack-savings-heading"
            className="font-display font-semibold tracking-tight text-slate-900"
            style={{ fontSize: "clamp(1.75rem, 3.8vw, 2.875rem)", lineHeight: 1.12 }}
          >
            Stop paying for 12 different tools.
          </h2>

          <p
            className="mx-auto mt-5 max-w-xl text-slate-600 leading-relaxed"
            style={{ fontSize: "clamp(1.05rem, 1.3vw, 1.125rem)" }}
          >
            Founders normally spend <span className="font-semibold text-slate-900">${TOTAL_SAVED}/mo per person</span> on
            separate apps. DreamScale replaces them all, so you keep that money.
          </p>
        </div>

        {/* the big number */}
        <div className="mx-auto mt-10 flex flex-col items-center gap-1">
          <span className="text-[13px] font-semibold uppercase tracking-wider text-[rgb(0,149,255)]">
            You save
          </span>
          <p
            className="font-display font-bold tracking-tight text-slate-900"
            style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", lineHeight: 1 }}
          >
            ${TOTAL_SAVED}
            <span className="text-[0.4em] font-medium text-slate-500">/person/mo</span>
          </p>
          <span className="mt-1 text-sm text-slate-500">
            That&rsquo;s ${TOTAL_SAVED * 12}/yr per person &middot; ${(TOTAL_SAVED * 12 * 5).toLocaleString("en-US")}/yr for a team of 5
          </span>
        </div>

        {/* tool grid — what you'd otherwise pay for */}
        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-slate-200/95 bg-white shadow-[0_1px_0_rgba(15,23,42,0.05),0_24px_64px_-40px_rgba(15,23,42,0.16)]">
          <div className="border-b border-slate-200 bg-slate-50 px-5 py-3">
            <p className="text-[13px] font-semibold text-slate-700">
              Here&rsquo;s what founders normally pay for each of these &mdash; separately:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-slate-200 sm:grid-cols-3">
            {STACK_TOOLS.map((tool) => (
              <div
                key={tool.label}
                className="flex items-center justify-between gap-3 bg-white px-4 py-3.5 sm:px-4 sm:py-4"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <svg
                    className="h-4 w-4 shrink-0 text-emerald-500"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8.5l3.5 3.5L13 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-medium text-[0.935rem] text-slate-900 sm:text-[0.9575rem]">
                    {tool.label}
                  </span>
                </div>
                <span className="shrink-0 text-[13px] text-slate-400 line-through">
                  ${tool.price}/mo
                </span>
              </div>
            ))}
          </div>

          {/* bottom bar */}
          <div className="flex items-center justify-between border-t border-slate-200 bg-[#f3f5f8] px-6 py-5">
            <div>
              <p className="text-[13px] font-semibold text-slate-600">Total if bought separately</p>
              <p className="font-display text-xl font-semibold tracking-tight text-slate-400 line-through">
                ${TOTAL_SAVED}/mo per person
              </p>
            </div>
            <div className="text-right">
              <p className="text-[13px] font-semibold text-emerald-600">With DreamScale</p>
              <p className="font-display text-xl font-semibold tracking-tight text-slate-900">
                Included
              </p>
            </div>
          </div>
        </div>

        {/* simple closer */}
        <p className="mx-auto mt-8 max-w-lg text-center text-sm text-slate-500 leading-relaxed">
          One app. One bill. No more stack tax.
        </p>
      </div>
    </section>
  )
}
