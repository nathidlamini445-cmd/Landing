import { NextRequest, NextResponse } from "next/server"
import { denyIfLandingDemoLocked, sealLandingDemoConsumption } from "@/lib/demo-one-use-server"
import { getDemoClientIp } from "@/lib/demo-request"
import { extractStructuredPriorities } from "@/lib/demo-extract-model-json"
import {
  DEMO_STRUCTURED_OUTPUT_TOKENS,
  getGeminiApiKey,
  geminiDemoGenerateJson,
  parseDemoJson,
} from "@/lib/gemini-demo"
import { consumeDemoRateLimit } from "@/lib/rate-limit"

export const maxDuration = 30

const RUN_OPS = ["Spreadsheets & email", "Lightweight SaaS stack", "Serious stack, feels messy", "Still figuring it out"] as const
const BOTTLENECK = [
  "Inconsistent delivery / quality dips",
  "Leads slipping through cracks",
  "Money ops (invoices, runway, margins)",
  "Hiring & handoffs unclear",
  "Documentation & SOPs missing",
] as const
const GOAL = [
  "Document the top 5 processes",
  "Stop dropped follow-ups",
  "Tighten monthly close rhythm",
  "Clear owners & weekly reviews",
  "Prep to scale past 10 people",
] as const

type Priority = {
  title: string
  whyNow: string
  firstStep: string
  tryHint: string
}

type SysOut = { priorities: Priority[] }

export async function POST(request: NextRequest) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const opsMode = typeof (body as { opsMode?: unknown }).opsMode === "string" ? (body as { opsMode: string }).opsMode : ""
  const bottleneck =
    typeof (body as { bottleneck?: unknown }).bottleneck === "string"
      ? (body as { bottleneck: string }).bottleneck
      : ""
  const goal = typeof (body as { goal?: unknown }).goal === "string" ? (body as { goal: string }).goal : ""
  const noteRaw = (body as { contextNote?: unknown }).contextNote
  const contextNote = typeof noteRaw === "string" ? noteRaw.trim().slice(0, 200) : undefined

  if (!RUN_OPS.includes(opsMode as (typeof RUN_OPS)[number]))
    return NextResponse.json({ error: "Missing or invalid opsMode" }, { status: 400 })
  if (!BOTTLENECK.includes(bottleneck as (typeof BOTTLENECK)[number]))
    return NextResponse.json({ error: "Missing or invalid bottleneck" }, { status: 400 })
  if (!GOAL.includes(goal as (typeof GOAL)[number])) return NextResponse.json({ error: "Missing or invalid goal" }, { status: 400 })

  const locked = denyIfLandingDemoLocked(request)
  if (locked) return locked

  if (!getGeminiApiKey()) {
    return NextResponse.json({ error: "DreamScale previews are not available right now." }, { status: 503 })
  }

  const ip = getDemoClientIp(request)
  const rl = consumeDemoRateLimit(ip)
  if (!rl.ok) {
    return NextResponse.json(
      { error: "Too many previews from this network. Try again soon.", retryAfter: rl.retryAfterSec },
      { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } },
    )
  }

  const system = [
    "You outline tight operational-system priorities for small teams on DreamScale landing preview.",
    "Return strict JSON matching schema. Exactly 3 items in priorities[].",
    "Each title ≤ 70 chars action phrase. whyNow one sentence.",
    "firstStep is one concrete ritual they can ship today (< 140 chars).",
    "tryHint one sentence bridging documentation, CRM, finance, automation in DreamScale (< 140 chars).",
    "Total output under ~200 words.",
    'Schema: {"priorities":[{"title":"","whyNow":"","firstStep":"","tryHint":""}]}',
  ].join("\n")

  const userPrompt = JSON.stringify({
    howTheyRunOps: opsMode,
    bottleneck,
    ninetyDayGoal: goal,
    extraContext: contextNote ?? null,
  })

  try {
    const raw = await geminiDemoGenerateJson(userPrompt, system, {
      maxOutputTokens: DEMO_STRUCTURED_OUTPUT_TOKENS,
      mimeOrder: "plain-first",
    })
    const priorities = extractStructuredPriorities(parseDemoJson(raw))
    if (!priorities) {
      console.error("[demo/systems] bad shape", raw?.slice?.(0, 600))
      return NextResponse.json({ error: "Could not build a preview right now." }, { status: 502 })
    }
    const parsed: SysOut = { priorities }
    return sealLandingDemoConsumption(NextResponse.json(parsed))
  } catch (e) {
    console.error("[demo/systems]", e)
    return NextResponse.json({ error: "Preview failed. Try again in a moment." }, { status: 502 })
  }
}
