"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Plane } from "lucide-react"
import { GradientButton } from "@/components/ui/gradient-button" // Import new gradient button

function BrandLogo({ logo, name }: { logo: string; name: string }) {
  return (
    <div className="flex items-center justify-center">
      <img
        src={logo || "/placeholder.svg"}
        alt={name}
        className="w-20 h-8 opacity-40 hover:opacity-60 transition-opacity object-contain filter grayscale"
      />
    </div>
  )
}

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const trustedBrands = [
    { name: "SHOPIFY", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/shopify.svg" },
    { name: "WORDPRESS", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/wordpress.svg" },
    { name: "META", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/meta.svg" },
    { name: "GOOGLE", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg" },
  ]

  useEffect(() => {
    const elements = [titleRef.current, subtitleRef.current, ctaRef.current]

    elements.forEach((el, index) => {
      if (el) {
        el.style.opacity = "0"
        el.style.transform = "translateY(30px)"

        setTimeout(() => {
          el.style.transition = "all 0.8s ease-out"
          el.style.opacity = "1"
          el.style.transform = "translateY(0)"
        }, index * 200)
      }
    })
  }, [])

  return (
    <section className="px-6 py-32 lg:px-12 lg:py-40 max-w-7xl mx-auto relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[#0F0E0D]"></div>

      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#CB8D0F]/5 to-transparent blur-3xl"></div>

      <div className="max-w-4xl relative z-10">
        <div ref={ctaRef} className="mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-[#CB8D0F]/10 rounded-lg">
            <Plane className="h-5 w-5 text-[#CB8D0F] rotate-45" />
          </div>
        </div>

        <h1
          ref={titleRef}
          className="text-5xl lg:text-7xl font-bold text-[#F7F7F7] leading-tight mb-8 font-satoshi uppercase tracking-tight"
        >
          YOUR BRAND
          <br />
          <span className="text-[#CB8D0F]">DESERVES TO</span>
          <br />
          <span className="text-[#F7F7F7]">FLY HIGH</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg lg:text-xl text-[#F7F7F7]/60 leading-relaxed max-w-2xl mb-12 font-satoshi"
        >
          We elevate ambitious brands beyond the horizon, crafting digital experiences that soar above the competition.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <GradientButton size="lg" className="px-8 py-3 text-base transition-all duration-200">
            TALK TO DIEGO <ArrowRight className="ml-2 h-4 w-4" />
          </GradientButton>

          <GradientButton variant="secondary" size="lg" className="px-8 py-3 text-base bg-transparent">
            VIEW WORK
          </GradientButton>
        </div>

        <div className="pt-8 border-t border-[#F7F7F7]/10">
          <p className="text-xs text-[#F7F7F7]/40 mb-4 font-satoshi uppercase tracking-wider">
            TRUSTED BY 100+ GROWING BRANDS
          </p>
          <div className="flex items-center space-x-8">
            {trustedBrands.map((brand, index) => (
              <BrandLogo key={index} logo={brand.logo} name={brand.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
