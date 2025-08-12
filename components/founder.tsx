"use client"

import Image from "next/image"

export function Founder() {
  return (
    <section className="py-32 px-4 bg-[#0F0E0D]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <div className="order-1 lg:order-1">
            <div className="relative">
              <div className="relative h-[600px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/diego-kelme-portrait.png"
                  alt="Diego Kelme"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-2 space-y-8">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold text-[#F7F7F7] mb-4 uppercase tracking-tight leading-none">
                DIEGO
                <span className="block text-[#CB8D0F]">KELME</span>
              </h2>
              <p className="text-xl text-[#F7F7F7]/60 uppercase tracking-widest font-medium">
                FOUNDER & CREATIVE DIRECTOR
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-[#F7F7F7]/90 leading-relaxed">
                "Every brand deserves to fly high. I help businesses unlock their potential and reach new heights
                through strategic digital experiences."
              </p>

              <p className="text-lg text-[#F7F7F7]/70 leading-relaxed">
                8+ years transforming digital landscapes. From startups to enterprises, combining creativity with
                data-driven strategy to deliver exceptional results.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#F7F7F7]/10">
              <div>
                <div className="text-3xl font-bold text-[#CB8D0F] mb-1">50+</div>
                <div className="text-sm text-[#F7F7F7]/60 uppercase tracking-wide">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#CB8D0F] mb-1">30+</div>
                <div className="text-sm text-[#F7F7F7]/60 uppercase tracking-wide">Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#CB8D0F] mb-1">340%</div>
                <div className="text-sm text-[#F7F7F7]/60 uppercase tracking-wide">Avg Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
