

"use client"
import * as React from "react";

import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { GradientButton } from "@/components/ui/gradient-button"
import DarkVeil from "@/components/blocks/Backgrounds/DarkVeil/DarkVeil"
import { useT } from "@/lib/i18n"


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

// Componente para animar entrada
import type { ReactNode, ElementType, HTMLAttributes } from "react";
type AnimatedFadeInProps<T extends ElementType> = {
  as?: T;
  delay?: number;
  children: ReactNode;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, 'as' | 'children' | 'className'>;

function AnimatedFadeIn<T extends ElementType = 'div'>({
  as,
  delay = 0,
  children,
  className = "",
  ...rest
}: AnimatedFadeInProps<T>) {
  const Tag = (as || 'div') as ElementType;
  const ref = useRef<HTMLElement>(null);
  React.useLayoutEffect(() => {
    const el = ref.current;
    if (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      setTimeout(() => {
        el.style.transition = "all 0.8s cubic-bezier(.4,0,.2,1)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, delay);
    }
  }, [delay]);
  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}

export function Hero() {
  const t = useT();
  const trustedBrands = [
    { name: "SHOPIFY", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/shopify.svg" },
    { name: "WORDPRESS", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/wordpress.svg" },
    { name: "META", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/meta.svg" },
    { name: "GOOGLE", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg" },
  ];

  return (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      {/* DarkVeil background */}
  <div className="absolute inset-0 bottom-32 z-10 w-full h-full pointer-events-none">
        <DarkVeil 
          speed={3}
          hueShift={208}
          noiseIntensity={0}
          scanlineFrequency={0.5}
          scanlineIntensity={0}
          warpAmount={1.4}
        />
      </div>

  <div className="max-w-4xl w-full flex flex-col items-center justify-center text-center z-10 px-6 py-32 lg:px-32 lg:py-40">
  <AnimatedFadeIn as="h1" delay={0} className="text-5xl lg:text-7xl font-bold text-[#F7F7F7] leading-tight mb-8 font-satoshi uppercase tracking-tight text-center">
          {t("hero.title.line1")}<br />
          <span className="text-[#CB8D0F]">{t("hero.title.line2")}</span><br />
          <span className="text-[#F7F7F7]">{t("hero.title.line3")}</span>
        </AnimatedFadeIn>

  <AnimatedFadeIn as="p" delay={200} className="text-lg lg:text-xl text-[#F7F7F7]/60 leading-relaxed max-w-2xl mb-12 font-satoshi text-center">
          {t("hero.subtitle")}
        </AnimatedFadeIn>

  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
    <GradientButton size="md">
  {t("hero.buttons.talkToDiego").toUpperCase()} <ArrowRight className="ml-2 h-4 w-4" />
    </GradientButton>
    <GradientButton variant="secondary" size="md">
  {t("hero.buttons.viewWork").toUpperCase()}
    </GradientButton>
  </div>
      </div>
    </section>
  );
}
