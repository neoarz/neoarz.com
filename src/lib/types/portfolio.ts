export interface SocialLink {
	id: string;
	label: string;
	href: string;
}

export interface ProjectItem {
	id: string;
	name: string;
	description: string;
	href: string;
}

export interface PortfolioData {
	name: string;
	handle: string;
	bioLines: string[];
	seoTitle: string;
	seoDescription: string;
	socialTitle: string;
	socialDescription: string;
	socials: SocialLink[];
	projects: ProjectItem[];
}
