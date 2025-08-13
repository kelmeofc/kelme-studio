export const locales = ['pt', 'en'] as const; // ordem com default primeiro
export type AppLocale = (typeof locales)[number];
export const defaultLocale: AppLocale = 'pt';
export const localePrefix = 'as-needed'; // sem prefixo para pt (default)
