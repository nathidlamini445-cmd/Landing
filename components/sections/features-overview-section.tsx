import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { featureHighlights } from "@/lib/site-content"

export function FeaturesOverviewSection() {
  return (
    <section
      id="features"
      className="scroll-mt-24 border-t border-slate-200/70 bg-white py-20 sm:py-24"
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto px-4" style={{ maxWidth: "1080px" }}>
        <SectionHeader
          eyebrow="What you get"
          title="Everything to run and grow, in one workspace"
          description="Set up your business profile once. Every module already knows your goals, numbers, and team."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {featureHighlights.map((feature, index) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="card-accent group p-6 pl-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] font-medium tracking-[0.18em] text-slate-400">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 font-display text-[1.25rem] font-medium text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{feature.description}</p>
                </div>
                <ArrowRight className="mt-6 h-5 w-5 shrink-0 text-[rgb(0,149,255)] transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
