import React from "react";
import { navbarStyles as styles } from "./styles";
import { MenuSection } from "./use-nav-menus";
import { GradientButton } from "@/components/ui/gradient-button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  servicesSections: MenuSection[];
  workItems: string[];
  insightsItems: string[];
  aboutLabel: string;
  letsTalkLabel: string;
  servicesLabel: string;
  workLabel: string;
  insightsLabel: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  servicesSections,
  workItems,
  insightsItems,
  aboutLabel,
  letsTalkLabel,
  servicesLabel,
  workLabel,
  insightsLabel
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.mobileOverlay} onClick={onClose}>
      <div className={styles.mobileBackdrop} />
      <div 
        className={styles.mobileMenu}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.mobileContent}>
          {/* Services Section */}
          <div className={styles.mobileSection}>
            <h3 className={styles.mobileSectionTitle}>
              {servicesLabel}
            </h3>
            {servicesSections.map((section, idx) => (
              <div key={idx} className="ml-2">
                <h4 className={styles.mobileCategoryTitle}>
                  {section.title}
                </h4>
                <ul className={styles.mobileSectionList}>
                  {section.items.map((item: any, i: number) => (
                    <li key={i}>
                      <a href="#" className={styles.mobileLinkFlex}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Work Section */}
          <div className={`${styles.mobileDivider} ${styles.mobileSection}`}>
            <h3 className={styles.mobileSectionTitle}>
              {workLabel}
            </h3>
            <ul className={styles.mobileSectionList}>
              {workItems.map((item: string, i: number) => (
                <li key={i}>
                  <a href="#" className={styles.mobileLink}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* About Link */}
          <div className={styles.mobileDivider}>
            <a
              href="#about"
              className={styles.mobileNavLink}
            >
              {aboutLabel}
            </a>
          </div>
          
          {/* Insights Section */}
          <div className={`${styles.mobileDivider} ${styles.mobileSection}`}>
            <h3 className={styles.mobileSectionTitle}>
              {insightsLabel}
            </h3>
            <ul className={styles.mobileSectionList}>
              {insightsItems.map((item: string, i: number) => (
                <li key={i}>
                  <a href="#" className={styles.mobileLink}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* CTA Button */}
          <div className={styles.mobileDivider}>
            <GradientButton className="w-full" size="sm">
              {letsTalkLabel}
            </GradientButton>
          </div>
        </div>
      </div>
    </div>
  );
};
