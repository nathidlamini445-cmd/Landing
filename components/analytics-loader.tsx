"use client"

import Script from "next/script"
import { useEffect, useState } from "react"
import { getCookieConsent } from "@/components/cookie-banner"

const clarityProjectId =
  process.env.NEXT_PUBLIC_MICROSOFT_CLARITY_ID?.trim() || "walug4w1o0"

export function AnalyticsLoader() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const sync = () => setEnabled(getCookieConsent() === "all")
    sync()
    window.addEventListener("dreamscale-cookie-consent", sync)
    return () => window.removeEventListener("dreamscale-cookie-consent", sync)
  }, [])

  if (!enabled) return null

  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${clarityProjectId}");
      `}
    </Script>
  )
}
