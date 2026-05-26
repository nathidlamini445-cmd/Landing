"use client"

import { motion } from "framer-motion"

const values = [
  {
    title: "One place for everything",
    description:
      "No more jumping between 12 apps every morning. Your whole business lives in one screen.",
    icon: "workspace",
  },
  {
    title: "It remembers what you told it",
    description:
      "Set up once and it knows your goals, your team, and your numbers. No repeating yourself.",
    icon: "brain",
  },
  {
    title: "Real numbers, not guesswork",
    description:
      "Your revenue, targets, and progress sit side by side so you always know where you stand.",
    icon: "chart",
  },
  {
    title: "Take care of your team",
    description:
      "See how your people are doing before small problems become big ones. Happy teams ship faster.",
    icon: "people",
  },
]

const painPoints = [
  "You pay for more tools but nothing talks to each other.",
  "Monday's plan falls apart because no one knows who's doing what.",
  "Your real numbers live in ten different tabs and nobody trusts them.",
]

function PainList() {
  return (
    <ul className="mx-auto mb-12 w-fit space-y-4">
      {painPoints.map((point) => (
        <motion.li
          key={point}
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          viewport={{ once: true, amount: 0 }}
          className="flex items-start gap-3 text-slate-700 text-[clamp(1rem,1.8vw,1.125rem)] leading-snug"
        >
          <span className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full bg-[rgb(0,149,255)]" aria-hidden />
          <span>{point}</span>
        </motion.li>
      ))}
    </ul>
  )
}

function ValueIcon({ icon }: { icon: string }) {
  const base = "w-14 h-14 rounded-2xl flex items-center justify-center border shadow-sm"

  switch (icon) {
    case "workspace":
      return (
        <div className={`${base} bg-blue-50 border-blue-100`}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect x="3" y="3" width="7" height="7" rx="2" />
            <rect x="14" y="3" width="7" height="7" rx="2" />
            <rect x="3" y="14" width="7" height="7" rx="2" />
            <rect x="14" y="14" width="7" height="7" rx="2" fill="#3b82f6" fillOpacity="0.15" />
          </svg>
        </div>
      )
    case "brain":
      return (
        <div className={`${base} bg-violet-50 border-violet-100`}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M9.5 2a3.5 3.5 0 0 0-3 5.2A3.5 3.5 0 0 0 5 14a3.5 3.5 0 0 0 3.5 3.5h1V22" />
            <path d="M14.5 2a3.5 3.5 0 0 1 3 5.2A3.5 3.5 0 0 1 19 14a3.5 3.5 0 0 1-3.5 3.5h-1V22" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
          </svg>
        </div>
      )
    case "chart":
      return (
        <div className={`${base} bg-emerald-50 border-emerald-100`}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect x="5" y="13" width="3.5" height="7" rx="1" fill="#10b981" fillOpacity="0.15" />
            <rect x="10.25" y="8" width="3.5" height="12" rx="1" fill="#10b981" fillOpacity="0.15" />
            <rect x="15.5" y="4" width="3.5" height="16" rx="1" fill="#10b981" fillOpacity="0.15" />
            <rect x="5" y="13" width="3.5" height="7" rx="1" />
            <rect x="10.25" y="8" width="3.5" height="12" rx="1" />
            <rect x="15.5" y="4" width="3.5" height="16" rx="1" />
          </svg>
        </div>
      )
    case "people":
      return (
        <div className={`${base} bg-amber-50 border-amber-100`}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <circle cx="9" cy="7" r="3" fill="#d97706" fillOpacity="0.1" />
            <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            <path d="M21 21v-2a4 4 0 0 0-3-3.85" />
          </svg>
        </div>
      )
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
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0 }}
        >
          <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-slate-500 mb-3">
            Noise we remove
          </p>
          <h2
            className="font-display font-semibold tracking-tight text-slate-900"
            style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)", lineHeight: 1.15 }}
          >
            Running a business shouldn&rsquo;t feel this messy.
          </h2>
          <p
            className="mt-5 mb-10 text-slate-600 leading-relaxed"
            style={{ fontSize: "clamp(1rem, 1.2vw, 1.0625rem)" }}
          >
            This is what we solve:
          </p>
          <PainList />

        </motion.div>

        <motion.div
          className="mx-auto mb-14 max-w-2xl px-4 text-center"
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
        >
          <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-slate-500 mb-3">Who fits first</p>
          <p className="text-slate-700 leading-relaxed" style={{ fontSize: "clamp(1rem, 1.35vw, 1.1875rem)" }}>
            Built for founders who sell online, run a service, or build a product. If you&rsquo;re past the idea stage and ready to grow, this is for you.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
          style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="group rounded-2xl border border-slate-200/80 bg-white/85 p-6 sm:p-7 shadow-[0_1px_0_rgba(15,23,42,0.04),0_12px_40px_-24px_rgba(15,23,42,0.12)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[rgb(0,149,255)]/35 hover:shadow-[0_20px_50px_-24px_rgba(0,149,255,0.25)]"
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0 }}
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
