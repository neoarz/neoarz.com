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

<main class="mx-auto grid min-h-[100svh] w-full max-w-240 place-items-center px-6 py-8 sm:px-8 sm:py-10">
	<div class="w-full">
		<IntroBlock
			name={portfolio.name}
			handle={portfolio.handle}
			bio={portfolio.bio}
			languageName={portfolio.languageName}
		/>

		<SocialLinks socials={portfolio.socials} />
		<ProjectList projects={portfolio.projects} />
	</div>
</main>
