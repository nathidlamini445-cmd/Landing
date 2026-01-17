import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { ErrorHandler } from "@/components/error-handler";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  fallback: ["monospace"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'DreamScale - Built for visionaries',
  description: 'Scale your business with AI-powered tools, personalized guidance, and actionable insights. All-in-one platform built for visionaries.',
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
    title: 'DreamScale - Built for visionaries',
    description: 'Scale your business with AI-powered tools and insights',
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
    title: 'DreamScale - Built for visionaries',
    description: 'Scale your business with AI-powered tools and insights',
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
        className={`${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ErrorHandler />
        <Header />
        {children}
      </body>
    </html>
  );
}
