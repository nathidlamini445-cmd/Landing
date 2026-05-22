"use client"

import { Hero } from "@/components/hero"
import { ProductShowcaseSection } from "@/components/product-showcase-section"
import { AboutSection } from "@/components/sections/about-section"
import { EcosystemSection } from "@/components/sections/ecosystem-section"
import { SocialProofSection } from "@/components/sections/social-proof-section"
import { StackSavingsSection } from "@/components/sections/stack-savings-section"
import { FooterSection } from "@/components/sections/footer-section"

export default function Home() {
  return (
    <>
      <div className="relative z-10" style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
        <Hero />

        {/* Demo video + screenshots (assets in public/) */}
        <ProductShowcaseSection />

        {/* Section 1: About */}
        <AboutSection />

        {/* Section 2: Ecosystem */}
        <EcosystemSection />

        {/* Section 3: Social proof */}
        <SocialProofSection />

        {/* Section 4: Savings calculator; parallel SaaS overlap vs consolidated workspace */}
        <StackSavingsSection />

        {/* Section 5: Footer / CTA */}
        <FooterSection />
      </div>
    </>
  )
}
