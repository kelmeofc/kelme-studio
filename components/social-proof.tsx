"use client"

import { Star, Quote, Trophy, Users } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "SARAH MARTINEZ",
    role: "CEO, TechFlow Solutions",
    content:
      "Diego and his team transformed our entire digital presence. Our conversion rates increased by 280% in just 3 months. The attention to detail and strategic thinking is unmatched.",
    rating: 5,
    image: "/sarah-martinez-testimonial.png",
  },
  {
    name: "MICHAEL CHEN",
    role: "Founder, EcoVenture",
    content:
      "Working with Kelme Studio was a game-changer. They didn't just build us a website - they crafted a complete brand experience that resonates with our audience.",
    rating: 5,
    image: "/michael-chen-testimonial.png",
  },
  {
    name: "ALEXANDRA TORRES",
    role: "Marketing Director, FinanceHub",
    content:
      "The ROI we've seen from our campaigns is incredible. Diego's strategic approach to digital marketing has elevated our brand beyond our expectations.",
    rating: 5,
    image: "/alexandra-torres-testimonial.png",
  },
]

const partners = [
  {
    name: "Microsoft",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoft.svg",
    color: "#5E5E5E",
  },
  {
    name: "Google",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg",
    color: "#4285F4",
  },
  {
    name: "NVIDIA",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nvidia.svg",
    color: "#76B900",
  },
  {
    name: "Meta",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/meta.svg",
    color: "#0866FF",
  },
  {
    name: "Adobe",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobe.svg",
    color: "#FF0000",
  },
  {
    name: "Shopify",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/shopify.svg",
    color: "#7AB55C",
  },
]

const awards = [
  {
    title: "BEST DIGITAL AGENCY",
    year: "2024",
    organization: "Marketing Excellence Awards",
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    title: "INNOVATION IN DESIGN",
    year: "2023",
    organization: "Web Design Awards",
    icon: <Star className="w-6 h-6" />,
  },
  {
    title: "CLIENT SATISFACTION",
    year: "2023",
    organization: "Agency Awards",
    icon: <Users className="w-6 h-6" />,
  },
]

function BrandLogo({ logo, name, color }: { logo: string; name: string; color: string }) {
  return (
    <div className="flex items-center justify-center w-[120px] h-[60px] group">
      <img
        src={logo || "/placeholder.svg"}
        alt={name}
        className="w-16 h-16 opacity-60 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0"
        style={{
          filter: "grayscale(1) brightness(0.8)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.filter = `grayscale(0) brightness(1)`
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter = "grayscale(1) brightness(0.8)"
        }}
      />
    </div>
  )
}

export function SocialProof() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#1A1918] to-[#0F0E0D]">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#CB8D0F]/20 to-[#CB8D0F]/10 backdrop-blur-sm border border-[#CB8D0F]/20 mb-6">
              <Quote className="w-4 h-4 text-[#CB8D0F]" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#F7F7F7] mb-6 uppercase tracking-tight">
              CLIENT
              <span className="block bg-gradient-to-r from-[#CB8D0F] to-[#E6A635] bg-clip-text text-transparent">
                TESTIMONIALS
              </span>
            </h2>
            <p className="text-xl text-[#F7F7F7]/70 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients say about working with Kelme Studio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#F7F7F7]/5 backdrop-blur-sm border border-[#F7F7F7]/10 rounded-2xl p-8 hover:border-[#CB8D0F]/30 transition-all duration-300"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#CB8D0F] text-[#CB8D0F]" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-[#F7F7F7]/90 mb-6 leading-relaxed">"{testimonial.content}"</blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-[#F7F7F7] uppercase tracking-wide text-sm">{testimonial.name}</div>
                    <div className="text-[#F7F7F7]/70 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-[#F7F7F7] mb-4 uppercase tracking-tight">
              YOU DESERVE
              <span className="block bg-gradient-to-r from-[#CB8D0F] to-[#E6A635] bg-clip-text text-transparent">
                THE BEST
              </span>
            </h3>
            <p className="text-lg text-[#F7F7F7]/70">
              Recognition from industry leaders validates our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-[#CB8D0F]/10 to-[#CB8D0F]/5 backdrop-blur-sm border border-[#CB8D0F]/20 rounded-2xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#CB8D0F]/20 rounded-full mb-6">
                  <div className="text-[#CB8D0F]">{award.icon}</div>
                </div>
                <h4 className="text-xl font-bold text-[#F7F7F7] mb-2 uppercase tracking-wide">{award.title}</h4>
                <div className="text-[#CB8D0F] font-semibold mb-2">{award.year}</div>
                <div className="text-[#F7F7F7]/70 text-sm">{award.organization}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-[#F7F7F7] mb-4 uppercase tracking-tight">
              WHO WE'VE
              <span className="block bg-gradient-to-r from-[#CB8D0F] to-[#E6A635] bg-clip-text text-transparent">
                PARTNERED WITH
              </span>
            </h3>
            <p className="text-lg text-[#F7F7F7]/70">Trusted by industry giants and innovative startups alike.</p>
          </div>

          {/* Infinite Scroll Container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-infinite">
              {/* First set of partners */}
              {partners.concat(partners).map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 px-8 py-4 mx-4 bg-[#F7F7F7]/5 backdrop-blur-sm border border-[#F7F7F7]/10 rounded-xl hover:border-[#CB8D0F]/30 transition-all duration-300 group whitespace-nowrap min-w-fit"
                >
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="w-8 h-8 opacity-60 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0"
                    style={{
                      filter: "grayscale(1) brightness(0.8)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = `grayscale(0) brightness(1)`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = "grayscale(1) brightness(0.8)"
                    }}
                  />
                  <span className="text-[#F7F7F7] font-semibold uppercase tracking-wide text-sm group-hover:text-[#CB8D0F] transition-colors duration-300">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
