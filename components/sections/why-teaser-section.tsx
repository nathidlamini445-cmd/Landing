import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const points = [
  "One workspace instead of twelve separate tools",
  "AI that already knows your business profile",
  "Revenue, team, and growth in the same place",
] as const

export function WhyTeaserSection() {
  return (
    <section
      id="why"
      className="scroll-mt-24 border-t border-slate-200/70 bg-white py-20 sm:py-24"
      aria-labelledby="why-heading"
    >
      <div className="container mx-auto px-4" style={{ maxWidth: "1080px" }}>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <SectionHeader
            align="left"
            eyebrow="Why DreamScale"
            title="The complexity we remove"
            description="Founders lose time when every part of the business lives in a different app. DreamScale brings it back into one system."
          />

          <div className="rounded-[1.25rem] border border-slate-200/80 bg-slate-50/60 p-6 sm:p-8">
            <ul className="space-y-4">
              {points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[rgb(0,149,255)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/why"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[rgb(0,149,255)] hover:text-blue-700"
            >
              See what we solve
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
