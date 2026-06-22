import { FeaturePageShell } from "@/components/feature-page-shell"
import { SocialProofSection } from "@/components/sections/social-proof-section"

export const metadata = {
  title: "Early feedback | DreamScale",
}

export default function TestimonialsPage() {
  return (
    <FeaturePageShell>
      <SocialProofSection />
    </FeaturePageShell>
  )
}
