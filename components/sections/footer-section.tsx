"use client"

import Link from "next/link"
import { APP_SIGNUP_URL } from "@/lib/site"

/* ----------------------------------------------------------------------------
 * EDIT FOOTER LINKS HERE
 * Each column has a heading + links. Links can be internal routes ("/about"),
 * on-page anchors ("#pricing"), or external URLs.
 * -------------------------------------------------------------------------- */
type FooterLink = { label: string; href: string; external?: boolean }
type FooterColumn = { heading: string; links: FooterLink[] }

const footerColumns: FooterColumn[] = [
  {
    heading: "Product",
    links: [
      { label: "Product demo", href: "/demo" },
      { label: "Inside the workspace", href: "/workspace" },
      { label: "Why DreamScale", href: "/why" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    heading: "Features",
    links: [
      { label: "Revenue Intelligence", href: "/workspace" },
      { label: "Operational systems", href: "/workspace" },
      { label: "Stack savings", href: "/savings" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Early feedback", href: "/testimonials" },
      { label: "Blog", href: "/blog" },
      { label: "Press", href: "/press" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "Terms and policies",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
]

function FooterLinkItem({ link }: { link: FooterLink }) {
  const className =
    "text-sm text-slate-600 transition-colors hover:text-blue-600"
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
      {/* CTA card */}
      <div className="container mx-auto mb-16 px-4 sm:mb-20 md:mb-24" style={{ maxWidth: "1440px", width: "100%" }}>
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/90 p-8 text-center shadow-[0_28px_80px_-32px_rgba(0,149,255,0.35)] sm:p-10 md:p-14">
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,149,255,0.2),transparent_70%)]"
            aria-hidden
          />
          <h2
            className="relative mb-4 text-balance font-display font-semibold tracking-tight text-slate-900 sm:mb-5"
            style={{ fontSize: "clamp(1.65rem, 3vw, 2.5rem)", lineHeight: 1.15 }}
          >
            Ready to replace guesswork with a real system?
          </h2>
          <p
            className="relative mx-auto mb-8 max-w-2xl text-balance leading-relaxed text-slate-600 sm:mb-10"
            style={{ fontSize: "clamp(1rem, 1.2vw, 1.125rem)" }}
          >
            Create one account. Bizora, roadmap cues, dashboards, collaborator rituals, rivalry scans, stamina quests stay in one workstation. Free, no credit card.
          </p>
          <div className="relative flex justify-center">
            <a
              href={APP_SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] w-full max-w-lg items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-xl sm:w-auto"
            >
              Create your free account
            </a>
          </div>
        </div>
      </div>

      {/* Mega footer */}
      <footer className="w-full border-t border-slate-200/80 bg-white/75 backdrop-blur-md">
        <div className="container mx-auto py-14 sm:py-16" style={{ maxWidth: "1280px", width: "100%" }}>
          <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(5,1fr)] md:gap-8">
            {/* Brand */}
            <div>
              <Link href="/" className="mb-4 flex items-center gap-2">
                <span className="text-shimmer font-display text-xl font-semibold">DreamScale</span>
              </Link>
              <p className="max-w-[15rem] text-sm text-slate-500">
                Everything you need to run your business, in one place.
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

          {/* Bottom bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-6 md:flex-row">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} DreamScale. All rights reserved.
            </p>
            <p className="text-sm text-slate-500">Built for visionaries.</p>
          </div>
        </div>
      </footer>
    </section>
  )
}
