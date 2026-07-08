import Link from "next/link"
import { ArrowRight, BarChart3, Workflow } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const demos = [
  {
    icon: BarChart3,
    title: "Revenue Intelligence",
    description:
      "Drop in your numbers and get instant signals on cash, runway, and what needs attention. See how DreamScale turns messy finance questions into clear next steps.",
    cta: "Try revenue tools",
    href: "/workspace",
  },
  {
    icon: Workflow,
    title: "Operational Systems",
    description:
      "Map how work moves through your business and spot bottlenecks before they slow you down. Test the systems view without creating an account.",
    cta: "Try operations tools",
    href: "/workspace",
  },
] as const

export function TryWorkspaceSection() {
  return (
    <section
      id="try-workspace"
      className="scroll-mt-24 surface-dots border-t border-slate-200/70 py-20 sm:py-24"
      aria-labelledby="try-workspace-heading"
    >
      <div className="container mx-auto px-4" style={{ maxWidth: "1080px" }}>
        <SectionHeader
          eyebrow="Hands-on"
          title="Try the workspace before you sign up"
          description="Run a free preview of DreamScale's revenue and operations tools right in your browser. No credit card. No waiting."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {demos.map((demo) => {
            const Icon = demo.icon
            return (
              <Link
                key={demo.title}
                href={demo.href}
                className="group rounded-[1.35rem] border border-slate-200/80 bg-white p-7 transition-all hover:-translate-y-1 hover:border-[rgba(0,149,255,0.35)] hover:shadow-[0_24px_60px_-32px_rgba(0,149,255,0.4)]"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[rgb(0,149,255)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-medium text-slate-900">{demo.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{demo.description}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[rgb(0,149,255)]">
                  {demo.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            )
          })}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Want the full product tour?{" "}
          <Link href="/demo" className="font-medium text-[rgb(0,149,255)] hover:text-blue-700">
            Watch the demo video
          </Link>
        </p>
      </div>
    </section>
  )
}
