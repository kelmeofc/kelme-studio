"use client"

import { Quote, Award, Users, TrendingUp, Crown } from "lucide-react"
import Image from "next/image"

const achievements = [
  {
    icon: <Award className="w-6 h-6" />,
    number: "50+",
    label: "PROJECTS DELIVERED",
  },
  {
    icon: <Users className="w-6 h-6" />,
    number: "30+",
    label: "HAPPY CLIENTS",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    number: "340%",
    label: "AVG CONVERSION BOOST",
  },
]

export function Founder() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#0F0E0D] to-[#1A1918]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#CB8D0F]/20 to-[#CB8D0F]/10 backdrop-blur-sm border border-[#CB8D0F]/20 mb-6">
              <Crown className="w-4 h-4 text-[#CB8D0F]" />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-[#F7F7F7] mb-6 uppercase tracking-tight">
              MEET
              <span className="block bg-gradient-to-r from-[#CB8D0F] to-[#E6A635] bg-clip-text text-transparent">
                DIEGO KELME
              </span>
            </h2>

            <div className="relative mb-8">
              <Quote className="absolute -top-4 -left-4 w-8 h-8 text-[#CB8D0F]/30" />
              <blockquote className="text-xl md:text-2xl text-[#F7F7F7]/90 font-medium leading-relaxed pl-8">
                "Every brand has the potential to soar. My mission is to unlock that potential and help businesses reach
                heights they never thought possible."
              </blockquote>
            </div>

            <p className="text-lg text-[#F7F7F7]/70 mb-8 leading-relaxed">
              With over 8 years of experience in digital marketing and brand development, Diego has helped dozens of
              companies transform their digital presence. From startups to established enterprises, his strategic
              approach combines creativity with data-driven insights to deliver exceptional results.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#CB8D0F] mt-3 flex-shrink-0" />
                <p className="text-[#F7F7F7]/80">
                  <span className="font-semibold text-[#CB8D0F]">CERTIFIED EXPERT</span> in Google Ads, Meta Business,
                  and advanced analytics
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#CB8D0F] mt-3 flex-shrink-0" />
                <p className="text-[#F7F7F7]/80">
                  <span className="font-semibold text-[#CB8D0F]">SPEAKER</span> at major digital marketing conferences
                  across Latin America
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#CB8D0F] mt-3 flex-shrink-0" />
                <p className="text-[#F7F7F7]/80">
                  <span className="font-semibold text-[#CB8D0F]">MENTOR</span> to emerging entrepreneurs and digital
                  agencies
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl bg-[#F7F7F7]/5 backdrop-blur-sm border border-[#F7F7F7]/10"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-2 rounded-lg bg-[#CB8D0F]/20 text-[#CB8D0F]">{achievement.icon}</div>
                  </div>
                  <div className="text-2xl font-bold text-[#CB8D0F] mb-1">{achievement.number}</div>
                  <div className="text-xs text-[#F7F7F7]/70 uppercase tracking-wide font-semibold">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#CB8D0F]/20 to-transparent rounded-3xl blur-3xl" />
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#CB8D0F]/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#CB8D0F]/10 rounded-full blur-2xl" />

              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-[#F7F7F7]/10 to-[#F7F7F7]/5 backdrop-blur-sm border border-[#F7F7F7]/20 rounded-3xl p-8 overflow-hidden">
                <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
                  <Image src="/diego-kelme-portrait.png" alt="Diego Kelme - Founder" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0D]/20 to-transparent" />
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 px-3 py-2 bg-[#CB8D0F]/90 backdrop-blur-sm rounded-full">
                  <span className="text-xs font-bold text-[#0F0E0D] uppercase tracking-wide">FOUNDER & CEO</span>
                </div>

                <div className="absolute bottom-4 left-4 px-4 py-2 bg-[#F7F7F7]/10 backdrop-blur-sm border border-[#F7F7F7]/20 rounded-full">
                  <span className="text-sm font-semibold text-[#F7F7F7] uppercase tracking-wide">DIEGO KELME</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
