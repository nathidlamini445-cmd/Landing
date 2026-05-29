"use client"

import Link from "next/link"
import { APP_SIGNUP_URL } from "@/lib/site"

export function FooterSection() {
  return (
    <section
      id="footer"
      className="relative flex flex-col items-center pt-16 sm:pt-20 md:pt-24 pb-0"
    >
      <div
        className="container mx-auto mb-16 sm:mb-20 md:mb-24 px-4"
        style={{ maxWidth: "1440px", width: "100%" }}
      >
        <div className="relative overflow-hidden text-center max-w-4xl mx-auto rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/90 p-8 sm:p-10 md:p-14 shadow-[0_28px_80px_-32px_rgba(0,149,255,0.35)] opacity-100 translate-y-0">
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,149,255,0.2),transparent_70%)]"
            aria-hidden
          />
          <h2
            className="font-display font-semibold text-slate-900 mb-4 sm:mb-5 text-balance tracking-tight relative"
            style={{ fontSize: "clamp(1.65rem, 3vw, 2.5rem)", lineHeight: 1.15 }}
          >
            Ready to replace guesswork with a real system?
          </h2>
          <p
            className="text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto text-balance leading-relaxed relative"
            style={{ fontSize: "clamp(1rem, 1.2vw, 1.125rem)" }}
          >
            Create one account. Bizora, roadmap cues, dashboards, collaborator rituals, rivalry scans, stamina quests stay in one workstation. Free, no credit card.
          </p>
          <div className="flex justify-center relative opacity-100 translate-y-0">
            <a
              href={APP_SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] w-full max-w-lg sm:w-auto items-center justify-center rounded-full px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:shadow-xl"
            >
              Create your free account
            </a>
          </div>
        </div>
      </div>

      <footer className="w-full border-t border-slate-200/80 bg-white/75 backdrop-blur-md">
        <div className="container mx-auto py-10 sm:py-12 md:py-14" style={{ maxWidth: "1440px", width: "100%" }}>
          <div
            className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 sm:gap-12"
            style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}
          >
            {/* Brand */}
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
                  <path
                    d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                    className="text-blue-500"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
                <span className="text-xl font-bold text-slate-800">DreamScale</span>
              </Link>
              <p className="text-slate-600 text-sm">
                Built for visionaries.
              </p>
              <ul className="mt-3 space-y-1">
                <li>
                  <Link href="/about" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-slate-800 font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#demo" className="text-slate-600 hover:text-blue-600 transition-colors text-sm scroll-mt-28">
                    Product demo
                  </Link>
                </li>
                <li>
                  <Link href="#ecosystem" className="text-slate-600 hover:text-blue-600 transition-colors text-sm scroll-mt-28">
                    Competitor Intelligence
                  </Link>
                </li>
                <li>
                  <Link href="#ecosystem" className="text-slate-600 hover:text-blue-600 transition-colors text-sm scroll-mt-28">
                    Bizora AI
                  </Link>
                </li>
                <li>
                  <Link href="#ecosystem" className="text-slate-600 hover:text-blue-600 transition-colors text-sm scroll-mt-28">
                    Venture Quests
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-slate-800 font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-slate-200/80 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-sm">© {new Date().getFullYear()} DreamScale. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  )
}
