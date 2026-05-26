import { NextRequest, NextResponse } from "next/server"
import { denyIfLandingDemoLocked, sealLandingDemoConsumption } from "@/lib/demo-one-use-server"
import { getDemoClientIp } from "@/lib/demo-request"
import { extractStructuredSignals } from "@/lib/demo-extract-model-json"
import {
  DEMO_STRUCTURED_OUTPUT_TOKENS,
  getGeminiApiKey,
  geminiDemoGenerateJson,
  parseDemoJson,
} from "@/lib/gemini-demo"
import { consumeDemoRateLimit } from "@/lib/rate-limit"

export const maxDuration = 30

const BAND = ["Pre-revenue / testing price", "Under ~$10k MRR", "$10k–$50k MRR", "$50k+ MRR"] as const
const WORRY = [
  "Runway / cash buffer",
  "Pipeline & conversion",
  "Retention & expansion",
  "Pricing & margins",
  "Forecasting discipline",
] as const
const HORIZON = ["Next 30 days", "This quarter", "6–12 months"] as const

type Signal = {
  headline: string
  implication: string
  nextQuestion: string
}

type RevOut = { signals: Signal[] }

export async function POST(request: NextRequest) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const band = typeof (body as { band?: unknown }).band === "string" ? (body as { band: string }).band : ""
  const worry = typeof (body as { worry?: unknown }).worry === "string" ? (body as { worry: string }).worry : ""
  const horizon =
    typeof (body as { horizon?: unknown }).horizon === "string" ? (body as { horizon: string }).horizon : ""
  const modelRaw = (body as { businessModelNote?: unknown }).businessModelNote
  const businessModelNote = typeof modelRaw === "string" ? modelRaw.trim().slice(0, 200) : undefined

  if (!BAND.includes(band as (typeof BAND)[number])) return NextResponse.json({ error: "Missing or invalid band" }, { status: 400 })
  if (!WORRY.includes(worry as (typeof WORRY)[number]))
    return NextResponse.json({ error: "Missing or invalid worry" }, { status: 400 })
  if (!HORIZON.includes(horizon as (typeof HORIZON)[number]))
    return NextResponse.json({ error: "Missing or invalid horizon" }, { status: 400 })

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
    "You speak like a pragmatic revenue operator prepping DreamScale Revenue Intelligence teaser.",
    'Return strict JSON: {"signals":[{"headline":"","implication":"","nextQuestion":""}]} with EXACTLY 3 signals.',
    "headline ≤ 72 chars punchy metric angle. implication ONE sentence tying to founder choice.",
    "nextQuestion mimics Revenue Q&A prompts (specific, no jargon walls) ONE sentence (< 140 chars).",
    "Total prose < ~220 words. No markdown.",
  ].join("\n")

  const userPrompt = JSON.stringify({
    roughMrrBand: band,
    topWorry: worry,
    decisionHorizon: horizon,
    positioningNote: businessModelNote ?? null,
  })

  try {
    const raw = await geminiDemoGenerateJson(userPrompt, system, {
      maxOutputTokens: DEMO_STRUCTURED_OUTPUT_TOKENS,
      mimeOrder: "plain-first",
    })
    const signals = extractStructuredSignals(parseDemoJson(raw))
    if (!signals) {
      console.error("[demo/revenue] bad shape", raw?.slice?.(0, 600))
      return NextResponse.json({ error: "Could not build a preview right now." }, { status: 502 })
    }
    const parsed: RevOut = { signals }
    return sealLandingDemoConsumption(NextResponse.json(parsed))
  } catch (e) {
    console.error("[demo/revenue]", e)
    return NextResponse.json({ error: "Preview failed. Try again in a moment." }, { status: 502 })
  }
}
