import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Work } from '@/components/work';
import { Founder } from '@/components/founder';
import { SocialProof } from '@/components/social-proof';
import { CtaCard } from '@/components/cta-card';
import { Footer } from '@/components/footer';
import {routing} from '@/i18n/routing';
import {setRequestLocale} from 'next-intl/server';

// Permite SSG para cada locale
export function generateStaticParams() {
  return routing.locales.map(locale => ({locale}));
}

export default async function HomeLocalePage({params}:{params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return (
    <main className="min-h-screen bg-[#0F0E0D]">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Founder />
      <SocialProof />
      <CtaCard />
      <Footer />
    </main>
  );
}
