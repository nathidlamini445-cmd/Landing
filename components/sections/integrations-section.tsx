import Link from "next/link"
import { SectionHeader } from "@/components/section-header"

const integrations = [
  {
    name: "Google Docs",
    description: "Export plans, briefs, and updates straight from your workspace.",
  },
  {
    name: "Google Sheets",
    description: "Push revenue and ops data into spreadsheets your team already uses.",
  },
  {
    name: "Google Calendar",
    description: "Schedule milestones and team rituals without leaving DreamScale.",
  },
  {
    name: "Notion",
    description: "Send structured updates and docs to your Notion workspace.",
  },
  {
    name: "Slack",
    description: "Share team updates and alerts where your people already work.",
  },
] as const

export function IntegrationsSection() {
  return (
    <section
      id="integrations"
      className="scroll-mt-24 border-t border-slate-200/70 bg-white py-20 sm:py-24"
      aria-labelledby="integrations-heading"
    >
      <div className="container mx-auto px-4" style={{ maxWidth: "1080px" }}>
        <SectionHeader
          eyebrow="Integrations"
          title="Connects with tools your team already uses"
          description="On Pro, DreamScale plugs into the apps you run every day so context stays in one place and work still lands where your team expects it."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="rounded-[1.25rem] border border-slate-200/80 bg-slate-50/50 p-5"
            >
              <h3 className="font-display text-lg font-medium text-slate-900">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </div>
          ))}

          <div className="flex flex-col justify-center rounded-[1.25rem] border border-blue-100 bg-gradient-to-br from-blue-50/80 to-white p-5 sm:col-span-2 lg:col-span-1">
            <p className="text-sm font-medium text-slate-900">Available on Pro</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Upgrade when you are ready to export, schedule, and sync across your stack.
            </p>
            <Link
              href="/#pricing"
              className="mt-4 text-sm font-semibold text-[rgb(0,149,255)] hover:text-blue-700"
            >
              See Pro pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
