"use client"
import { GL } from "./gl"
import { useState } from "react"

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
          <p className="mb-3 sm:mb-4 text-center font-display font-semibold text-slate-600 text-sm sm:text-base tracking-wide">
            Built for visionaries
          </p>
          <h1
            className="font-display font-semibold tracking-tight text-slate-900"
            style={{ fontSize: "clamp(2.25rem, 8vw, 4.75rem)", lineHeight: 1.08 }}
          >
            <span className="text-shimmer">DreamScale</span>
            <br />
            <span
              className="text-shimmer-subtle font-semibold"
              style={{ fontSize: "clamp(1.05rem, 4.2vw, 2.35rem)", lineHeight: 1.3 }}
            >
              Competitor intel, AI answers, and a clear plan, without juggling ten tabs.
            </span>
          </h1>
          <p
            className="mt-5 sm:mt-8 text-slate-600 text-balance mx-auto max-w-2xl leading-relaxed px-0.5"
            style={{ fontSize: "clamp(0.95rem, 3.8vw, 1.25rem)" }}
          >
            See what rivals are doing, know your next best move, and get plain language help for the messy parts of
            running a business. Start free, then upgrade when you&apos;re ready to scale.
          </p>
          <div className="mt-9 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://app.dreamscale.co.za/login"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              onFocus={() => setHovering(true)}
              onBlur={() => setHovering(false)}
              className="inline-flex w-full sm:w-auto min-h-[48px] items-center justify-center rounded-full px-8 py-3.5 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-base shadow-lg shadow-blue-500/25 transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 touch-manipulation active:scale-[0.99]"
            >
              Get started free
            </a>
            <a
              href="https://app.dreamscale.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className="inline-flex w-full sm:w-auto min-h-[48px] items-center justify-center rounded-full px-8 py-3.5 sm:py-4 border-2 border-slate-200/90 bg-white/70 text-slate-800 font-semibold text-base backdrop-blur-sm transition-all duration-300 hover:border-[rgb(0,149,255)]/40 hover:bg-white/90 hover:text-slate-900 touch-manipulation active:scale-[0.99]"
            >
              Open the app
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
