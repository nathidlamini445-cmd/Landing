"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { GL } from "@/components/gl"
import { Leva } from "leva"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <>
      <GL hovering={false} />
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

            {/* About DreamScale Content */}
            <div className="bg-white/40 backdrop-blur-md border border-blue-200/50 rounded-2xl p-8 sm:p-10 md:p-12 shadow-lg shadow-blue-500/5">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-8">
                About DreamScale
              </h1>

              <div className="space-y-8">
                {/* Our Mission */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
                  <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                    DreamScale is an AI-powered business platform that helps entrepreneurs build, scale, and grow. We combine AI, productivity tools, and business intelligence into one platform.
                  </p>
                </motion.section>

                {/* What We Do */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">What We Do</h2>
                  <p className="text-slate-700 mb-4 leading-relaxed text-base sm:text-lg">
                    DreamScale provides tools and insights to help you:
                  </p>
                  <ul className="space-y-3 text-slate-700 text-base sm:text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Build systems that scale</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Make data-driven decisions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Optimize team performance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Accelerate revenue growth</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Stay ahead of the competition</span>
                    </li>
                  </ul>
                </motion.section>

                {/* Our Platform */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Our Platform</h2>
                  
                  <div className="space-y-6">
                    {/* AI-Powered Business Tools */}
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-3">AI-Powered Business Tools</h3>
                      <ul className="space-y-2 text-slate-700 text-base sm:text-lg">
                        <li className="flex items-start gap-3">
                          <span className="text-blue-600 mt-1">•</span>
                          <span><strong>Bizora AI</strong> — AI assistant for workflows, strategy, and problem-solving.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-600 mt-1">•</span>
                          <span><strong>SystemBuilder AI</strong> — Build operational systems and SOPs tailored to your business.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-600 mt-1">•</span>
                          <span><strong>LeaderForge AI</strong> — Leadership coaching with style assessment, decision-making frameworks, and communication tools.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-600 mt-1">•</span>
                          <span><strong>TeamSync AI</strong> — Team optimization with DNA analysis, smart task assignment, and health monitoring.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-600 mt-1">•</span>
                          <span><strong>RevenueOS</strong> — Revenue intelligence with dashboards, optimization strategies, pricing analysis, and scenario planning.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Productivity & Growth */}
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-3">Productivity & Growth</h3>
                      <ul className="space-y-2 text-slate-700 text-base sm:text-lg">
                        <li className="flex items-start gap-3">
                          <span className="text-blue-600 mt-1">•</span>
                          <span><strong>Venture Quest (HypeOS)</strong> — Gamified productivity with goals, streaks, rewards, and quests.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-600 mt-1">•</span>
                          <span><strong>Competitor Intelligence</strong> — Competitor intelligence dashboard to track and analyze your market.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-600 mt-1">•</span>
                          <span><strong>Discover</strong> — Curated content, videos, and inspiration.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Integration & Organization */}
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-3">Integration & Organization</h3>
                      <ul className="space-y-2 text-slate-700 text-base sm:text-lg">
                        <li className="flex items-start gap-3">
                          <span className="text-blue-600 mt-1">•</span>
                          <span><strong>Calendar Integration</strong> — Google Calendar integration for seamless event management.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-600 mt-1">•</span>
                          <span><strong>Task Management</strong> — Smart task generation and tracking.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-600 mt-1">•</span>
                          <span><strong>Analytics Dashboard</strong> — Insights and metrics to track your progress.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.section>

                {/* Why DreamScale? */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Why DreamScale?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3 text-slate-700 text-base sm:text-lg">
                      <div className="flex items-start gap-3">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>All-in-One Platform</strong> — No more switching between tools. Everything you need is in one place.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>AI-Powered Intelligence</strong> — Leverage AI to automate processes, generate insights, and make better decisions.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Built for Entrepreneurs</strong> — Designed for the challenges of building and scaling a business.</span>
                      </div>
                    </div>
                    <div className="space-y-3 text-slate-700 text-base sm:text-lg">
                      <div className="flex items-start gap-3">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Data-Driven Growth</strong> — Make decisions based on real data and insights, not guesswork.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Scalable Systems</strong> — Build operational systems that grow with your business.</span>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Our Vision */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
                  <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                    We believe every entrepreneur should have access to enterprise-grade tools and intelligence. DreamScale makes advanced business tools accessible, so you can focus on what matters: building your vision.
                  </p>
                </motion.section>

                {/* Join the DreamScale Community */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-center pt-6 border-t border-blue-200/50"
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Join the DreamScale Community</h2>
                  <p className="text-slate-700 leading-relaxed mb-6 text-base sm:text-lg">
                    Join entrepreneurs using DreamScale to build, scale, and grow. Start your journey today and turn your vision into reality.
                  </p>
                </motion.section>
              </div>

              {/* Home Button at Bottom */}
              <div className="mt-12 pt-8 border-t border-blue-200/50">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
