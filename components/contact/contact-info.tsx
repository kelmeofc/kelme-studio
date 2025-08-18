"use client";

import { useTranslations } from "next-intl";
import { GradientButton } from "@/components/ui/gradient-button";
import { Mail, Phone, Calendar, MessageSquare } from "lucide-react";

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
            icon={<Mail className="h-6 w-6 text-emerald" />}
            label={t("email")}
            value="contato@kelmestudio.com"
            href="mailto:contato@kelmestudio.com"
          />
          
          <ContactMethod 
            icon={<Phone className="h-6 w-6 text-emerald" />}
            label={t("phone")}
            value="+55 48 99151-5420"
            href="tel:+5548991515420"
          />
          
          <ContactMethod 
            icon={<MessageSquare className="h-6 w-6 text-emerald" />}
            label={t("whatsapp")}
            value={t("chatDirectly")}
            href="https://wa.me/5548991515420"
            isLink
          />
          
          <ContactMethod 
            icon={<Calendar className="h-6 w-6 text-emerald" />}
            label={t("scheduleCall")}
            value={t("bookAMeeting")}
            href="#book-meeting"
            isLink
          />
        </div>
      </div>
      
      {/* Cartão do CEO */}
      <div className="bg-dark-card p-6 md:p-8 rounded-xl border border-emerald/20 mt-auto">
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
        
        <div className="flex space-x-4">
          <a 
            href="https://linkedin.com/in/kelme" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 w-10 bg-emerald/20 hover:bg-emerald/30 text-emerald rounded-full transition-colors"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.064-.926-2.064-2.065 0-1.138.92-2.063 2.064-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a 
            href="https://twitter.com/kelmestudio" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 w-10 bg-emerald/20 hover:bg-emerald/30 text-emerald rounded-full transition-colors"
            aria-label="Twitter/X"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
            </svg>
          </a>
          <a 
            href="https://instagram.com/kelmestudio" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 w-10 bg-emerald/20 hover:bg-emerald/30 text-emerald rounded-full transition-colors"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a 
            href="https://github.com/kelmestudio" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 w-10 bg-emerald/20 hover:bg-emerald/30 text-emerald rounded-full transition-colors"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
        </div>
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
      <div className="bg-emerald/20 p-3 rounded-lg flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-sm opacity-70">{label}</p>
        <a href={href} target={isLink ? "_blank" : undefined} rel={isLink ? "noopener noreferrer" : undefined} className="text-lg hover:text-emerald transition-colors">
          {value}
        </a>
      </div>
    </div>
  );
}
