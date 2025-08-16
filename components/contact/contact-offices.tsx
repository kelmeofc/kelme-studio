"use client";

import { useTranslations } from "next-intl";
import { MapPin, Phone } from "lucide-react";

/**
 * Componente que exibe os escritórios da empresa
 */
export function ContactOffices() {
  const t = useTranslations("contact");
  
  return (
    <section className="mt-24">
      <header className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 font-satoshi">{t("ourOffices")}</h2>
        <p className="text-xl opacity-80 max-w-2xl mx-auto">
          {t("officesDescription")}
        </p>
      </header>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offices.map((office, index) => (
          <OfficeCard 
            key={index}
            title={t(office.titleKey)}
            address={office.address}
            phone={office.phone}
            phoneHref={office.phoneHref}
          />
        ))}
      </div>
    </section>
  );
}

/**
 * Dados dos escritórios
 */
const offices = [
  {
    titleKey: "saoPaulo",
    address: [
      "Av. Paulista, 1000, 10º andar",
      "São Paulo, SP, 01310-000",
      "Brasil"
    ],
    phone: "+55 11 99999-9999",
    phoneHref: "tel:+551199999999"
  },
  {
    titleKey: "rioDeJaneiro",
    address: [
      "Av. Atlântica, 1500, Sala 301",
      "Rio de Janeiro, RJ, 22021-000",
      "Brasil"
    ],
    phone: "+55 21 99999-9999",
    phoneHref: "tel:+552199999999"
  },
  {
    titleKey: "portoAlegre",
    address: [
      "Rua 24 de Outubro, 850, Conjunto 42",
      "Porto Alegre, RS, 90510-000",
      "Brasil"
    ],
    phone: "+55 51 99999-9999",
    phoneHref: "tel:+555199999999"
  }
];

/**
 * Componente de cartão de escritório
 */
type OfficeCardProps = {
  title: string;
  address: string[];
  phone: string;
  phoneHref: string;
};

function OfficeCard({ title, address, phone, phoneHref }: OfficeCardProps) {
  return (
    <div className="bg-[#191817] p-6 rounded-xl border border-[#CB8D0F]/20 transition-transform hover:scale-[1.02] duration-300">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-[#CB8D0F]/20 rounded-lg">
          <MapPin className="h-6 w-6 text-[#CB8D0F]" />
        </div>
        <h3 className="text-lg font-bold font-satoshi">{title}</h3>
      </div>
      
      <div className="mb-4">
        {address.map((line, i) => (
          <p key={i} className="text-sm mb-0.5">{line}</p>
        ))}
      </div>
      
      <div className="flex items-center space-x-2 text-sm opacity-80">
        <Phone className="h-4 w-4" />
        <a href={phoneHref} className="hover:text-[#CB8D0F] transition-colors">
          {phone}
        </a>
      </div>
    </div>
  );
}
