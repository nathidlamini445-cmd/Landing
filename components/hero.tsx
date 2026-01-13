"use client"
import { GL } from "./gl"
import { useState } from "react"

export function Hero() {
  const [hovering, setHovering] = useState(false)
  return (
    <div className="flex flex-col h-svh justify-between">
      <GL hovering={hovering} />

      <div className="pb-4 sm:pb-8 md:pb-12 lg:pb-16 mt-auto text-center relative px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sentient">
          <span className="text-shimmer">DreamScale</span> <br />
          <i className="font-light text-slate-900 text-2xl sm:text-3xl md:text-4xl">Built for visionares</i>
        </h1>
        <p className="font-mono text-xs sm:text-sm md:text-base text-slate-600 text-balance mt-6 sm:mt-8 max-w-[440px] mx-auto px-4">
          DreamScale is an entrepreneurship-focused SaaS platform designed to help entrepreneurs build and scale businesses, i provides step by step guidance, resource mapping, and education on business fundementals, empowering individuals to turn ideas into reality.
        </p>
      </div>
    </div>
  )
}
