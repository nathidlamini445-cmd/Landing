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
          <p className="font-mono text-slate-600 text-balance mt-6 sm:mt-8 mx-auto" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)', maxWidth: 'min(600px, 90vw)' }}>
            DreamScale is an entrepreneurship-focused SaaS platform designed to help entrepreneurs build and scale businesses, i provides step by step guidance, resource mapping, and education on business fundementals, empowering individuals to turn ideas into reality.
          </p>
        </div>
      </div>
    </div>
  )
}
