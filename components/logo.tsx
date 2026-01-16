import type React from "react"
import Image from "next/image"

export const Logo = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="flex items-center gap-2 sm:gap-3" {...props}>
      <Image
        src="/Logo.png"
        alt="DreamScale Logo"
        width={80}
        height={80}
        className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
        priority
      />
      <span className="text-shimmer font-semibold" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)' }}>
        DreamScale
      </span>
    </div>
  )
}
