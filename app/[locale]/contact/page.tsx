import { setRequestLocale } from "next-intl/server";
import { AppLocale, routing } from "@/i18n/routing";
import { ContactSection } from "@/components/contact/contact-section";
import { MainLayout } from "@/layouts/main-layout";
import { Metadata } from "next";
import { FAQSchema } from "@/components/schema";
import { generatePageMetadata } from "@/lib/metadata";
import { getFAQItems } from "@/lib/faq-utils";

// Obter itens de FAQ a partir do utilitário
const faqItems = getFAQItems(5);

// Permite SSG para cada locale
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/**
 * Gera os metadados para a página de contato usando o utilitário unificado
 */
export async function generateMetadata({
  params
}: {
  params: { locale: AppLocale };
}): Promise<Metadata> {
  return generatePageMetadata({
    namespace: 'metadata.contact',
    titleKey: 'title',
    descriptionKey: 'description',
    params,
    path: 'contact'
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  return (
    <>
      <FAQSchema items={faqItems} />
      <MainLayout>
        <ContactSection />
      </MainLayout>
    </>
  );
}
