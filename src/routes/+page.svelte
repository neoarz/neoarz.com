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

<main class="mx-auto flex min-h-screen w-full max-w-240 items-center px-6 py-6 sm:px-8">
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
