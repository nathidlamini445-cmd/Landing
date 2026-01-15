import Link from "next/link"
import { Logo } from "./logo"
import { MobileMenu } from "./mobile-menu"

export const Header = () => {
  return (
    <div className="fixed z-50 top-0 left-0 w-full">
      <div className="backdrop-blur-xl bg-white/10 border-b border-blue-200/20 shadow-lg shadow-blue-500/5">
        <header className="flex items-center justify-between container py-3 sm:py-4 md:py-5" style={{ maxWidth: '1440px', width: '100%', margin: '0 auto' }}>
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex items-center gap-4">
            <a
              className="uppercase max-lg:hidden transition-colors ease-out duration-150 font-mono text-primary hover:text-primary/80"
              href="https://dream-scale3-fixed.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 'clamp(0.875rem, 1.1vw, 1rem)' }}
            >
              Open DreamScale
            </a>
            <MobileMenu />
          </div>
        </header>
      </div>
    </div>
  )
}
