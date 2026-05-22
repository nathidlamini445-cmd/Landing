"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { GL } from "@/components/gl"
import { Leva } from "leva"

export default function TermsPage() {
  return (
    <>
      <GL key="terms-gl" hovering={false} />
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

            {/* Terms of Service Content */}
            <div className="bg-white/40 backdrop-blur-md border border-blue-200/50 rounded-2xl p-8 sm:p-10 md:p-12 shadow-lg shadow-blue-500/5">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                Terms of Service
              </h1>
              <p className="text-slate-600 mb-8 text-sm sm:text-base">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <div className="prose prose-slate max-w-none space-y-8">
                {/* Acceptance of Terms */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-slate-700 leading-relaxed">
                    By accessing and using DreamScale's website and services (the "Service"), you accept and agree to be bound by these Terms of Service. 
                    If you do not agree to these terms, please do not use our Service. We reserve the right to modify these terms at any time, 
                    and your continued use of the Service after such modifications constitutes acceptance of the updated terms.
                  </p>
                </section>

                {/* Eligibility */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Eligibility</h2>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    To use our Service, you must:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>Be at least 18 years of age or have the legal capacity to enter into binding agreements in your jurisdiction</li>
                    <li>Provide accurate, current, and complete information during registration</li>
                    <li>Maintain and promptly update your account information to keep it accurate and current</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                  <p className="text-slate-700 mt-4 leading-relaxed">
                    If you are under 18, you may only use our Service with the consent and supervision of a parent or legal guardian.
                  </p>
                </section>

                {/* Account Responsibilities */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Account Responsibilities</h2>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    When you create an account with DreamScale, you are responsible for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li><strong>Security:</strong> Maintaining the confidentiality and security of your login credentials (username, password, and any other authentication information)</li>
                    <li><strong>Account Activity:</strong> All activities that occur under your account, whether authorized by you or not</li>
                    <li><strong>Immediate Notification:</strong> Notifying us immediately of any unauthorized use of your account or any other breach of security</li>
                    <li><strong>Accurate Information:</strong> Providing truthful and accurate information and updating it as necessary</li>
                  </ul>
                  <p className="text-slate-700 mt-4 leading-relaxed">
                    We reserve the right to suspend or terminate your access to the Service if you violate these Terms or misuse the platform. 
                    We may also suspend or terminate accounts that are inactive for extended periods or that we suspect of fraudulent activity.
                  </p>
                </section>

                {/* Acceptable Use */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Acceptable Use</h2>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    You agree not to use the Service to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>Violate any applicable laws, regulations, or third-party rights</li>
                    <li>Engage in any form of abuse, harassment, or harmful behavior towards other users or our staff</li>
                    <li>Attempt to hack, breach, or compromise the security of the Service or any related systems</li>
                    <li>Reverse engineer, decompile, or disassemble any part of the Service or attempt to extract source code</li>
                    <li>Use automated systems (bots, scrapers, etc.) to access the Service without our express written permission</li>
                    <li>Transmit any viruses, malware, or other harmful code</li>
                    <li>Impersonate any person or entity or falsely state or misrepresent your affiliation with any person or entity</li>
                    <li>Collect or harvest information about other users without their consent</li>
                    <li>Interfere with or disrupt the Service or servers connected to the Service</li>
                    <li>Use the Service for any illegal or unauthorized purpose</li>
                  </ul>
                  <p className="text-slate-700 mt-4 leading-relaxed">
                    Violation of these acceptable use policies may result in immediate termination of your account and may subject you to legal action.
                  </p>
                </section>

                {/* Billing, Renewals, Cancellations */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Billing, Renewals, and Cancellations</h2>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    If you subscribe to a paid plan:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li><strong>Billing:</strong> You agree to pay all fees associated with your subscription plan as described at the time of purchase</li>
                    <li><strong>Payment:</strong> Payments are processed securely through third-party payment processors. You are responsible for providing valid payment information</li>
                    <li><strong>Renewals:</strong> Subscriptions automatically renew at the end of each billing period unless you cancel before the renewal date</li>
                    <li><strong>Cancellations:</strong> You may cancel your subscription at any time through your account settings. Cancellation takes effect at the end of your current billing period</li>
                    <li><strong>Refunds:</strong> Refund policies are as stated at the time of purchase. We reserve the right to modify refund policies with reasonable notice</li>
                    <li><strong>Price Changes:</strong> We reserve the right to modify subscription prices with at least 30 days' notice to existing subscribers</li>
                    <li><strong>Failed Payments:</strong> If payment fails, we may suspend or terminate your access until payment is successfully processed</li>
                  </ul>
                </section>

                {/* Intellectual Property */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Intellectual Property</h2>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    The Service, including all content, features, functionality, software, code, designs, logos, trademarks, and branding, 
                    is owned by DreamScale and is protected by copyright, trademark, and other intellectual property laws.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li><strong>Our Rights:</strong> We own all rights, title, and interest in and to the Service, including all intellectual property rights</li>
                    <li><strong>Your License:</strong> We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for your personal or business purposes in accordance with these Terms</li>
                    <li><strong>Restrictions:</strong> You may not copy, modify, distribute, sell, lease, or create derivative works based on the Service without our express written permission</li>
                    <li><strong>User Content:</strong> You retain ownership of any content you create or upload to the Service. By using the Service, you grant us a license to use, store, and display your content as necessary to provide the Service</li>
                  </ul>
                </section>

                {/* Service Availability */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Service Availability</h2>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    We strive to provide reliable and uninterrupted service, but we cannot guarantee:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>Uninterrupted or error-free operation of the Service</li>
                    <li>That the Service will be available at all times or in all locations</li>
                    <li>That defects or errors will be corrected immediately</li>
                    <li>That the Service will meet your specific requirements or expectations</li>
                  </ul>
                  <p className="text-slate-700 mt-4 leading-relaxed">
                    We may perform scheduled or unscheduled maintenance, updates, or modifications to the Service, which may result in temporary unavailability. 
                    We will make reasonable efforts to minimize disruption and provide advance notice when possible.
                  </p>
                </section>

                {/* Limitation of Liability */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Limitation of Liability</h2>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    To the maximum extent permitted by law:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li><strong>No Warranty:</strong> The Service is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
                    <li><strong>Indirect Damages:</strong> We are not responsible for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, business opportunities, or goodwill</li>
                    <li><strong>Direct Damages:</strong> Our total liability for any claims arising from or related to the Service shall not exceed the amount you paid us in the 12 months preceding the claim, or R1,000 (South African Rand), whichever is greater</li>
                    <li><strong>Third-Party Services:</strong> We are not responsible for the actions, content, or services of third parties, including payment processors, hosting providers, or other integrated services</li>
                  </ul>
                  <p className="text-slate-700 mt-4 leading-relaxed">
                    Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, so some of the above limitations may not apply to you.
                  </p>
                </section>

                {/* Termination */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Termination</h2>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    Either party may terminate access to the Service:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li><strong>By You:</strong> You may terminate your account at any time by canceling your subscription and deleting your account through your account settings</li>
                    <li><strong>By Us:</strong> We may terminate or suspend your account immediately, without prior notice, if you violate these Terms, engage in fraudulent activity, or misuse the platform</li>
                    <li><strong>Effect of Termination:</strong> Upon termination, your right to use the Service will immediately cease. We may delete your account and data, subject to our data retention policies and legal obligations</li>
                    <li><strong>Survival:</strong> Provisions that by their nature should survive termination (including intellectual property, limitation of liability, and dispute resolution) will remain in effect after termination</li>
                  </ul>
                  <p className="text-slate-700 mt-4 leading-relaxed">
                    We reserve the right to suspend or terminate your access to the Service if you violate these Terms or misuse the platform.
                  </p>
                </section>

                {/* Governing Law */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Governing Law</h2>
                  <p className="text-slate-700 leading-relaxed">
                    These Terms of Service shall be governed by and construed in accordance with the laws of South Africa, without regard to its conflict of law provisions. 
                    Any disputes arising from or related to these Terms or the Service shall be subject to the exclusive jurisdiction of the courts of South Africa.
                  </p>
                </section>

                {/* Contact Information */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact Us</h2>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us:
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

                {/* Changes to Terms */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Changes to These Terms</h2>
                  <p className="text-slate-700 leading-relaxed">
                    We reserve the right to modify these Terms of Service at any time. We will notify you of any material changes by posting the updated Terms on this page 
                    and updating the "Last updated" date. Your continued use of the Service after such modifications constitutes acceptance of the updated Terms. 
                    If you do not agree to the modified Terms, you must stop using the Service and may terminate your account.
                  </p>
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
