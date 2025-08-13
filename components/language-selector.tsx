"use client";
import { useState, useEffect } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { GradientButton } from "@/components/ui/gradient-button";
import ReactCountryFlag from "react-country-flag";
import { ChevronDown } from "lucide-react";
import { useLocale } from 'next-intl';
import { usePathname, useRouter, Link } from '@/i18n/navigation';

const languages = [
  { code: 'pt', label: 'Português', country: 'BR' },
  { code: 'en', label: 'English', country: 'US' }
];

export function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [selected, setSelected] = useState(locale);
  useEffect(() => setSelected(locale), [locale]);
  const current = languages.find(l => l.code === selected) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <GradientButton variant="secondary" size="sm" className="flex items-center gap-2 min-w-[120px] px-4 py-2">
          <ReactCountryFlag countryCode={current.country} svg style={{ width: 20, height: 20, borderRadius: '50%', objectFit: 'cover' }} />
          <span className="font-bold text-base text-[#F7F7F7]">{current.code.toUpperCase()}</span>
          <ChevronDown className="h-4 w-4 text-[#CB8D0F]" />
        </GradientButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px] p-1">
    {languages.map(lang => {
          if (lang.code === locale) return null; // não mostrar o já selecionado
          // pathname já vem sem ou com prefixo conforme config; trocar só o locale base
          const targetPath = pathname === '/' ? '/' : pathname;
          return (
      <Link key={lang.code} href={targetPath} locale={lang.code}>
              <DropdownMenuItem
                className="flex items-center gap-2 px-3 py-2 rounded-lg font-satoshi text-base hover:bg-[#CB8D0F]/10 focus:bg-[#CB8D0F]/10"
              >
                <ReactCountryFlag countryCode={lang.country} svg style={{ width: 20, height: 20, borderRadius: '50%', objectFit: 'cover' }} />
                <span>{lang.label}</span>
              </DropdownMenuItem>
            </Link>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>

  );
}
