import type { PortfolioData } from "$lib/types/portfolio";

export const portfolio: PortfolioData = {
	name: "Nazeef",
	handle: "neoarz",
	bio: "I'm a first-year college student pursuing CIS (Cybersecurity) with a minor in Statistics and Quantitative Modeling. I'm mostly interested in Darwin platforms, but have been learning about software on other platforms as well.",
	languageName: "نظيف",
	socials: [
		{
			id: "twitter",
			platform: "[Elon Platform]",
			href: "https://x.com/neoarz",
			displayText: "x.com/neoarz",
		},
		{
			id: "github",
			platform: "GitHub",
			href: "https://github.com/neoarz",
			displayText: "github.com/neoarz",
		},
		{
			id: "email",
			platform: "Email",
			href: "mailto:neoarz@proton.me",
			displayText: "neoarz[at]proton[dot]me",
		},
		{
			id: "discord",
			platform: "Discord",
			href: "https://discord.com/users/218675193592283137",
			displayText: "discord.com/users/neoarz",
		},
	],
	projects: [
		{
			id: "sidestore",
			name: "Sidestore",
			description:
				"SideStore is an untethered, community driven alternative app store for non-jailbroken iOS devices.",
			href: "https://sidestore.io",
		},
		{
			id: "countdown",
			name: "Countdown",
			description:
				"If you could know exactly when you're going to die, would you want to know?",
			href: "https://github.com/neoarz/countdown-app",
		},
		{
			id: "stikdebug",
			name: "StikDebug",
			description:
				"An on-device debugger/JIT enabler for iOS versions 17.4+, powered by idevice.",
			href: "https://github.com/StephenDev0/StikDebug",
		},
		{
			id: "syntrel",
			name: "Syntrel",
			description:
				"A multi-purpose discord bot used in servers like SideStore, iDevice, MeloNX and more.",
			href: "https://github.com/neoarz/syntrel",
		},
		{
			id: "neo64fetch",
			name: "neo64fetch",
			description:
				"A neofetch alternative written in rust using kitty graphics protocol.",
			href: "https://github.com/neoarz/neo64fetch",
		},
	],
};
