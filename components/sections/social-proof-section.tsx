"use client"

import { motion } from "framer-motion"

export function SocialProofSection() {
  return (
    <section
      id="social-proof"
      className="relative flex items-center justify-center py-8 sm:py-12 md:py-16"
      aria-labelledby="social-proof-heading"
    >
      <div className="container mx-auto px-4" style={{ maxWidth: "900px", width: "100%" }}>
        <motion.div
          className="text-center mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-slate-500">Social proof</p>
          <h2 id="social-proof-heading" className="font-sentient text-slate-900 mt-2" style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}>
            What early users are saying
          </h2>
        </motion.div>

        <motion.blockquote
          className="text-center backdrop-blur-md bg-white/35 border border-blue-200/50 rounded-2xl p-8 sm:p-10 md:p-12 shadow-lg shadow-blue-500/5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          viewport={{ once: true }}
        >
          <p
            className="font-sentient text-slate-800 leading-relaxed italic"
            style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)" }}
          >
            &ldquo;DreamScale gave me a clear roadmap when I had no idea where to start&rdquo;
          </p>
          <footer className="mt-6 text-slate-600 font-mono text-sm sm:text-base not-italic">Early user</footer>
        </motion.blockquote>

        <p className="text-center font-mono text-slate-400 text-xs sm:text-sm mt-6">More stories coming soon</p>
      </div>
    </section>
  )
}
