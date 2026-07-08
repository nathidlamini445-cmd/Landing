import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { FeaturePageShell } from "@/components/feature-page-shell"
import { vsPages } from "@/lib/site-content"
import { APP_SIGNUP_URL } from "@/lib/site"

type PageProps = {
  params: Promise<{ competitor: string }>
}

export async function generateStaticParams() {
  return vsPages.map((page) => ({ competitor: page.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { competitor } = await params
  const page = vsPages.find((item) => item.slug === competitor)
  if (!page) return {}

  return {
    title: page.title,
    description: page.description,
    keywords: [page.title, `${page.competitor} alternative`, "DreamScale comparison"],
  }
}

export default async function VsPage({ params }: PageProps) {
  const { competitor } = await params
  const page = vsPages.find((item) => item.slug === competitor)
  if (!page) notFound()

  return (
    <FeaturePageShell>
      <section className="container mx-auto px-4 py-10 sm:py-14" style={{ maxWidth: "960px" }}>
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[rgb(0,149,255)]">
          Compare
        </p>
        <h1
          className="font-display font-semibold tracking-tight text-slate-900"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}
        >
          {page.headline}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-600">{page.description}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-blue-100 bg-blue-50/40 p-6">
            <h2 className="font-display text-xl font-semibold text-slate-900">Why DreamScale</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
              {page.dreamscaleWins.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
            <h2 className="font-display text-xl font-semibold text-slate-900">
              Where {page.competitor} falls short
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
              {page.competitorLimits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-900">
              <tr>
                <th className="px-4 py-3 font-semibold">Feature</th>
                <th className="px-4 py-3 font-semibold">DreamScale</th>
                <th className="px-4 py-3 font-semibold">{page.competitor}</th>
              </tr>
            </thead>
            <tbody>
              {page.rows.map((row) => (
                <tr key={row.feature} className="border-t border-slate-200">
                  <td className="px-4 py-3 font-medium text-slate-900">{row.feature}</td>
                  <td className="px-4 py-3 text-slate-700">{row.dreamscale}</td>
                  <td className="px-4 py-3 text-slate-600">{row.competitor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 rounded-2xl bg-slate-900 px-6 py-8 text-center text-white sm:px-10">
          <h2 className="font-display text-2xl font-semibold">
            Try the {page.competitor} alternative built for founders
          </h2>
          <a
            href={APP_SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
          >
            Get started free
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Not sure if it fits you?{" "}
          <Link href="/for/founders-with-an-idea" className="font-medium text-blue-600 hover:text-blue-700">
            See who DreamScale is for
          </Link>
        </p>
      </section>
    </FeaturePageShell>
  )
}
