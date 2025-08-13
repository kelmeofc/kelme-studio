// Arquivo legado mantido para compatibilidade; reutiliza config centralizada em /i18n
import {getRequestConfig} from 'next-intl/server';
import {locales, defaultLocale} from '@/i18n/config';

export type AppLocale = (typeof locales)[number];

// Configuração de mensagens com import dinâmico (evita carregar todos os JSON no bundle)
export default getRequestConfig(async ({locale}) => {
  let resolved = locale as AppLocale | undefined;
  if (!resolved || !locales.includes(resolved)) {
    resolved = defaultLocale;
  }
  return {
    locale: resolved,
    messages: (await import(`@/messages/${resolved}.json`)).default
  };
});

// Helper simples para prefixar rotas manualmente (prefira createNavigation quando possível)
export function pathWithLocale(path: string, locale: AppLocale) {
  if (locale === defaultLocale) return path;
  return `/${locale}${path}`.replace(/\/$/, '');
}
