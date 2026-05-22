import { NextRequest, NextResponse } from "next/server"
import {
  landingDemoBypassOneUseCookie,
  landingDemoConsumptionCookieSet,
} from "@/lib/demo-one-use-server"

const noStore = { "Cache-Control": "no-store" } as const

export async function GET(request: NextRequest) {
  if (landingDemoBypassOneUseCookie()) {
    return NextResponse.json({ exhausted: false }, { headers: noStore })
  }
  const exhausted = landingDemoConsumptionCookieSet(request)
  return NextResponse.json({ exhausted }, { headers: noStore })
}
