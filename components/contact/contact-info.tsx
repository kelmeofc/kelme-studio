"use client";

import { useTranslations } from "next-intl";
import { GradientButton } from "@/components/ui/gradient-button";
import { Mail, Phone, Calendar, Linkedin } from "lucide-react";

/**
 * Componente de informações de contato e bloco do CEO
 */
export function ContactInfo() {
  const t = useTranslations("contact");
  
  return (
    <div className="flex flex-col h-full">
      {/* Seção de contato direto */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 font-satoshi">{t("directContact")}</h2>
        
        <div className="space-y-6">
          <ContactMethod 
            icon={<Mail className="h-6 w-6 text-[#CB8D0F]" />}
            label={t("email")}
            value="contato@kelmestudio.com"
            href="mailto:contato@kelmestudio.com"
          />
          
          <ContactMethod 
            icon={<Phone className="h-6 w-6 text-[#CB8D0F]" />}
            label={t("phone")}
            value="+55 11 99999-9999"
            href="tel:+5511999999999"
          />
          
          <ContactMethod 
            icon={<Calendar className="h-6 w-6 text-[#CB8D0F]" />}
            label={t("scheduleCall")}
            value={t("bookAMeeting")}
            href="#book-meeting"
            isLink
          />
        </div>
      </div>
      
      {/* Cartão do CEO */}
      <div className="bg-[#191817] p-6 md:p-8 rounded-xl border border-[#CB8D0F]/20 mt-auto">
        <div className="flex items-center space-x-4 mb-6">
          <img 
            src="/diego-kelme-portrait.png" 
            alt="Diego Kelme" 
            className="h-16 w-16 rounded-full object-cover"
          />
          <div>
            <h3 className="font-bold font-satoshi">Diego Kelme</h3>
            <p className="text-sm opacity-70">CEO @ Kelme Studio</p>
          </div>
        </div>
        
        <p className="text-sm mb-6">
          "{t("ceoPitch")}"
        </p>
        
        <a 
          href="https://linkedin.com/in/kelme" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-[#CB8D0F] hover:text-[#CB8D0F]/80 transition-colors"
        >
          <Linkedin className="h-5 w-5" />
          <span>{t("connectLinkedin")}</span>
        </a>
      </div>
    </div>
  );
}

/**
 * Componente de método de contato com ícone e valor
 */
type ContactMethodProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  isLink?: boolean;
};

function ContactMethod({ icon, label, value, href, isLink = false }: ContactMethodProps) {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-[#CB8D0F]/20 p-3 rounded-lg flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-sm opacity-70">{label}</p>
        {isLink ? (
          <a href={href} className="text-lg hover:text-[#CB8D0F] transition-colors">
            {value}
          </a>
        ) : (
          <a href={href} className="text-lg hover:text-[#CB8D0F] transition-colors">
            {value}
          </a>
        )}
      </div>
    </div>
  );
}
