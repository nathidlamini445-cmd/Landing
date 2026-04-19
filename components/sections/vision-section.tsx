"use client"

import { motion } from "framer-motion"

const visions = [
  {
    title: "Decide with evidence",
    description:
      "Replace gut feel with signals you can point to: competitor moves, benchmarks, and a single place to review what matters. Fewer meetings spent debating \"what if,\" more time executing what is already validated.",
    icon: "evidence",
  },
  {
    title: "Ship work that compounds",
    description:
      "DreamScale is built for operators who care about quality: clear ownership, repeatable workflows, and tools that do not break when the team grows. Reliable today, ready for tomorrow's volume.",
    icon: "ship",
  },
  {
    title: "Outcomes you can measure",
    description:
      "Tie effort to results: launches, revenue levers, milestones hit. When progress is visible, you scale with confidence instead of hoping the hustle eventually adds up.",
    icon: "measure",
  },
]

/** Signal bars + live node (same language as “Less noise” intel icon) */
function VisionEvidenceIcon() {
  return (
    <div className="w-20 h-20 relative flex items-center justify-center">
      <svg viewBox="0 0 80 80" className="w-full h-full" aria-hidden>
        <defs>
          <linearGradient id="vision-ev-grad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <g transform="translate(12, 14)">
          {[0, 1, 2, 3].map((i) => {
            const h = 12 + i * 8
            const x = i * 14
            return (
              <motion.rect
                key={i}
                x={x}
                y={44 - h}
                width="10"
                height={h}
                rx="2"
                fill="url(#vision-ev-grad)"
                initial={{ height: 0, y: 44 }}
                whileInView={{ height: h, y: 44 - h }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                viewport={{ once: true }}
              />
            )
          })}
        </g>
        <motion.circle
          cx="56"
          cy="22"
          r="8"
          fill="#eff6ff"
          stroke="#3b82f6"
          strokeWidth="2"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.35 }}
          viewport={{ once: true }}
        />
        <motion.circle
          cx="56"
          cy="22"
          r="3"
          fill="#3b82f6"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
      </svg>
    </div>
  )
}

/** Checklist + completion (same language as “plan” rows) */
function VisionShipIcon() {
  return (
    <div className="w-20 h-20 relative flex items-center justify-center">
      <svg viewBox="0 0 80 80" className="w-full h-full" aria-hidden>
        <defs>
          <linearGradient id="vision-sh-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(14, ${18 + i * 18})`}>
            <rect x="0" y="0" width="52" height="14" rx="4" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
            <motion.rect
              x="4"
              y="4"
              width="10"
              height="6"
              rx="2"
              fill="url(#vision-sh-grad)"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.35, delay: 0.15 + i * 0.12 }}
              viewport={{ once: true }}
              style={{ transformOrigin: "4px 7px" }}
            />
          </g>
        ))}
        <motion.path
          d="M 62 24 L 68 30 L 62 36"
          fill="none"
          stroke="#22c55e"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </svg>
    </div>
  )
}

/** Trend line + milestones (same language as “progress” trajectory) */
function VisionMeasureIcon() {
  return (
    <div className="w-20 h-20 relative flex items-center justify-center">
      <svg viewBox="0 0 80 80" className="w-full h-full" aria-hidden>
        <defs>
          <linearGradient id="vision-ms-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 12 52 Q 28 48 38 38 T 58 22 L 66 16"
          fill="none"
          stroke="url(#vision-ms-grad)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        />
        {[
          { cx: 24, cy: 50 },
          { cx: 42, cy: 36 },
          { cx: 62, cy: 20 },
        ].map((p, i) => (
          <motion.circle
            key={i}
            cx={p.cx}
            cy={p.cy}
            r="4"
            fill="#fff"
            stroke="#0ea5e9"
            strokeWidth="2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.35 + i * 0.15 }}
            viewport={{ once: true }}
          />
        ))}
        <motion.path
          d="M 58 18 L 66 16 L 64 24"
          fill="none"
          stroke="#22c55e"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          viewport={{ once: true }}
        />
      </svg>
    </div>
  )
}

function VisionIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "evidence":
      return <VisionEvidenceIcon />
    case "ship":
      return <VisionShipIcon />
    case "measure":
      return <VisionMeasureIcon />
    default:
      return null
  }
}

export function VisionSection() {
  return (
    <section id="vision" className="relative py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="container" style={{ maxWidth: "1440px", width: "100%" }}>
        <motion.div
          className="mx-auto mb-12 sm:mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-slate-500 mb-3">How we build</p>
          <h2
            className="font-display font-semibold tracking-tight text-slate-900"
            style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)", lineHeight: 1.15 }}
          >
            Built like the SaaS products you trust
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto" style={{ fontSize: "clamp(0.95rem, 1.15vw, 1.05rem)" }}>
            Straight talk, concrete features, and workflows that respect how busy you are.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
          style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}
        >
          {visions.map((vision, index) => (
            <motion.div
              key={vision.title}
              className="group rounded-2xl border border-slate-200/80 bg-white/80 p-6 sm:p-8 shadow-[0_1px_0_rgba(15,23,42,0.04),0_12px_40px_-24px_rgba(15,23,42,0.12)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[rgb(0,149,255)]/35 hover:shadow-[0_20px_50px_-24px_rgba(0,149,255,0.2)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="icon-card-glow mb-4 sm:mb-5 flex justify-center">
                <VisionIcon icon={vision.icon} />
              </div>
              <h3 className="font-display font-semibold text-slate-800 text-center mb-3 sm:mb-4" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)' }}>
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
