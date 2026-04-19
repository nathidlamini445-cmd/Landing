"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export function FooterSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="footer"
      className="relative flex flex-col items-center pt-16 sm:pt-20 md:pt-24 pb-0"
    >
      <div
        className="container mx-auto mb-16 sm:mb-20 md:mb-24 px-4"
        style={{ maxWidth: "1440px", width: "100%" }}
      >
        <div
          className={`relative overflow-hidden text-center max-w-4xl mx-auto rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/90 p-8 sm:p-10 md:p-14 shadow-[0_28px_80px_-32px_rgba(0,149,255,0.35)] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
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
            Create your free account, connect your goals, and see competitor intel, VentureQuests, and Bizora AI in one
            place. No credit card required to start.
          </p>
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-3 relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <a
              href="https://app.dreamscale.co.za/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full px-8 py-3.5 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-base shadow-lg shadow-blue-500/25 transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-xl"
            >
              Get started free
            </a>
            <a
              href="https://app.dreamscale.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full px-8 py-3.5 sm:py-4 border-2 border-slate-200 bg-white text-slate-800 font-semibold text-base transition-all hover:border-[rgb(0,149,255)]/40"
            >
              Open the app
            </a>
          </div>
        </div>
      </div>

      <footer className="w-full border-t border-slate-200/80 bg-white/75 backdrop-blur-md">
        <div className="container mx-auto py-10 sm:py-12 md:py-14" style={{ maxWidth: "1440px", width: "100%" }}>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12"
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
                Scaling dreams into reality through innovative technology solutions.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-slate-800 font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">
                    Competitor Intelligence
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">
                    VentureQuests
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/integrations" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-slate-800 font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">
                    Press
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
            <div className="flex gap-6">
              <Link href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
              <Link href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
