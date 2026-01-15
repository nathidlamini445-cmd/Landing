"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { GL } from "@/components/gl"
import { Leva } from "leva"

export default function PrivacyPage() {
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

            {/* Privacy Policy Content */}
            <div className="bg-white/40 backdrop-blur-md border border-blue-200/50 rounded-2xl p-8 sm:p-10 md:p-12 shadow-lg shadow-blue-500/5">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                Privacy Policy
              </h1>
              <p className="text-slate-600 mb-8 text-sm sm:text-base">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <div className="prose prose-slate max-w-none space-y-8">
                {/* Who We Are */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Who We Are</h2>
                  <p className="text-slate-700 leading-relaxed">
                    DreamScale is an entrepreneurship-focused SaaS platform designed to help entrepreneurs build and scale businesses. 
                    We are based in South Africa and operate through our website at dreamscale.co.za.
                  </p>
                </section>

                {/* Information We Collect */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    We collect personal information that you voluntarily provide when you register, use our services, or contact us. 
                    The types of information we collect include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li><strong>Personal Information:</strong> Name, email address, phone number</li>
                    <li><strong>Login Details:</strong> Username, password (encrypted), and authentication credentials</li>
                    <li><strong>Payment Information:</strong> Payment details are processed securely through third-party payment processors. We do not store your full payment card information.</li>
                    <li><strong>Usage Data:</strong> IP address, browser type and version, device information, pages visited, time spent on pages, and other usage statistics</li>
                    <li><strong>Communication Data:</strong> Messages, feedback, and other communications you send to us</li>
                  </ul>
                </section>

                {/* How We Use Information */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li><strong>Provide and Improve Our Services:</strong> To operate, maintain, and improve our platform, including step-by-step guidance, resource mapping, and business education</li>
                    <li><strong>Customer Support:</strong> To respond to your inquiries, provide technical support, and assist with your account</li>
                    <li><strong>Payments:</strong> To process transactions and manage billing through secure third-party payment processors</li>
                    <li><strong>Communication:</strong> To send you service updates, newsletters, marketing communications (with your consent), and important notices about your account</li>
                    <li><strong>Analytics:</strong> To analyze usage patterns, improve user experience, and develop new features</li>
                    <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
                  </ul>
                </section>

                {/* Data Sharing */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Sharing</h2>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    We may share your information with the following parties:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li><strong>Hosting Providers:</strong> We use cloud hosting services to store and process your data securely</li>
                    <li><strong>Payment Processors:</strong> Third-party payment processors handle payment transactions securely</li>
                    <li><strong>Analytics Tools:</strong> We use analytics services (such as Google Analytics) to understand how our platform is used</li>
                    <li><strong>Service Providers:</strong> We may share data with trusted service providers who assist in operating our platform, subject to confidentiality agreements</li>
                    <li><strong>Legal Requirements:</strong> We may disclose information if required by law, court order, or government regulation</li>
                  </ul>
                  <p className="text-slate-700 mt-4 leading-relaxed">
                    We do not sell your personal information to third parties for marketing purposes.
                  </p>
                </section>

                {/* Data Protection */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Protection</h2>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal information, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Secure authentication and access controls</li>
                    <li>Regular security assessments and updates</li>
                    <li>Limited access to personal information on a need-to-know basis</li>
                  </ul>
                  <p className="text-slate-700 mt-4 leading-relaxed">
                    However, no method of transmission over the internet or electronic storage is 100% secure. 
                    While we strive to protect your personal information, we cannot guarantee absolute security. 
                    You use our services at your own risk.
                  </p>
                </section>

                {/* User Rights */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your Rights</h2>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li><strong>Access:</strong> You can request access to the personal information we hold about you</li>
                    <li><strong>Correction:</strong> You can request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> You can request deletion of your personal information, subject to legal and contractual obligations</li>
                    <li><strong>Opt-out of Marketing:</strong> You can unsubscribe from marketing communications at any time by clicking the unsubscribe link in our emails or contacting us</li>
                    <li><strong>Data Portability:</strong> You can request a copy of your data in a structured, machine-readable format</li>
                    <li><strong>Objection:</strong> You can object to certain processing of your personal information</li>
                  </ul>
                  <p className="text-slate-700 mt-4 leading-relaxed">
                    To exercise these rights, please contact us using the contact details provided below.
                  </p>
                </section>

                {/* Compliance */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Compliance</h2>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    We comply with applicable data protection laws, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li><strong>POPIA (Protection of Personal Information Act):</strong> South Africa's data protection legislation</li>
                    <li><strong>GDPR (General Data Protection Regulation):</strong> For users located in the European Union</li>
                  </ul>
                  <p className="text-slate-700 mt-4 leading-relaxed">
                    We are committed to protecting your privacy and handling your personal information in accordance with these regulations.
                  </p>
                </section>

                {/* Contact Details */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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

                {/* Changes to Policy */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Changes to This Policy</h2>
                  <p className="text-slate-700 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new 
                    Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy 
                    periodically for any changes.
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
