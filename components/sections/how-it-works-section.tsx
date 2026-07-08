import { SectionHeader } from "@/components/section-header"

const steps = [
  {
    step: "01",
    title: "Set up your profile",
    description: "Tell DreamScale about your business once. Goals, team, and context stay connected.",
  },
  {
    step: "02",
    title: "Run from one workspace",
    description: "Use Bizora AI, revenue tools, systems, and team features without switching apps.",
  },
  {
    step: "03",
    title: "Grow with clear next steps",
    description: "Venture Quest and your dashboards show what to do next so you keep momentum.",
  },
] as const

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 surface-muted border-t border-slate-200/70 py-20 sm:py-24"
      aria-labelledby="how-it-works-heading"
    >
      <div className="container mx-auto px-4" style={{ maxWidth: "1080px" }}>
        <SectionHeader
          eyebrow="How it works"
          title="From idea to growth in three steps"
          description="DreamScale is built to feel simple on day one and stay useful as you scale."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.step}
              className="rounded-[1.25rem] border border-slate-200/80 bg-white p-6"
            >
              <p className="font-mono text-sm font-medium text-[rgb(0,149,255)]">{item.step}</p>
              <h3 className="mt-3 font-display text-xl font-medium text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
