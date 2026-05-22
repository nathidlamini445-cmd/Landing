import type React from "react"
import Image from "next/image"

export const Logo = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="flex min-w-0 items-center gap-1.5 sm:gap-3" {...props}>
      <Image
        src="/Logo.png"
        alt="DreamScale Logo"
        width={80}
        height={80}
        className="w-9 h-9 shrink-0 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
        priority
      />
      <span className="text-shimmer font-display font-semibold leading-tight" style={{ fontSize: "clamp(0.9rem, 4vw, 1.5rem)" }}>
        DreamScale
      </span>
    </div>
  )
}
