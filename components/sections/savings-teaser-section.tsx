import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

export function SavingsTeaserSection() {
  return (
    <section
      id="savings-teaser"
      className="scroll-mt-24 border-t border-slate-200/70 bg-white py-20 sm:py-24"
      aria-labelledby="savings-teaser-heading"
    >
      <div className="container mx-auto px-4" style={{ maxWidth: "1080px" }}>
        <div className="rounded-[1.35rem] border border-blue-100 bg-gradient-to-br from-blue-50/80 to-white p-8 text-center sm:p-10">
          <SectionHeader
            eyebrow="Stack savings"
            title="Stop paying for 12 tools"
            description="Most founders spend hundreds per month across separate apps. DreamScale replaces the stack from $19.99/mo."
          />

          <Link
            href="/savings"
            className="btn-primary mx-auto mt-2 inline-flex"
          >
            See how much you save
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
