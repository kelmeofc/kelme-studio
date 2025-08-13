"use client"

import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import Image from "next/image"
import { LanguageSelector } from "./language-selector"
import { GradientButton } from "@/components/ui/gradient-button"
import { useI18n } from "@/lib/i18n"

const socialIconMap: Record<string, React.ReactElement> = {
  LinkedIn: <Linkedin className="w-4 h-4" />,
  Instagram: <Instagram className="w-4 h-4" />,
  Twitter: <Twitter className="w-4 h-4" />,
  YouTube: <Youtube className="w-4 h-4" />,
  // PT labels keep same icons
  LinkedInPT: <Linkedin className="w-4 h-4" />,
}

export function Footer() {
  const { dictionary } = useI18n()
  const f = dictionary.footer
  return (
    <footer className="bg-[#0F0E0D]">
      {/* CTA Section */}
      <div className="py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-bold text-[#F7F7F7] mb-8 leading-tight">
            {f.cta.title.part1}{" "}
            <span className="bg-gradient-to-r from-[#CB8D0F] to-[#E6A635] bg-clip-text text-transparent">{f.cta.title.highlight}</span>
            {f.cta.title.part2}
          </h2>
          <p className="text-xl text-[#F7F7F7]/60 mb-12 max-w-2xl mx-auto">{f.cta.subtitle}</p>
          <GradientButton className="px-12 py-4 tracking-wider hover:scale-105">{f.cta.button.toUpperCase()}</GradientButton>
        </div>
      </div>

      {/* Detailed Footer */}
      <div className="border-t border-[#F7F7F7]/5 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-16">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <Image src="/kelme-icon.svg" alt="Kelme Studio" width={28} height={28} />
                <LanguageSelector />
              </div>
              <p className="text-[#F7F7F7]/50 text-sm leading-relaxed">{f.brandDescription}</p>
            </div>

            {/* Explore Column */}
            <div>
              <h3 className="text-[#CB8D0F] font-semibold mb-8 uppercase tracking-wide text-sm">{f.exploreTitle}</h3>
              <ul className="space-y-5">
                {f.exploreLinks.map((name: string, i: number) => (
                  <li key={i}>
                    <a href="#" className="text-[#F7F7F7]/60 hover:text-[#F7F7F7] transition-colors duration-300">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-[#CB8D0F] font-semibold mb-8 uppercase tracking-wide text-sm">{f.servicesTitle}</h3>
              <ul className="space-y-5">
                {f.serviceLinks.map((name: string, i: number) => (
                  <li key={i}>
                    <a href="#" className="text-[#F7F7F7]/60 hover:text-[#F7F7F7] transition-colors duration-300">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Column */}
            <div>
              <h3 className="text-[#CB8D0F] font-semibold mb-8 uppercase tracking-wide text-sm">{f.socialTitle}</h3>
              <ul className="space-y-5">
                {f.socialLinks.map((name: string, i: number) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="flex items-center gap-3 text-[#F7F7F7]/60 hover:text-[#F7F7F7] transition-colors duration-300"
                    >
                      {socialIconMap[name] || <Linkedin className="w-4 h-4" />}
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#F7F7F7]/5 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#F7F7F7]/40 text-sm text-center">{f.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
