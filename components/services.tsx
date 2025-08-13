"use client"

import React, { useState } from "react"
import { Code, Megaphone, Palette, Video } from "lucide-react"
import { useMessages } from 'next-intl'

// Mapeia ícones por possíveis categorias (EN/PT)
const iconMap: Record<string, React.ReactElement> = {
  Development: <Code className="w-5 h-5" />,
  Marketing: <Megaphone className="w-5 h-5" />,
  Strategy: <Palette className="w-5 h-5" />,
  "Video Editing": <Video className="w-5 h-5" />,
  Desenvolvimento: <Code className="w-5 h-5" />,
  "Edição de Vídeo": <Video className="w-5 h-5" />,
  Estratégia: <Palette className="w-5 h-5" />,
}

export function Services() {
  const [activeService, setActiveService] = useState(0)
  const messages: any = useMessages()
  const services: { number: string; category: string; description: string; items: string[] }[] = messages.services.list

  return (
    <section className="py-32 px-6 lg:px-12 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-[#0F0E0D] mb-6 font-satoshi uppercase tracking-tight">
            {messages.services.sectionTitle}
          </h2>
          <p className="text-lg text-[#0F0E0D]/60 max-w-2xl font-satoshi">
            {messages.services.sectionSubtitle}
          </p>
        </div>

        <div className="space-y-1">
          {services.map((service, index: number) => (
            <div
              key={service.category}
              className={`group cursor-pointer transition-all duration-300 ${
                activeService === index ? "bg-[#0F0E0D]" : "hover:bg-[#0F0E0D]/5"
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className="flex items-center justify-between py-8 px-6">
                <div className="flex items-center gap-8">
                  <span
                    className={`text-sm font-medium font-satoshi ${
                      activeService === index ? "text-[#CB8D0F]" : "text-[#0F0E0D]/40"
                    }`}
                  >
                    {service.number}
                  </span>
                  <div className="flex items-center gap-4">
                    <div className={`${activeService === index ? "text-[#CB8D0F]" : "text-[#0F0E0D]/60"}`}> {iconMap[service.category] || <Code className="w-5 h-5" />} </div>
                    <h3
                      className={`text-xl font-semibold font-satoshi uppercase tracking-wide ${
                        activeService === index ? "text-[#F7F7F7]" : "text-[#0F0E0D]"
                      }`}
                    >
                      {service.category.toUpperCase()}
                    </h3>
                  </div>
                </div>
                <div className={`text-sm ${activeService === index ? "text-[#F7F7F7]/60" : "text-[#0F0E0D]/40"}`}>
                  {service.items.join(", ")}
                </div>
              </div>

              {activeService === index && (
                <div className="px-6 pb-8">
                  <div className="ml-16 max-w-2xl">
                    <p className="text-[#F7F7F7]/80 font-satoshi leading-relaxed">{service.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
