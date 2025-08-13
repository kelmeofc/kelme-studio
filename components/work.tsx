"use client"

import { useState } from "react"
import { useMessages } from 'next-intl'
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { GradientButton } from "@/components/ui/gradient-button" // Import new gradient button

export function Work() {
  const messages: any = useMessages()
  const portfolioItems: any[] = messages.work.items
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
    <section className="py-32 px-6 lg:px-12 bg-[#0F0E0D]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-[#F7F7F7] mb-6 font-satoshi uppercase tracking-tight">
            {messages.work.sectionTitle}
          </h2>
          <p className="text-lg text-[#F7F7F7]/60 max-w-2xl font-satoshi">{messages.work.sectionSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-1">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden bg-[#F7F7F7]/5 hover:bg-[#F7F7F7]/10 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0D]/60 via-transparent to-transparent" />

                <div
                  className={`absolute top-6 right-6 transition-opacity duration-300 ${
                    hoveredItem === item.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="w-10 h-10 bg-[#CB8D0F] rounded-lg flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 text-[#0F0E0D]" />
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-[#F7F7F7]/40 font-satoshi">{item.year}</span>
                  <span className="text-sm font-medium text-[#CB8D0F] font-satoshi uppercase">{item.category}</span>
                </div>

                <h3 className="text-xl font-semibold text-[#F7F7F7] mb-3 font-satoshi uppercase tracking-wide">
                  {item.title}
                </h3>

                <p className="text-[#F7F7F7]/60 font-satoshi leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <GradientButton className="inline-flex items-center gap-2 px-6 py-3 transition-colors">
            {messages.work.viewButton.toUpperCase()}
          </GradientButton>
        </div>
      </div>
    </section>
  )
}
