import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { FooterSection } from "@/components/sections/footer-section"

export function FeaturePageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 min-h-screen bg-white" style={{ width: "100%", maxWidth: "100vw", overflowX: "hidden" }}>
      <div className="container mx-auto px-4 pt-24 sm:pt-28" style={{ maxWidth: "1440px", width: "100%" }}>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
      {children}
      <FooterSection />
    </div>
  )
}
