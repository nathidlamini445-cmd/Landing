import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { ErrorHandler } from "@/components/error-handler";
import { Analytics } from "@vercel/analytics/next";
import { CookieBanner } from "@/components/cookie-banner";
import { AnalyticsLoader } from "@/components/analytics-loader";
import { JsonLd } from "@/components/json-ld";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  fallback: ["monospace"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dreamscale.co.za"),
  title: {
    default: "DreamScale | Scale your business with one AI workspace",
    template: "%s | DreamScale",
  },
  description:
    "DreamScale is an all-in-one AI workspace for founders and small teams. Plan, run, and grow your business with Bizora AI, revenue intelligence, team tools, and guided growth in one place.",
  generator: "Next.js",
  keywords: [
    "AI business workspace",
    "founder tools",
    "small team software",
    "Notion alternative",
    "business growth platform",
    "DreamScale",
  ],
  authors: [{ name: 'DreamScale' }],
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/Logo.png', sizes: 'any', type: 'image/png' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/Logo.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'DreamScale - AI workspace wired to your profile',
    description:
      'Gemini-assisted Bizora, roadmap guidance, dashboards, collaborator clarity, rivalry intelligence, and stamina loops wired to the profile you keep in the product.',

    url: 'https://dreamscale.co.za',
    siteName: 'DreamScale',
    images: [
      {
        url: '/Logo.png',
        width: 1200,
        height: 630,
        alt: 'DreamScale Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DreamScale AI workspace for founders',
    description:
      'Contextual profile, Gemini-powered Bizora, roadmap, dashboards, collaborator clarity, plus rivalry scans. Stay decisive.',
    images: ['/Logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${inter.variable} ${sourceSerif.variable} antialiased`}
        suppressHydrationWarning
      >
        <JsonLd />
        <ErrorHandler />
        <Header />
        {children}
        <CookieBanner />
        <Analytics />
        <AnalyticsLoader />
      </body>
    </html>
  );
}
