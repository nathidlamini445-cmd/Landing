"use client"

import { motion } from "framer-motion"

const values = [
  {
    title: "We stand for dreamers",
    description:
      "Those who refuse to settle, who see possibilities where others see limits. For us, every project is an opportunity to push boundaries, scale visions, and turn bold ideas into reality.",
    icon: "dreamers",
  },
  {
    title: "We stand for excellence",
    description:
      "Delivering quality, reliability, and innovation in everything we do. Our work is driven by creativity, precision, and a deep commitment to bringing our clients' visions to life.",
    icon: "excellence",
  },
  {
    title: "We stand for connection",
    description:
      "Building meaningful relationships with the people we serve. Our approach isn't just about products or services; it's about listening, understanding, and creating solutions that truly fit people's needs.",
    icon: "connection",
  },
  {
    title: "We stand for growth",
    description:
      "Not only for ourselves, but for every client, partner, and individual we work with. Growth is at the heart of our mission: scaling dreams, scaling businesses, and scaling futures.",
    icon: "growth",
  },
]

function DreamersIcon() {
  return (
    <div className="w-20 h-20 relative">
      <svg viewBox="0 0 80 80" className="w-full h-full">
        {[...Array(12)].map((_, i) => {
          const angle = (i / 12) * Math.PI * 2
          const radius = 25 + (i % 3) * 5
          const cx = Math.round((40 + Math.cos(angle) * radius) * 100) / 100
          const cy = Math.round((40 + Math.sin(angle) * radius) * 100) / 100
          return (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r={2 + (i % 3)}
              fill={`rgba(167, 139, 250, ${0.3 + (i % 4) * 0.2})`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
            />
          )
        })}
        <motion.circle
          cx="40"
          cy="40"
          r="12"
          fill="url(#dreamersGradient)"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
        <motion.circle
          cx="40"
          cy="40"
          r="16"
          fill="none"
          stroke="rgba(167, 139, 250, 0.3)"
          strokeWidth="1"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
        <defs>
          <radialGradient id="dreamersGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c4b5fd" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </radialGradient>
        </defs>
      </svg>
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      />
    </div>
  )
}

function ExcellenceIcon() {
  return (
    <div className="w-20 h-20 relative">
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <motion.path
          d="M 40 10 L 65 40 L 40 70 L 15 40 Z"
          fill="none"
          stroke="url(#excellenceGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        <motion.path
          d="M 40 18 L 58 40 L 40 62 L 22 40 Z"
          fill="url(#excellenceFill)"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        />
        {[
          { x: 40, y: 10 },
          { x: 65, y: 40 },
          { x: 40, y: 70 },
          { x: 15, y: 40 },
        ].map((pos, i) => (
          <motion.circle
            key={i}
            cx={pos.x}
            cy={pos.y}
            r="3"
            fill="#22d3ee"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
            viewport={{ once: true }}
          />
        ))}
        <defs>
          <linearGradient id="excellenceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="excellenceFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(34, 211, 238, 0.3)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0.1)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function ConnectionIcon() {
  return (
    <div className="w-20 h-20 relative">
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <motion.line
          x1="20"
          y1="25"
          x2="40"
          y2="40"
          stroke="url(#connectionLineGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
        <motion.line
          x1="40"
          y1="40"
          x2="60"
          y2="25"
          stroke="url(#connectionLineGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        />
        <motion.line
          x1="40"
          y1="40"
          x2="25"
          y2="60"
          stroke="url(#connectionLineGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        />
        <motion.line
          x1="40"
          y1="40"
          x2="55"
          y2="60"
          stroke="url(#connectionLineGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        />
        {[
          { cx: 40, cy: 40, r: 8, delay: 0 },
          { cx: 20, cy: 25, r: 5, delay: 0.3 },
          { cx: 60, cy: 25, r: 5, delay: 0.5 },
          { cx: 25, cy: 60, r: 5, delay: 0.7 },
          { cx: 55, cy: 60, r: 5, delay: 0.9 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="url(#connectionNodeGradient)"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: node.delay }}
            viewport={{ once: true }}
          />
        ))}
        <defs>
          <linearGradient id="connectionLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <radialGradient id="connectionNodeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fbcfe8" />
            <stop offset="100%" stopColor="#ec4899" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

function GrowthIcon() {
  return (
    <div className="w-20 h-20 relative">
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <motion.path
          d="M 10 65 Q 25 55 35 50 T 55 35 T 75 15"
          fill="none"
          stroke="url(#growthWaveGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        />
        {[
          { cx: 15, cy: 60, delay: 0.3 },
          { cx: 35, cy: 50, delay: 0.6 },
          { cx: 55, cy: 35, delay: 0.9 },
          { cx: 70, cy: 20, delay: 1.2 },
        ].map((point, i) => (
          <motion.circle
            key={i}
            cx={point.cx}
            cy={point.cy}
            r="4"
            fill="url(#growthPointGradient)"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3, delay: point.delay }}
            viewport={{ once: true }}
          />
        ))}
        <motion.polygon
          points="70,12 78,18 72,24"
          fill="#fb923c"
          initial={{ opacity: 0, x: -5 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 1.3 }}
          viewport={{ once: true }}
        />
        <defs>
          <linearGradient id="growthWaveGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fdba74" />
            <stop offset="100%" stopColor="#fb923c" />
          </linearGradient>
          <radialGradient id="growthPointGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fed7aa" />
            <stop offset="100%" stopColor="#fb923c" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

function ValueIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "dreamers":
      return <DreamersIcon />
    case "excellence":
      return <ExcellenceIcon />
    case "connection":
      return <ConnectionIcon />
    case "growth":
      return <GrowthIcon />
    default:
      return null
  }
}

export function AboutSection() {
  return (
    <section id="about" className="min-h-0 sm:min-h-svh flex items-center justify-center relative py-4 sm:py-8 md:py-12 lg:py-20">
      <div className="container px-4 sm:px-6">
        <motion.div
          className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sentient font-bold text-slate-900 mb-4 sm:mb-6 px-4">
            What are we really about
          </h2>
          <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed px-4">
            At DreamScale, we stand for more than just building solutions — we stand for dreams, innovation, and
            transformation. We believe technology should not only solve problems but also inspire growth, unlock
            potential, and create lasting impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="backdrop-blur-md bg-white/40 border border-blue-200/50 rounded-2xl p-5 sm:p-6 hover:bg-white/60 hover:border-blue-300/60 transition-all duration-300 group shadow-lg shadow-blue-500/5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 sm:mb-6 flex justify-center">
                <ValueIcon icon={value.icon} />
              </div>
              <h3 className="text-lg sm:text-xl font-sentient font-semibold text-slate-800 text-center mb-3 sm:mb-4">{value.title}</h3>
              <p className="text-slate-600 text-xs sm:text-sm text-center leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
