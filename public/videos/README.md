# Videos

Drop your MP4 files in this folder. Export as **MP4** (H.264 video + AAC audio) for the widest browser support.

## 1. Hero preview (the app window next to the sign-in box)

- Save as **`hero-preview.mp4`** — autoplays muted on a loop, just like Claude's hero.
- Optional first frame: **`hero-preview-poster.jpg`**.
- If `hero-preview.mp4` is missing, the hero falls back to `feature-demo.mp4`.

## 2. Full demo video (the larger player further down the page)

- Save as **`feature-demo.mp4`**.
- Optional first frame: **`feature-demo-poster.jpg`**.

Paths are configured in `lib/site.ts`.
