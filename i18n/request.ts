import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {defaultLocale, locales} from './config';

export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const locale = hasLocale(locales as unknown as string[], requested) ? requested : defaultLocale;
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
