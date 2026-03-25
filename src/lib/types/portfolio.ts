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
	seoTitle: string;
	seoDescription: string;
	socialTitle: string;
	socialDescription: string;
	socialSiteName: string;
	languageName: string;
	socials: SocialLink[];
	projects: ProjectItem[];
}
