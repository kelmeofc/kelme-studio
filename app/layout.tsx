import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const satoshi = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-satoshi",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Kelme Studio - Your Brand Deserves to Fly High",
  description:
    "We elevate ambitious brands beyond the horizon, crafting digital experiences that soar above the competition and capture the sky.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${satoshi.variable} antialiased dark`}>
      <head>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="beforeInteractive" />
      </head>
      <body className="font-satoshi bg-[#0F0E0D] text-[#F7F7F7]">{children}</body>
    </html>
  )
}
