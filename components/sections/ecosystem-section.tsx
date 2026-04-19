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
        idea, milestones, launch
      </text>
    </svg>
  )
}

/** Bizora: conversational AI for business (chat panel, streaming reply, context doc) */
function BizoraAIVisual() {
  return (
    <svg viewBox="0 0 320 168" className="w-full h-36 sm:h-40 max-h-[200px]" role="img" aria-hidden>
      <defs>
        <linearGradient id="ec-biz-grad-header" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="100%" stopColor="#dbeafe" />
        </linearGradient>
        <linearGradient id="ec-biz-grad-bubble" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="ec-biz-grad-stream" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.2" />
        </linearGradient>
        <filter id="ec-biz-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* app chrome */}
      <rect x="24" y="16" width="272" height="136" rx="14" fill="#fff" stroke="#e2e8f0" strokeWidth="1.5" />
      <rect x="24" y="16" width="272" height="34" rx="14" fill="url(#ec-biz-grad-header)" />
      <rect x="24" y="36" width="272" height="14" fill="url(#ec-biz-grad-header)" />
      <circle cx="44" cy="33" r="5" fill="#22c55e">
        <animate attributeName="opacity" values="0.65;1;0.65" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="56" y="37" className="fill-slate-700" style={{ fontSize: "11px", fontWeight: 700, fontFamily: "ui-sans-serif, system-ui" }}>
        Bizora AI
      </text>

      {/* context doc icon */}
      <g transform="translate(246 24)">
        <rect x="0" y="0" width="22" height="26" rx="3" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1" />
        <line x1="5" y1="8" x2="17" y2="8" stroke="#cbd5e1" strokeWidth="1.2" />
        <line x1="5" y1="13" x2="15" y2="13" stroke="#cbd5e1" strokeWidth="1.2" />
        <line x1="5" y1="18" x2="14" y2="18" stroke="#cbd5e1" strokeWidth="1.2" />
      </g>

      {/* user message */}
      <rect x="40" y="58" width="132" height="28" rx="10" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1" />
      <text x="52" y="76" className="fill-slate-600" style={{ fontSize: "9px", fontFamily: "ui-sans-serif, system-ui" }}>
        What should we prioritize Q2?
      </text>

      {/* AI reply panel */}
      <rect x="118" y="96" width="162" height="44" rx="12" fill="#eff6ff" stroke="url(#ec-biz-grad-bubble)" strokeWidth="1.5" filter="url(#ec-biz-glow)">
        <animate attributeName="stroke-opacity" values="0.65;1;0.65" dur="2.8s" repeatCount="indefinite" />
      </rect>
      {/* streaming shimmer */}
      <rect x="126" y="104" width="120" height="6" rx="3" fill="#e2e8f0" opacity="0.85">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="1.6s" repeatCount="indefinite" />
      </rect>
      <rect x="126" y="104" width="48" height="6" rx="3" fill="url(#ec-biz-grad-stream)">
        <animate attributeName="width" values="24;100;48" dur="2.2s" repeatCount="indefinite" />
      </rect>
      <rect x="126" y="116" width="92" height="6" rx="3" fill="#e2e8f0" opacity="0.7" />
      <rect x="126" y="116" width="72" height="6" rx="3" fill="url(#ec-biz-grad-stream)">
        <animate attributeName="width" values="20;92;36" dur="2.6s" begin="0.3s" repeatCount="indefinite" />
      </rect>
      {/* cursor */}
      <rect x="202" y="114" width="2" height="10" fill="#3b82f6" rx="0.5">
        <animate attributeName="opacity" values="1;0.2;1" dur="0.9s" repeatCount="indefinite" />
      </rect>

      {/* connector: AI to doc */}
      <path d="M 246 70 L 257 70 L 257 50" fill="none" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 3">
        <animate attributeName="stroke-dashoffset" values="0;-14" dur="1.8s" repeatCount="indefinite" />
      </path>

      {/* typing dots (mini) */}
      <g transform="translate(134 128)">
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={i * 10} cy="0" r="2.5" fill="#64748b">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </g>

      <text x="160" y="160" textAnchor="middle" className="fill-slate-500" style={{ fontSize: "8px", fontFamily: "ui-monospace, monospace" }}>
        ask, context aware answer, next step
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
        "Drop in your competitors' links, their site, YouTube, or wherever they show up online. DreamScale reads what they are doing and comes back with concrete strategies to outmaneuver them, including how they may be running their funnel, content, or stack, and where you can win with a smarter play.",
      icon: <CompetitorIntelligenceVisual />,
    },
    {
      title: "VentureQuests",
      description:
        "A daily practice loop for founders. Show up every day, complete the missions and checks the AI assigns, and keep your streak alive so momentum never slips. You always know today’s move, and the habit of showing up becomes the engine that moves the company forward.",
      icon: <VentureQuestVisual />,
    },
    {
      title: "Bizora AI",
      description:
        "An assistant that speaks business, not generic internet advice. Ask about positioning, cash flow tradeoffs, hiring order, or your go to market, and get answers tied to how you work.",
      icon: <BizoraAIVisual />,
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="ecosystem"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-slate-50/60"
    >
      <div className="container mx-auto" style={{ maxWidth: "1440px", width: "100%" }}>
        <div
          className={`mx-auto max-w-3xl text-center mb-14 sm:mb-16 md:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-slate-500 mb-3">Product</p>
          <h2
            className="font-display font-semibold tracking-tight text-slate-900"
            style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)", lineHeight: 1.15 }}
          >
            Everything to run leaner and move faster
          </h2>
          <p
            className="mt-5 text-slate-600 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(1rem, 1.2vw, 1.125rem)" }}
          >
            Market intel, guided execution, and Bizora AI in one stack, so “get started free” actually gets you working,
            not learning another empty workspace.
          </p>
        </div>

        <div className="flex flex-col gap-14 sm:gap-16 md:gap-20" style={{ maxWidth: "1120px", margin: "0 auto", width: "100%" }}>
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`flex flex-col gap-8 lg:gap-12 lg:flex-row lg:items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              } transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 200 + 300}ms` }}
            >
              <div className="lg:w-1/2 w-full">
                <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-6 shadow-[0_20px_60px_-28px_rgba(15,23,42,0.18)]">
                  <div className="rounded-xl bg-gradient-to-b from-slate-50 to-white p-3 sm:p-4 ring-1 ring-slate-200/60">
                    {product.icon}
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full text-center lg:text-left">
                <h3
                  className="font-display font-semibold text-slate-900 mb-4"
                  style={{ fontSize: "clamp(1.35rem, 2.4vw, 2rem)", lineHeight: 1.2 }}
                >
                  {product.title}
                </h3>
                <p className="text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0" style={{ fontSize: "clamp(1rem, 1.15vw, 1.125rem)" }}>
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
