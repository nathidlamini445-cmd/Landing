import type { Metadata, Viewport } from "next";
import { Geist_Mono, Lora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/header";
import { ErrorHandler } from "@/components/error-handler";
import { Analytics } from "@vercel/analytics/next";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  fallback: ["monospace"],
});

/** Display serif (previous site font), lighter weights so headings feel less heavy */
const lora = Lora({
  variable: "--font-lora",
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
  title: "DreamScale | AI workspace for founders wired to your context",
  description:
    "Stop juggling rival blind spots, chats that wipe your context nightly, leaky revenue folklore, collaborator chaos plus burnout on your strongest people. DreamScale is one desktop workstation that ties Bizora with Gemini depth, roadmap cues, dashboards, collaborator clarity, rivalry scans, stamina quests to the dossier from signup.",
  generator: 'Next.js',
  keywords: ['AI business tools', 'entrepreneur platform', 'business coaching', 'productivity tools'],
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

const clarityProjectId =
  process.env.NEXT_PUBLIC_MICROSOFT_CLARITY_ID?.trim() || "walug4w1o0";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${lora.variable} antialiased`}
        suppressHydrationWarning
      >
        <ErrorHandler />
        <Header />
        {children}
        <Analytics />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityProjectId}");
          `}
        </Script>
      </body>
    </html>
  );
}
