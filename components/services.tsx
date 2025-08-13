"use client"

import React, { useState } from "react"
import { Code, Megaphone, Palette, Video, ArrowRight } from "lucide-react"
import { useMessages } from 'next-intl'

// Mapeia ícones por possíveis categorias (EN/PT)
const iconMap: Record<string, React.ReactElement> = {
  Development: <Code className="w-12 h-12" />,
  Marketing: <Megaphone className="w-12 h-12" />,
  Strategy: <Palette className="w-12 h-12" />,
  "Video Editing": <Video className="w-12 h-12" />,
  Desenvolvimento: <Code className="w-12 h-12" />,
  "Edição de Vídeo": <Video className="w-12 h-12" />,
  Estratégia: <Palette className="w-12 h-12" />,
}

export function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const messages: any = useMessages()
  const services: { number: string; category: string; description: string; items: string[] }[] = messages.services.list

  return (
    <section className="py-32 px-6 lg:px-12 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-[#0F0E0D] mb-6 font-satoshi uppercase tracking-tight">
            {messages.services.sectionTitle}
          </h2>
          <p className="text-lg text-[#0F0E0D]/60 max-w-3xl font-satoshi leading-relaxed">
            {messages.services.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index: number) => (
            <div
              key={service.category}
              className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-medium font-satoshi text-[#CB8D0F]">
                    {service.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#F7F7F7] flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-[#0F0E0D]" />
                  </div>
                </div>
                
                <div className="flex flex-col items-center mb-6 transition-transform duration-300 transform hover:scale-110">
                  <div className="text-[#CB8D0F] mb-4">
                    {iconMap[service.category] || <Code className="w-12 h-12" />}
                  </div>
                  <h3 className="text-xl font-semibold font-satoshi uppercase tracking-wide text-center text-[#0F0E0D] mb-2">
                    {service.category.toUpperCase()}
                  </h3>
                </div>
                
                <p className="text-[#0F0E0D]/80 font-satoshi leading-relaxed text-center mb-6">
                  {service.description}
                </p>
                
                <div className={`mt-auto transition-opacity duration-300 ${hoveredService === index ? 'opacity-100' : 'opacity-0 md:opacity-0 lg:opacity-0'} sm:opacity-100`}>
                  <div className="border-t border-[#0F0E0D]/10 pt-4 mt-4">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {service.items.map((item, i) => (
                        <span 
                          key={i}
                          className="text-xs font-medium bg-[#F7F7F7] text-[#0F0E0D]/70 px-3 py-1 rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <a 
            href="#contact" 
            className="bg-[#0F0E0D] hover:bg-[#CB8D0F] text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 flex items-center gap-2 font-satoshi"
          >
            {messages.navbar.letsTalk}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
