import { resolve } from '$app/paths';
import { portfolio } from '#lib/data/portfolio.js';

export const prerender = true;
export const trailingSlash = 'never';

export function GET() {
	const siteUrl = new URL(resolve('/'), 'https://neoarz.com').href;

	return Response.json({
		component: {
			type: 17,
			accent_color: null,
			components: [
				{
					type: 9,
					components: [
						{
							type: 10,
							content: `## [hello, i'm ${portfolio.name}](${siteUrl})\n${portfolio.bioLines[0]}`
						},
						{
							type: 10,
							content:
								'-# [github](https://github.com/neoarz) / [twitter](https://x.com/neoarz) / [email](mailto:mail@neoarz.com) / [terminal](https://neoarz.dev)'
						}
					],
					accessory: {
						type: 11,
						media: { url: new URL('avatar.png', siteUrl).href },
						description: portfolio.socialTitle
					}
				}
			]
		}
	});
}
