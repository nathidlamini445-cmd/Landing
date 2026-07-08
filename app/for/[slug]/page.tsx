import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, Check } from "lucide-react"
import { FeaturePageShell } from "@/components/feature-page-shell"
import { forPages } from "@/lib/site-content"
import { APP_SIGNUP_URL } from "@/lib/site"

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return forPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = forPages.find((item) => item.slug === slug)
  if (!page) return {}

  return {
    title: page.title,
    description: page.description,
    keywords: [page.title, "DreamScale", "founder workspace", "AI business tools"],
  }
}

export default async function ForPage({ params }: PageProps) {
  const { slug } = await params
  const page = forPages.find((item) => item.slug === slug)
  if (!page) notFound()

  return (
    <FeaturePageShell>
      <section className="container mx-auto px-4 py-10 sm:py-14" style={{ maxWidth: "900px" }}>
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[rgb(0,149,255)]">
          Built for you
        </p>
        <h1
          className="font-display font-semibold tracking-tight text-slate-900"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}
        >
          {page.headline}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-600">{page.description}</p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
            <h2 className="font-display text-xl font-semibold text-slate-900">Common challenges</h2>
            <ul className="mt-4 space-y-3">
              {page.pains.map((pain) => (
                <li key={pain} className="text-sm leading-relaxed text-slate-600">
                  {pain}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-blue-50/40 p-6">
            <h2 className="font-display text-xl font-semibold text-slate-900">How DreamScale helps</h2>
            <ul className="mt-4 space-y-3">
              {page.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-2 text-sm leading-relaxed text-slate-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-slate-900 px-6 py-8 text-center text-white sm:px-10">
          <h2 className="font-display text-2xl font-semibold">{page.cta}</h2>
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
          Want to compare tools?{" "}
          <Link href="/vs/notion" className="font-medium text-blue-600 hover:text-blue-700">
            See DreamScale vs Notion
          </Link>
        </p>
      </section>
    </FeaturePageShell>
  )
}
