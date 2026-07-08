"use client"

import Link from "next/link"
import { APP_SIGNUP_URL } from "@/lib/site"
import { cn } from "@/lib/utils"
import * as Dialog from "@radix-ui/react-dialog"
import { Menu, X } from "lucide-react"
import { useState } from "react"

interface MobileMenuProps {
  className?: string
}

const mainLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/demo", label: "Demo" },
  { href: "/why", label: "Why DreamScale" },
  { href: "/testimonials", label: "Early feedback" },
  { href: "/#faq", label: "FAQ" },
]

const vsLinks = [
  { href: "/vs/notion", label: "vs Notion" },
  { href: "/vs/monday", label: "vs Monday" },
  { href: "/vs/clickup", label: "vs ClickUp" },
  { href: "/vs/hubspot", label: "vs HubSpot" },
]

export const MobileMenu = ({ className }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <Dialog.Root modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className={cn(
            "group inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-slate-900 transition-colors touch-manipulation active:bg-slate-100 lg:hidden",
            className,
          )}
          aria-label="Open menu"
        >
          <Menu className="group-[[data-state=open]]:hidden" size={24} />
          <X className="hidden group-[[data-state=open]]:block" size={24} />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <div data-overlay="true" className="fixed inset-0 z-30 bg-white/80 backdrop-blur-sm" />

        <Dialog.Content
          onInteractOutside={(e) => {
            if (e.target instanceof HTMLElement && e.target.dataset.overlay !== "true") {
              e.preventDefault()
            }
          }}
          className="fixed top-0 left-0 z-40 w-full overflow-y-auto py-24 sm:py-28 md:py-40"
          style={{
            paddingTop: "max(6rem, env(safe-area-inset-top, 0px) + 4.5rem)",
            paddingBottom: "max(1.5rem, env(safe-area-inset-bottom, 0px))",
          }}
        >
          <Dialog.Title className="sr-only">Menu</Dialog.Title>

          <nav className="container mx-auto flex flex-col space-y-1" style={{ maxWidth: "1280px", width: "100%" }}>
            {mainLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="flex min-h-12 items-center border-b border-slate-200/80 py-2 text-base font-medium text-slate-800 touch-manipulation active:text-[rgb(0,149,255)]"
              >
                {item.label}
              </a>
            ))}

            <p className="pt-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Compare</p>
            {vsLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="flex min-h-11 items-center py-2 text-sm text-slate-700"
              >
                {item.label}
              </Link>
            ))}

            <a
              href={APP_SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="mt-4 inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-slate-900 px-6 py-4 text-base font-semibold text-white shadow-md touch-manipulation active:scale-[0.99]"
            >
              Get started free
            </a>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
