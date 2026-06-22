/** In-memory sliding window (dev / single-instance). Serverless resets on cold start — OK for lightweight abuse guard. */

/** Max Gemini-backed demo POSTs allowed per-key per sliding window (tune lower to save cost). */
export const DEMO_RATE_LIMIT_MAX = Math.min(120, Math.max(1, parseInt(process.env.GEMINI_DEMO_RL_MAX ?? "5", 10) || 5))

/** Window length in milliseconds (default 1 hour). Env: GEMINI_DEMO_RL_WINDOW_MIN (whole minutes). */
export const DEMO_RATE_LIMIT_WINDOW_MS = (() => {
  const mins = parseInt(process.env.GEMINI_DEMO_RL_WINDOW_MIN ?? "60", 10)
  const windowMin = Number.isFinite(mins) ? Math.min(24 * 60, Math.max(1, mins)) : 60
  return windowMin * 60 * 1000
})()

type Entry = number[] // timestamps

const buckets = new Map<string, Entry>()

function prune(ip: string, now: number): number[] {
  const windowStart = now - DEMO_RATE_LIMIT_WINDOW_MS
  const cur = buckets.get(ip) ?? []
  return cur.filter((t) => t > windowStart)
}

/**
 * @returns `{ ok: true }` when under limit, `{ ok: false, retryAfterSec }` when exceeded.
 */
export function consumeDemoRateLimit(ipKey: string): { ok: true } | { ok: false; retryAfterSec: number } {
  const now = Date.now()
  let hits = prune(ipKey, now)

  if (hits.length >= DEMO_RATE_LIMIT_MAX) {
    const oldest = Math.min(...hits)
    const waitMs = DEMO_RATE_LIMIT_WINDOW_MS - (now - oldest)
    return { ok: false, retryAfterSec: Math.max(1, Math.ceil(waitMs / 1000)) }
  }

  hits = [...hits, now]
  buckets.set(ipKey, hits)
  return { ok: true }
}
