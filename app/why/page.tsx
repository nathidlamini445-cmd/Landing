import { FeaturePageShell } from "@/components/feature-page-shell"
import { AboutSection } from "@/components/sections/about-section"

export const metadata = {
  title: "Why DreamScale | The complexity we remove",
}

export default function WhyPage() {
  return (
    <FeaturePageShell>
      <AboutSection />
    </FeaturePageShell>
  )
}
