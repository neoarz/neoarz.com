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
	bio: string;
	languageName: string;
	socials: SocialLink[];
	projects: ProjectItem[];
}
