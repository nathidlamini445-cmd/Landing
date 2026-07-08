"use client"

import Link from "next/link"
import { APP_SIGNUP_URL } from "@/lib/site"
import { Logo } from "@/components/logo"

type FooterLink = { label: string; href: string; external?: boolean }
type FooterColumn = { heading: string; links: FooterLink[] }

const footerColumns: FooterColumn[] = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Product demo", href: "/demo" },
      { label: "Inside the workspace", href: "/workspace" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    heading: "For",
    links: [
      { label: "Founders with an idea", href: "/for/founders-with-an-idea" },
      { label: "Small teams", href: "/for/small-teams" },
      { label: "Service businesses", href: "/for/service-businesses" },
      { label: "Ecommerce sellers", href: "/for/ecommerce-sellers" },
    ],
  },
  {
    heading: "Compare",
    links: [
      { label: "DreamScale vs Notion", href: "/vs/notion" },
      { label: "DreamScale vs Monday", href: "/vs/monday" },
      { label: "DreamScale vs ClickUp", href: "/vs/clickup" },
      { label: "DreamScale vs HubSpot", href: "/vs/hubspot" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/#faq" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
]

function FooterLinkItem({ link }: { link: FooterLink }) {
  const className = "text-sm text-slate-600 transition-colors hover:text-blue-600"
  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
        {link.label}
      </a>
    )
  }
  return (
    <Link href={link.href} className={`${className} scroll-mt-24`}>
      {link.label}
    </Link>
  )
}

export function FooterSection() {
  return (
    <section id="footer" className="relative flex flex-col items-center pt-16 sm:pt-20 md:pt-24 pb-0">
      <div className="container mx-auto mb-16 px-4 sm:mb-20 md:mb-24" style={{ maxWidth: "1080px", width: "100%" }}>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[rgb(0,149,255)] via-blue-500 to-blue-600 px-8 py-12 text-center text-white shadow-[0_24px_60px_-24px_rgba(0,149,255,0.55)] sm:px-10 sm:py-14">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-[radial-gradient(ellipse_55%_100%_at_50%_0%,rgba(191,219,254,0.55),transparent_72%)]"
            aria-hidden
          />
          <h2
            className="relative mb-4 font-display font-semibold tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.15 }}
          >
            Ready to scale your business in one place?
          </h2>
          <p className="relative mx-auto mb-8 max-w-2xl text-balance text-blue-50">
            Create your free account and start with Bizora AI, revenue insight, team tools, and guided growth.
          </p>
          <a
            href={APP_SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex min-h-[52px] items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-slate-900 transition-colors hover:bg-slate-100"
          >
            Get started free
          </a>
        </div>
      </div>

      <footer className="w-full border-t border-slate-200/80 bg-white">
        <div className="container mx-auto py-14 sm:py-16" style={{ maxWidth: "1080px", width: "100%" }}>
          <div className="grid gap-10 md:grid-cols-[1.3fr_repeat(4,1fr)] md:gap-8">
            <div>
              <Link href="/" className="mb-4 inline-flex items-center gap-2">
                <Logo />
              </Link>
              <p className="max-w-xs text-sm leading-relaxed text-slate-500">
                The all-in-one AI workspace for founders and small teams who want to plan, run, and grow without tool sprawl.
              </p>
            </div>

            {footerColumns.map((col) => (
              <div key={col.heading}>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-900">
                  {col.heading}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={`${col.heading}-${link.label}`}>
                      <FooterLinkItem link={link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-6 text-sm text-slate-500 md:flex-row">
            <p>© {new Date().getFullYear()} DreamScale. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/terms" className="hover:text-blue-600">
                Terms
              </Link>
              <Link href="/cookies" className="hover:text-blue-600">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
