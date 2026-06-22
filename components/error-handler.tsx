"use client"

import { useEffect } from "react"

export function ErrorHandler() {
  useEffect(() => {
    // Suppress non-critical fetch errors in development
    if (process.env.NODE_ENV === 'development') {
      const originalFetch = window.fetch
      window.fetch = function(...args) {
        return originalFetch.apply(this, args).catch((error) => {
          // Suppress "Failed to fetch" errors that are often non-critical
          // (like font loading, analytics, etc.)
          if (error?.message?.includes('Failed to fetch')) {
            // Silently handle - these are often network issues or blocked requests
            return Promise.reject(error)
          }
          throw error
        })
      }

      // Also suppress unhandled promise rejections for fetch errors
      window.addEventListener('unhandledrejection', (event) => {
        if (event.reason?.message?.includes('Failed to fetch')) {
          event.preventDefault()
        }
      })

      return () => {
        window.fetch = originalFetch
      }
    }
  }, [])

  return null
}
