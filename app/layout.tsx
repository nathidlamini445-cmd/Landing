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
  title: "DreamScale – Built for Visionaries",
  description: "DreamScale is an entrepreneurship-focused SaaS platform designed to help entrepreneurs build and scale businesses. Built for visionaries who turn ideas into reality.",
  generator: 'DreamScale Productions',
  icons: {
    icon: [
      { url: '/icon.png', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "DreamScale – Built for Visionaries",
    description: "DreamScale is an entrepreneurship-focused SaaS platform designed to help entrepreneurs build and scale businesses. Built for visionaries who turn ideas into reality.",
    type: "website",
    siteName: "DreamScale",
    images: [
      {
        url: '/Logo.png',
        width: 1200,
        height: 630,
        alt: 'DreamScale Logo',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DreamScale – Built for Visionaries",
    description: "DreamScale is an entrepreneurship-focused SaaS platform designed to help entrepreneurs build and scale businesses. Built for visionaries who turn ideas into reality.",
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
