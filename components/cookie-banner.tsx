"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const CONSENT_KEY = "dreamscale-cookie-consent"

export type CookieConsent = "all" | "essential"

export function getCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null
  const value = window.localStorage.getItem(CONSENT_KEY)
  return value === "all" || value === "essential" ? value : null
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(getCookieConsent() === null)
  }, [])

  const save = (value: CookieConsent) => {
    window.localStorage.setItem(CONSENT_KEY, value)
    setVisible(false)
    window.dispatchEvent(new CustomEvent("dreamscale-cookie-consent", { detail: value }))
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-slate-200 bg-white/95 p-4 shadow-[0_-12px_40px_-20px_rgba(15,23,42,0.25)] backdrop-blur-md sm:p-5"
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom, 0px))" }}
    >
      <div className="container mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-slate-600">
          We use essential cookies to run the site and optional analytics to improve DreamScale.{" "}
          <Link href="/cookies" className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-700">
            Cookie Policy
          </Link>
        </p>
        <div className="flex shrink-0 flex-wrap gap-2 sm:justify-end">
          <button
            type="button"
            onClick={() => save("essential")}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => save("all")}
            className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:from-blue-600 hover:to-blue-700"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  )
}
