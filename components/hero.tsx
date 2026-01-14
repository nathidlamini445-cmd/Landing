"use client"
import { GL } from "./gl"
import { useState } from "react"

export function Hero() {
  const [hovering, setHovering] = useState(false)
  return (
    <div className="flex flex-col" style={{ minHeight: 'clamp(500px, 100svh, 100vh)', paddingTop: 'clamp(32vh, 38vh, 42vh)' }}>
      <GL hovering={hovering} />

      <div className="pb-4 sm:pb-8 md:pb-12 lg:pb-16 text-center relative px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sentient">
          <span className="text-shimmer">DreamScale</span> <br />
          <i className="font-light text-slate-900 text-3xl sm:text-4xl md:text-5xl">Built for visionares</i>
        </h1>
        <p className="font-mono text-sm sm:text-base md:text-lg text-slate-600 text-balance mt-6 sm:mt-8 max-w-[440px] mx-auto px-4">
          DreamScale is an entrepreneurship-focused SaaS platform designed to help entrepreneurs build and scale businesses, i provides step by step guidance, resource mapping, and education on business fundementals, empowering individuals to turn ideas into reality.
        </p>
      </div>
    </div>
  )
}
