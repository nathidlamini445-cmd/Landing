"use client"

import { DEMO_VIDEO_MP4_PATH, DEMO_VIDEO_POSTER_PATH } from "@/lib/site"

export function ProductShowcaseSection() {
  return (
    <section
      id="demo"
      className="relative isolate z-[1] scroll-mt-28 border-b border-slate-200/70 bg-white py-14 sm:py-16 md:py-20"
      aria-labelledby="demo-heading"
    >
      <div className="container mx-auto px-4" style={{ maxWidth: "1440px", width: "100%" }}>
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">See the product</p>
          <h2
            id="demo-heading"
            className="font-display font-semibold tracking-tight text-slate-900"
            style={{ fontSize: "clamp(1.65rem, 3vw, 2.35rem)", lineHeight: 1.15 }}
          >
            The competitor intelligence feature
          </h2>
          <p
            className="mt-4 text-slate-600 leading-relaxed"
            style={{ fontSize: "clamp(1rem, 1.15vw, 1.0625rem)" }}
          >
            Watch one workflow before you sign up. See how rivalry signals and positioning context show up where you
            operate.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-black shadow-[0_24px_70px_-32px_rgba(15,23,42,0.35)]">
            <video
              className="demo-video-player aspect-video max-h-[min(72vh,720px)] w-full bg-black object-contain object-center"
              controls
              playsInline
              preload="metadata"
              poster={DEMO_VIDEO_POSTER_PATH}
            >
              <source src={DEMO_VIDEO_MP4_PATH} type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
