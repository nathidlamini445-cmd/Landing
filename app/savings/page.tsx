import { FeaturePageShell } from "@/components/feature-page-shell"
import { StackSavingsSection } from "@/components/sections/stack-savings-section"

export const metadata = {
  title: "Stack savings | DreamScale",
}

export default function SavingsPage() {
  return (
    <FeaturePageShell>
      <StackSavingsSection />
    </FeaturePageShell>
  )
}
