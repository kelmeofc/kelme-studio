"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
]

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState(languages[0])

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-[#F7F7F7]/5 backdrop-blur-sm border border-[#F7F7F7]/10 rounded-lg hover:bg-[#F7F7F7]/10 transition-all duration-300"
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span className="text-sm font-medium text-[#F7F7F7] uppercase tracking-wide">{currentLang.code}</span>
        <ChevronDown
          className={`w-4 h-4 text-[#F7F7F7]/60 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute bottom-full mb-2 right-0 bg-[#0F0E0D]/95 backdrop-blur-xl border border-[#F7F7F7]/10 rounded-lg overflow-hidden shadow-2xl">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setCurrentLang(lang)
                setIsOpen(false)
              }}
              className="flex items-center gap-3 w-full px-4 py-3 text-left hover:bg-[#CB8D0F]/10 transition-colors duration-200"
            >
              <span className="text-lg">{lang.flag}</span>
              <div>
                <div className="text-sm font-medium text-[#F7F7F7] uppercase tracking-wide">{lang.code}</div>
                <div className="text-xs text-[#F7F7F7]/60">{lang.name}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
