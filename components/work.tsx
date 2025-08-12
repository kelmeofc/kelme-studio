"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { GradientButton } from "@/components/ui/gradient-button" // Import new gradient button

const portfolioItems = [
  {
    id: 1,
    title: "FINTECH REVOLUTION",
    category: "MICRO-SAAS",
    description: "Complete financial platform with AI-powered insights and automated trading capabilities.",
    image: "/placeholder-opudz.png",
    year: "2024",
  },
  {
    id: 2,
    title: "LUXURY ECOMMERCE",
    category: "SHOPIFY",
    description: "Premium fashion brand with immersive shopping experience and AR try-on features.",
    image: "/luxury-fashion-ecommerce.png",
    year: "2024",
  },
  {
    id: 3,
    title: "STARTUP LANDING",
    category: "LANDING PAGE",
    description: "High-converting landing page that increased conversions by 340% in 30 days.",
    image: "/modern-startup-hero.png",
    year: "2023",
  },
  {
    id: 4,
    title: "TECH BRAND IDENTITY",
    category: "BRANDING",
    description: "Complete brand overhaul for emerging tech company, from logo to digital presence.",
    image: "/placeholder-c7jvm.png",
    year: "2023",
  },
  {
    id: 5,
    title: "VIRAL CAMPAIGN",
    category: "MARKETING",
    description: "Social media campaign that reached 2M+ users and generated 150% ROI.",
    image: "/placeholder-zbxuv.png",
    year: "2024",
  },
  {
    id: 6,
    title: "ENTERPRISE SOLUTION",
    category: "DEVELOPMENT",
    description: "Custom CRM system handling 10K+ daily transactions with real-time analytics.",
    image: "/enterprise-crm-dashboard.png",
    year: "2023",
  },
]

export function Work() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
    <section className="py-32 px-6 lg:px-12 bg-[#0F0E0D]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-[#F7F7F7] mb-6 font-satoshi uppercase tracking-tight">
            Our Portfolio
          </h2>
          <p className="text-lg text-[#F7F7F7]/60 max-w-2xl font-satoshi">
            The foundation of our portfolio demonstrates who we truly are. We invest into exceptional people and follow
            the long-term vision.
          </p>
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
            VIEW PORTFOLIO
          </GradientButton>
        </div>
      </div>
    </section>
  )
}
