import Link from "next/link"
import { Logo } from "./logo"
import { MobileMenu } from "./mobile-menu"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#vision", label: "Vision" },
  { href: "#ecosystem", label: "Features" },
  { href: "#dreams", label: "Dreams" },
] as const

export const Header = () => {
  return (
    <div className="fixed z-50 top-0 left-0 w-full">
      <div className="border-b border-slate-200/70 bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(15,23,42,0.04)]">
        <header
          className="flex min-w-0 items-center justify-between gap-2 sm:gap-4 container py-3 sm:py-3.5 md:py-4"
          style={{ maxWidth: "1440px", width: "100%", margin: "0 auto" }}
        >
          <Link href="/" className="min-w-0 shrink">
            <Logo />
          </Link>

          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Page sections"
          >
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              className="hidden sm:inline-flex max-lg:hidden text-sm font-medium text-slate-600 transition-colors hover:text-[rgb(0,149,255)]"
              href="https://app.dreamscale.co.za/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open DreamScale
            </a>
            <a
              href="https://app.dreamscale.co.za/login"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:from-blue-600 hover:to-blue-700 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Get Started Free
            </a>
            <MobileMenu />
          </div>
        </header>
      </div>
    </div>
  )
}
