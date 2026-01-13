"use client"

import { useEffect, useRef, useState } from "react"

export function DreamsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const pillars = [
    {
      title: "Inspiration",
      description:
        "DreamScale begins with a spark. A vision that challenges limits, awakens possibility, and dares to ask \"what if?\" We exist to ignite that spark in dreamers and innovators — reminding them that the future isn't just something we wait for, it's something we create.",
    },
    {
      title: "Creation",
      description:
        "Ideas only live when they are built. DreamScale provides the tools, clarity, and foundation to bring visions to life. From the bold sketch on paper to the systems that power industries, creation is where imagination turns into impact.",
    },
    {
      title: "Elevation",
      description:
        "DreamScale is not about small wins — it's about lifting visions higher than expected. True success isn't just growth, it's transformation. To elevate is to rise together, to reach new heights where ambition meets possibility.",
    },
  ]

  return (
    <section ref={sectionRef} id="dreams" className="relative min-h-screen flex items-start justify-center pt-8 pb-24">
      <div className="container mx-auto px-6 mt-12">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">
              Where Dreams Find Their Wings
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`group relative rounded-2xl border border-blue-200/50 bg-white/40 backdrop-blur-md p-8 transition-all duration-700 hover:border-blue-300/60 hover:bg-white/60 shadow-lg shadow-blue-500/5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 200 + 300}ms` }}
            >
              <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">{pillar.title}</h3>
              <p className="text-slate-600 text-center leading-relaxed text-sm">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
