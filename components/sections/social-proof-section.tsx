"use client"

import { motion } from "framer-motion"

export function SocialProofSection() {
  return (
    <section
      id="social-proof"
      className="relative bg-white py-16 sm:py-20 md:py-24"
      aria-labelledby="social-proof-heading"
    >
      <div className="container mx-auto px-4" style={{ maxWidth: "1180px", width: "100%" }}>
        <motion.div
          className="mb-10 text-center sm:mb-12"
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0 }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500 sm:text-xs">Early feedback</p>
          <h2
            id="social-proof-heading"
            className="font-display mt-3 font-semibold tracking-tight text-slate-900"
            style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)", lineHeight: 1.2 }}
          >
            In their words
          </h2>
        </motion.div>

        <motion.figure
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, amount: 0 }}
          className="mx-auto max-w-2xl rounded-2xl border border-slate-200/85 bg-gradient-to-b from-slate-50/90 to-white px-6 py-9 text-center shadow-[0_14px_44px_-28px_rgba(15,23,42,0.2)] sm:px-10 sm:py-11"
        >
          <figcaption className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500 sm:text-[11px]">
            From one of our first users
          </figcaption>
          <blockquote className="font-display mt-5 text-[1.15rem] font-medium leading-snug tracking-tight text-slate-800 sm:text-[1.35rem] sm:leading-snug">
            &ldquo;I wish I had DreamScale when I first started my agency. It has helped me so much, and my whole
            process is in a different place now.&rdquo;
          </blockquote>
        </motion.figure>
      </div>
    </section>
  )
}
