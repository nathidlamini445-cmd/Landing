"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { SectionHeader } from "@/components/section-header"

const testimonials = [
  {
    quote:
      "I wish I had DreamScale when I first started my agency. It has helped me so much, and my whole process is in a different place now.",
    label: "Early user",
  },
  {
    quote:
      "So far, it\u2019s actually mind-blowing. This has saved me a lot of time. Well done, DreamScale team.",
    label: "Early user",
  },
  {
    quote:
      "This is actually good. It\u2019s great. It has saved me so much time, and now I have more clearance on what to do and what the next steps are to take.",
    label: "Early user",
  },
]

export function SocialProofSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const current = testimonials[index]

  return (
    <section
      id="social-proof"
      className="surface-muted relative py-16 sm:py-20 md:py-24"
      aria-labelledby="social-proof-heading"
    >
      <div className="container mx-auto px-4" style={{ maxWidth: "1180px", width: "100%" }}>
        <SectionHeader eyebrow="Early feedback" title="In their words" />

        <div className="mx-auto max-w-2xl" style={{ minHeight: "180px" }}>
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5 }}
              className="rounded-[1.25rem] border border-slate-200/85 bg-white px-6 py-9 text-center shadow-[0_18px_50px_-32px_rgba(0,149,255,0.35)] sm:px-10 sm:py-11"
            >
              <figcaption className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500 sm:text-[11px]">
                {current.label}
              </figcaption>
              <blockquote className="font-display mt-5 text-[1.125rem] font-normal leading-relaxed text-slate-700 sm:text-[1.25rem]">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* dots */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index ? "bg-[rgb(0,149,255)]" : "bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
