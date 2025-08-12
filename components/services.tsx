"use client"

import { useState } from "react"
import { Code, Megaphone, Palette, Video } from "lucide-react"

const services = [
  {
    number: "01",
    category: "DEVELOPMENT",
    icon: <Code className="w-5 h-5" />,
    description: "Custom solutions that scale with your business growth and vision.",
    items: ["WordPress", "Shopify", "Landing Pages", "Micro-SaaS", "MVP"],
  },
  {
    number: "02",
    category: "MARKETING",
    icon: <Megaphone className="w-5 h-5" />,
    description: "Strategic campaigns that drive engagement and measurable results.",
    items: ["Meta ADS", "Google ADS", "TikTok ADS", "Social Media", "Email Marketing", "SEO"],
  },
  {
    number: "03",
    category: "STRATEGY",
    icon: <Palette className="w-5 h-5" />,
    description: "Brand positioning and user experience that resonates with your audience.",
    items: ["Branding", "UI/UX Research"],
  },
  {
    number: "04",
    category: "VIDEO EDITING",
    icon: <Video className="w-5 h-5" />,
    description: "Compelling video content that converts viewers into customers.",
    items: ["VSL", "Creative Content for ADS"],
  },
]

export function Services() {
  const [activeService, setActiveService] = useState(0)

  return (
    <section className="py-32 px-6 lg:px-12 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-[#0F0E0D] mb-6 font-satoshi uppercase tracking-tight">
            Services
          </h2>
          <p className="text-lg text-[#0F0E0D]/60 max-w-2xl font-satoshi">
            We partner with founders in the early stages - and back them until the world sees what we see.
          </p>
        </div>

        <div className="space-y-1">
          {services.map((service, index) => (
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
                    <div className={`${activeService === index ? "text-[#CB8D0F]" : "text-[#0F0E0D]/60"}`}>
                      {service.icon}
                    </div>
                    <h3
                      className={`text-xl font-semibold font-satoshi uppercase tracking-wide ${
                        activeService === index ? "text-[#F7F7F7]" : "text-[#0F0E0D]"
                      }`}
                    >
                      {service.category}
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
