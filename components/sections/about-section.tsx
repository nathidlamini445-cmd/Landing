"use client"

import { motion } from "framer-motion"

const values = [
  {
    title: "A plan you can actually follow",
    description:
      "Stop guessing what to do next. DreamScale breaks goals into ordered steps, deadlines, and priorities so your week has structure, not a blank page.",
    icon: "plan",
  },
  {
    title: "Intel you'll use in real decisions",
    description:
      "Track competitors and market signals in one view. Know when to pivot, when to double down, and where the white space is before you burn runway.",
    icon: "intel",
  },
  {
    title: "One workspace, fewer tools",
    description:
      "Strategy, tasks, and context live together. Less copying and pasting between spreadsheets, docs, and random AI chats that forget your business.",
    icon: "workspace",
  },
  {
    title: "Built to show progress",
    description:
      "See momentum: what shipped, what moved the needle, and what’s stuck. Founders stay accountable when the work is visible, not buried in folders.",
    icon: "progress",
  },
]

function PlanIcon() {
  return (
    <div className="w-20 h-20 relative flex items-center justify-center">
      <svg viewBox="0 0 80 80" className="w-full h-full" aria-hidden>
        <defs>
          <linearGradient id="about-plan-grad" x1="0%" y1="0%" x2="100%" y2="100%">
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
              fill="url(#about-plan-grad)"
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

function IntelIcon() {
  return (
    <div className="w-20 h-20 relative flex items-center justify-center">
      <svg viewBox="0 0 80 80" className="w-full h-full" aria-hidden>
        <defs>
          <linearGradient id="about-intel-grad" x1="0%" y1="100%" x2="0%" y2="0%">
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
                fill="url(#about-intel-grad)"
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

function WorkspaceIcon() {
  return (
    <div className="w-20 h-20 relative flex items-center justify-center">
      <svg viewBox="0 0 80 80" className="w-full h-full" aria-hidden>
        <defs>
          <linearGradient id="about-ws-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <motion.rect
          x="10"
          y="22"
          width="48"
          height="36"
          rx="6"
          fill="white"
          stroke="#cbd5e1"
          strokeWidth="1.5"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        />
        <motion.rect
          x="22"
          y="14"
          width="48"
          height="36"
          rx="6"
          fill="url(#about-ws-grad)"
          stroke="#3b82f6"
          strokeWidth="1.5"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          viewport={{ once: true }}
        />
        <motion.rect
          x="18"
          y="30"
          width="44"
          height="30"
          rx="5"
          fill="#fff"
          stroke="#64748b"
          strokeWidth="1.5"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.22 }}
          viewport={{ once: true }}
        />
        <line x1="26" y1="40" x2="54" y2="40" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
        <line x1="26" y1="48" x2="46" y2="48" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  )
}

function ProgressIcon() {
  return (
    <div className="w-20 h-20 relative flex items-center justify-center">
      <svg viewBox="0 0 80 80" className="w-full h-full" aria-hidden>
        <defs>
          <linearGradient id="about-prog-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 12 52 Q 28 48 38 38 T 58 22 L 66 16"
          fill="none"
          stroke="url(#about-prog-grad)"
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

function ValueIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "plan":
      return <PlanIcon />
    case "intel":
      return <IntelIcon />
    case "workspace":
      return <WorkspaceIcon />
    case "progress":
      return <ProgressIcon />
    default:
      return null
  }
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-slate-50/60"
    >
      <div className="container" style={{ maxWidth: "1440px", width: "100%" }}>
        <motion.div
          className="mx-auto mb-12 sm:mb-14 md:mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-slate-500 mb-3">Why DreamScale</p>
          <h2
            className="font-display font-semibold tracking-tight text-slate-900"
            style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)", lineHeight: 1.15 }}
          >
            Less noise. More traction.
          </h2>
          <div
            className="mt-6 text-slate-600 leading-relaxed space-y-5"
            style={{ fontSize: "clamp(1rem, 1.2vw, 1.125rem)" }}
          >
            <p>
              Most founders don&apos;t fail from lack of ambition. They fail from scattered tools, fuzzy priorities, and
              competitor blind spots. DreamScale is built to fix that with product led workflows, not motivational
              posters.
            </p>
            <p>
              If you want a serious operating system for a serious business, you&apos;re in the right place.
            </p>
          </div>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
          style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="group rounded-2xl border border-slate-200/80 bg-white/85 p-6 sm:p-7 shadow-[0_1px_0_rgba(15,23,42,0.04),0_12px_40px_-24px_rgba(15,23,42,0.12)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[rgb(0,149,255)]/35 hover:shadow-[0_20px_50px_-24px_rgba(0,149,255,0.25)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="icon-card-glow mb-4 sm:mb-6 flex justify-center">
                <ValueIcon icon={value.icon} />
              </div>
              <h3 className="font-display font-semibold text-slate-800 text-center mb-3 sm:mb-4" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)' }}>{value.title}</h3>
              <p className="text-slate-600 text-center leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 1.1vw, 1rem)' }}>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
