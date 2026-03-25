<script lang="ts">
	import { asset } from '$app/paths';
	import { portfolio } from '$lib/data/portfolio';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	const siteUrl = 'https://neoarz.com';
	const appleTouchIcon = asset('/apple-touch-icon.png');
	const socialImageUrl = new URL(appleTouchIcon, siteUrl).toString();

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={portfolio.socialSiteName} />
	<meta property="og:title" content={portfolio.socialTitle} />
	<meta property="og:description" content={portfolio.socialDescription} />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:image" content={socialImageUrl} />
	<meta property="og:image:width" content="180" />
	<meta property="og:image:height" content="180" />
	<meta property="og:image:alt" content={portfolio.socialTitle} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={portfolio.socialTitle} />
	<meta name="twitter:description" content={portfolio.socialDescription} />
	<meta name="twitter:image" content={socialImageUrl} />
	<meta name="twitter:image:alt" content={portfolio.socialTitle} />
</svelte:head>

{@render children()}
