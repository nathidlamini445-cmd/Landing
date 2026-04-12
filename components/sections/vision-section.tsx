"use client"

import { motion } from "framer-motion"

const visions = [
  {
    title: "Innovation",
    description:
      "At DreamScale, innovation isn't just about technology, it's about imagination. We believe in pushing boundaries and turning bold ideas into scalable realities. Our mission is to transform the way businesses operate through creative solutions.",
    icon: "innovation",
  },
  {
    title: "Excellence",
    description:
      "Delivering quality, reliability, and innovation in everything we do. Our work is driven by creativity, precision, and a deep commitment to bringing our clients' visions to life with uncompromising standards.",
    icon: "excellence",
  },
  {
    title: "Impact",
    description:
      "DreamScale isn't about short term wins, it's about creating lasting change. From empowering businesses to reshaping industries, we're here to leave a mark that endures, helping people and organizations scale their dreams into a future that matters.",
    icon: "impact",
  },
]

/** Diamond + eight rays (cardinal long, diagonal short), slow pulse & gentle spin */
function InnovationIcon() {
  const cx = 140
  const cy = 80
  const rays = [
    ...[0, 90, 180, 270].map((deg, i) => ({
      deg: (deg * Math.PI) / 180,
      len: 52,
      delay: `${i * 0.2}s`,
      stroke: "#e879f9",
    })),
    ...[45, 135, 225, 315].map((deg, i) => ({
      deg: (deg * Math.PI) / 180,
      len: 32,
      delay: `${i * 0.15 + 0.1}s`,
      stroke: "#c084fc",
    })),
  ]
  return (
    <div className="w-full flex items-center justify-center">
      <svg viewBox="0 0 280 160" className="w-full h-36 sm:h-40 max-h-[200px]" role="img" aria-hidden>
        <defs>
          <linearGradient id="vision-inv-diamond" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f9a8d4" />
            <stop offset="45%" stopColor="#d946ef" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
          <filter id="vision-inv-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g>
          <animateTransform attributeName="transform" type="rotate" values="-4 140 80;4 140 80;-4 140 80" dur="10s" repeatCount="indefinite" />
          {rays.map((r, i) => {
            const x1 = cx + Math.cos(r.deg) * 22
            const y1 = cy + Math.sin(r.deg) * 22
            const x2 = cx + Math.cos(r.deg) * r.len
            const y2 = cy + Math.sin(r.deg) * r.len
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={r.stroke} strokeWidth="2.2" strokeLinecap="round">
                <animate attributeName="opacity" values="0.45;1;0.45" dur="2.4s" begin={r.delay} repeatCount="indefinite" />
                <animate attributeName="stroke-width" values="1.8;2.6;1.8" dur="2.4s" begin={r.delay} repeatCount="indefinite" />
              </line>
            )
          })}
          <path
            d={`M ${cx} ${cy - 20} L ${cx + 20} ${cy} L ${cx} ${cy + 20} L ${cx - 20} ${cy} Z`}
            fill="url(#vision-inv-diamond)"
            filter="url(#vision-inv-glow)"
          >
            <animateTransform attributeName="transform" type="rotate" from={`0 ${cx} ${cy}`} to={`360 ${cx} ${cy}`} dur="28s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.92;1;0.92" dur="3s" repeatCount="indefinite" />
          </path>
        </g>
        {/* distant sparks */}
        {[
          { x: 48, y: 38 },
          { x: 228, y: 44 },
          { x: 56, y: 118 },
          { x: 232, y: 108 },
        ].map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="2.5" fill={i % 2 === 0 ? "#f0abfc" : "#a5b4fc"}>
            <animate attributeName="opacity" values="0.2;0.95;0.2" dur="2.8s" begin={`${i * 0.35}s`} repeatCount="indefinite" />
            <animate attributeName="r" values="1.5;3;1.5" dur="2.8s" begin={`${i * 0.35}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
    </div>
  )
}

/** Hex badge + white star, gentle hover bounce + shine sweep */
function VisionExcellenceIcon() {
  const hx = 140
  const hy = 80
  const r = 46
  const pts = [...Array(6)].map((_, i) => {
    const a = (-90 + i * 60) * (Math.PI / 180)
    return `${hx + r * Math.cos(a)},${hy + r * Math.sin(a)}`
  })
  const hexD = `M ${pts.join(" L ")} Z`
  const starD =
    "M 140 52 L 146.2 69.8 L 165 71.5 L 151 83.5 L 155.5 102 L 140 92.5 L 124.5 102 L 129 83.5 L 115 71.5 L 133.8 69.8 Z"
  return (
    <div className="w-full flex items-center justify-center">
      <svg viewBox="0 0 280 160" className="w-full h-36 sm:h-40 max-h-[200px]" role="img" aria-hidden>
        <defs>
          <linearGradient id="vision-exc-hex" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="55%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          <clipPath id="vision-exc-star-clip">
            <path d={starD} />
          </clipPath>
          <linearGradient id="vision-exc-shine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g>
          <animateTransform attributeName="transform" type="translate" values="0 0;0 -3;0 0" dur="3.2s" repeatCount="indefinite" />
          <path d={hexD} fill="url(#vision-exc-hex)" stroke="#f59e0b" strokeWidth="2.5" strokeLinejoin="round">
            <animate attributeName="stroke-opacity" values="0.75;1;0.75" dur="3.2s" repeatCount="indefinite" />
          </path>
          <path d={starD} fill="#fffef7" stroke="#fef3c7" strokeWidth="1">
            <animate attributeName="opacity" values="0.95;1;0.95" dur="2.5s" repeatCount="indefinite" />
          </path>
        </g>
        <g clipPath="url(#vision-exc-star-clip)">
          <rect x="60" y="40" width="160" height="90" fill="url(#vision-exc-shine)">
            <animate attributeName="x" values="30;250;30" dur="3.8s" repeatCount="indefinite" />
          </rect>
        </g>
      </svg>
    </div>
  )
}

/** Teal sphere + tilted ring, ring orbits + planet floats */
function ImpactIcon() {
  const px = 140
  const py = 80
  return (
    <div className="w-full flex items-center justify-center">
      <svg viewBox="0 0 280 160" className="w-full h-36 sm:h-40 max-h-[200px]" role="img" aria-hidden>
        <defs>
          <radialGradient id="vision-imp-planet" cx="32%" cy="28%" r="72%">
            <stop offset="0%" stopColor="#cffafe" />
            <stop offset="45%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#0e7490" />
          </radialGradient>
          <linearGradient id="vision-imp-ring" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.35" />
            <stop offset="35%" stopColor="#a5f3fc" stopOpacity="0.95" />
            <stop offset="65%" stopColor="#22d3ee" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
          </linearGradient>
          <filter id="vision-imp-soft" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" />
          </filter>
        </defs>
        <g transform={`translate(${px} ${py})`}>
          <g>
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="14s" repeatCount="indefinite" />
            <ellipse cx="0" cy="0" rx="76" ry="26" fill="none" stroke="url(#vision-imp-ring)" strokeWidth="2.5" transform="rotate(-20)" opacity="0.5" />
          </g>
          <g>
            <animateTransform attributeName="transform" type="translate" values="0,-4;0,4;0,-4" dur="4s" repeatCount="indefinite" />
            <circle cx="0" cy="0" r="32" fill="url(#vision-imp-planet)" />
            <ellipse cx="0" cy="-4" rx="68" ry="11" fill="#155e75" opacity="0.24" transform="rotate(-18)" />
          </g>
          <g>
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="14s" repeatCount="indefinite" />
            <ellipse cx="0" cy="0" rx="76" ry="26" fill="none" stroke="url(#vision-imp-ring)" strokeWidth="3" transform="rotate(-20)" />
          </g>
        </g>
        {[
          { x: 52, y: 44, delay: "0s" },
          { x: 218, y: 52, delay: "0.6s" },
          { x: 64, y: 104, delay: "1.1s" },
        ].map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r="3" fill="#a5f3fc" filter="url(#vision-imp-soft)">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2.6s" begin={s.delay} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
    </div>
  )
}

function VisionIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "innovation":
      return <InnovationIcon />
    case "excellence":
      return <VisionExcellenceIcon />
    case "impact":
      return <ImpactIcon />
    default:
      return null
  }
}

export function VisionSection() {
  return (
    <section id="vision" className="min-h-0 sm:min-h-svh flex items-center justify-center relative py-1 sm:py-2 md:py-4 lg:py-8">
      <div className="container" style={{ maxWidth: '1440px', width: '100%' }}>
        <motion.div
          className="text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-sentient font-bold text-slate-900" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)' }}>Our Vision</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          {visions.map((vision, index) => (
            <motion.div
              key={vision.title}
              className="backdrop-blur-md bg-white/40 border border-blue-200/50 rounded-2xl p-6 sm:p-8 hover:bg-white/60 hover:border-blue-400/80 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/50 transition-all duration-300 shadow-lg shadow-blue-500/5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <VisionIcon icon={vision.icon} />
              <h3 className="font-sentient font-semibold text-slate-800 text-center mb-3 sm:mb-4 mt-3 sm:mt-4" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)' }}>
                {vision.title}
              </h3>
              <p className="text-slate-600 text-center leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 1.1vw, 1rem)' }}>{vision.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
