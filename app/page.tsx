"use client"

import { Hero } from "@/components/hero"
import { JsonLd } from "@/components/json-ld"
import { PricingSection } from "@/components/sections/pricing-section"
import { FaqSection } from "@/components/sections/faq-section"
import { ExploreSection } from "@/components/sections/explore-section"
import { FooterSection } from "@/components/sections/footer-section"
import { FeaturesOverviewSection } from "@/components/sections/features-overview-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { WhyTeaserSection } from "@/components/sections/why-teaser-section"
import { TryWorkspaceSection } from "@/components/sections/try-workspace-section"
import { SavingsTeaserSection } from "@/components/sections/savings-teaser-section"
import { IntegrationsSection } from "@/components/sections/integrations-section"
import { SocialProofSection } from "@/components/sections/social-proof-section"

export default function Home() {
  return (
    <>
      <JsonLd includeFaq />
      <div className="relative z-10" style={{ width: "100%", maxWidth: "100vw", overflowX: "hidden" }}>
        <Hero />
        <FeaturesOverviewSection />
        <HowItWorksSection />
        <WhyTeaserSection />
        <TryWorkspaceSection />
        <PricingSection />
        <SavingsTeaserSection />
        <SocialProofSection />
        <IntegrationsSection />
        <FaqSection />
        <ExploreSection />
        <FooterSection />
      </div>
    </>
  )
}
