"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { faqs } from "@/lib/site-content"

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
        <span className="font-display text-lg font-medium text-slate-900 sm:text-xl">{q}</span>
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
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />

        <div className="rounded-[1.25rem] border border-slate-200/80 bg-white px-5 sm:px-7">
          {faqs.map((item, i) => (
            <FaqItem key={item.q} q={item.q} a={item.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}