import type { MetadataRoute } from "next"
import { forPages, SITE_URL, vsPages } from "@/lib/site-content"

const staticRoutes = [
  "",
  "/demo",
  "/why",
  "/workspace",
  "/testimonials",
  "/savings",
  "/about",
  "/pricing",
  "/integrations",
  "/blog",
  "/press",
  "/careers",
  "/privacy",
  "/terms",
  "/cookies",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...forPages.map((page) => ({
      url: `${SITE_URL}/for/${page.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...vsPages.map((page) => ({
      url: `${SITE_URL}/vs/${page.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]
}
