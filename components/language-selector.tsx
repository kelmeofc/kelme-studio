"use client";
import { useState, useEffect } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { GradientButton } from "@/components/ui/gradient-button";
import ReactCountryFlag from "react-country-flag";
import { ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { usePathname, useRouter } from 'next/navigation';

const languages = [
  { code: "PT", label: "Português", country: "BR" },
  { code: "EN", label: "English", country: "US" },
];

export function LanguageSelector() {
  const { locale, setLocale } = useI18n();
  const router = useRouter();
  const pathname = usePathname();
  const [selected, setSelected] = useState(locale.toUpperCase());
  useEffect(() => setSelected(locale.toUpperCase()), [locale]);
  const current = languages.find((l) => l.code === selected) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <GradientButton variant="secondary" size="sm" className="flex items-center gap-2 min-w-[120px] px-4 py-2">
          <ReactCountryFlag countryCode={current.country} svg style={{ width: 20, height: 20, borderRadius: '50%', objectFit: 'cover' }} />
          <span className="font-bold text-base text-[#F7F7F7]">{current.code}</span>
          <ChevronDown className="h-4 w-4 text-[#CB8D0F]" />
        </GradientButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px] p-1">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => {
              const newLocale = lang.code.toLowerCase();
              setSelected(lang.code);
              setLocale(newLocale as any);
              // Reescrever pathname substituindo primeiro segmento de locale
              const segments = pathname.split('/').filter(Boolean);
              if (segments.length > 0 && ['en','pt'].includes(segments[0])) {
                segments[0] = newLocale;
              } else {
                segments.unshift(newLocale);
              }
              router.push('/' + segments.join('/'));
            }}
            className="flex items-center gap-2 px-3 py-2 rounded-lg font-satoshi text-base hover:bg-[#CB8D0F]/10 focus:bg-[#CB8D0F]/10"
          >
            <ReactCountryFlag countryCode={lang.country} svg style={{ width: 20, height: 20, borderRadius: '50%', objectFit: 'cover' }} />
            <span>{lang.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>

  );
}
