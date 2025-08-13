"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { GradientButton } from "@/components/ui/gradient-button"
import { LanguageSelector } from "@/components/language-selector"
import { useI18n } from "@/lib/i18n"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t, dictionary } = useI18n()

  const menus = dictionary.navbar.menus

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F0E0D]/95 backdrop-blur-xl border-b border-[#CB8D0F]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/kelme-icon.svg" alt="Kelme Studio" className="h-8 w-8" />
            <div className="font-bold text-lg text-[#F7F7F7] font-satoshi uppercase tracking-wider">
              KELME<span className="font-light text-[#CB8D0F]">STUDIO</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-[#F7F7F7] hover:text-[#CB8D0F] transition-colors duration-300 font-satoshi uppercase text-sm font-medium">
                <span>{t("navbar.services").toUpperCase()}</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 bg-[#0F0E0D]/98 backdrop-blur-xl border border-[#CB8D0F]/30 rounded-2xl p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-[#CB8D0F] uppercase font-satoshi mb-2">{menus.development.title}</div>
                    {menus.development.items.map((item: string) => (
                      <DropdownMenuItem
                        key={item}
                        className="text-[#F7F7F7] hover:text-[#CB8D0F] hover:bg-[#CB8D0F]/10 rounded-lg font-satoshi text-sm"
                      >
                        {item}
                      </DropdownMenuItem>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-[#CB8D0F] uppercase font-satoshi mb-2">{menus.marketing.title}</div>
                    {menus.marketing.items.map((item: string) => (
                      <DropdownMenuItem
                        key={item}
                        className="text-[#F7F7F7] hover:text-[#CB8D0F] hover:bg-[#CB8D0F]/10 rounded-lg font-satoshi text-sm"
                      >
                        {item}
                      </DropdownMenuItem>
                    ))}
                  </div>
                </div>
                <div className="border-t border-[#CB8D0F]/20 mt-4 pt-4 grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-[#CB8D0F] uppercase font-satoshi mb-2">{menus.strategy.title.toUpperCase()}</div>
                    {menus.strategy.items.map((item: string) => (
                      <DropdownMenuItem
                        key={item}
                        className="text-[#F7F7F7] hover:text-[#CB8D0F] hover:bg-[#CB8D0F]/10 rounded-lg font-satoshi text-sm"
                      >
                        {item}
                      </DropdownMenuItem>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-[#CB8D0F] uppercase font-satoshi mb-2">{menus.video.title.toUpperCase()}</div>
                    {menus.video.items.map((item: string) => (
                      <DropdownMenuItem
                        key={item}
                        className="text-[#F7F7F7] hover:text-[#CB8D0F] hover:bg-[#CB8D0F]/10 rounded-lg font-satoshi text-sm"
                      >
                        {item}
                      </DropdownMenuItem>
                    ))}
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Work Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-[#F7F7F7] hover:text-[#CB8D0F] transition-colors duration-300 font-satoshi uppercase text-sm font-medium">
                <span>{t("navbar.work").toUpperCase()}</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#0F0E0D]/98 backdrop-blur-xl border border-[#CB8D0F]/30 rounded-2xl p-2">
                {menus.work.map((item: string) => (
                  <DropdownMenuItem
                    key={item}
                    className="text-[#F7F7F7] hover:text-[#CB8D0F] hover:bg-[#CB8D0F]/10 rounded-lg font-satoshi text-sm"
                  >
                    {item}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="#about"
              className="text-[#F7F7F7] hover:text-[#CB8D0F] transition-colors duration-300 font-satoshi uppercase text-sm font-medium"
            >
              {t("navbar.about").toUpperCase()}
            </a>

            {/* Insights Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-[#F7F7F7] hover:text-[#CB8D0F] transition-colors duration-300 font-satoshi uppercase text-sm font-medium">
                <span>{t("navbar.insights").toUpperCase()}</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#0F0E0D]/98 backdrop-blur-xl border border-[#CB8D0F]/30 rounded-2xl p-2">
                {menus.insights.map((item: string) => (
                  <DropdownMenuItem
                    key={item}
                    className="text-[#F7F7F7] hover:text-[#CB8D0F] hover:bg-[#CB8D0F]/10 rounded-lg font-satoshi text-sm"
                  >
                    {item}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex">
              <LanguageSelector />
            </div>
            <GradientButton className="hidden md:block" size="sm">
              {t("navbar.letsTalk").toUpperCase()}
            </GradientButton>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#F7F7F7] hover:text-[#CB8D0F] transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0F0E0D]/98 backdrop-blur-xl border-t border-[#CB8D0F]/20 py-4">
            <div className="space-y-4">
              <a
                href="#services"
                className="block text-[#F7F7F7] hover:text-[#CB8D0F] font-satoshi uppercase text-sm font-medium px-4 py-2"
              >
                {t("navbar.services").toUpperCase()}
              </a>
              <a
                href="#work"
                className="block text-[#F7F7F7] hover:text-[#CB8D0F] font-satoshi uppercase text-sm font-medium px-4 py-2"
              >
                {t("navbar.work").toUpperCase()}
              </a>
              <a
                href="#about"
                className="block text-[#F7F7F7] hover:text-[#CB8D0F] font-satoshi uppercase text-sm font-medium px-4 py-2"
              >
                {t("navbar.about").toUpperCase()}
              </a>
              <a
                href="#insights"
                className="block text-[#F7F7F7] hover:text-[#CB8D0F] font-satoshi uppercase text-sm font-medium px-4 py-2"
              >
                {t("navbar.insights").toUpperCase()}
              </a>
              <div className="px-4 pt-4 border-t border-[#CB8D0F]/20">
                <GradientButton className="w-full" size="sm">
                  {t("navbar.letsTalk").toUpperCase()}
                </GradientButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
