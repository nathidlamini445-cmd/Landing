"use client"

import { Canvas } from "@react-three/fiber"
import { useControls } from "leva"
import { Particles } from "./particles"
import { useEffect, useState, useRef } from "react"

export const GL = ({ hovering }: { hovering: boolean }) => {
  const [webglError, setWebglError] = useState(false)
  const canvasRef = useRef<HTMLDivElement>(null)

  const {
    speed,
    focus,
    aperture,
    size,
    noiseScale,
    noiseIntensity,
    timeScale,
    pointSize,
    opacity,
    planeScale,
    useManualTime,
    manualTime,
  } = useControls("Particle System", {
    speed: { value: 1.0, min: 0, max: 2, step: 0.01 },
    noiseScale: { value: 0.6, min: 0.1, max: 5, step: 0.1 },
    noiseIntensity: { value: 0.52, min: 0, max: 2, step: 0.01 },
    timeScale: { value: 1, min: 0, max: 2, step: 0.01 },
    focus: { value: 3.8, min: 0.1, max: 20, step: 0.1 },
    aperture: { value: 1.79, min: 0, max: 2, step: 0.01 },
    pointSize: { value: 10.0, min: 0.1, max: 10, step: 0.1 },
    opacity: { value: 0.8, min: 0, max: 1, step: 0.01 },
    planeScale: { value: 10.0, min: 0.1, max: 10, step: 0.1 },
    size: {
      value: 512,
      options: [256, 512, 1024],
    },
    showDebugPlane: { value: false },
    useManualTime: { value: false },
    manualTime: { value: 0, min: 0, max: 50, step: 0.01 },
  })

  useEffect(() => {
    // Cleanup function to handle WebGL context properly
    return () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current.querySelector('canvas')
        if (canvas) {
          const gl = canvas.getContext('webgl') || canvas.getContext('webgl2')
          if (gl) {
            const loseContext = (gl as any).getExtension?.('WEBGL_lose_context')
            if (loseContext) {
              loseContext.loseContext()
            }
          }
        }
      }
    }
  }, [])

  // Check if WebGL is supported
  useEffect(() => {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('webgl2')
    if (!gl) {
      setWebglError(true)
    }
  }, [])

  if (webglError) {
    return null // Silently fail if WebGL is not supported
  }

  return (
    <div id="webgl" ref={canvasRef}>
      <Canvas
        key="webgl-canvas"
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
          speed={speed}
          aperture={aperture}
          focus={focus}
          size={size}
          noiseScale={noiseScale}
          noiseIntensity={noiseIntensity}
          timeScale={timeScale}
          pointSize={pointSize}
          opacity={opacity}
          planeScale={planeScale}
          useManualTime={useManualTime}
          manualTime={manualTime}
          introspect={hovering}
        />
        {/* Vignette effect removed - no dark overlays */}
      </Canvas>
    </div>
  )
}
