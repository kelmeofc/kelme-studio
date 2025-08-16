"use client";

// Importação direta do arquivo DarkVeil
import DarkVeil from "@/components/blocks/Backgrounds/DarkVeil/DarkVeil";
import { ContactForm } from "./contact-form";
import { ContactInfo } from "./contact-info";
import { ContactOffices } from "./contact-offices";
import { ContactTestimonials } from "./contact-testimonials";
import { ContactFAQ } from "./contact-faq";
import { Container } from "@/components/ui/container";
import { useTranslations } from "next-intl";

/**
 * Componente principal da seção de contato
 * Organiza os subcomponentes em uma estrutura coesa
 */
export function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section className="relative bg-black text-[#F7F7F7] py-16 md:py-24 overflow-hidden min-h-screen">
    
      <Container className="relative z-10">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter font-satoshi">
            {t("formTitle")}
          </h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            {t("formSubtitle")}
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <ContactForm />
          <ContactInfo />
        </div>

        <ContactOffices />
        <ContactTestimonials />
        <ContactFAQ />
      </Container>
    </section>
  );
}
