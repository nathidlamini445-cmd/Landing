import type { NextRequest } from "next/server"

/** Best-effort client IP for anonymous demo rate limiting */
export function getDemoClientIp(request: NextRequest): string {
  const xff = request.headers.get("x-forwarded-for")
  if (xff) {
    const first = xff.split(",")[0]?.trim()
    if (first) return first.slice(0, 128)
  }
  const realIp = request.headers.get("x-real-ip")?.trim()
  if (realIp) return realIp.slice(0, 128)
  const cf = request.headers.get("cf-connecting-ip")?.trim()
  if (cf) return cf.slice(0, 128)
  return "unknown"
}
