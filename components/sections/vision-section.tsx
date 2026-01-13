"use client"

import { motion } from "framer-motion"

const visions = [
  {
    title: "Innovation",
    description:
      "At DreamScale, innovation isn't just about technology—it's about imagination. We believe in pushing boundaries and turning bold ideas into scalable realities. Our mission is to transform the way businesses operate through creative solutions.",
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
      "DreamScale isn't about short-term wins — it's about creating lasting change. From empowering businesses to reshaping industries, we're here to leave a mark that endures, helping people and organizations scale their dreams into a future that matters.",
    icon: "impact",
  },
]

function InnovationIcon() {
  return (
    <div className="w-full h-32 relative flex items-center justify-center">
      <svg viewBox="0 0 120 100" className="w-full h-full">
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2
          const x1 = 60 + Math.cos(angle) * 15
          const y1 = 50 + Math.sin(angle) * 15
          const x2 = 60 + Math.cos(angle) * 35
          const y2 = 50 + Math.sin(angle) * 35
          return (
            <motion.line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={i % 2 === 0 ? "#f472b6" : "#c084fc"}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
            />
          )
        })}
        <motion.path
          d="M 60 35 L 75 50 L 60 65 L 45 50 Z"
          fill="url(#innovationGradient)"
          initial={{ scale: 0, rotate: 45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          style={{ transformOrigin: "60px 50px" }}
        />
        {[
          { cx: 30, cy: 25, r: 3 },
          { cx: 90, cy: 30, r: 2 },
          { cx: 25, cy: 70, r: 2 },
          { cx: 95, cy: 75, r: 3 },
        ].map((particle, i) => (
          <motion.circle
            key={i}
            cx={particle.cx}
            cy={particle.cy}
            r={particle.r}
            fill={i % 2 === 0 ? "#a78bfa" : "#f9a8d4"}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 1, 0.6] }}
            transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
            viewport={{ once: true }}
          />
        ))}
        <defs>
          <linearGradient id="innovationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f9a8d4" />
            <stop offset="50%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function VisionExcellenceIcon() {
  return (
    <div className="w-full h-32 relative flex items-center justify-center">
      <svg viewBox="0 0 120 100" className="w-full h-full">
        <motion.path
          d="M 60 15 L 95 32 L 95 68 L 60 85 L 25 68 L 25 32 Z"
          fill="url(#visionExcellenceGradient)"
          stroke="#fbbf24"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ transformOrigin: "60px 50px" }}
        />
        <motion.path
          d="M 60 30 L 65 45 L 80 45 L 68 55 L 72 70 L 60 62 L 48 70 L 52 55 L 40 45 L 55 45 Z"
          fill="#fef3c7"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          style={{ transformOrigin: "60px 50px" }}
        />
        <defs>
          <linearGradient id="visionExcellenceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function ImpactIcon() {
  return (
    <div className="w-full h-32 relative flex items-center justify-center">
      <svg viewBox="0 0 120 100" className="w-full h-full">
        <motion.circle
          cx="60"
          cy="50"
          r="20"
          fill="url(#impactPlanetGradient)"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
        <motion.ellipse
          cx="60"
          cy="50"
          rx="38"
          ry="15"
          fill="none"
          stroke="url(#impactOrbitGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, rotate: -15 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          style={{ transformOrigin: "60px 50px" }}
          transform="rotate(-15 60 50)"
        />
        {[
          { cx: 25, cy: 45 },
          { cx: 95, cy: 55 },
        ].map((pos, i) => (
          <motion.circle
            key={i}
            cx={pos.cx}
            cy={pos.cy}
            r="4"
            fill="#67e8f9"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 1 + i * 0.2 }}
            viewport={{ once: true }}
          />
        ))}
        <defs>
          <radialGradient id="impactPlanetGradient" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="100%" stopColor="#0891b2" />
          </radialGradient>
          <linearGradient id="impactOrbitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
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
    <section id="vision" className="min-h-svh flex items-center justify-center relative py-20">
      <div className="container px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sentient font-bold text-slate-900">Our Vision</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {visions.map((vision, index) => (
            <motion.div
              key={vision.title}
              className="backdrop-blur-md bg-white/40 border border-blue-200/50 rounded-2xl p-8 hover:bg-white/60 hover:border-blue-300/60 transition-all duration-300 shadow-lg shadow-blue-500/5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <VisionIcon icon={vision.icon} />
              <h3 className="text-2xl font-sentient font-semibold text-slate-800 text-center mb-4 mt-4">
                {vision.title}
              </h3>
              <p className="text-slate-600 text-sm text-center leading-relaxed">{vision.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
