<script lang="ts">
	import { asset } from '$app/paths';
	import { portfolio } from '$lib/data/portfolio';
	import './layout.css';
	import type { Snippet } from 'svelte';

	const siteUrl = 'https://neoarz.com';
	const favicon32 = asset('/favicon-32x32.png');
	const favicon192 = asset('/favicon-192x192.png');
	const appleTouchIcon = asset('/apple-touch-icon.png');
	const socialImageUrl = new URL(asset('/avatar.png'), siteUrl).toString();

	let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
	<link rel="icon" href={asset('/favicon.ico')} sizes="any" />
	<link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
	<link rel="icon" type="image/png" sizes="192x192" href={favicon192} />
	<link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
	<link rel="manifest" href={asset('/site.webmanifest')} />
	<meta name="theme-color" content="#0a0a0a" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={portfolio.socialTitle} />
	<meta property="og:description" content={portfolio.socialDescription} />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:image" content={socialImageUrl} />
	<meta property="og:image:width" content="512" />
	<meta property="og:image:height" content="512" />
	<meta property="og:image:alt" content={portfolio.socialTitle} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={portfolio.socialTitle} />
	<meta name="twitter:description" content={portfolio.socialDescription} />
	<meta name="twitter:image" content={socialImageUrl} />
	<meta name="twitter:image:alt" content={portfolio.socialTitle} />
</svelte:head>

{@render children()}
