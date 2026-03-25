export interface SocialLink {
	id: string;
	platform: string;
	href: string;
	displayText: string;
}

export interface ProjectItem {
	id: string;
	name: string;
	description: string;
	href?: string;
}

export interface PortfolioData {
	name: string;
	handle: string;
	handleUrl: string;
	bio: string;
	languageName: string;
	footerText: string;
	socials: SocialLink[];
	projects: ProjectItem[];
}
