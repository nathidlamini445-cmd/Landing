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

const STACK_MONTHLY = STACK_TOOLS.reduce((sum, t) => sum + t.price, 0)
const DREAMSCALE_MONTHLY = 19.99
const DREAMSCALE_MONTHLY_ROUNDED = 20
const SAVINGS_MONTHLY = STACK_MONTHLY - DREAMSCALE_MONTHLY_ROUNDED

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
            Stop paying for 12 different tools.{" "}
            <span className="block mt-2 sm:mt-3">
              DreamScale does it all for{" "}
              <span className="text-[rgb(0,149,255)]">${DREAMSCALE_MONTHLY.toFixed(2)}</span>
              <span className="text-slate-600 font-medium" style={{ fontSize: "0.72em" }}>
                /mo
              </span>
            </span>
          </h2>

          <p
            className="mx-auto mt-5 max-w-xl text-slate-600 leading-relaxed"
            style={{ fontSize: "clamp(1.05rem, 1.3vw, 1.125rem)" }}
          >
            Founders normally spend <span className="font-semibold text-slate-900">${STACK_MONTHLY}/mo per person</span> on
            separate apps. DreamScale replaces them all, so you keep that money.
          </p>
        </div>

        {/* the big number */}
        <div className="mx-auto mt-10 flex flex-col items-center gap-2">
          <p className="sr-only">
            DreamScale costs about ${DREAMSCALE_MONTHLY.toFixed(2)} per person per month, compared with ${STACK_MONTHLY} per month if tools are bought separately. You save about ${SAVINGS_MONTHLY} per month.
          </p>
          <span className="text-[13px] font-semibold uppercase tracking-wider text-[rgb(0,149,255)]">
            You save
          </span>
          <p
            className="font-display font-semibold tracking-tight text-slate-400 line-through decoration-slate-400 decoration-2"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1 }}
            aria-hidden
          >
            ${STACK_MONTHLY}
            <span className="text-[0.45em] font-medium">/person/mo</span>
          </p>
          <p
            className="font-display font-bold tracking-tight text-slate-900"
            style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", lineHeight: 1 }}
          >
            ${DREAMSCALE_MONTHLY.toFixed(2)}
            <span className="text-[0.4em] font-medium text-slate-500">/person/mo</span>
          </p>
          <p className="mt-1 max-w-md text-center text-sm text-slate-600 leading-relaxed">
            You spend about{" "}
            <span className="font-semibold text-slate-900">${DREAMSCALE_MONTHLY.toFixed(2)}/mo</span> on DreamScale
            <span className="text-slate-500"> (~${DREAMSCALE_MONTHLY_ROUNDED})</span>
          </p>
        </div>

        {/* simple closer */}
        <p className="mx-auto mt-8 max-w-lg text-center text-sm text-slate-500 leading-relaxed">
          One app. One bill. No more stack tax.
        </p>
      </div>
    </section>
  )
}
