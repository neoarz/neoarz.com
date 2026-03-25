<script lang="ts">
	import IntroBlock from '$lib/components/portfolio/IntroBlock.svelte';
	import ProjectList from '$lib/components/portfolio/ProjectList.svelte';
	import SocialLinks from '$lib/components/portfolio/SocialLinks.svelte';
	import { portfolio } from '$lib/data/portfolio';
</script>

<svelte:head>
	<title>{portfolio.name} | Portfolio</title>
	<meta name="description" content={portfolio.bio} />
</svelte:head>

<main class="mx-auto w-full max-w-240 px-6 py-4 sm:px-8">
	<div class="translate-y-20 sm:translate-y-28">
		<IntroBlock
			name={portfolio.name}
			handle={portfolio.handle}
			handleUrl={portfolio.handleUrl}
			bio={portfolio.bio}
			languageName={portfolio.languageName}
		/>

		<SocialLinks socials={portfolio.socials} />
		<ProjectList projects={portfolio.projects} />

		<footer class="mt-6 border-t border-(--border) pt-4 text-center text-(--muted)">
			{portfolio.footerText}
		</footer>
	</div>
</main>
