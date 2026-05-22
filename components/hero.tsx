"use client"
import dynamic from "next/dynamic"
import { useState } from "react"
import { APP_SIGNUP_URL } from "@/lib/site"

const GL = dynamic(() => import("./gl").then((m) => m.GL), {
  ssr: false,
  loading: () => null,
})

export function Hero() {
  const [hovering, setHovering] = useState(false)
  return (
    <div
      className="relative flex flex-col overflow-x-hidden"
      style={{ minHeight: "clamp(480px, min(90svh, 880px), 100svh)" }}
    >
      <GL hovering={hovering} />

      <div
        className="relative z-10 flex flex-1 flex-col justify-center px-4 sm:px-6 pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20"
      >
        <div className="mx-auto w-full max-w-[100%] text-center px-0">
          <h1
            className="font-display font-semibold tracking-tight text-slate-900"
            style={{ fontSize: "clamp(2.25rem, 8vw, 4.75rem)", lineHeight: 1.08 }}
          >
            <span className="text-shimmer">DreamScale</span>
          </h1>
          <p
            className="mt-4 sm:mt-5 font-display font-semibold tracking-tight text-slate-900 text-balance mx-auto max-w-xl leading-tight px-0.5"
            style={{ fontSize: "clamp(1.15rem, 3.8vw, 1.875rem)", lineHeight: 1.2 }}
          >
            Start each week with context intact.
          </p>
          <p
            className="mt-4 text-slate-600 text-balance mx-auto max-w-xl leading-snug px-0.5"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.1875rem)" }}
          >
            Building, scaling, growing: guided and remembered, not fragmented.
          </p>
          <p
            className="mt-4 text-slate-500 text-center text-sm px-0.5"
          >
            Free to try · no credit card
          </p>
          <div className="mt-9 sm:mt-10 flex flex-col items-center justify-center gap-3">
            <a
              href={APP_SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              onFocus={() => setHovering(true)}
              onBlur={() => setHovering(false)}
              className="inline-flex w-full sm:w-auto min-h-[52px] items-center justify-center rounded-full px-10 py-4 sm:py-4 text-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg shadow-blue-500/25 transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 touch-manipulation active:scale-[0.99]"
            >
              Create your free account
            </a>
            <a
              href="#demo"
              className="text-sm font-medium text-blue-600 underline-offset-4 hover:text-blue-700 hover:underline touch-manipulation"
            >
              Watch the demo →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
