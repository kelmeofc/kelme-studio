"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { LanguageSelector } from "@/components/language-selector";
import { Link } from "@/i18n/navigation";
import { NavItem, MegaDropdown } from "@/components/ui/mega-dropdown";
import { useTranslations, useMessages } from "next-intl";
import { getServiceIcon, getCategoryDefaultIcon } from "./icon-mapper";
import { MobileMenu } from "./mobile-menu";
import Image from "next/image";

/**
 * Navbar principal do site
 * Versão simplificada e otimizada
 */
export function Navbar() {
	// State hooks
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const [isScrolled, setIsScrolled] = useState(false);

	// Get translations and menu data
	const t = useTranslations();
	const messages: any = useMessages();
	const menus = messages.navbar.menus;

	// Process menu data
	const servicesSections = [
		{
			title: menus.development.title,
			items: menus.development.items.map((item: string) => ({
				label: item,
				icon: getServiceIcon(item, getCategoryDefaultIcon("development")),
			})),
		},
		{
			title: menus.marketing.title,
			items: menus.marketing.items.map((item: string) => ({
				label: item,
				icon: getServiceIcon(item, getCategoryDefaultIcon("marketing")),
			})),
		},
		{
			title: menus.strategy.title,
			items: menus.strategy.items.map((item: string) => ({
				label: item,
				icon: getServiceIcon(item, getCategoryDefaultIcon("strategy")),
			})),
		},
		{
			title: menus.video.title,
			items: menus.video.items.map((item: string) => ({
				label: item,
				icon: getServiceIcon(item, getCategoryDefaultIcon("video")),
			})),
		},
	];

	// Process section data
	const workSections = [
		{
			title: "",
			items: menus.work.map((item: string) => ({ label: item })),
		},
	];

	const insightsSections = [
		{
			title: "",
			items: menus.insights.map((item: string) => ({ label: item })),
		},
	];

	// Handle scroll effect
	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 10);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Handle dropdown toggle with simplified event handling
	const handleDropdownToggle = (dropdown: string) => {
		setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
	};

	// Auxiliar para cliques em itens de dropdown
	const handleItemClick = (e: React.MouseEvent, dropdown: string) => {
		e.stopPropagation();
		handleDropdownToggle(dropdown);
	};

	// Close all dropdowns when clicking outside
	useEffect(() => {
		if (!activeDropdown) return;
		const handleClickOutside = () => setActiveDropdown(null);
		document.addEventListener("click", handleClickOutside);
		return () => document.removeEventListener("click", handleClickOutside);
	}, [activeDropdown]);

	// Define classes baseadas no estado de scroll
	const containerClass = isScrolled
		? "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0F0E0D]/95 backdrop-blur-xl border-b border-[#27D182]/20"
		: "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent border-b border-transparent";

	// Estilos embutidos
	const styles = {
		innerWrapper: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
		flexContainer: "flex items-center justify-between h-20",
		logoContainer: "flex items-center space-x-1",
		logoImage: "h-8 w-8",
		logoText:
			"font-bold text-lg text-[#F7F7F7] font-satoshi uppercase tracking-wider",
		logoAccent: "font-light text-[#27D182]",
		desktopNav: "hidden md:flex items-center space-x-8",
		rightSide: "flex items-center space-x-4",
		mobileMenuBtn:
			"md:hidden text-[#F7F7F7] hover:text-[#27D182] transition-colors",
		mobileMenuIcon: "h-6 w-6",
	};

	return (
		<>
			<nav className={`${containerClass} navbar-main`}>
				<div className={styles.innerWrapper}>
					<div className={styles.flexContainer}>
						{/* Logo */}
						<Link href="/" className={styles.logoContainer}>
							<Image
								src="/kelme-icon.svg"
								alt="Eagle Icon"
								width={32}
								height={32}
								className={styles.logoImage}
								priority
							/>
							<div className={styles.logoText}>
								KELME<span className={styles.logoAccent}>STUDIO</span>
							</div>  
						</Link>

						{/* Desktop Menu */}
						<div className={styles.desktopNav}>
							{/* Services NavItem */}
							<div onClick={(e) => handleItemClick(e, "services")}>
								<NavItem
									label={t("navbar.services").toUpperCase()}
									isActive={activeDropdown === "services"}
									sections={servicesSections}
								/>
							</div>

							{/* Work NavItem */}
							<div onClick={(e) => handleItemClick(e, "work")}>
								<NavItem
									label={t("navbar.work").toUpperCase()}
									isActive={activeDropdown === "work"}
									sections={workSections}
								/>
							</div>

							{/* About NavItem */}
							<NavItem label={t("navbar.about").toUpperCase()} href="#about" />

							{/* Insights NavItem */}
							<div onClick={(e) => handleItemClick(e, "insights")}>
								<NavItem
									label={t("navbar.insights").toUpperCase()}
									isActive={activeDropdown === "insights"}
									sections={insightsSections}
								/>
							</div>
						</div>

						{/* Right Side */}
						<div className={styles.rightSide}>
							<div className="hidden md:flex">
								<LanguageSelector />
							</div>
							<Link href="/contact">
								<GradientButton className="hidden md:block" size="sm">
									{t("navbar.letsTalk").toUpperCase()}
								</GradientButton>
							</Link>
							<button
								onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
								className={styles.mobileMenuBtn}
								aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
							>
								<Menu className={styles.mobileMenuIcon} />
							</button>
						</div>
					</div>
				</div>

				{/* Mega Dropdowns */}
				<MegaDropdown
					isOpen={activeDropdown === "services"}
					sections={servicesSections}
					onClose={() => setActiveDropdown(null)}
				/>

				<MegaDropdown
					isOpen={activeDropdown === "work"}
					sections={workSections}
					onClose={() => setActiveDropdown(null)}
				/>

				<MegaDropdown
					isOpen={activeDropdown === "insights"}
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
	);
}
