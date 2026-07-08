import Link from "next/link"
import { APP_SIGNUP_URL } from "@/lib/site"
import { Logo } from "./logo"
import { MobileMenu } from "./mobile-menu"

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/demo", label: "Demo" },
  { href: "/#faq", label: "FAQ" },
] as const

export const Header = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      <div className="border-b border-slate-200/70 bg-white/92 backdrop-blur-xl">
        <header
          className="container flex min-w-0 items-center justify-between gap-2 py-3.5 sm:gap-4"
          style={{ maxWidth: "1080px", width: "100%", margin: "0 auto" }}
        >
          <Link href="/" className="min-w-0 shrink">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex xl:gap-2" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="rounded-full px-3.5 py-2 text-[0.9rem] font-medium tracking-[-0.01em] text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={APP_SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-[44px] items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-[0.9rem] font-semibold tracking-[-0.01em] text-white transition-colors hover:bg-slate-800 sm:inline-flex"
            >
              Get started free
            </a>
            <MobileMenu />
          </div>
        </header>
      </div>
    </div>
  )
}
