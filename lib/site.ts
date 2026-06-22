/** Where CTAs send new visitors. Prefer signup/register URL if yours exists (e.g. /signup); otherwise /login often includes Create account. */
export const APP_SIGNUP_URL =
  process.env.NEXT_PUBLIC_APP_SIGNUP_URL?.trim() || "https://app.dreamscale.co.za/login"

/** Main marketing video: drop MP4 here (see `public/videos/README.md`). */
export const DEMO_VIDEO_MP4_PATH = "/videos/feature-demo.mp4"

/** Optional poster frame (same basename as video is fine). */
export const DEMO_VIDEO_POSTER_PATH = "/videos/feature-demo-poster.jpg"

/** Hero product preview (the looping clip shown in the app window beside the sign-in box). */
export const HERO_VIDEO_MP4_PATH = "/videos/Dreamscalevideo.mp4"

/** Optional poster frame shown before the hero clip loads. */
export const HERO_VIDEO_POSTER_PATH = "/videos/hero-preview-poster.jpg"
