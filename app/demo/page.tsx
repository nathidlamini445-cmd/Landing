import { FeaturePageShell } from "@/components/feature-page-shell"
import { ProductShowcaseSection } from "@/components/product-showcase-section"

export const metadata = {
  title: "Product demo | DreamScale",
}

export default function DemoPage() {
  return (
    <FeaturePageShell>
      <ProductShowcaseSection />
    </FeaturePageShell>
  )
}
