import type { EnhancedGenerateContentResponse } from "@google/generative-ai"
import { GoogleGenerativeAI } from "@google/generative-ai"

const PRIMARY_MODEL = process.env.GEMINI_MODEL?.trim() || "gemini-2.0-flash"

/** Default max tokens for Bizora-sized JSON */
export const DEMO_MAX_OUTPUT_TOKENS = Number(process.env.GEMINI_DEMO_MAX_TOKENS) || 768

/**
 * Larger JSON arrays (roadmap/systems/revenue) need extra headroom; env alone can be conservative.
 */
export const DEMO_STRUCTURED_OUTPUT_TOKENS = Math.min(8192, Math.max(DEMO_MAX_OUTPUT_TOKENS, 2048))

/**
 * Caps how many Gemini `generateContent` calls one preview can trigger (MIME retries × model fallbacks).
 * Lower = cheaper; raising improves reliability when the API/model flakes. Env: GEMINI_DEMO_MAX_API_ATTEMPTS
 */
export const GEMINI_DEMO_MAX_API_ATTEMPTS = Math.min(24, Math.max(1, parseInt(process.env.GEMINI_DEMO_MAX_API_ATTEMPTS ?? "4", 10) || 4))

export function getGeminiApiKey(): string | null {
  const k = process.env.GEMINI_API_KEY?.trim()
  return k && k.length > 0 ? k : null
}

export type GeminiDemoGenerateOptions = {
  maxOutputTokens?: number
  /** Default: json MIME then plain; plain-first avoids some JSON-schema failures on nested payloads. */
  mimeOrder?: "json-first" | "plain-first"
  /** Models tried after GEMINI_MODEL (best-effort; invalid IDs are skipped at runtime via failure + retry). */
  extraFallbackModels?: readonly string[]
}

function extractText(res: EnhancedGenerateContentResponse): string {
  try {
    const t = res.text()
    if (t?.trim()) return t.trim()
  } catch {
    /* Blocked/no aggregate text — fall through to parts */
  }
  const parts = res.candidates?.[0]?.content?.parts
  if (!parts?.length) throw new Error("No text in Gemini response")
  const joined = parts.map((p) => ("text" in p ? (p.text ?? "") : "")).join("")
  if (!joined.trim()) throw new Error("Empty model response")
  return joined.trim()
}

/** Preference order when walking model names */
function modelsForAttempt(extraFallback?: readonly string[]): string[] {
  const envExtra = process.env.GEMINI_DEMO_MODEL_FALLBACKS?.trim()

  /** When unset, minimal chain (cheaper): primary + flash. Set env to widen (more reliable if primary misbehaves). */
  const defaults = envExtra
    ? envExtra
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    : ["gemini-2.0-flash"]

  /** Best-effort; invalid model IDs usually fail quickly and consume an attempt toward GEMINI_DEMO_MAX_API_ATTEMPTS. */
  const chain = [PRIMARY_MODEL, ...(extraFallback ?? []), ...defaults]
  const seen = new Set<string>()
  const out: string[] = []
  for (const raw of chain) {
    const m = raw.trim()
    if (!m || seen.has(m)) continue
    seen.add(m)
    out.push(m)
  }
  return out
}

function mimeOrderToBooleans(order: GeminiDemoGenerateOptions["mimeOrder"]): boolean[] {
  if (order === "plain-first") return [false, true]
  return [true, false]
}

async function generateDemoRaw(
  prompt: string,
  systemInstruction: string,
  jsonMime: boolean,
  modelId: string,
  maxOutputTokens: number,
): Promise<string> {
  const key = getGeminiApiKey()
  if (!key) throw new Error("GEMINI_API_KEY not configured")

  const genAI = new GoogleGenerativeAI(key)
  const model = genAI.getGenerativeModel({
    model: modelId,
    systemInstruction,
    generationConfig: {
      maxOutputTokens,
      temperature: 0.45,
      ...(jsonMime ? { responseMimeType: "application/json" as const } : {}),
    },
  })

  const result = await model.generateContent(prompt)
  const cand = result.response.candidates?.[0]
  const reason = cand?.finishReason
  if (reason && reason !== "STOP" && reason !== "MAX_TOKENS") {
    console.warn("[gemini-demo] finishReason:", reason, "model:", modelId, "mime:", jsonMime)
  }

  const txt = extractText(result.response)
  if (!txt) throw new Error("Empty model response")
  return txt
}

/**
 * Try multiple MIME modes and model fallbacks. Useful when Bizora succeeds but structured JSON flakes.
 */
export async function geminiDemoGenerateJson(
  prompt: string,
  systemInstruction: string,
  options?: GeminiDemoGenerateOptions,
): Promise<string> {
  const maxOut = Math.min(8192, options?.maxOutputTokens ?? DEMO_MAX_OUTPUT_TOKENS)
  const mimeCycle = mimeOrderToBooleans(options?.mimeOrder ?? "json-first")
  const models = modelsForAttempt(options?.extraFallbackModels)

  let lastErr: unknown
  let attempts = 0

  outer: for (const modelId of models) {
    for (const jsonMime of mimeCycle) {
      if (attempts >= GEMINI_DEMO_MAX_API_ATTEMPTS) break outer

      attempts += 1
      try {
        const raw = await generateDemoRaw(prompt, systemInstruction, jsonMime, modelId, maxOut)
        return raw
      } catch (e) {
        lastErr = e
        console.warn("[gemini-demo] attempt failed", {
          attempts,
          modelId,
          jsonMime,
          message: readableErr(e),
        })
      }
    }
  }

  throw lastErr ?? new Error("Gemini generation failed")
}

function readableErr(e: unknown): string {
  if (e instanceof Error) return e.message
  return String(e)
}

export function unwrapJsonFence(raw: string): string {
  let t = raw.trim()
  if (t.startsWith("```")) {
    t = t.replace(/^```(?:json)?\s*/i, "")
    t = t.replace(/\s*```$/i, "")
  }
  return t.trim()
}

/** Parse model output after stripping fences; fall back to first `{…}` slice if extra prose wraps the JSON. */
export function parseDemoJson(raw: string): unknown {
  const trimmed = unwrapJsonFence(raw.trim())
  try {
    return JSON.parse(trimmed)
  } catch {
    const start = trimmed.indexOf("{")
    const end = trimmed.lastIndexOf("}")
    if (start === -1 || end <= start) {
      throw new SyntaxError("No JSON object in model output")
    }
    return JSON.parse(trimmed.slice(start, end + 1))
  }
}
