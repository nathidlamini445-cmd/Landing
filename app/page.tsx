"use client"

import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/sections/about-section"
import { VisionSection } from "@/components/sections/vision-section"
import { EcosystemSection } from "@/components/sections/ecosystem-section"
import { DreamsSection } from "@/components/sections/dreams-section"
import { FooterSection } from "@/components/sections/footer-section"
import { GL } from "@/components/gl"
import { Leva } from "leva"

export default function Home() {
  return (
    <>
      <GL hovering={false} />

      <div className="relative z-10" style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
        <Hero />

        {/* Section 1 - About */}
        <AboutSection />

        {/* Section 2 - Vision */}
        <VisionSection />

        {/* Section 3 - Ecosystem */}
        <EcosystemSection />

        {/* Section 4 - Dreams */}
        <DreamsSection />

        {/* Section 5 - Footer/CTA */}
        <FooterSection />
      </div>

      <Leva hidden />
    </>
  )
}
