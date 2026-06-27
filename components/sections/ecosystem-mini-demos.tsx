"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { Loader2 } from "lucide-react"
import { APP_SIGNUP_URL } from "@/lib/site"
import { cn } from "@/lib/utils"
import { LANDING_DEMO_LOCKED_MESSAGE } from "@/lib/demo-one-use-constants"

const LANDING_DEMO_STATUS_EVENT = "dreamscale-landing-demo-locked"

type LandingDemoGateValue = {
  exhausted: boolean
  refresh: () => Promise<void>
}

const LandingDemoGateContext = createContext<LandingDemoGateValue | null>(null)

export function LandingDemoGateProvider({ children }: { children: React.ReactNode }) {
  const [exhausted, setExhausted] = useState(false)

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/demo/status", { cache: "no-store" })
      const j = (await res.json()) as { exhausted?: unknown }
      setExhausted(j.exhausted === true)
    } catch {
      /* keep prior exhausted state */
    }
  }, [])

  useEffect(() => {
    void refresh()
  }, [refresh])

  useEffect(() => {
    const bump = () => void refresh()
    window.addEventListener(LANDING_DEMO_STATUS_EVENT, bump)
    return () => window.removeEventListener(LANDING_DEMO_STATUS_EVENT, bump)
  }, [refresh])

  const value = useMemo<LandingDemoGateValue>(() => ({ exhausted, refresh }), [exhausted, refresh])

  return <LandingDemoGateContext.Provider value={value}>{children}</LandingDemoGateContext.Provider>
}

export function useLandingDemoGate(): LandingDemoGateValue {
  const ctx = useContext(LandingDemoGateContext)
  return (
    ctx ?? {
      exhausted: false,
      refresh: async () => {},
    }
  )
}

function DemoSignupCtas({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center justify-start gap-x-3 gap-y-2", className)}>
      <a
        href={APP_SIGNUP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-blue-500/20 transition-colors hover:from-blue-600 hover:to-blue-700 sm:text-sm"
      >
        Start free
      </a>
      <a
        href={APP_SIGNUP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs font-semibold text-blue-600 underline-offset-2 hover:text-blue-700 hover:underline sm:text-sm"
      >
        Open full DreamScale →
      </a>
    </div>
  )
}

function ChipField({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: readonly string[]
  value: string
  onChange: (next: string) => void
}) {
  return (
    <fieldset className="m-0 space-y-2 border-0 p-0">
      <legend className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">{label}</legend>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={cn(
              "rounded-full border px-2.5 py-1.5 text-left text-[11px] font-medium transition-colors sm:px-3 sm:text-xs",
              value === opt
                ? "border-sky-600 bg-sky-50 text-slate-900 shadow-[inset_0_0_0_1px_rgba(2,132,199,0.15)]"
                : "border-slate-200/90 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50",
            )}
          >
            {opt}
          </button>
        ))}
      </div>
    </fieldset>
  )
}

function LockedLandingDemoSplash() {
  return (
    <div
      role="status"
      className="rounded-xl border border-amber-200/90 bg-amber-50/60 px-4 py-4 text-[13px] leading-snug text-slate-800 sm:text-sm"
    >
      <p className="font-medium text-slate-900">Free preview used</p>
      <p className="mt-2 text-slate-700">{LANDING_DEMO_LOCKED_MESSAGE}</p>
      <DemoSignupCtas className="mt-4" />
    </div>
  )
}

async function postDemo<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
  const json = (await res.json().catch(() => ({}))) as { error?: string } & Record<string, unknown>
  if (!res.ok) {
    const msg = typeof json.error === "string" ? json.error : "Something went wrong"
    throw new Error(msg)
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(LANDING_DEMO_STATUS_EVENT))
  }
  return json as T
}

const SYS_OPS = ["Spreadsheets & email", "Lightweight SaaS stack", "Serious stack, feels messy", "Still figuring it out"] as const
const SYS_BOT = [
  "Inconsistent delivery / quality dips",
  "Leads slipping through cracks",
  "Money ops (invoices, runway, margins)",
  "Hiring & handoffs unclear",
  "Documentation & SOPs missing",
] as const
const SYS_GOAL = [
  "Document the top 5 processes",
  "Stop dropped follow-ups",
  "Tighten monthly close rhythm",
  "Clear owners & weekly reviews",
  "Prep to scale past 10 people",
] as const

type SysPriority = { title: string; whyNow: string; firstStep: string; tryHint: string }

export function MiniOperationalDemo({ embedded }: { embedded?: boolean } = {}) {
  const demoGate = useLandingDemoGate()
  const [opsMode, setOpsMode] = useState("")
  const [bottleneck, setBottleneck] = useState("")
  const [goal, setGoal] = useState("")
  const [contextNote, setContextNote] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [rows, setRows] = useState<SysPriority[] | null>(null)

  const lockedBeforePreview = demoGate.exhausted && !rows?.length
  const canSubmit = Boolean(opsMode && bottleneck && goal && !loading && !demoGate.exhausted)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!canSubmit) return
    setLoading(true)
    setError(null)
    setRows(null)
    try {
      const data = await postDemo<{ priorities: SysPriority[] }>("/api/demo/systems", {
        opsMode,
        bottleneck,
        goal,
        contextNote: contextNote.trim() || undefined,
      })
      setRows(data.priorities)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Preview failed")
    } finally {
      setLoading(false)
    }
  }

  const inner = (
    <div
      className={cn(
        "rounded-xl p-4 sm:p-5",
        embedded ? "border-0 bg-transparent p-0" : "border border-sky-100/80 bg-gradient-to-br from-sky-50/50 to-white",
      )}
    >
      {!embedded ? (
        <>
          <h5 className="font-display font-semibold text-slate-900 text-base sm:text-lg">Systems sanity check</h5>
          <p className="mt-1 text-[13px] leading-snug text-slate-600 sm:text-sm">
            Three taps. DreamScale previews the next operational moves, lightweight and founder-real.
          </p>
        </>
      ) : null}
      {lockedBeforePreview ? (
        <div className={embedded ? "mt-0" : "mt-4"}>
          <LockedLandingDemoSplash />
        </div>
      ) : null}
      {!demoGate.exhausted ? (
      <form className={cn("space-y-4", embedded ? "mt-0" : "mt-4")} onSubmit={onSubmit}>
        <ChipField label="1. How you run ops today" options={SYS_OPS} value={opsMode} onChange={setOpsMode} />
        <ChipField label="2. Biggest bottleneck" options={SYS_BOT} value={bottleneck} onChange={setBottleneck} />
        <ChipField label="3. 90‑day ops goal" options={SYS_GOAL} value={goal} onChange={setGoal} />
        <div className="hidden md:block">
          <label className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500" htmlFor="sys-context">
            Optional · Context
          </label>
          <input
            id="sys-context"
            value={contextNote}
            onChange={(ev) => setContextNote(ev.target.value)}
            placeholder="Team size, tools, or chaotic area"
            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none placeholder:text-slate-400 focus:border-sky-400"
            maxLength={200}
          />
        </div>
        <button
          type="submit"
          disabled={!canSubmit}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 disabled:pointer-events-none disabled:opacity-40"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : null}
          {loading ? "Generating…" : "Preview systems focus"}
        </button>
        {error ? (
          <p className="text-sm font-medium text-red-600" role="alert">
            {error}
          </p>
        ) : null}
      </form>
      ) : null}
      {rows ? (
        <div className="mt-6 space-y-3">
          {rows.map((r, i) => (
            <article key={`${r.title}-${i}`} className="rounded-xl border border-slate-200/80 bg-white px-4 py-3 shadow-sm">
              <p className="font-semibold text-slate-900">{r.title}</p>
              <p className="mt-1.5 text-[13px] text-slate-600 sm:text-sm">{r.whyNow}</p>
              <p className="mt-2 text-[13px] font-medium text-slate-800 sm:text-sm">Today: {r.firstStep}</p>
              <p className="mt-2 rounded-md bg-blue-50/80 px-2.5 py-1.5 text-[12.5px] text-slate-700">{r.tryHint}</p>
            </article>
          ))}
          <DemoSignupCtas />
        </div>
      ) : null}
    </div>
  )

  if (embedded) return inner

  return <div className="border-t border-slate-100 pt-5 mt-6">{inner}</div>
}

const REV_BAND = ["Pre-revenue / testing price", "Under ~$10k MRR", "$10k–$50k MRR", "$50k+ MRR"] as const
const REV_WORRY = [
  "Runway / cash buffer",
  "Pipeline & conversion",
  "Retention & expansion",
  "Pricing & margins",
  "Forecasting discipline",
] as const
const REV_HORIZON = ["Next 30 days", "This quarter", "6–12 months"] as const

type RevSignal = { headline: string; implication: string; nextQuestion: string }

export function MiniRevenueDemo({ embedded }: { embedded?: boolean } = {}) {
  const demoGate = useLandingDemoGate()
  const [band, setBand] = useState("")
  const [worry, setWorry] = useState("")
  const [horizon, setHorizon] = useState("")
  const [note, setNote] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [signals, setSignals] = useState<RevSignal[] | null>(null)
  const lockedBeforePreview = demoGate.exhausted && !signals?.length
  const canSubmit = Boolean(band && worry && horizon && !loading && !demoGate.exhausted)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!canSubmit) return
    setLoading(true)
    setError(null)
    setSignals(null)
    try {
      const data = await postDemo<{ signals: RevSignal[] }>("/api/demo/revenue", {
        band,
        worry,
        horizon,
        businessModelNote: note.trim() || undefined,
      })
      setSignals(data.signals)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Preview failed")
    } finally {
      setLoading(false)
    }
  }

  const inner = (
    <div
      className={cn(
        "rounded-xl px-4 py-4 sm:px-5 sm:py-5",
        embedded ? "border-0 bg-transparent p-0" : "border border-sky-100/80 bg-white/90",
      )}
    >
      {!embedded ? (
        <>
          <h5 className="font-display font-semibold text-slate-900 text-base">Revenue Q&amp;A teaser</h5>
          <p className="mt-1 text-[13px] text-slate-600 sm:text-sm">
            Translate how you&apos;re trending into the three prompts you&apos;d pitch your finance brain.
          </p>
        </>
      ) : null}
      {lockedBeforePreview ? (
        <div className={embedded ? "mt-0" : "mt-4"}>
          <LockedLandingDemoSplash />
        </div>
      ) : null}
      {!demoGate.exhausted ? (
      <form className={cn("space-y-4", embedded ? "mt-0" : "mt-4")} onSubmit={onSubmit}>
        <ChipField label="1. Rough revenue band" options={REV_BAND} value={band} onChange={setBand} />
        <ChipField label="2. Top worry" options={REV_WORRY} value={worry} onChange={setWorry} />
        <ChipField label="3. Horizon" options={REV_HORIZON} value={horizon} onChange={setHorizon} />
        <div className="hidden md:block">
          <label className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500" htmlFor="rev-note">
            Optional · Business model hint
          </label>
          <input
            id="rev-note"
            value={note}
            onChange={(ev) => setNote(ev.target.value)}
            placeholder="e.g. usage-based SaaS, services + software"
            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-sky-400"
            maxLength={200}
          />
        </div>
        <button
          type="submit"
          disabled={!canSubmit}
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-40"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : null}
          {loading ? "Generating…" : "Spark revenue prompts"}
        </button>
        {error ? (
          <p className="text-sm font-medium text-red-600" role="alert">
            {error}
          </p>
        ) : null}
      </form>
      ) : null}
      {signals ? (
        <div className="mt-6 space-y-3">
          {signals.map((s, i) => (
            <article
              key={`${s.headline}-${i}`}
              className="rounded-xl border border-slate-200/80 bg-white px-3.5 py-3 shadow-[0_6px_20px_-12px_rgba(15,23,42,0.12)] sm:px-4"
            >
              <p className="border-l-[3px] border-sky-500/60 pl-3 text-[13px] font-semibold text-slate-900 sm:text-[14px]">
                {s.headline}
              </p>
              <p className="mt-2 pl-3 text-[12.75px] text-slate-600 sm:text-[13px]">{s.implication}</p>
              <p className="mt-2 rounded-md bg-sky-50/80 pl-3 pr-2 py-1.5 text-[12.5px] italic text-slate-700">
                Ask next: “{s.nextQuestion}”
              </p>
            </article>
          ))}
          <DemoSignupCtas />
        </div>
      ) : null}
    </div>
  )

  return inner
}
