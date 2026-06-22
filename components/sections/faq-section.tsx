"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

/* ----------------------------------------------------------------------------
 * EDIT YOUR FAQ HERE
 * Add, remove, or change any question/answer below.
 * -------------------------------------------------------------------------- */
const faqs: { q: string; a: string }[] = [
  {
    q: "What is DreamScale?",
    a: "DreamScale is an all-in-one AI workspace for founders and small teams. Instead of paying for a dozen separate apps, you run your entire business from one place: an AI assistant, revenue and operations insight, competitor research, team tools, and guided growth, all connected to your business profile.",
  },
  {
    q: "What does the software actually do?",
    a: "You set up your business profile once, then every tool already knows your goals, your numbers, and your team. Bizora AI answers questions and works on your files, Revenue Intelligence tracks cash and runway, Systems maps how your business operates, Competitive Intelligence scans your rivals, TeamSync keeps your people aligned, and Venture Quest walks you through growth step by step.",
  },
  {
    q: "Who is DreamScale for?",
    a: "Founders who sell online, run a service, or build a product. If you are past the idea stage and want to grow without juggling twelve different tools, DreamScale is built for you.",
  },
  {
    q: "Do I need a credit card to start?",
    a: "No. You can create a free account and explore the full workspace without entering any payment details. Upgrade only when you are ready.",
  },
  {
    q: "Can I cancel or change my plan anytime?",
    a: "Yes. You can upgrade, downgrade, or cancel whenever you like. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "Does DreamScale replace my other tools?",
    a: "That is the idea. DreamScale brings your tools, data, and team into one screen, so you keep the context and the savings instead of spreading everything across separate apps.",
  },
  {
    q: "How is my data handled?",
    a: "Your data stays yours. See our Privacy Policy for the full details on how your information is stored and used.",
  },
]

function FaqItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(Boolean(defaultOpen))
  return (
    <div className="border-b border-slate-200">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-lg font-semibold text-slate-900 sm:text-xl">{q}</span>
        <span className="shrink-0 text-[rgb(0,149,255)]">
          {open ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl text-[15px] leading-relaxed text-slate-600">{a}</p>
        </div>
      </div>
    </div>
  )
}

export function FaqSection() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 border-t border-slate-200/70 bg-white py-20 sm:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-4" style={{ maxWidth: "820px" }}>
        <div className="mb-10 text-center">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[rgb(0,149,255)]">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="font-display font-semibold tracking-tight text-slate-900"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", lineHeight: 1.1 }}
          >
            Frequently asked questions
          </h2>
        </div>

        <div>
          {faqs.map((item, i) => (
            <FaqItem key={item.q} q={item.q} a={item.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
