/**
 * Coalesce Gemini-ish JSON quirks (camelCase drift, extra keys, minor schema drift).
 * Used only by `/api/demo/*` structured previews.
 */

function unwrapCommonWrapper(parsed: unknown): unknown {
  if (!parsed || typeof parsed !== "object") return parsed
  const root = parsed as Record<string, unknown>
  const inner = root.data ?? root.result ?? root.output ?? root.response
  return inner !== null && typeof inner === "object" ? inner : parsed
}

function pickString(row: Record<string, unknown>, ...keys: string[]): string {
  for (const k of keys) {
    const v = row[k]
    if (typeof v === "string" && v.trim().length > 0) return v.trim()
    if (typeof v === "number") return String(v)
  }
  return ""
}

function asRecordArray(v: unknown): Record<string, unknown>[] | null {
  if (!Array.isArray(v)) return null
  return v.filter((x): x is Record<string, unknown> => x !== null && typeof x === "object")
}

export type DemoRoadmapCard = {
  title: string
  whyNow: string
  firstStep: string
  tryInDreamscale: string
}

export function extractStructuredRoadmapCards(parsed: unknown): DemoRoadmapCard[] | null {
  const scoped = unwrapCommonWrapper(parsed)
  if (!scoped || typeof scoped !== "object") return null
  const root = scoped as Record<string, unknown>
  let rows = root.cards ?? root.roadmap ?? root.items ?? root.steps
  if (!Array.isArray(rows)) return null

  rows = rows as unknown[]
  const out: DemoRoadmapCard[] = []
  for (const raw of rows) {
    if (!raw || typeof raw !== "object") continue
    const row = raw as Record<string, unknown>
    const title = pickString(row, "title", "Title", "headline")
    const whyNow = pickString(row, "whyNow", "why_now", "reason", "context")
    const firstStep = pickString(row, "firstStep", "first_step", "nextStep", "action")
    const tryInDreamscale = pickString(
      row,
      "tryInDreamscale",
      "tryInDreamScale",
      "try_in_dreamscale",
      "dreamscale",
      "inDreamscale",
    )
    if ([title, whyNow, firstStep, tryInDreamscale].every((x) => x.length > 0)) {
      out.push({ title, whyNow, firstStep, tryInDreamscale })
    }
    if (out.length >= 3) break
  }
  return out.length >= 3 ? out.slice(0, 3) : null
}

export type DemoSystemsPriority = {
  title: string
  whyNow: string
  firstStep: string
  tryHint: string
}

export function extractStructuredPriorities(parsed: unknown): DemoSystemsPriority[] | null {
  const scoped = unwrapCommonWrapper(parsed)
  if (!scoped || typeof scoped !== "object") return null
  const root = scoped as Record<string, unknown>
  const arr =
    root.priorities ?? root.priority ?? root.items ?? root.focus ?? root.opsPriorities ?? root.ops_priorities
  const rows = asRecordArray(arr)
  if (!rows) return null
  const out: DemoSystemsPriority[] = []
  for (const row of rows) {
    const title = pickString(row, "title", "name", "focus")
    const whyNow = pickString(row, "whyNow", "why_now", "why")
    const firstStep = pickString(row, "firstStep", "first_step", "nextStep")
    const tryHint = pickString(row, "tryHint", "try_hint", "hint")
    if ([title, whyNow, firstStep, tryHint].every((x) => x.length > 0)) {
      out.push({ title, whyNow, firstStep, tryHint })
    }
    if (out.length >= 3) break
  }
  return out.length >= 3 ? out.slice(0, 3) : null
}

export type DemoRevenueSignal = {
  headline: string
  implication: string
  nextQuestion: string
}

export function extractStructuredSignals(parsed: unknown): DemoRevenueSignal[] | null {
  const scoped = unwrapCommonWrapper(parsed)
  if (!scoped || typeof scoped !== "object") return null
  const root = scoped as Record<string, unknown>
  const arr =
    root.signals ?? root.insights ?? root.items ?? root.recommendations ?? root.recommendation ?? root.flags
  const rows = asRecordArray(arr)
  if (!rows) return null
  const out: DemoRevenueSignal[] = []
  for (const row of rows) {
    const headline = pickString(row, "headline", "title", "metric")
    const implication = pickString(row, "implication", "insight", "meaning", "point")
    const nextQuestion = pickString(row, "nextQuestion", "next_question", "question")
    if ([headline, implication, nextQuestion].every((x) => x.length > 0)) {
      out.push({ headline, implication, nextQuestion })
    }
    if (out.length >= 3) break
  }
  return out.length >= 3 ? out.slice(0, 3) : null
}
