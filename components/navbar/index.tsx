"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { GradientButton } from "@/components/ui/gradient-button"
import { LanguageSelector } from "@/components/language-selector"
import { Link } from '@/i18n/navigation'
import { NavItem, MegaDropdown } from "@/components/ui/mega-dropdown"
import { useNavMenus } from "./use-nav-menus"
import { navbarStyles as styles } from "./styles"
import { MobileMenu } from "./mobile-menu"

export function Navbar() {
  // State hooks
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  
  // Get menu data and translations
  const { servicesSections, workSections, insightsSections, menus, t } = useNavMenus()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  // Handle dropdown toggle
  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }
  
  // Close all dropdowns when clicking outside
  useEffect(() => {
    if (!activeDropdown) return
    
    const handleClickOutside = () => {
      setActiveDropdown(null)
    }
    
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [activeDropdown])

  // Helper for dropdown item clicks
  const handleItemClick = (e: React.MouseEvent, dropdown: string) => {
    e.stopPropagation()
    handleDropdownToggle(dropdown)
  }

  return (
    <>
      <nav className={styles.container(isScrolled)}>
        <div className={styles.innerWrapper}>
          <div className={styles.flexContainer}>
            {/* Logo */}
            <Link href="/" className={styles.logoContainer}>
              <img src="/kelme-icon.svg" alt="Kelme Studio" className={styles.logoImage} />
              <div className={styles.logoText}>
                KELME<span className={styles.logoAccent}>STUDIO</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className={styles.desktopNav}>
              {/* Services NavItem */}
              <div onClick={(e) => handleItemClick(e, 'services')}>
                <NavItem 
                  label={t("navbar.services").toUpperCase()} 
                  isActive={activeDropdown === 'services'}
                  sections={servicesSections}
                />
              </div>
              
              {/* Work NavItem */}
              <div onClick={(e) => handleItemClick(e, 'work')}>
                <NavItem 
                  label={t("navbar.work").toUpperCase()}
                  isActive={activeDropdown === 'work'}
                  sections={workSections}
                />
              </div>

              {/* About NavItem */}
              <NavItem 
                label={t("navbar.about").toUpperCase()}
                href="#about"
              />

              {/* Insights NavItem */}
              <div onClick={(e) => handleItemClick(e, 'insights')}>
                <NavItem 
                  label={t("navbar.insights").toUpperCase()}
                  isActive={activeDropdown === 'insights'}
                  sections={insightsSections}
                />
              </div>
            </div>

            {/* Right Side */}
            <div className={styles.rightSide}>
              <div className="hidden md:flex">
                <LanguageSelector />
              </div>
              <GradientButton className="hidden md:block" size="sm">
                {t("navbar.letsTalk").toUpperCase()}
              </GradientButton>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={styles.mobileMenuBtn}
              >
                {mobileMenuOpen 
                  ? <X className={styles.mobileMenuIcon} /> 
                  : <Menu className={styles.mobileMenuIcon} />
                }
              </button>
            </div>
          </div>
        </div>
        
        {/* Mega Dropdowns */}
        <MegaDropdown 
          isOpen={activeDropdown === 'services'} 
          sections={servicesSections}
          onClose={() => setActiveDropdown(null)}
        />
        
        <MegaDropdown 
          isOpen={activeDropdown === 'work'} 
          sections={workSections}
          onClose={() => setActiveDropdown(null)}
        />
        
        <MegaDropdown 
          isOpen={activeDropdown === 'insights'} 
          sections={insightsSections}
          onClose={() => setActiveDropdown(null)}
        />
      </nav>

      {/* Mobile Menu Component */}
      <MobileMenu 
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        servicesSections={servicesSections}
        workItems={menus.work}
        insightsItems={menus.insights}
        aboutLabel={t("navbar.about").toUpperCase()}
        letsTalkLabel={t("navbar.letsTalk").toUpperCase()}
        servicesLabel={t("navbar.services")}
        workLabel={t("navbar.work")}
        insightsLabel={t("navbar.insights")}
      />
    </>
  )
}
