import {ReactNode} from 'react';
import {getMessages, getLocale} from 'next-intl/server';
import {NextIntlClientProvider} from 'next-intl';

export default async function LocaleLayout({children}:{children: ReactNode}) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
