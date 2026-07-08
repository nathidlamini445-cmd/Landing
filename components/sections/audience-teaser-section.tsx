import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { forPages } from "@/lib/site-content"

export function AudienceTeaserSection() {
  return (
    <section
      id="for"
      className="surface-muted scroll-mt-24 border-t border-slate-200/70 py-20 sm:py-24"
      aria-labelledby="for-heading"
    >
      <div className="container mx-auto px-4" style={{ maxWidth: "1080px" }}>
        <SectionHeader
          eyebrow="Built for you"
          title="Is DreamScale for you?"
          description="Whether you are starting from an idea or already growing, there is a path for you."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {forPages.map((page) => (
            <Link
              key={page.slug}
              href={`/for/${page.slug}`}
              className="group rounded-[1.25rem] border border-slate-200/80 bg-white p-6 transition-all hover:-translate-y-1 hover:border-[rgba(0,149,255,0.35)] hover:shadow-[0_20px_50px_-30px_rgba(0,149,255,0.4)]"
            >
              <h3 className="font-display text-[1.125rem] font-medium text-slate-900">{page.headline}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{page.description}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[rgb(0,149,255)]">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
