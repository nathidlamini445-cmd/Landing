import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import {
  LANDING_DEMO_COOKIE,
  LANDING_DEMO_COOKIE_VALUE,
  LANDING_DEMO_LOCKED_MESSAGE,
} from "@/lib/demo-one-use-constants"

/** Testing only — never enable in prod traffic you want constrained */
export function landingDemoBypassOneUseCookie(): boolean {
  return process.env.GEMINI_DEMO_BYPASS_ONE_USE === "1"
}

export function landingDemoConsumptionCookieSet(request: NextRequest): boolean {
  return request.cookies.get(LANDING_DEMO_COOKIE)?.value === LANDING_DEMO_COOKIE_VALUE
}

/** If this browser profile already redeemed its free preview, block before calling Gemini */
export function denyIfLandingDemoLocked(request: NextRequest): NextResponse | null {
  if (landingDemoBypassOneUseCookie()) return null
  if (!landingDemoConsumptionCookieSet(request)) return null
  return NextResponse.json({ error: LANDING_DEMO_LOCKED_MESSAGE }, { status: 403 })
}

/** Call on successful previews only — seals this browser (~1yr) across tabs/windows in the same profile */
export function sealLandingDemoConsumption(response: NextResponse): NextResponse {
  if (landingDemoBypassOneUseCookie()) return response
  const secure = process.env.NODE_ENV === "production"
  response.cookies.set({
    name: LANDING_DEMO_COOKIE,
    value: LANDING_DEMO_COOKIE_VALUE,
    httpOnly: true,
    secure,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 400,
  })
  return response
}
