"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { GL } from "@/components/gl"
import { Leva } from "leva"
import { motion } from "framer-motion"

export default function CareersPage() {
  return (
    <>
      <GL key="careers-gl" hovering={false} />
      <Leva hidden />
      <div className="relative z-10 min-h-screen">
        <Header />
        
        <main className="pt-24 sm:pt-28 md:pt-32 pb-16">
          <div className="container mx-auto px-6 max-w-4xl">
            {/* Home Button */}
            <div className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
            </div>

            {/* Coming Soon Content */}
            <motion.div
              className="bg-white/40 backdrop-blur-md border border-blue-200/50 rounded-2xl p-8 sm:p-10 md:p-12 shadow-lg shadow-blue-500/5 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                Careers
              </h1>
              <p className="text-2xl sm:text-3xl text-blue-600 font-semibold mb-4">
                Coming Soon
              </p>
              <p className="text-slate-700 text-lg mb-8 max-w-2xl mx-auto">
                Join us in building the future of entrepreneurship. We're preparing exciting career opportunities. 
                Stay tuned for open positions!
              </p>

              {/* Home Button at Bottom */}
              <div className="mt-8">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  Return to Home
                </Link>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  )
}
