"use client"

import { useEffect, useRef, useState } from "react"

/** Radar + signal motif: track the market, central “you”, competitor nodes, live bars */
function CompetitorIntelligenceVisual() {
  return (
    <svg viewBox="0 0 320 168" className="w-full h-36 sm:h-40 max-h-[200px]" role="img" aria-hidden>
      <defs>
        <linearGradient id="ec-ci-grad-hub" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="ec-ci-grad-scan" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
          <stop offset="55%" stopColor="#60a5fa" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="ec-ci-grad-bar" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#64748b" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <filter id="ec-ci-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* subtle grid */}
      <g opacity="0.35" stroke="#94a3b8" strokeWidth="0.5">
        {[32, 64, 96, 128, 160, 192, 224, 256, 288].map((x) => (
          <line key={`v${x}`} x1={x} y1="12" x2={x} y2="156" />
        ))}
        {[28, 56, 84, 112, 140].map((y) => (
          <line key={`h${y}`} x1="16" y1={y} x2="304" y2={y} />
        ))}
      </g>

      {/* radar sweep */}
      <g transform="translate(158 78)">
        <g>
          <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="8s" repeatCount="indefinite" />
          <path d="M 0 0 L 0 -72 A 72 72 0 0 1 50.9 -50.9 Z" fill="url(#ec-ci-grad-scan)" opacity="0.9" />
        </g>
        <circle r="72" fill="none" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 6" />
        <circle r="48" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2 8" />
        <circle r="24" fill="none" stroke="#e2e8f0" strokeWidth="1" />
      </g>

      {/* center hub (you) */}
      <circle cx="158" cy="78" r="14" fill="url(#ec-ci-grad-hub)" filter="url(#ec-ci-glow)">
        <animate attributeName="r" values="13;15;13" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="158" cy="78" r="22" fill="none" stroke="#3b82f6" strokeOpacity="0.35" strokeWidth="1.5">
        <animate attributeName="r" values="20;28;20" dur="2.2s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0.5;0.15;0.5" dur="2.2s" repeatCount="indefinite" />
      </circle>

      {/* competitor nodes + data lines */}
      {[
        { cx: 52, cy: 36, delay: "0s" },
        { cx: 268, cy: 42, delay: "0.4s" },
        { cx: 44, cy: 118, delay: "0.8s" },
        { cx: 276, cy: 112, delay: "1.2s" },
      ].map((n, i) => (
        <g key={i}>
          <line x1="158" y1="78" x2={n.cx} y2={n.cy} stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="6 4" strokeLinecap="round">
            <animate attributeName="stroke-dashoffset" values="0;-40" dur="2.5s" begin={n.delay} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.35;0.85;0.35" dur="2.5s" begin={n.delay} repeatCount="indefinite" />
          </line>
          <rect x={n.cx - 14} y={n.cy - 10} width="28" height="20" rx="5" fill="#f1f5f9" stroke="#64748b" strokeWidth="1">
            <animate attributeName="stroke" values="#64748b;#3b82f6;#64748b" dur="3s" begin={n.delay} repeatCount="indefinite" />
          </rect>
          <circle cx={n.cx} cy={n.cy} r="3" fill="#475569">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" begin={n.delay} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      {/* mini comparative bars */}
      <g transform="translate(200 118)">
        {[0, 1, 2, 3].map((i) => {
          const h = 18 + i * 7
          const x = i * 14
          return (
            <rect key={i} x={x} y={28 - h} width="9" height={h} rx="2" fill="url(#ec-ci-grad-bar)" opacity={0.45 + i * 0.12}>
              <animate attributeName="height" values={`${h * 0.6};${h};${h * 0.6}`} dur="2.4s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
              <animate attributeName="y" values={`${28 - h * 0.6};${28 - h};${28 - h * 0.6}`} dur="2.4s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
            </rect>
          )
        })}
        <text x="28" y="42" textAnchor="middle" className="fill-slate-500" style={{ fontSize: "7px", fontFamily: "ui-monospace, monospace" }}>
          signal
        </text>
      </g>
    </svg>
  )
}

/** Quest path: stepped roadmap, progress dot, checkpoints toward goal */
function VentureQuestVisual() {
  return (
    <svg viewBox="0 0 320 168" className="w-full h-36 sm:h-40 max-h-[200px]" role="img" aria-hidden>
      <defs>
        <linearGradient id="ec-vq-grad-path" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="50%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
        <linearGradient id="ec-vq-grad-node" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
        <path id="ec-vq-motion-path" d="M 36 112 C 72 48 112 48 148 88 S 220 120 268 40" fill="none" />
      </defs>

      {/* soft trail under path */}
      <use href="#ec-vq-motion-path" stroke="#e2e8f0" strokeWidth="10" strokeLinecap="round" />

      {/* animated dash on journey line */}
      <path
        d="M 36 112 C 72 48 112 48 148 88 S 220 120 268 40"
        fill="none"
        stroke="url(#ec-vq-grad-path)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="32 240"
      >
        <animate attributeName="stroke-dashoffset" from="0" to="-272" dur="4s" repeatCount="indefinite" />
      </path>

      {/* quest stops */}
      {[
        { cx: 36, cy: 112, label: "1" },
        { cx: 120, cy: 64, label: "2" },
        { cx: 188, cy: 100, label: "3" },
        { cx: 268, cy: 40, label: "4" },
      ].map((s, i) => (
        <g key={s.label}>
          <circle cx={s.cx} cy={s.cy} r="16" fill="#fff" stroke="#cbd5e1" strokeWidth="2">
            <animate attributeName="stroke" values="#cbd5e1;#22c55e;#cbd5e1" dur="4s" begin={`${i * 0.9}s`} repeatCount="indefinite" />
          </circle>
          <circle cx={s.cx} cy={s.cy} r="11" fill={i === 3 ? "url(#ec-vq-grad-node)" : "#f8fafc"} stroke={i === 3 ? "#16a34a" : "#94a3b8"} strokeWidth="1.5">
            {i < 3 && (
              <animate attributeName="fill" values="#f8fafc;#dcfce7;#f8fafc" dur="4s" begin={`${i * 0.9}s`} repeatCount="indefinite" />
            )}
          </circle>
          <text
            x={s.cx}
            y={s.cy + 4}
            textAnchor="middle"
            className="fill-slate-600"
            style={{ fontSize: "11px", fontWeight: 700, fontFamily: "ui-sans-serif, system-ui" }}
          >
            {s.label}
          </text>
        </g>
      ))}

      {/* runner dot along path (above milestones so it stays visible) */}
      <circle r="6" fill="#0ea5e9" stroke="#fff" strokeWidth="2">
        <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
          <mpath href="#ec-vq-motion-path" xlinkHref="#ec-vq-motion-path" />
        </animateMotion>
      </circle>

      {/* goal flag */}
      <g transform="translate(272 24)">
        <path d="M 0 0 L 0 28" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
        <path d="M 0 4 L 22 12 L 0 20 Z" fill="#f97316">
          <animate attributeName="opacity" values="0.85;1;0.85" dur="2s" repeatCount="indefinite" />
        </path>
      </g>

      <text x="160" y="156" textAnchor="middle" className="fill-slate-500" style={{ fontSize: "8px", fontFamily: "ui-monospace, monospace" }}>
        idea → milestones → launch
      </text>
    </svg>
  )
}

export function EcosystemSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const products = [
    {
      title: "Competitor Intelligence",
      description:
        "Know exactly what your competitors are doing before they do it to you. Track their moves, spot gaps in the market, and make smarter decisions with real-time data.",
      icon: <CompetitorIntelligenceVisual />,
    },
    {
      title: "VentureQuests",
      description:
        "Your AI powered business guide. VentureQuests breaks down your goals into clear, actionable steps, so you always know what to do next to grow your business.",
      icon: <VentureQuestVisual />,
    },
  ]

  return (
    <section ref={sectionRef} id="ecosystem" className="relative min-h-0 sm:min-h-screen flex items-start justify-center pt-1 sm:pt-2 md:pt-4 pb-2 sm:pb-3 md:pb-4 lg:pb-8">
      <div className="container mx-auto mt-1 sm:mt-2 md:mt-4 lg:mt-6" style={{ maxWidth: '1440px', width: '100%' }}>
        <div
          className={`text-center mb-2 sm:mb-3 md:mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-bold text-slate-900 mb-1 sm:mb-2 md:mb-3" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)' }}>Features</h2>
          <p className="text-slate-600 max-w-3xl mx-auto" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.125rem)' }}>
            Competitor intelligence and AI guided steps, everything you need to grow in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`group relative rounded-2xl border border-blue-200/50 bg-white/40 backdrop-blur-md p-6 sm:p-8 transition-all duration-700 hover:border-blue-400/80 hover:bg-white/60 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/50 shadow-lg shadow-blue-500/5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 200 + 300}ms` }}
            >
              <div className="relative rounded-xl bg-slate-100/80 border border-blue-200/30 p-3 sm:p-4 mb-4 sm:mb-6 overflow-hidden">
                {product.icon}
              </div>

              <h3 className="font-bold text-slate-800 mb-3 sm:mb-4 text-center" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)' }}>{product.title}</h3>
              <p className="text-slate-600 text-center leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 1.1vw, 1rem)' }}>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
