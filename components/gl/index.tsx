"use client"

import { Canvas } from "@react-three/fiber"
import { Particles } from "./particles"
import { useEffect, useLayoutEffect, useMemo, useState } from "react"

/** Tuned presets (were Leva controls). Lower `size` = much faster GPU; 256 is plenty for background hero polish. */
const PARTICLE_PRESET = {
  speed: 1.0,
  noiseScale: 0.6,
  noiseIntensity: 0.52,
  timeScale: 1,
  focus: 3.8,
  aperture: 1.79,
  /** Larger points read better on bright hero backgrounds */
  pointSize: 13.0,
  opacity: 1.0,
  planeScale: 10.0,
  size: 256,
  useManualTime: false,
  manualTime: 0,
} as const

/** True when createContext / WebGLRenderingContext succeeds (cheap probe; never reuse the Fiber canvas DOM). */
function webglLikelySupported() {
  if (typeof document === "undefined") return true
  const test = document.createElement("canvas")
  return !!(test.getContext("webgl2") ?? test.getContext("webgl"))
}

function heroDpr() {
  const narrow =
    typeof window !== "undefined" && window.matchMedia("(max-width: 639px)").matches
  const ratio = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1
  return narrow ? 1 : Math.min(ratio, 1.25)
}

export const GL = ({ hovering }: { hovering: boolean }) => {
  const [webglError, setWebglError] = useState(false)
  /** Bumps whenever this component attaches so <Canvas key> gives a pristine canvas after React Strict Mode + R3F's deferred teardown. */
  const [fiberCanvasGeneration, bumpFiberCanvas] = useState(0)

  const dpr = useMemo(() => heroDpr(), [fiberCanvasGeneration])

  useLayoutEffect(() => {
    bumpFiberCanvas((g) => g + 1)
  }, [])

  // Check if WebGL is supported
  useEffect(() => {
    if (!webglLikelySupported()) {
      setWebglError(true)
    }
  }, [])

  // Keep DPR modest: hero WebGL is expensive; 1x is crisp enough for particle field — remount when crossing mobile breakpoint only
  useEffect(() => {
    let lastBucket: "narrow" | "wide" | null = null
    const apply = () => {
      const bucket = window.matchMedia("(max-width: 639px)").matches ? "narrow" : "wide"
      if (lastBucket !== null && lastBucket !== bucket) {
        bumpFiberCanvas((g) => g + 1)
      }
      lastBucket = bucket
    }
    apply()
    const mq = window.matchMedia("(max-width: 639px)")
    mq.addEventListener("change", apply)
    window.addEventListener("resize", apply, { passive: true })
    return () => {
      mq.removeEventListener("change", apply)
      window.removeEventListener("resize", apply)
    }
  }, [])

  if (webglError) {
    return null // Silently fail if WebGL is not supported
  }

  /** Don’t attach R3F until post-layout bump so Strict Mode doesn’t reconcile against a zombie canvas/map entry. */
  if (fiberCanvasGeneration === 0) {
    return <div id="webgl" className="pointer-events-none absolute inset-0" aria-hidden />
  }

  return (
    <div id="webgl" className="pointer-events-none absolute inset-0">
      <Canvas
        key={`fiber-canvas-gen-${fiberCanvasGeneration}`}
        dpr={dpr}
        camera={{
          position: [1.2629783123314589, 2.664606471394044, -1.8178993743288914],
          fov: 50,
          near: 0.01,
          far: 300,
        }}
        gl={{
          antialias: false,
          alpha: false,
          powerPreference: "high-performance",
          preserveDrawingBuffer: false,
        }}
        onCreated={(state) => {
          // Handle WebGL context loss
          const gl = state.gl.getContext()
          if (gl) {
            const canvas = gl.canvas as HTMLCanvasElement
            canvas.addEventListener('webglcontextlost', (e) => {
              e.preventDefault()
              setWebglError(true)
            })
            canvas.addEventListener('webglcontextrestored', () => {
              setWebglError(false)
            })
          }
        }}
      >
        {/* <Perf position="top-left" /> */}
        <color attach="background" args={["#fff"]} />
        <Particles
          speed={PARTICLE_PRESET.speed}
          aperture={PARTICLE_PRESET.aperture}
          focus={PARTICLE_PRESET.focus}
          size={PARTICLE_PRESET.size}
          noiseScale={PARTICLE_PRESET.noiseScale}
          noiseIntensity={PARTICLE_PRESET.noiseIntensity}
          timeScale={PARTICLE_PRESET.timeScale}
          pointSize={PARTICLE_PRESET.pointSize}
          opacity={PARTICLE_PRESET.opacity}
          planeScale={PARTICLE_PRESET.planeScale}
          useManualTime={PARTICLE_PRESET.useManualTime}
          manualTime={PARTICLE_PRESET.manualTime}
          introspect={hovering}
        />
        {/* Vignette effect removed - no dark overlays */}
      </Canvas>
    </div>
  )
}
