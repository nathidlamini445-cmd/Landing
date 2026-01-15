"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { GL } from "@/components/gl"
import { Leva } from "leva"

export default function CookiesPage() {
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

            {/* Cookie Policy Content */}
            <div className="bg-white/40 backdrop-blur-md border border-blue-200/50 rounded-2xl p-8 sm:p-10 md:p-12 shadow-lg shadow-blue-500/5">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                Cookie Policy
              </h1>
              <p className="text-slate-600 mb-8 text-sm sm:text-base">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <div className="prose prose-slate max-w-none space-y-8">
                {/* What Cookies Are */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">1. What Are Cookies?</h2>
                  <p className="text-slate-700 leading-relaxed">
                    Cookies are small text files placed on your device (computer, tablet, or mobile phone) when you visit our website. 
                    These files help us improve your experience and analyze website performance. Cookies allow websites to remember your 
                    preferences, understand how you use our site, and provide you with a more personalized and efficient browsing experience.
                  </p>
                  <p className="text-slate-700 mt-4 leading-relaxed">
                    Cookies are widely used and most websites use them to make their sites work more efficiently and provide a better user experience.
                  </p>
                </section>

                {/* Types of Cookies */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Types of Cookies We Use</h2>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    We use different types of cookies on our website, each serving a specific purpose:
                  </p>

                  <div className="space-y-6">
                    {/* Essential Cookies */}
                    <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Essential Cookies</h3>
                      <p className="text-slate-700 mb-3 leading-relaxed">
                        These cookies are necessary for the website to function properly. They enable core functionality such as:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-slate-700">
                        <li>User authentication and login sessions</li>
                        <li>Security features and fraud prevention</li>
                        <li>Remembering your preferences and settings</li>
                        <li>Load balancing and website performance</li>
                      </ul>
                      <p className="text-slate-700 mt-3 leading-relaxed text-sm">
                        <strong>Note:</strong> These cookies cannot be disabled as they are essential for the website to work. They do not collect personal information that can be used to identify you.
                      </p>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Analytics Cookies</h3>
                      <p className="text-slate-700 mb-3 leading-relaxed">
                        These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. 
                        They allow us to:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-slate-700">
                        <li>Count the number of visitors and see how they move around our site</li>
                        <li>Identify which pages are most popular and which need improvement</li>
                        <li>Understand user behavior and preferences</li>
                        <li>Measure the effectiveness of our content and features</li>
                      </ul>
                      <p className="text-slate-700 mt-3 leading-relaxed text-sm">
                        <strong>Examples:</strong> We may use services like Google Analytics to help us analyze website usage. 
                        These cookies collect information in an anonymous form.
                      </p>
                    </div>

                    {/* Functional Cookies */}
                    <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Functional Cookies</h3>
                      <p className="text-slate-700 mb-3 leading-relaxed">
                        These cookies enhance your experience by remembering your choices and preferences. They enable:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-slate-700">
                        <li>Remembering your language preferences</li>
                        <li>Saving your display settings and theme choices</li>
                        <li>Remembering information you've entered in forms</li>
                        <li>Providing enhanced and personalized features</li>
                        <li>Remembering your location for relevant content</li>
                      </ul>
                      <p className="text-slate-700 mt-3 leading-relaxed text-sm">
                        <strong>Note:</strong> While these cookies improve your experience, the website will still function if you disable them, 
                        though some features may be limited.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Why We Use Cookies */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Why We Use Cookies</h2>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    We use cookies for several important reasons:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-slate-700">
                    <li>
                      <strong>Site Functionality:</strong> Cookies enable core features of our website to work properly, 
                      such as maintaining your login session, remembering your preferences, and ensuring secure access to your account.
                    </li>
                    <li>
                      <strong>Performance:</strong> Cookies help us monitor and improve website performance by identifying technical issues, 
                      optimizing page load times, and ensuring smooth navigation throughout the site.
                    </li>
                    <li>
                      <strong>User Experience:</strong> Cookies allow us to personalize your experience by remembering your settings, 
                      preferences, and previous interactions, making your visit more convenient and tailored to your needs.
                    </li>
                    <li>
                      <strong>Analytics:</strong> Cookies provide us with valuable insights into how our website is used, 
                      helping us understand what content is most valuable to users and how we can improve our services.
                    </li>
                    <li>
                      <strong>Security:</strong> Cookies help us detect and prevent fraudulent activity, protect against security threats, 
                      and ensure the integrity of our platform.
                    </li>
                  </ul>
                </section>

                {/* How to Control Cookies */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">4. How You Can Control Cookies</h2>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    You have several options for managing cookies:
                  </p>

                  <div className="space-y-6">
                    {/* Browser Settings */}
                    <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Browser Settings</h3>
                      <p className="text-slate-700 mb-4 leading-relaxed">
                        Most web browsers allow you to control cookies through their settings. You can:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-slate-700">
                        <li>View and delete cookies stored on your device</li>
                        <li>Block all cookies or only third-party cookies</li>
                        <li>Set your browser to notify you before cookies are placed</li>
                        <li>Delete cookies when you close your browser</li>
                      </ul>
                      <p className="text-slate-700 mt-4 leading-relaxed text-sm">
                        <strong>How to access cookie settings:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-slate-700 text-sm">
                        <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                        <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                        <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                        <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                      </ul>
                      <p className="text-slate-700 mt-4 leading-relaxed text-sm">
                        <strong>Note:</strong> Blocking or deleting cookies may impact your experience on our website. 
                        Some features may not work properly if cookies are disabled.
                      </p>
                    </div>

                    {/* Cookie Banner */}
                    <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Cookie Consent Banner</h3>
                      <p className="text-slate-700 mb-3 leading-relaxed">
                        When you first visit our website, you may see a cookie consent banner that allows you to:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-slate-700">
                        <li>Accept all cookies</li>
                        <li>Reject non-essential cookies</li>
                        <li>Customize your cookie preferences</li>
                        <li>Learn more about the cookies we use</li>
                      </ul>
                      <p className="text-slate-700 mt-4 leading-relaxed text-sm">
                        You can change your cookie preferences at any time by accessing the cookie settings in your browser 
                        or by clearing your browser's cookies and revisiting our site to see the consent banner again.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Third-Party Cookies */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Third-Party Cookies</h2>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    In addition to our own cookies, we may also use various third-party cookies to report usage statistics, 
                    deliver advertisements, and provide enhanced functionality. These third-party cookies are subject to their 
                    respective privacy policies.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Examples of third-party services that may set cookies on our website include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 mt-4">
                    <li>Google Analytics (for website analytics)</li>
                    <li>Payment processors (for secure payment processing)</li>
                    <li>Social media platforms (if you choose to share content)</li>
                    <li>Other service providers that help us operate our platform</li>
                  </ul>
                </section>

                {/* Cookie Duration */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookie Duration</h2>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    Cookies can be either "session" cookies or "persistent" cookies:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>
                      <strong>Session Cookies:</strong> These are temporary cookies that are deleted when you close your browser. 
                      They are used to maintain your session while you navigate our website.
                    </li>
                    <li>
                      <strong>Persistent Cookies:</strong> These remain on your device for a set period or until you delete them. 
                      They remember your preferences and settings for future visits.
                    </li>
                  </ul>
                </section>

                {/* Updates to Cookie Policy */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Updates to This Cookie Policy</h2>
                  <p className="text-slate-700 leading-relaxed">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, 
                    legal, or regulatory reasons. We will notify you of any material changes by posting the updated Cookie Policy on 
                    this page and updating the "Last updated" date. We encourage you to review this Cookie Policy periodically to 
                    stay informed about how we use cookies.
                  </p>
                </section>

                {/* Contact Information */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                  </p>
                  <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                    <p className="text-slate-700 mb-2">
                      <strong>DreamScale</strong>
                    </p>
                    <p className="text-slate-600 text-sm">
                      Email: dreamscalee@gmail.com
                    </p>
                    <p className="text-slate-600 text-sm">
                      Website: dreamscale.co.za
                    </p>
                    <p className="text-slate-600 text-sm">
                      Country: South Africa
                    </p>
                  </div>
                </section>
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
