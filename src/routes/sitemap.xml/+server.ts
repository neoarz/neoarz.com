export function GET() {
	const pages = ["https://neoarz.com/"];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(url) => `  <url>
    <loc>${url}</loc>
  </url>`,
	)
	.join("\n")}
</urlset>`;

	return new Response(body, {
		headers: {
			"Content-Type": "application/xml",
		},
	});
}
