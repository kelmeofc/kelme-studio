import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { ContactSection } from "@/components/contact/contact-section";
import { MainLayout } from "@/layouts/main-layout";

// Permite SSG para cada locale
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  return (
    <MainLayout>
      <ContactSection />
    </MainLayout>
  );
}
