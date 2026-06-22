/** Stable cookie name/value — bump version if semantics change */

export const LANDING_DEMO_COOKIE = "ds_landing_demo_used_v1" as const
export const LANDING_DEMO_COOKIE_VALUE = "1" as const

/** JSON `error` for 403 and on-page messaging (must stay in sync) */
export const LANDING_DEMO_LOCKED_MESSAGE =
  "You’ve already used your one free DreamScale preview in this browser. Sign up in the workspace to keep going—all live previews unlock there."
