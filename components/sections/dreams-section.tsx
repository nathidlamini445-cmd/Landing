"use client"

import { motion } from "framer-motion"

const pillars = [
  {
    title: "Start with clarity",
    description:
      "On day one you get structure: goals, context, and a prioritized backlog, not a blank canvas. Know what to ignore so you can focus on the few moves that actually move revenue.",
    icon: "clarity",
  },
  {
    title: "Execute without chaos",
    description:
      "VentureQuests, Bizora AI, and competitor intel live in one flow. Fewer context switches mean faster shipping and fewer moments when no one remembers where the note lived.",
    icon: "execute",
  },
  {
    title: "Prove it with numbers",
    description:
      "Track milestones and market signals side by side. When investors, partners, or your team ask how it is going, you answer with specifics and data instead of vibes alone.",
    icon: "numbers",
  },
] as const

/** Focus rings tightening on a clear center */
function ClarityIcon() {
  return (
    <div className="w-20 h-20 relative flex items-center justify-center">
      <svg viewBox="0 0 80 80" className="w-full h-full" aria-hidden>
        <defs>
          <linearGradient id="dream-clarity-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        {[28, 20, 12].map((r, i) => (
          <motion.circle
            key={r}
            cx="40"
            cy="40"
            r={r}
            fill="none"
            stroke="url(#dream-clarity-grad)"
            strokeWidth={i === 2 ? 2.5 : 1.2}
            strokeOpacity={0.35 + i * 0.2}
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            viewport={{ once: true }}
          />
        ))}
        <motion.circle
          cx="40"
          cy="40"
          r="6"
          fill="url(#dream-clarity-grad)"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 320, damping: 20, delay: 0.35 }}
          viewport={{ once: true }}
        />
        <motion.circle
          cx="40"
          cy="40"
          r="10"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="1.5"
          strokeOpacity={0.5}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.2, 0.5] }}
          transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY }}
        />
      </svg>
    </div>
  )
}

/** Three nodes in a smooth left to right flow */
function ExecuteIcon() {
  return (
    <div className="w-20 h-20 relative flex items-center justify-center">
      <svg viewBox="0 0 80 80" className="w-full h-full" aria-hidden>
        <defs>
          <linearGradient id="dream-exec-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 16 44 C 28 28 36 28 48 44 S 62 60 64 44"
          fill="none"
          stroke="url(#dream-exec-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        />
        {[
          { cx: 16, cy: 44 },
          { cx: 40, cy: 32 },
          { cx: 64, cy: 44 },
        ].map((p, i) => (
          <motion.g key={i}>
            <motion.circle
              cx={p.cx}
              cy={p.cy}
              r="8"
              fill="#fff"
              stroke="#0ea5e9"
              strokeWidth="2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.25 + i * 0.15, type: "spring", stiffness: 260, damping: 18 }}
              viewport={{ once: true }}
            />
            <motion.circle
              cx={p.cx}
              cy={p.cy}
              r="3.5"
              fill="#22c55e"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, delay: i * 0.25 }}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  )
}

/** Bars rising toward a target line */
function NumbersIcon() {
  return (
    <div className="w-20 h-20 relative flex items-center justify-center">
      <svg viewBox="0 0 80 80" className="w-full h-full" aria-hidden>
        <defs>
          <linearGradient id="dream-num-grad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <motion.line
          x1="10"
          y1="24"
          x2="70"
          y2="24"
          stroke="#cbd5e1"
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        />
        <g transform="translate(14, 28)">
          {[0, 1, 2, 3].map((i) => {
            const h = 10 + i * 9
            const x = i * 14
            return (
              <motion.rect
                key={i}
                x={x}
                y={48 - h}
                width="10"
                height={h}
                rx="2"
                fill="url(#dream-num-grad)"
                initial={{ height: 0, y: 48 }}
                whileInView={{ height: h, y: 48 - h }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                viewport={{ once: true }}
              />
            )
          })}
        </g>
        <motion.path
          d="M 58 18 L 64 14 L 64 22"
          fill="none"
          stroke="#22c55e"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0, y: 4 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          viewport={{ once: true }}
        />
      </svg>
    </div>
  )
}

function PillarIcon({ kind }: { kind: (typeof pillars)[number]["icon"] }) {
  switch (kind) {
    case "clarity":
      return <ClarityIcon />
    case "execute":
      return <ExecuteIcon />
    case "numbers":
      return <NumbersIcon />
    default:
      return null
  }
}

export function DreamsSection() {
  return (
    <section id="dreams" className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-slate-50/60">
      <div className="container mx-auto" style={{ maxWidth: "1440px", width: "100%" }}>
        <motion.div
          className="text-center mb-12 sm:mb-14 md:mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-slate-500 mb-3">The playbook</p>
          <h2
            className="font-display font-semibold tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)", lineHeight: 1.15 }}
          >
            <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">
              From idea to operating rhythm
            </span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto" style={{ fontSize: "clamp(0.95rem, 1.15vw, 1.05rem)" }}>
            The same discipline top SaaS teams use, packaged for founders who need results this quarter.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
          style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              className="group rounded-2xl border border-slate-200/80 bg-white/85 p-6 sm:p-8 shadow-[0_1px_0_rgba(15,23,42,0.04),0_12px_40px_-24px_rgba(15,23,42,0.12)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[rgb(0,149,255)]/35 hover:shadow-[0_20px_50px_-24px_rgba(0,149,255,0.2)]"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="icon-card-glow mb-4 sm:mb-5 flex justify-center">
                <PillarIcon kind={pillar.icon} />
              </div>
              <h3
                className="font-display font-semibold text-slate-900 mb-4 text-center"
                style={{ fontSize: "clamp(1.2rem, 2vw, 1.65rem)" }}
              >
                {pillar.title}
              </h3>
              <p className="text-slate-600 text-center leading-relaxed" style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)" }}>
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
