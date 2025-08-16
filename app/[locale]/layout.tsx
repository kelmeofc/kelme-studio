import type { ReactNode } from 'react';
import '@/app/globals.css';
import { Inter, Russo_One } from 'next/font/google';
import Script from 'next/script';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

const satoshi = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-satoshi',
  weight: ['400','500','600','700','800','900']
});

const russoOne = Russo_One({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-russo',
  weight: ['400']
});

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale} className={`${satoshi.variable} ${russoOne.variable} antialiased dark`}>
      <head>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="beforeInteractive" />
      </head>
      <body className="font-satoshi bg-[#0F0E0D] text-[#F7F7F7]">
        <NextIntlClientProvider locale={locale} messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
