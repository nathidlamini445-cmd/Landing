"use client"

import { APP_SIGNUP_URL } from "@/lib/site"
import { HERO_VIDEO_MP4_PATH } from "@/lib/site"

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.583-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
      />
      <path
        fill="#FBBC05"
        d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.997 8.997 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z"
      />
      <path
        fill="#EA4335"
        d="M9 3.583c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.166 6.656 3.583 9 3.583z"
      />
    </svg>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900">
      <div
        className="container relative z-10 mx-auto px-4 pt-28 pb-10 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-16"
        style={{ maxWidth: "1080px" }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="heading-hero text-slate-900">
            Scale your business
            <br />
            with <span className="text-shimmer">DreamScale</span>
          </h1>

          <p className="lead-text mx-auto mt-6 max-w-2xl text-balance">
            One AI workspace to plan, run, and grow your business. No more juggling twelve different tools.
          </p>
        </div>

        <div className="mx-auto mt-8 w-full max-w-sm">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-[0_20px_60px_-32px_rgba(15,23,42,0.15)]">
            <a
              href={APP_SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 transition-colors hover:bg-slate-50"
            >
              <GoogleIcon />
              Continue with Google
            </a>

            <div className="my-4 flex items-center gap-3 text-[11px] uppercase tracking-widest text-slate-400">
              <span className="h-px flex-1 bg-slate-200" />
              or
              <span className="h-px flex-1 bg-slate-200" />
            </div>

            <a
              href={APP_SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[48px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 text-sm font-medium text-white shadow-md shadow-blue-500/20 transition-all hover:from-blue-600 hover:to-blue-700"
            >
              Continue with email
            </a>

            <p className="mt-4 text-center text-[11px] leading-relaxed text-slate-500">
              By continuing, you acknowledge DreamScale&apos;s{" "}
              <a href="/privacy" className="text-blue-600 underline underline-offset-2 hover:text-blue-700">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          <p className="mt-4 text-center text-sm text-slate-500">Free to start. No credit card required.</p>
        </div>

        <div className="mx-auto mt-10 w-full max-w-4xl sm:mt-12">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_70px_-32px_rgba(15,23,42,0.18)]">
            <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 truncate text-xs text-slate-400">DreamScale workspace</span>
            </div>
            <video
              className="aspect-video w-full bg-slate-900 object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={HERO_VIDEO_MP4_PATH} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
