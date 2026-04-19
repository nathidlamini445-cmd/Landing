"use client"

import { cn } from "@/lib/utils"
import * as Dialog from "@radix-ui/react-dialog"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface MobileMenuProps {
  className?: string
}

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
            "group lg:hidden inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-slate-900 transition-colors touch-manipulation active:bg-slate-100",
            className,
          )}
          aria-label="Open menu"
        >
          <Menu className="group-[[data-state=open]]:hidden" size={24} />
          <X className="hidden group-[[data-state=open]]:block" size={24} />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <div data-overlay="true" className="fixed z-30 inset-0 bg-white/80 backdrop-blur-sm" />

        <Dialog.Content
          onInteractOutside={(e) => {
            if (e.target instanceof HTMLElement && e.target.dataset.overlay !== "true") {
              e.preventDefault()
            }
          }}
          className="fixed top-0 left-0 w-full z-40 overflow-y-auto py-24 sm:py-28 md:py-40"
          style={{
            paddingTop: "max(6rem, env(safe-area-inset-top, 0px) + 4.5rem)",
            paddingBottom: "max(1.5rem, env(safe-area-inset-bottom, 0px))",
          }}
        >
          <Dialog.Title className="sr-only">Menu</Dialog.Title>

          <nav className="flex flex-col space-y-4 container mx-auto" style={{ maxWidth: '1440px', width: '100%' }}>
            {[
              { href: "#about", label: "About" },
              { href: "#vision", label: "Vision" },
              { href: "#ecosystem", label: "Features" },
              { href: "#dreams", label: "Dreams" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="flex min-h-12 items-center text-base font-medium text-slate-800 py-2 border-b border-slate-200/80 touch-manipulation active:text-[rgb(0,149,255)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://app.dreamscale.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="inline-flex min-h-12 items-center font-medium text-[rgb(0,149,255)] py-2 touch-manipulation"
            >
              Open DreamScale
            </a>
            <a
              href="https://app.dreamscale.co.za/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-base font-semibold text-white shadow-md touch-manipulation active:scale-[0.99]"
            >
              Get Started Free
            </a>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
