import type React from "react"
import Image from "next/image"

export const Logo = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="flex items-center gap-3" {...props}>
      <Image
        src="/Logo.png"
        alt="DreamScale Logo"
        width={80}
        height={80}
        className="w-16 h-16 md:w-20 md:h-20 object-contain"
        priority
      />
      <span className="text-shimmer text-xl md:text-2xl font-semibold text-slate-900">
        DreamScale
      </span>
    </div>
  )
}
