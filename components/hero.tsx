"use client"

import dynamic from "next/dynamic"
import { useState } from "react"
import { APP_SIGNUP_URL } from "@/lib/site"
import { HERO_VIDEO_MP4_PATH } from "@/lib/site"

const GL = dynamic(() => import("./gl").then((m) => m.GL), {
  ssr: false,
  loading: () => null,
})

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
  const [hovering, setHovering] = useState(false)

  return (
    <section className="relative overflow-hidden bg-white text-slate-900">
      <GL hovering={hovering} />

      <div
        className="container relative z-10 mx-auto grid items-center gap-10 px-4 pt-28 pb-16 sm:pt-32 lg:grid-cols-2 lg:gap-12 lg:pt-36 lg:pb-24"
        style={{ maxWidth: "1280px" }}
      >
        {/* Left: headline + sign-in */}
        <div className="mx-auto w-full max-w-md text-center lg:mx-0 lg:text-left">
          <h1
            className="font-display font-semibold tracking-tight text-slate-900"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.25rem)", lineHeight: 1.05 }}
          >
            Scale anything
            <br className="hidden sm:block" /> with <span className="text-shimmer">DreamScale</span>
          </h1>
          <p
            className="mx-auto mt-5 max-w-sm text-balance text-slate-600 lg:mx-0"
            style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)" }}
          >
            Build, grow, and run your entire business just by describing what you need.
          </p>

          {/* Sign-in card */}
          <div
            className="mx-auto mt-8 w-full max-w-sm rounded-2xl border border-slate-200/80 bg-white/85 p-5 text-left shadow-[0_24px_70px_-32px_rgba(0,149,255,0.35)] backdrop-blur-md lg:mx-0"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <div className="mb-4 rounded-xl bg-blue-50 px-4 py-2.5 text-center text-xs text-slate-600">
              <span className="mr-1.5 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                New
              </span>
              DreamScale update: now available
            </div>

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
              className="flex min-h-[48px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition-all hover:from-blue-600 hover:to-blue-700 hover:shadow-lg"
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
        </div>

        {/* Right: product preview window */}
        <div className="relative mx-auto w-full max-w-2xl">
          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_30px_80px_-30px_rgba(0,149,255,0.35)]">
            {/* window chrome */}
            <div className="flex items-center gap-1.5 border-b border-slate-200/80 bg-slate-50 px-4 py-3">
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
