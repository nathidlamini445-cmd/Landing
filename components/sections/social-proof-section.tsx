"use client"

import { motion } from "framer-motion"

export function SocialProofSection() {
  return (
    <section
      id="social-proof"
      className="relative flex items-center justify-center py-16 sm:py-20 md:py-24"
      aria-labelledby="social-proof-heading"
    >
      <div className="container mx-auto px-4" style={{ maxWidth: "960px", width: "100%" }}>
        <motion.div
          className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] text-slate-500">
            Proof
          </p>
          <h2
            id="social-proof-heading"
            className="font-display font-semibold text-slate-900 mt-3 tracking-tight"
            style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)", lineHeight: 1.2 }}
          >
            What founders say after the first week
          </h2>
        </motion.div>

        <motion.blockquote
          className="relative overflow-hidden text-center rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/90 p-6 sm:p-12 md:p-14 shadow-[0_24px_70px_-32px_rgba(15,23,42,0.2)] backdrop-blur-sm"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          viewport={{ once: true }}
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-blue-600 opacity-90"
            aria-hidden
          />
          <p
            className="font-display text-slate-800 leading-relaxed italic"
            style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.65rem)" }}
          >
            &ldquo;I wish I had this three years ago when I started my agency. The day to day is so much faster now, and
            I can finally see real progress toward the goals I actually care about.&rdquo;
          </p>
          <footer className="mt-8 text-slate-500 text-sm sm:text-base font-medium not-italic">
            Agency founder
          </footer>
        </motion.blockquote>

        <p className="text-center text-slate-400 text-sm mt-8">More stories coming soon</p>
      </div>
    </section>
  )
}
