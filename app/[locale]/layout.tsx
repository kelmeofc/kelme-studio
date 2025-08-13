import type { ReactNode } from 'react';
import '../globals.css';
import { I18nProvider, type Locale } from '@/lib/i18n';
import Script from 'next/script';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-satoshi', display: 'swap' });

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  const { locale } = params;
  return (
    <html lang={locale} className={`${inter.variable} antialiased dark`}>
      <head>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="beforeInteractive" />
      </head>
      <body className="font-satoshi bg-[#0F0E0D] text-[#F7F7F7]">
        <I18nProvider initialLocale={locale}>{children}</I18nProvider>
      </body>
    </html>
  );
}
