"use client";

import { useTranslations } from "next-intl";
import { GradientButton } from "@/components/ui/gradient-button";
import { Mail, Calendar } from "lucide-react";

/**
 * Componente de ícone do WhatsApp usando Simple Icons
 */
function WhatsAppIcon({ className = "" }) {
  return (
    <svg 
      role="img" 
      viewBox="0 0 24 24" 
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/**
 * Componente de informações de contato e bloco do CEO
 */
export function ContactInfo() {
  const t = useTranslations("contact");
  
  return (
    <div className="flex flex-col h-full">
      {/* Seção de contato direto */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 font-satoshi">
          <span className="border-b-2 border-[#27D182] pb-1">{t("directContact")}</span>
        </h2>
        
        <div className="space-y-6">
          <ContactMethod 
            icon={<Mail className="h-6 w-6 text-[#27D182]" />}
            label={t("email")}
            value="contato@kelmestudio.com"
            href="mailto:contato@kelmestudio.com"
          />
          
          
          <ContactMethod 
            icon={<WhatsAppIcon className="h-6 w-6 text-[#27D182]" />}
            label={t("whatsapp")}
            value={t("chatDirectly")}
            href="https://wa.me/5548991515420"
            isLink
          />
          
          <ContactMethod 
            icon={<Calendar className="h-6 w-6 text-[#27D182]" />}
            label={t("scheduleCall")}
            value={t("bookAMeeting")}
            href="#book-meeting"
            isLink
          />
        </div>
      </div>
      
      {/* Cartão do CEO */}
      <div className="bg-dark-card p-6 md:p-8 rounded-xl border border-[#27D182]/20 mt-auto relative overflow-hidden group hover:shadow-[0_0_15px_rgba(39,209,130,0.2)] transition-shadow">
        
        <div className="flex items-center space-x-4 mb-6">
          <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-[#27D182]">
            <img 
              src="/diego-kelme-portrait.png" 
              alt="Diego Kelme" 
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold font-satoshi text-[#F7F7F7]">Diego Kelme</h3>
            <p className="text-sm text-[#27D182]">Founder @ Kelme Studio</p>
          </div>
        </div>
        
        <p className="text-sm mb-6 italic border-l-2 border-[#27D182] pl-4">
          "{t("ceoPitch")}"
        </p>
        
        <div className="flex space-x-4">
          <a 
            href="https://linkedin.com/in/kelme" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 w-10 bg-[#27D182]/20 hover:bg-[#27D182]/30 text-[#27D182] rounded-full transition-all hover:scale-110"
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
            className="inline-flex items-center justify-center h-10 w-10 bg-[#27D182]/20 hover:bg-[#27D182]/30 text-[#27D182] rounded-full transition-all hover:scale-110"
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
            className="inline-flex items-center justify-center h-10 w-10 bg-[#27D182]/20 hover:bg-[#27D182]/30 text-[#27D182] rounded-full transition-all hover:scale-110"
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
            className="inline-flex items-center justify-center h-10 w-10 bg-[#27D182]/20 hover:bg-[#27D182]/30 text-[#27D182] rounded-full transition-all hover:scale-110"
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
    <div className="flex items-start space-x-4 p-3 rounded-lg transition-all hover:bg-[#27D182]/5 group">
      <div className="bg-[#27D182]/10 p-3 rounded-lg flex-shrink-0 group-hover:bg-[#27D182]/20 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-sm text-[#D7D7D7]">{label}</p>
        <a 
          href={href} 
          target={isLink ? "_blank" : undefined} 
          rel={isLink ? "noopener noreferrer" : undefined} 
          className="text-lg text-[#F7F7F7] hover:text-[#27D182] transition-colors flex items-center"
        >
          {value}
          {isLink && <span className="ml-2 text-[#27D182]">→</span>}
        </a>
      </div>
    </div>
  );
}
