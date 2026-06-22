"use client"

import { Hero } from "@/components/hero"
import { PricingSection } from "@/components/sections/pricing-section"
import { FaqSection } from "@/components/sections/faq-section"
import { ExploreSection } from "@/components/sections/explore-section"
import { FooterSection } from "@/components/sections/footer-section"

export default function Home() {
  return (
    <>
      <div className="relative z-10" style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
        <Hero />

        {/* Pricing — two plans (edit content in pricing-section.tsx) */}
        <PricingSection />

        {/* FAQ — edit content in faq-section.tsx */}
        <FaqSection />

        {/* Explore — cards link to each section's own page (demo, why, workspace, testimonials, savings) */}
        <ExploreSection />

        {/* Footer / CTA */}
        <FooterSection />
      </div>
    </>
  )
}
