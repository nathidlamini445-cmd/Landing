"use client"

import { useEffect, useRef, useState } from "react"

function DreamPulseIcon() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-32">
      <defs>
        <linearGradient id="pulseGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
        <linearGradient id="pulseGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
        <linearGradient id="pulseGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>

      <line x1="35" y1="35" x2="100" y2="60" stroke="url(#pulseGradient2)" strokeWidth="2" strokeLinecap="round">
        <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="2s" repeatCount="indefinite" />
      </line>
      <line x1="100" y1="60" x2="165" y2="35" stroke="url(#pulseGradient2)" strokeWidth="2" strokeLinecap="round">
        <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="2s" begin="0.3s" repeatCount="indefinite" />
      </line>
      <line x1="35" y1="85" x2="100" y2="60" stroke="url(#pulseGradient2)" strokeWidth="2" strokeLinecap="round">
        <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="2s" begin="0.6s" repeatCount="indefinite" />
      </line>
      <line x1="100" y1="60" x2="165" y2="85" stroke="url(#pulseGradient2)" strokeWidth="2" strokeLinecap="round">
        <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="2s" begin="0.9s" repeatCount="indefinite" />
      </line>

      <rect x="20" y="20" width="30" height="30" rx="4" fill="url(#pulseGradient1)">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="20" y="70" width="30" height="30" rx="4" fill="url(#pulseGradient1)">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </rect>
      <rect x="150" y="20" width="30" height="30" rx="4" fill="url(#pulseGradient3)">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="1s" repeatCount="indefinite" />
      </rect>
      <rect x="150" y="70" width="30" height="30" rx="4" fill="url(#pulseGradient3)">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="1.5s" repeatCount="indefinite" />
      </rect>

      <circle cx="100" cy="60" r="8" fill="url(#pulseGradient2)">
        <animate attributeName="r" values="6;10;6" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

function HypeOSIcon() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-32">
      <defs>
        <linearGradient id="hypeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#4ade80" />
        </linearGradient>
        <linearGradient id="hypeGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
        <linearGradient id="hypeGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>

      <line x1="100" y1="60" x2="40" y2="40" stroke="#475569" strokeWidth="2" strokeDasharray="4 2" />
      <line x1="100" y1="60" x2="160" y2="40" stroke="#475569" strokeWidth="2" strokeDasharray="4 2" />
      <line x1="100" y1="60" x2="40" y2="80" stroke="#475569" strokeWidth="2" strokeDasharray="4 2" />
      <line x1="100" y1="60" x2="160" y2="80" stroke="#475569" strokeWidth="2" strokeDasharray="4 2" />

      <rect x="25" y="28" width="30" height="24" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="1" />
      <rect x="145" y="28" width="30" height="24" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="1" />
      <rect x="25" y="68" width="30" height="24" rx="4" fill="url(#hypeGradient2)" />
      <rect x="145" y="68" width="30" height="24" rx="4" fill="url(#hypeGradient3)" />

      <circle cx="100" cy="60" r="20" fill="#1e293b" stroke="url(#hypeGradient1)" strokeWidth="2">
        <animate attributeName="stroke-width" values="2;3;2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="60" r="10" fill="url(#hypeGradient1)">
        <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
      </circle>

      <circle cx="70" cy="50" r="3" fill="url(#hypeGradient1)">
        <animate attributeName="cx" values="70;45;70" dur="2s" repeatCount="indefinite" />
        <animate attributeName="cy" values="50;42;50" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="130" cy="50" r="3" fill="url(#hypeGradient3)">
        <animate attributeName="cx" values="130;155;130" dur="2s" begin="0.5s" repeatCount="indefinite" />
        <animate attributeName="cy" values="50;42;50" dur="2s" begin="0.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
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
        "The heartbeat of your business intelligence. Competitor Intelligence connects all your data streams, creating a unified pulse that flows through every aspect of your organization. Experience real-time insights that adapt and evolve with your business rhythm.",
      icon: <DreamPulseIcon />,
    },
    {
      title: "VentureQuests",
      description:
        "Your intelligent operating system for the future. VentureQuests orchestrates every process, automates complex workflows, and creates seamless experiences across all touchpoints. It's not just software—it's the foundation that powers your digital transformation.",
      icon: <HypeOSIcon />,
    },
  ]

  return (
    <section ref={sectionRef} id="ecosystem" className="relative min-h-screen flex items-start justify-center pt-8 pb-24">
      <div className="container mx-auto px-6 mt-16">
        <div
          className={`text-center mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Introducing Our EcoSystem</h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            While DreamScale is much bigger than any one feature, these two are the heart of DreamScale:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`group relative rounded-2xl border border-blue-200/50 bg-white/40 backdrop-blur-md p-8 transition-all duration-700 hover:border-blue-300/60 hover:bg-white/60 shadow-lg shadow-blue-500/5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 200 + 300}ms` }}
            >
              <div className="relative rounded-xl bg-slate-100/80 border border-blue-200/30 p-4 mb-6 overflow-hidden">
                {product.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">{product.title}</h3>
              <p className="text-slate-600 text-center leading-relaxed">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
