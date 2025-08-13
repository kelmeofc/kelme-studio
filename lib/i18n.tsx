"use client";
import React, { createContext, useContext, useState, useCallback, ReactNode, useMemo, useEffect } from "react";

export type Locale = "en" | "pt";

type Dictionary = Record<string, any>;

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    navbar: {
      services: "Services",
      work: "Work",
      about: "About",
      insights: "Insights",
      letsTalk: "Let's Talk",
      menus: {
        development: {
          title: "Development",
          items: ["WordPress", "Shopify", "Landing Pages", "Micro-SaaS", "MVP"],
        },
        marketing: {
          title: "Marketing",
          items: ["Meta Ads", "Google Ads", "TikTok Ads", "Social Media", "Email Marketing", "SEO"],
        },
        strategy: {
          title: "Strategy",
          items: ["Branding", "UI/UX Research"],
        },
        video: {
          title: "Video",
          items: ["VSL", "Creative Ads"],
        },
        work: ["Recent Projects", "Case Studies", "Success Stories"],
        insights: ["Latest Posts", "Marketing Tips", "Dev Insights", "Tools"],
      },
    },
    hero: {
      title: { line1: "YOUR BRAND", line2: "DESERVES TO", line3: "FLY HIGH" },
      subtitle:
        "We elevate ambitious brands beyond the horizon, crafting digital experiences that soar above the competition.",
      buttons: { talkToDiego: "Talk to Diego", viewWork: "View Work" },
    },
    services: {
      sectionTitle: "Services",
      sectionSubtitle:
        "We partner with founders in the early stages - and back them until the world sees what we see.",
      list: [
        {
          number: "01",
            category: "Development",
            description: "Custom solutions that scale with your business growth and vision.",
            items: ["WordPress", "Shopify", "Landing Pages", "Micro-SaaS", "MVP"],
        },
        {
          number: "02",
            category: "Marketing",
            description: "Strategic campaigns that drive engagement and measurable results.",
            items: ["Meta Ads", "Google Ads", "TikTok Ads", "Social Media", "Email Marketing", "SEO"],
        },
        {
          number: "03",
            category: "Strategy",
            description: "Brand positioning and user experience that resonates with your audience.",
            items: ["Branding", "UI/UX Research"],
        },
        {
          number: "04",
            category: "Video Editing",
            description: "Compelling video content that converts viewers into customers.",
            items: ["VSL", "Creative Content for Ads"],
        },
      ],
    },
    work: {
      sectionTitle: "Our Portfolio",
      sectionSubtitle:
        "The foundation of our portfolio demonstrates who we truly are. We invest into exceptional people and follow the long-term vision.",
      viewButton: "View Portfolio",
      items: [
        {
          id: 1,
          title: "Fintech Revolution",
          category: "MICRO-SAAS",
          description: "Complete financial platform with AI-powered insights and automated trading capabilities.",
          image: "/placeholder-opudz.png",
          year: "2024",
        },
        {
          id: 2,
          title: "Luxury Ecommerce",
          category: "SHOPIFY",
          description: "Premium fashion brand with immersive shopping experience and AR try-on features.",
          image: "/luxury-fashion-ecommerce.png",
          year: "2024",
        },
        {
          id: 3,
          title: "Startup Landing",
          category: "LANDING PAGE",
          description: "High-converting landing page that increased conversions by 340% in 30 days.",
          image: "/modern-startup-hero.png",
          year: "2023",
        },
        {
          id: 4,
          title: "Tech Brand Identity",
          category: "BRANDING",
          description: "Complete brand overhaul for emerging tech company, from logo to digital presence.",
          image: "/placeholder-c7jvm.png",
          year: "2023",
        },
        {
          id: 5,
          title: "Viral Campaign",
          category: "MARKETING",
          description: "Social media campaign that reached 2M+ users and generated 150% ROI.",
          image: "/placeholder-zbxuv.png",
          year: "2024",
        },
        {
          id: 6,
          title: "Enterprise Solution",
          category: "DEVELOPMENT",
          description: "Custom CRM system handling 10K+ daily transactions with real-time analytics.",
          image: "/enterprise-crm-dashboard.png",
          year: "2023",
        },
      ],
    },
    founder: {
      firstName: "Diego",
      lastName: "Kelme",
      role: "Founder & Creative Director",
      quote:
        "Every brand deserves to fly high. I help businesses unlock their potential and reach new heights through strategic digital experiences.",
      bio:
        "8+ years transforming digital landscapes. From startups to enterprises, combining creativity with data-driven strategy to deliver exceptional results.",
      stats: {
        projects: { value: "50+", label: "Projects" },
        clients: { value: "30+", label: "Clients" },
        growth: { value: "340%", label: "Avg Growth" },
      },
    },
    socialProof: {
      testimonials: {
        titleLine1: "Client",
        titleLine2: "Testimonials",
        subtitle:
          "Don't just take our word for it. Here's what our clients say about working with Kelme Studio.",
        list: [
          {
            name: "Sarah Martinez",
            role: "CEO, TechFlow Solutions",
            content:
              "Diego and his team transformed our entire digital presence. Our conversion rates increased by 280% in just 3 months. The attention to detail and strategic thinking is unmatched.",
            rating: 5,
            image: "/sarah-martinez-testimonial.png",
          },
          {
            name: "Michael Chen",
            role: "Founder, EcoVenture",
            content:
              "Working with Kelme Studio was a game-changer. They didn't just build us a website - they crafted a complete brand experience that resonates with our audience.",
            rating: 5,
            image: "/michael-chen-testimonial.png",
          },
          {
            name: "Alexandra Torres",
            role: "Marketing Director, FinanceHub",
            content:
              "The ROI we've seen from our campaigns is incredible. Diego's strategic approach to digital marketing has elevated our brand beyond our expectations.",
            rating: 5,
            image: "/alexandra-torres-testimonial.png",
          },
        ],
      },
      awards: {
        titleLine1: "You Deserve",
        titleLine2: "The Best",
        subtitle: "Recognition from industry leaders validates our commitment to excellence.",
        list: [
          { title: "Best Digital Agency", year: "2024", organization: "Marketing Excellence Awards", iconKey: "trophy" },
          { title: "Innovation In Design", year: "2023", organization: "Web Design Awards", iconKey: "star" },
          { title: "Client Satisfaction", year: "2023", organization: "Agency Awards", iconKey: "users" },
        ],
      },
      partners: {
        titleLine1: "Who We've",
        titleLine2: "Partnered With",
        subtitle: "Trusted by industry giants and innovative startups alike.",
        list: [
          { name: "Microsoft", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoft.svg", color: "#5E5E5E" },
            { name: "Google", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg", color: "#4285F4" },
            { name: "NVIDIA", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nvidia.svg", color: "#76B900" },
            { name: "Meta", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/meta.svg", color: "#0866FF" },
            { name: "Adobe", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobe.svg", color: "#FF0000" },
            { name: "Shopify", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/shopify.svg", color: "#7AB55C" },
        ],
      },
    },
    footer: {
      cta: {
        title: { part1: "Ready to make your brand", highlight: "fly high", part2: "?" },
        subtitle: "Let's discuss your project and elevate your digital presence to new heights.",
        button: "Talk to Diego",
      },
      exploreTitle: "Explore",
      servicesTitle: "Services",
      socialTitle: "Social",
      brandDescription: "Elevating brands through strategic digital solutions and creative excellence.",
      exploreLinks: ["Home", "Services", "Work", "About"],
      serviceLinks: ["Development", "Marketing", "Strategy", "Video Editing"],
      socialLinks: ["LinkedIn", "Instagram", "Twitter", "YouTube"],
      copyright: "© 2024 KELME STUDIO. All Rights Reserved",
    },
  },
  pt: {
    navbar: {
      services: "Serviços",
      work: "Portfólio",
      about: "Sobre",
      insights: "Insights",
      letsTalk: "Fale Conosco",
      menus: {
        development: {
          title: "Desenvolvimento",
          items: ["WordPress", "Shopify", "Landing Pages", "Micro-SaaS", "MVP"],
        },
        marketing: {
          title: "Marketing",
          items: ["Meta Ads", "Google Ads", "TikTok Ads", "Social Media", "Email Marketing", "SEO"],
        },
        strategy: { title: "Estratégia", items: ["Branding", "Pesquisa UI/UX"] },
        video: { title: "Vídeo", items: ["VSL", "Criativos para Ads"] },
        work: ["Projetos Recentes", "Estudos de Caso", "Histórias de Sucesso"],
        insights: ["Últimos Artigos", "Dicas de Marketing", "Insights de Dev", "Ferramentas"],
      },
    },
    hero: {
      title: { line1: "SUA MARCA", line2: "MERECE", line3: "VOAR ALTO" },
      subtitle:
        "Elevamos marcas ambiciosas além do horizonte, criando experiências digitais que se destacam da concorrência.",
      buttons: { talkToDiego: "Falar com Diego", viewWork: "Ver Projetos" },
    },
    services: {
      sectionTitle: "Serviços",
      sectionSubtitle:
        "Apoiamos fundadores nos estágios iniciais e seguimos até que o mundo enxergue o que vemos.",
      list: [
        {
          number: "01",
            category: "Desenvolvimento",
            description: "Soluções sob medida que escalam com o crescimento e visão do seu negócio.",
            items: ["WordPress", "Shopify", "Landing Pages", "Micro-SaaS", "MVP"],
        },
        {
          number: "02",
            category: "Marketing",
            description: "Campanhas estratégicas que geram engajamento e resultados mensuráveis.",
            items: ["Meta Ads", "Google Ads", "TikTok Ads", "Social Media", "Email Marketing", "SEO"],
        },
        {
          number: "03",
            category: "Estratégia",
            description: "Posicionamento de marca e experiência que ressoam com sua audiência.",
            items: ["Branding", "Pesquisa UI/UX"],
        },
        {
          number: "04",
            category: "Edição de Vídeo",
            description: "Conteúdo em vídeo envolvente que converte espectadores em clientes.",
            items: ["VSL", "Conteúdo Criativo para Ads"],
        },
      ],
    },
    work: {
      sectionTitle: "Portfólio",
      sectionSubtitle:
        "A base do nosso portfólio demonstra quem realmente somos. Investimos em pessoas excepcionais e seguimos a visão de longo prazo.",
      viewButton: "Ver Portfólio",
      items: [
        {
          id: 1,
          title: "Revolução Fintech",
          category: "MICRO-SAAS",
          description: "Plataforma financeira completa com insights de IA e automação de operações.",
          image: "/placeholder-opudz.png",
          year: "2024",
        },
        {
          id: 2,
          title: "Ecommerce de Luxo",
          category: "SHOPIFY",
          description: "Marca de moda premium com experiência imersiva e recursos de AR.",
          image: "/luxury-fashion-ecommerce.png",
          year: "2024",
        },
        {
          id: 3,
          title: "Landing Startup",
          category: "LANDING PAGE",
          description: "Landing page de alta conversão que aumentou conversões em 340% em 30 dias.",
          image: "/modern-startup-hero.png",
          year: "2023",
        },
        {
          id: 4,
          title: "Identidade Tech",
          category: "BRANDING",
          description: "Reformulação completa de marca para empresa de tecnologia emergente.",
          image: "/placeholder-c7jvm.png",
          year: "2023",
        },
        {
          id: 5,
          title: "Campanha Viral",
          category: "MARKETING",
          description: "Campanha em redes sociais que alcançou 2M+ usuários e gerou 150% de ROI.",
          image: "/placeholder-zbxuv.png",
          year: "2024",
        },
        {
          id: 6,
          title: "Solução Enterprise",
          category: "DEVELOPMENT",
          description: "CRM customizado lidando com 10K+ transações diárias com analytics em tempo real.",
          image: "/enterprise-crm-dashboard.png",
          year: "2023",
        },
      ],
    },
    founder: {
      firstName: "Diego",
      lastName: "Kelme",
      role: "Fundador & Diretor Criativo",
      quote:
        "Toda marca merece voar alto. Ajudo negócios a desbloquearem seu potencial e atingirem novos patamares por meio de experiências digitais estratégicas.",
      bio:
        "8+ anos transformando cenários digitais. De startups a empresas, combinando criatividade com estratégia orientada por dados para entregar resultados excepcionais.",
      stats: {
        projects: { value: "50+", label: "Projetos" },
        clients: { value: "30+", label: "Clientes" },
        growth: { value: "340%", label: "Crescimento Médio" },
      },
    },
    socialProof: {
      testimonials: {
        titleLine1: "Depoimentos",
        titleLine2: "de Clientes",
        subtitle:
          "Não confie só na nossa palavra. Veja o que nossos clientes dizem sobre trabalhar com a Kelme Studio.",
        list: [
          {
            name: "Sarah Martinez",
            role: "CEO, TechFlow Solutions",
            content:
              "Diego e seu time transformaram toda nossa presença digital. As conversões aumentaram 280% em apenas 3 meses.",
            rating: 5,
            image: "/sarah-martinez-testimonial.png",
          },
          {
            name: "Michael Chen",
            role: "Fundador, EcoVenture",
            content:
              "Trabalhar com a Kelme Studio mudou o jogo. Eles criaram uma experiência completa de marca que ressoa com nosso público.",
            rating: 5,
            image: "/michael-chen-testimonial.png",
          },
          {
            name: "Alexandra Torres",
            role: "Diretora de Marketing, FinanceHub",
            content:
              "O ROI que vimos nas campanhas é incrível. A abordagem estratégica elevou nossa marca além das expectativas.",
            rating: 5,
            image: "/alexandra-torres-testimonial.png",
          },
        ],
      },
      awards: {
        titleLine1: "Você Merece",
        titleLine2: "O Melhor",
        subtitle: "Reconhecimento valida nosso compromisso com a excelência.",
        list: [
          { title: "Melhor Agência Digital", year: "2024", organization: "Marketing Excellence Awards", iconKey: "trophy" },
          { title: "Inovação em Design", year: "2023", organization: "Web Design Awards", iconKey: "star" },
          { title: "Satisfação do Cliente", year: "2023", organization: "Agency Awards", iconKey: "users" },
        ],
      },
      partners: {
        titleLine1: "Quem Já",
        titleLine2: "Parceria Conosco",
        subtitle: "Confiada por gigantes e startups inovadoras.",
        list: [
          { name: "Microsoft", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoft.svg", color: "#5E5E5E" },
            { name: "Google", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg", color: "#4285F4" },
            { name: "NVIDIA", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nvidia.svg", color: "#76B900" },
            { name: "Meta", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/meta.svg", color: "#0866FF" },
            { name: "Adobe", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobe.svg", color: "#FF0000" },
            { name: "Shopify", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/shopify.svg", color: "#7AB55C" },
        ],
      },
    },
    footer: {
      cta: {
        title: { part1: "Pronto para fazer sua marca", highlight: "voar alto", part2: "?" },
        subtitle: "Vamos conversar sobre seu projeto e elevar sua presença digital a novos patamares.",
        button: "Falar com Diego",
      },
      exploreTitle: "Explorar",
      servicesTitle: "Serviços",
      socialTitle: "Social",
      brandDescription: "Elevando marcas com soluções digitais estratégicas e excelência criativa.",
      exploreLinks: ["Home", "Serviços", "Portfólio", "Sobre"],
      serviceLinks: ["Desenvolvimento", "Marketing", "Estratégia", "Edição de Vídeo"],
      socialLinks: ["LinkedIn", "Instagram", "Twitter", "YouTube"],
      copyright: "© 2024 KELME STUDIO. Todos os direitos reservados",
    },
  },
};

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
  dictionary: Dictionary;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function getNested(dict: Dictionary, key: string): any {
  return key.split(".").reduce((acc: any, part) => (acc && part in acc ? acc[part] : undefined), dict);
}

export function I18nProvider({ children, initialLocale = "en" }: { children: ReactNode; initialLocale?: Locale }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('locale');
      if (saved === 'en' || saved === 'pt') return saved;
    }
    return initialLocale;
  });
  const dictionary = dictionaries[locale];

  const t = useCallback(
    (key: string) => {
      const value = getNested(dictionary, key);
      return typeof value === "string" ? value : key;
    },
    [dictionary],
  );

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('locale', locale);
    }
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale, t, dictionary }), [locale, t, dictionary]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export function useT() {
  return useI18n().t;
}

export const availableLocales: { code: Locale; label: string; country: string }[] = [
  { code: "en", label: "English", country: "US" },
  { code: "pt", label: "Português", country: "BR" },
];
