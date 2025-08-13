import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Work } from '@/components/work';
import { Founder } from '@/components/founder';
import { SocialProof } from '@/components/social-proof';
import { CtaCard } from '@/components/cta-card';
import { Footer } from '@/components/footer';

export default function HomeLocalePage() {
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
