import { FeaturePageShell } from "@/components/feature-page-shell"
import { EcosystemSection } from "@/components/sections/ecosystem-section"

export const metadata = {
  title: "Inside the workspace | DreamScale",
}

export default function WorkspacePage() {
  return (
    <FeaturePageShell>
      <EcosystemSection />
    </FeaturePageShell>
  )
}
