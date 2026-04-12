"use client"
import { GL } from "./gl"
import { useState } from "react"

export function Hero() {
  const [hovering, setHovering] = useState(false)
  return (
    <div className="flex flex-col" style={{ minHeight: 'clamp(500px, 100svh, 100vh)', paddingTop: 'clamp(32vh, 38vh, 42vh)' }}>
      <GL hovering={hovering} />

      <div className="pb-4 sm:pb-8 md:pb-12 lg:pb-16 text-center relative" style={{ paddingLeft: 'clamp(1rem, 4vw, 2rem)', paddingRight: 'clamp(1rem, 4vw, 2rem)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
          <h1 className="font-sentient" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            <span className="text-shimmer">DreamScale</span> <br />
            <i className="font-light text-slate-900" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>Built for visionares</i>
          </h1>
          <p className="font-mono text-slate-600 text-balance mt-6 sm:mt-8 mx-auto" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)', maxWidth: 'min(640px, 92vw)' }}>
            DreamScale is the all in one platform for entrepreneurs, with AI powered guidance, competitor tracking, and business tools designed to take you from idea to execution.
          </p>
          <div className="mt-8 sm:mt-10 flex justify-center">
            <a
              href="https://app.dreamscale.co.za/login"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              onFocus={() => setHovering(true)}
              onBlur={() => setHovering(false)}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              style={{ fontSize: 'clamp(1rem, 1.2vw, 1.125rem)' }}
            >
              Get Started Free
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
