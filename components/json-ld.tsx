import { faqs, SITE_URL } from "@/lib/site-content"

type JsonLdProps = {
  includeFaq?: boolean
}

export function JsonLd({ includeFaq = false }: JsonLdProps) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DreamScale",
    url: SITE_URL,
    logo: `${SITE_URL}/Logo.png`,
    description:
      "DreamScale is an all-in-one AI workspace for founders and small teams to plan, run, and grow their business.",
  }

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DreamScale",
    url: SITE_URL,
    description:
      "AI workspace for founders wired to your business profile, revenue, team, and growth.",
  }

  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "DreamScale",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: SITE_URL,
    description:
      "All-in-one AI workspace with Bizora AI, revenue intelligence, systems mapping, competitor research, and guided growth.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  }

  const faqPage = includeFaq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      }
    : null

  const blocks = [organization, website, software, faqPage].filter(Boolean)

  return (
    <>
      {blocks.map((block, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  )
}
