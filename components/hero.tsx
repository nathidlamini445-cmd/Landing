"use client"
import { GL } from "./gl"
import { useState } from "react"

export function Hero() {
  const [hovering, setHovering] = useState(false)
  return (
    <div className="flex flex-col h-svh justify-between">
      <GL hovering={hovering} />

      <div className="pb-16 mt-auto text-center relative">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
          <span className="text-shimmer">DreamScale</span> <br />
          <i className="font-light text-slate-900">Built for visionares</i>
        </h1>
        <p className="font-mono text-sm sm:text-base text-slate-600 text-balance mt-8 max-w-[440px] mx-auto">
          DreamScale is an entrepreneurship-focused SaaS platform designed to help entrepreneurs build and scale businesses, i provides step by step guidance, resource mapping, and education on business fundementals, empowering individuals to turn ideas into reality.
        </p>
      </div>
    </div>
  )
}
