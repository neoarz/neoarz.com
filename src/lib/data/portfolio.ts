import type { PortfolioData } from '$lib/types/portfolio';

export const portfolio: PortfolioData = {
	name: 'nazeef',
	handle: 'neoarz',
	bioLines: [
		'second-year college student pursuing CIS (cybersecurity) with a minor in statistics and quantitative modeling.',
		'mostly interested in darwin platforms, but learning about software on other platforms too.'
	],
	seoTitle: 'Nazeef Z.',
	seoDescription:
		"I'm a second-year college student pursuing CIS (Cybersecurity) with a minor in Statistics and Quantitative Modeling.",
	socialTitle: 'Nazeef Z.',
	socialDescription: 'Second year college student.',
	socials: [
		{ id: 'email', label: 'mail', href: 'mailto:mail@neoarz.com' },
		{ id: 'twitter', label: 'twitter', href: 'https://x.com/neoarz' },
		{ id: 'github', label: 'github', href: 'https://github.com/neoarz' },
		{ id: 'discord', label: 'discord', href: 'https://discord.com/users/218675193592283137' }
	],
	projects: [
		{
			id: 'sidestore',
			name: 'sidestore',
			description:
				'an untethered, community-driven alternative app store for non-jailbroken iOS devices.',
			href: 'https://sidestore.io'
		},
		{
			id: 'stikdebug',
			name: 'stikdebug',
			description: 'an on-device debugger/JIT enabler for iOS 17.4+, powered by idevice.',
			href: 'https://github.com/StikDebug/StikDebug'
		},
		{
			id: 'syntrel',
			name: 'syntrel',
			description:
				'a multi-purpose discord bot used in servers like SideStore, idevice, and MeloNX.',
			href: 'https://github.com/neoarz/syntrel'
		},
		{
			id: 'countdown',
			name: 'countdown',
			description: "if you could know exactly when you're going to die, would you want to know?",
			href: 'https://github.com/neoarz/countdown-app'
		},
		{
			id: 'neo64fetch',
			name: 'neo64fetch',
			description: 'a neofetch alternative written in rust using the kitty graphics protocol.',
			href: 'https://github.com/neoarz/neo64fetch'
		}
	]
};
