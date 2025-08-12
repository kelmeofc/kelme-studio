"use client"

import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import Image from "next/image"
import { LanguageSelector } from "./language-selector"
import { GradientButton } from "@/components/ui/gradient-button" // Import new gradient button

const footerSections = {
  explore: [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
  ],
  services: [
    { name: "Development", href: "#" },
    { name: "Marketing", href: "#" },
    { name: "Strategy", href: "#" },
    { name: "Video Editing", href: "#" },
  ],
  social: [
    { name: "LinkedIn", icon: <Linkedin className="w-4 h-4" />, href: "#" },
    { name: "Instagram", icon: <Instagram className="w-4 h-4" />, href: "#" },
    { name: "Twitter", icon: <Twitter className="w-4 h-4" />, href: "#" },
    { name: "YouTube", icon: <Youtube className="w-4 h-4" />, href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#0F0E0D]">
      {/* CTA Section */}
      <div className="py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-bold text-[#F7F7F7] mb-8 leading-tight">
            Ready to make your brand{" "}
            <span className="bg-gradient-to-r from-[#CB8D0F] to-[#E6A635] bg-clip-text text-transparent">fly high</span>
            ?
          </h2>
          <p className="text-xl text-[#F7F7F7]/60 mb-12 max-w-2xl mx-auto">
            Let's discuss your project and elevate your digital presence to new heights.
          </p>
          <GradientButton className="px-12 py-4 tracking-wider hover:scale-105">TALK TO DIEGO</GradientButton>
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
              <p className="text-[#F7F7F7]/50 text-sm leading-relaxed">
                Elevating brands through strategic digital solutions and creative excellence.
              </p>
            </div>

            {/* Explore Column */}
            <div>
              <h3 className="text-[#CB8D0F] font-semibold mb-8 uppercase tracking-wide text-sm">Explore</h3>
              <ul className="space-y-5">
                {footerSections.explore.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[#F7F7F7]/60 hover:text-[#F7F7F7] transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-[#CB8D0F] font-semibold mb-8 uppercase tracking-wide text-sm">Services</h3>
              <ul className="space-y-5">
                {footerSections.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[#F7F7F7]/60 hover:text-[#F7F7F7] transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Column */}
            <div>
              <h3 className="text-[#CB8D0F] font-semibold mb-8 uppercase tracking-wide text-sm">Social</h3>
              <ul className="space-y-5">
                {footerSections.social.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      className="flex items-center gap-3 text-[#F7F7F7]/60 hover:text-[#F7F7F7] transition-colors duration-300"
                    >
                      {social.icon}
                      {social.name}
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
          <p className="text-[#F7F7F7]/40 text-sm text-center">© 2024 KELME STUDIO. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
