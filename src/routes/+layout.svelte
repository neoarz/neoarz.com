<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
	<meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet" />
</svelte:head>
{@render children()}
