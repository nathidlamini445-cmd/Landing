import type React from "react"
interface SectionContainerProps {
  id: string
  children?: React.ReactNode
  className?: string
}

export function SectionContainer({ id, children, className }: SectionContainerProps) {
  return (
    <section id={id} className={`min-h-svh flex items-center justify-center relative ${className || ""}`}>
      <div className="container">
        <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 lg:p-16 max-w-4xl mx-auto">
          {children || (
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-sentient mb-4 text-foreground">Section {id}</h2>
              <p className="text-foreground/60 font-mono">Content coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
