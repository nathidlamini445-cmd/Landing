import Link from "next/link"
import { Logo } from "./logo"
import { MobileMenu } from "./mobile-menu"

export const Header = () => {
  return (
    <div className="fixed z-50 pt-4 sm:pt-6 md:pt-8 lg:pt-14 top-0 left-0 w-full">
      <header className="flex items-center justify-between container px-4 sm:px-6">
        <Link href="/">
          <Logo />
        </Link>
        <a
          className="uppercase max-lg:hidden transition-colors ease-out duration-150 font-mono text-primary hover:text-primary/80"
          href="https://dream-scale3-fixed.vercel.app/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open DreamScale
        </a>
        <MobileMenu />
      </header>
    </div>
  )
}
