import type React from "react"
import Image from "next/image"

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Render the wordmark in solid white (for use over dark backgrounds). */
  light?: boolean
}

export const Logo = ({ light = false, ...props }: LogoProps) => {
  return (
    <div className="flex min-w-0 items-center gap-1.5 sm:gap-3" {...props}>
      <Image
        src="/Logo.png"
        alt="DreamScale Logo"
        width={80}
        height={80}
        className="w-9 h-9 shrink-0 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain"
        priority
      />
      <span
        className={
          light
            ? "font-display font-semibold leading-tight text-white"
            : "text-shimmer font-display font-semibold leading-tight"
        }
        style={{ fontSize: "clamp(0.9rem, 4vw, 1.5rem)" }}
      >
        DreamScale
      </span>
    </div>
  )
}
