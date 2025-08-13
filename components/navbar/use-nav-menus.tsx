import React from "react";
import { useTranslations, useMessages } from 'next-intl';
import { BookOpen, PenTool } from "lucide-react";
import { getServiceIcon, getCategoryDefaultIcon } from "./icon-mapper";

// Types for menu items and sections
export interface MenuItem {
  label: string;
  icon?: string | React.ReactNode;
  href?: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

/**
 * Hook to prepare navigation menu data with proper icons and translations
 */
export const useNavMenus = () => {
  const t = useTranslations();
  const messages: any = useMessages();
  const menus = messages.navbar.menus;

  // Process services sections with proper icons
  const servicesSections = [
    {
      title: menus.development.title,
      items: menus.development.items.map((item: string) => ({
        label: item,
        icon: getServiceIcon(item, getCategoryDefaultIcon("development"))
      }))
    },
    {
      title: menus.marketing.title,
      items: menus.marketing.items.map((item: string) => ({
        label: item,
        icon: getServiceIcon(item, getCategoryDefaultIcon("marketing"))
      }))
    },
    {
      title: menus.strategy.title,
      items: menus.strategy.items.map((item: string) => ({
        label: item,
        icon: getServiceIcon(item, getCategoryDefaultIcon("strategy"))
      }))
    },
    {
      title: menus.video.title,
      items: menus.video.items.map((item: string) => ({
        label: item,
        icon: getServiceIcon(item, getCategoryDefaultIcon("video"))
      }))
    }
  ];

  // Work section with consistent icons
  const workSections = [
    {
      title: t("navbar.work"),
      items: menus.work.map((item: string) => ({
        label: item,
        icon: <PenTool className="h-5 w-5" />
      }))
    }
  ];

  // Insights section with consistent icons
  const insightsSections = [
    {
      title: t("navbar.insights"),
      items: menus.insights.map((item: string) => ({
        label: item,
        icon: <BookOpen className="h-5 w-5" />
      }))
    }
  ];

  return {
    servicesSections,
    workSections,
    insightsSections,
    menus,
    t
  };
};
